import React from 'react';
import LoginForm from "../../Components/login-form/Login-form";
import css from './login.module.scss'

const Login = () => {
    return (
        <div className={css.center}>
            <LoginForm/>
        </div>
    );
};

export default Login;