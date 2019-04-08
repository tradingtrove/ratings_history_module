import React from 'react';
import styled from 'styled-components';
import { TriangleDown } from 'styled-icons/octicons/TriangleDown';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.oneReview || '',
      miniHeader: this.props.miniHeader,
      market: this.props.market,
      expanded: false,
    };
    this.bodyParagraphs = this.state.body.split('\n', 3);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(e) {
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {

    if (this.state.expanded === true) {
      return (
        <div>
          <ReviewWrapper>
            <ReviewBox>
              <InnerContainer>
                <h4>{this.state.miniHeader}</h4>
                <FirstPara>
                  <p>
                    <span>&#8220;</span>
                    {this.bodyParagraphs[0] || ''}
                  </p>
                </FirstPara>
                <RDetails>
                  <p key="reviewp1">
                    {this.bodyParagraphs[1] || ''}
                  </p>
                  <p key="reviewp2">
                    {this.bodyParagraphs[2] || ''}
                    <span>&#8221;</span>
                  </p>
                  <br key="reviewBR" />
                </RDetails>
              </InnerContainer>
            </ReviewBox>
            <InnerContainer>
              <ReadMore><a href="/" onClick={e => this.toggleReadMore(e)}>{this.state.expanded === true ? 'Read Less' : 'Read More'}</a></ReadMore>
              <br />
              <ReviewCaption>Morningstar</ReviewCaption>
            </InnerContainer>
          </ReviewWrapper>
          <ReviewTriangle />
        </div>
      );
    }
    return (
      <div>
        <ReviewWrapper>
          <ReviewBox>
            <InnerContainer>
              <h4>{this.state.miniHeader}</h4>
              <FirstPara>
                <p>
                  <span>&#34;</span>
                  {this.bodyParagraphs[0] || ''}
                </p>
              </FirstPara>
              
            </InnerContainer>
          </ReviewBox>
          <InnerContainer>
            <ReadMore><a href="/" onClick={e => this.toggleReadMore(e)}>{this.state.expanded === true ? 'Read Less' : 'Read More'}</a></ReadMore>
            <br />
            <ReviewCaption>Morningstar</ReviewCaption>
          </InnerContainer>
        </ReviewWrapper>
        <ReviewTriangle />
      </div>
    );
  }
}

const RDetails = styled.div`
  
`;


const InnerContainer = styled.div`
  margin-left: 4px;
`;
const FirstPara = styled.div`
  text-indent: -4px;
`;

const ReviewWrapper = styled.div`
  border-radius: 4px 4px 4px 0;
  padding: 0 24px 24px;
  width: 180px;
  background-color: rgba(23, 23, 24, 0.02);
  color: #171718;
  padding-bottom: 16px;
`;

const ReviewBox = styled.div`
  border-radius: 4px 4px 4px 0;
  width: 180px;
  height: 110px;
  overflow: hidden;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  h4 {
    text-align: left;
    color: #171718;
    font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.25px;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    text-align: left;
    color: #171718;
    font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }


    height: auto;
    -webkit-transition: background 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
    transition: background 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
    transition: background 1250ms, box-shadow 1250ms, margin-bottom 1250ms;
    transition: background 1250ms, box-shadow 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
    
`;

const ReadMore = styled.div`
 -webkit-text-stroke-width: 0.5px;
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

const ReviewCaption = styled.div`
  color: #cbcbcd;
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.2px;
  text-align: left;
  &:hover {
    color: #cbcbcd;
  }
`;

const ReviewTriangle = styled(TriangleDown)`
  border-radius: 4px 4px 4px 0;
  margin-top: -15px;
  height: 48px;
  color: rgba(23, 23, 24, 0.02);
`;

export default Review;
