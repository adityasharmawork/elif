import { useAuth } from "@clerk/nextjs"
import { Id } from "../../convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

function StarButton({snippetId}: {snippetId: Id<"snippets">}) {
    const { isSignedIn } = useAuth();
    const isStarred = useQuery(api.snippets.isSnippetStarred, { snippetId });
    const starCount = useQuery(api.snippets.getSnippetStarCount, { snippetId });
    const star = useMutation(api.snippets.starSnippet);

    const handleStar = async () => {
        if(!isSignedIn) return;
        await star({ snippetId });
    }


  return (
    <div>

    </div>
  )
}

export default StarButton