"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CookieSettingsCard() {
  const [necessaryCookies, setNecessaryCookies] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        {/* Strictly Necessary Cookies */}
        <div className="flex items-center justify-between gap-4">
          <Label
            htmlFor="necessary"
            className="flex flex-col items-start gap-2"
          >
            <span>Strictly Necessary</span>
            <span className="text-muted-foreground text-sm">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch
            id="necessary"
            checked={necessaryCookies}
            onCheckedChange={setNecessaryCookies}
            aria-label="Necessary"
          />
        </div>

        {/* Functional Cookies */}
        <div className="flex items-center justify-between gap-4">
          <Label
            htmlFor="functional"
            className="flex flex-col items-start gap-2"
          >
            <span>Functional Cookies</span>
            <span className="text-muted-foreground text-sm">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch
            id="functional"
            checked={functionalCookies}
            onCheckedChange={setFunctionalCookies}
            aria-label="Functional"
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Save preferences</Button>
      </CardFooter>
    </Card>
  );
}
