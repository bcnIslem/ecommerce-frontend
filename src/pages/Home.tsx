import React from "react";
// components
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
import Welcome from "../components/home/welcome";
import Latest from "../components/home/latest";
import TopCategories from "../components/home/topCategories";
import Categories from "../components/home/categoreis";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* welcome */}
      {/* featured product */}
      <Welcome />
      <div className="w-full sm:w-full md:w-full lg:w-[90vw] xl:w-[96vw] flex flex-col items-center justify-around mx-auto">
        {/* new arrivals 'latest' */}
        <Latest />
        {/* top categories */}
        <TopCategories />
        {/* categories */}
        <Categories />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
