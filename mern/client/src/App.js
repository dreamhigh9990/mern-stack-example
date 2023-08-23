import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";

import Edit from "./components/edit";
import Create from "./components/create";
import Second_page from "./components/Second_page";
import Second_Create from "./components/Second_create";
import Second_edit from "./components/Second_edit";


const App = () => {
  return (
    <div>
      <Navbar />
      
        <div className="container-fluid  mt-3">
          <Routes>
            <Route exact path="/" element={<RecordList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/Second_page" element={<Second_page />} />
            <Route path="/Second_create" element={<Second_Create />} />
            <Route path="/Second_edit/:id" element={<Second_edit />} />

          </Routes>
        </div>
     
    </div>
  );
};

export default App;
