import { useDispatch } from "react-redux"
import Button from "./CounterButton"
import CounterResult from "./CounterResult"
import { increment, decrement, multiply } from "../../features/counter"





export default function Counter() {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col items-center text-3xl text-slate-100">
            <CounterResult />
            <Button symbole="+" onClick={() => dispatch(increment(5))} />
            <Button symbole="-" onClick={() => dispatch(decrement())} />
            <Button symbole="x" onClick={() => dispatch(multiply())} />
        </div>
    )
}
