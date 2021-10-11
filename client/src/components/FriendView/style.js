import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 10px',
        '&:hover': {
            backgroundColor: '#ddd'
        },
        borderBottom: '1px solid #bdbdbd'
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    btnContainer: {
        marginLeft: 'auto',
        marginRight: 10
    },
    btn: {
        margin: 5,
    }
})

export default useStyles