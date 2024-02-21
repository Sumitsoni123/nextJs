import { type NextRequest } from "next/server";

export const GET = async(request: NextRequest) => {
    const reqHeader = new Headers(request.headers)
    console.log(reqHeader.get("Authorization"));
    const theme = request.cookies.get("theme")
    console.log(theme);
    
    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}