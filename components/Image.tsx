type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({ src, ...rest }) => {
  const baseUrl = "https://cdn.takeoffgo.com";

  const widths = [320, 480, 640, 768, 960, 1024, 1440];
  const srcSet = widths.map(w => `${baseUrl}/${src}?w=${w} ${w}w`).join(", ");

  return <img src={`${baseUrl}/${src}`} srcSet={srcSet} {...rest} />;
};

export default Image;
