import React from 'react';

class DataSpotlight extends React.Component {
  constructor(props) {
    super(props);
    this.buy = 3;
    this.hold = 2;
    this.sell = 8;
    this.total = this.buy + this.hold + this.sell;
    this.percentage = Math.floor(100 * this.buy / this.total);
  }

  render() {
    return (
      <div>
        <div className="OjNSjSbJmDliL-he4BWbjSpotlightBG">
          <br />
          <h2>tag {this.percentage}%</h2>
          <p>of {this.total} ratings</p>

        </div>
      </div>
    );
  }
}

export default DataSpotlight;
