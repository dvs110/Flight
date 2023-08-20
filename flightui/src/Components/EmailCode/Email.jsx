import React from 'react'

import { EmailArticle } from './EmailArticle'
// import { EmailHeader } from './EmailHeader'
import Flights from './Flights'
import Footer from './Footer'

 const Email = () => {
  return (
    <>
    {/* <EmailHeader/> */}
    <EmailArticle/>
    <Flights bgc="#ebedff"/>
    {/* <Flights bgc="#fff"/> */}
    <Flights bgc="##9b9ebe8e"/>
    <Flights bgc="#ebedff"/>
    <Footer/>
    </>
  )
}

export default Email