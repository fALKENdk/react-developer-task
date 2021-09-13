import React from 'react';
import Pack from 'components/Pack'

const ThemePacks = () => (
    <React.Fragment>
        <div className="row">
            <div className="col">
                <h2>Save 80% with Theme Packs</h2>
            </div>
            <div className="col">
                <a href="#">See all Theme Packs</a>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Pack name="Christmas Pack" includes={['25 images']} image=""/>
            </div>
            <div className="col">
                <Pack name="Autumn Pack" includes={['22 images', '3 vectors']} image="" />
            </div>
        </div>
    </React.Fragment>
);

export default ThemePacks;
