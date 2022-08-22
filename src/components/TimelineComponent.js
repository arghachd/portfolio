import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  // on hover over box changing Image style
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`

const Subtitle = styled.h4`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`
const Date = styled.h5`
  padding: 0.5rem 0;
  color: #64748b;
`

const Container = styled(motion.div)``

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
}

function TimelineComponent({ timeline }) {
  const { name, institute, duration, imgSrc } = timeline
  return (
    <Container variants={container}>
      <Box>
        <Image img={imgSrc} />
        <Title>{institute}</Title>
        <Subtitle>{name}</Subtitle>
        <Date>{duration}</Date>
      </Box>
    </Container>
  )
}

export default TimelineComponent
