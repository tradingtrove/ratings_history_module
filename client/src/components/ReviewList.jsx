import React from 'react';
import Review from './Review';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      market: this.props.differenceFromStartToToday === 'Negative' ? 'Bear' : 'Bull',
    };
  }

  render() {
    return (
      <div className="reviews-container">
        <div className="eachReviewWrapper">
          <Review review={this.props.stock.reviewBuy} miniheader="Buy Summary" market={this.state.market} />
        </div>
        <div className="eachReviewWrapper">
          <Review review={this.props.stock.reviewSell} miniheader="Sell Summary" market={this.state.market} />
        </div>
      </div>
    );
  }
}

export default ReviewList;
