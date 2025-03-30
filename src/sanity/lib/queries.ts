import { defineQuery } from "next-sanity";

export const BANNER_QUERY = defineQuery(`*[_type=="banner"]{
  bannerTitle,
  bannerSubTitle,
  bannerText,
  bannerImage{asset->}}`);
export const OPENGRAPHIMAGE_QUERY = defineQuery(`*[_type=="openGraphImage"]{
    featuredOpenGraphImage{asset->}}`);
export const HOMEHEROCONTENT_QUERY = defineQuery(`*[_type=="homeHeroContent"]{
  heroSectionTitle,
  heroSectionSubTitle,
  heroSectionText,
  heroSectionImage{asset->},
  }`);
export const HOMEABOUTCONTENT_QUERY = defineQuery(`*[_type=="homeAboutContent"]{
  aboutSectionTitle,
  aboutSectionSubTitle,
  aboutSectionText,
  aboutSectionImage,
  }`);
export const HOMELEGACYCONTENT_QUERY =
  defineQuery(`*[_type=="homeLegacyContent"]{
  legacySectionTitle,
  legacySectionSubTitle,
  legacySectionContent,
  legacySectionHeadingText,
  legacySectionImage,
  }`);
export const HOMESPONSORCONTENT_QUERY =
  defineQuery(`*[_type=="homeSponsorContent"]{
  sponsorSectionTitle,
  sponsorSectionSubTitle,
  sponsorSectionText,
  sponsorSectionImages,
  sponsorImage[]{sponsorImage{asset->{url}}},
  sponsorTitle,
  }`);

export const ABOUTHEROCONTENT_QUERY = defineQuery(`*[_type=="aboutHeroContent"]{
    heroSectionTitle,
    heroSectionSubTitle,
    heroSectionText,
    heroSectionImage{asset->},
    }`);
export const ABOUTMISSIONVISIONCONTENT_QUERY =
  defineQuery(`*[_type=="aboutMissionVisionContent"]{
    missionTitle,
    missionText,
    aboutBackgroundImage,
    missionImage,
    visionTitle,
    visionText,
    visionImage,
    }`);
export const ABOUTSPORTSCONTENT_QUERY =
  defineQuery(`*[_type=="aboutSportsContent"]{
      sportsSectionTitle,
      sportSectionSubTitle,
      sportSectionText,
      sportBackgroundImage,
      sportsContent,
      sportHeading,
      sportText,
      sportImage,
      }`);

export const ABOUTCOMMUNITYMEMBERSHIPCONTENT_QUERY =
  defineQuery(`*[_type=="aboutCommunityMembershipContent"]{
              communityTitle,
              communityText,
              membershipTitle,
              membershipText,
              communityBackgroundImage,
              }`);
export const CONTACTCONTENT_QUERY = defineQuery(`*[_type=="contactContent"]{
            contactSectionTitle,
            contactSectionText, 
            }`);
export const CONTACTVISTCONTENT_QUERY =
  defineQuery(`*[_type=="contactVisitContent"]{
            vistSectionTitle,
            vistSectionText, 
            vistSectionImage,
            }`);

export const MEMBERSHIPHEROCONTENT_QUERY =
  defineQuery(`*[_type=="membershipHeroContent"]{
              heroSectionTitle,
              heroSectionSubTitle,
              heroSectionText,
              heroSectionImage{asset->},
              }`);

export const MEMBERSHIPBENEFITCONTENT_QUERY =
  defineQuery(`*[_type=="membershipBenefitContent"]{
              benefitSectionTitle,
              benefitSectionSubTitle,
              benefitectionText,
              benefitContent,
              benefitHeading,
              benefitText,
              benefitImage,
              }`);

export const MEMBERSHIPCATEGORIESCONTENT_QUERY =
  defineQuery(`*[_type=="membershipCategoriesContent"]{
              membershipCategoriesTitle,
              membershipCategoriesText,
              membershipCategoriestDetails,
              membershipCategoriesImage,
              }`);
export const MEMBERSHIPJOINCONTENT_QUERY =
  defineQuery(`*[_type=="membershipJoinContent"]{
              joinSectionTitle,
              joinSectionSubTitle,
              joinSectionText,
              joinDetails,
              }`);

export const NEWSANDUPDATETYPE_QUERY = defineQuery(`*[_type=="newsAndUpdates"]{
      newsUpdateFeatureImage{asset->},
      newsUpdateTitle,
      newsUpdateSlug,
      newsUpdateExcerpt,
      newsUpdateAuthor,
      newsUpdateDate,
      newsUpdateDetails,
      newsUpdatePublishedAt,
    }`);
export const NEWSANDUPDATEHEROCONTENT_QUERY =
    defineQuery(`*[_type=="newsUpdateHeroContent"]{
    newsUpdateHeroSectionTitle,
    newsUpdateHeroSectionSubTitle,
    newsUpdateHeroSectionText,
    newsUpdateHeroSectionImages,
    newsUpdateImage[]{newsUpdateImage{asset->{url}}},
    newsUpdateTitle,
    }`);
export const EVENTSHEROCONTENT_QUERY =
    defineQuery(`*[_type=="eventsHeroContent"]{
    eventsHeroSectionTitle,
    eventsHeroSectionSubTitle,
    eventsHeroSectionText,
    eventsHeroSectionImages,
    eventsImage[]{eventsImage{asset->{url}}},
    eventsTitle,
    }`);
export const SINGLE_NEWSANDUPDATETYPE_QUERY =
  defineQuery(`*[_type=="newsAndUpdates" && newsUpdateSlug.current==$slug][0]{
      newsUpdateFeatureImage{asset->},
      newsUpdateTitle,
      newsUpdateSlug,
      newsUpdateExcerpt,
      newsUpdateAuthor,
      newsUpdateDate,
      newsUpdateDetails,
    }`);
export const TOURNAMENT_QUERY = defineQuery(`*[_type=="tournaments"]{
      tournamentFeatureImage{asset->},
      tournamentTitle,
      tournamentSlug,
      tournamentExcerpt,
      tournamentAuthor,
      tournamentDate,
      tournamentDetails,
    }`);
export const SINGLE_TOURNAMEN_QUERY =
  defineQuery(`*[_type=="tournaments" && tournamentSlug.current==$tournamentSlug][0]{
      tournamentFeatureImage{asset->},
      tournamentTitle,
      tournamentSlug,
      tournamentExcerpt,
      tournamentAuthor,
      tournamentDate,
      tournamentDetails,
    }`);
export const GOLFCOURSE_QUERY = defineQuery(`*[_type=="golfCourse"]{
      golfCourseFeatureImage{asset->},
      golfCourseTitle,
      golfCourseSlug,
      golfCourseExcerpt,
      golfCourseAuthor,
      golfCourseDate,
      golfCourseDetails,
    }`);
export const SINGLE_GOLFCOURSE_QUERY =
  defineQuery(`*[_type=="golfCourse" && golfCourseSlug.current==$slug][0]{
      golfCourseFeatureImage{asset->},
      golfCourseTitle,
      golfCourseSlug,
      golfCourseExcerpt,
      golfCourseAuthor,
      golfCourseDate,
      golfCourseDetails,
      golfCourseShowCaseImage1,
      golfCourseShowCaseImage2,
      golfCourseEstablishedHeading,
      golfCourseEstablishedSubText,
      golfCourseEstablishedStats1,
      golfCourseEstablishedStats2,
    }`);
