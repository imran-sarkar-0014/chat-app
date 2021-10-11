import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    conversationDetails: {
        paddingLeft: '10px',
    },
    name: {
        fontWeight: 'bold',
        opacity: '.6'
    },
    container: {
        '&:hover': {
            backgroundColor: '#ddd'
        }
    },
    link: {
        textDecoration: 'inherit',
        color: 'inherit'
    }
})

export default useStyles