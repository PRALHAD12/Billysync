import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
      <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-60">
        <h1 className="text-5xl font-bold">
            BillySync
        </h1>
        <p>
          <Button asChild>
            <Link href="/dashboard">
            Sign In
            </Link>
          </Button>
        </p>
      </main>
  );
}
