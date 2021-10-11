import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, Check, Clear, GroupAdd } from '@material-ui/icons'
import useStyles from './style'
import { connect } from 'react-redux'
import { addRequest, deleteRequest } from '../../store/actions/userDataAction'


import { sendFriendRequest, deleteFriendRequest, acceptFriendRequest, rejectRequest, getBaseUrl } from '../../api/expressApi'

const SearchContainer = (props) => {

    const { searchResult, userData, addRequestDispatch, deleteRequsetDispatch } = props


    const classes = useStyles()


    const isMe = (id) => {
        return id === userData._id
    }

    const isFriend = (id) => {
        return userData.friends.includes(id)
    }

    const isPanding = (id) => {
        return userData.friendReqPending.includes(id)
    }

    const isInRequest = (id) => {
        return userData.friendReq.includes(id)
    }

    // uses api tools
    const onFriendRequsetSend = (id) => {
        sendFriendRequest(id, (result) => {
            addRequestDispatch(result)
        })
    }

    const onFriendRequestDelete = (id) => {
        deleteFriendRequest(id, (result) => {
            deleteRequsetDispatch(result)
        })
    }

    const onFriendRequestReject = (id) => {

        rejectRequest(id, (data) => {
            alert(data)
        })

    }

    const onAcceptFriendRequest = (id) => {
        acceptFriendRequest(id, (data) => {
            alert(data)
        })
    }

    return (
        <div className={classes.root}>

            {
                searchResult && searchResult.map(item => (

                    <div key={item._id} className={classes.singleContainer} style={{ borderBottom: '1px solid #bbb' }}>
                        <Avatar
                            className={classes.avatar}
                            src={item.profilePic && `${getBaseUrl()}/${item.profilePic}`}
                        >
                            {
                                item?.username && `${item.username[0].toUpperCase()}`
                            }
                        </Avatar>
                        <Typography className={classes.username}>{item.username}</Typography>
                        {
                            isMe(item._id) ? null :
                                isFriend(item._id) ?
                                    <Check color='primary' fontSize='large' className={classes.btn} />
                                    :
                                    isPanding(item._id) ?

                                        <GroupAdd onClick={() => onFriendRequestDelete(item._id)} color="secondary" fontSize='large' className={classes.btn} />
                                        :
                                        isInRequest(item._id) ?
                                            <div className={classes.btn}>
                                                <Check onClick={() => onAcceptFriendRequest(item._id)} style={{ margin: '0px 2px' }} color='primary' />
                                                <Clear onClick={() => onFriendRequestReject(item._id)} style={{ margin: '0px 2px' }} color='secondary' />
                                            </div>
                                            :
                                            <AddCircleOutlineOutlined onClick={() => onFriendRequsetSend(item._id)} color="primary" fontSize='large' className={classes.btn} />
                        }
                    </div>
                ))
            }



        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRequestDispatch: (id) => dispatch(addRequest(id)),
        deleteRequsetDispatch: (id) => dispatch(deleteRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
