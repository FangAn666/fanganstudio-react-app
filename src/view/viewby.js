import React from 'react';

const Viewby = ({title,SetVanue}) => {
    
    
    return (
        <div className='viewby'>
            <div className='v_box'>
                <div className='v_title' >
                    <h1>{title}</h1>
                </div>
                
                <div className='v_title'>
                    {SetVanue}
                </div>
            
            </div>    
            <hr/>
        </div>
        
    );
};

export default Viewby;