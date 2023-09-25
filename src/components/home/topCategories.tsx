import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// api
import { PATH } from "../../api";
import { getAllCategories } from "../../api/categories";
// redux
import { getCategories } from "../../redux/categories";

const TopCategories: React.FC = () => {
  //  init hooks
  const dispatch = useDispatch();

  //  get states from redux store
  const { categories } = useSelector((state: any) => state.categories);
  //
  //
  // ########## get featured product ##########
  //
  //
  const getLatestProductFromDb = async (): Promise<any> => {
    try {
      const { data } = await getAllCategories();
      if (data) {
        dispatch(getCategories(data.categories));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestProductFromDb();
  }, [dispatch]);

  return (
    <div className="w-full mt-4 py-2 sm:w-[90vw] md:w-[90vw] lg:w-full mx-auto xl:w-full flex flex-wrap sm:flex-col md:flex-col lg:flex-col items-center justify-around">
      {!categories?.length ? (
        <h1>Loading...</h1>
      ) : (
        categories.slice(0, 2).map((category: any) => (
          <Link
            to={`/category/${category.category_id}`}
            className="text-[black] no-underline"
          >
            <div className="w-[500px] sm:w-[300px] mb-4 md:w-[360px] lg:w-[450px] xl:w-[500px] rounded-md flex flex-col items-start justify-center">
              <img
                src={PATH + "uploads/category_img_" + category.image}
                alt={category.image}
                className="rounded-xl object-cover h-[300px] w-[500px] sm:w-[300px] sm:h-[200px] md:w-[360px] md:h-[260px] lg:w-[450px] xl:w-[500px] lg:h-[300px] xl:h-[400px] shadow-md cursor-pointer hover:scale-105"
              />
              <h1 className="font-bold text-3xl my-2">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h1>
              <p>{category.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default TopCategories;
