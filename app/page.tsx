import { Hero, CustomFilter, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars()
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars)



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

        {!isDataEmpty ? 
        (
          <section>
            <div className="home__cars-wrapper" >
              {allCars?.map((item) =>
                  <CarCard />
                  )}
            </div>
          </section>
        )
        :
        (<h2>No cards here brda</h2>)}

      </div>
    </main>
  );
}
