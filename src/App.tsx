import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/styles/extras.css'


import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { JSX } from 'react/jsx-runtime';
import ProductComponents from "./Components/ProductComponents";
import HeaderComponent from "./Components/HeaderComponent";
import HeroComponent from "./Components/HeroComponent";
import FooterComponent from "./Components/FooterComponent";
import TimeLineComponent from "./Components/TimeLineComponent";
import HeroTwoComponent from "./Components/HeroTwoComponent";





function App() {



  return (
      <div className="bg-white">
        <HeaderComponent />
        <main className="isolate">
          <HeroComponent />
          <TimeLineComponent />
          <HeroTwoComponent />
          <ProductComponents />
        </main>
        <FooterComponent />
      </div>
  );
}

export default App;
