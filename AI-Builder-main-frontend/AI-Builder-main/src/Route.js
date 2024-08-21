import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import GeneratedPage from "./modules/generateai/generatedpage";
import Quickwswap from "./modules/quickswap";
import Omega from "./modules/omega";
import Template1 from "./modules/template1";
import Template3 from "./modules/template2";
import PrivateRoutes from "./utils/PrivateRoutes";
import Template4 from "./modules/template3";
import Cryzpto from "./modules/cryzpto";

import Template7 from "./modules/templat7";
import Demo1 from "./modules/demo1";
import Demo2 from "./modules/demo2";
import GenerateAI from "./modules/home/feauture/generate";
import Preview from "./modules/preview";

import Previeww from "./pages/Preview";
import Demo5 from "./modules/demo5";
import Demo6 from "./modules/demo6";





function Routess() {
 
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/demo-1" element={<Demo1 />} />
        <Route path="/generated-template-3" element={<Template4 />} />
        <Route path="/demo-2" element={<Demo2 />} />
        <Route path="/generate" element={<GenerateAI />} />
        <Route path="/generated" element={<Preview />} />
        <Route path="/preview/:id" element={<Previeww />} />

        <Route path="/demo-4" element={<Template3 />} />
        <Route path="/demo-5" element={<Demo5 />} />
        <Route path="/demo-6" element={<Quickwswap />} />
        <Route path="/demo-7" element={<Demo6 />} />
        <Route path="/generated-page/:id" element={<GeneratedPage />} />
        <Route path="/generated-template-8" element={<Template1 />} />

        <Route path="/generated-template-7" element={<Template7 />} />
        <Route path="/demo-5" element={<Template4 />} />
        <Route path="/generated-template-5" element={<Cryzpto />} />

        <Route path="/generated-template-1" element={<Template1 />} />
        <Route path="/generated-template-2" element={<Omega />} />
        <Route element={<PrivateRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default Routess;
