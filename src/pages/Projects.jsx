//Componente que é Carregado na tela.
export function Projects(){
    return( 
        <div>
            <div class="titleconteudo">
                <h2>Aqui você pode conhecer um pouco sobre os projetos que já realizei.</h2>
            </div>

            <div class="conteudo">

                <div class="videotcc">
                    <iframe src="https://www.youtube.com/embed/piN7_blWdBY?start=223" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>

                <div class="textoprojeto">
                    <p class="textdest">  Este Projeto se trata do meu Trabalho de Conclusão de curso da Etec de Embu das Artes,
                        onde cursei o Ensino Técnico de Desenvolvimento de Sistemas. 
                        <br /><br />
                        Nosso Trabalho se chama FastShopping e consiste em um E-commerce de produtos eletrônicos desenvolvido
                        por três integrantes Eu Samuel Santana, e meus colegas Thiago Araujo e Leonardo Araujo.
                        <br /><br />
                         Este Sistema Foi desenvolvido para Web com as Seguintes Tecnologias, para o front-end
                        utilizamos o HTML com CSS utilizando o FrameWork JavaScript Bootstrap para nos auxiliar
                        com a questão da responsividade do sistema, já no back-end utilizamos o PHP com o FrameWork
                        Codgnither em uma estrutura MVC para que o sistema pudesse se comunicar com o banco 
                        de dados que foi feito com o SGBD MySQL.
                        <br /><br />
                        Para ver outros projetos acesse o meu Github no icone abaixo, ou acesse:
                        <a href="https://github.com/SamuelSsc">Por Aqui!</a>
                    </p>
                </div>

            </div>
        </div>
    )
}
