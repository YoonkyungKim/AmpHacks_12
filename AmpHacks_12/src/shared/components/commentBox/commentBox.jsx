import React, { Component } from 'react';
import { CommentBox } from ''

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.authorPic} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
                
            </div>
        );
    }
}
 
export default CommentBox;