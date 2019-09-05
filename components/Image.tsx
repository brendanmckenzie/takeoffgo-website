type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const baseUrl = "https://res.cloudinary.com/takeoffgo/image/upload";

  const widths = [320, 480, 640, 768, 960, 1024, 1440];
  const srcSet = widths
    .map(w => `${baseUrl}/w_${w}/v1567649992${src} ${w}w`)
    .join(", ");

  return <img src={`${baseUrl}/v1567649992${src}`} srcSet={srcSet} alt={alt} />;
};

export default Image;
