import React from 'react'
import Form from './Form'
import Navigation from './Navigation'
export default function Header({history,handleSubmit}) {
  return (
    <div>
        <h1>Instogram.jr</h1>
        <Form history={history} handleSubmit={handleSubmit} />
         <Navigation/>
        </div>
  )
}
