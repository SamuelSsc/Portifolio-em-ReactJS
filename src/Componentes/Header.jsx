//Componente que é Carregado na tela.
export function Header(){
    return( 
        <div class="container">
            
            <header id="navbar" class="headfot">
                <h1>Samuel Santana
                    <a href="index.html" ></a> 
                </h1>

                <nav id="navegacaonav" >

                    <button type="Button" class="buttonnav">
                        <a href="paginas/projetos.html">Meus Projetos</a>  
                    </button>
                    <button type="Button" class="buttonnav">
                        <a href="paginas/sobre.html">Quem sou eu</a>  
                    </button>
                </nav>  

            </header>
        </div>
    )
}