import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = ({ children }) => (
    <Wrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

    max-width: 1280px;
    padding: 0 16px;
 
`;

export default Container;