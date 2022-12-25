import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Footer from './components/Footer'
import Results from './pages/Results'
import Error from './pages/Error'
import Freelances from './pages/Freelances'
import ThemeProvider from './utils/context'
import { createGlobalStyle } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import  {SurveyProvider}  from './utils/context'

import { BrowserRouter, Route, Routes } from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
         <SurveyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
          
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
