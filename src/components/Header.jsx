import React, {useState} from "react";
import {BsFillTrash3Fill} from "react-icons/bs";
import Order from "./Order";

const showOrders=(props)=>{
    let summa=0;
    props.orders.forEach(el=>summa +=Number.parseFloat(el.price))
    return(
    <div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className="summa">К оплате:{new Intl.NumberFormat().format(summa)}</p>
    </div>
    );
}

const showNothing=()=>{
    return(
        <div className="empty">
            <h2>Товары в корзине отсутствуют</h2>
        </div>
    )
}

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

                    {props.orders.length > 0 ?
                    showOrders(props):showNothing ()
                    }

                    
                </div>
            )}
            </div>
            <div className="presentation">
                
            </div>
        </header>
    )
}