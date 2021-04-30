import React from 'react'
import styled from 'styled-components'

const FooterBorder = styled.div`
  border-top: 1px solid rgb(0, 0, 0);
  opacity: 0.1;
  z-index: 99;
  padding: 0;
  margin: 0;
`

const FooterContainer = styled.footer`
  background-color: #fff;
  max-width: 100vw;
`

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;
  padding-bottom: 40px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px 60px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #373b3f;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #000;
`

const FooterLink = styled.a`
  color: #373b3f;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #e1ad01;
    transition: 0.3s ease-out;
  }
`

const SocialMedia = styled.section`
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled.a`
  color: #373b3f;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

const FooterTextWrap = styled.div`
  padding: 50px 0;
`

const FooterText = styled.small`
  color: #373b3f;
  font-size: 12px;
`

const WebsiteRights = styled.small`
  color: #373b3f;
  margin-bottom: 16px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBorder />
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>FAQ</FooterLinkTitle>
              <FooterLink href='/'>Fee Schedule</FooterLink>
              <FooterLink href='/'>Account</FooterLink>
              <FooterLink href='/'>Margin Trading</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Webull</FooterLinkTitle>
              <FooterLink href='/'>Our Story</FooterLink>
              <FooterLink href='/'>Careers</FooterLink>
              <FooterLink href='/'>Blog</FooterLink>
              <FooterLink href='/'>BrokerCheck</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Terms and Conditions</FooterLinkTitle>
              <FooterLink href='/'>Privacy Policy</FooterLink>
              <FooterLink href='/'>Business Continuity Plan</FooterLink>
              <FooterLink href='/'>Disclosures</FooterLink>
              <FooterLink href='/'>Data Disclaimer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink href='/'>customerservices@webull.us</FooterLink>
              <FooterLink href='/'>+1 (888) 828-0618</FooterLink>
              <FooterLink href='/'>File a Complaint</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <FooterBorder />
          <FooterTextWrap>
            <FooterText>
              Securities trading is offered to self-directed customers by Webull
              Financial LLC, a broker dealer registered with the Securities and
              Exchange Commission (SEC). Webull Financial LLC is a member of the
              Financial Industry Regulatory Authority (FINRA), Securities
              Investor Protection Corporation (SIPC), The New York Stock
              Exchange (NYSE), NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX).
              <br />
              <br />
              Webull Financial LLC is a member of SIPC, which protects
              securities customers of its members up to $500,000 (including
              $250,000 for claims for cash). Explanatory brochure available upon
              request or at www.sipc.org.
              <br />
              <br />
              Our clearing firm Apex Clearing Corp has purchased an additional
              insurance policy. The coverage limits provide protection for
              securities and cash up to an aggregate of $150 million, subject to
              maximum limits of $37.5 million for any one customer’s securities
              and $900,000 for any one customer’s cash. Similar to SIPC
              protection, this additional insurance does not protect against a
              loss in the market value of securities.
              <br />
              <br />
              Cryptocurrency trading is offered through an account with Apex
              Crypto. Apex Crypto is not a registered broker-dealer or FINRA
              member and your cryptocurrency holdings are not FDIC or SIPC
              insured. Please ensure that you fully understand the risks
              involved before trading.
              <br />
              <br />
              All investments involve risks and is not suitable for every
              investor. The value of securities may fluctuate and as a result,
              clients may lose more than their original investment. The past
              performance of a security, or financial product does not guarantee
              future results or returns. Keep in mind that while diversification
              may help spread risk it does not assure a profit, or protect
              against loss, in a down market. There is always the potential of
              losing money when you invest in securities, or other financial
              products. Investors should consider their investment objectives
              and risks carefully before investing.
              <br />
              <br />
              Options involve risks and are not suitable for all investors as
              the special risks inherent to options trading may expose investors
              to potentially rapid and substantial losses. Options trading
              privileges subject to Webull Financial LLC review and approval.
              Please read Characteristics and Risks of Standardized Options
              before investing in options.
              <br />
              <br />
              No content on the Webull Financial LLC website shall be considered
              as a recommendation or solicitation for the purchase or sale of
              securities, options or other investment products. All information
              and data on the website is for reference only and no historical
              data shall be considered as the basis for judging future trends.
              <br />
              <br />
              Investors should be aware that system response, execution price,
              speed, liquidity, market data, and account access times are
              affected by many factors, including market volatility, size and
              type of order, market conditions, system performance, and other
              factors.
              <br />
              <br />
              Free trading of stocks, ETFs and options refers to $0 commissions
              for Webull Financial LLC self-directed individual cash or margin
              brokerage accounts and IRAs that trade U.S. listed securities via
              mobile devices, desktop or website products. Relevant regulatory
              and exchange fees may apply. Please refer to our Fee Schedule for
              more details.
            </FooterText>
          </FooterTextWrap>
          <FooterBorder />
          <SocialMediaWrap>
            <SocialLogo to='/'>nyssah</SocialLogo>
            <WebsiteRights>
              © 2021 Webull Financial LLC, All rights reserved. Member
              FINRA/SIPC/NYSE/NASDAQ/CBOE EDGX
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
