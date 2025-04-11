import { useState } from "react";

const User = (props) =>{
    const {name,address,email} =props;
    const [count] = useState(0);
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Address: {address}</h3>
            <h3>Email Id: {email}</h3>
            <h4>Count: {count}</h4>
        </div>
        
    );
}

export default User;