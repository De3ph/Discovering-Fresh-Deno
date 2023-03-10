// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[username]/about.tsx";
import * as $1 from "./routes/[username]/index.tsx";
import * as $2 from "./routes/_404.tsx";
import * as $3 from "./routes/api/try.ts";
import * as $4 from "./routes/counter/index.tsx";
import * as $5 from "./routes/github/[username].tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/search.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[username]/about.tsx": $0,
    "./routes/[username]/index.tsx": $1,
    "./routes/_404.tsx": $2,
    "./routes/api/try.ts": $3,
    "./routes/counter/index.tsx": $4,
    "./routes/github/[username].tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/search.tsx": $7,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
