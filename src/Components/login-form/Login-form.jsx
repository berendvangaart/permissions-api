import React from 'react';
import {Form, Button} from "react-bootstrap";
import css from './loginForm.module.scss'
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

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
                <Button variant="primary" >
                    Submit
                </Button>
            </Form>
            
        </div>
    );
};

export default LoginForm;