import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Stats1 from '../assets/stats1.png'
import Stats2 from '../assets/stats2.png'
import Stats3 from '../assets/stats3.png'

const SectionContainer = styled.div`
  background: #fff;
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
`

const SectionH1 = styled.h1`
  font-size: 2.5rem;
  margin: 64px 0 40px;
  text-align: center;
`

const SectionP = styled.p`
  font-size: 1.2rem;
  line-height: 30px;
  padding: 0 20px 30px;
`

const CardWrapTop = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;
`
const CardWrapBottom = styled.div`
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

const CardImg = styled.img`
  width: 150px;
  margin-bottom: 30px;
`

const CardH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const CardP = styled.p`
  font-size: 1.1rem;
  line-height: 28px;
  padding-top: 10px;

  span {
    color: #3f89fc;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 64px;
`

const SectionTwo = ({ blueBg }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionText>
          <SectionH1>How are the reward stocks selected?</SectionH1>
          <SectionP>
            This promotion’s stock inventory is composed of stocks with a
            minimum market capitalization of $2.5 billion from a US-based
            company and listed on the NYSE or NASDAQ. Stock allocation is
            completely random and given out via a lottery system. We do not get
            to decide which stock goes to which client and clients do not have
            the ability to choose a stock they want. For more information,
            please visit the <span>terms and conditions</span>.
          </SectionP>
        </SectionText>
        <CardWrapTop>
          <Card>
            <CardImg src={Stats1} />
            <CardH2>100% chance of getting 2 free stocks</CardH2>
            <CardP>
              You have 100% chance of getting 2 free stocks if you open and make
              an initial deposit of $100 or more into a Webull brokerage
              account.
            </CardP>
          </Card>
          <Card>
            <CardImg src={Stats2} />
            <CardH2>Facebook, Starbucks, Snap</CardH2>
            <CardP>
              You have 1/100 chances of claiming a free stock from one or more
              of the companies mentioned above when you open a Webull brokerage
              account.
            </CardP>
          </Card>
        </CardWrapTop>
        <CardWrapBottom>
          <Card>
            <CardImg src={Stats3} />
            <CardH2>Google, Procter & Gamble, Kraft Heinz</CardH2>
            <CardP>
              You have 1/50 chances of claiming a free stock from one or more of
              the companies mentioned above when you make an initial deposit of
              $100 or more into your brokerage account.
            </CardP>
          </Card>
        </CardWrapBottom>
        <ButtonWrap>
          <Button href='/' blueBg={!blueBg}>
            <span>Claim your free stocks now</span>
            <MdKeyboardArrowRight />
          </Button>
        </ButtonWrap>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default SectionTwo
