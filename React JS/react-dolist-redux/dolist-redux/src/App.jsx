/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

// Import components
import Header from './components/Header'
import Form from './components/Form'
import Grocery from './components/Grocery'

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Grocery />
    </>
  )
}
