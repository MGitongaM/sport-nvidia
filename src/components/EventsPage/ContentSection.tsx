import React from "react";

export default function ContentSection() {
  return (
    <>
      <section className="container mx-auto min-h-screen ">
        <div className="flex gap-4 justify-between items-start">
          <div className="w-6/12 space-y-8">
            <h2>Golf for Beginners Practice and Learning</h2>
            <p>
              Welcome to our vibrant and welcoming golf club, where every member
              is part of our close-knit community. Whether you&apos;re a seasoned
              golfer or just starting out, our club is the perfect place to hone
              your skills, enjoy the game, and connect with fellow golf
              enthusiasts. At our club, we believe in creating a friendly and
              supportive environment that fosters camaraderie and sportsmanship.
              Our beautifully maintained course offers challenging yet enjoyable
              play for golfers of all levels, with stunning landscapes and
              well-designed fairways that make every round a delight.
            </p>
          <div className="flex gap-4">
            <div className="w-64 h-36 bg-green-300 rounded-lg"></div>
            <div className="w-64 h-36 bg-green-300 rounded-lg"></div>
            
          </div>
          </div>
          <div className="w-4/12 space-y-10">
            <div className=" rounded-lg border px-8 py-5">
                <p className="text-2xl">Event Details</p>
                <hr />
                <div className="my-8 space-y-4">
                <p><span className="font-semibold">Start Date :</span>July 23, 2025</p>
                <p><span className="font-semibold">End Date :</span>July 23, 2025</p>
                <p><span className="font-semibold">Opening Hours :</span>8.00pm</p>

                </div>

            </div>
            <div className=" rounded-lg border px-8 py-5">
                <p className="text-2xl">Event Venue</p>
                <hr />
                <div className="my-8 space-y-4">
                    <p><span className="font-semibold">Venue :</span>Karen</p>
                    <p><span className="font-semibold">Address :</span>Hillside drive</p>
                    <p><span className="font-semibold">Email :</span>Contact-us@email.com</p>
                    <p><span className="font-semibold mr-1">Contact :</span>020 000 676 867 </p>

                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
