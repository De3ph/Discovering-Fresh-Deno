import { Handlers } from "$fresh/server.ts"

interface IRequestBody {
  msg:string
}

interface IResponseBody {
  msg:string
}

export const handler: Handlers<string> = {
  GET(_req: Request, ctx): Response {
    return new Response("Done.")
  }
  ,
  async POST(_req: Request, ctx): Promise<Response> {

    const reqBody:IRequestBody = await _req.json()

    const resBody:IResponseBody = {
      msg:`Received message : ${reqBody.msg}`
    }
    
    return new Response(JSON.stringify(resBody))
  }
}
