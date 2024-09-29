import React from 'react'
import Cards from './Cards';
import ColumnHeader from './ColumnHeader';
const LayoutColumn = (props) => {
  const { groupKey, tasks, groupBy, orderBy } = props;
  const sortedTasks = tasks.sort((a, b) => {
    if (orderBy === "priority") {
      return b.priority - a.priority;
    }
    else {
      return a.title.localeCompare(b.title);
    }
  });
  const taskSize = sortedTasks.length;
  return (
    <div className="task-column">
      <ColumnHeader groupKey={groupKey} groupBy={groupBy} size={taskSize}/>
      {sortedTasks.map(task => (
        <Cards key={task.id} task={task} groupBy={groupBy}/>
      ))}
    </div>
  );
};

export default LayoutColumn