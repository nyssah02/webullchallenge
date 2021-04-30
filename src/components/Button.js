import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    ${({ blueBg }) => (blueBg ? '#fcc028, #ffd86c' : '#0546d6, #3f89fc')}
  );
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`
