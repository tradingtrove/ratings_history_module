import React from 'react';
import styled from 'styled-components';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      market: this.props.market,
    };
  }

  render() {
    return (
      <div className="_3rEcIJAdObKQ7uMT6YxUk6reviewBG">
        {this.props.miniheader}
        <div>
          &#34;
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
          &#34;
          </p>

          <br />
          <br />
          <a href="/">Read More</a>
          <ReadMore>
            <a href="/">Read More</a>
          </ReadMore>
          <div className="caption">Morningstar</div>
        </div>
      </div>
    );
  }
}

const ReadMore = styled.div`
  color: ${props => (props.market === 'Bear'
    ? '#f45531'
    : '#21ce99')};
  &:hover {
    color: ${props => (props.market === 'Bear'
    ? '#ff6340'
    : '#1ae9aa')}
    transition-duration: 300ms;
  }
`;

export default Review;
