import React from 'react';

class AnalystReviews extends React.Component {
  constructor(props) {
    super(props);
    this.copyright = 'Morningstar';
  }

  render() {
    return (
      <div>
        <span>QuoteMark</span>
        <div>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>
          <p>
            {`Gravida quis blandit turpis cursus in hac. Venenatis a 
        condimentum vitae sapien pellentesque.`}
          </p>
          <p>
            {`Aenean sed adipiscing diam donec adipiscing tristique 
        risus nec feugiat.`}
          </p>
          <a href="/">Read More</a>
          <div>{this.copyright}</div>
        </div>
      </div>
    );
  }
}

export default AnalystReviews;
