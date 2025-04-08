import {REST_CDN} from "../utilis/constants";
import { Link} from "react-router";
const RestCard = (prop) => {
    const {restData} = prop;
    console.log(restData.infos);
    return(
      
        <Link to={"restaurant/"+ restData.info.id}>
            <div className="card col-sm-4 rest-card">
                <img src={ REST_CDN +
            restData.info.cloudinaryImageId} className="card-img-top rest-logo" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{restData.info.name}</h4>
                <p>{restData.info.cuisines.join(", ")}</p>
                <button type="button" className="btn btn-success">{restData.info.avgRating} * </button>
            </div>
            </div>
        </Link>
    );
};

export default RestCard;