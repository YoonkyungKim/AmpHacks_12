import React, { Component } from 'react';
import LessonCard from './lessonCard.jsx';

import { lessons } from 'assets/data/mockup_lessons';
import { Row, Col } from "reactstrap";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sampleData: lessons
         }
    }

    displayLessons() {
        let videoLists = [];
        this.state.sampleData.map((item, index) => {
            videoLists.push(
                <Row xs={6} key={index} id={item.id}>
                    <LessonCard video= {item}/>
                </Row>
            );
        })
        return videoLists;
    }

    render() { 
        return (
        <div>
                {this.displayLessons()}
        </div>
        );
    }
}
 
export default Education;