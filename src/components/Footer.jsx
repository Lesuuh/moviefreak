import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-full text-white max-w-[1500px] py-10 mx-auto px-5 lg:px-36">
      <h1 className="text-red font-bold text-xl">MovieFreak</h1>
      <div className="w-full flex flex-col gap-10 md:flex-row text-white">
        <p>
          The rights to films belong to their respective creators. All films are
          presented solely for informational purposes. Copyrighted materials
          posted by users are not endorsed! Any film is taken down based on the
          request of the copyright owner.
        </p>

        <ul>
          <li className="cursor-pointer">Discover</li>
          <li className="cursor-pointer">Series</li>
        </ul>

        <ul className="flex flex-col md:flex-row gap-5">
          <li>
            <FaXTwitter />
            Twitter
          </li>
          <li>
            <FaLinkedin />
            LinkedIn
          </li>
          <li>
            <FaYoutube />
            Youtube
          </li>
        </ul>
      </div>
    </div>
  );
};
