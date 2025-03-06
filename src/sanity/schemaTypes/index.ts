import { type SchemaTypeDefinition } from "sanity";
import { bannerType } from "./banners";
import { newsAndUpdateType } from "./newsAndUpdates";
import { blockContentType } from "./blockContent";
import { tourmentType } from "./tourment";
import { golfCourseType } from "./golfCourse";
import { homeHeroContentType } from "./homeHeroContent";
import { homeAboutContentType } from "./homeAboutContent";
import { homeLegacyContentType } from "./homeLegacyContent";
import { homeSponsorContentType } from "./homeSponsors";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    bannerType,
    newsAndUpdateType,
    blockContentType,
    tourmentType,
    golfCourseType,
    homeHeroContentType,
    homeAboutContentType,
    homeLegacyContentType,
    homeSponsorContentType,
  ],
};
