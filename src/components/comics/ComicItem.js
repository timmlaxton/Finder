import React from 'react'

 const ComicItem = (props) => {
  
    const { aliases, url  } = props.comic;

    return (
      <div className='card text-center'>
        <img src={url} 
        alt=''
        className="round-img" 
        style={{width: "60px"}}
        />
        <br/>
         <strong>{aliases}</strong>
      </div>
    )
  
}

export default ComicItem
