import { type SchemaTypeDefinition } from "sanity";
import { bannerType } from "./banners";
import { newsAndUpdateType } from "./newsAndUpdates";
import { blockContentType } from "./blockContent";
import { tourmentType } from "./tourment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType, newsAndUpdateType, blockContentType, tourmentType],
};
