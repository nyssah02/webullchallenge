import React from 'react'
import styled from 'styled-components'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import Icon4 from '../assets/icon4.png'

const SectionContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;
  overflow: hidden;
`

const SectionH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
`

const CardWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;
`

const Card = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: left;
  grid-gap: 30px;
  border-radius: 10px;
  max-height: 580px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`

const CardLeft = styled.div`
  padding: 0;
`

const CardImg = styled.img`
  width: 60px;
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
`

const CardH2 = styled.h2`
  font-size: 1.5rem;
`

const CardP = styled.p`
  font-size: 1rem;
  line-height: 24px;
  padding-top: 15px;

  span {
    color: #3f89fc;
  }
`

const SectionFour = () => {
  return (
    <SectionContainer>
      <SectionH1>Why Webull</SectionH1>
      <CardWrap>
        <Card>
          <CardLeft>
            <CardImg src={Icon1} />
          </CardLeft>
          <CardRight>
            <CardH2>Zero Commissions</CardH2>
            <CardP>
              - Zero commissions on online stock, options, and ETFs trades.
              <br />
              - Zero per contract fee when you trade options.
              <br />
              - Zero minimum deposit requirements for brokerage accounts and
              IRAs.
              <br />
            </CardP>
          </CardRight>
        </Card>

        <Card>
          <CardLeft>
            <CardImg src={Icon2} />
          </CardLeft>
          <CardRight>
            <CardH2>Free Level 2 Advance (Nasdaq TotalView) access</CardH2>
            <CardP>
              Sign up with us and instantly receive a 3-month complimentary
              subscription to Level 2 Advance (Nasdaq TotalView).
            </CardP>
          </CardRight>
        </Card>

        <Card>
          <CardLeft>
            <CardImg src={Icon3} />
          </CardLeft>
          <CardRight>
            <CardH2>Trade Conveniently</CardH2>
            <CardP>
              - Place orders and look up tickers by only using your voice.
              <br />
              - “Big Button Mode” to quickly place trades.
              <br />
              - Pre-market (4:00 AM - 9:30 AM ET) and after hours (4:00 PM -
              8:00 PM ET) trading sessions.
              <br />
              - Available on mobile, desktop, tablet and web platforms.
              <br />
            </CardP>
          </CardRight>
        </Card>

        <Card>
          <CardLeft>
            <CardImg src={Icon4} />
          </CardLeft>
          <CardRight>
            <CardH2>Access Smart Trading Tools</CardH2>
            <CardP>
              - Explore in-depth analytic tools and charting software. Over 50
              technical indicators and 12 charting tools.
              <br />
              - Test out your trading skills with our Paper Trading feature.
              <br />- Sift through the market swiftly and concisely with
              Webull’s stock screener.
            </CardP>
          </CardRight>
        </Card>
      </CardWrap>
    </SectionContainer>
  )
}

export default SectionFour
