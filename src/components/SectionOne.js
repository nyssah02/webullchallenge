import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'

const SectionContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;
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
  font-size: 2rem;
  margin-bottom: 10px;
`

const CardP = styled.p`
  font-size: 1.3rem;
  line-height: 30px;
  padding-top: 15px;

  span {
    color: #3f89fc;
  }
`

const SectionOne = ({ blueBg }) => {
  return (
    <SectionContainer>
      <SectionH1>How does it work?</SectionH1>
      <CardWrap>
        <Card>
          <CardH2>Open an account – Get a FREE stock:</CardH2>
          <CardP>
            Successfully open a Webull brokerage account and receive one free
            stock, <span>valued between $2.50 - $250</span>.
          </CardP>
        </Card>
        <Card>
          <CardH2>
            Fund your account with $100 or more – Get a FREE stock:
          </CardH2>
          <CardP>
            Successfully make an initial deposit of $100 or more and receive one
            free stock, <span>valued between $8 - $1600</span>.
          </CardP>
        </Card>
      </CardWrap>
      <Button href='/' blueBg={blueBg}>
        <span>Claim your free stocks now</span>
        <MdKeyboardArrowRight />
      </Button>
    </SectionContainer>
  )
}

export default SectionOne
