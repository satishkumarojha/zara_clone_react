import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Mensdetails.css';
export const Mensdetails = () => {
    const id = useParams();
    const [data,setData] = useState({});
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async()=>{
        let res = await axios.get(`http://localhost:8080/mensdata/${id.id}`);
        // console.log(res.data);
        setData(res.data);
    }
  return (
    <div className='details_container'>
        <div className='details_text'>
            <h3>MATERIALS, CARE AND ORIGIN</h3>
            <h6>MATERIALS</h6>
            <p>We work with monitoring programmes to ensure compliance 
            with safety, health and quality standards for our products. 
            The Green to Wear 2.0 standard aims to minimise the environmental impact
             of textile manufacturing. To that end, we have developed Inditex’s The List </p>
        </div>
        <div className='details_img'>
            <img src={data.image} alt="det" />
        </div>
        <div className='details_desc'>
            <h1>{data.name}</h1>
            <p>Sleeveless choker neck top with a square<br/> neckline. Zip fastening at the back.</p>
            <p>₹{data.price}</p>
            <button>ADD TO BAG</button>
        </div>
    </div>
  )
}
