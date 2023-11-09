import { BookOpen, Folder, PieChart, ShoppingBag } from "lucide-react";

export default function Navbar() {
      return (
            <aside className="w-60 h-full border-r border-zinc-200 px-4 py-5">
                  <div className="flex flex-col  justify-center text-sm w-full">
                        <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-zinc-400 rounded-full" />
                              <span>Eduardo Moia</span>
                        </div>

                        <div className="mt-4">
                              <nav className="px-2">
                                    <div className="flex items-center gap-4">
                                          <span className="text-black/50">
                                                Favorites
                                          </span>
                                          <span className=" text-black/40">
                                                Recently
                                          </span>
                                    </div>
                                    <ul className="flex flex-col gap-3 mt-3">
                                          <li className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                                                Overview
                                          </li>
                                          <li className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                                                Projects
                                          </li>
                                    </ul>
                              </nav>

                              <nav className="mt-4">
                                    <div className="py-1 px-3">
                                          <span className="text-black/60">
                                                Dashboards
                                          </span>
                                    </div>
                                    <ul className="flex flex-col gap-3 mt-3">
                                          <li className="flex items-center gap-6 bg-zinc-200 rounded-lg">
                                                <div className="bg-black w-1 h-4 rounded-full" />
                                                <div className="flex items-center gap-2">
                                                      <PieChart size={20} />
                                                      Default
                                                </div>
                                          </li>
                                          <li className="flex items-center gap-6 rounded-lg">
                                                <div className="bg-black w-1 h-4 rounded-full invisible" />
                                                <div className="flex items-center gap-2">
                                                      <ShoppingBag size={20} />
                                                      eCommerce
                                                </div>
                                          </li>
                                          <li className="flex items-center gap-6 rounded-lg">
                                                <div className="bg-black w-1 h-4 rounded-full invisible" />
                                                <div className="flex items-center gap-2">
                                                      <Folder size={20} />
                                                      Projects
                                                </div>
                                          </li>
                                          <li className="flex items-center gap-6 rounded-lg">
                                                <div className="bg-black w-1 h-4 rounded-full invisible" />
                                                <div className="flex items-center gap-2">
                                                      <BookOpen size={20} />
                                                      Online Courses
                                                </div>
                                          </li>
                                    </ul>
                              </nav>
                        </div>
                  </div>
            </aside>
      );
}
