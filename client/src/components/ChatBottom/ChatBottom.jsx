import React, { useState } from 'react'
import useStyles from './style'
import { connect } from 'react-redux';
import { Send } from '@material-ui/icons';
import { addNewMessage } from '../../store/actions/conversationAction'
import { sendMessage } from '../../api/expressApi';

import { socket } from '../../Conditional Pages/LoggedinComponents'

const ChatBottom = (props) => {

    const { id, friend, addConversationDispatch, scrollToBottom } = props
    const [message, setMessage] = useState('')
    const classes = useStyles()

    const onSubmit = (e) => {
        e.preventDefault()
        if (message === '')
            return

        sendMessage({ id, message }, (data) => {
            addConversationDispatch({
                id: id,
                message: data
            })
            scrollToBottom()

            if (socket) {
                socket.emit('message', {
                    to: friend,
                    message: data
                })
            }
        })


        setMessage('')
    }

    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <div className={classes.inputWrapper}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Type message...'
                    className={classes.input}
                />
            </div>
            <div onClick={onSubmit} className={classes.sendWrapper}>
                <Send color='primary' className={classes.send} />
            </div>
        </form >
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.userData._id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addConversationDispatch: (payload) => dispatch(addNewMessage(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBottom)
