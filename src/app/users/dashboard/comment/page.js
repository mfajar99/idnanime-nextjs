import { authUserSession } from "@/libs/auth_libs"
import prisma from "@/libs/prisma"
import React from "react"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"

const page = async () => {
  const user = await authUserSession()
  // console.log(user);
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

  return (
    <section className="mt-4 px-4 w-full" >
      <Header title={"My Comment"} />
      <div className="grid gird-cols-1 py-2 gap-4">
        {comments.map(comment => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="text-italic">{comment.comment}</p>
            </Link>
          )
        })}
      </div>
    </section >
  )
}

export default page