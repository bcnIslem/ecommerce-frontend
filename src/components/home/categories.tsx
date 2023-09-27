import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// api
import { PATH } from "../../api";
// assets
import BGCATEGORY from "../../assets/bg-category.jpg";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";

const Categories: React.FC = () => {
  //  get states from redux store
  const { categories } = useSelector((state: any) => state.categories);
  return (
    <>
      <div
        style={{
          background: `url(${BGCATEGORY})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full pt-4 sm:w-full md:w-full lg:w-full mx-auto xl:w-full flex flex-wrap sm:flex-col md:flex-col lg:flex-col items-center justify-center rounded-md shadow-md mb-4"
      >
        {!categories?.length ? (
          <h1>Loading...</h1>
        ) : (
          categories.slice(2).map((category: any) => (
            <Link
              to={`/category/${category.category_id}`}
              className="text-[black] no-underline"
            >
              <div className="w-[400px] bg-white p-4 sm:w-[300px] mb-4 mx-2 md:w-[360px] lg:w-[450px] xl:w-[500px] rounded-xl flex flex-col items-start justify-center">
                <img
                  src={PATH + "uploads/category_img_" + category.image}
                  alt={category.image}
                  className="rounded-xl object-cover h-[300px] w-[400px] sm:w-[300px] sm:h-[200px] md:w-[360px] md:h-[260px] lg:w-[450px] xl:w-[500px] lg:h-[300px] xl:h-[400px] shadow-md cursor-pointer hover:scale-105"
                />
                <div className="flex items-center">
                  <h1 className="font-bold text-3xl my-2">
                    {category.name.charAt(0).toUpperCase() +
                      category.name.slice(1)}
                  </h1>
                  <MdKeyboardArrowRight size="35" className="mt-1" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Categories;
