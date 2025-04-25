import restrautList from "../utilis/utilis";
import RestCard from "./RestCard";
import useOnlineStatus from "../utilis/useOnlineStatus";
import {useState,useEffect} from "react";
const Body = () => {
     var [restaurants,setRestaurant] = useState([]);
    var [filterRestaurants,setFilterRestaurant] = useState([]);
    var [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
        },[]); 
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        
        const apiData = await data.json();
        setRestaurant(apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurant(apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(restaurants);
       // console.log(apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus);
   if(onlineStatus === false){
    console.log("Offline Status");
        return(<div className="col-md-12">
                <h3>
                    Looks like you're offline!! Please check your internet connection.....
                </h3>
            </div> 
            );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-md-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" id="txtSearch" value ={searchText} 
                    onChange={(e)=>{
                       setSearchText(e.target.value);
                    }}
                    />
                    <div className="input-group-btn">
                    <button className="btn btn-primary" type="submit"
                        onClick={()=>{
                           var filterData = restaurants.filter(
                                (restaurant)=>{
                                    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                                }
                            );
                            setFilterRestaurant(filterData);                          
                        }}
                    >
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                    {/* <button type="button" onClick ={ ()=>{
                        const filterRest=  restaurants.filter((restaurant)=>{
                                return restaurant.info.avgRating >3;
                            });
                            setRestaurant(filterRest);
                        }} className="btn btn-warning btn-sm float-left">sort</button> */}
                    </div>
                </div>
                </div>
            </div>
           
            {  
             filterRestaurants.map((restaurant) => {
                    return <RestCard key ={restaurant.info.id} restData = {restaurant}/>
                })
            }
           
        </div>
       
        
    );
};

export default Body;