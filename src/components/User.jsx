import React, { useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, ImgBox, ProfileBox, ProfileImg } from "./User.styled";
import useUserlist from "../hooks/useUserList";
import SearchBar from "./SearchBar";

export default function User() {
  const { userList, searchUser } = useUserlist();
  const inputRef = useRef(null);

  return (
    <div style={{ marginTop: "210px" }}>
      <SearchBar ref={inputRef} onSearchHandler={searchUser} />
      {userList?.map((data, index) => {
        return (
          <Container key={index}>
            <div>
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
          </Container>
        );
      })}
    </div>
  );
}
