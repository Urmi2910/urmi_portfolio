import { uiComponentsGallery } from "@/data/ui-components";
import { writingExamples } from "@/data/product-content-design";

export const productContentDesignHubPath = "/work/product-content-design";

export interface ProductContentExampleNavItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  standaloneHref: string;
}

export const productContentExampleNav: ProductContentExampleNavItem[] = [
  {
    slug: uiComponentsGallery.slug,
    title: uiComponentsGallery.title,
    description: uiComponentsGallery.description,
    href: `${productContentDesignHubPath}#${uiComponentsGallery.slug}`,
    standaloneHref: `${productContentDesignHubPath}/microcopy-examples`,
  },
  ...writingExamples.map((example) => ({
    slug: example.slug,
    title: example.title,
    description: example.teaser,
    href: `${productContentDesignHubPath}#${example.slug}`,
    standaloneHref: `/work/product-content-design/${example.slug}`,
  })),
];
