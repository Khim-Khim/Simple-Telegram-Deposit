type TPropsInfoSection = {
  label: string;
  value: string;
};

export default function InfoSection({ label, value }: TPropsInfoSection) {
  return (
    <div className="w-full bg-white flex-col lg:flex-row flex items-center justify-between py-3 px-4 rounded-md mb-5">
      <p className="text-sm lg:text-base font-bold lg:mr-4">{label} :</p>
      <p className="text-sm lg:text-base font-bold text-gray-500 truncate text-ellipsis overflow-hidden w-full text-center lg:text-right lg:w-auto">
        {value}
      </p>
    </div>
  );
}
