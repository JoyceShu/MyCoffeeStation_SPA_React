import React from 'react';
import '../css/menu.css';


function Menu({ setPage }) {
    function navTo(e, target) {
        setPage(target);
    }

    return (
        <div className="menubar">
            <ul className="menu">
                <li><a href="#home" onClick={(e) => navTo(e, 'Home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => navTo(e, 'About')}>About</a></li>
                <li><button type="button">Menu</button>
                    <ul className="submenu">
                        <li><a href="#Menu/coffee" onClick={(e) => navTo(e, 'Coffee')}>Coffee</a></li>
                        <li><a href="#Menu/tea" onClick={(e) => navTo(e, 'Tea')}>Tea</a></li>
                    </ul>
                </li>
                <li><a href="#posts" onClick={(e) => navTo(e, 'Posts')}>Posts</a></li>
                <li><a href="#privacy" onClick={(e) => navTo(e, 'Privacy')}>Privacy</a></li>
            </ul>
        </div>
    );
};

export default Menu;