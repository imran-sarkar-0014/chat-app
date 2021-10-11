import React, { useState, useRef } from 'react'
import { ArrowBack, Search } from '@material-ui/icons';
import { useHistory } from 'react-router';

import useStyles from './style'

const SearchHeader = (props) => {

    const { searchKey, setSearchKey } = props
    const classes = useStyles()
    const history = useHistory()

    const onBack = () => {
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <ArrowBack onClick={onBack} fontSize='large' className={classes.back} />
            <div className={classes.inputContainer}>
                <Search className={classes.icon} />
                <input
                    autoFocus
                    className={classes.input}
                    placeholder='Search your friends'
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    type="text" />
            </div>
        </div>
    )
}

export default SearchHeader
