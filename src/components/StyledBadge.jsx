import { Badge, BadgeContainer, Crown } from "./Badge.styled";

export default function StyledBadge({ badge }) {
  const badgeList = badge?.map((item) => (
    <>
      <Badge>
        {item.clear && <Crown>👑</Crown>}
        <span>{item.name}</span>
      </Badge>
    </>
  ));
  return <BadgeContainer>{badgeList}</BadgeContainer>;
}
