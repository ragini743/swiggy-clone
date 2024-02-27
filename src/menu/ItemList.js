
const mediaAssets =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  const forCloseRestaurant ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/"

const ItemList = ({ itemCards }) => {
 
  return (
    <div className="my-4">
      {itemCards.map((item) => {
        const { id, name, description, isVeg, imageId } = item.card.info;
        console.log("isveg",isVeg===1)
       
        return (
       
          (
            <div key={id} className="mb-10">
              <div className=" flex justify-between mb-8">
                <div className="w-[80%] ">
                   
                    <div className="w-4">

                      <img src={isVeg===1?"/pureVeg-logo.png":"/nonVeg-logo.png"} alt="" className="w-full h-full object-contain"></img>
                    </div>
                  

                  <div className="font-bold text-gray-700">{name}</div>
                  <div className=" text-gray-700">
                    <span className="mr-1 ">&#8377;</span>
                    {(item.card.info.price||item.card.info.defaultPrice)/100}
                  </div>
                  <div>{description}</div>
                </div>
                <div className="w-[15%] rounded-lg h-[100px] relative ">
                  <div className="h-[100%] w-[100%]">
                  <img
                    src={mediaAssets + imageId}
                    alt=""
                    className="w-[100%] h-[100%] object-cover  rounded-lg"
                  ></img>
                  </div>
                 
                  <div className="absolute -bottom-4 bg-white text-green-600 
                  right-0 left-0 w-[80%] mx-auto py-2 border-gray-300 border-[1px]">
                    <button className="font-bold text-gray-700a text-center  w-[100%]">
                      ADD
                      
                    </button>
                    <span className="absolute right-0 -top-2">+</span>
                  </div>
                </div>
              </div>
              <hr className="border-gray-400"></hr>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ItemList;

// const chicago = ""

