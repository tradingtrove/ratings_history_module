import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class PercentProgress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: Math.floor(100 * this.props.votes / this.props.total),
      voteFor: this.props.voteFor,
      market: this.props.market,
    };
  }

  render() {
    return (
      <AllBars>
        <VoteFor voteFor={this.state.voteFor} >
          {this.state.voteFor}
          &nbsp;
        </VoteFor>
        <ProgressBar voteFor={this.state.voteFor} >
          <Filler percentage={this.state.percentage} voteFor={this.state.voteFor}>
            <Percent>
              {this.state.percentage}
              %
              <PercentBG percentage={this.state.percentage} voteFor={this.state.voteFor} />
            </Percent>
          </Filler>
        </ProgressBar>
      </AllBars>
    );
  }
}

const AllBars = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: normal;
  -webkit-text-stroke: 1px;
  letter-spacing: 0.5px;
  align-items: baseline;
`;

const VoteFor = styled.div`
  width: 32px;
  height: 19px;
  color: ${props => (props.voteFor === 'Buy'
    ? '#21ce99'
    : '#171718')};
  display: flex;
`;

const ProgressBar = styled.div`
  width: 426px;
  height: 6px;
  color: ${props => (props.voteFor === 'Buy'
    ? '#21ce99'
    : '#171718')};
  background: #ffffff;
  border-radius: 4px;
  margin: 24px 0;
  display: flex;
`;

const Filler = styled.div`
  background: ${props => (props.voteFor === 'Buy'
    ? '#21ce99'
    : '#171718')};
  height: 100%;
  border-radius: 4px 0 0 4px;
  transition: width .2s ease-in;
  width: ${props => (props.percentage / 100) * 426 - 2}px;
  text-indent: ${props => (props.percentage / 100) * 426}px;
  display: flex;
`;

const PercentBG = styled.div`
    margin-left: 0;
    width: ${props => ((426) - 8 - ((props.percentage / 100) * 426))}px;
    height: 6px;
    border-radius: 4px;
    background: ${props => (props.voteFor === 'Buy'
    ? 'linear-gradient(90deg, rgba(33, 206, 153, 0.01), rgba(33, 206, 153, 0.15) 15%)'
    : 'linear-gradient(90deg, rgba(23, 23, 24, 0.01), rgba(23, 23, 24, 0.15) 15%)')};
 
    display: flex;
    align-self: center;
`;

const Percent = styled.div`
  display: flex;
  align-self: center;
`;

PercentProgress.propTypes = {
  buy: PropTypes.number,
  hold: PropTypes.number,
  sell: PropTypes.number,
  total: PropTypes.number,
  voteFor: PropTypes.string,
};

export default PercentProgress;
