import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlauout from "./components/layout/Mainlauout";
import Home from "./pages/Home";
import Allforms from "./pages/Allforms";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainlauout />}>
          <Route index element={<Home />} />
          <Route path="allforms" element={<Allforms />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
