import React from 'react';
import logo from './logotop14.jpg';
import './App.css';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://bridge.buddyweb.fr/api/top14/classement")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="Loading">Loading…</div>;
    } else {
      return (
  
        items.map(item => ( 

          
          <container className="Classement">
         
    <div class="team-card mb-3">
    
      <div class="row" key={item.id}>
        <div class="position offset-lg-1">
          <h3 class="position">{item.id}</h3>
        </div>
        <div class="card-logo col-lg-2">
          <img src= {item.parameters} class="card-img" alt="logo"/>
        </div>
        
          <div class="card-body col-lg-7">
            <h5 class="name">{item.name}</h5>
          </div>
          <div class="card-body col-lg-1">
            <h6 class="pts">{item.numbers} pts </h6>
          </div>
        </div>
      </div>
      </container> 
    ))
    

            
         );
        }
      }
    }
    

export default App;

