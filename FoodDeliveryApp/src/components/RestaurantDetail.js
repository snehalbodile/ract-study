import {useParams} from "react-router";
import useRestInfo from "../utilis/useFetchRestoDetails";
const RestaurantDetail = () =>{
    const requestData = useParams();
    var restData = useRestInfo(requestData.restId); 
        console.log(restData);
    var restInfo = restData.restInfo;
    var restItems = restData.restItems;
    return (
        <div className="col-md-offset-2 col-md-6 rest-card">
            <div className="card-body">
                <h3 className="card-title">{restInfo?.name}</h3>
                <p>{restInfo?.availabilityServiceabilityMessage}</p>
                <hr></hr>
                <p>{restInfo?.cuisines?.join(", ")}</p>
                <button type="button" className="btn btn-success">{restInfo?.avgRating} * </button>
                <hr></hr>
                {
                    restItems.map((restItem)=>{
                        return(
                            <div key ={restItem.card.card.categoryId}>
                            <button type="button" className="btn btn-outline-light text-dark" data-toggle="collapse" data-target={"#"+restItem.card.card.categoryId}><h4>{restItem.card.card.title}</h4></button>
                             <div id={restItem.card.card.categoryId} className="collapse">
                                {
                                    restItem.card.card.itemCards.map(
                                        (item)=>{
                                            return(
                                                <div key={item.card.info.id}>
                                                     <hr></hr>
                                                    <p><b>{item?.card?.info?.name}</b></p>
                                                    <p><b>Rs.{item?.card?.info?.price/100}</b></p>
                                                    <p className="text-success"><b>★ {item?.card?.info?.ratings?.aggregatedRating?.rating}</b></p>
                                                    <p>{item?.card?.info?.description}</p>
                                                </div>
                                                
                                            )
                                        }
                                    )
                                } 
                             </div>
                             <hr></hr>
                            </div>
                            
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default RestaurantDetail;