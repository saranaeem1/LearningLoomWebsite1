// PricingCard.js
import React from "react";

const PricingCard = ({ title, icon, price, options }) => {
  return (
    <div className="pricing-card">
      <div className="card-title">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <h2>{title}</h2>
      </div>
      <div className="price">
        <h4>
          $
          {price}
        </h4>
      </div>
      <div className="option">
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {option.available ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              <span className="option-text">{option.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#">Enroll Now</a>
    </div>
  );
};

export default PricingCard;
