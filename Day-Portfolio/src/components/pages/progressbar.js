import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div className="progress">
                <div className="progress-bar bg-secondary" style={{width:this.props.value + "%"}}>
                </div>
            </div>

        );
    }
}

export default ProgressBar;