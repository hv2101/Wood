import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://media.gettyimages.com/photos/david-schwimmer-who-plays-ross-on-the-hit-nbc-series-friends-performs-picture-id2575754?s=2048x2048" />
            <Details>
                <Name>
                    John Doe <Date>1 day ago</Date>
                </Name>
                <Text>
                    Its a great Video.
                </Text>
            </Details>
        </Container>
    );
};

export default Comment;