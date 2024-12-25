import React,{useState} from 'react';
import './viewby.css';


function Viewby({key,title,dataList,onBoxClick,language}) {
    useState(null);
    console.log(dataList);
    
    return (
        <div className='viewby'>
                <div className='v_title' >
                    <h1>{title}</h1>
                </div>
                <hr/>
                
                <div className='v_list_box'>
                    {dataList?.length > 0 &&(

                        dataList.map((item)=> {
                            console.log(item);
                            const allKeysAndValuesValid = item && 
                                Object.keys(item).length > 0 && // 檢查是否有任何 key
                                Object.values(item).every(value => value !== null && value !== undefined && value !== '');
                

                            if (!allKeysAndValuesValid) return null; // 跳過無效的項目
                
                           return(
                                <div
                                    className='v_list'
                                    id={`item-${item.id}`}
                                    key={item.id}
                                    onClick={() => onBoxClick(item,language)}
                                    
                                >
                                    <h6>{language === "cn" ? item.title?.cn:item.title?.en}</h6>
                                    <p>{language === "cn" ? item.content?.cn:item.content?.en}</p>
                                </div>

                           )
                            
                        })
                    )}
                    
                    
                </div>


            
        </div>
        
    );
};



export default Viewby;