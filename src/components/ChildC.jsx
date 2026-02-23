 import React, { useContext } from 'react'
import { data } from '../App'
 
 function ChildC() {
  const dataApp = useContext(data)
   return (
     <div>
       <h1>my name is {dataApp}</h1>
     </div>
   )
 }
 
 export default ChildC
 