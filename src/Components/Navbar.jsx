import React from 'react';
import styled from 'styled-components'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {SearchOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Container = styled.div`
position: sticky;
top: 0;
  background-color: ${({theme})=>theme.bgLighter};
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px;
  position: relative;
`
const Search = styled.div`
  width: 40%;
position: absolute;
left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`
const Input = styled.input`
border: none;
  background-color: transparent;
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #778902;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Navbar(props) {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search'/>
                    <SearchOutlined/>
                </Search>
                <Link to = "signin" style ={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleIcon/>
                    SIGN IN
                </Button>
                </Link>
            </Wrapper>
        </Container>
    );
}

export default Navbar;