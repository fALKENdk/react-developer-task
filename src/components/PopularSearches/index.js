import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    section: {
        padding: 24
    }
})

const PopularSearches = () => {
    const classes = useStyles();
    const [popularSearches, setPopularSearches] = useState([]);

    useEffect(async () => {
        const split = 4, splitRresult = [];
        let i, j, row;

        const fetchData = async () => {
            const result = await axios(
                '/assets/popular-searches.json',
            );

            for (i = 0,j = result.data.length; i < j; i += split) {
                row = result.data.slice(i, i + split);
                splitRresult.push(row);
            }

            setPopularSearches(splitRresult)
        };
     
        fetchData();
    }, []);

    return (
        <div className={`${classes.section}`}>
            <div className="row d-none d-lg-flex">
                <div className="col">
                    <h1>PopularSearches</h1>
                </div>
            </div>

            <div className="row">
                {popularSearches.map((row, index) => (
                    <div className="col" key={`searchgroup-${index}`}>
                        <ol>
                            {row.map((searchItem, index) => (
                                <li key={`searchitem-${index}`}>
                                    <a href={searchItem.url}>{searchItem.name}</a>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PopularSearches;
