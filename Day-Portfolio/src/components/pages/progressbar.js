import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div className="progress">
                <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100" style={{width:this.props.value + "%"}}>
                </div>
            </div>

        );
    }
}

export default ProgressBar;