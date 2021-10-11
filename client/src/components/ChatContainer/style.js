import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    }, messageContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '2px 5px'
    }, messageWrapper: {
        maxWidth: '70%',
        backgroundColor: '#ddd',
        margin: '0px 5px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }, messageText: {
        maxWidth: '100%',
        width: 'fit-content',
        minWidth: 100,
        margin: '8px 5px',
        fontWeight: 'bold',
        padding: '0px 8px',
        textAlign: 'center',
    },
    left: {
        alignSelf: 'flex-end',
        '& #messageContainer': {
            justifyContent: 'flex-end',
        },
        '& #messageWrapper': {
            backgroundColor: '#0091f7',
            color: '#fff'
        }

    }, messageLeft: {

    }
})

export default useStyles