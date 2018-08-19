import React from 'react';

const ListItems = (props)=>{
  const {items} = props;
return(
<ol>{
items.map((item, index)=>(
  <li key={index}>{item}</li>
))  }
</ol>
)
}

export default ListItems