
import { Navbar } from "../Navbar/Navbar";
import {PortadaNutri} from "../PortadaNutri/PortadaNutri";
import { Products } from "../ItemListContainer/ItemListContainer";


export const Home = () => {
    return (
        <div>
            <Navbar/>

           <div><PortadaNutri/></div> 

            <div className="product-card-container">
                <Products/>
            </div>

        </div>
    );
};



