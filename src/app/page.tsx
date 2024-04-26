import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-y-6 flex-col ">
        <Image
          src="/images/avatar.jpeg"
          alt="Picture of the author"
          width={140}
          height={140}
          radius="full"
        />
        <div className="flex flex-col gap-y-2 justify-center max-w-xl text-sm">
          <h1 className="text-3xl font-semibold">Ali Osman Delişmen</h1>
          <p>
            Hello, I'm Ali Osman Delismen, residing in Istanbul. I embarked on
            my software development journey in 2019. Over the past 3 years, I've
            focused on coding open-source projects to refine my frontend skills.
            Additionally, I'm enthusiastic about DevOps, continuously honing my
            expertise during my free time.
          </p>
        </div>
      </div>
    </div>
  );
}
