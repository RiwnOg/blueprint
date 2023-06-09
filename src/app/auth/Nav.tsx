import { authOptions } from "@/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import Logged from "./Logged";
import Login from "./Login";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">HOME</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
