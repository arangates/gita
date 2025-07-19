import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Shared } from "./shared";
import { Sloka } from "../gita";
import { nanoid } from "nanoid";
import { getExtensions } from "@/api/store";
import { getExtensionIdsFromString } from "@/utils/getExtensionIdsFromString";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function parseURLPrompt(promptQueryString?: string | string[]): Sloka[] {
  if (!promptQueryString) {
    return [];
  }
  let slokas;
  if (Array.isArray(promptQueryString)) {
    slokas = promptQueryString;
  } else {
    slokas = [promptQueryString];
  }
  return slokas.map((prompt) => ({
    ...JSON.parse(prompt),
    id: nanoid(),
    isShared: true,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const slokas = parseURLPrompt(searchParams.slokas as string);
  if (!slokas) {
    notFound();
  }

  if (slokas.length === 1) {
    const prompt = slokas[0];
    const pageTitle = `${prompt.title} - Raycast AI Prompt`;
    const pageDescription = "Raycast AI Prompt";
    const ogImage = `/slokas/og?title=${encodeURIComponent(prompt.title)}&icon=${(prompt as any).icon}`;

    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        type: "website",
        url: "/slokas/shared",
        title: pageTitle,
        description: pageDescription,
        siteName: "Ray.so",
        images: [
          {
            url: ogImage,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        creator: "@raycast",
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: ogImage,
          },
        ],
      },
      other: {
        "twitter:label1": "Model",
      },
    };
  } else {
    const pageTitle = `Raycast AI Prompts`;
    const pageDescription = `${slokas.length} shared slokas for Raycast AI`;
    const ogImageDescription = `"${slokas[0].title}" and ${slokas.length - 1} more ${
      slokas.length === 2 ? "prompt" : "slokas"
    }`;
    const ogImage = `/slokas/og?title=${encodeURIComponent(pageTitle)}&description=${encodeURIComponent(
      ogImageDescription,
    )}`;

    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        type: "website",
        url: "/slokas/shared",
        title: pageTitle,
        description: pageDescription,
        siteName: "Ray.so",
        images: [
          {
            url: ogImage,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        creator: "@raycast",
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: ogImage,
          },
        ],
      },
    };
  }
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const slokas = parseURLPrompt(searchParams.slokas as string);
  if (!slokas) {
    notFound();
  }
  return <Shared slokas={slokas} />;
}
