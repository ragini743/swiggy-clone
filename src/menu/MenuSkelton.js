import React from "react";
import ContentLoader from "react-content-loader";

const RestaurantMenuSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 900 800"
      height={800}
      width={900}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Menu item 1 */}
      <rect x="0" y="20" rx="4" ry="4" width="150" height="15" />
      <rect x="0" y="40" rx="4" ry="4" width="200" height="15" />
      <rect x="0" y="70" rx="8" ry="8" width="900" height="80" />

      {/* Menu item 2 */}
      <rect x="0" y="170" rx="4" ry="4" width="200" height="15" />
      <rect x="0" y="200" rx="8" ry="8" width="900" height="80" />

      {/* Menu item 3 */}
      <rect x="0" y="300" rx="4" ry="4" width="200" height="15" />
      <rect x="0" y="330" rx="8" ry="8" width="900" height="80" />

      {/* Menu item 4 */}
      <rect x="0" y="440" rx="4" ry="4" width="200" height="15" />
      <rect x="0" y="470" rx="8" ry="8" width="900" height="80" />

      <rect x="0" y="580" rx="4" ry="4" width="200" height="15" />
      <rect x="0" y="610" rx="8" ry="8" width="900" height="80" />
    </ContentLoader>
  );
};

export default RestaurantMenuSkeleton;
