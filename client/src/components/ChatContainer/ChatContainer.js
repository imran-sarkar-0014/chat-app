import React, { useEffect, useState } from 'react'
import { Avatar, Typography } from '@material-ui/core'
import useStyles from './style'
import { connect } from 'react-redux'
import { getBaseUrl, getUser } from '../../api/expressApi'

const ChatContainer = (props) => {

    const { scrollToBottom, profilePic, data, friend, myId, messagesRef } = props

    const [friendName, setFriendName] = useState('')


    useEffect(() => {
        getUser(friend, (f) => {
            setFriendName(f.username)
            scrollToBottom()
        })
    }, [friend])



    const classes = useStyles()
    return (
        <div className={classes.root}>

            {
                data && data.messages &&
                data.messages.map(message => (
                    <div key={message._id} className={`${classes.messageContainer} ${myId === message.sender && classes.left}`} >
                        <div id='messageContainer' className={`${classes.messageContainer}`}>
                            {
                                myId !== message.sender &&
                                <Avatar className={classes.avatar} src={profilePic && `${getBaseUrl()}/${profilePic}`}>
                                    {friendName && friendName[0].toUpperCase()}
                                </Avatar>
                            }

                            <div id="messageWrapper" className={classes.messageWrapper}>
                                <span className={classes.messageText}>
                                    {
                                        message.message
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div ref={messagesRef} />

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.userData._id
    }
}

export default connect(mapStateToProps)(ChatContainer)
