import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
