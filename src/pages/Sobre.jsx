//Componente que é Carregado na tela.


/*
Accordion!!
            <script>
                const accordion = document.getElementsByClassName("panel");
                for (i-0; i<accordion.length; i++){
                    accordion[i].addEventListener('click',function(){
                        this.classList.toggle('active');
                    })
                }
            </script>
*/
export function Sobre(){
    

    return( 
        <div class="conteudosobre">
            

            <div class="accordion" id="resumo">

                <div class="panel">
                    <div class="label">Dados pessoais</div>
                    <div class="acccont">
                        <p>
                            Nome:  <strong>Santana de Camargo.</strong> <br /><br />
                            Idade:  <strong> 19 anos. </strong> <br /><br />
                            Cidade: <br /> <strong> Itapecerica da Serra. </strong> <br />
                        </p>
                    </div>
                </div>


                <div class="panel">
                    <div class="label">SoftSkills</div>
                    <div class="acccont">
                        <p>
                            - Resiliência Uma boa capacidade de se adaptar e ser flexivel. <br />
                            - Empatia Busco sempre me colocar no lugar dos outros. <br />
                            - Trabalho em Equipe busco absorver e agregar conhecimentos em equipe para um 
                            desenvolvimento das partes.<br /><br />
                        </p>
                    </div>
                </div>

                <div class="panel">
                    <div class="label">HardSkills</div>
                    <div class="acccont">
                        <p>
                            - Conhecimento em JavaScript, HTML, CSS e frameworks Bootstrap e jQuery. <br />
                            - Conhecimento em python. <br />
                            - Conhecimento em Banco de Dados MySQL. <br />
                            - Conhecimento em PacoteOficce.<br />
                        
                        </p>
                    </div>
                </div>

                <div class="panel">
                    <div class="label">Formação</div>
                    <div class="acccont">
                        <p>
                            <strong>- Ensino médio (Integral):</strong> E.E Salvador de Leone 2017 - 2019 <br /><br />
                            <strong>- Ensino Técnico em Desenvolvimento de Sistemas:</strong> ETEC Embu das Artes 2019 - 2020 <br /><br />
                            <strong>-Tecnólogo Analise e desenvolvimento de Sistemas:</strong> FATEC zona Sul.
                        </p>
                    </div>
                </div>

                <div class="panel">
                    <div class="label">Certificado</div>
                    <div class="acccont">
                        <p>
                            <strong>- IT essencials Cisco</strong> <br /><br />
                            <button type="Button" class="buttonnav" id="buttoncertifield">
                                <a href="../Arquivos/certificado.pdf" download="certificado">Visualizar     </a>
                            </button>
                        </p>
                    </div>
                </div>

                <p>Para baixar o resumo em CV
                    <button type="Button" class="buttonnav" id="buttoncertifield">
                        <a href="../Arquivos/CV Samuel Santana de Camargo.pdf" download="certificado">Clique aqui!</a>
                    </button>
                </p>

                <script>
                    const acordion = document.getElementsByClassName('acordion-item');

                    for (i = 0; i<acordion.length; i++){
                        acordion[i].addEventListener('click',function(){
                            this.classLists.toggle('active')
                        })
                    }
                </script>


            </div>

            

            <div class="sobre" id="historia">
                <h3 id="titlehistoria">Minha Historia</h3>
                <p class="textborder"> Gostaria de começar dizendo que eu amo Tecnologia, e amo a sensação de ver um projeto
                    sendo criado e saber que fiz parte daquilo, esta é uma sensação que eu conheço a não
                    muito tempo na verdade, a primeira vez que senti foi no curso Tecnico de Desenvolvimento de Sistemas
                    feito pela Etec de Embu das Artes, terminei meu curso técnico no fim do primeiro semestre de 2020,
                    e por conta de não ter conseguido entrar no mercado durante o curso tive que arrumar um outro emprego
                    para poder custear meus gastos, assim com o tempo acabei desanimando um pouco de procurar emprego na área
                    e fui desistindo da progamação, de estudar e relembrar as matérias.
                    <br /><br />
                    Contudo no inicio do segundo semestre de 2021 consegui entrar para o Ensino Superior Tecnólogo 
                    da Fatec na areá de Analise e Desenvolvimento de Sistemas, então agora é que eu estou voltando a estudar
                    e me dedicar de forma dobrada à de antes para conseguir entrar na área.
                    <br /><br />
                     Hoje o meu maior desejo é poder ingressar na área e me desenvolver cada dia mais, pois busco um dia 
                    me tornar um Desenvolvedor FullStack sabendo ao menos um pouco de cada área do Desenvolvimento para futuramente
                    me especializar na que mais gostar de atuar, e sempre ampliar meus conhecimentos.                     
                </p>
            </div>

        </div>
        
    )
    
}






















