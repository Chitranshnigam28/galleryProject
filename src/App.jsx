import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState([])
  const [index,setIndex]=useState(1)
  const getData=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserData(response.data)
    console.log(userData)
  }

  

  useEffect(()=>{
    getData();
  },[index])

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
       
        <div className="flex flex-wrap gap-4 justify-center">{printUserData}</div>
        <div className="flex items-center justify-center mt-4 gap-4">
          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold text-black' onClick={()=>{
            setIndex(index-1);

            console.log('prev clicked '+index)
          }}>Prev</button>
          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold text-black' onClick={()=>{
            setIndex(index+1);
            console.log('next clicked'+index)
          }}>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
