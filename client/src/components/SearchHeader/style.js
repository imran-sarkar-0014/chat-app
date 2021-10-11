import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: '#1b97ad',
        padding: '5px',
        display: 'flex',
        padding: '8px 0px',
        alignItems: 'center',
        flexWrap: 'nowrap',
        boxShadow: '1px 2px 2px #a89baa',
        zIndex: '100'
    },
    back: {
        opacity: '.8',
        color: '#fff',
        cursor: 'pointer',
        margin: '0px 5px',
    },
    inputContainer: {
        width: '80%',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '2px 8px',
        borderRadius: '16px'
    },
    icon: {
        opacity: '.4'
    },
    input: {
        flex: '1',
        height: '100%',
        border: 'none',
        fontSize: 16,
        fontWeight: '400',
        padding: '0px 8px',
        '&:focus': {
            outline: 'none'
        }
    }

})

export default useStyles