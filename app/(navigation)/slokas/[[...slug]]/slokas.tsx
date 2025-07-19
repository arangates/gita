"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useSectionInView, useSectionInViewObserver } from "@/utils/useSectionInViewObserver";
import { SelectionArea, SelectionEvent } from "@viselect/react";
import { chapters, Chapter, Sloka } from "../gita";
import copy from "copy-to-clipboard";
import { isTouchDevice } from "../utils/isTouchDevice";
import styles from "./slokas.module.css";
import { ButtonGroup } from "@/components/button-group";
import { Button } from "@/components/button";
import {
  ChevronDownIcon,
  CopyClipboardIcon,
  DownloadIcon,
  LinkIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  StarsIcon,
  TrashIcon,
} from "@raycast/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/dropdown-menu";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "@/components/scroll-area";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { NavigationActions } from "@/components/navigation";
import { Kbd, Kbds } from "@/components/kbd";
import { InfoDialog } from "../components/InfoDialog";

interface Props {
  chapters: Chapter[];
}

export function Prompts() {
  const [enableViewObserver, setEnableViewObserver] = React.useState(false);
  useSectionInViewObserver({ headerHeight: 50, enabled: enableViewObserver });

  const [selectedSlokas, setSelectedSlokas] = React.useState<Sloka[]>([]);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState<boolean>();
  const router = useRouter();

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!isTouch && !event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedSlokas([]);
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    setSelectedSlokas((prevSlokas) => {
      let slokas = [...prevSlokas];
      added.forEach((el: Element) => {
        const id = el.getAttribute("data-id");
        if (!id) return;
        const found = slokas.find((s) => String(s.id) === id);
        if (!found) {
          const sloka = findSlokaById(chapters, id);
          if (sloka) slokas.push(sloka);
        }
      });
      removed.forEach((el: Element) => {
        const id = el.getAttribute("data-id");
        if (!id) return;
        slokas = slokas.filter((s) => String(s.id) !== id);
      });
      return slokas;
    });
  };

  function findSlokaById(chapters: Chapter[], id: string): Sloka | null {
    for (const chapter of chapters) {
      const found = chapter.slokas.find((s) => String(s.id) === id);
      if (found) return found;
    }
    return null;
  }

  const handleDownload = React.useCallback(() => {
    const data = JSON.stringify(selectedSlokas, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "slokas.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [selectedSlokas]);

  const handleCopyData = React.useCallback(() => {
    copy(JSON.stringify(selectedSlokas, null, 2));
    setToastMessage("Copied to clipboard");
    setShowToast(true);
  }, [selectedSlokas]);

  const handleCopyText = React.useCallback((sloka: Sloka) => {
    copy(sloka.verse_text);
    setToastMessage("Copied to clipboard");
    setShowToast(true);
  }, []);

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
    setEnableViewObserver(true);
  }, [isTouch, setIsTouch, setEnableViewObserver]);

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;
      if (key === "k" && metaKey) {
        if (selectedSlokas.length === 0) return;
        setActionsOpen((prevOpen) => !prevOpen);
      }
      if (key === "d" && metaKey) {
        if (selectedSlokas.length === 0) return;
        event.preventDefault();
        handleDownload();
      }
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedSlokas.length === 0) return;
        event.preventDefault();
        handleCopyData();
        setActionsOpen(false);
      }
      if (key === "a" && metaKey) {
        event.preventDefault();
        // Select all slokas
        setSelectedSlokas(chapters.flatMap((c) => c.slokas));
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [selectedSlokas, handleCopyData, handleDownload]);

  React.useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <div>
      <NavigationActions>
        <div className="flex gap-2 sm:hidden">
          <Button variant="primary" disabled={selectedSlokas.length === 0} onClick={handleCopyData}>
            <CopyClipboardIcon /> Copy JSON
          </Button>
        </div>
        <div className="sm:flex gap-2 hidden">
          <InfoDialog />
          <ButtonGroup>
            <Button variant="primary" disabled={selectedSlokas.length === 0} onClick={handleDownload}>
              <DownloadIcon /> Download JSON
            </Button>
            <Button variant="primary" disabled={selectedSlokas.length === 0} onClick={handleCopyData}>
              <CopyClipboardIcon /> Copy JSON
            </Button>
          </ButtonGroup>
        </div>
      </NavigationActions>
      <Toast open={showToast} onOpenChange={setShowToast}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboardIcon /> {toastMessage}
        </ToastTitle>
      </Toast>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <ScrollArea>
              <div className={styles.sidebarContent}>
                <div className={styles.sidebarNav}>
                  <p className={styles.sidebarTitle}>Chapters</p>
                  {chapters.map((chapter) => (
                    <NavItem key={chapter.slug} chapter={chapter} />
                  ))}
                </div>
                {selectedSlokas.length === 0 && <p>Select a sloka to see details.</p>}
                {selectedSlokas.length > 0 && (
                  <div>
                    <p className={styles.sidebarTitle}>Selected Slokas</p>
                    <Collapsible.Root>
                      <Collapsible.Trigger asChild>
                        <button className={styles.summaryTrigger}>
                          {selectedSlokas.length} {selectedSlokas.length > 1 ? "Slokas" : "Sloka"} selected
                          <ChevronDownIcon />
                        </button>
                      </Collapsible.Trigger>
                      <Collapsible.Content className={styles.summaryContent}>
                        {selectedSlokas.map((sloka, index) => (
                          <div key={sloka.id + index} className={styles.summaryItem}>
                            {sloka.devanagari}
                            <button
                              className={styles.summaryItemButton}
                              onClick={() => {
                                setSelectedSlokas(selectedSlokas.filter((selected) => selected.id !== sloka.id));
                              }}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>
                    <div className={styles.summaryControls}>
                      <Button onClick={handleDownload} variant="primary">
                        Download JSON
                      </Button>
                      <Button onClick={() => setSelectedSlokas([])}>Clear selected</Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
        <div className={styles.container}>
          {isTouch !== null && (
            <SelectionArea
              className="pt-8"
              onStart={onStart}
              onMove={onMove}
              selectables=".selectable"
              features={{
                touch: isTouch ? false : true,
                range: true,
                singleTap: {
                  allow: true,
                  intersect: "native",
                },
              }}
            >
              {chapters.map((chapter) => (
                <div
                  key={chapter.slug}
                  id={chapter.slug}
                  data-section-slug={chapter.slug}
                  style={{ outline: "none" }}
                  tabIndex={-1}
                >
                  <h2 className={styles.subtitle}>
                    <StarsIcon /> {chapter.name}
                  </h2>
                  <div className={styles.slokas}>
                    {chapter.slokas.map((sloka, index) => {
                      const isSelected = selectedSlokas.some((selected) => selected.id === sloka.id);
                      return (
                        <ContextMenu.Root key={sloka.id}>
                          <ContextMenu.Trigger>
                            <div
                              className={`${styles.item} selectable group`}
                              data-selected={isSelected}
                              data-key={`${chapter.slug}-${index}`}
                              data-id={sloka.id}
                            >
                              <div className={styles.promptTemplate}>
                                <ScrollArea>
                                  <pre
                                    className={styles.template}
                                    dangerouslySetInnerHTML={{
                                      __html: sloka.devanagari
                                        .concat("\n\n")
                                        .concat(sloka.verse_text)
                                        .concat("\n\n")
                                        .concat(sloka.en_meaning)
                                        .replace(/\{[^}]+\}/g, `<span class="${styles.placeholder}">$&</span>`),
                                    }}
                                  />
                                </ScrollArea>
                              </div>
                              <div className={styles.prompt}>
                                <span className={styles.name}> {sloka.title}</span>
                                {/* {sloka.en_meaning && <span className={styles.translation}>{sloka.en_meaning}</span>} */}
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
                              <ContextMenu.Item
                                className={styles.contextMenuItem}
                                onSelect={() => handleCopyText(sloka)}
                              >
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
    </div>
  );
}

function NavItem({ chapter }: { chapter: Chapter }) {
  const activeSection = useSectionInView();
  return (
    <a
      href={`#${chapter.slug}`}
      onClick={(e) => {
        e.preventDefault();

        window.history.pushState(null, "", `${chapter.slug}`);
      }}
      className={styles.sidebarNavItem}
      data-active={activeSection === `${chapter.slug}`}
    >
      <StarsIcon />
      {chapter.name}
      <span className={styles.badge}>{chapter.slokas.length}</span>
    </a>
  );
}
