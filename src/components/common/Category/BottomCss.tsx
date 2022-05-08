import { css, Theme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReviewsIcon from "@mui/icons-material/Reviews";

interface Props {
  path: string;
  category: string;
  num: number;
}

function Icon({ object }) {
  return <>{object.icon}</>;
}

function BottomCss({ path, category, num }: Props) {
  const array = [
    { icon: <HomeIcon /> },
    { icon: <MapIcon /> },
    { icon: <NotificationsActiveIcon /> },
    { icon: <AccountCircleIcon /> },
    { icon: <ReviewsIcon /> },
  ];
  const router = useRouter();

  const clickCss = {
    color: router.asPath === path ? "#000000" : "#8b95a1",
    fontWeight: router.asPath === path ? "700" : "500",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <Link href={path} onClick={handleClick}>
      <a css={clickCss}>
        <div css={wrapper}>
          <Icon object={array[num]} />
          <span>{category}</span>
        </div>
      </a>
    </Link>
  );
}

export default BottomCss;

const wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.94rem;
  min-width: 3.125rem;
`;