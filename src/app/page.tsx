"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to dangkh0a_shadcn</h1>

      <Link href="/about">
        <Button variant="default">Go to About</Button>
      </Link>

      <Link href="/dashboard">
        <Button variant="secondary">Go to Dashboard</Button>
      </Link>

      <Link href="/collapsible">
        <Button variant="default">Go to Collapsible</Button>
      </Link>
    </main>
  );
}
