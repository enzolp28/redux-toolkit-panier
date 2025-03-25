import { useSelector } from "react-redux"


export default function FruityCart() {
    const fruityCart = useSelector(state => state.fruitsCart)
    console.log(fruityCart);

    return (
        <div className='bg-slate-200 rounded'>
            <p className='text-1xl p-5 border-b border-slate-400'>Votre panier de Fruits</p>
            <ul>
                {fruityCart.cart.length > 0 && fruityCart.cart.map(fruit => (
                    <li className='p-5' key={fruit.id}>
                        <span className="mr-3 text-xl font-semibold">x{fruit.quantity}</span>
                        <span>{fruit.name}</span>
                    </li>

                ))}
                {fruityCart.cart.length === 0 && <li className='p-5 text-slate-500 '>Votre panier est vide 🛒</li>}

            </ul>

            <p className="text-xl p-5 border-t border-slate-400">
                Prix total : {fruityCart.cart.reduce((acc, fruit) => acc + fruit.price * fruit.quantity, 0)} €
            </p>
        </div>
    )
}
