import React from 'react';
import {createUseStyles} from 'react-jss';

import SearchBar from 'components/SearchBar'

const useStyles = createUseStyles({
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 999,
    },
    navbar: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '16px 0',

        '& a': {
            textDecoration: 'none',
            color: '#fff',

            '&:hover' : {
                color: 'rgb(28, 188, 131)',
            },

            '&:focus' : {
                textDecoration: 'underline',
                color: 'rgb(28, 188, 131)',
            }
        }
    },
})

const Header = (props) => {
    const classes = useStyles();

    return (
        <header className={`${classes.header}`}>
            <div className={`${classes.navbar} d-none d-lg-block`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav aria-labelledby="mainmenulabel">
                                <h2 id="mainmenulabel" className="sr-only">Main Menu</h2>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Categories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Images</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Vectors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Videos</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto">
                            <nav aria-labelledby="mainmenulabel">
                                <h2 id="mainmenulabel" className="sr-only">Main Menu</h2>
                                menu
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.navbar} d-lg-none`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="/">
                                <img src="/assets/logo-header.svg" alt="Colourbox" />
                            </a>
                        </div>
                        <div className="col-auto">
                            <nav aria-labelledby="mainmenulabel">
                                <h2 id="mainmenulabel" className="sr-only">Main Menu</h2>
                                menu
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar />
        </header>
    );
};

export default Header;
