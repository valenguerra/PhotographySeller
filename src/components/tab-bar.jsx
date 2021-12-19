import styled from "styled-components";
import { Box } from "./box";
import { Row } from "./flex";
import { Tab } from "./tab";

// tabs = [{ name: "Naturaleza", id: 541 }]

export const TabBar = ({ tabs, value, onChange }) => {
  return (
    <Wrapper>
      {tabs.map((t, i) => (
        <Row key={t.id} alignItems='center'>
          <Tab t={t.name} selected={value === t.id} onClick={() => onChange(t.id)} />
        </Row>
      ))}
      <Box width='20px' />
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  //border-top: 2px solid ${p => p.theme.colors.primary200};
  //border-bottom: 2px solid ${p => p.theme.colors.primary200};
  overflow: auto;
  gap: 12px;
  padding: 0 20px 0 20px;
  flex-wrap: wrap;
`;
