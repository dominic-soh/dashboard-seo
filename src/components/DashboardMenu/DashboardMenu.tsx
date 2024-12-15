import { prefix } from "@/constants/prefix";
import { Button } from "@headlessui/react";
import Image from "next/image";

export function DashboardMenu() {
  return (
    <div className="flex flex-col gap-2 bg-stone-700 rounded-lg h-full p-4">
      <div className="relative aspect-video">
        <Image
          alt="some nigga"
          src={`${prefix}/logo.png`}
          fill
          className="object-cover"
        />
      </div>
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        Home nigga
      </Button>
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        nigga
      </Button>
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        nigga
      </Button>
    </div>
  );
}
