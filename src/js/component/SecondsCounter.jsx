import React from "react";

function SecondsCounter(props){
    return (
        <div className="container-fluid text-center m-0 bg-dark">
            <div className="row text-center">
                <div className="col-sm-2 text-center p-4">
                    <i className="fa-solid fa-clock display-1 bg-white rounded-circle p-2"></i>
                </div>
                <div className="col-10 text-center p-3 bg-dark">
                    <div className="display-1 fw-bold text-white">{props.digit1}</div>
                    <p>{props.seconds}</p>
                </div>
            </div>
        </div>
    );
};
export default SecondsCounter;