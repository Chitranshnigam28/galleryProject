import React from 'react'

const Card = ({elem,id}) => {
    console.log(elem);
    
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
}

export default Card