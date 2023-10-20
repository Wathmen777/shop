import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {
  const [orders,setOrders]=useState([]);
  const[currentItems,setCurrentItems]=useState([]);
  const[showFullItem,setshowFullItem]=useState(false);
  const[items,setItems]=useState([
    {
      id:1,
      title:"Ноутбук Apple",
      img:'apple.jpg',
      desc:'Ноутбук Apple MacBook Air − это тонкий и легкий аппарат с диагональю экрана 13.3", который функционирует на базе macOS. Он выполнен в металлическом корпусе классической конструкции. Аппаратная составляющая представлена процессором Apple M1 с восьмиядерной конфигурацией, модулем памяти DDR4 объемом 8 ГБ, что позволяет системе реагировать на действия пользователя в 3.5 раза быстрее. К тому же, аппарат обладает высокой производительностью, сочетающейся с улучшенной энергоэффективностью.',
      category:'Apple',
      price:'1000'
    },
    {
      id:2,
      title:"Ноутбук Intel ",
      img:'intel.jpg',
      desc:'Ноутбук Irbis NB276 – надежный помощник с востребованным набором функций для повседневной работы или учебы. Он отличается компактными размерами и весом 1.56 кг. Мобильный компьютер получил в оснащение процессор Intel Pentium J3710 и 4 ГБ памяти ОЗУ. Под хранение пользовательских файлов предлагается накопитель SSD емкостью 128 ГБ.',
      category:'Intel',
      price:'1000'
    },
    {
      id:3,
      title:"Ноутбук MSI",
      img:'msi.jpg',
      desc:'Позвольте себе насладиться всеми преимуществами работы с использованием ультрабука MSI Modern 14 C12M-233XRU. Процессор Intel Core i3-1215U с 6 ядрами и графическое ядро Intel UHD Graphics возьмут ответственность за быстрый запуск файлов и приложений, исключая малейшие промедления. Оперативная связь с коллегами и участие в совещаниях онлайн-формата теперь возможно благодаря веб-камере, микрофону и модулю WI-FI 6 (802.11ax).',
      category:'MSI',
      price:'1000'
    },
    {
      id:4,
      title:"Ноутбук Lenovo",
      img:'lenovo.jpg',
      desc:'Ноутбук Lenovo IdeaPad 3 14ADA05 создан для работы и учебы. Он оформлен в классической расцветке и обладает востребованным набором функций. На экране 14 дюймов формата TN FullHD с антибликовой поверхностью отображается четкая картинка. Клавиатура и тапчад гарантируют удобство работы в программах.',
      category:'Lenovo',
      price:'1000'
    },
    {
      id:5,
      title:"Жесткий диск Seagete",
      img:'seaget.jpg',
      desc:'Жесткий диск Seagate SkyHawk [ST1000VX005] разработан специально для требовательных систем, такие как – сетевые видеорегистраторы. Он способен функционировать в режиме круглосуточной нагрузки и обеспечивает стабильность на протяжении длительной эксплуатации. Данная модель обладает емкостью 1 ТБ и подключается к оборудованию посредством интерфейса SATA III',
      category:'Seagete',
      price:'1000'
    },
    {
      id:6,
      title:"Жесткий диск Hitachi",
      img:'hitachi.jpg',
      desc:'Универсальный жесткий диск HHitachi Travelstar 7K1000 HTS721010A9E630 обладает форм-фактором 2.5 дюйма и является вместительным внутренним накопителем. Может устанавливаться в ноутбуках, портативных ПК и игровых консолях. 1 ТБ памяти позволяет хранить множество файлов, игровых программ и приложений.',
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
      desc:'Память DDR3 8 Gb PC1600 (PC3-12800) Atermiter это удобная и недорогая составляющая компьютера, которую вы можете приобрести в нашем магазине. Объем в 8192 Мб позволит вам дополнить оснащение вашего системного блока.',
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

  useEffect(()=>{
    setCurrentItems(items);
  }, [items]);

  

  const addToOrder=(item3)=>{
    //if(!orders.some((el)=>el.id===item3.id)){
     // setOrders([...orders,item3]);
    //}
    setOrders([...orders,item3]);
  }

  const deleteOrder =(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  const chooseCategory=(category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el)=>el.category===category));
    }
  }

  const onShowItem=(item)=>{
    setshowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem/>}
    <Footer/>
    </div>
  );
  
}

