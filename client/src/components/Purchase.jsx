import React from 'react';
import PropTypes from 'prop-types';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Market Buy'; 
  }

  render() {
    const { purchase } = this.props;
    const { symbol } = purchase;
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
  purchase: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Purchase;
//        {props.purchase}
