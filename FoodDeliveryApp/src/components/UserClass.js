import React  from "react";
class AboutClass extends React.Component {
    constructor(props){
        console.log("constructor");
        super(props);
      this.state = {
            'count' :0
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
       return (
       
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Address: {this.props.address}</h3>
                <h3>Email Id: {this.props.email}</h3>
                <h4>Count: {this.state.count} 
                    <button type="button" className="btn btn-info btn-sm" onClick={()=>{
                        this.setState({
                            count: this.state.count + 1,
                        }) ;
                    }}>Update count</button>
                </h4>
            </div>
            
        );
    };
}

export default AboutClass;