import { NextResponse } from "next/server";

export const GET = async (request) => {
    return new NextResponse("it works", { status: 200 })
}