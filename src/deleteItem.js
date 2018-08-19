import React from 'react';

const DeleteItem =(props)=>{
  return(
 <button onClick={()=>props.delete()} disabled={props.items.length <=0}>
          Delete Last Item
        </button>
  )
}

export default DeleteItem