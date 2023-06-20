import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  path: string;
  category: string;
}

function TopCategory({ path, category }: Props) {
  const router = useRouter();

  const click = {
    color: router.asPath === path ? "#000000" : "#888888",
    fontSize: "0.94rem",
    fontWeight: router.asPath === path ? "700" : "500",
  };

  return (
    <Link href={path}>
      <a css={click}>
        <div css={navItem}> {category}</div>
      </a>
    </Link>
  );
}

export default TopCategory;

const navItem = css`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0rem 0.7rem;
  cursor: pointer;
`;
