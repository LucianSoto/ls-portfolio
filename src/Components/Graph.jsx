import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import './Graph.css'

function Graph() {
  const data = [
    { name: 'HTML', uv: 100, pv: 100,  },
    { name: 'CSS', uv: 100, pv: 100,  },
    { name: 'JavaScript', uv: 100, pv: 100, },
    { name: 'ReactJS', uv: 90, pv: 100, },
    { name: 'PostgreSQL', uv: 20, pv: 100, },
    { name: 'NodeJS', uv: 30, pv: 100,  },
  ]

  console.log(data)
  

  return (
    <div className='graph-cont'>
      <h3 className='graph-title'>Skills Chart</h3>
      <BarChart width={800} height={450} data={data}>
    <XAxis dataKey="name" stroke="white" />
    <YAxis stroke='lightgray' />
    {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} /> */}
    {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
    <CartesianGrid stroke="transparent" strokeDasharray="5 5" />
    <Bar dataKey="uv" className='bar' barSize={50} />
  </BarChart>
    </div>
  )
}

export default Graph