import React from 'react'
import { useParams } from 'react-router-dom';

function Use(){
    const {userId}=useParams()
  return (
      <div>User:{userId}</div>
  )
  }

export default Use
