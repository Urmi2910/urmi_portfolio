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

export function getProductContentExampleNav(slug: string) {
  const index = productContentExampleNav.findIndex((item) => item.slug === slug);
  if (index === -1) return undefined;

  return {
    index,
    current: productContentExampleNav[index],
    prev: index > 0 ? productContentExampleNav[index - 1] : undefined,
    next:
      index < productContentExampleNav.length - 1 ? productContentExampleNav[index + 1] : undefined,
    total: productContentExampleNav.length,
  };
}
