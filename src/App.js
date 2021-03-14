import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Description">
          <h1>Panel de redes sociales</h1>
          <p>Total de seguidores: </p>
          </div>
          <div className="Button-theme">
            <p>Dark theme</p>
          <div id="barra"><div className="switch"
            ></div></div>
          </div>
      </header>
      <section className="Followers">

      <div className="Facebook-followers">
        <div className="Line-top1"></div>
        <div className="UserName">
          <img className="facebook-logo" src="facebook.png"></img>
          <p className="arroba">@MarcoDev</p>
        </div>
        <h1>1985</h1>
        <p className="follows">Seguidores</p>
        <h5>+12 Hoy</h5>
      </div>

      <div className="Twitter-followers">
      <div className="Line-top2"></div>
      <div className="UserName">
        <img className="twitter-logo" src="twitter.png"></img>
        <p className="arroba">@AndrymX_Clash</p>
      </div>
      <h1>1985</h1>
        <p className="follows">Seguidores</p>
        <h5>+12 Hoy</h5>
      </div>

      <div className="Instagram-followers">
      <div className="Line-top3"></div>
      <div className="UserName">
        <img className="instagram-logo" src="instagram.png"></img>
        <p className="arroba">@andrymx</p>
      </div>
      <h1>1985</h1>
        <p className="follows">Seguidores</p>
        <h5>+12 Hoy</h5>
      </div>
      </section>
      <section className="resumen">
        <div className="contenedor-resumen">
      <h2>Resumen - Hoy</h2>
      <div className="grilla">
        <div className="f-views">
          <div className="capsula1">
        <p>Vistas de página</p> <img className="facebook-logo2" src="facebook.png"></img>
        </div>
          <div className="capsula2">
        <h2>87</h2>
        <p>+3%</p>
          </div>
        </div>
        <div className="f-likes">
        <div className="capsula3">
        <p>Likes de página</p> <img className="facebook-logo2" src="facebook.png"></img>
        </div>
          <div className="capsula4">
        <h2>52</h2>
        <p>-2%</p>
          </div>
        </div>
        <div className="t-retweets">
        <div className="capsula1">
        <p>Retweets</p> <img className="twitter-logo2" src="twitter.png"></img>
        </div>
          <div className="capsula2">
        <h2>117</h2>
        <p>+303%</p>
          </div>
        </div>
        <div className="t-likes">
        <div className="capsula3">
        <p>Likes de página</p> <img className="twitter-logo2" src="twitter.png"></img>
        </div>
          <div className="capsula4">
        <h2>52</h2>
        <p>-2%</p>
          </div>
        </div>
        <div className="i-likes">
        <div className="capsula1">
        <p>Retweets</p> <img className="twitter-logo2" src="instagram.png"></img>
        </div>
          <div className="capsula2">
        <h2>117</h2>
        <p>+303%</p>
          </div>
        </div>
        <div className="i-views">
        <div className="capsula3">
        <p>Likes de página</p> <img className="twitter-logo2" src="instagram.png"></img>
        </div>
          <div className="capsula4">
        <h2>52</h2>
        <p>-2%</p>
          </div>
        </div>
      </div>
      </div>
      </section>
    </div>
  );
}

export default App;

