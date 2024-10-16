import React from 'react'

function TabData(props) {
  const {data} = props;
  const {title} = data;
  return (
    <div>{title}</div>
  )
}

export default TabData