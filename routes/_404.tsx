import {JSX}  from 'preact'
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps):JSX.Element {
    return (
      <div class="text-center pt-40">
        <h1 class="text-6xl">404</h1>
        <p class="pt-10">
          <a href="/">Back to Home</a>
        </p>
      </div>
    );
  }