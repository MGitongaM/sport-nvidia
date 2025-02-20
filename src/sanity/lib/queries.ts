import { defineQuery } from "next-sanity";

export const BANNER_QUERY = defineQuery(`*[_type=="banner"]{
  bannerTitle,
  bannerSubTitle,
  bannerText,
  bannerImage{asset->}}`);
