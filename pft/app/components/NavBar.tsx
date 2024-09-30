"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";

const NavBar = () => {
	const { status, data: session } = useSession();
	return (
		<div className="navbar bg-base-300 gap-4">
			<Link href="/" className="btn btn-ghost text-xl">
				Home
			</Link>
			{status === "loading" && <Loading />}
			{status === "authenticated" && (
				<div>
					{session.user!.name}
					<Link href="/api/auth/signout" className="ml-3">
						Sign out
					</Link>
				</div>
			)}
			{status === "unauthenticated" && (
				<div>
					<Link href="/api/auth/signin" className="mr-4">
						Login
					</Link>
					<Link href="/signup">Not registered?</Link>
				</div>
			)}
		</div>
	);
};

export default NavBar;
