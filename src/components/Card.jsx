import { useState } from "react";
import "./card.css";
import SpecialSwitch from "./Switch";
import SpecialSlider from "./Slider";

const Card = () => {
  const [pageViews, setPageViews] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [newPrice, setNewPrice] = useState(price);
  const [discount, setDiscount] = useState(false);

  const handlePageViews = (e) => {
    setPageViews(e.target.value);
    setPrice(e.target.value * 0.16);
    let oldPrice = price;
    if (!discount) {
      setNewPrice(oldPrice + price * 0.25);
    } else {
      setNewPrice(oldPrice - price * 0.25);
    }
  };

  const addDiscount = (e) => {
    setDiscount(e.target.checked);
    let oldPrice = price;
    if (!discount) {
      setNewPrice(oldPrice - price * 0.25);
    } else {
      setNewPrice(oldPrice + price * 0.25);
    }
  };

  return (
    <div className="card">
      <div className="double">
        <div className="pageViews">
          <p>{pageViews}K Pageviews</p>
        </div>
        <div className="price">
          <p className="priceNumber">
            {" "}
            {!discount ? price.toFixed(2) : newPrice.toFixed(2)}{" "}
          </p>
          <p className="month"> / month</p>
        </div>
      </div>
      <div className="slider">
        <SpecialSlider onChange={handlePageViews} />
      </div>

      <div className="toggle">
        <p>Monthly Billing</p>
        <SpecialSwitch onClick={addDiscount} />
        <p>Yearly Billing</p>
        <span className="discount">
          <p>25% discount</p>
        </span>
      </div>

      <div className="divider"></div>
      <div className="double">
        <div className="list">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <div className="button">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
