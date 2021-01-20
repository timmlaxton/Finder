import React, { Component } from 'react'
import Header from './components/Header'
import Comics from './components/comics/Comics'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App"> 
       <Header title="Finder"/>
       <div className="container">
       <Comics/>
       </div>
       
      </div>
    )
  }
}
