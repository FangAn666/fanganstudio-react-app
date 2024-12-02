import React,{useEffect, useState } from 'react';
import './Collection.css';
import {Viewbox,ViewboxShowAll} from '../view/viewbox';

//data from firebase and json
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase';

 
function Collection () {

    const [data, setData] = useState(null);             //firebase outset

    const [loading, setLoading] = useState(false);      // loading
    const [error, setError] = useState(null);           // error


    const [selectedItem, setSelectedItem] = useState(null);    //view mode

 // 获取外部数据
 useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "base_con");  // 获取 Firestore 中的 base_con 集合
        const querySnapshot = await getDocs(collectionRef);
        
        const fetchedData = [];

        // 遍历所有文档并获取每个文档下的 list 数据
        for (const doc of querySnapshot.docs) {
          const projectData = {
            id: doc.id,
            name: doc.data().name,
            list: await fetchListData(doc.id),  // 获取每个文档下的 list 数据
          };
          fetchedData.push(projectData);
        }
        console.log(collectionRef);
        console.log(fetchedData);

        setData(fetchedData);  // 设置获取的数据
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    // 获取文档下的 list 数据
    const fetchListData = async (docId) => {
      const listCollectionRef = collection(db, "base_con", docId, "list");  // 获取 list 集合
      const listSnapshot = await getDocs(listCollectionRef);
      return listSnapshot.docs.map((doc) => doc.data());  // 返回 list 中的所有项目
    };

    fetchData();}, []);

 

    const handleBoxClick = (item) => {
        setSelectedItem(item); // 設置選中的項目
    };

    const closeModal = () => {
        setSelectedItem(null); // 清空選中的項目
    }; 

    //read json
   

    return( 
        
        <div className='contant p-3'>
            <h5 className='furnish'>正在調整中</h5>
            <div className='col_title'>
                <h2>作品集 Collection</h2>
            </div>


            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className='col_boby'>

            {Array.isArray(data) && data.length > 0 ?(
                <div>
                    {data.map((item) => (
                        <Viewbox
                            key={item.id}
                            title={item.name}  // 显示项目名称（it_project 或 vc_project）
                            dataList={item.list}  // 传递项目的 list 数组
                            onBoxClick={handleBoxClick}  // 点击项目时，显示详情
                        />
                    ))}
                </div>
            ):(
                <div>
                    <p>No projects available.</p>
                </div>
            )}
            </div>

            {selectedItem && (
                <ViewboxShowAll selectedItem={selectedItem} onClose={closeModal} />
            )}
            <h5 className='furnish'>正在調整中</h5>

        </div>
)};

export default Collection;
