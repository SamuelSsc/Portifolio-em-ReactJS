import Loggithub from '../assets/github.png'
import Loglinkedin from '../assets/linkedin.png'
import Loginstagram from '../assets/instagram.png'
import Logfacebook from '../assets/facebook.png'
import Logcompartilhar from '../assets/Compartilhar.png'
import Loggmail from '../assets/gmail.png'

//Componente que é Carregado na tela.
export function Footer(){
    return( 
        <footer>
            <div id="footer" class="headfot">
                
                <div class="textfooter">
                    <h4>Entre em contato ou compartilhe com alguem:</h4>
                </div>

                <div class="buttonsfot">
                <a href="https://github.com/SamuelSsc">
                    <img class="logorede" src= {Loggithub} alt="" />
                </a>

                <a href="https://www.linkedin.com/in/samuel-santana-02b987196/">
                    <img class="logorede" src= {Loglinkedin} alt="" />
                </a>

                <a href="https://www.instagram.com/samuelsantanadecamargo/">
                    <img class="logorede" src= {Loginstagram} alt="" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100027216758008">
                    <img class="logorede" src= {Logfacebook} alt="" />
                </a>

                <a href="#">
                    <img class="logorede" src= {Logcompartilhar} alt="" />
                </a>

                <a href="mailto:samuelssc5874@gmail.com">
                    <img class="logorede" src= {Loggmail} alt="" />
                </a>
                </div>                
            </div>
        </footer>
    )
}