import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RightAside from "./components/RightAside";

export default function Home() {
      return (
            <div className="h-screen flex">
                  <Navbar />

                  <main className="flex-1 flex flex-col">
                        <Header />

                        <div className="p-7">
                              <strong>Today</strong>

                              <div className="grid grid-cols-2 lg:grid-cols-6 gap-7 mt-4">
                                    <Card
                                          data="721K"
                                          title="Views"
                                          percentage={11.01}
                                          color="green"
                                    />
                                    <Card
                                          data="367K"
                                          title="Visits"
                                          percentage={0.03}
                                          color="blue"
                                    />
                                    <Card
                                          data="1,156"
                                          title="New Users"
                                          percentage={15.03}
                                          color="green"
                                    />
                                    <Card
                                          data="239K"
                                          title="Active Users"
                                          percentage={6.08}
                                          color="blue"
                                    />
                                    <Card
                                          data="239K"
                                          title="Active Users"
                                          percentage={6.08}
                                          color="green"
                                    />
                                    <Card
                                          data="239K"
                                          title="Active Users"
                                          percentage={6.08}
                                          color="blue"
                                    />
                              </div>
                        </div>
                  </main>

                  <RightAside />
            </div>
      );
}
