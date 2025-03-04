import { SINGLE_TOURNAMEN_QUERYResult } from "@/sanity/types";

export default function ContentSection({
  eventData,
}: {
  eventData: SINGLE_TOURNAMEN_QUERYResult;
}) {
  return (
    <>
      
      <section className=" bg-black text-slate-300">
        <div className="container mx-auto min-h-screen py-20">
        <div className="flex gap-4 justify-between items-start">
          <div className="w-6/12 space-y-8">
            <h2>{eventData?.tournamentTitle}</h2>
            <p className="text-lg">{eventData?.tournamentExcerpt}</p>
            <div className="flex gap-4">
              <div className="w-64 h-36 bg-green-300 rounded-lg"></div>
              <div className="w-64 h-36 bg-green-300 rounded-lg"></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium perferendis porro facere, ab rem ea voluptatem
              quisquam eum odio dolor. Natus, dolorem optio iste velit eligendi
              quae. Pariatur praesentium, hic repudiandae deleniti quos
              distinctio sed consequatur tenetur necessitatibus, eos delectus
              aspernatur enim velit assumenda quidem, natus qui temporibus
              aperiam exercitationem obcaecati est excepturi veniam cum. In
              culpa velit possimus ex quos incidunt beatae deserunt, maxime
              accusamus! Doloremque excepturi minus a quaerat vero animi.
              Inventore adipisci quidem deserunt, nobis sit iure tenetur magni
              ducimus quisquam ab, accusantium provident dolor facilis. Ex
              aperiam deserunt minus cumque dicta officiis unde expedita
              repellendus veritatis quis quibusdam nihil illum quasi nemo
              aliquam illo aut reiciendis rem est rerum, pariatur ut debitis.
              Necessitatibus, architecto, iste similique non magnam est
              praesentium et minus asperiores esse quod. Quia amet repellendus
              distinctio similique! Tempora perferendis velit assumenda ipsa
              libero dolorem aspernatur est deleniti soluta autem! Ipsum
              quibusdam suscipit eius debitis illo iste. Soluta, quia doloribus
              exercitationem ipsa quisquam porro ratione officiis ipsum,
              repudiandae fuga omnis temporibus qui ut veritatis dicta magnam.
              Cumque error harum quis beatae vitae deleniti iure? Culpa,
              recusandae ipsum! Officia, illum laboriosam. Suscipit perferendis,
              placeat cum rerum ad hic autem cupiditate natus animi sit, debitis
              esse.
            </p>
          </div>
          <div className="w-4/12 space-y-10">
            <div className=" rounded-lg border px-8 py-5">
              <p className="text-2xl">Event Details</p>
              <hr />
              <div className="my-8 space-y-4">
                <p>
                  <span className="font-semibold">Start Date :</span>July 23,
                  2025
                </p>
                <p>
                  <span className="font-semibold">End Date :</span>July 23, 2025
                </p>
                <p>
                  <span className="font-semibold">Opening Hours :</span>8.00pm
                </p>
              </div>
            </div>
            <div className=" rounded-lg border px-8 py-5">
              <p className="text-2xl">Event Venue</p>
              <hr />
              <div className="my-8 space-y-4">
                <p>
                  <span className="font-semibold">Venue :</span>Karen
                </p>
                <p>
                  <span className="font-semibold">Address :</span>Hillside drive
                </p>
                <p>
                  <span className="font-semibold">Email :</span>
                  Contact-us@email.com
                </p>
                <p>
                  <span className="font-semibold mr-1">Contact :</span>020 000
                  676 867{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
}
