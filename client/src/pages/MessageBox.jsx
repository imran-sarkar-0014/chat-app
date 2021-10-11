import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { ChatHeader, ChatContainer, ChatBottom } from '../components'
import { getUser } from '../api/expressApi'

const MessageBox = ({ conversation }) => {

    const { id } = useParams()
    const messagesRef = useRef(null);
    const conv = conversation.filter(c => c.id === id)
    const friend = conv[0]?.friend
    const data = conv[0]?.data
    const [profilePic, setProfilePic] = useState('')

    useEffect(() => {
        getUser(friend, (f) => {
            setProfilePic(f?.profilePic)
        })
    }, [id])

    const scrollToBottom = () => {
        if (messagesRef.current) {
            messagesRef.current.scrollIntoView({
                behavior: "smooth"
            })

        }
    }

    return (
        <div style={{ position: 'fixed', top: '0', left: '0', backgroundColor: '#fff', zIndex: '100', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <ChatHeader friend={friend} />
            <ChatContainer
                messagesRef={messagesRef}
                conversation={conv} data={data}
                scrollToBottom={scrollToBottom}
                profilePic={profilePic}
                friend={friend} />
            <ChatBottom
                scrollToBottom={scrollToBottom}
                messagesRef={messagesRef}
                friend={friend}
                id={id} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        conversation: state.conversation
    }
}

export default connect(mapStateToProps)(MessageBox)

