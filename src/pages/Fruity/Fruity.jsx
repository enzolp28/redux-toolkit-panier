import React from 'react'
import FruityCart from './FruityCart'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../../features/fruitsCart'

export default function Fruity() {
    const fruits = useSelector(state => state.fruits)
    const dispatch = useDispatch()
    console.log(fruits);

    return (
        <>
            <h1 className='text-4xl text-slate-100 font-bold'>Fruity</h1>
            <p className='text-xl text-slate-200 mb-10 mt-5'>
                Choisissez vos fruits 🍓🥥🥝
            </p>
            <ul className='flex gap-4 mb-4'>
                {fruits.listeFruits.map(fruit => (
                    <li className='bg-slate-100 p-4 w-full rounded'
                        key={fruit.id}>
                        {fruit.name}
                        <img
                            className='w-full h-[250px] object-cover mb-3'
                            src={fruit.url}
                            alt={fruit.name}
                        />
                        <div className='flex justify-between items-baseline mb-4'>
                            <h2 className='text-lg mb-2 font-semibold'>{fruit.name}</h2>
                            <p className='text-lg font-semibold'>Prix à l'unité : {fruit.price}€</p>
                        </div>
                        <div className='flex gap-2'>
                            <button
                                onClick={() => dispatch(addOne(fruit))}
                                className='w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-lg'
                            >Ajouter</button>
                            <button
                                onClick={() => dispatch(removeOne(fruit.id))}
                                className='w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-lg'
                            >Supprimer</button>
                        </div>
                    </li>
                ))}

            </ul>
            <FruityCart />
        </>
    )
}
