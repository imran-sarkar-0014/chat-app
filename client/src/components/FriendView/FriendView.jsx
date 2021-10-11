import React, { useState, useEffect } from 'react'

import { Grid, Avatar, Typography, Button } from '@material-ui/core'
import useStyles from './style'

import { getUser, acceptFriendRequest, rejectRequest, getBaseUrl } from '../../api/expressApi'

const FriendView = ({ friend }) => {
    const classes = useStyles()
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser(friend, (u) => {
            setUser(u)
        })
    }, [])

    const handleAccept = () => {
        acceptFriendRequest(friend, (result) => {

        })
    }

    const handleDelete = () => {
        rejectRequest(friend, (result) => {

        })
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Avatar
                className={classes.avatar}
                src={user && user.profilePic && `${getBaseUrl()}/${user.profilePic}`}
            >{user && user.username && user.username[0].toUpperCase()}</Avatar>
            <Typography className={classes.name}>{user && user.username && user.username}</Typography>
            <div className={classes.btnContainer}>
                <Button onClick={handleAccept} className={classes.btn} variant='contained' size='small' color='primary'>Accept</Button>
                <Button onClick={handleDelete} className={classes.btn} variant='contained' size='small' color='secondary'>Delete</Button>
            </div>
        </Grid>
    )
}

export default FriendView
