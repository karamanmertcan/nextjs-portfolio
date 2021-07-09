import React from 'react';
import { SOCIAL_MEDIA } from '../config/SOCIAL_MEDIA';
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  InstapaperIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

export default function SocialShare() {
  const { instagram, facebook, twitter, whatsapp } = SOCIAL_MEDIA;

  return (
    <>
      <FacebookShareButton url={facebook}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <InstapaperShareButton url={instagram}>
        <InstapaperIcon size={32} round={true} />
      </InstapaperShareButton>
      <TwitterShareButton url={twitter}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={whatsapp}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </>
  );
}
