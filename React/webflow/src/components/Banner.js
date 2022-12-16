 import '../styles/Banner.css'
 import logo from '../assets/logo.png'
  

  function Header ()
  {
    const titre = "La Maison Jungle!";
    return (<div>
      <img src = {logo} alt = "logo" className = "lmj-logo"/>
      <h1 className = "lmj-title"> {titre.toUpperCase()} </h1>
      </div>
      );
  }
  

  function Banner ()
  {
    return(<div className = "lmj-banner">
      <Header/>
    </div>
    );
  }
export default Banner;