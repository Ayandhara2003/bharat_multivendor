import React, { useState } from "react";
import "./banner.css";
import { useEffect } from "react";
import axios from "axios";

const Banner = ()=>{
    const [banner,setBanner] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        const getBanner = async()=>{
            try {
                const res = await axios.get("http://localhost:4000/")
                console.log(res.data)
                setBanner(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBanner()
    },[])

    useEffect(()=>{
        if(banner.length === 0) return;
        const interval = setInterval(()=>{
            setCurrent((prev)=> (prev + 1) % banner.length);
        }, 3000);
        return () => clearInterval(interval);
    },[banner])

    return(
        <div id="banner">
            <div className="banner-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                    banner.map((item)=>{
                        return(
                        <div className="banner-slide" key = {item._id}>
                            <img src={item.image} alt="Banner" />
                        </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default Banner;