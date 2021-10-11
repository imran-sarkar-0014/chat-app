import React from 'react'
import { Grid, Typography, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PeopleAltOutlined, AccountCircleOutlined } from '@material-ui/icons'
import useStyles from './style'
import { connect } from 'react-redux'
import { getBaseUrl } from '../../api/expressApi'

const Nav = (props) => {

    const { userData } = props

    const classes = useStyles()
    return (

        // nav Container
        <Grid container className={classes.root}>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item className={classes.avatar}>
                        <Avatar
                            src={userData.profilePic && `${getBaseUrl()}/${userData.profilePic}`}
                        >
                            {
                                userData?.username && `${userData.username[0].toUpperCase()}`
                            }
                        </Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.brandName}>
                            Chats
                        </Typography>
                    </Grid>

                </Grid>


            </Grid>
            <Grid item xs={6}>

                {/* Icon Container */}
                <Grid container>

                    {/* Messenger Icon */}
                    <Grid item xs={4}>
                        <Link className={classes.link} to='/'>
                            <div className={classes.iconContainer} >
                                <img
                                    className={classes.icon}
                                    src="/icons/messenger.svg"
                                    alt="" />
                            </div>
                        </Link>
                    </Grid>

                    <Grid item xs={4}>
                        <Link className={classes.link} to='/friends'>
                            <div className={classes.iconContainer} >
                                <PeopleAltOutlined className={classes.icon} />

                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link className={classes.link} to='/profile'>
                            <div className={classes.iconContainer} >
                                <AccountCircleOutlined fontSize="large" className={classes.icon} />

                            </div>
                        </Link>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Nav)
