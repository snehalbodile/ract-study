import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return (
        <div className="col-md-offset-2 col-md-8">
            <hr></hr>
            <p>Function component ====</p>
            <User name="Snehal Bodile" address="Amravti" email="bodile.snehal@gmail.com"/>
            <hr></hr>
            <p>Class component ====</p>
            <UserClass name="Snehal Bodile" address="Pune" email="bodile.snehal@wipro.com"/>
            <hr></hr>
        </div>
       
    );
}

export default About;