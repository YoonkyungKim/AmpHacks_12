import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


import styled from 'styled-components'

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card>
                <CardImage src={this.props.video.image} />
                <CardBody>
                    <h3>{this.props.video.title}</h3>
                    <p>{this.props.video.description}</p>
                    <StarRatingComponent 
                      name="rating" 
                      starCount={5}
                      value={this.props.video.rating}
                    />
                    <span>({this.props.video.rating})</span>
                </CardBody>
                
            </Card>
        );
    }
}
 
export default LessonCard;


const Text = styled.div`
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #1F3B57;
`

const TextSmall = styled(Text)`
  font-size: 0.75rem;
`

const TextSmallSecondary = styled(TextSmall)`
  color: #63778E;
`

const StockStatus = styled(TextSmall)`
  margin-top: 14px;
  color: #0E6946;
`

const BoldText = styled.span`
  font-weight: 600;
`

const Card = styled.div`
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  align-items: center;
  max-width: 400px;
  margin-bottom: 10px;
`

const CardBody = styled.div`
  padding: 0rem 1rem 0rem 1rem;
`

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  background: #76869B;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
`


