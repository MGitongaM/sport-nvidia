import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function TourmentsSection() {
  return (
    <>
      <section className="min-h-[80vh] my-20">
        <div className="flex gap-4 justify-between">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-2xl">Upcoming Events</h2>
            <p className="">
              Mark your calendars for our upcoming tournaments and events.
              Compete, connect, and enjoy the thrill of the game
            </p>
          </div>
          <div className="w-[40vw]">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="1">
                <AccordionTrigger>Tournment One</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos placeat illo cumque, a quidem vel magnam. Distinctio
                    mollitia magnam rerum!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>Tournment Two</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos placeat illo cumque, a quidem vel magnam. Distinctio
                    mollitia magnam rerum!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger>Tournment Three</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos placeat illo cumque, a quidem vel magnam. Distinctio
                    mollitia magnam rerum!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="4">
                <AccordionTrigger>Tournment Four</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos placeat illo cumque, a quidem vel magnam. Distinctio
                    mollitia magnam rerum!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
