import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../store/actions/userAction'
import { Profile as ProfileComponent } from '../components'

const Profile = ({ userDispatch }) => {

    const logout = () => {
        localStorage.setItem('token', '')
        userDispatch('')
    }

    return (
        <ProfileComponent className='top' onLogout={logout} />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDispatch: (user) => dispatch(updateUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Profile)
