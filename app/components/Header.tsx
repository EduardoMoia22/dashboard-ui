import { Bell, Book, History, Star, SunMoon } from "lucide-react";

export default function Header() {
      return (
            <header className="flex justify-between px-7 py-5 border-b border-zinc-200">
                  <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-2">
                              <Book size={20} />
                              <Star size={20} />
                        </div>

                        <h4 className="text-black/60">
                              Dashboards / <span className="text-black">Default</span>
                        </h4>
                  </div>

                  <div className="flex items-center gap-5">
                        <input
                              type="text"
                              className="w-40 bg-zinc-300 rounded-lg px-2"
                              placeholder="Search"
                        />
                        <div className="flex items-center gap-2">
                              <SunMoon size={20} />
                              <History size={20} />
                              <Bell size={20} />
                              <Book size={20} />
                        </div>
                  </div>
            </header>
      );
}
