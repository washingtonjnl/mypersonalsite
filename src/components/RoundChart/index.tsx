import React, { ReactNode } from 'react'

import { Container } from './styles'

import Chart from '../../assets/chart.png'

interface RoundChartProps {
  title: string
  percent: number
  children?: ReactNode
}

const RoundChart: React.FC<RoundChartProps> = ({ title, percent }) => {
  return (
    <Container>
      <img src={Chart} alt={title} />
      <p>{title}</p>
    </Container>
  )
}

export default RoundChart
