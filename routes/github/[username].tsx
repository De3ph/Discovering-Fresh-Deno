import {Handlers, PageProps, HandlerContext} from '$fresh/server.ts'
import {JSX} from 'preact'

interface User {
    login:string,
    username:string,
    avatar_url:string
}

export const handler:Handlers<User | null> = {
    async GET(req:Request,ctx:HandlerContext<User | null>){
        const {username} = ctx.params
        const res:Response = await fetch(`https://api.github.com/users/${username}`)
        if (res.status === 404) {
            return ctx.renderNotFound()
        }
        const user:User = await res.json()
        return ctx.render(user)
    }
}

export default function username({data}:PageProps<User | null>):JSX.Element{
    if (!data) {
        return <h1>User not found</h1>;
      }
    
      return (
        <div>
          <img src={data.avatar_url} width={64} height={64} />
          <h1>{data.username}</h1>
          <p>{data.login}</p>
        </div>
      );
}