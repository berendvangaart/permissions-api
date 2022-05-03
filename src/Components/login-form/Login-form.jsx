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

    const handleLogin = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: 'admin@admin.nl', password: 'test1223' })
        });

        if(res.status === 200) {
            dispatch(signIn(await res.json()))
            history.push("/dashboard");
        }
        if(res.status === 401) setInvalid(true)
    }

    useEffect(() => {
        if (state.user)
            history.push("/dashboard");
    }, [])

    return (
        <div className={css.container}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;