import React from 'react';
import Purchase from './Purchase';

class HistoryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      purchases: [
        {
          symbol: 'AAPL',
          purchase_id: 752,
          name: 'Apple',
          timeinforce: 'Good for day',
          submitted: '2016-09-24T00:51:08',
          status: 'filled',
          entered_quantity: 84,
          filled: '2018-08-23T16:43:24',
          filled_quantity: 84,
        },
        {
          symbol: 'AAPL',
          purchase_id: 1976,
          name: 'Apple',
          timeinforce: 'Good for day',
          submitted: '2016-02-19T10:43:43',
          status: 'filled',
          entered_quantity: 72,
          filled: '2017-05-06T02:31:04',
          filled_quantity: 72,
        },
      ],
    };
  }


  // updatePurchases(data) {
  //   this.setState = ({
  //     purchases: data,
  //     loading: false,
  //   });
  // }

  render() {
    return (
      <div>
        <div className="_11WRmmT0c39X6z9no-GHsEmoduleheader">History</div>
        <Purchase purchase={this.state.purchases[0]} />
        <Purchase purchase={this.state.purchases[1]} />
      </div>
    );
  }
}

export default HistoryApp;
