// components usually have uppercase names
import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => { //automatically passes in props, with can be accessed as an object
    return (
        <div className = "comment">
            <a href = "/" className = "avatar">
                <img alt = "avatar" src = {faker.image.avatar()} />
            </a>

            <div className = "content">
                <a href = "/" className = "author"> {props.author} </a>
                <div className = "metadata">
                    <span className = "date">{props.date}</span>
                </div>
                <div className = "text">{props.commentContent}</div>
            </div>
        </div>
    );
}

// make component equal to other parts of the project
export default CommentDetail;
