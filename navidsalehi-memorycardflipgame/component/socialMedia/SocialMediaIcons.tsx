import { socialMediaIcon } from "@/lib/data";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-5 text-3xl">
      {socialMediaIcon.map((item) => (
        <div key={item.id}>
          <SocialMediaIcon socialMediaItem={item} />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
