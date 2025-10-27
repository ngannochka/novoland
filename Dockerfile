FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y python3 make g++
RUN bun install
RUN bun run build

ENTRYPOINT ["bun", "run", "./.output/server/index.mjs"]
