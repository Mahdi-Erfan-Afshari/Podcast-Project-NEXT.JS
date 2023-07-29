import { NextResponse } from "next/server"
import podcasts from "./server.json"

const dev = process.env.NODE_ENV == 'production'

export const server = dev  ? 'https://podcastnextjs.netlify.app' : 'http://localhost:3000'

export async function GET(request) {
    return NextResponse.json(podcasts)
}
