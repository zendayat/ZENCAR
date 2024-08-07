import react, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import './App.css'
import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Action from './components/Action';
import Select from './components/Select';
import Categories from './components/Categories';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

function App() {
  //Loader state
  // useGSAP(()=> {
  //   gsap.to('#body',{
  //     opacity: 0,
  //   })
  //   gsap.to('#body',{
  //     opacity: 1,
  //     duration: 1,
  //     delay: 9000,
  //     color: 'white'
  //   })
  // }, [])

  const[isLoading, setIsLoading] = useState(true);
  //fetch fake data

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(()=>{
        setIsLoading(false)
      }, 1000)
    }
    fakeDataFetch();
  },[]);
  return isLoading ? (
    <Loader/> 
  ) : 
  (
    <div id='body' className=' bg-black w-[100vw] mx-auto'>
      <Landing/>
      <About/>
      <Services/>
      <Action/>
      <Select/>
      <Categories/>
    </div>
  )
}

export default App
