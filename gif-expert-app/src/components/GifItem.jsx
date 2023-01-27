import React from "react";
export const GifItem = ({id,imgn,title}) => {
    //console.log(props.imgn.id)
    return (        
        <div className="card">
            <img src={imgn}
                alt={id} >
            </img>
            <p>{title}</p>
        </div>        
    );

}
