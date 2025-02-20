import { type SchemaTypeDefinition } from "sanity";
import { bannerType } from "./banners";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType],
};
