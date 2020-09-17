import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="home-gate-pic"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR"
            price={7.99}
            image="data:image/webp;base64,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"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="458978945"
            title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"
            price={15.53}
            image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="144300548"
            title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
            price={168.6}
            image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="9978510"
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={24.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51EXcNKQgoL._AC_SY200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="44567881"
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={899.99}
            image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
