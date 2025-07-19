import type { Metadata } from "next";
import { getAvailableAiModels } from "@/api/ai";
import { Prompts } from "./slokas";
import OgImage from "../assets/og-image.png";
import { getExtensions } from "@/api/store";
import { chapters } from "../gita";
import { getExtensionIdsFromString } from "@/utils/getExtensionIdsFromString";

const pageTitle = "Prompt Explorer by Raycast";
const pageDescription = "Easily browse, share, and add slokas to Raycast.";
const ogUrl = OgImage.src;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "/slokas",
    title: pageTitle,
    description: pageDescription,
    siteName: "Ray.so",
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
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
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  keywords: "slokas, AI, import, raycast, ideas",
};

export default async function Page() {
  const models = await getAvailableAiModels();
  const extensionIds = chapters.flatMap((prompt) => getExtensionIdsFromString(prompt.slug));
  const allExtensions = await getExtensions({ extensionIds });
  return <Prompts />;
}
