import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SiDowndetector } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const ProjectSection = styled.section`
  padding: 4rem 2rem;
  background: #e6f4ea;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(46, 139, 87, 0.15);
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: rgb(192, 40, 40);
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: rgb(116, 38, 38);

  @media (max-width: 720px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #3a5a34;
  margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  font-size: 2rem;
  text-decoration: none;
`;

const ProjectTwo = () => (
  <ProjectSection>
    <Icon><SiDowndetector /></Icon>
    <Info>
      <Title initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        Simulador de Incêndio com Detecção de Vulneráveis
      </Title>
      <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Este projeto utiliza sensores de temperatura, gás e luminosidade para detectar possíveis focos de queimadas, alertando automaticamente quando há temperatura elevada e presença de fumaça simultaneamente. Ele simula um sistema inteligente autônomo movido por energia solar.
      </Description>

      <ImageWrapper>
        <ProjectImage src="/projeto2.png" alt="Simulador de Incêndio com Detecção de Vulneráveis" />
        <Overlay
          className="overlay"
          href="https://github.com/GS-25-1/Prototipo-Aparelho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Overlay>
      </ImageWrapper>
    </Info>
  </ProjectSection>
);

export default ProjectTwo;
