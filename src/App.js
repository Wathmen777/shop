import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import Items from "./components/Items";

export default function App() {
  const[items,setItems]=useState([
    {
      id:1,
      title:"Ноутбук Apple",
      img:'apple.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Apple',
      price:'1000'
    },
    {
      id:2,
      title:"Ноутбук Intel ",
      img:'intel.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Intel',
      price:'1000'
    },
    {
      id:3,
      title:"Ноутбук MSI",
      img:'msi.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'MSI',
      price:'1000'
    },
    {
      id:4,
      title:"Ноутбук Lenovo",
      img:'lenovo.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Lenovo',
      price:'1000'
    },
    {
      id:5,
      title:"Жесткий диск Seagete",
      img:'seaget.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Seagete',
      price:'1000'
    },
    {
      id:6,
      title:"Жесткий диск Hitachi",
      img:'hitachi.jpg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Hitachi',
      price:'1000'
    },
    {
      id:7,
      title:"Жесткий диск WD Blue",
      img:'wd.jpg',
      desc:'Жесткий диск WD Blue [WD10EZEX] станет надежным дополнением в настольном компьютере, обеспечивая надежность хранения различного контента и быстрый доступ к данным. Высокая производительность запоминающего устройства достигается за счет скорости вращения шпинделя 7200 об/мин и технологии NCQ.',
      category:'WD',
      price:'5000'
    },
    {
      id:8,
      title:"Оперативная память Atermiter ",
      img:'atermiter.jpeg',
      desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      category:'Atermaiter',
      price:'1000'
    },
    {
      id:9,
      title:"Оперативная память Crucial Ballistix Black",
      img:'crucial.jpeg',
      desc:'16-гигабайтная оперативная память Crucial Ballistix Black [BL2K8G32C16U4B] будет полезна при сборке или модернизации игрового компьютера высокого класса. Вы получите в свое распоряжение два 8-гигабайтных модуля DDR4, оборудованных высокоэффективными радиаторами. Элементы теплоотвода необходимы, ведь «игровая» память часто используется в интенсивном режиме. Напряжение питания устройства повышено до 1.35 В.',
      category:'Ballistic',
      price:'5000'
    },
    {
      id:10,
      title:"Материнская плата MSI A320M-A PRO",
      img:'motherboard.jpg',
      desc:'Соответствующая форм-фактору Micro-ATX материнская плата MSI A320M-A PRO отличается компактностью: габаритные размеры устройства составляют 226x187 мм. Миниатюрность не мешает модели обеспечивать уровень функциональных возможностей, который удовлетворит потребности большого количества пользователей. ',
      category:'MSI',
      price:'6090'
    }

  ]);
  return (
    <div className="wrapper">
    <Header/>
    <Items allItems={items}/>
    <Footer/>
    </div>
  );
}

