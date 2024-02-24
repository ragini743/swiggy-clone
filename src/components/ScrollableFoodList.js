import React from 'react' ;


import ScrollableFood from './ScrollableFood';

const ScrollableFoodList = ({scrollFood}) => {
 
if(scrollFood.length===0){return }
  return (
    <div>
      
        <div className="flex mt-6   items-center  flex-row overflow-x-auto w-[100%]">
        {scrollFood.map((data) => (
          <ScrollableFood key={data.id} data={data} />
        ))}
      </div>
        

    </div>
  )
}

export default ScrollableFoodList