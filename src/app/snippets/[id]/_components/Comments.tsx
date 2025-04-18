import { useUser } from "@clerk/nextjs"
import { Id } from "../../../../../convex/_generated/dataModel"
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import toast from "react-hot-toast";

function Comments({ snippetId }: { snippetId: Id<"snippets"> }) {

    const { user } = useUser();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);

    const comments = useQuery(api.snippets.getComments, { snippetId });
    const addComment = useMutation(api.snippets.addComment);
    const deleteComment = useMutation(api.snippets.deleteComment);

    const handleSubmitComment = async (content: string) => {
        setIsSubmitting(true);

        try {
            await addComment({ snippetId, content });
        } catch (error) {
            console.log("Error adding comment:", error);
            toast.error("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }

    }

    

  return (
    <div>Comments</div>
  )
}

export default Comments
