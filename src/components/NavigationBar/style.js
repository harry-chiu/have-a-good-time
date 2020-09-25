import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: -120px;
  width: 96px;
  height: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: -3px 0 10px #c0c0c0;
  transition: 0.25s ease;
  z-index: 9;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  text-align: center;
  margin-top: 16px;

  & > a {
    text-decoration: none;
    color: #000000;

    &:hover {
      color: darkcyan;
    }
  }
`;

export const FloatButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  border: 4px solid #000000;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  color: #ffffff;
  background: #ff0000;
  z-index: 10;
  cursor: pointer;

  &:hover {
    background: #ff2233;
  }

  &:focus {
    outline: none;
  }
`;
