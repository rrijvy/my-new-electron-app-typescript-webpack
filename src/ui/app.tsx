import React from "react";
import PrivateLayout from "./views/layouts/privateLayout";
import PublicLayout from "./views/layouts/publicLayout";

const App = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <PrivateLayout /> : <PublicLayout />;
};

export default App;
