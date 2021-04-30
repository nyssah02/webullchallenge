import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.main`
  position: relative;
`

const Section = styled.section`
  position: relative;
`

const SectionH1 = styled.h1`
  font-size: 2.5rem;
  margin: 64px;
  text-align: center;
`

const InnerSection = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 1rem;
  margin: 0 auto 100px;
`

const AccordionContainer = styled.div``

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

const AccordionItem = styled.div`
  &:not(:last-child) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1.5rem;
  cursor: pointer;
`

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`

const sampleAccordionData = [
  {
    title: 'Where do I claim my reward stock(s)?',
    content:
      '> You can ONLY claim reward stocks from the mobile app. > Open the Webull app >>> MENU >>> MY FREE STOCK >>> tap GET to claim your free stock(s). > Once claimed, allow up to 10 business days for it to arrive in your account.',
  },
  {
    title: 'I made a deposit, where is my reward stock(s)?',
    content:
      'There is a couple of reasons why you did not qualify for the free stock(s). > Your deposit has not settled. ACH takes about 5 business days while WIRE takes about 1-2 business days. > Your initial deposit was under $100. Even if you make two separate deposits of $50 each, our system will only record your first $50 deposit as your initial deposit. The $50 deposit is under $100 requirement and therefore does not qualify you for the free stock(s). > You need to make your initial deposit of $100 or more within 30 days of signing up. Deposits made past the 30-day grace period will not be eligible for a free stock. > All reward stock(s) promotions are for US customers only.',
  },
  {
    title: 'Why is my reward stock under the promised value?',
    content:
      'These reward stocks were distributed from Webull’s inventory of settled shares held specifically for this promotion. When the stocks were purchased, Webull made sure they were above the price range we promised. However, due to market fluctuation, some stock values may drop from the time we made the purchase. Please understand that Webull has no control over the fluctuation of the market.',
  },
]

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight,
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i)
          setBodyHeight(refs[i].current.clientHeight)
          console.log(refs[i].current.clientHeight)
        }}
      >
        {title}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ))

const SectionFive = () => {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)

  const item0 = useRef(null)
  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)
  const item5 = useRef(null)

  const refs = [item0, item1, item2, item3, item4, item5]

  return (
    <>
      <Container>
        <SectionH1>FAQs</SectionH1>
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={sampleAccordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    </>
  )
}

export default SectionFive
