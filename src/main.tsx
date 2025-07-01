import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mui/material/CssBaseline'
import App2 from './components/App2'
import FormView from './components/FormView'
import MyForm from './components/ValidForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>,
)
