import React from "react";
import "./viewbox.css";

//box 
function Viewbox({ title,dataList,onBoxClick }) {
    return (
        <div className="viewbox">
            <h3>{title}</h3>
            <div className="box-list ">
                
                {dataList && dataList.length > 0 ? (
                    dataList.map((item) => (
                        <div 
                            key={item.name} 
                            className="box"
                            onClick={() => onBoxClick(item)} 
                        >
                            <h4>{item.name}</h4>
                        </div>
                    ))
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
        </div>
    );
}

//show all 
function ViewboxShowAll({ selectedItem, onClose }) {
    if (!selectedItem) return null; // 如果沒有選擇項目，返回 null
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="close" onClick={onClose}><i className="bi bi-x"></i></div>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.value}</p>
            </div>
        </div>
    );
    }

export { Viewbox, ViewboxShowAll };