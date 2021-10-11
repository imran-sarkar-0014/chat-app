import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px 15px',
        color: '#000',
        fontWeight: '400'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'space-between'
    },
    logo: {
        height: 60,
        width: 60,
    },
    brandName: {
        fontSize: 30,
        fontWeight: 700
    },
    form: {
        width: 'inherit'
    },
    label: {
        fontSize: 30,
        alignSelf: 'start',
        marginTop: 50
    }
})


export default useStyles