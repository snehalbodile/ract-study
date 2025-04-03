import {REST_CDN} from "../utilis/constants";
const RestCard = (prop) => {
    const {restData} = prop;
    return(
        <div className="card col-sm-4 rest-card">
            <img src={ REST_CDN +
          restData.info.cloudinaryImageId} className="card-img-top rest-logo" alt="..."></img>
        <div className="card-body">
            <h4 className="card-title">{restData.info.name}</h4>
            <p>{restData.info.cuisines.join(", ")}</p>
            <button type="button" className="btn btn-success">{restData.info.avgRating} * </button>
        </div>
        </div>
    );
};

export default RestCard;