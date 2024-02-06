import React, { useState ,useEffect} from 'react'
// import { loadingData } from '../utils/loadingData'
import InfiniteScroll from 'react-infinite-scroll-component'
import { loadingData } from '../utils/loadingData';
import RestoLoading from './RestoLoading';

const LoadingState = ({items ,setItems}) => {
 console.log("items" ,items)
    // const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
      
        try {
        //   const response = await fetch(`https://api.example.com/items?page=${page}`);
        //   const data = await response.json();
          const pr = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(loadingData);
            }, 1000);
          });
        const json = await pr
       
        const data =json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
        
          setItems(prevItems => [...prevItems, ...data]);
          setPage(prevPage => prevPage + 1);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
      
   if(isLoading.length===0){return null}
   return (
    <div className='overflow-x-hidden'>
           <hr className='shadow-lg'></hr>
        <h1 className='text-sm pt-4 font-bold md:text-lg'>Restaurants with online food delivery in  prayagraj </h1>
        <div className='flex flex-wrap justify-evenly items-center text-xs  md:text-sm'>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Fast Delivery </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'> New on swiggy </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Rating 4.0+ </div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Pure veg</div>
          <div className='rounded-lg py-1 px-2 border-2 border-gray-200 mt-4'>Offer</div>
        </div>



      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
        className='overflow-x-hidden'
      >
        <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-10 grid-flow-row-dense relative '>
          {items.map(item => (
           <RestoLoading key={item.info.id} item={item}/>
          ))}
       </div>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default LoadingState