"use client";

import { Sloka } from "../gita";
import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { useRouter } from "next/navigation";
import { SelectionArea, SelectionEvent } from "@viselect/react";

import copy from "copy-to-clipboard";

import { isTouchDevice } from "../utils/isTouchDevice";
import {
  ChevronDownIcon,
  CopyClipboardIcon,
  DownloadIcon,
  LinkIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  StarsIcon,
} from "@raycast/icons";
import { extractPrompts } from "../utils/extractPrompts";
import { addToRaycast, copyData, downloadData, makeUrl } from "../utils/actions";

import styles from "../[[...slug]]/slokas.module.css";
import { ScrollArea } from "@/components/scroll-area";
import { ButtonGroup } from "@/components/button-group";
import { Button } from "@/components/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/dropdown-menu";
import { Toast, ToastTitle } from "../components/Toast";
import { NavigationActions } from "@/components/navigation";
import { InfoDialog } from "../components/InfoDialog";
import { Kbd, Kbds } from "@/components/kbd";
import { Extension } from "@/api/store";

export function Shared({ slokas }: { slokas: Sloka[] }) {
  const router = useRouter();

  const [copied, setCopied] = React.useState(false);
  const [actionsOpen, setActionsOpen] = React.useState(false);

  const [selectedSlokas, setSelectedSlokas] = React.useState([...slokas]);
  const isTouch = React.useMemo(() => (typeof window !== "undefined" ? isTouchDevice() : false), []);

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    {
      name: `${slokas.length} ${slokas.length > 1 ? "slokas" : "sloka"} shared with you`,
      isTemplate: true,
      isShared: true,
      slokas: slokas,
      slug: "/shared",
      icon: StarsIcon,
    },
  ];

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedSlokas([]);
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    // Selection logic for Sloka
    setSelectedSlokas((prevSlokas) => {
      let slokas = [...prevSlokas];
      added.forEach((el: any) => {
        const id = el.getAttribute("data-id");
        if (!id) return;
        const found = slokas.find((s) => String(s.id) === id);
        if (!found) {
          const sloka = slokasFromCategories(categories, id);
          if (sloka) slokas.push(sloka);
        }
      });
      removed.forEach((el: any) => {
        const id = el.getAttribute("data-id");
        if (!id) return;
        slokas = slokas.filter((s) => String(s.id) !== id);
      });
      return slokas;
    });
  };

  function slokasFromCategories(categories: any[], id: string) {
    for (const cat of categories) {
      const found = cat.slokas.find((s: Sloka) => String(s.id) === id);
      if (found) return found;
    }
    return null;
  }

  const handleDownload = React.useCallback(() => {
    downloadData(selectedSlokas);
  }, [selectedSlokas]);

  const handleCopyData = React.useCallback(() => {
    const slokas = selectedSlokas.map((sloka) => ({
      prompt: sloka.verse_text ?? "",

      // Add other Prompt fields as needed, fallback to empty string or default value
      ...sloka,
    }));
    copyData(slokas);
    setCopied(true);
  }, [selectedSlokas]);

  const handleCopyUrl = React.useCallback(async () => {
    const url = makeUrl(selectedSlokas);
    let urlToCopy = url;
    const encodedUrl = encodeURIComponent(urlToCopy);
    const response = await fetch(`https://ray.so/api/shorten-url?url=${encodedUrl}&ref=slokas`).then((res) =>
      res.json(),
    );

    if (response.link) {
      urlToCopy = response.link;
    }

    copy(urlToCopy);
    setCopied(true);
  }, [selectedSlokas]);

  const handleAddToRaycast = React.useCallback(() => {
    const slokas = selectedSlokas.map((sloka) => ({
      prompt: sloka.verse_text ?? "",
      // icon: sloka?.icon ?? "",
      ...sloka,
    }));
    addToRaycast(router, slokas);
  }, [router, selectedSlokas]);

  const handleCopyText = React.useCallback((sloka: Sloka) => {
    copy(sloka.verse_text);
    setCopied(true);
  }, []);

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const { key, keyCode, metaKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedSlokas.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedSlokas.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedSlokas.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedSlokas.length === 0) return;
        event.preventDefault();
        handleCopyData();
        setActionsOpen(false);
      }

      if (key === "a" && metaKey) {
        event.preventDefault();
        setSelectedSlokas([...slokas]);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [slokas, setActionsOpen, selectedSlokas, handleCopyData, handleDownload, handleAddToRaycast]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  if (slokas.length === 0) {
    return;
  }

  return (
    <div>
      <NavigationActions>
        <div className="flex gap-2 sm:hidden">
          <Button variant="primary" disabled={selectedSlokas.length === 0} onClick={() => handleCopyUrl()}>
            <LinkIcon /> Copy URL to Share
          </Button>
        </div>
        <div className="sm:flex gap-2 hidden">
          <InfoDialog />
          <ButtonGroup>
            <Button variant="primary" disabled={selectedSlokas.length === 0} onClick={() => handleAddToRaycast()}>
              <PlusCircleIcon /> Add to Raycast
            </Button>

            <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="primary" disabled={selectedSlokas.length === 0} aria-label="Export options">
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled={selectedSlokas.length === 0} onSelect={() => handleDownload()}>
                  <DownloadIcon /> Download JSON
                  <Kbds>
                    <Kbd>⌘</Kbd>
                    <Kbd>D</Kbd>
                  </Kbds>
                </DropdownMenuItem>
                <DropdownMenuItem disabled={selectedSlokas.length === 0} onSelect={() => handleCopyData()}>
                  <CopyClipboardIcon /> Copy JSON{" "}
                  <Kbds>
                    <Kbd>⌘</Kbd>
                    <Kbd>⌥</Kbd>
                    <Kbd>C</Kbd>
                  </Kbds>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </NavigationActions>
      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboardIcon /> Copied to clipboard
        </ToastTitle>
      </Toast>
      <div className={styles.container}>
        {isTouch !== null && (
          <SelectionArea
            className="container pt-8"
            onStart={onStart}
            onMove={onMove}
            selectables=".selectable"
            features={{
              // Disable support for touch devices
              touch: isTouch ? false : true,
              range: true,
              singleTap: {
                allow: true,
                intersect: "native",
              },
            }}
          >
            {categories.map((slokaGroup) => (
              <div key={slokaGroup.name} data-section-slug={slokaGroup.slug} style={{ outline: "none" }}>
                <h2 className={styles.subtitle}>
                  <slokaGroup.icon /> {slokaGroup.name}
                </h2>
                <div className={styles.slokas}>
                  {slokaGroup.slokas.map((sloka, index) => {
                    const isSelected = selectedSlokas.some((selectedSloka) => selectedSloka.id === sloka.id);
                    return (
                      <ContextMenu.Root key={sloka.id}>
                        <ContextMenu.Trigger>
                          <div
                            className={`${styles.item} selectable`}
                            key={sloka.id}
                            data-selected={isSelected}
                            data-key={`${slokaGroup.slug}-${index}`}
                            data-id={sloka.id}
                          >
                            <div className={styles.promptTemplate}>
                              <ScrollArea>
                                <pre className={styles.template}>{sloka.devanagari}</pre>
                              </ScrollArea>
                            </div>
                            <div className={styles.prompt}>
                              <span className={styles.name}>Verse {sloka.title}</span>
                              {sloka.en_meaning && <span className={styles.translation}>{sloka.en_meaning}</span>}
                            </div>
                          </div>
                        </ContextMenu.Trigger>
                        <ContextMenu.Portal>
                          <ContextMenu.Content className={styles.contextMenuContent}>
                            <ContextMenu.Item
                              className={styles.contextMenuItem}
                              onSelect={() => {
                                if (isSelected) {
                                  return setSelectedSlokas((prevSlokas) =>
                                    prevSlokas.filter((prevSloka) => prevSloka.id !== sloka.id),
                                  );
                                }
                                setSelectedSlokas((prevSlokas) => [...prevSlokas, sloka]);
                              }}
                            >
                              {isSelected ? <MinusCircleIcon /> : <PlusCircleIcon />}
                              {isSelected ? "Deselect Sloka" : "Select Sloka"}
                            </ContextMenu.Item>
                            <ContextMenu.Item className={styles.contextMenuItem} onSelect={() => handleCopyText(sloka)}>
                              <CopyClipboardIcon /> Copy Sloka Text
                            </ContextMenu.Item>
                          </ContextMenu.Content>
                        </ContextMenu.Portal>
                      </ContextMenu.Root>
                    );
                  })}
                </div>
              </div>
            ))}
          </SelectionArea>
        )}
      </div>
    </div>
  );
}
