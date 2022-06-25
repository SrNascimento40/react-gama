import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Marketplace from "./pages/Marketplace";

// routes permite acesso as urls e alternar as pages
export default function Routes(){
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/:nome" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Marketplace" element={<Marketplace />} />
            </WrapperRoutes>
        </BrowserRouter>
    );
}

//BrowserRouter da acesso a rota para saber qual componente acessar
//WrapperRoutes troca de componente (destroi o que é desnecessário e constroi o que precisa, sem recarregar a página)