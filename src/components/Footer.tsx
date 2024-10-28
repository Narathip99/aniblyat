import Link from "next/link";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="border-t-2 w-full overflow-x-hidden">
      <div className="py-8 md:py-16 backdrop-blur-lg bg-opacity-80">
        <div className="container px-4 md:px-0 mx-auto flex justify-between">
          <h1 className="text-3xl font-bold">Aniblyat</h1>
          <div className="flex gap-4 items-center">
            <Link href="https://www.instagram.com/naay99999/">
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/narathip-tk/">
              <LinkedInLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="container px-4 md:px-0 mx-auto flex justify-start md:justify-end text-sm">
          <p>Made with ❤️ by Narathip</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
