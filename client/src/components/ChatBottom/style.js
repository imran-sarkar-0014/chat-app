import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: 60,
        padding: '5px 10px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopColor: '1px solid #bbb',
    },
    inputWrapper: {
        flex: '1',
        maxWidth: 560,
        margin: '0px 16px',
        padding: '3px 16px',
        borderRadius: '16px',
        height: '80%',
        backgroundColor: '#ccc',
    },
    input: {
        height: '100%',
        width: '100%',
        border: 'none',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'inherit',
        outline: 'none',
        '& :focus': {
        }
    },
    sendWrapper: {
        margin: '0px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
        backgroundColor: '#ddd',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    send: {
        opacity: '.9'
    }

})

export default useStyles