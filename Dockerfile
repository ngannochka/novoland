FROM oven/bun:latest

WORKDIR /app

COPY bun.lock ./
COPY package.json ./
COPY nuxt.config.ts ./
COPY app ./
COPY public ./

RUN bun install
RUN bun run build

ENTRYPOINT ["bun", "run", "./.output/server/index.mjs"]
