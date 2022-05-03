import React, {useEffect} from 'react';
import Sidebar from "../../Components/sidebar/Sidebar";
import css from './dashboard.module.scss'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Dashboard = () => {
    const state = useSelector((state) => state.login)
    const history = useHistory()

    // redirect to login page if no user is signed in
    useEffect(() => {
        if (!state.user) history.push("/");
    }, [state])


    return (
        <div className={css.container}>
            <Sidebar/>
            <div>
                content
            </div>
        </div>
    );
};

export default Dashboard;