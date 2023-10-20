import React from "react";

export default function Categories(props){

    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Apple",
            name:"Apple"
        },
        {
            key:'Intel',
            name:'Intel'
        },
        {
            
            key:'MSI',
            name:'MSI'
        },
        {
            
            key:'Lenovo',
            name:'Lenovo'
        },
        {
            
            key:'Seagete',
            name:'Seagete'
        },
        {
            
            key:'Hitachi',
            name:'Hitachi'
        },
        {
            
            key:'WD',
            name:'WD'
        },
        {
            
            key:'Atermaiter',
            name:'Atermaiter'
        },
        {
            
            key:'Ballistic',
            name:'Ballistic'
        }
       
    ];
    

    return(
        < div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}