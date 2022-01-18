
import { Footer } from './Componentes/Footer';
import { Header } from './Componentes/Header';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Sobre } from './pages/Sobre';
import './styles/global.scss';


export function App(){          //Isso daqui é um Componente
    return (
        <div class="container"> {/*Sempre que houver dois componentes para serem reenderizados eles precisam estar entorno de algo, no caso seria uma div ou o fragment que as <> vazio Usado para não afetar em nada no css*/}
            <Header />
            <Sobre />
            <Footer />
        </div>
    )

}