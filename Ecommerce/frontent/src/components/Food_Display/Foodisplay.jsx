import React, { useState } from 'react'
import './foodisplay.css'
import { StoreContext } from "../../components/Context/StoreContext";

import Fooditems from '../Fooditems/Fooditems';
import { useContext } from 'react';

const Foodisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

 
    // console.log("Category:", category);
    // console.log("Food List:", food_list);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <Fooditems
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        ); 
                    }
                   
                    
                })}
            </div>
        </div>
    );
};

export default Foodisplay;
