import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Purchase from './Purchase';

class HistoryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      purchases: [],
    };
    this.getPurchaseData = this.getPurchaseData.bind(this);
  }

  componentDidMount() {
    this.getPurchaseData();
  }

  getPurchaseData() {
    const stockID = window.location.pathname.split('/')[2];
    axios.get(`/api/stocks/${stockID}/history`)
      .then(res => res.data)
      .then((result) => {
        this.setState({
          purchases: result,
        });
      });
  }

  render() {
    const { purchases } = this.state;
    return (
      <div>
        <ModuleHeader>History</ModuleHeader>
        {purchases.map(item => <Purchase purchase={item} key={item._id} />)}
      </div>
    );
  }
}

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  max-width: 673px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(23,23,24,0.05);
`;

export default HistoryApp;
