import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import { JSX } from "preact/jsx-runtime";


export default function Header(): JSX.Element {

  return (
    <div class="bg-white w-full py-6 px-16 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div className="tooltip tooltip-right" data-tip="Fresh Docs">
          <a class="text-2xl  ml-1 font-bold" href="https://fresh.deno.dev">
            Fresh
          </a>
        </div>
        <LemonIcon />

      </div>
      <ul class="flex">
        <li>
          <a
            href='/'
            class="text-gray-500 hover:text-gray-700 py-1 border-gray-500 font-bold border-b-2"
          >
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}
