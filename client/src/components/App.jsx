import React from 'react';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import AnalystReviews from './AnalystReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: 'placeholder',
      purchases: 'otherplaceholder',
    };
    this.updateStocks = this.updateStocks.bind(this);
    this.updatePurchases = this.updatePurchases.bind(this);
  }

  componentDidMount() {
    this.updateStocks('hi');
    this.updatePurchases('bye');
  }

  updateStocks(data) {
    this.setState = ({ stocks: data });
  }

  updatePurchases(data) {
    this.setState = ({ purchases: data });
  }

  render() {
    const { state } = this.state;
    //const { stocks } = state.stocks;
    //const { purchases } = state.purchases;

    return (
      <div>
        <h1>Robinhood Expert Ratings Module</h1>

        <DataSpotlight />
        <DataBarChart />
        <AnalystReviews />
      </div>
    );
  }
}

export default App;
