import React, { useState } from "react";
import "./viewbox.css";
import { use } from "i18next";

//box 
function Viewbox({ key,title,dataList,onBoxClick }) {
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
                            <p>{item.value}</p>
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
    
    const [language, setLanguage] = useState("cn");
    if (!selectedItem) return null; // 如果沒有選擇項目，返回 null
    
    const renderContent = () => {
        
        const content = selectedItem.content?.[language];
        
        if (selectedItem?.content?.cn) {
            
            return (
                <div className="scrollable-content">

                    <div dangerouslySetInnerHTML={{ __html: content }}/>
                    <br/>
                    <div className="link-container">
                        
                        {                            
                            selectedItem.link.image &&(
                                <div className="image-container"> 
                                    <img 
                                        src={selectedItem.link.image}
                                        alt="Related visual"
                                        style={{ maxWidth: "100%", maxHeight: "200px", marginBottom: "10px" }}
                                    />
                                </div>
                            )                          
                        }
                        
                        {
                            selectedItem.link.video && (
                                <div className="video-container">
                                    <iframe 
                                        width="640" height="360" 
                                        src={"https://www.youtube.com/embed/"+selectedItem.link.video}
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                    </iframe>
                                </div>
                            )
                        }
                        
                        <div>
                            {
                                selectedItem.link.url && (
                                    <a href={selectedItem.link.url}
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        <button>Click To See More</button>
                                    </a>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
                
                
            );
        }
        return <p>內容不可用</p>; // 如果沒有內容，顯示默認消息
    };

    return (
        <div className="modal">
            <div className="modal-content">
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
                

                <div className="close" onClick={onClose}><i className="bi bi-x"></i></div>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.value}</p>
                {renderContent()}
            </div>
        </div>
    );
}

export { Viewbox, ViewboxShowAll };