import React from 'react'
import FruityCart from './FruityCart'

export default function Fruity() {
    return (
        <>
            <h1 className='text-4xl text-slate-100 font-bold'>Fruity</h1>
            <p className='text-xl text-slate-200 mb-10 mt-5'>
                Choisissez vos fruits 🍓🥥🥝
            </p>
            <ul className='flex gap-4 mb-4'>

            </ul>
            <FruityCart />
        </>
    )
}
