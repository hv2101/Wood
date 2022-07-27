import React from 'react';
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Comments from "../Components/Comments";
import Card from "../Components/Card";

const Container = styled.div`
display: flex;
  gap:24px;
`;
const Content = styled.div`
flex: 5;
`;
const VideoWrapper = styled.div`

`;
const Title = styled.h1`
font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};
`;
const Details = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({theme})=>theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
  gap: 20px;
  color: ${({theme})=>theme.text};
`;
const Button = styled.div`
display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`;
const Recommendation = styled.div`
flex: 2;
`;
const Channel = styled.div`
display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
display: flex;
  gap: 20px;
`;
const Image = styled.img`
width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text};
`;
const ChannelName = styled.span`
font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
font-size: 14px;
`;
const Subscribe = styled.div`
background-color: #61dafb;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer; 
`;

const Video = () => {
    return <Container>
        <Content>
            <VideoWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nvzkHGNdtfk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </VideoWrapper>
        <Title>Test Video</Title>
            <Details>
                <Info>148,409 views  • 1 day ago</Info>
                <Buttons>
                    <Button>
                        <ThumbUpIcon/> 123
                    </Button>
                    <Button>
                        <ThumbDownIcon/> Dislike
                    </Button>
                    <Button>
                        <ShareIcon/> Share
                    </Button>
                    <Button>
                        <AddTaskIcon/> Save
                    </Button>
                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src = "https://media.gettyimages.com/photos/the-cast-of-friends-clockwise-from-top-left-matt-leblanc-david-picture-id901156?s=2048x2048"/>
                    <ChannelDetail>
                        <ChannelName>Friends</ChannelName>
                        <ChannelCounter>100k subscribers</ChannelCounter>
                        <Description>Just for fun</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>Subscribe</Subscribe>
            </Channel>
            <Hr/>
            <Comments/>
        </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>;
}

export default Video;