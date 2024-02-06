import { authUserSession } from "@/libs/auth_libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5>Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} className="py-4" />
      <div className="flex flex-wrap gap-4 py-4">
        <Link className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl" href="/users/dashboard/collection">
          My Collection
        </Link>
        <Link className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl" href="/users/dashboard/comment">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
