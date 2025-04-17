import { useState, useEffect } from "react";
 const useRestInfo = (restId)=>{
    const [restInfo,setRestInfo] = useState([]);
    const fetchData = async() =>{
    const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5995992&lng=73.77352619999999&restaurantId="+restId+"&catalog_qa=undefined&submitAction=ENTER");
    const apiData = await data.json();
        console.log(apiData);
     setRestInfo(apiData?.data?.cards[2]?.card?.card?.info);
    };  
    useEffect(()=>{fetchData()},[]);
    
    return restInfo;
}
export default useRestInfo;
