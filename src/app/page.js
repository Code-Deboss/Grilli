import { Nav } from "./components"
import { Hero } from "./pages";
import { Login, Signup } from "./auth";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <div className=''>
      <Hero />
    </div>
  )
}
