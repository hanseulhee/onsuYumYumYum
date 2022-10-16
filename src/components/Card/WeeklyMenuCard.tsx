import { css, Theme } from "@emotion/react";
import MenuHighlight from "components/Text/MenuHighlight";

interface Props {
  date: string;
  foods: string[];
  deliciousFood: string;
}

function WeeklyMenuCard({ date, foods, deliciousFood }: Props) {
  return (
    <article css={wrapper}>
      <div css={centerWrapper}>
        <div css={contentWrapper}>
          <div css={dateCss}>
            <span>{date}</span>
          </div>
          <div css={menuWrapper}>
            {foods.map((food, index) => (
              <span key={index} css={meunCss}>
                {food}
              </span>
            ))}
            <MenuHighlight deliciousFood={deliciousFood} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default WeeklyMenuCard;

const wrapper = css`
  position: relative;
  width: auto;
  height: auto;
  margin: 1rem 0.6rem;
`;

const centerWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const contentWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 16rem;
  padding-bottom: 3rem;
  background-color: ${theme.color.grey100};
  border-radius: 5px;
`;

const dateCss = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.white};
  background-color: #abbfa4;
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
  width: 6rem;
  height: 1.85rem;
  border-radius: 5px 0 14px 0;
`;

const meunCss = (theme: Theme) => css`
  position: relative;
  color: ${theme.color.black};
  font-weight: ${theme.fontWeight.light};
  font-size: 0.95rem;
  overflow: auto;
  margin-bottom: 0.18rem;
`;

const menuWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.8rem;
`;
