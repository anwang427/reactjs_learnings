import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'; //don't need to include .js extension
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail author = "Sam" date = "Yesterday at 3:33PM" commentContent = "Nice post!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Steph" date = "Yesterday at 6:00PM" commentContent = "Hmm, I don't know if I agree"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Tyler" date = "Today at 11:02AM" commentContent = "this is great !!"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));