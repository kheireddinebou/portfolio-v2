import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <ul className="flex items-center gap-6 mt-6 lg:mt-0">
      <li className="text-[1.7rem] hover:text-slate-200">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kheiereddin-boukhatem-801425240"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="text-[1.7rem] hover:text-slate-200">
        <a target="_blank" href="https://github.com/khiereddinbou">
          <FaGithub />
        </a>
      </li>
      <li className="text-[1.7rem] hover:text-slate-200">
        <a target="_blank" href="https://www.facebook.com/kheier.eddin">
          <FaFacebook />
        </a>
      </li>
      <li className="text-[1.7rem] hover:text-slate-200">
        <a
          target="_blank"
          href="https://www.instagram.com/kheiereddinboukhatem/"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
