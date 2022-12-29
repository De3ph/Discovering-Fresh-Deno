import { Head } from "$fresh/src/runtime/head.ts"
import { JSX, ComponentChildren, Fragment } from "preact"
import Navbar from './Navbar.tsx'

interface IComponentProps {
    children: ComponentChildren
}

const layout: (props: IComponentProps) => JSX.Element = ({ children }: IComponentProps): JSX.Element => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.0/dist/full.css" rel="stylesheet" type="text/css" />
                <script src="https://cdn.tailwindcss.com"></script>
                {/* normalde Fresh tailwind ile geliyor ama daisyUI'ı burada import edince öncelik olarak tailwind'i eziyor ve component lerde tailwind class'larını kullanmaya çalışınca olmuyor, o yüzden import ettim. */}
            </Head>
            <html data-theme="light">
                <Navbar />
                {children}
            </html>

        </>)
}

export default layout