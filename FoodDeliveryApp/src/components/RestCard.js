import {REST_CDN} from "../utilis/constants";
const RestCard = (prop) => {
    console.log(prop);
    const {restData} = prop;
    console.log(restData);
    return(
        <div className="card col-sm-4 rest-card">
            <img src={ REST_CDN +
          restData.data.cloudinaryImageId} className="card-img-top rest-logo" alt="..."></img>
        <div className="card-body">
            <h4 className="card-title">{restData.data.name}</h4>
            <p>{restData.data.cuisines.join(", ")}</p>
            <button type="button" className="btn btn-success">{restData.data.avgRating} * </button>
        </div>
        </div>
    );
};

export default RestCard;