import './App.css';

var Pokedex = require('pokedex-promise-v2');
var React = require('react');
var P = new Pokedex();
var Eevee = 1;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EeveeName: "",
    } 
   }

  componentDidMount() {
    var self = this;
    P.getPokemonByName(3) // with Promise
    .then(function(response) {


      self.setState({
        EeveeName: response.species.name,
      })

      //Eevee = response;
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id = "foo">
            {this.state.EeveeName}
          </h1>
        </header>
      </div>
    );
  }

}

export default App;
