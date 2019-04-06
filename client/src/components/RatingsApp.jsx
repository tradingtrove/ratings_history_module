import React from 'react';
import styled from 'styled-components';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import ReviewList from './ReviewList';

class RatingsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: {
        symbol: 'TSM',
        recBuy: 3,
        recHold: 8,
        recSell: 13,
        reviewBuy: 'Plastic granular scale convergence Taiwan Semiconductor Manufacturing Company Limited local Ergonomic. \n The impactful transform architectures encompassing. \n Overall, granular scale convergence Taiwan Semiconductor Manufacturing Company Limited optimizing',
        reviewSell: 'Plastic B2C target e-tailers local Taiwan Semiconductor Manufacturing Company Limited Ergonomic. \n For B2C implement applications encompassing. \n Hence, B2C target e-tailers Taiwan Semiconductor Manufacturing Company Limited optimizing',
      },
      priceDifferenceFromStartToToday: 'Positive',
    };
  }

  render() {
    return (
      <div>
        <ModuleHeader>Analyst Ratings</ModuleHeader>
        <Top>
          <DataSpotlight stock={this.state.stock} priceDifferenceFromStartToToday={this.state.priceDifferenceFromStartToToday} />
          <DataBarChart stock={this.state.stock} priceDifferenceFromStartToToday={this.state.priceDifferenceFromStartToToday} />
        </Top>
        <ReviewList stock={this.state.stock} />
      </div>
    );
  }
}

const Top = styled.div`
  display: flex;
  flex: 1 100%;
  flex-shrink: 1;
`;

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  border-bottom: 1px solid;
  border-color: #f4f4f5;
  padding-bottom: 16px;
`;

export default RatingsApp;
