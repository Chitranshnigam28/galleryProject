import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Card from './Components/Card'

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

  let printUserData=<h3 className='text-gray-600 absolute top-1/2'>Loading...</h3>;
  
  if(userData.length>0){
    printUserData=userData.map((elem,id)=>{
      return (
      <Card elem={elem} id={id}/>
      )
    })

  }

  return (
    <>
      <div className="bg-black h-screen text-white p-4 overflow-auto ">
       
        <div className="flex flex-wrap gap-4 justify-center">{printUserData}</div>
        <div className="flex items-center justify-center mt-4 gap-4">
          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold text-black' style={{opacity:(index==1?0.5:1)}} 
          disabled={index==1?true:false}
          onClick={()=>{
            setIndex(index-1);

            console.log('prev clicked '+index)
          }}>Prev</button>
          <h4>Page {index}</h4>
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
