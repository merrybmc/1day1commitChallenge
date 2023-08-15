import React, { useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Wrapper, Container, ImgBox, ProfileBox, ProfileImg } from "./User.styled";
import useUserlist from "../hooks/useUserList";
import SearchBar from "./SearchBar";
import StyledBadge from "./StyledBadge";
import data from './data.json';


export default function User() {
  const { userList, searchUser } = useUserlist();
  const inputRef = useRef(null);

  return (
    <Container>
      <SearchBar ref={inputRef} onSearchHandler={searchUser} />
      {userList?.map((data, index) => {
        return (
          <Wrapper key={index}>
            <div>
              <StyledBadge badge={data.badge} />
              <ProfileBox>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <ImgBox>
                    <ProfileImg src={data.profileImg} alt="" />
                  </ImgBox>
                </a>
                <p style={{ padding: "0px 0px 0px 20px" }}>
                  {data.name}님의 잔디가 벌써 이만큼 자랐어요! 🌱
                </p>
              </ProfileBox>
              <GitHubCalendar username={data.id} />
            </div>
          </Wrapper>
        );
      })}
    </Container>
  );
}
