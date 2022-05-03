import React from 'react';
import Sidebar from "../../Components/sidebar/Sidebar";
import css from './dashboard.module.scss'

const Dashboard = () => {
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