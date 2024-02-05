import { Hero, CustomFilter, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x pading-y max-width" id="discover">
        <div className="home__text-container" ></div>
          <h1 className="text-4xl font-extra bold text-center">Car catalogue</h1>
          <p className="text-center text-gray-500 mt-8">Find your car</p>
      </div>
      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter  />
          <CustomFilter />
        </div>
      </div>
    </main>
  );
}
