import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProblemSection = styled.section`
  padding: 4rem 2rem;
  background: #fff3f3;
  color: #a40000;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(164, 0, 0, 0.1);
  margin-top: -2rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    margin-top: -1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Text = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Problem = () => (
  <ProblemSection>
    <Title
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      O Problema
    </Title>
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p>
        As queimadas, causadas por fatores naturais ou ações humanas, têm se intensificado com as mudanças climáticas, provocando a destruição de ecossistemas, perda da biodiversidade e sérios riscos à saúde pública devido à emissão de fumaça e poluentes. Esses incêndios afetam não apenas a fauna, a flora e a qualidade do ar, mas também a saúde mental e física das comunidades, além de forçar o deslocamento de populações inteiras, ampliando os impactos sociais e ambientais.
      </p>
      <br />
      <p>
        Além dos danos diretos, há desafios estruturais que agravam a situação, como a falta de comunicação inclusiva, dificuldades de locomoção e resposta emergencial, e a ausência de internet e infraestrutura em áreas afetadas. Esses fatores dificultam o combate eficiente aos incêndios e a proteção das pessoas em situação de vulnerabilidade, evidenciando a necessidade de ações urgentes, coordenadas e acessíveis para mitigar os efeitos das queimadas.
      </p>
    </Text>
    <Image src="/queimadas.png" alt="Imagem de queimadas" />
  </ProblemSection>
);

export default Problem;
