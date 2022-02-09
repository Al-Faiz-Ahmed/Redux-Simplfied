import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function BooksQuantity(){
    let state = useSelector(state => state)
    let dispacth = useDispatch()
    useEffect(()=>{
        
    })


    return(
        <>
        <p>Number of Books{state.numberOfBooks}</p>
        <button onClick={()=>dispacth({type:"DECRESE_BOOKS",payload:{junejo:"irfan"}})}>Decrease Quantity</button>
        </>
    )
}