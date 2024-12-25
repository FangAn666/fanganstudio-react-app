import React, { useEffect, useState } from 'react';
import './ThonReBlog.css';
import Viewby from '../view/viewby';
import { useNavigate } from 'react-router-dom';

//data from firebase and json
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase';


function ThonReBlog () {
    //set data from firebase 
    const [data, setData] = useState(null);             //firebase outset

    const [loading, setLoading] = useState(false);      // loading
    const [error, setError] = useState(null);           // error

    const [language, setLanguage] = useState("cn");
  

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const dataRef = collection(db, "base_trb");  // 获取 Firestore 中的 collection 集合
                const querySnapshot = await getDocs(dataRef);
                
                const fetchedData = [];

                // 遍历所有文档并获取每个文档下的 list 数据
                for (const doc of querySnapshot.docs) {
                    const projectData = {
                        id: doc.id,
                        title: doc.data().name,
                        list: await fetchListData(doc.id),  // 获取每个文档下的 list 数据
                    };
                    fetchedData.push(projectData);
                }
                setData(fetchedData);

                // console.log(dataRef);
                // console.log(fetchedData);
           
            }catch(error){
                setError("Error fetching data");
            }finally{
                setLoading(false);
            }
        };

        const fetchListData = async (docId) => {
            const listCollectionRef = collection(db, "base_trb", docId, "list");  // 获取 list 集合
            const listSnapshot = await getDocs(listCollectionRef);
            return listSnapshot.docs.map((doc) => doc.data());  // 返回 list 中的所有项目
        };



        fetchData();}, []);

        const navigate = useNavigate();

        const handleBoxClick = (item,language) => {
            navigate("/trgby",{state:{dataList:item,language:language}});
            
        };
  
    return(
        
        <div className='contant p-3'>
            <h5 className='furnish'>正在調整中</h5>
            <div className='thon_title'>
                <h2>{language === "cn" ? "歡迎來到 ThonReBlog" : "Welcome to the ThonReBlog Page"}</h2>
                 
                
            </div>
            <div className="language-switch">
                <span className="me-1">CN</span>
                    <label className="form-check form-switch m-0 ">        
                        <input 
                                className="form-check-input"
                                type="checkbox"
                                id="languageSwitch"
                                checked={language === "en"}
                                onChange={() => setLanguage(language === "cn" ? "en" : "cn")}                               
                        />
                    </label>
                <span className="ms-1">EN</span>
            </div>
                
            <br/>
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className='thon_boby '>
            
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item) => (
                        <Viewby 
                            key         =   {item.id} 
                            title       =   {item.title} 
                            dataList    =   {item.list} 
                            language    =   {language}
                            onBoxClick  =   {handleBoxClick}
                        />
                        
                    ))
                    
                ) : (
                    <div>No data available</div>
                )}
                
                
            
            </div>
            <h5 className='furnish'>正在調整中</h5>
        </div>
        
    
    
    
    
    )
};

export default ThonReBlog;
