import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

const GalleryItemLoader = () => {
  return (
    <ContentLoader
      speed={0.2}
      width={476}
      height={180}
      backgroundColor="#1A1919"
      foregroundColor="#8B8484">
      <Rect x="10" y="0" rx="3" ry="3" width="160" height="25" />
      <Rect x="10" y="30" rx="3" ry="3" width="100" height="150" />
      <Rect x="115" y="30" rx="3" ry="3" width="100" height="150" />
      <Rect x="220" y="30" rx="3" ry="3" width="100" height="150" />
      <Rect x="325" y="30" rx="3" ry="3" width="100" height="150" />
    </ContentLoader>
  );
};

export default GalleryItemLoader;
