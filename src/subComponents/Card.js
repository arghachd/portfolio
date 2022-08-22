import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`
const Subtitle = styled.h2`
  font-size: calc(0.9em + 0.3vw);
  font-weight: 500;
`

const Description = styled.h2`
  font-size: calc(0.8rem + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8rem + 0.3vw);
`

// framer motion config
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

function Card(props) {
  const { id, name, companyName, description, tags } = props.data

  return (
    <Box variants={Item}>
      <div>
        <Title>{name}</Title>
        <br />
        {companyName && <Subtitle>{companyName}</Subtitle>}
      </div>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>
        })}
      </Tags>
    </Box>
  )
}

export default Card
