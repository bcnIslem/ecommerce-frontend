import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

//
// auth
//

//
// pages
//
import Home from "./pages/Home";

const App: React.FC = (): any => {
  return (
    <div>
      <Router>
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
