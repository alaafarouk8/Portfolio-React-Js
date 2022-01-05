import React from "react"
class Card extends React.Component {
    constructor(props)
    {
        super()
    }
    render() 
    {
        return <div className="col-4 mb-3">
            <div className="card" style={{ height:"220px" , background:this.props.bgcolor}}>
            <div className="card-body">
                <h2 className={this.props.text + " text.center py-5 card-title"} > </h2>
            </div>
            </div>
            </div>
}
}
export default Card ; 