import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    container: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '720px',
    },
    cover: {
        flex: '1',
        height: 280,
        margin: '0px 0px 16px 0px',
        opacity: '1',
    },
    coverImg: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
    },
    profile: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'start',
        margin: '8px',
    },
    profilePicContainer: {
        display: 'flex',
        position: 'relative'
    },
    profilePic: {
        height: 60,
        width: 60,
    },
    addPhoto: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        cursor: 'pointer'
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '8px',
        opacity: '.7'
    },
    button: {
        marginRight: '16px',
        marginLeft: 'auto'
    }
})

export default useStyles