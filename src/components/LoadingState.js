import React, { useState ,useEffect} from 'react'
// import { loadingData } from '../utils/loadingData'
import InfiniteScroll from 'react-infinite-scroll-component'
import { loadingData } from '../utils/loadingData';
import RestoLoading from './RestoLoading';

const LoadingState = ({listOfRestaurant}) => {
  
  //  const listedRestaurant =
    const [items, setItems] = useState([]);
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
        // console.log(json)
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
      // console.log("items",items)
   if(isLoading.length===0){return null}
   return (
    <div className='relative'>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
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