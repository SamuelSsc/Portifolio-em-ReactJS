import Eu from '../assets/meubanner.jpg'

//Componente que é Carregado na tela.
export function Home(){
    return( 
        <body>

                
            <div class="conteudoindex">

                <div class="flex-cont" id="column_left">

                    <p class="textdestaque"> 
                        <strong>
                            Seja bem vindo, eu sou o Samuel
                            Santana de Camargo e estou em busca
                            de uma oportunidade para entrar na área
                            de Desenvolvimento. Ao longo deste portifólio você me conhecerá melhor.
                        </strong>
                    </p>
                    <p class="textdestaque">
                        <strong>
                             Poderá saber sobre minhas Hardskills e Softskills, ver meu currículo,
                            conhecer a minha historia, minhas metas, meus planos, 
                            minhas dificuldades, meus projetos
                            e minhas redes socias caso queira entrar em contato.
                        </strong>
                    </p>
                    <div class="textdestaque" id="quadroapresent">
                        <p>Nome: Samuel Santana de Camargo</p>
                        <p>Idade: 19 anos</p>
                        <p>Endereço: Estrada mato adentro N°5874</p>
                        <p>Bairro: Jardim Samambaia</p>
                        <p>Cidade: Itapecerica da Serra</p>
                    </div>
                </div>

                <div class="flex-cont" id="column_right"  >
                    <br /><br />
                    <img src= {Eu} alt="Este sou eu" class="banner" />
                </div>

            </div>
        </body>
    )
}



