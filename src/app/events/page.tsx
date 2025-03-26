// import AllEventsSection from "@/components/EventsPage/AllEventsSection";
import HeroSection1 from "@/components/EventsPage/HeroSection1";
import LatesTournamentsSection from "@/components/EventsPage/LatesTournamentsSection";
import OlderTournamentsSection from "@/components/EventsPage/OlderTournamentsSection";

export default function EventsPage() {
  return (
    <main>
      <HeroSection1/>
      <LatesTournamentsSection/>
      <OlderTournamentsSection/>
      {/* <AllEventsSection /> */}
    </main>
  );
}
