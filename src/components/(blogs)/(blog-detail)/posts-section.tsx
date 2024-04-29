import { PropsWithChildren } from "react";

export default function PostsSection({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-y-14 md:pt-14 pt-6 sm:mx-12 lg:mx-24 mx-4">
      <div className="flex flex-col gap-y-4 items-start">
        <h2 className="text-4xl font-semibold text-black">Blogs</h2>
        <p className="text-gray-400 text-md">
          Read our latest blogs and stay updated with the latest trends.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 lg:gap-x-6 2xl:gap-x-10 gap-y-6">
        {children}
      </div>
    </div>
  );
}
