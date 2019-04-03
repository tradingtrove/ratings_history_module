import React from 'react';
import PropTypes from 'prop-types';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Market Buy'; 
  }

  render() {
    const { symbol } = this.props.purchase;
    return (
      <div className="_2dd7UBEjupbjwapwV9x2ys">
        {this.title}
        <br />
        <br />
        {symbol}
      </div>
    );
  }
}

Purchase.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Purchase;
//        {props.purchase}
