import { DiscussionEmbed } from "disqus-react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const DisqusComments = (post) => {
  const router = useRouter();
  const { slug } = router.query;
  const disqusShortname = "onsuYumYumYum";

  const disqusConfig = {
    url: `https://www.onsuyum.com/Review/${slug}`,
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
    margin-bottom: -2.7rem;
  }
`;
