import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, ProfileBox, ProfileImg } from "./User.styled";

export default function User() {
  const [userList] = useState([
    {
      name: "조병민",
      profileImg: "https://avatars.githubusercontent.com/u/65064563?v=4",
      id: "merrybmc",
      link: "https://github.com/merrybmc",
    },
    {
      name: "박태준",
      profileImg: "https://avatars.githubusercontent.com/u/126474575?v=4",
      id: "GedFlow",
      link: "https://github.com/GedFlow",
    },
    {
      name: "오규영",
      profileImg: "https://avatars.githubusercontent.com/u/87490781?v=4",
      id: "oqoqoh",
      link: "https://github.com/oqoqoh",
    },
    {
      name: "서주예",
      profileImg: "https://avatars.githubusercontent.com/u/94788360?v=4",
      id: "samweol",
      link: "https://github.com/samweol",
    },
    {
      name: "김하영",
      profileImg: "https://avatars.githubusercontent.com/u/97607752?v=4",
      id: "hangnik",
      link: "https://www.github.com/hangnik",
    },
    {
      name: "우준하",
      profileImg: "https://avatars.githubusercontent.com/u/54842493?v=4",
      id: "wooluck210",
      link: "https://github.com/wooluck210",
    },
  ]);

  console.log(userList.map((data) => console.log(data)));

  return (
    <div style={{ marginTop: "210px" }}>
      {userList?.map((data, index) => {
        return (
          <Container>
            <div key={index}>
              <ProfileBox>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <ProfileImg src={data.profileImg} alt="" />
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
