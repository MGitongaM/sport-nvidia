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
export const TOURNAMENT_QUERY = defineQuery(`*[_type=="tournaments"]{
      tournamentFeatureImage{asset->},
      tournamentTitle,
      tournamentSlug,
      tournamentExcerpt,
      tournamentAuthor,
      tournamentDate,
      tournamentDetails,
    }`);
