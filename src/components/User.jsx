import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Wrapper, ImgBox, ProfileBox, ProfileImg, Container } from './User.styled';
import data from './data.json';

export default function User() {
  return (
    <Container>
      {data?.map((data, index) => {
        return (
          <Wrapper key={index}>
            <div>
              <ProfileBox>
                <a href={data.link} target='_blank' rel='noreferrer'>
                  <ImgBox>
                    <ProfileImg src={data.profileImg} alt='' />
                  </ImgBox>
                </a>
                <p style={{ padding: '0px 0px 0px 20px' }}>{data.name}님의 잔디가 벌써 이만큼 자랐어요! 🌱</p>
              </ProfileBox>
              <GitHubCalendar username={data.id} />
            </div>
          </Wrapper>
        );
      })}
    </Container>
  );
}
