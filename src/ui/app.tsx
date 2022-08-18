import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./views/layouts/privateLayout";
import PublicLayout from "./views/layouts/publicLayout";

const App = () => {
  const isLoggedIn = true;
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <PrivateLayout /> : <PublicLayout />} />
    </Routes>
  );
};

export default App;
