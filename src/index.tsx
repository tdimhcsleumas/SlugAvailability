import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    HashRouter,
    Routes,
    Route,
}  from "react-router-dom";
import NavBar from "./views/NavBar";
import EventDetails from "./views/EventDetails";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route path="events/:eventId" element={<EventDetails />} />
            </Route>
        </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

