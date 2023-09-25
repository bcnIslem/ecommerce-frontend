import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// api
import { PATH } from "../../api";
import { getLatestProduct } from "../../api/products";
// redux
import { getLatest } from "../../redux/products";

const Latest: React.FC = () => {
  //  init hooks
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  //  get states from redux store
  const { latest } = useSelector((state: any) => state.products);
  //
  //
  // ########## get the latest product ##########
  //
  //
  const getLatestProductFromDb = async (): Promise<any> => {
    try {
      const { data } = await getLatestProduct();
      if (data) {
        dispatch(getLatest(data.products[0]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestProductFromDb();
  }, [dispatch]);

  return (
    <div className="w-full mt-4 py-2 sm:w-[90vw] md:w-[90vw] lg:w-full mx-auto xl:w-full flex sm:flex-col md:flex-col lg:flex-col items-center justify-around">
      <div className="w-[500px] sm:w-[300px] mb-4 md:w-[360px] lg:w-[450px] xl:w-[500px] xl:ml-4 rounded-md flex flex-col items-start justify-center">
        <img
          src={PATH + "uploads/product_img_" + latest?.images[0]}
          alt={latest?.images[0]}
          className="rounded-xl object-cover h-[300px] w-[500px] sm:w-[300px] sm:h-[200px] md:w-[360px] md:h-[260px] lg:w-[450px] xl:w-[500px] lg:h-[300px] xl:h-[400px] shadow-md cursor-pointer hover:scale-105"
        />
      </div>
      <div className="w-[500px] sm:w-[300px] mb-4 md:w-[360px] lg:w-[450px] xl:w-[500px] xl:ml-4 rounded-md flex flex-col items-start justify-center">
        <h1 className="font-bold text-3xl mb-4">New Products</h1>
        <p>
          From dog bowls to fanny packs, our latest drops will help you rep
          GitHub in style, whether you’re at work, traveling, or walking your
          pup.
        </p>
        <button
          // onClick={() => navigate("/new-products")}
          className="bg-white text-black font-bold border border-black rounded-md shadow-md cursor-pointer hover:text-white hover:bg-[#222222] hover:scale-110 py-2 px-4 mt-4"
        >
          Shop the latest
        </button>
      </div>
    </div>
  );
};

export default Latest;
