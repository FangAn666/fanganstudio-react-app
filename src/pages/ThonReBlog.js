import React from 'react';
import './ThonReBlog.css';
import Viewby from '../view/viewby';
function ThonReBlog () {
    const dataList = [
        { id: 1, title: 'Venue A', value: 'Venue A' },
        { id: 2, title: 'Venue B', value: 'Venue B' },
        { id: 3, title: 'Venue C', value: 'Venue C' },
    ];

    return(
        
        <div className='contant p-3'>
            <h5 className='furnish'>正在調整中</h5>
            <div className='thon_title'>
                <h2>歡迎來到 ThonReBlog</h2>
                {/* <h3>Welcome to the ThonReBlog Page</h3> */}
                
            </div>
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
            <h5 className='furnish'>正在調整中</h5>
        </div>
        
    
    
    
    
    )
};

export default ThonReBlog;
