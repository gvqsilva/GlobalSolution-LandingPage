import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatisticsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #eaf8f8;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 128, 128, 0.1);
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #007a7a;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas fixas */
  gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* 1 coluna no mobile */
  }
`;

const GraphBox = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 3px 12px rgba(0, 128, 128, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* largura automática para preencher o grid */
`;

const GraphImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
`;

const GraphTitle = styled.h3`
  color: #004d4d;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Statistics = () => (
  <StatisticsSection>
    <Title
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Dados e Estatísticas
    </Title>
    <GraphsContainer>
      <GraphBox
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <GraphTitle>Frequência de Incêndios por Estação</GraphTitle>
        <GraphImage src="/graphs/grafico1.png" alt="Gráfico de Frequência de Incêndios por Estação" />
      </GraphBox>

      <GraphBox
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GraphTitle>Área Média Queimada por Estado</GraphTitle>
        <GraphImage src="/graphs/grafico2.png" alt="Gráfico de Área Média Queimada por Estado" />
      </GraphBox>

      <GraphBox
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <GraphTitle>Top Estados por Frequência e Severidade de Incêndios</GraphTitle>
        <GraphImage src="/graphs/grafico3.png" alt="Gráfico de Top Estados por Frequência e Severidade de Incêndios" />
      </GraphBox>

      <GraphBox
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <GraphTitle>Frequência de Incêndios por Estado e Estação</GraphTitle>
        <GraphImage src="/graphs/grafico4.png" alt="Gráfico de Frequência de Incêndios por Estado e Estação" />
      </GraphBox>
    </GraphsContainer>
  </StatisticsSection>
);

export default Statistics