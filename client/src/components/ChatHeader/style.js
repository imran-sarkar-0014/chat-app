import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        background: '#1b97ad',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        boxShadow: '1px 2px 2px #a89baa'
    },
    left: {

    },
    leftWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
    headerLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, backButton: {
        color: '#fff',
        margin: '0px 5px',
        cursor: 'pointer'
    }, avatar: {
        margin: '0px 5px'
    }, name: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default useStyles