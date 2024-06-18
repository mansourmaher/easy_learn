import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-[140px]">
      <Image
        src="/logooftheapplication.png"
        alt="logo"
        width={10}
        height={10}
        layout="responsive"
        loading="lazy"
        className="rounded-full"
      />
    </div>
  );
};
