"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Github from "@/components/icons/GithubIcon";
import Google from "@/components/icons/GoogleIcon";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-md">
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5 px-6">
          <div className="text-2xl font-semibold">Sign in to your account</div>
          <div className="text-sm text-muted-foreground">
            Enter your email and password to access your account
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 flex flex-col gap-4">
          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" className="w-full">
              <Github />
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <Google />
              Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">
                Or sign in with
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-6 flex flex-col gap-4">
          <Button className="w-full">Sign in</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              href="/dang-ky"
              className="text-primary hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
