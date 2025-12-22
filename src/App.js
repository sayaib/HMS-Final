import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Legal = lazy(() => import("./Pages/Legal"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Appointment = lazy(() => import("./Pages/Appointment"));

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
