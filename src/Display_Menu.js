import React, { useState } from 'react'

const Display_Menu = () => {
    const [grouping, setGrouping] = useState("user")
    const [ordering, setOrdering] = useState("priority")
    const changeGroupFilter = (e) => {
        setGrouping(e.target.value)
    }
    const changeOrderFilter = (e) => {
        setOrdering(e.target.value)
    }
  return (
    <div id="optionsBox">
    <div className='options'>
      <label htmlFor="grouping">Grouping</label>
      <select id="grouping" className='select' onChange={changeGroupFilter}>
        <option value="none">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
    <div className='options'>
      <label htmlFor="ordering">Ordering</label>
      <select className='select' id="ordering" onChange={changeOrderFilter}>
        <option value="pri">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  </div>
  )
}

export default Display_Menu