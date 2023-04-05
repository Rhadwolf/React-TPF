
import { useContext } from "react"
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import "./Navbar.css";

export const Navbar = () => {
   const { cart } = useContext(dataContext);
   return (
      <header className="header">
         <div className="header__container">
            <Link to={"/"}><img src='./imgs/adn.jpg' alt="logo" className="Header__logo"></img></Link>
            
            <nav className="navbar">
               <Link className="navbar__link" to={"Nosotros"}>Nosotros</Link>
               <Link className="navbar__link" to={"Servicios"}>Servicios</Link>
               <Link className="navbar__link" to={"Contacto"}>Contacto</Link>
               <Link className="navbar__link" to={"/Cart"}>🛒
               {cart.length > 0 ? <TotalItems /> : null}
               </Link>
            </nav>

         </div>
      </header>

   );


};

