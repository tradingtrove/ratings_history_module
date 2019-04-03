import React from 'react';

class DataBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.buy = 3;
    this.hold = 2;
    this.sell = 8;
    this.total = this.buy + this.hold + this.sell;
    this.percentBuy = Math.floor(100 * this.buy / this.total);
    this.percentHold = Math.floor(100 * this.hold / this.total);
    this.percentSell = Math.floor(100 * this.sell / this.total);
  }

  render() {
    return (
      <div className="_15b0ehqeCQPXuckHxmckqV _2S5LKbv_5B17ogJputIcHb _3NhDi1Y_zCL6iEvhE3Rk7z">
        <div className="_3zc330R5cwW6gKoImD6AIvBarsLong">{this.percentBuy}</div>
        <div className="_3zc330R5cwW6gKoImD6AIvBarsLong">{this.percentHold}</div>
        <div className="_3zc330R5cwW6gKoImD6AIvBarsLong">{this.percentSell}</div>
      </div>
    );
  }
}

export default DataBarChart;
