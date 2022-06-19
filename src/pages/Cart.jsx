import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Cart.css';
export const Cart = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async()=>{
        let res = await axios.get(`http://localhost:8080/cart`);
        console.log(res.data);
        setData(res.data);
    }
  return (
    <div className='cart_container'>
       <div className='cart_details'>
           <div className='cart_img'>
             {data.map((ele)=>{
              return  <img src={ele.image} alt="" />
             })}
            </div>
            <div className='price_container'>
            {data.map((ele)=>{
              return  (
                <div>
                    <p>{ele.name}</p>
                    <p>₹{ele.price}</p>
                </div>
              )
             })}
            </div>
       </div>
       <div className='cart_continue'>
        <button>CONTINUE</button>
       </div>
    </div>
  )
}
