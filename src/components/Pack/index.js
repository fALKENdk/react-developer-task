import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    pack: {
        backgroundColor: 'deeppink'
    }
})

const Pack = (props) => {
    const classes = useStyles();

    return (
        <div className={`${classes.pack}`}>
            <h3>{props.name}</h3>
            <div>Includes: 
                {props.includes.map((item, index) => (
                    index === props.includes.length - 1 ? 
                       <span>{item}</span>
                   :
                       <span>{item}, </span>
                ))};
            </div>
        </div>
    );
};

export default Pack;
