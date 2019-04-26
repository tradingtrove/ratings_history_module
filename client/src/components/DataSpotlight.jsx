import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tag } from 'styled-icons/fa-solid/';

const DataSpotlight = props => (
  <Circle>
    <TagPercent>
      <FlippedTag />
      &nbsp;
      {Math.floor(100 * props.stock.recbuy / (props.stock.recbuy + props.stock.rechold + props.stock.recsell))}
      %
    </TagPercent>
    <OfNRatings>
      of {props.stock.recbuy + props.stock.rechold + props.stock.recsell} ratings
    </OfNRatings>
  </Circle>
);

const Circle = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background-color: rgba(33, 206, 153, 0.15);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TagPercent = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  -webkit-text-stroke: 1px;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.14px;
  color: #21ce99;
  display: flex;
`;

const FlippedTag = styled(Tag)`
  width: 16px;
  height: 16px;
  display: flex;
  align-self: center;
  color: #21ce99;
  
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
  display: flex;
`;

const OfNRatings = styled.div`
  font-weight: normal;
  font-size: 13px;
  -webkit-text-stroke: 0.8px;
  letter-spacing: 0.0350em;
  display: flex;
  color: #21ce99;
`;

DataSpotlight.propTypes = {
  stock: PropTypes.object
};

export default DataSpotlight;
