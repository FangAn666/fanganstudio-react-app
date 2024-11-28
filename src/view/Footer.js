import React from 'react';
import jsonData from '../contents/Inteoduce.json'
import { useState,useEffect } from 'react';
import './FooaNav.css';
// import { Link } from 'react-router-dom';

function Footer(){
    const [data, setData] = useState(null);
    useEffect(() => {
      setData(jsonData); 
    }, []);
    return(
        
            <footer class="bg-light text-center py-3 foo_font">

                <div class="container">
                    <h5 class="text-uppercase mb-3">
                        Follow // Contact Us

                    </h5>
                    {data&&(
                        <div class="mb-4">
                            <a href={data.content.ch.Youtube.c1} class="text-dark me-3"><i class="bi bi-youtube fs-4"></i></a>
                            <a href={data.content.ch.facebook} class="text-dark me-3"><i class="bi bi-facebook fs-4"></i></a>
                            <a href={data.content.ch.threads} class="text-dark me-3"><i class="bi bi-threads fs-4" ></i></a>
                            <a href={data.content.ch.instagram} class="text-dark me-3"><i class="bi bi-instagram fs-4"></i></a>
                            <a href={"mailto:"+data.content.contact.email} class="text-dark me-3" ><i class="bi bi-envelope-at-fill  fs-4"></i></a>
            
                        
                        </div>
                    )}
                    <div class="text-center">
                        © 2024 Fang An Studio
                    </div>

                </div>
            </footer>
        
    )
}

export default Footer;

