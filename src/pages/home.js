import React,{useState,useEffect} from 'react';
import './home.css'
import jsonData from '../contents/Inteoduce.json'
// import { t } from 'i18next';

const Home = () => {

    // reads json
    const [data, setData] = useState(null);

    useEffect(() => {
      setData(jsonData); 
    }, []);
    
// 。。。。。。。。。。。。。。。。。。。。。。。。

    // call the button function
    const openFacebookMessenger = (SetVanue) => {
        const message = encodeURIComponent("Hello, I come from your website");
        
        window.open('https://m.me/'+SetVanue+'?text='+message, '_blank'); // 替換為您的 Facebook 頁面名稱或ID
    };

    // open the Instagram 
    const openInstagramDM = (SetVanue) => {
        window.open('https://www.instagram.com/'+SetVanue, '_blank');
    };

    // use the Email 
    const openEmail = (SetVanue) => {
        window.open('mailto:'+SetVanue , '_blank'); // 替換為您的郵件地址
    };

// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。

    //set the language of chinese with first
    const [isChinese, setIsChinese] = useState(true);
    //fadeIn
    const [fadeIn, setFadeIn] = useState(true);

    //follower the language 
    const toggleLanguage = () => {
        setFadeIn(false);
        setTimeout(() => {
            setIsChinese(!isChinese);
            setFadeIn(true);
      },300);
        
    };
    
    return (
    <div className='mian_contant p-3'>
        {data&&(
            <div className='About '>
                <div className='card mb-3'>
                    <div className='card-header'>
                        <h2 className='name'>簡介 Introduction</h2>
                    </div>

                    <div className='card-body container justify-content-center align-items-center  '>
                        
                        <div className=' row mb-2'>
                            <div className='col circle-container'>
                                <div className='circle'>
                                    <div className='left-half'>
                                        <img src='img/fangan_waxsmts.webp' alt="fangan"></img>
                                    </div>
                                    
                                    <div className='right-half'>
                                        <img src='img/dwd.webp' alt='image2'></img>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='name_card co-auto'>
                                <div className='row'>
                                    <p className=' col name'>中: {data.content.name_ou.CN}</p>
                                    <p className=' col name'>EN: {data.content.name_ou.EN}</p>
                                    
                                </div>
                                <hr></hr>
                                <div className='row'>
                                    <div className='col'>
                                        <p className=''>真實名字</p>
                                        <p className=''>Real Name</p>
                                    </div>
                                    
                                    <div className='col'>
                                        <p className=''> 中 :{data.content.name_og.CN}</p>
                                        <p className=''> EN :{data.content.name_og.EN}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <hr></hr>
                        <div className='container row'>
                            
                            <div className='col'>
                                <div className='row'>
                                    <div className='col'>
                                        <table>
                                            <tr >
                                                <td>國籍</td>
                                                <td> {data.content.About.Country}</td>
                                            </tr>
                                            <tr>
                                                <td>學歷<br/>Education</td>
                                                <td> {data.content.About.CL}<br/> {data.content.About.EL}

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Youtube</td>
                                                <td><line href={data.content.ch.Youtube.c1}>{data.content.contact.YT}</line></td>
                                                
                                            </tr>
                                            <tr >
                                                <td>Facebook</td>
                                                <td><line href={data.content.ch.instagram}>{data.content.contact.FB}</line></td>
                                            </tr>
                                            <tr className='.trline' >
                                                <td>IG & Threads</td>
                                                <td><line href={data.content.ch.instagram}>@{data.content.contact.IG}</line></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='col '>
                                        <div className='d-flex align-items-center'>
                                            <h5 className='about_me'>關於我 About Me</h5>
                                            
                                            <div className="d-flex align-items-center ms-3">
                                                <span className="me-1">CN</span>
                                                <label className="form-check form-switch m-0 ">        
                                                        <input 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            id="languageSwitch" 
                                                            onChange={toggleLanguage} 
                                                            checked={!isChinese} 
                                                        />
                                                </label>
                                                <span className="ms-1">EN</span>
                                            </div>
                                        
                                        </div>

                                       <div  className="about-content mt-3 mx-autoright">
                                            <p className={fadeIn? 'fade-in' : ''}>
                                                {isChinese ? (data.content.About.Ct) : ( data.content.About.Ct_En)}
                                            </p>
                                       </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>
                
                <div className='card mb-3'>
                    <div className='card-header'>
                        <h2 className='name'>可以為你做什麼? Why can I do whith you?</h2>
                    </div>

                    <div className='card-body '>
                        
                        <ol class="list-group list-group-numbered list-group-flush">
                            <li class="list-group-item">{data.content.Skils.vc[0]} {data.content.Skils.vc[1]}</li>
                            <li class="list-group-item">{data.content.Skils.ITqust[0]} {data.content.Skils.ITqust[1]}</li>
                            <li class="list-group-item">{data.content.Skils.ITdevPY[0]} {data.content.Skils.ITdevPY[1]}</li>
                            <li class="list-group-item">{data.content.Skils.ITdevT[0]} {data.content.Skils.ITdevT[1]}</li>
                            <li class="list-group-item">{data.content.Skils.ITdevJ[0]} {data.content.Skils.ITdevJ[1]}</li>
                        </ol>
                        <br/>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p>詳細可以看我的 <a href="/colloection"><button className='btn btn-sm'>作品集</button></a></p>
                        </div>
                    </div>    
                </div>

                <div className='card mb-3'>
                    <div className='card-header'>
                        <h2 className='name'>聯絡我 Contact Me</h2>
                    </div>

                    <div className='card-body '>
                        <div className='contact_contant p-3'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p className='me-3'>{data.content.contact.CN[0]}<br/>{data.content.contact.EN[0]}</p>
                                <p className='ms-3'>{data.content.contact.CN[1]}<br/>{data.content.contact.EN[1]}</p>                               
                            </div>
                        </div>
                        
                        <div className='contact_btn d-flex justify-content-center align-items-center mb-2'>
                            <div className=''>
                                <button onClick={()=>openFacebookMessenger(data.content.contact.FB)} className='btn btn-sm'>
                                    <i class="bi bi-messenger fs-5 p-5 "> Messenger</i>
                                </button>
                            </div>

                            <div className=''>
                                <button onClick={()=>openInstagramDM(data.content.contact.IG)} className='btn btn-sm'>
                                <i class="bi bi-instagram fs-5 p-5 "> Instagram</i>
                                </button>
                            </div>

                            <div className=''>
                                <button onClick={()=>openEmail(data.content.contact.email)} className='btn btn-sm'>
                                <i class="bi bi-envelope-at-fill fs-5 p-5"> Email</i>
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        )}

        
    </div>
    );
};

export default Home;
