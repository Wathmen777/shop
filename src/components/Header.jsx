import React, {useState} from "react";
import {BsFillTrash3Fill} from "react-icons/bs"
export default function Header(){
    let[cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo">
                    Центр Электроники
                </span>
            </div>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Скачать прайс</li>
            </ul>
            <BsFillTrash3Fill onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && `active`}`}/>
            <div className="presentation">
                
            </div>
        </header>
    )
}