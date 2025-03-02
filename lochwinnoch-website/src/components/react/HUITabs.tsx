import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState, useEffect } from "react";

function HUITabs(props: any) {
  const content = props.content;
  const active = props.active;
  const [selectedIndex, setSelectedIndex] = useState(active);

  const updateURLParameter = (index: string) => {
    const url: URL = new URL(window.location);
    url.searchParams.set("tab", index);
    window.history.pushState({}, "", url);
  };

  // Handle tab change
  const handleTabChange = (index: string) => {
    setSelectedIndex(index);
    updateURLParameter(index);
  };

  // Sync state with prop changes
  useEffect(() => {
    setSelectedIndex(active);
  }, [active]);
  return (
    <>
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={handleTabChange}
        vertical
        className="flex h-full w-full flex-col gap-2 bg-main text-main md:flex-row md:gap-8"
      >
        <TabList
          className="flex w-full items-end overflow-x-scroll px-1 py-4 font-sans md:w-max md:-translate-x-16 md:flex-col md:gap-8 md:overflow-x-visible md:px-0 md:py-0"
          aria-describedby="tablist-hint"
        >
          {content.length > 0 &&
            content.map((item: any, index: number) => (
              <Tab
                key={`tab-${index}`}
                className="pt-none relative w-32 whitespace-nowrap rounded-t-md border-none px-2 py-2 text-end font-thin outline-none data-[selected]:bg-muted data-[selected]:font-extrabold data-[hover]:underline data-[hover]:decoration-dashed data-[hover]:underline-offset-4 md:w-full md:rounded-l-md md:px-8 md:pt-4"
              >
                {item.title}
              </Tab>
            ))}
        </TabList>
        <TabPanels>
          {content.length > 0 &&
            content.map((item: any, index: number) => (
              <TabPanel
                className="animate-fade-in-left prose prose-txtcolors max-w-none pt-8 sm:prose-lg md:pt-0"
                key={`tab-panel-${index}`}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            ))}
        </TabPanels>
      </TabGroup>
      <div id="tablist-hint" className="sr-only">
        You are focused on the list of tabs displaying sections of "About" page Tab will focus away into the page. Use the up and down arrow keys to switch
        between tabs.
      </div>
    </>
  );
}

export { HUITabs };
