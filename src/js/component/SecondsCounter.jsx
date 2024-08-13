import React from "react";
function SecondsCounter(props){
    let first=props.digit
    let second=0;
    let third=0;
    let fourth=0;
    let fifth=0;
    let sixth=0;
    if (props.digit>9) {
        second=Math.floor(first/10);
        first=first%10;
        if (second>9) {
            third=Math.floor(second/10);
            second=second%10;
            if (third>9) {
                fourth=Math.floor(third/10);
                third=third%10;
                if (fourth>9) {
                    fifth=Math.floor(fourth/10);
                    fourth=fourth%10;
                    if (fifth>9) {
                        sixth=Math.floor(fifth/10);
                        fifth=fifth%10;
                    }
                }
            }           
        }
    };
    return (
        <div className="container-fluid text-center m-0 bg-dark">
            <div className="row text-center">
                <div className="col-sm-2 text-center p-5">
                    <i className="fa-solid fa-clock display-1 bg-white rounded-circle p-2"></i>
                </div>
                <div className="col-sm-10 text-center p-5 bg-dark">
                    <div className="row text-center text-white display-1">
                        <div className="col-sm-2 fw-bold border-2 border-end border-start border-secondary">{sixth}</div>
                        <div className="col-sm-2 fw-bold border-2 border-end border-secondary">{fifth}</div>
                        <div className="col-sm-2 fw-bold border-2 border-end border-secondary">{fourth}</div>
                        <div className="col-sm-2 fw-bold border-2 border-end border-secondary">{third}</div>
                        <div className="col-sm-2 fw-bold border-2 border-end border-secondary">{second}</div>
                        <div className="col-sm-2 fw-bold border-2 border-end border-secondary">{first}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SecondsCounter;