import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div
      className="flex justify-center lg:justify-start gap-4"
    >
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/veronika-pomyateeva/"
        target="_blank" 
        rel="noreferrer"
      >
        <AiFillLinkedin size={44} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/veronika-pomy"
        target="_blank" 
        rel="noreferrer"
      >
        <AiFillGithub size={44} />
      </a>
      
    </div>
  );
};

export default SocialIcons;