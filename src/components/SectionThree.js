import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import BgImg from '../assets/background2.png'

const SectionContainer = styled.div`
  background-image: url(${BgImg});
  background-size: 100% 100%;
  padding: 58px 0 81px;
`

const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  overflow: hidden;
`

const SectionText = styled.div`
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  color: #fff;
`

const SectionH1 = styled.h1`
  font-size: 2.5rem;
  padding: 60px 0 20px;
  text-align: center;
`

const SectionP = styled.p`
  font-size: 1rem;
  line-height: 30px;
  padding: 0 20px 30px;
  text-align: center;
`
const CardWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 50px 0;
`

const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 580px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`

const CardH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`

const CardTable = styled.table`
  position: relative;
  width: 667px;
  background: #f5f6fc;
  border: 1px solid #2343de;
  border-radius: 18px;
  padding: 0;
  border-collapse: collapse;

  th {
    border-bottom: 1px solid #2343de;
    padding: 20px;
    margin: 0;
    color: #656565;
    text-align: left;
  }

  td {
    border-bottom: 1px solid #2343de;
    padding: 20px;
    margin: 0;
    color: #3250e0;
  }
`

const CardFooter = styled.p`
  text-align: center;
  color: #9ea1a9;
  font-size: 11px;
  line-height: 15px;
  margin-top: 27px;
  padding: 0 137px;

  span {
    color: #3f89fc;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 520px;
  height: 71px;
  font-size: 22px;
  text-align: center;
  color: #3250e0;
  cursor: pointer;
  background: #fff;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`

const SectionThree = ({ blueBg }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionText>
          <SectionH1>Refer 1 friend, get 4 free stocks!</SectionH1>
          <SectionP>Promotion duration: 4/16/2021 – 4/28/2021</SectionP>
        </SectionText>
        <CardWrap>
          <Card>
            <CardH2>
              The more referrals you have, the more stocks you will receive!
            </CardH2>
            <CardTable>
              <thead>
                <th>Successful referrals between 4/16 – 4/28</th>
                <th>Rewards</th>
              </thead>
              <tbody>
                <tr>
                  <td>1st successful referral</td>
                  <td>2 + 2 = 4 Stocks</td>
                </tr>
                <tr>
                  <td>2nd successful referral</td>
                  <td>2 + 5 = 7 Stocks</td>
                </tr>
                <tr>
                  <td>Every successful referral afertwards</td>
                  <td>2 Stocks for each</td>
                </tr>
              </tbody>
            </CardTable>
            <CardFooter>
              Successful referral: A new user uses the referee’s unique referral
              link to sign up, opens a brokerage account and makes an initial
              deposit of at least $100 within 30 days of signing up. Please
              note: your referrals must initiate the deposit between 4/16/2021 –
              4/28/2021 for you to receive the free stocks listed above. You can
              only claim your free stocks when your referee’s funds
              settle(Usually takes 5 business days). Each stock is valued
              between $8-$1600. For more information, please visit the terms and
              conditions.
            </CardFooter>
          </Card>
        </CardWrap>
        <ButtonWrap>
          <SectionButton href='/'>
            <span>Open account and refer your friends now</span>
            <MdKeyboardArrowRight />
          </SectionButton>
        </ButtonWrap>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default SectionThree
