import React from 'react';
import Header from 'components/Header';
import PopularSearches from 'components/PopularSearches';
import ThemePacks from 'components/ThemePacks';

const App = () => (
    <>
        <Header />
        <div className="container">
            
        </div>
        <div className="container">
            <PopularSearches />
            <ThemePacks />
        </div>
        
    </>
);

export default App;
