import React from 'react';

// need state, so use class component

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    // onInputChange(event) { //event object contains info about the user action
    //     console.log(event.target.value);
    // }

    render() { //onChange is a react property name
        return (
            <div className = "ui segment">
                <form onSubmit = {event => {event.preventDefault(); this.props.onSubmit(this.state.term)}} className = "ui form">
                    <div className = "field">
                        <input 
                            type = "text" 
                            placeholder = "Enter Query" 
                            value = {this.state.term}
                            onChange = {event => this.setState({term: event.target.value})}
                             
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;