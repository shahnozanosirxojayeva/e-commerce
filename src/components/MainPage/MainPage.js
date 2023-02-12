import React, {useState} from "react";
import ProductPage from "../ProductPage/ProductPage";
import "./MainPage.scss";
import Profile from "../images/profilePhoto.png";
import Profile1 from "../images/Profile#1.png";
import Profile2 from "../images/Profile#2.png";
import Profile3 from "../images/Profile#3.png";
import Profile4 from "../images/Profile#4.png";
import Profile5 from "../images/Profile#5.png";
import brend1 from "../images/brend1.png";
import brend2 from "../images/brend2.png";
import brend3 from "../images/brend3.png";

const MainPage = () => {
  const [show, setshow] = useState(false)
  const [state, setState] = useState(false)

  const toggle = ()=>{
    setshow(!show)
    setState(!state)
  }

  return (
    <div>
      <p className="smallShrift">
        Homepage / <span>Laptop</span>
      </p>
      <div className="mainSection">
        <div className="leftSide">
          <div className="card">
            <div className="profile">
              <div className="img">
                <img src={Profile} alt="" />
                <div className="green-circle"></div>
              </div>
              <div className="name">
                <p className="middle-boldShrift">Dilfuza Qodirova</p>
                <p className="grey smallShrift">@username</p>
              </div>
            </div>
            <div className="list">
              <ul>
                <li onClick={toggle} >
                  <img src={Profile5} alt="" />
                  <a className="middleShrift" href="/">
                    {state ? "Subscribe" : "Subscribed"}
                  </a>
                </li>
                <li>
                  <img src={Profile4} alt="" />
                  <a className="middleShrift" href="/">
                    Chat
                  </a>
                </li>
                <li>
                  <img src={Profile3} alt="" />
                  <a className="middleShrift" href="/">
                    News
                  </a>
                </li>
                <li>
                  <img src={Profile2} alt="" />
                  <a className="middleShrift" href="/">
                    Sale
                  </a>
                </li>
                <li>
                  <img src={Profile1} alt="" />
                  <a className="middleShrift" href="/">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <p className="middle-boldShrift">Brands</p>
              <div className="blue">See all</div>
            </div>
            <div className="brands">
              <div className="brand">
                <div className="oneThird">
                  <div>
                    <img src={brend1} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend2} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend3} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
              </div>
              <div className="brand">
                <div className="oneThird">
                  <div>
                    <img src={brend1} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend2} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend3} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
              </div>
              <div className="brand">
                <div className="oneThird">
                  <div>
                    <img src={brend1} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend2} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
                <div className="oneThird">
                  <div>
                    <img src={brend3} alt="" />
                    <div className="red-circle"></div>
                    <p className="smallShrift">Apple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productPage">
          {show && <ProductPage/>}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
