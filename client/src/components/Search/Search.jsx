import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import useStyles from './style'

const Search = () => {
    const classes = useStyles()
    return (
        <Link className={classes.root} to='/search'>
            <div className={classes.container}>
                <SearchIcon style={{ marginRight: 10 }} />
                <Typography>Search</Typography>
            </div>
        </Link>
    )
}

export default Search
