import React,{useEffect, useState } from 'react';
import './Collection.css';
import {Viewbox,ViewboxShowAll} from '../view/viewbox';
import jsonData from '../contents/collection.json';

 
function Collection () {
    // const [selectedItem, setSelectedItem] = useState(null);
    // // 模擬多組不同的數據
    // const categoryA = [
    //     { id: 1, title: "Venue A", value: "Details of Venue A" },
    //     { id: 2, title: "Venue B", value: "Details of Venue B" },
    // ];

    const [data, setData] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        console.log(jsonData);
        setData(jsonData.collection);
    }, []);

    const handleBoxClick = (item) => {
        setSelectedItem(item); // 設置選中的項目
    };

    const closeModal = () => {
        setSelectedItem(null); // 清空選中的項目
    }; 

    //read json
   

    return( 
        
        <div className='contant p-3'>

            <div className='col_title'>
                <h2>作品集 Collection</h2>
            </div>
            <br/>
            <h5 className='furnish'>正在加入fireBase中</h5>
            <br/> 
            <div className='col_boby'>
                {data && (
                    <Viewbox
                        title={data.it_project.name}
                        dataList={data.it_project.list}
                        onBoxClick={handleBoxClick}
                    />
                    
                )}
            <br/>
                {data && (
                    <Viewbox
                        title={data.vc_project.name}
                        dataList={data.vc_project.list}
                        onBoxClick={handleBoxClick}
                    />
                    
                )}
            </div>

            {selectedItem && (
                <ViewboxShowAll selectedItem={selectedItem} onClose={closeModal} />
            )}

        </div>
)};

export default Collection;
