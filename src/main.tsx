import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Register from "./pages/auth/Register.tsx";
import App from "./pages/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="flex flex-col flex-1 bg-emerald-100 bg-[url('src/assets/background.png')] bg-no-repeat bg-center bg-cover">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div className="flex absolute bottom-0 bg-[url('src/assets/gazon.png')] bg-repeat-x size-64 w-full "></div>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
