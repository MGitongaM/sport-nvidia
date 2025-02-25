import { defineQuery } from "next-sanity";

export const BANNER_QUERY = defineQuery(`*[_type=="banner"]{
  bannerTitle,
  bannerSubTitle,
  bannerText,
  bannerImage{asset->}}`);

export const NEWSANDUPDATETYPE_QUERY = defineQuery(`*[_type=="newsAndUpdates"]{
      newsUpdateFeatureImage{asset->},
      newsUpdateTitle,
      newsUpdateSlug,
      newsUpdateExcerpt,
      newsUpdateAuthor,
      newsUpdateDate,
      newsUpdateDetails,
    }`);
export const SINGLE_NEWSANDUPDATETYPE_QUERY=defineQuery(`*[_type=="newsAndUpdates" && newsUpdateSlug.current==$slug][0]{
      newsUpdateFeatureImage{asset->},
      newsUpdateTitle,
      newsUpdateSlug,
      newsUpdateExcerpt,
      newsUpdateAuthor,
      newsUpdateDate,
      newsUpdateDetails,
    }`)
export const TOURNAMENT_QUERY = defineQuery(`*[_type=="tournaments"]{
      tournamentFeatureImage{asset->},
      tournamentTitle,
      tournamentSlug,
      tournamentExcerpt,
      tournamentAuthor,
      tournamentDate,
      tournamentDetails,
    }`);
export const SINGLE_TOURNAMEN_QUERY=defineQuery(`*[_type=="tournaments" && tournamentSlug.current==$tournamentSlug][0]{
      tournamentFeatureImage{asset->},
      tournamentTitle,
      tournamentSlug,
      tournamentExcerpt,
      tournamentAuthor,
      tournamentDate,
      tournamentDetails,
    }`)
export const GOLFCOURSE_QUERY = defineQuery(`*[_type=="golfCourse"]{
      golfCourseFeatureImage{asset->},
      golfCourseTitle,
      golfCourseSlug,
      golfCourseExcerpt,
      golfCourseAuthor,
      golfCourseDate,
      golfCourseDetails,
    }`);
    export const SINGLE_GOLFCOURSE_QUERY=defineQuery(`*[_type=="golfCourse" && golfCourseSlug.current==$slug][0]{
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
      golfCourseEstablishedStats2,
      golfCourseEstablishedStats2,
    }`)