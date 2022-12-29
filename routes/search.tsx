import { JSX } from "preact";
import { Handlers, PageProps, HandlerContext } from '$fresh/server.ts'
import Layout from "../components/layout.tsx";

const NAMES: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface IData {
    results: string[],
    query: string
}

export const handler: Handlers<IData> = {
    GET(req: Request, ctx): Response | Promise<Response> {
        const url = new URL(req.url)
        const query: string = url.searchParams.get('q') || ""
        const results = NAMES.filter((name) => name.includes(query));
        return ctx.render({ results, query });
    }
}

export default function search({ data }: PageProps): JSX.Element {

    const { results, query } = data

    return (
        <Layout>
            <div>
                <form className="flex justify-center gap-3 p-3 mb-4 ">
                    <input className="input input-bordered" type="text" placeholder="query" name="q" value={query} />
                    <button className="bg-gray-700 text-white p-3 rounded-xl" type="submit">Search</button>
                </form>
                <ul>
                    {results.map((name:string) => <li key={name}>{name}</li>)}
                </ul>
            </div>
        </Layout>
    )
}