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
import { aboutHeroContentType } from "./aboutPageSchemas/aboutHeroContent";
import { aboutMissionVisionContentType } from "./aboutPageSchemas/abourMissionVisionContent";
import { aboutSportsContentType } from "./aboutPageSchemas/aboutSportsContent";
import { aboutCommunityMembershipContentType } from "./aboutPageSchemas/aboutCommunityMembership";
import { contactContentType } from "./contactPageSchemas/contactSection";
import { contactVisitContentType } from "./contactPageSchemas/visitSection";
import { membershipHeroContentType } from "./membershipPageSchemas/membershipHeroContent";
import { membershipBenefitContentType } from "./membershipPageSchemas/membershipBenefitContent";
import { membershipCategoriesContentType } from "./membershipPageSchemas/membershipCategoriesContent";
import { membershipJoinContentType } from "./membershipPageSchemas/membershipJoinContent";
import { openGraphType } from "./openGraphImagesSchemas/openGraphImages";
import { newsUpdateHeroContentType } from "./newsUpdatesPageSchemas/newsUpdatesHeroContent";
import { eventsHeroContentType } from "./eventsPageSchemas/eventsHeroContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    bannerType,
    openGraphType,
    newsAndUpdateType,
    newsUpdateHeroContentType,
    eventsHeroContentType,
    blockContentType,
    tourmentType,
    golfCourseType,
    homeHeroContentType,
    homeAboutContentType,
    homeLegacyContentType,
    homeSponsorContentType,
    aboutHeroContentType,
    aboutMissionVisionContentType,
    aboutSportsContentType,
    aboutCommunityMembershipContentType,
    contactContentType,
    contactVisitContentType,
    membershipHeroContentType,
    membershipBenefitContentType,
    membershipCategoriesContentType,
    membershipJoinContentType,

  ],
};
