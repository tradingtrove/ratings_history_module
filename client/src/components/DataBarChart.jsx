import React from 'react';

class DataBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.buy = 3;
    this.hold = 2;
    this.sell = 5;
    this.total = this.buy + this.hold + this.sell;
  }

  render() {
    return (
      <div>
        {this.buy}
        {this.hold}
        {this.sell}
        {this.total}
      </div>
    );
  }
}

export default DataBarChart;
