import restrautList from "../utilis/utilis";
import RestCard from "./RestCard";
import {useState} from "react";
const Body = () => {
    var [restaurants,setRestaurant] = useState(restrautList); 
    return (
        <div className="container">
             <button type="button" onClick ={ ()=>{
              const filterRest=  restaurants.filter((restaurant)=>{
                    return restaurant.data.avgRating >3;
                });
                setRestaurant(filterRest);
                console.log(filterRest);
             }} className="btn btn-warning btn-sm float-left">sort</button>
            {  
             restaurants.map((restaurant) => {
                    return <RestCard key ={restaurant.data.uuid} restData = {restaurant}/>
                })
            }
           
        </div>
       
        
    );
};

export default Body;