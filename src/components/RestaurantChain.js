
import TopRestaurant from "./TopRestaurant";
import { Link } from "react-router-dom";
import { Loader } from "./LoaderSkelton";
import useRestaurantCrousel1 from "../utils/useRestaurantCrousel1";

const RestaurantChain = () => {
  const [, topRestaurant] = useRestaurantCrousel1();



  if (topRestaurant.length === 0) {
    return <Loader />;
  }
  const { title } = topRestaurant.card.card.header;
  const data = topRestaurant.card.card.gridElements.infoWithStyle.restaurants;

  return (
    <div className="mt-10 md:mt-14">
      <hr className="shadow-lg mb-6 sm:mb-10"></hr>
      <h1 className="font-bold md:text-2xl mb-6 sm:mb-10">{title}</h1>
      <div className="overflow-x-auto  w-[100%] flex items-center ">
        {data.map((resInfo) => {
          return (
            <Link
              to={`/restaurant/${encodeURIComponent(resInfo.info.name)}-/${
                resInfo.info.id
              }`}
              key={resInfo.info.id}
              className="mr-[5%]"
            >
             
              <TopRestaurant resInfo={resInfo} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantChain;
