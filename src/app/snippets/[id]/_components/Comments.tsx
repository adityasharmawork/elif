import { useUser } from "@clerk/nextjs"
import { Id } from "../../../../../convex/_generated/dataModel"
import { useState } from "react";

function Comments({ snippetId }: { snippetId: Id<"snippets"> }) {

    const { user } = useUser();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);

  return (
    <div>Comments</div>
  )
}

export default Comments
