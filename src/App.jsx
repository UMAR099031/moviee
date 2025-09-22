import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Ticked from "./components/Ticket/Ticked.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Register from "./components/Register/Register.jsx";

const App = () => {
  return (
    <div>
      <div className="blur-top" />
      <div className="blur-bottom" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                buttons={[
                  { to: "/tickets", label: "Tickets", variant: "btn-green" },
                  { to: "/login", label: "Login", variant: "btn-trnsp" },
                  { to: "/register", label: "Register", variant: "btn-trnsp" },
                ]}
              />
              <HomePage />
            </>
          }
        />

        <Route
          path="/tickets"
          element={
            <>
              <Header
                buttons={[{ to: "/", label: "Back", variant: "btn-green" }]}
              />
              <Ticked />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header
                buttons={[
                  { to: "/register", label: "Register", variant: "btn-trnsp" },
                  { to: "/", label: "Back", variant: "btn-green" },
                ]}
              />
              <LoginPage />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Header
                buttons={[
                  { to: "/login", label: "Login", variant: "btn-green" },
                  { to: "/", label: "Back", variant: "btn-trnsp" },
                ]}
              />
              <Register />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
