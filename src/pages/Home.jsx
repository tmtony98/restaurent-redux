import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { useDispatch } from 'react-redux'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { fetchRestaurent } from '../redux/restaurentSlice'

function Home() {
  const allRestaurents = useSelector((state)=>state.restaurentSlice.allRestaurents)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurent())

  },[])
  return (
<>
{
  allRestaurents.length>0?allRestaurents.map(item=>(
<div className="container-fluid">
  <div className="row mt-5">
    <div className="col-sm-12 col-lg-4 col-md-6 ">
  <RestCard/>
    </div>
  </div>
  </div>
  )):null
  
}
</>  )
}

export default Home