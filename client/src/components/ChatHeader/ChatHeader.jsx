import React, { useEffect, useState } from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import useStyles from './style';

import { useHistory } from 'react-router';
import { getBaseUrl, getUser } from '../../api/expressApi'

const ChatHeader = (props) => {

    const { friend } = props

    const classes = useStyles()
    const histore = useHistory()

    const [friendName, setFriendName] = useState('')
    const [profile, setProfile] = useState('')

    useEffect(() => {
        getUser(friend, (f) => {
            setFriendName(f.username)
            setProfile(f.profilePic)
        })
    }, [friend])

    const back = () => {
        histore.push('/')
    }

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <div className={classes.leftWrapper}>
                    <ArrowBack className={classes.backButton} onClick={back} />
                    <Avatar
                        className={classes.avatar}
                        src={profile && `${getBaseUrl()}/${profile}`}>
                        {friendName && friendName[0].toUpperCase()}
                    </Avatar>
                    <Typography className={classes.name}>{friendName}</Typography>
                </div>
            </div>

        </div>
    )
}

export default ChatHeader
