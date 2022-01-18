// Tirei a importação do React para ser configurado pelo Babel
import {render} from "react-dom";
import {App} from "./App"

//render recebe dois parametros (o que eu quero reenderizar, dentro de qual elemento)
render(<App />, document.getElementById('root'))       //Colocou o h1 dentro do id root -> apaguei o h1 para por o App que foi importado 
//Para chamar um elemento importado se usa <NOME DO ELEMENTO />