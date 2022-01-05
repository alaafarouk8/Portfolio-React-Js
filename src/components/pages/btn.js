import React from "react";

class Button extends React.Component {
    constructor (props) {
        super() ;
    
    }
    render() {
    return (
        <div> 
                <button type="button" className="btn btn-outline-light" style={{fontSize:30 }}>{this.props.name}</button>
        </div>

    );
}
}

export default Button;