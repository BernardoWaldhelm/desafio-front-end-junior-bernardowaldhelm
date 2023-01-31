interface IiconProps {
  src: string;
  alt: string;
  className?: string;
}

export const Icone = (props: IiconProps) => {
  const { src, alt, className } = props;

  return (
    <li>
      <img src={src} alt={alt} className={className} />
    </li>
  );
};
