import React from 'react'
import "./Mens.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";
export const Womens = () => {
    return (
        <div className="mens_container_main">
          <div className="redmen">
            <img
              src="https://static.zara.net/photos///2022/I/0/1/p/4978/107/615/2/w/429/4978107615_15_1_1.jpg?ts=1654856073654"
              alt="girl"
            />
          </div>
          <div className="mens_text">
            <h4>SHOP THE LATEST TRENDS WITH ZARA’S NEW IN COLLECTION</h4>
            <p>
            SHOP THE LATEST CLOTHING TRENDS WITH OUR WEEKLY EDIT OF WHAT’S
             NEW IN ONLINE AT ZARA. FROM OUR LATEST WOMAN COLLECTION AND TRF 
             LINES, WE HAVE DRESSES, JEANS, SHOES, BAGS AND MORE TO SUIT EVERY
              WOMAN AND EVERY OCCASION. EXPLORE THE LATEST FASHION TRENDS HERE
            </p>
          </div>
          <div className="mens_gallery">
            <div className="card_wraper">
              {data.womensdata.map((mensproduct) => {
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
