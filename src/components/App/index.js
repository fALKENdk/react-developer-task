import React from 'react';
import Header from 'components/Header';
import PopularSearches from 'components/PopularSearches';
import ThemePacks from 'components/ThemePacks';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        body: {

        },
        a: {
          textDecoration: 'underline'
        },
        h1: {
            fontSize: 30,
            margin: '0 0 24px'
        },
        h2: {
           fontSize: 30,
           margin: '0 0 24px'
        },
    }
})

const App = () => {
    useStyles()

    return (
        <>
            <a className="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>
            <Header />
            <main id="maincontent">
                <div className="container">
                    
                </div>
                <div className="container">
                    <PopularSearches />
                    <ThemePacks />
                </div>
            </main>
        </>
    );
};

export default App;
