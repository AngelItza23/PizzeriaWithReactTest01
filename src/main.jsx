import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/*import './login.css'*/
import App from './App.jsx'
 // Importamos el footer
 import Footer from './components/Footer.jsx';
//   <Footer></Footer>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer></Footer>
  </StrictMode>,
)
