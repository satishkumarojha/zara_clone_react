import React from "react";
import "./Mens.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";
export const Mens = () => {
//   console.log(data.mensdata);
  return (
    <div className="mens_container_main">
      <div className="redmen">
        <img
          src="https://static.zara.net/photos///2022/I/T/1/p/0444/244/800/2/w/877/0444244800_15_2_1.jpg?ts=1655457317970"
          alt="threemen"
        />
      </div>
      <div className="mens_text">
        <h4>NEW IN MAN</h4>
        <p>
          REINVENT YOUR LOOK WITH THE LATEST IN MEN'S TROUSERS, JACKETS, BLAZERS
          AND SHOES. DISCOVER SEASONAL PIECES IN A RANGE OF STYLES AND FITS,
          UPDATED WEEKLY.
        </p>
      </div>
      <div className="mens_gallery">
        <div className="card_wraper">
          {data.mensdata.map((mensproduct) => {
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
};
