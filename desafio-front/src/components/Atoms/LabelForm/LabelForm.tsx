interface ILabelProps {
  className: string;
  htmlFor: string;
  text: string;
}

export const LabelForm = (props: ILabelProps) => {
  const { className, htmlFor, text } = props;

  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};
