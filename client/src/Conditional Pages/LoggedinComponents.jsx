import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav';
import { Chats, Search, Friends, Profile, MessageBox } from '../pages'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import io from 'socket.io-client'

// import action from store
import { addConversation, addNewMessage } from '../store/actions/conversationAction'
import { updateUserData } from '../store/actions/userDataAction'

// using backed api
import { getThisUser, getConversationMessage, getConversationInfo, getBaseUrl } from '../api/expressApi'

// this is a socket
export let socket = null

const LoggedinComponents = (props) => {

  const { user, userData, addConversationDispatch, updateUserDataDispatch, addMessageDispatch } = props

  useEffect(() => {

    // get this user details
    getThisUser((data) => {
      updateUserDataDispatch(data)

      // add all conversation to list
      data.conversations.forEach(conversation => {

        getConversationInfo(conversation, conv => {

          const friend_id = conv.user1 === data._id ? conv.user2 : conv.user1

          getConversationMessage(conversation, (data) => {
            addConversationDispatch({
              id: conversation,
              friend: friend_id,
              data: data
            })
          })
        })
      })
    })

  }, [user])

  /// socket programming
  useEffect(() => {

    if (!userData._id)
      return

    if (socket !== null) {
      socket.emit('close', 'my_uid')
    }

    socket = io.connect(getBaseUrl())

    socket.emit('open', userData._id)

    socket.on('newMessage', message => {
      console.log(message)
      addMessageDispatch({
        id: message.conversationId,
        message: message
      })
    })

  }, [userData._id])

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/friends' component={Friends} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/conversation/:id' component={MessageBox} />
        <Route path='/' component={Chats} />
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userData: state.userData
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addConversationDispatch: (conv) => dispatch(addConversation(conv)),
    updateUserDataDispatch: (user) => dispatch(updateUserData(user)),
    addMessageDispatch: (payload) => dispatch(addNewMessage(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedinComponents)
