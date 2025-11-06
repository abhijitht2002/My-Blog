import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog1" element={<Blog1 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
