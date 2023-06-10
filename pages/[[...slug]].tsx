import React from "react";
import NextLink from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../components/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../components/DropdownMenu";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import * as Collapsible from "@radix-ui/react-collapsible";
import { isTouchDevice } from "../utils/isTouchDevice";

import { Chapter, chapters, Sloka } from "../data/gita";

import styles from "../styles/Home.module.css";
import { Instructions } from "../components/Instructions";
import { useSectionInView } from "../utils/useSectionInViewObserver";
import {
  ChevronDownIcon,
  CopyClipboardIcon,
  DownloadIcon,
  LinkIcon,
  PlusCircleIcon,
  RaycastLogoNegIcon,
  StarsIcon,
  TrashIcon
} from "@raycast/icons";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast"
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

export function getStaticPaths() {
  const paths = chapters.map((category) => ({
    params: { slug: [category.slug.replace("/", "")] }
  }));

  return {
    paths: [
      ...paths,
      {
        params: { slug: [] }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default function Home({ onTouchReady }) {
  const router = useRouter();

  const [selectedSlokas, setSelectedSlokas] = React.useState<Sloka[]>([]);
  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(null);

  const selectedSlokasConfig = selectedSlokas;

  const extractIds = (els: Element[]) =>
    els.map((v) => v.getAttribute("data-key"));

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!isTouch && !event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedSlokas([]);
    }
  };

  const onMove = ({
                    store: {
                      changed: { added, removed }
                    }
                  }: SelectionEvent) => {
    const addedIds = extractIds(added);
    const removedIds = extractIds(removed);

    const addedSlokas = addedIds.map((id) => {
      const [slug, index] = id.split("-");
      const slokaChapter = chapters.find(
        (chapter) => chapter.slug === slug
      );
      return slokaChapter.slokas[index];
    });

    addedSlokas.forEach((sloka) => {
      setSelectedSlokas((prevSlokas) => {
        if (prevSlokas.find((c) => c.id === sloka.id)) {
          return prevSlokas;
        }
        return [...prevSlokas, sloka];
      });
    });

    const removedPrompts = removedIds.map((id) => {
      const [slug, index] = id.split("-");
      const promptCategory = chapters.find(
        (category) => category.slug === slug
      );
      return promptCategory.slokas[index];
    });

    removedPrompts.forEach((prompt) => {
      setSelectedSlokas((prevPrompts) => {
        return prevPrompts.filter((c) => c.id !== prompt.id);
      });
    });
  };

  const makeSlokasImportData = React.useCallback(() => {
    return `[${selectedSlokasConfig
      .map((selectedSloka) => {
        const { title, verse_text } = selectedSloka;

        return JSON.stringify({
          title,
          verse_text
        });
      })
      .join(",")}]`;
  }, [selectedSlokasConfig]);

  const makeQueryString = React.useCallback(() => {
    return selectedSlokasConfig
      .map((selectedPrompt) => {
        const { title, verse_text } = selectedPrompt;

        return `slokas=${encodeURIComponent(
          JSON.stringify({ title, verse_text })
        )}`;
      })
      .join("&");
  }, [selectedSlokasConfig]);

  const handleDownload = React.useCallback(() => {
    const encodedSlokasData = encodeURIComponent(makeSlokasImportData());
    const jsonString = `data:text/json;chatset=utf-8,${encodedSlokasData}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "slokas.json";
    link.click();
  }, [makeSlokasImportData]);

  const handleCopyData = React.useCallback(() => {
    copy(makeSlokasImportData());
    setCopied(true);
  }, [makeSlokasImportData]);

  const handleCopyUrl = React.useCallback(() => {
    copy(`${window.location.origin}/shared?${makeQueryString()}`);
    setCopied(true);
  }, [makeQueryString]);

  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://slokas/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
    onTouchReady();
  }, [isTouch, setIsTouch, onTouchReady]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedSlokasConfig.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedSlokasConfig.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedSlokasConfig.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedSlokasConfig.length === 0) return;
        event.preventDefault();
        handleCopyData();
        setActionsOpen(false);
      }

      if (key === "c" && metaKey && shiftKey) {
        event.preventDefault();
        handleCopyUrl();
        setActionsOpen(false);
      }

      if (key === "," && metaKey && shiftKey) {
        event.preventDefault();
        setActionsOpen(false);
        setAboutOpen(false);
      }

      if (key === "/" && metaKey) {
        event.preventDefault();
        setActionsOpen(false);
        setAboutOpen((prevOpen) => !prevOpen);
      }

      if (key === "a" && metaKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    setActionsOpen,
    setAboutOpen,
    selectedSlokasConfig,
    handleCopyData,
    handleDownload,
    handleCopyUrl,
    handleAddToRaycast
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div>
      <header className={styles.nav}>
        <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
          <DialogTrigger asChild>
            <button style={{ all: "unset" }}>
              <div className={styles.logo}>
                <div className={styles.separator} aria-hidden="true"></div>
                <h2>Gita Explorer</h2>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className={styles.about} showCloseButton={true}>
            <div className={styles.aboutTopContent}>
              <div>
                <DialogTitle className={styles.dialogTitle}>About</DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  Prompt Explorer is a tool to easily browse, share, and add
                  prompts to <a href="https://raycast.com">Raycast</a>.
                </DialogDescription>
                <p className={styles.dialogDescription}>
                  Select the prompts by clicking on them. To select multiple,
                  hold <kbd>⌘</kbd> or select them with your mouse.
                </p>
                <p className={styles.dialogDescription}>
                  Then, click the “Add to Raycast” button to import these
                  prompts as AI Commands. You can also download the prompts as a
                  JSON file, or copy the URL to share with others.
                </p>
              </div>
              {!isTouch && (
                <div>
                  <h4 className={styles.dialogTitle}>Shortcuts</h4>
                  <ul className={styles.shortcuts}>
                    <li>
                      Add to Raycast
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⏎</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle Export Menu
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>K</kbd>
                      </span>
                    </li>
                    <li>
                      Configure Hotkeys
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>,</kbd>
                      </span>
                    </li>
                    <li>
                      Download JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>D</kbd>
                      </span>
                    </li>
                    <li>
                      Copy JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⌥</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Copy URL to share
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle this view
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>/</kbd>
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <h4 className={styles.dialogTitle}>Contribute</h4>
            <p className={styles.dialogDescription}>
              This project is Open Source and{" "}
              <a
                href="https://github.com/raycast/prompt-explorer"
                title="Prompt Explorer on GitHub"
              >
                available on GitHub
              </a>
              . We welcome contributions!
              <br />
              If you have any questions or feedback, please{" "}
              <a href="mailto:feedback+rayso@raycast.com?subject=prompts">
                send us an email
              </a>
              .
            </p>

            <p style={{ fontSize: 13, marginTop: 32 }}>
              <a
                href="https://raycast.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6
                }}
              >
                Made by{" "}
                <span style={{ color: "#FF6363" }}>
                  <RaycastLogoNegIcon />{" "}
                </span>
                <span>Raycast</span>
              </a>
            </p>
            <div className={styles.aboutGlow} />
          </DialogContent>
        </Dialog>

        <div className={styles.navControls}>
          {!isTouch ? (
            <ButtonGroup>
              <Button
                variant="red"
                disabled={selectedSlokasConfig.length === 0}
                onClick={() => handleAddToRaycast()}
              >
                <PlusCircleIcon /> Add to Raycast
              </Button>

              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="red"
                    disabled={selectedSlokasConfig.length === 0}
                    aria-label="Export options"
                  >
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    disabled={selectedSlokasConfig.length === 0}
                    onSelect={() => handleDownload()}
                  >
                    <DownloadIcon /> Download JSON
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>D</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedSlokasConfig.length === 0}
                    onSelect={() => handleCopyData()}
                  >
                    <CopyClipboardIcon /> Copy JSON{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⌥</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedSlokasConfig.length === 0}
                    onSelect={() => handleCopyUrl()}
                  >
                    <LinkIcon /> Copy URL to share{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⇧</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          ) : (
            <Button
              variant="red"
              disabled={selectedSlokasConfig.length === 0}
              onClick={() => handleCopyUrl()}
            >
              <LinkIcon /> Copy URL to share
            </Button>
          )}
        </div>
      </header>

      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboardIcon /> Copied to clipboard
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

                {selectedSlokasConfig.length === 0 && <Instructions />}

                {selectedSlokasConfig.length > 0 && (
                  <div>
                    <p className={styles.sidebarTitle}>Add to Favorites</p>

                    <Collapsible.Root>
                      <Collapsible.Trigger asChild>
                        <button className={styles.summaryTrigger}>
                          {selectedSlokasConfig.length}{" "}
                          {selectedSlokasConfig.length > 1
                            ? "Slokas"
                            : "Sloka"}{" "}
                          selected
                          <ChevronDownIcon />
                        </button>
                      </Collapsible.Trigger>

                      <Collapsible.Content className={styles.summaryContent}>
                        {selectedSlokasConfig.map((sloka, index) => (
                          <div
                            key={sloka.title + index}
                            className={styles.summaryItem}
                          >
                            {sloka.title}
                            <button
                              className={styles.summaryItemButton}
                              onClick={() => {
                                setSelectedSlokas(
                                  selectedSlokas.filter(
                                    (selectedPrompt) =>
                                      selectedPrompt.id !== sloka.id
                                  )
                                );
                              }}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>

                    <div className={styles.summaryControls}>
                      <Button onClick={handleAddToRaycast} variant="red">
                        Add to Favorites
                      </Button>

                      <Button onClick={() => setSelectedSlokas([])}>
                        Clear selected
                      </Button>
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
              className="container"
              onStart={onStart}
              onMove={onMove}
              selectables=".selectable"
              features={{
                touch: !isTouch,
                range: true,
                singleTap: {
                  allow: true,
                  intersect: "native"
                }
              }}
            >
              {chapters.map((chapter) => {
                return (
                  <div
                    key={chapter.name}
                    data-section-slug={chapter.slug}
                    style={{
                      outline: "none"
                    }}
                    tabIndex={-1}
                  >
                    <h2 className={styles.subtitle}>
                       {chapter.name}
                    </h2>
                    <div className={styles.prompts}>
                      {chapter.slokas.map((sloka, index) => {
                        return (
                          <div
                            className={`${styles.item} selectable`}
                            key={sloka.id}
                            data-selected={selectedSlokas.some(
                              (selectedPrompt) =>
                                selectedPrompt.id === sloka.id
                            )}
                            data-key={`${chapter.slug}-${index}`}
                          >
                            <div className={styles.promptTemplate}>
                              <ScrollArea>
                                <pre
                                  className={styles.template}
                                  dangerouslySetInnerHTML={{
                                    __html: sloka
                                      .devanagari
                                      .concat("\n\n")
                                      .concat(sloka.verse_text).replace(
                                      /\{[^}]+\}/g,
                                      `<span class="${styles.placeholder}">$&</span>`
                                    )
                                  }}
                                ></pre>
                              </ScrollArea>
                            </div>
                            <div className={styles.sloka}>
                              <span className={styles.name}>
                                {sloka.title}
                              </span>

                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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
    <NextLink
      href={chapter.slug}
      shallow
      className={styles.sidebarNavItem}
      data-active={activeSection === chapter.slug}
    >
      <StarsIcon />

      {chapter.name}
      <span className={styles.badge}>{chapter.slokas.length}</span>
    </NextLink>
  );
}
