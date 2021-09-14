import React from 'react';
import {createUseStyles} from 'react-jss';
import Pack from 'components/Pack'

const useStyles = createUseStyles({
    section: {
        padding: 24
    }
})


const ThemePacks = () => {
    const classes = useStyles();

    return (
        <div className={`${classes.section}`}>
            <div className="row">
                <div className="col">
                    <h2>Save 80% with Theme Packs</h2>
                </div>
                <div className="col-auto d-flex align-items-center">
                    <a href="#">See all Theme Packs</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Pack name="Christmas Pack" includes={['25 images']} image="christmas-min.png"/>
                </div>
                <div className="col">
                    <Pack name="Autumn Pack" includes={['22 images', '3 vectors']} image="bundle21.png" />
                </div>
            </div>
        </div>
    )
};

export default ThemePacks;
