import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from './store/actions/userAction'
import LoggedinComponents from './Conditional Pages/LoggedinComponents'
import NonLoggedInComponents from './Conditional Pages/NonLoggedInComponents';
import { Loading } from './pages'
import { changeUser } from './api/expressApi'

// import action
import { resetConversation } from './store/actions/conversationAction'
import { resetUserData } from './store/actions/userDataAction'

function App({ user, userDispatch, resetConversationDispatch, resetUserDataDispatch }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // initially get user logged in information 
  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem('token')
    if (token && token !== '') {
      userDispatch(token)
    } else {
    }
  }, [])

  /// change user according to user token
  /// if token is empty then log out the user.
  useEffect(() => {
    setIsLoading(true)
    resetConversationDispatch()
    resetUserDataDispatch()
    changeUser(user)
    if (user && user !== '') {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    setIsLoading(false)
  }, [user])

  /// render the application
  return (
    <div className="App">

      {
        isLoading ?
          <Loading />
          :
          <Router>
            {
              isLoggedIn ?
                <LoggedinComponents /> :
                <NonLoggedInComponents />
            }
          </Router>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userDispatch: (user) => dispatch(updateUser(user)),
    resetConversationDispatch: () => dispatch(resetConversation()),
    resetUserDataDispatch: () => dispatch(resetUserData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
