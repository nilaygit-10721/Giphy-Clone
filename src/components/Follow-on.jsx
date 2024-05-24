import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.instagram.com/__nilaypatel__">
          <FaInstagram size={20} />
        </a>
        <a href="https://github.com/nilay10721">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
