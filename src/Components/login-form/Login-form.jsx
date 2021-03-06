import React, {useEffect, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import css from './loginForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../Store/Login/login.actions";

const LoginForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.login)

    const [invalid, setInvalid] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        });

        if (res.status === 200) {
            setInvalid(false)
            dispatch(signIn(await res.json()))
            history.push("/dashboard");
        }
        if (res.status === 401) setInvalid(true)
    }

    const handleMailChange = (e) => setEmail(e.target.value)

    const handlePasswordChange = (e) => setPassword(e.target.value)

    useEffect(() => {
        if (state.user)
            history.push("/dashboard");
    }, [])

    return (
        <div className={css.container}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    {invalid ?
                        (<Form.Control onChange={handleMailChange} type="email" placeholder="Enter email" required isInvalid/>) :
                        (<Form.Control onChange={handleMailChange} type="email" placeholder="Enter email"/>)
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    {invalid ?
                        (<>
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required isInvalid/>
                            <Form.Control.Feedback type="invalid">
                                wrong username or password
                            </Form.Control.Feedback>
                        </>) :
                        (<Form.Control onChange={handlePasswordChange} type="password" placeholder="Password"/>)}
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}> Log in </Button>
            </Form>
        </div>
    );
};

export default LoginForm;