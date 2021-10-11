import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flex: '1',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
    },
    singleContainer: {
        //backgroundColor: 'red',
        padding: '8px 8px',
        backgroundColor: '#eee',
        borderBottomColor: '1px solid black',
        display: 'flex',
        alignItems: 'center',
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: '0px 8px',
        opacity: '.7',
    },
    btn: {
        cursor: 'pointer',
        marginLeft: 'auto',
        opacity: '.6'
    }
})

export default useStyles