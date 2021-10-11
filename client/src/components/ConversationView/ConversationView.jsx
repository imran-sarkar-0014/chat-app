import React, { useEffect, useState } from 'react'
import { Grid, Avatar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './style'
import { connect } from 'react-redux'

import { getBaseUrl, getUser } from '../../api/expressApi'

const ConversationView = ({ conversation, userData }) => {
    const classes = useStyles()
    const [friend, setFriend] = useState({})

    const getFriend = (f) => {
        setFriend(f)
    }

    useEffect(() => {
        getUser(conversation.friend, getFriend)
    }, [conversation])

    return (
        <Grid className={classes.container} item xs={12}>
            <Link to={`/conversation/${conversation.id}`} className={classes.link}>
                <div className={classes.root} >
                    <Avatar src={friend?.profilePic && `${getBaseUrl()}/${friend.profilePic}`} >
                        {
                            friend?.username && `${friend.username[0].toUpperCase()}`
                        }
                    </Avatar>
                    <div className={classes.conversationDetails}>
                        <Typography variant='h6' className={classes.name}>
                            {friend && friend.username}
                        </Typography>
                    </div>
                </div>

            </Link>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}
export default connect(mapStateToProps)(ConversationView)
