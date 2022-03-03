import React, { Component } from 'react';
import Buscador from "./componentes/Buscador";
import Galeria from "./componentes/Galeria";

const numeropages = 10;
export default class App extends Component {

  state = {
    busqueda : "",
    img : [],
    pagina : 1,
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
    if (pagina<numeropages){pagina=numeropages;}
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
    const url = `https://pixabay.com/api/?key=25437974-b570aef58a62559492507007c&&q=${this.state.busqueda}&&per_page=25&&page=${this.state.pagina}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({img : data.hits}))
  }

  render() {
    return (
      <div className="App bg-secondary" style={{height: "100vh"}}>
        <Buscador busqueda={this.busqueda}/>
        <Galeria imagenes={this.state.img}/>
        <form className="d-flex justify-content-center bg-secondary">
          <input type="button" className="btn btn-primary mx-1 my-3"
          value="anterior"
          onClick={this.paginaanterior}/>
          <input type="button" className="btn btn-primary mx-1 my-3"
          value="siguiente"
          onClick={this.paginasiguiente}/>
        </form>
      </div>
    );
  }
}