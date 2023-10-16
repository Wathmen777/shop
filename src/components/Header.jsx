import React, {useState} from "react";
import {BsFillTrash3Fill} from "react-icons/bs";
import Order from "./Order";
export default function Header(props){
    let[cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo">
                    Центр Электроники
                </span>
            
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Скачать прайс</li>
            </ul>
            <BsFillTrash3Fill onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && `active`}`}/>
            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.map(el => (
                        <Order key={el.id} item={el}/>
                    ))}
                </div>
            )}
            </div>
            <div className="presentation">
                
            </div>
        </header>
    )
}