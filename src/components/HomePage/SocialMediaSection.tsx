import React from "react";
import { Button } from "../ui/button";

export default function SocialMediaSection() {
  return (
    <>
      <section className="min-h-[80vh] my-20">
        <div className="flex gap-4 justify-between">
          <div className="c">
            <h2 className="text-2xl">Join Our Community</h2>
            <p className="">
              Follow us on social media for real-time updates, tips, and
              community interactions.
            </p>
          </div>
          <div className="c">
            {["Instagram", "Tiktok", "X", "Facebook"].map((social, index) => (
              <div key={index} className="flex flex-col">
                <div className="c">
                  <p>{social}</p>
                  <Button>Follow Us On {social}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
