import { JSX } from "preact"
import Layout from "../components/layout.tsx"

const index: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl p-3">Index.tsx</h1>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">What is Up??</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-green-500 hover:text-green-200 border-transparent :hover">Get Started</button>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default index