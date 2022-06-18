import React from 'react';
import './Home.css'
import{Carousel} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='car_container'>
      <Carousel interval={800} color={"red"}>
        <Carousel.Item>
          <Link to="/WomenData">
            <img
              className="img_container "
              src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-new/subhome-xmedia-24-2//w/1366/IMAGE-portrait-ipad-fill-2e68dd26-9c46-4b6f-873b-d2b8a400c114-default_0.jpg?ts=1655472730530"
              alt="First slide"
            />{" "}
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
               SUITS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
               JOIN LIFE
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ZARA ATHLETICS
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to="/LinenPage"><img
            className="img_container"
            src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-kids-babygirl/subhome-xmedia-24//w/1366/IMAGE-portrait-ipad-fill-50d4dbde-4ce5-4725-94b1-3ed7cd842b40-default_0.jpg?ts=1655378294670"
            alt="Second slide"
          />
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                GIRL
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                BOY
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                BABY GIRL
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                JOIN LIFE
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/KidsData">
            <img
              className="img_container "
              src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-dresses/subhome-xmedia-24-2//w/1366/IMAGE-portrait-ipad-fill-8940e088-2e72-430f-9e05-07485ccdcb74-default_0.jpg?ts=1655311161031"
              alt="Third slide"
            />
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                BEST SELERS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                DRESSES
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                BASICS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                SHOES
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;