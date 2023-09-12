import { useState } from "react";
import "./card.css";
const Card = () => {
  const [pageViews, setPageViews] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(false);

  const handlePageViews = (e) => {
    setPageViews(e.target.value);
    if (e.target.value === "0") {
      setPrice(0.0);
    } else if (e.target.value > "25") {
      setPrice(8.0);
    } else if (e.target.value > "50") {
      setPrice(12.0);
    } else if (e.target.value > "75") {
      setPrice(16.0);
    } else if (e.target.value < "100") {
      setPrice(24.0);
    }
  };

  const addDiscount = () => {
    setDiscount(discount);
    if (discount) {
      let oldPrice = price;
      setPrice(oldPrice - price * 0.25);
    } else {
      let oldPrice = price;
      setPrice(oldPrice + price * 0.25);
    }
  };

  return (
    <div className="card">
      <div className="double">
        <div className="pageViews">
          <p>{pageViews}K Pageviews</p>
        </div>
        <div className="price">
          <p className="priceNumber"> ${price}</p>
          <p className="month"> / month</p>
        </div>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="1000"
          value={pageViews}
          onChange={handlePageViews}
        />
      </div>

      <div className="toggle">
        <p>Monthly Billing</p>
        <label className="switch">
          <input type="checkbox" onClick={addDiscount} />
          <span className="slider round"></span>
        </label>
        <p>Yearly Billing</p>
        <p className="discount">25% discount</p>
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
