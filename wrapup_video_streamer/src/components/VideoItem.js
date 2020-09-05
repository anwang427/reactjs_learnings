// single list item

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));

const VideoItem = ({video, onVideoSelect}) => { // instead of (props), use ({video}) to quickly reference
    const classes = useStyles();
    
    return (
        <div onClick = {() => onVideoSelect(video)}>
            <ListItem style = {{cursor: 'pointer'}}>
                <ListItemText primary = {video.snippet.title} />
                <ListItemAvatar>
                    <Avatar variant = 'square' className = {classes.large}>
                        <img src = {video.snippet.thumbnails.medium.url} alt = {video.snippet.title}/>
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
            <Divider light />
        </div>
    )
}

export default VideoItem;