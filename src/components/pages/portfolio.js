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
            <div className="row  gap-3 text-center" style={{justifyContent:'center'}} >
                {
                    this.state.cardInfo.map((item, index) => {
                        return (
                            <div className={`card text-center text-white col-md-3 ${item.color}`} style={{height:300, width :'100' ,textAlign:'center' , padding:70, fontSize:20}}>
                                <div className="card-body" >
                                    <p className="card-text text-center" style={{textAlign:'center'}} key={index}>{item.title}</p>
                                    <hr className="bg-light text-center" style={{ size: '5' }} />
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

// style={{height:200, width :'100' ,textAlign:'center' ,  fontSize:20}}