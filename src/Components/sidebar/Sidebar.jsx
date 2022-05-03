import React from 'react';
import css from './sidebar.module.scss'
import {Nav} from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className={css.container}>
            <div className={css.navList}>
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;