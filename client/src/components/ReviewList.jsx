import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      <AllReviews>
        <Review oneReview={this.props.stock.reviewBuy} miniHeader="Buy Summary" market={this.state.market} />
        <Review oneReview={this.props.stock.reviewSell} miniHeader="Sell Summary" market={this.state.market} />
      </AllReviews>
    );
  }
}

const AllReviews = styled.div`
  display: inline-flex:
  flex-direction: row;
  flex-wrap: nowrap;
  width: 470px;
  justify-content: space-between;
`;

ReviewList.propTypes = {
  stock: PropTypes.object,
};

export default ReviewList;
