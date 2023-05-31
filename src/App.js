import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Main from "./Layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
