import React from "react";

class Portfolio extends React.Component{
    
    constructor() { 
        super() 
        this.state ={
        cardInfo : [
        {
            title: "WEB DESIGN",
            color: "bg-dark "
        },
        {
            title: " MOBILE DESIGN",
            color: "bg-secondary "
        }
        ,
        {
            title: "LODO DESIGN",
            color: "bg-dark "
        },
        {
            title: "WEB APPLICATION DEVELOPEMENT",
            color: "bg-secondary "
        }
        ,
        {
            title: "Mobile APPLICATION DEVELOPEMENT",
            color: "bg-dark "
        },
        {
            title: "PWD DEVELOPEMENT",
            color: "bg-secondary "
        }

    ]
}
}
    render() {
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className="row" >
                {
                    this.state.cardInfo.map((item, index) => {
                        return (
                            <div className={`card text-center text-white col-md-4 ${item.color}`} style={{height:200, width :'100' ,textAlign:'center' ,  fontSize:20 , paddingTop:50}}>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <p className="card-text text-center" style={{textAlign:'center' , justifyContent:'center'}} key={index}>{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}
}

export default Portfolio;