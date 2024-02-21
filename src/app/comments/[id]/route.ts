import { redirect } from "next/navigation"
import { comments } from "../data"

export const GET = async (_request: Request, { params }: { params: { id: string } }) => {
    if(parseInt(params.id) > comments.length) {
        redirect("/comments")
    }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    )

    return Response.json(comment)
}


export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const body = await request.json();

    const idx = comments.findIndex(
        (cmt) => cmt.id === parseInt(params.id)
    )

    comments[idx].text = body.text
    return Response.json(comments[idx])
}


export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const idx = comments.findIndex(
        (cmt) => cmt.id === parseInt(params.id)
    )
    const deletedComment = comments[idx]
    comments.splice(idx, 1);

    return Response.json(deletedComment);
}