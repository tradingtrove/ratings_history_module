import React from 'react';
import styled from 'styled-components';

import PercentProgress from './PercentProgress';

class DataBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      market: props.differenceFromStartToToday === 'Negative' ? 'Bear' : 'Bull',
    };
    this.total = this.props.stock.recBuy + this.props.stock.recHold + this.props.stock.recSell;
  }

  render() {
    return (
      <AllBars>
        <PercentProgress votes={this.props.stock.recBuy} total={this.total} voteFor="Buy" market={this.state.market} />
        <PercentProgress votes={this.props.stock.recHold} total={this.total} voteFor="Hold" market={this.state.market} />
        <PercentProgress votes={this.props.stock.recSell} total={this.total} voteFor="Sell" market={this.state.market} />
      </AllBars>
    );
  }
}

const AllBars = styled.div`
  float: right;
  margin: 40px;
`;
//  TODO: fix placement of spotlight vs barchart


export default DataBarChart;
