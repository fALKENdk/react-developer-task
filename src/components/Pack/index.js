import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    pack: {
        '& h3': {
            fontSize: 22,
            fontWeight: 'bold',
            margin: '16px 0 0'
        }
    }
})

const Pack = (props) => {
    const classes = useStyles();

    return (
        <div className={`${classes.pack}`}>
            <img src={`/assets/${props.image}`} className="img-fluid"/>
            <h3>{props.name}</h3>
            <div>Includes: &nbsp;
                {props.includes.map((item, index) => (
                    index === props.includes.length - 1 ? 
                       <span key={`pack-includes-${index}`} >{item}</span>
                   :
                       <span key={`pack-includes-${index}`}>{item}, </span>
                ))}
            </div>
        </div>
    );
};

export default Pack;
