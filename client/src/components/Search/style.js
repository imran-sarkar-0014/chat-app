import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        flex: '1',
        backgroundColor: '#eee',
        margin: '10px 10%',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        padding: '0px 10px',
        borderRadius: '20px',
        textDecoration: "none",
        color: 'inherit',
    },
    container: {

        width: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    }
})

export default useStyles