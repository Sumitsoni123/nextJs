import { comments } from './data'
import { type NextRequest } from 'next/server';

export async function GET(request : NextRequest) {
    const searchParam = request.nextUrl.searchParams;
    const query = searchParam.get('query');
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)): comments

    return Response.json(filteredComments)
}

export const POST = async(req: Request) => {
    const data = await req.json();
    const newComment = {
        id: comments.length +1,
        text: data.text
    }

    comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    });
}