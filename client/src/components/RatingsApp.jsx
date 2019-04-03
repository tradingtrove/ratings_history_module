import React from 'react';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import ReviewList from './ReviewList';


class RatingsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: [
        {
          symbol: 'TSM',
          recBuy: 3,
          recHold: 17,
          recSell: 13,
          reviewBuy: 'Plastic granular scale convergence Taiwan Semiconductor Manufacturing Company Limited local Ergonomic. \n The impactful transform architectures encompassing. \n Overall, granular scale convergence Taiwan Semiconductor Manufacturing Company Limited optimizing',
          reviewSell: 'Plastic B2C target e-tailers local Taiwan Semiconductor Manufacturing Company Limited Ergonomic. \n For B2C implement applications encompassing. \n Hence, B2C target e-tailers Taiwan Semiconductor Manufacturing Company Limited optimizing',  
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="_11WRmmT0c39X6z9no-GHsEmoduleheader">Analyst Ratings</div>
        <DataSpotlight stock={this.state.stock} />
        <DataBarChart stock={this.state.stock} />
        <ReviewList stock={this.state.stock} />
      </div>
    );
  }
}

export default RatingsApp;
