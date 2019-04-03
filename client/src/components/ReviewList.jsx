import React from 'react';
import Review from './Review';

const ReviewList = props => (
  <div className="reviews-container">
    <Review review={props.stock.reviewBuy} />
    <Review review={props.stock.reviewSell} />
  </div>
);

export default ReviewList;
