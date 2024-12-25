import React from "react";
import { useLocation } from "react-router-dom";
import "./viewbypage.css";

function ViewbyPage() {
    const location = useLocation();
    const dataList = location.state?.dataList;
    const language = location.state?.language;
    console.log(dataList);
    console.log(language);

    return (
        <div className="viewbypage">
            <div className="container con_01">
                <div className="title">
                    <h1>{language === "cn" ? dataList.title?.cn : dataList.title?.en}</h1>
                </div>

                <div className ="contant" >
                    {language === "cn" ? dataList.content?.cn : dataList.content?.en}
                </div>

            </div>

            <div className="container btn-back">
                    <div className="btn" onClick={() => window.history.back()}>Back</div>
            </div>
        
        </div>
    );
}

export default ViewbyPage;