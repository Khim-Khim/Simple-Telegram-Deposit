type TPropsHeader = {
  title: string;
  subTitle: string;
  customClass?: string;
};

export default function Header({ title, subTitle, customClass }: TPropsHeader) {
  return (
    <div className={`${customClass}`}>
      <h3 className="font-extrabold text-lg lg:text-2xl">{title}</h3>
      <p
        className="mt-2 text-xs lg:text-sm"
        dangerouslySetInnerHTML={{ __html: subTitle }}
      />
    </div>
  );
}
