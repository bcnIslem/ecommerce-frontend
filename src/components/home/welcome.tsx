import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// assets
import WELCOME from "../../assets/bg-welcome.jpg";
// api
import { PATH } from "../../api";
import { getFeaturedProduct } from "../../api/featured";
// redux
import { getFeatured } from "../../redux/featured";

const Welcome: React.FC = () => {
  //  init hooks
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  //  get states from redux store
  const { featured } = useSelector((state: any) => state.featured);
  //
  //
  // ########## get featured product ##########
  //
  //
  const getFeaturedProductFromDb = async (): Promise<any> => {
    try {
      const { data } = await getFeaturedProduct();
      if (data) {
        dispatch(getFeatured(data.featured[0]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeaturedProductFromDb();
  }, [dispatch]);

  return (
    <div
      className="w-full h-[70vh] sm:h-[90vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh] flex items-center justify-center mb-4"
      style={{
        background: `url(${WELCOME})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-[90vw] px-2 sm:flex-col md:flex-col lg:flex-col xl:flex xl:w-[100vw] items-center justify-around">
        <div className="w-[30%] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-2/5 ">
          <h1 className="font-bold text-6xl mb-4 sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl">
            The BCN Shop
          </h1>
          <p>
            Looking for a new laptop sticker, super-cozy hoodie, or an art book
            featuring everyone’s favorite Octocat? Welcome to the GitHub Shop,
            where you can find high-quality, sustainable gifts for yourself, a
            friend, or even your pet.
          </p>
          <button className="bg-[#222222] rounded-md shadow-md font-bold cursor-pointer hover:bg-white hover:text-black border border-black hover:scale-110 text-white py-2 px-4 my-4">
            Get Shopping
          </button>
        </div>
        <div className="w-[500px] sm:w-[100%] sm:h-[400px] mx-auto md:w-[90%] md:h-[400px] lg:w-[80%] lg:h-[450px] xl:w-[600px] rounded-md flex flex-col items-center justify-center">
          <img
            src={PATH + "uploads/product_img_" + featured?.images[0]}
            alt={featured?.images[0]}
            className="rounded-xl object-cover h-[500px] w-[500px] sm:w-full sm:h-full md:w-full md:h-full lg:w-full xl:w-[600px] lg:h-full xl:h-[400px] shadow-md cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
