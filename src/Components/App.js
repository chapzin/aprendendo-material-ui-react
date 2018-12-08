import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Aqui fica o conteudo</h1>
        <Footer />
      </Fragment>
    )
  }
}
