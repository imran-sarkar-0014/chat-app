import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        height: 70,
        position: 'fixed',
        backgroundColor: '#fff',
        top: '0',
        left: '0',
        alignItems: 'center',
        justifyItems: 'center'
    },
    brandName: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: 'fit-content',
        padding: 10,
        borderRadius: '50%',
        alignItems: 'center',
        backgroundColor: '#eee',
        color: 'inherit'
    },
    icon: {
        fontSize: 32,
        height: 32,
        width: 32,
        opacity: '.5',
        color: 'inherit'
    },
    active: {
        color: 'blue',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    avatar: {
        paddingLeft: 10
    },
    red: {
        backgroundColor: 'red'
    }
})

export default useStyles