import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterResult() {
    const value = useSelector(state => state.counter.value)
    return (
        <>
            <h1 className="text-3xl text-slate-100">Counter value : {value}</h1>
        </>
    )
}
