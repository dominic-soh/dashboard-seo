import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

export function DashboardHeader() {
  return (
    <PopoverGroup className="flex flex-row justify-end gap-8 items-center bg-stone-400 rounded-lg h-full p-8">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          Products
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/5 rounded-xl bg-stone-600 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 min-w-72"
        >
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">SEO rank tracker</p>
              <p className="text-white/50">How many top niggas today</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Keywords</p>
              <p className="text-white/50">Do you have nigga in your page</p>
            </a>
          </div>
        </PopoverPanel>
      </Popover>
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          Solutions
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/5 rounded-xl bg-stone-600 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 min-w-72"
        >
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Insights</p>
              <p className="text-white/50">Measure actions your users take</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Automations</p>
              <p className="text-white/50">Create your own targeted content</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Reports</p>
              <p className="text-white/50">Keep track of your growth</p>
            </a>
          </div>
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Documentation</p>
              <p className="text-white/50">
                Start integrating products and tools
              </p>
            </a>
          </div>
        </PopoverPanel>
      </Popover>
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          Pricing
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom end"
          className="divide-y divide-white/5 rounded-xl bg-stone-600 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 min-w-72"
        >
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Free</p>
              <p className="text-white/50">Free tier for poor niggas</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Regular</p>
              <p className="text-white/50">Real nigga</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Premium</p>
              <p className="text-white/50">Nigga Pro Max</p>
            </a>
          </div>
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Contact us</p>
              <p className="text-white/50">Deal with our niggas</p>
            </a>
          </div>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
