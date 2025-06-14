import Header from "./Header";
import { useState,useRef } from "react";
import validateForm from "../utilis/validation";

const Login = ()=>{
    const [isLogin,setLogin] = useState(true);
     const [errorMsg,setErrorMsg] = useState("");
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const formHandler = ()=>{
        setLogin(!isLogin);
    }
    const validateData = ()=>{
     const validate = validateForm(email.current.value,password.current.value);
        if(validate != null){
            setErrorMsg(validate);
        }else{
            setErrorMsg("");
        }
    }

    return(
        <div>
            <Header/>
            <div className="bg-dark bg-opacity-10 rounded text-white w-25 position-absolute top-50 start-50 translate-middle">
                <form onSubmit={(e)=>{e.preventDefault();}} className="p-3">
                    <h2 className="p-2"> {isLogin ? "Sign In" : "Sign-Up"}</h2>
                    { !isLogin
                        ?
                      <div className="form-group p-3">
                         <input ref={name} type="Name" className="form-control" id="exampleInputName"  placeholder="Enter Name"/>
                        </div>  
                        : ""
                     }   
                     
                    
                    <div className="form-group p-3">
                       <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                     <div className="form-group p-3">
                       <input ref={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="p-3 d-grid gap-2">
                        <button type="submit" className="btn btn-danger" onClick={validateData}>{isLogin ? "Sign In" : "Sign-Up"}</button>
                       <a href="#" className=" font-weight-normal text-secondary" onClick={formHandler} >Click here to {isLogin ? "Sign-Up" : "Sign In"}</a>
                    </div>
                   <p className="text-danger">{errorMsg}</p>
                </form>    
            </div>
            <div>
                <img className="img-fluid" alt="Bagraound" src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"></img>
            </div>
            

        </div>
    );
}

export default Login;