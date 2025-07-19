import copy from "copy-to-clipboard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BASE_URL } from "@/utils/common";
import { Model } from "@/api/ai";
import { getRaycastFlavor } from "@/app/RaycastFlavor";
import { Sloka } from "../gita";

function prepareModel(model?: string) {
  if (model && /^".*"$/.test(model)) {
    return model.slice(1, model.length - 1) as Model;
  }
  return model || "openai-gpt-4o-mini";
}

function makePromptImportData(slokas: Sloka[]): string {
  return `[${slokas
    .map((selectedPrompt) => {
      const { title } = selectedPrompt;

      return JSON.stringify({
        title,
        prompt,
      });
    })
    .join(",")}]`;
}

function makeQueryString(slokas: Sloka[]): string {
  const queryString = slokas
    .map((selectedPrompt) => {
      const { title } = selectedPrompt;

      return `slokas=${encodeURIComponent(
        JSON.stringify({
          title,
          prompt,
        }),
      )}`;
    })
    .join("&");
  return queryString;
}

export function downloadData(slokas: Sloka[]) {
  const encodedPromptsData = encodeURIComponent(makePromptImportData(slokas));
  const jsonString = `data:text/json;chatset=utf-8,${encodedPromptsData}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "slokas.json";
  link.click();
}

export function copyData(slokas: Sloka[]) {
  copy(makePromptImportData(slokas));
}

export function makeUrl(slokas: Sloka[]) {
  return `${BASE_URL}/slokas/shared?${makeQueryString(slokas)}`;
}

export function copyUrl(slokas: Sloka[]) {
  copy(makeUrl(slokas));
}

export async function addToRaycast(router: AppRouterInstance, slokas: Sloka[]) {
  const raycastProtocol = await getRaycastFlavor();
  router.replace(`${raycastProtocol}://slokas/import?${makeQueryString(slokas)}`);
}
