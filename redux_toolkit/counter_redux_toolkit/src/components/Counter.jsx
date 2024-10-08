import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../action';
//central state management-redux
const Counter = () => {
    const value = useSelector(state=>state.counter)//replacing mapStateToProps  and variables tracking
    const dispatch =useDispatch();//replacing mapDispatchToProps,action
  return (
    <>
    <div>Counter:{value}</div>
    <br />
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter