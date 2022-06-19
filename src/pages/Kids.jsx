import React from 'react'
import "./Mens.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";
export const Kids = () => {
    return (
        <div className="mens_container_main">
          <div className="redmen">
            <img
              src="https://static.zara.net/photos///2022/V/M/1/p/0000/003/541/2/w/1346/0000003541_15_2_1.jpg?ts=1655366995993"
              alt="kids"
            />
          </div>
          <div className="mens_text">
            <h4>NEW CLOTHES FOR BOYS</h4>
            <p>
            A BOY'S WARDROBE MUST MEET AN INFINITE AMOUNT OF DEMANDS AND SO 
            WE HAVE MADE SURE OUR COLLECTION CATERS TO EACH ONE. FROM FORMAL 
            AND SMART OCCASIONS WHEN SHIRTS, TROUSERS AND TIES ARE THE ORDER 
            OF THE DAY, TO WEEKEND PLAY DATES WHEN ONLY T-SHIRTS.
            </p>
          </div>
          <div className="mens_gallery">
            <div className="card_wraper">
              {data.kidsdata.map((mensproduct) => {
                return (
                  <Link style={{ textDecoration: 'none'}} to="/products">
                    <div className="card_container">
                      <div>
                        <img src={mensproduct.image} alt="mp" />
                      </div>
                      <div className="mens_cards_text">
                        <p>{mensproduct.name}</p>
                        <p>{mensproduct.price}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      );
}
