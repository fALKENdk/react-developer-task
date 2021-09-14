import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    searchbar: {
        borderBottom: '1px solid #ccc',
        padding: '24px 0'
    },

    searchbox: {
        padding: '2px 16px',
        border: '1px solid #ccc',
        borderRadius: 48,

        '&:focus-within' : {
            borderColor: 'rgb(28, 188, 131)'
        },
        
        '& input': {
            outline: 'none',
            border: 'none',
            width: '100%',
            height: 48,
        },
    }

})

const SearchBar = (props) => {
    const classes = useStyles();

    return (
        <div className={`${classes.searchbar}`}>
            <div className="container">
                <div className="row">
                    <div className="col-auto d-none d-lg-flex align-items-center">
                        <a href="/">
                            <img src="/assets/logo.svg" alt="Colourbox" />
                        </a>
                    </div>
                    <div className="col">
                        <div className={`${classes.searchbox}`}>
                            <input type="text" type="text" placeholder="Search within 26 million photos, illustrations & videos" />
                        </div>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        bag
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
