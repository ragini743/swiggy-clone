import React, { useState ,useEffect} from 'react'
// import { loadingData } from '../utils/loadingData'
import InfiniteScroll from 'react-infinite-scroll-component'

const LoadingState = () => {
   
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
      
        try {
          const response = await fetch(`https://api.example.com/items?page=${page}`);
          const data = await response.json();
      
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
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default LoadingState