"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function UpgradeSubscriptionForm() {
  const [plan, setPlan] = useState("starter");
  const [agreed, setAgreed] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upgrade your subscription</CardTitle>
        <CardDescription>
          You are currently on the free plan. Upgrade to the pro plan to get
          access to all features.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Evil Rabbit" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@acme.com" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="card-number">Card Number</Label>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-[1fr_80px_60px]">
              <Input id="card-number" placeholder="1234 1234 1234 1234" />
              <Input id="card-expiry" placeholder="MM/YY" />
              <Input id="card-cvc" placeholder="CVC" />
            </div>
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium">Plan</legend>
            <p className="text-muted-foreground text-sm">
              Select the plan that best fits your needs.
            </p>
            <RadioGroup
              value={plan}
              onValueChange={setPlan}
              className="grid gap-3 md:grid-cols-2"
            >
              <Label
                htmlFor="starter"
                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer ${
                  plan === "starter" ? "ring-2 ring-ring" : ""
                }`}
              >
                <RadioGroupItem value="starter" id="starter" />
                <div className="grid gap-1 font-normal">
                  <div className="font-medium">Starter Plan</div>
                  <div className="text-muted-foreground text-xs">
                    Perfect for small businesses.
                  </div>
                </div>
              </Label>
              <Label
                htmlFor="pro"
                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer ${
                  plan === "pro" ? "ring-2 ring-ring" : ""
                }`}
              >
                <RadioGroupItem value="pro" id="pro" />
                <div className="grid gap-1 font-normal">
                  <div className="font-medium">Pro Plan</div>
                  <div className="text-muted-foreground text-xs">
                    More features and storage.
                  </div>
                </div>
              </Label>
            </RadioGroup>
          </fieldset>

          <div className="flex flex-col gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Enter notes" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(value) => setAgreed(value === true)}
              />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="newsletter"
                checked={newsletter}
                onCheckedChange={(value) => setNewsletter(value === true)}
              />
              <Label htmlFor="newsletter">Allow us to send you emails</Label>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Upgrade Plan</Button>
      </CardFooter>
    </Card>
  );
}
