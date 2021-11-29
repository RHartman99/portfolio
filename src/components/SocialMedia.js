import React from "react";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const List = tw.ul`flex items-center justify-center -mx-2`;

const Item = tw.li`text-3xl px-2 text-white hover:text-primary transition-colors duration-500 ease-in-out`;

const SocialMedia = ({ media, ...rest }) => {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
  };
  console.log(media);
  return (
    <List {...rest}>
      {media &&
        media.map(
          ({ icon, url }, i) =>
            icon in icons && (
              <Item>
                <a href={url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icons[icon]} />
                </a>
              </Item>
            )
        )}
    </List>
  );
};

export default SocialMedia;
