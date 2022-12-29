import { JSX } from 'preact'
import { useState } from 'preact/hooks'

export default function counter(): JSX.Element {

    const [counter, setCounter] = useState<number>(0)
    const increment: () => void = () => { setCounter(counter + 1) }
    const decrement: () => void = () => { setCounter(counter - 1) }

    return (
        <>
            <div className='h-screen flex flex-col gap-6 items-center justify-center'>
                <h1 className='text-3xl'>{counter}</h1>
                <div className='flex gap-5 justify-center items-center'>
                <button className='bg-green-500 text-white text-lg font-semibold p-3 rounded-full' onClick={increment}>Inc</button>
                <button className='bg-green-500 text-white text-lg font-semibold p-3 rounded-full' onClick={decrement}>Dec</button>
            </div>
            </div>
            
        </>
    )
}