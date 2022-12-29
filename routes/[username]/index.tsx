import {JSX} from 'preact'
import {PageProps} from '$fresh/server.ts'


const index : (props:PageProps)=>JSX.Element = (props:PageProps):JSX.Element => {
    return(
        <>
            <h1 className='text-center text-4xl font-semibold mt-[50%]'>Hello, {props.params?.username}</h1>
        </>
    )
}

export default index;