"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      nmessage: formData.get("message") as string,
    };
    toast.info("Form Information is being submitted", {
      position: "top-right",
    });
    console.log(formValues);
    if(formRef){formRef.current?.reset()}
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleContactForm}
        className="px-8 py-12 space-y-8"
      >
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="youremailaddress@mail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0700 000 000"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject Reason"
            />
          </div>
        </div>
        <div className="c">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message here... "
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 min-w-32"
        >
          Send
        </Button>
      </form>
    </>
  );
}
