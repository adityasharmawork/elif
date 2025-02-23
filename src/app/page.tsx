import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
          <SignInButton>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
