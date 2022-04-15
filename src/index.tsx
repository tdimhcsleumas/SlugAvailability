import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    BrowserRouter,
    Routes,
    Route,
}  from "react-router-dom";
import NavBar from "./views/NavBar";
import EventDetails from "./views/EventDetails";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NavBar />}>
                <Route path="events/:eventId" element={<EventDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

