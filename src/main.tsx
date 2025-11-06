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
      <main className="relative flex flex-col flex-1">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div
  className="fixed bottom-0 left-0 w-full
             bg-[url('/src/assets/gazon.webp')] bg-repeat-x bg-bottom
             bg-size-[auto_8rem] z-[-1]">
</div>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
