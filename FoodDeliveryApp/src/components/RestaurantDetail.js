import {useParams} from "react-router";
import useRestInfo from "../utilis/useFetchRestoDetails";
const RestaurantDetail = () =>{
    const requestData = useParams();
    var restInfo = useRestInfo(requestData.restId); 
    
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