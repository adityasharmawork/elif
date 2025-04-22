import { currentUser } from "@clerk/nextjs/server"

async function LandingPage() {

    const user = await currentUser();

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage