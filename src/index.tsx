import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    BrowserRouter,
    Routes,
    Route,
}  from "react-router-dom";
import NavBar from "./views/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar />}>
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

