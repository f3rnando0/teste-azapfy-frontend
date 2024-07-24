import Search from '../header/Search';

export default function Header() {
  return (
    <div className="w-full p-4 sm:p-6 md:p-10 bg-neutral-900 border-b border-neutral-700 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-neutral-300 text-pretty text-center sm:text-lg md:text-xl lg:text-2xl font-semibold">
            hero.hub
          </span>
        </div>
        <Search />
      </div>
    </div>
  );
}
