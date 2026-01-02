import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto; 
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

export const Card = styled.div`
  background: #000;
  color: #fff;
  padding: 20px;

  width: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Row = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
`;
