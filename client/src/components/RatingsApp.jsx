import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import ReviewList from './ReviewList';

class RatingsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: {},
    };
    this.getStockData = this.getStockData.bind(this);
  }

  componentDidMount() {
    this.getStockData();
  }

  getStockData() {
    const stockID = window.location.pathname.split('/')[2];
    if (!stockID) {
      alert('Please enter a stock ID in the browser window location bar, in the format [host]/[path]/stocks/stockID');
    } else {
      axios.get(`/api/stocks/${stockID}/ratings`)
        .then(res => res.data)
        .then((result) => {
          this.setState({
            stock: result[0],
          });
        });
    }
  }

  render() {
    return (
      <div>
        <ModuleHeader>Analyst Ratings</ModuleHeader>
        <Row>
          <Left>
            <DataSpotlight stock={this.state.stock} />
          </Left>
          <Right>
            <DataBarChart stock={this.state.stock} />
            <ReviewList stock={this.state.stock} />
          </Right>
        </Row>
      </div>
    );
  }
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 16px;
`;

const Left = styled.div`
  width: 134px;
  padding: 13px 48px 24px 24px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  border-bottom: 1px solid;
  border-color: #f4f4f5;
  padding-bottom: 16px;
  max-width: 697px;
`;

export default RatingsApp;
