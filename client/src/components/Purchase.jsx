import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.type = 'Market Buy';
    this.state = {
      expanded: false,
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(e) {
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { purchase } = this.props;
    const { name, timeinforce, submitted, status, enteredQuantity, filled, filledQuantityShares, filledQuantityPrice, total } = purchase;
    const submitTime = submitted.toString();
    const filledTime = filled.toString();

    if (this.state.expanded === false) {
      return (
        <PurchaseWrapper expanded={this.state.expanded}>
          <Expandable onClick={e => this.toggleReadMore(e)}>
            <TopInfo>
              <div className="bold left">{this.type}</div>
              {moment(submitTime).format('MMM DD')}
            </TopInfo>
            <TopInfo>
              <div className="bold right">${total}</div>
              {filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}
            </TopInfo>
          </Expandable>
        </PurchaseWrapper>
      );
    }
    return (
      <PurchaseWrapper>
        <Expandable onClick={e => this.toggleReadMore(e)}>
          <TopInfo>
            <div className="bold left">{this.type}</div>
            {moment(submitTime).format('MMM DD')}
          </TopInfo>
          <TopInfo>
            <div className="bold right">${total}</div>
            {filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}
          </TopInfo>
        </Expandable>

        <Details>
          <Info>
            <div className="key">Stock Name</div>
            <div className="value">{name}</div>
          </Info>
          <Info>
            <div className="key">Type</div>
            <div className="value">{this.type}</div>
          </Info>
          <Info>
            <div className="key">Time in Force</div>
            <div className="value">{timeinforce}</div>
          </Info>
          <Info>
            <div className="key">Submitted</div>
            <div className="value">{moment(submitTime).format('MMM DD, YYYY')}</div>
          </Info>
          <Info>
            <div className="key">Status</div>
            <div className="value">{status}</div>
          </Info>
          <Info>
            <div className="key">Entered Quantity</div>
            <div className="value">{enteredQuantity}</div>
          </Info>
          <Info>
            <div className="key">Filled</div>
            <div className="value">{moment(filledTime).format('MMM DD, YYYY')}</div>
          </Info>
          <Info>
            <div className="key">Filled Quantity</div>
            <div className="value">{filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}</div>
          </Info>
          <Info>
            <div className="key">Total</div>
            <div className="value">
              $
              {total}
            </div>
          </Info>
        </Details>
      </PurchaseWrapper>
    );
  }
}

const Expandable = styled.div`
  height: 72px;
  margin: 24px 24px 0;
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  border-top: 1px solid;
  border-color: #f4f4f5;
  margin: 6px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  padding-top: 30px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  .bold {
      font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
    }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
`;

const PurchaseWrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #cbcbcd;
  margin: 0 -24px;
  
  border-left: ${props => (props.expanded === false ? 'none' : '1px solid cbcbcd')};
  border-right: ${props => (props.expanded === false ? 'none' : '1px solid cbcbcd')};
  border-radius: ${props => (props.expanded === false ? 'none' : '4px')}
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  -webkit-transition: background 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
  transition: background 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
  transition: background 150ms, box-shadow 150ms, margin-bottom 150ms;
  transition: background 150ms, box-shadow 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 12px;

  -webkit-transition: background 450ms, margin-bottom 450ms, -webkit-box-shadow 450ms;
  transition: background 450ms, margin-bottom 450ms, -webkit-box-shadow 450ms;
  transition: background 450ms, box-shadow 450ms, margin-bottom 450ms;
  transition: background 450ms, box-shadow 450ms, margin-bottom 450ms, -webkit-box-shadow 450ms;

  &:hover {
    box-shadow
    background: rgba(23, 23, 24, 0.15);
    border-radius: 4px.
    
    -moz-box-shadow:    inset 0 0 10px rgba(23, 23, 24, 0.15);
    -webkit-box-shadow: inset 0 0 10px rgba(23, 23, 24, 0.15);
    box-shadow:         inset 0 0 10px rgba(23, 23, 24, 0.15);
   
  }
`;

const Info = styled.div`
  width: 218px;
  padding: 0 8px;
  .key {
    overflow: hidden;
    font-weight: bold;
  }
  .value {
    margin-bottom: 16px;
  }
`;

Purchase.propTypes = {
  purchase: PropTypes.object,
};

export default Purchase;
