import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Search, ConversationView } from '../components'

import { connect } from 'react-redux'

const Chats = ({ conversation, userData }) => {

    useEffect(() => {

    }, [conversation, userData])

    return (
        <Grid container className='top'>
            <Grid item xs={12}>

                <Search />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h5'>
                    Conversations
                </Typography>
            </Grid>

            {/*  Conversations List */}
            <Grid item xs={12} >
                <Grid container>
                    {
                        conversation && conversation.map(
                            (conversation, index) => (
                                <ConversationView key={index} conversation={conversation} />
                            )
                        )
                    }
                </Grid>
            </Grid>

        </Grid>
    )
}


const mapStateToProps = (state) => {
    return {
        conversation: state.conversation,
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Chats)
