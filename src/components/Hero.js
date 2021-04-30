import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/bigimage.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Button } from './Button'

const Section = styled.section`
  background-image: url(${BgImg});
  height: 650px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 80px;
`

const Content = styled.div`
  width: 100%;
  height: 100px;
`

const Left = styled.div`
  padding-left: 120px;
  padding-top: 143px;
`

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`

const Desc = styled.p`
  width: 472px;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;

  span {
    color: #3f89fc;
  }
`

const Hero = ({ blueBg }) => {
  return (
    <div>
      <Section>
        <Content>
          <Left>
            <Title>
              Get 2 FREE Stocks <br /> valued up to $1850!
            </Title>
            <Desc>
              Open and fund a brokerage account with $100 or <br />
              more and you will have a change of claiming
              <br /> stocks like <span>GOOG, FB, SBUX</span> and more!
            </Desc>
            <Button href='/' blueBg={blueBg}>
              <span>Claim your free stocks now</span>
              <MdKeyboardArrowRight />
            </Button>
          </Left>
        </Content>
      </Section>
    </div>
  )
}

export default Hero
