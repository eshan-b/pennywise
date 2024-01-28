// NextJS Image
import Image from "next/image";

// NextUI
import { Button, Link } from "@nextui-org/react";

// 404 Image
import PageNotFoundImage from "@/assets/404.svg";

// Icons
import { FaArrowLeft } from "react-icons/fa";

const Custom404 = () => {
  return (
    <>
      <div className="my-8 flex flex-row justify-center">
        <Image
          src={PageNotFoundImage}
          alt={"Page not found"}
          width={300}
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-2 mx-16 mb-4 justify-center">
        <div className="text-grey text-center">Looks like Pennywise</div>
        <div className="text-grey text-center">floated away with this page</div>
      </div>
      <div className="my-8 flex flex-row justify-center">
        <Button
          href="/"
          as={Link}
          color="danger"
          variant="bordered"
          startContent={<FaArrowLeft />}
          className="hover:bg-[#FA4E79] hover:bg-opacity-10"
        >
          Go back home
        </Button>
      </div>
    </>
  );
};

export default Custom404;
