import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export function DashboardMain() {
  const categories = [
    {
      name: "Recent",
      content: "Recent Nigga",
    },
    {
      name: "Popular",
      content: "Popular Nigga",
    },
    {
      name: "Trending",
      content: "Trending Nigga",
    },
  ];
  return (
    <div className="flex flex-col gap-2 bg-stone-500 rounded-lg h-full p-8">
      <TabGroup>
        <TabList className="flex gap-4">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="flex mt-3">
          {categories.map(({ name, content }) => (
            <TabPanel
              key={name}
              className="rounded-xl bg-white/5 p-3 grow h-full"
            >
              <div className="flex">{content}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
