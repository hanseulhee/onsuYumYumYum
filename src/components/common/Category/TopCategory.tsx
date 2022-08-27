import { css, Theme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    }

    return (
        <Link href={path}>
            <a css={click}>{category}</a>
        </Link>
    );
}

export default TopCategory;