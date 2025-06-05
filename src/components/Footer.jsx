import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2f4f4f;
  color: #f0f0f0;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: 4rem;
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: #f0f0f0;
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #ffb347;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} VITALERTA. Todos os direitos reservados.</FooterText>
    <SocialIcons>
      <IconLink href="https://github.com/GS-25-1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
    </SocialIcons>
  </FooterContainer>
);

export default Footer;