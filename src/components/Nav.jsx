import { Outlet, Link, NavLink } from "react-router-dom";
import {useState} from 'react'

export default function Nav() {
  const [isDropdownVisibleAbout, setDropdownVisibleAbout] = useState(false)
  const [isDropdownVisibleManuf, setDropdownVisibleManuf] = useState(false)
  const [isDropdownVisibleProd, setDropdownVisibleProd] = useState(false)
  const [isDropdownVisibleCont, setDropdownVisibleCont] = useState(false)
  const [isDropdownVisibleFaq, setDropdownVisibleFaq] = useState(false)

  const handleMouseEnterAbout = () => {
    setDropdownVisibleAbout(true);
  }
  const handleMouseLeaveAbout = () => {
    setDropdownVisibleAbout(false);
  }
  
  const handleMouseEnterManuf = () => {
    setDropdownVisibleManuf(true);
  }
  const handleMouseLeaveManuf = () => {
    setDropdownVisibleManuf(false);
  }

  const handleMouseEnterProd = () => {
    setDropdownVisibleProd(true);
  }
  const handleMouseLeaveProd = () => {
    setDropdownVisibleProd(false);
  }

  const handleMouseEnterCont = () => {
    setDropdownVisibleCont(true);
  }
  const handleMouseLeaveCont = () => {
    setDropdownVisibleCont(false);
  }
  
  const handleMouseEnterFaq = () => {
    setDropdownVisibleFaq(true);
  }
  const handleMouseLeaveFaq = () => {
    setDropdownVisibleFaq(false);
  }

    return (
        <nav className='bg-blue-800'>
          <div className="max-w-5xl width-full mx-auto container flex justify-between cursor-pointer text-white font-bold relative"> 
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <Link to={`/`}><p>ГЛАВНАЯ</p></Link>
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
          <p>О ИМЗ</p>
          {isDropdownVisibleAbout &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
      <Link to={`/imz/news`}><li>Новости</li></Link>
        <Link to ={`/imz/about`}><li>О нас</li></Link>
        <Link to ={`/imz/projects`}><li>Проекты</li></Link>
        <Link to ={`/imz/hotel`}><li>Гостиница</li></Link>
        <Link to ={`/imz/parking`}><li>Стоянка</li></Link>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterManuf} onMouseLeave={handleMouseLeaveManuf}>
          <p>ПРОИЗВОДСТВО</p>
          {isDropdownVisibleManuf &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Производственные мощности</li>
        <li>Сертификаты</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterProd} onMouseLeave={handleMouseLeaveProd}>
          <p>ПРОДУКЦИЯ</p>
          {isDropdownVisibleProd &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Труба профильная</li>
        <li>Балки</li>
        <li>Металлоконструкции</li>
        <li>Продукция</li>
        <li>Заказ продукции</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <p>ПОСТАВЩИКАМ</p>
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <p>ВАКАНСИИ</p>
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterCont} onMouseLeave={handleMouseLeaveCont}>
          <p>КОНТАКТЫ</p>
          {isDropdownVisibleCont &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Офис продаж</li>
        <li>Написать письмо</li>
        <li>Заказ продукции</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterFaq} onMouseLeave={handleMouseLeaveFaq} >
          <p>FAQ</p>
          {isDropdownVisibleFaq &&  <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>ГОСТ продукции</li>
        <li>Калькулятор металлопроката</li>
      </ul>
    </div>}
          </div>
          <span></span>
          </div>
  </nav>
    )
}