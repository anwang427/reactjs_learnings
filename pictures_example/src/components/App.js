import React from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this); // bind event to allow use of `this` inside of correct callback
        this.state = {
            images: [] // default array of images
        }
    }

    // onSearchSubmit(term) { // .then() promise method: object that returns a notification when some amount of work is completed
        // axios.get('https://api.unsplash.com/search/photos', { 
        //     params: {
        //         query: term
        //     },
        //     headers: {
        //         Authorization: 'Client-ID AvUM05Kut6s6uj820wEbbrbgaSEKpunvOCxf-em3tZg'
        //     }
        // }).then((response) => { 
        //     console.log(response.data.results)
        // });
    // }

    async onSearchSubmit(term) { // async/await method
        const response = await unsplash.get('/search/photos', { // unsplash is the instance of axios created
            params: {
                query: term
            },
        })

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/> 
                <ImageList images = {this.state.images}/>
            </div>
            
        );
    }
}

export default App;