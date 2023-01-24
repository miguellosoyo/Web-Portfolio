import React, {useState} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TileGallery from './sections/TileGallery'

import "./App.css";
import DevTo from "./sections/DevTo";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [modalInfomation, setModalInformation] = useState([])
 console.log(modalInfomation)
  return (
    <>
      <HashRouter>
        <Hero />
        <Navbar />
        <TileGallery/>
        <AboutMe />
        <Skills />
        <Projects showModal={showModal} setShowModal={setShowModal} setModalInformation={setModalInformation} />
        <DevTo/>
        <Contact />

        {/* <Routes>
          <Route path="*" element={<p>Not Found.. Check your url</p>} />
        </Routes> */}
        <Modal showModal={showModal} setShowModal={setShowModal} modalInfomation={modalInfomation}/>
        <Footer />
       
      </HashRouter>
    </>
  );
}

export default App;
