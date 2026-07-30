import { getWritingExample, productContentDesignHub, writingExamples } from "@/data/product-content-design";
import { uiComponentsGallery } from "@/data/ui-components";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const uiComponentRedirects: Record<string, string> = {
  "dropdown-labels": "/work/product-content-design?open=microcopy-examples&item=dropdown-labels",
  snackbars: "/work/product-content-design?open=microcopy-examples&item=snackbars",
  "call-to-action": "/work/product-content-design?open=microcopy-examples&item=call-to-action",
};

interface PageProps {
  params: Promise<{ example: string }>;
}

export async function generateStaticParams() {
  return writingExamples.map((example) => ({ example: example.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { example: slug } = await params;
  const example = getWritingExample(slug);
  if (!example) return { title: "Example Not Found" };
  return {
    title: `${example.title} | ${productContentDesignHub.title} | ${profile.name}`,
    description: example.teaser,
  };
}

export default async function WritingExamplePage({ params }: PageProps) {
  const { example: slug } = await params;

  if (slug === uiComponentsGallery.slug) {
    redirect("/work/product-content-design?open=microcopy-examples");
  }

  if (uiComponentRedirects[slug]) {
    redirect(uiComponentRedirects[slug]);
  }

  const example = getWritingExample(slug);

  if (!example) notFound();

  redirect(`/work/product-content-design#${slug}`);
}
