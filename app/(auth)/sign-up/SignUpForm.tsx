"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function SignUpForm() {
  return (
    <div className="grid gap-2 w-full lg:max-w-md">
      <div className="grid gap-2 py-2">
        <Label className="text-left font-exo" htmlFor="email">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          className="font-handlee"
          placeholder="example@email.com"
        />
      </div>
      <div className="grid gap-1 py-2">
        <Label className="text-left font-exo" htmlFor="password">
          Password
        </Label>
        <Input
          className="font-handlee"
          name="password"
          type="password"
          id="password"
          placeholder="*************"
        />
      </div>
      <Button>Sign-up</Button>
    </div>
  );
}
