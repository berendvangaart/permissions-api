import React from 'react';
import css from './sidebar.module.scss'
import {Nav} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logOut} from "../../Store/Login/login.actions";

const Sidebar = () => {
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(logOut())
    }

    return (
        <div className={css.container}>
            <div className={css.navList}>
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link onClick={signOut}>Log out</Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;