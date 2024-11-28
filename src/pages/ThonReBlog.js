import React from 'react';
import './ThonReBlog.css';
import Viewby from '../view/viewby';
const ThonReBlog = () => {
    const dataList = [
        { id: 1, title: 'Venue A', value: 'Venue A' },
        { id: 2, title: 'Venue B', value: 'Venue B' },
        { id: 3, title: 'Venue C', value: 'Venue C' },
    ];

    return(
        <div className='contant p-3'>
            <div className='thon_title'>
                <h2>歡迎來到 ThonReBlog</h2>
                {/* <h3>Welcome to the ThonReBlog Page</h3> */}
                
            </div>
            <br/>
            <h5 className='furnish'>正在加入fireBase中</h5>
            <br/>
            <div className='thon_boby '>
                
            {dataList.map((data) => (
                    <Viewby 
                        key={data.id} 
                        title={data.title} 
                        SetVanue={(data.value) } 
                    />
                ))}
            </div>
        </div>
        
    
    
    
    
    )
};

export default ThonReBlog;
