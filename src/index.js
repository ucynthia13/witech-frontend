import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; // Remove Routes and Route
import Article from './components/article/article';

// Wrap your ReactDOM.render call with createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    {/* Instead of Routes and Route, you can directly use the Route component */}
    <Route exact path="/" element={<App />} />
    <Route path="/article" element={<Article />} />
    </Routes>
  </BrowserRouter>
);
