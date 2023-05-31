import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Main from "./Layout/Main";

function App() {
  return (
    <div className="flex w-[100vw]">
      <SideBar />
      <div className="w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
