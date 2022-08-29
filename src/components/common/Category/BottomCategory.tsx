import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  path: string;
  category: string;
  icon: ReactNode;
}

function BottomCategory({ path, category, icon }: Props) {
  const router = useRouter();
  const click = {
    color: router.asPath === path ? "#000000" : "#888888",
    fontWeight: router.asPath === path ? "700" : "500",
  };
  return (
    <Link href={path}>
      <a css={click}>
        <div css={wrapper}>
          {icon}
          <span>{category}</span>
        </div>
      </a>
    </Link>
  );
}

export default BottomCategory;

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.94rem;
  min-width: 3.125rem;
`;
