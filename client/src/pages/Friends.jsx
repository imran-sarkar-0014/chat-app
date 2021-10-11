import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Search } from '../components'
import { FriendView } from '../components'
import { connect } from 'react-redux'


const Friends = ({ userData }) => {
    return (

        <Grid container className='top'>
            <Grid item xs={12}>

                <Search />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h5'>
                    Friend Requests
                </Typography>
            </Grid>

            {/* Conversations List */}
            <Grid item xs={12} >
                <Grid container>
                    {
                        userData && userData.friendReq && userData.friendReq.map(friend => (
                            <FriendView friend={friend} />
                        ))
                    }
                </Grid>
            </Grid>

        </Grid >

    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Friends)
