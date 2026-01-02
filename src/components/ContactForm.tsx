"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`${name} From Contact Form`);
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:koushik.sethuraman6@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          Fill out the form below to send me a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <Input placeholder="Name" name="name" required />
          <Input placeholder="Email" name="email" type="email" required />
          <textarea
            placeholder="Message"
            name="message"
            required
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
