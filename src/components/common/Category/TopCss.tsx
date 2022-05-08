import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  path: string;
  category: string;
}

function TopCss({ path, category }: Props) {
  const router = useRouter();
  const clickCss = {
    color: router.asPath === path ? "#000000" : "#8b95a1",
    fontSize: "0.94rem",
    fontWeight: router.asPath === path ? "700" : "500",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <Link href={path} onClick={handleClick}>
      <a css={clickCss}>{category}</a>
    </Link>
  );
}

export default TopCss;