import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT } from '../../redux/actions/types';
import "./CounterComp.css"
const CounterComp = () => {
    const {count} = useSelector(state=>state);
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
      dispatch({
        type:INCREMENT
      })
    }
    const handleDecrement =()=>{
      dispatch({
        type:DECREMENT
      })
    }
  return (
    <div>
        <p className='test'> {count}</p>
       <br/>
        <div className="btn">
        <button className='inc' onClick={handleIncrement}>Increment</button>
       <button className='inc' onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default CounterComp