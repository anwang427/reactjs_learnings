import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: ''
        }
    }

    render() {
        return (
            <div className = "searchbar">
              <form onSubmit = {(event) => {event.preventDefault(); this.props.onFormSubmit(this.state.entry)}}> 
                  <TextField fullWidth label = "Query" value = {this.state.entry} onChange = {(event) => this.setState({entry: event.target.value})}/>
              </form>
            </div>  
        );
    }
}

export default SearchBar;