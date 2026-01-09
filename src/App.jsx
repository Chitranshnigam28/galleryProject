import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState([])

  const getData=async ()=>{
    const response=await axios.get('https://picsum.photos/v2/list?page=3&limit=21');
    setUserData(response.data)
    console.log(userData)
  }

  useEffect(()=>{
    getData();
  },[])

  let printUserData=<h3 className='text-gray-600'>No data available</h3>;
  
  if(userData.length>0){
    printUserData=userData.map((elem,id)=>{
      return (
      <div key={id}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white overflow-hidden'>
            <img src={elem.download_url} alt="" className='h-full w-full object-cover'/>
          </div>
          <h2 className="italic">
            {elem.author}
          </h2>
        </a>
      </div>
      )
    })

  }

  return (
    <>
      <div className="bg-black h-screen text-white p-4 overflow-auto ">
       
        <div className="flex flex-wrap gap-4">{printUserData}</div>
      </div>
    </>
  )
}

export default App
