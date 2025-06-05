import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(to bottom, #ff6a00, #ffb347);
  color: white;

  @media (max-width: 600px) {
    padding: 4rem 1rem;
  }
`;

const HeroImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    max-width: 200px;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Hero = () => (
  <HeroSection>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <HeroImage src=".././public/logo.png" alt="Vitalerta Logo" />
      <HeroSubtitle>Sistema Inteligente de Alerta e Resposta a Queimadas</HeroSubtitle>
    </motion.div>
  </HeroSection>
);

export default Hero;
