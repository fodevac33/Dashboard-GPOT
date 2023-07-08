import React from 'react'

type Props = {
    angles: number[];
    angles2: number[];
}

const PhasorsGraph = ({angles, angles2}: Props) => {

  const center = 500 / 2;
  const radius = center - 20;
  const axisLength = radius-1;
  const axisLength2 = radius/2+13;
  const numCircles = 4;

  const colors = ["#FF0A0A","#4FDC04","#3498DB"];

  
  return (
    <svg width="100%" height="100%"  viewBox="0 0 500 500"> 
        {[...Array(numCircles)].map((_, i) => {
          const circleRadius = radius - i * 50;
          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={circleRadius}
              fill="none"
              stroke="#a8a8a8"
              strokeDasharray= "20,20"
              strokeWidth="4"
            />
          );
        })}   



        {angles.map((angle, index) => {
          const adjustedAngle = angle - 90;
          const x2 = center - axisLength * Math.sin(adjustedAngle * (Math.PI / 180));
          const y2 = center - axisLength * Math.cos(adjustedAngle * (Math.PI / 180));
          return <line key={index} x1={center} y1={center} x2={x2} y2={y2} stroke={colors[index]} strokeWidth="10" />;
        })}
        {angles2.map((angle, index) => {
          const adjustedAngle = angle - 90;
          const x2 = center - axisLength2 * Math.sin(adjustedAngle * (Math.PI / 180));
          const y2 = center - axisLength2 * Math.cos(adjustedAngle * (Math.PI / 180));
          return <line key={index} x1={center} y1={center} x2={x2} y2={y2} stroke={colors[index]} strokeWidth="10" />;
          })}

          <circle cx={center}
              cy={center}
              r={8}
              fill='#a8a8a8'/>
      </svg>
  )
}

export default PhasorsGraph;
