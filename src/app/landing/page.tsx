import { currentUser } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";

async function LandingPage() {

    const user = await currentUser();

    const convex = new ConvexHttpClient(process.env.Next_PUBLIC_CONVEX_URL!);

    const convexUser = await convex.query(api.users.getUser, {
        userId: user?.id || ""
    });

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage