import type { EntrySkeletonType } from "contentful"

/**
 * Minimal Asset shape we actually use
 */
export interface ContentfulAsset {
  fields: {
    file: {
      url: string
    }
  }
}

export interface HomeFields {
  title: string
  websiteDescriptipn?: string
  websiteKeyWords?: string
  websiteFavicon?: ContentfulAsset
  websiteLogo?: ContentfulAsset
}

export type HomeSkeleton = EntrySkeletonType<HomeFields, "home">
