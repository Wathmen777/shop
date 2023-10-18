import React from "react";
import {BsFillTrash3Fill} from "react-icons/bs";

export default function Order(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item.img} alt=""/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <BsFillTrash3Fill className="delete-icon" onClick={()=>props.onDelete(props.item.id)}/>
        </div>
    );
}