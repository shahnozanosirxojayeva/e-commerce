import React from "react";
import "./ProductPage.scss";
import mainpic from "../images/mainpic.png";
import Bookmark from "../images/bookmark.png";
import Hero from "../images/hero.png";
import Ring from "../images/ring.png"

const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="upper">
        <div className="card">
          <img src={mainpic} alt="" />
        </div>
        <div className="card2">
          <h2>GIGABYTE AERO 15 XC Core i7-10870H</h2>
          <p className="smallShrift">
            GIGABYTE AERO 15 XC Core i7-10870H, 16GB(2933 MHZ), 512 NVME SSD,
            RTX 3070, 15,6 (1920x1080) IPS 144HZ.
          </p>
          <h4 className="middle-boldShriff">Price:</h4>
          <p className="middleShrift">
            $1100 <span>$1300</span>{" "}
          </p>
          <h4 className="middle-boldShriff">Colors:</h4>
          <div className="colors">
            <a href="/" className="color k1"></a>
            <a href="/" className="color k2"></a>
            <a href="/" className="color k3"></a>
            <a href="/" className="color k4"></a>
            <a href="/" className="color k5"></a>
          </div>
          <button className="btn">
            <a href="/">Contact with Saler</a>
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="card3">
          <div className="viewers">
            <p className="middleShrift">viewers 335K</p>
            <div className="icon">
              <img src={Bookmark} alt="" />
            </div>
          </div>
          <div className="hero">
            <img src={Hero} alt="" />
            <img src={Hero} alt="" />
            <img src={Hero} alt="" />
            <img src={Hero} alt="" />
            <img src={Hero} alt="" />
          </div>
          <div className="extraul">
            <ul>
              <li>
                <a href="/">Description</a>
              </li>
              <li>
                <a href="/">Charactristic</a>
              </li>
              <li>
                <a href="/">Commends</a>
              </li>
            </ul>
          </div>
          <div className="text">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of.
            </p>
          </div>
        </div>
        <div className="card4">
          <img src={Ring} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
