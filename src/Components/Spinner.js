import React from "react";
import image from "./images/tenor.gif";

const Spinner = () => {
    return (
        <div className="text-center">
            <img style={{width : "200px"}} src={image} alt="load" />
        </div>
    );
}
export default Spinner