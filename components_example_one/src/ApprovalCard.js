import React from 'react';

// using semantic ui classNames imported in index.html to add styling
// the props object, this time, is the comment box. We can now include it inside the approval card
const ApprovalCard = (props) => {
    return (
        <div className = "ui card">
            <div className = "content">
                {props.children}
            </div>
            <div className = "extra content">
                <div className = "ui two buttons">
                    <div className = "ui basic green button">Approve</div>
                    <div className = "ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;