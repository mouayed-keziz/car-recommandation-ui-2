import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import { useState } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)


function Application() {
  const [theme, setTheme] = useState("cupcake");
  return (
    <>
      <html data-theme={theme}>
        <App setTheme={setTheme} />
      </html>
    </>
  );
}