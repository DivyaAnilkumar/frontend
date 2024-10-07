import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../action';

const Counter = () => {
    const value = useSelector(state=>state.counter)//replacing mapStateToProps
    const dispatch =useDispatch();//replacing mapDispatchToProps
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