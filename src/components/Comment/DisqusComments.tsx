import { DiscussionEmbed } from "disqus-react";
import { css } from "@emotion/react";

const DisqusComments = (post) => {
  const disqusShortname = "onsuYumYumYum";

  const disqusConfig = {
    url: `https://localhost:3000/Review/${post.slug}`,
    identifier: post.id,
    title: post.title,
  };

  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={disqusConfig}
      css={footer}
    />
  );
};

export default DisqusComments;

const footer = css`
  overflow: hidden;
  iframe {
    margin-bottom: -4rem;
  }
`;
