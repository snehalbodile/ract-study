import {useParams} from "react-router";
import { useState, useEffect } from "react";
const RestaurantDetail = () =>{
    const [restInfo,setRestInfo] = useState([]);
    const requestData = useParams();
   const fetchData = async() =>{
        const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5995992&lng=73.77352619999999&restaurantId="+requestData.restId+"&catalog_qa=undefined&submitAction=ENTER");
        const apiData = await data.json();
        console.log(apiData);
        setRestInfo(apiData?.data?.cards[2]?.card?.card?.info);
    };  
    useEffect(()=>{fetchData()},[]);
    
    console.log(restInfo);
    return (
        <div className="col-md-offset-2 col-md-6 rest-card">
            <div className="card-body">
                <h4 className="card-title">{restInfo?.name}</h4>
                <p>{restInfo?.availabilityServiceabilityMessage}</p>
                <hr></hr>
                <p>{restInfo?.cuisines?.join(", ")}</p>
                <button type="button" className="btn btn-success">{restInfo?.avgRating} * </button>
            </div>
        </div>
    );
}

export default RestaurantDetail;