import {JSX} from 'preact'
import {PageProps} from '$fresh/server.ts'


const about : (props:PageProps)=>JSX.Element = (props:PageProps):JSX.Element => {
    return(
        <div className='flex flex-col justify-center items-center h-screen gap-3 bg-gray-800 text-white'>
            <h1 className='text-4xl font-semibold '>Hello, <span className="text-yellow-200 capitalize">{props.params?.username}</span></h1>
            <h3 className='text-xl'>This is your about page</h3>
        </div>
    )
}

export default about;