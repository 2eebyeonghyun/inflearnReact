import React from "react";

function CoursCard({img, tags, title, startPrice, types}) {

    return(
        <div className="CoursCard">
            <div className="cover">
                <img src={img} alt="" />
            </div>

            <div className="info">
                <ul>
                    {tags.map((item, index) => {
                        <li key={index} className="tag">{item}</li>
                    })}
                </ul>

                <h4 className="name">{title}</h4>
                <p className="price">{startPrice.toLocaleString()}원부터</p>
                <ul className="types">
                    {types.map((item, index) => {
                        <li key={index} className="type">{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CoursCard;