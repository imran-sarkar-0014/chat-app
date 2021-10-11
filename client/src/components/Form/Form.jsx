import React, { useState } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './style'
import InputField from './InputField'
import { connect } from 'react-redux'
import { updateUser } from '../../store/actions/userAction'


import { login, register as userRegister } from '../../api/expressApi'

const Form = ({ register, userDispatch }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState('')

    const classes = useStyles()


    const handleLogin = () => {
        login({ email: email, password: password }, (result) => {
            if (result.hasError) {
                setHasError(true)
                setError('Login Failed')
                setTimeout(() => {
                    setError('')
                    setHasError(false)
                }, 500)
            } else {
                localStorage.setItem('token', result.data)
                userDispatch(result.data)
            }
        })
    }

    const handleRegister = () => {
        userRegister({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }, (result) => {
            if (result.hasError) {
                setHasError(true)
                setError('Email Already Taken.')
                setTimeout(() => {
                    setError('')
                    setHasError(false)
                }, 500)
            } else {
                localStorage.setItem('token', result.data)
                userDispatch(result.data)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (register) {
            handleRegister()
        } else {
            handleLogin()
        }
    }

    return (
        <Container maxWidth='xs' className={classes.root}>
            <div className={classes.brandContainer}>
                <img className={classes.logo} src="/icons/messenger-active.svg" alt="" />
                <Typography className={classes.brandName}>Chat</Typography>
            </div>
            <Typography className={classes.label}>
                {
                    register ? 'Registration' : 'Login'
                }
            </Typography>

            <form onSubmit={handleSubmit} className={classes.form}>

                {
                    register &&
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <InputField name='First Name' state={firstName} setState={setFirstName} type='text' />
                        </Grid>
                        <Grid item xs={6}>
                            <InputField name="Last Name" state={lastName} setState={setLastName} type='text' />
                        </Grid>
                    </Grid>

                }


                <InputField name="email" state={email} setState={setEmail} type="text" />
                <InputField name="password" state={password} setState={setPassword} type="password" />

                {
                    hasError &&
                    <Typography style={{ color: 'red' }}>{error}</Typography>
                }

                <Button
                    type='submit'
                    onClick={handleSubmit}
                    fullWidth
                    style={{ margin: '20px 0px' }}
                    variant='contained' color='primary'>{register ? 'Register' : 'Login'}</Button>
            </form>
            <Typography style={{ marginTop: 10 }}>{register ? 'Already have a account?' : 'Do not have account?'} <Button color='primary' component={Link} to={register ? '/' : "/register"}>{register ? 'Login' : 'Register'}</Button></Typography>
        </Container >
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        userDispatch: (user) => dispatch(updateUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Form)
