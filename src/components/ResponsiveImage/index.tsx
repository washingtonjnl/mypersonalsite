import useWindowSize from '../../hooks/useWindowDimensions';

import { Image } from './styles';

interface ResponsiveImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

function ResponsiveImage({ desktopSrc, mobileSrc, alt }: ResponsiveImageProps) {
  const screenWidth = useWindowSize().width;

  switch (screenWidth > 812) {
    case true:
      return <Image src={desktopSrc} alt={alt} />;
    case false:
      return <Image src={mobileSrc} alt={alt} />;
  }
}

export default ResponsiveImage;
