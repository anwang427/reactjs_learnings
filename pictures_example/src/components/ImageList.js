import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => { // props.images is an array, so it can mapped 
        return <img key={image.id} src={image.urls.regular} alt = {image.description} /> // each image(s) has an id we can use as the key, and a description
    })

    return <div>{images}</div>
}

export default ImageList;

