import packageMetadata from "../../package.json";

export const TABLETOP_ASSET_VERSION = encodeURIComponent(
    import.meta.env.PUBLIC_APP_VERSION ?? packageMetadata.version,
);

const withAssetVersion = (path: string): string => `${path}?version=${TABLETOP_ASSET_VERSION}`;

export const getUtilityOgImage = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/alcohol/images/${englishSlug}.webp`);

export const getUtilityCssPath = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/alcohol/styles/${englishSlug}.css`);

export const CATEGORY_OG_IMAGE = getUtilityOgImage("alcohol");
