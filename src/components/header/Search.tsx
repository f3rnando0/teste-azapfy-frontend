import { SearchIcon } from 'lucide-react';

export default function Search() {
  return (
    <div className="flex flex-row lg:w-1/4 items-center">
      <div className="p-2 bg-neutral-950 border-l border-y border-neutral-700 rounded-l-lg">
        <SearchIcon className="w-6 h-6 stroke-neutral-100" />
      </div>
      <input className="w-52 sm:w-full bg-neutral-950 p-2 rounded-r-lg border border-neutral-700 outline-none" />
    </div>
  );
}
