import { queryData } from "@/service/querys";
import React from "react";

const Card = ({ img, title }: queryData) => {
    return (
        <div>
            <img className="w-[300px] h-[200px]" src={img} alt="img" />
            <h2>{title}</h2>
        </div>
    );
};

export default Card;
