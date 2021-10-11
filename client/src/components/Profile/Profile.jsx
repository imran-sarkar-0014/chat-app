import React, { useState } from 'react'
import useStyles from './style'
import { Avatar, Typography, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { uploadProfile, getBaseUrl } from '../../api/expressApi'
import { updateProfile } from '../../store/actions/userDataAction'

const Profile = (props) => {

    const { onLogout, userData, updateProfileDispatch } = props
    const [file, setFile] = useState(null)

    const classes = useStyles()

    const uploadFile = (e) => {
        e.preventDefault()
        if (file) {
            uploadProfile(file, (uri) => {
                updateProfileDispatch(uri)
            })
        }
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <div className={classes.container}>
            <div className={classes.cover}>
                <img src="/defaultCover.jpg" className={classes.coverImg} alt="" />

            </div>

            <div className={classes.profile}>
                <div className={classes.profilePicContainer}>
                    <Avatar
                        className={classes.profilePic}
                        src={
                            userData.profilePic && `${getBaseUrl()}/${userData.profilePic}`
                        }
                    >{userData?.username && `${userData.username[0].toUpperCase()}`}</Avatar>
                </div>
                <Typography className={classes.username}>{userData?.username}</Typography>
                <Button className={classes.button} variant='outlined' color='secondary' onClick={onLogout}>Log Out</Button>
            </div>
            <form onSubmit={uploadFile}>
                <input type="file" name='profilePic' onChange={handleFile} />
                <Button type='submit' variant='contained' color='primary'>Upload</Button>
            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfileDispatch: (uri) => dispatch(updateProfile(uri))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
