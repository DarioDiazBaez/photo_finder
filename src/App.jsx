import React, { Component } from 'react';
import './App.css';
import Buscador from "./componentes/Buscador";
import Galeria from "./componentes/Galeria";

class App extends Component {

  state = {
    busqueda : "",
    img : [],
    pagina : 1
  }

  busqueda = (e)=>{
    this.setState(
    {
      busqueda : e,
      pagina : 1
    }
    ,()=>{this.componentDidMount()})
  }

  paginasiguiente = (e)=>{
    let pagina= this.state.pagina;
    pagina ++;
    this.setState(
    {
      pagina : pagina
    },()=>{this.componentDidMount()})
  }

  paginaanterior = (e)=>{
    let pagina= this.state.pagina;
    pagina --;
    if (pagina<=0){pagina=1;}
    this.setState(
    {
      pagina : pagina
    },()=>{this.componentDidMount()})  }

  componentDidMount() {
    const url = `https://pixabay.com/api/?key=25437974-b570aef58a62559492507007c&&q=${this.state.busqueda}&&per_page=20&&page=${this.state.pagina}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({img : data.hits}))
  }

  render() {
    return (
      <div className="App">
        <Buscador busqueda={this.busqueda}/>
        <Galeria imagenes={this.state.img}/>
        <form className="botones">
          <input 
            type="button"
            value="anterior"
            onClick={this.paginaanterior}
            />
          <input 
            type="button"
            value="siguiente"
            onClick={this.paginasiguiente}
            />
        </form>
      </div>
    );
  }
}

export default App;