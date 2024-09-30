import React from 'react';
import todo from './public/To-do.svg';
import in_progress from './public/in-progress.svg';
import backlog from './public/Backlog.svg';
import done from './public/Done.svg';
import cancelled from './public/Cancelled.svg';
import add from './public/add.svg';
import threeDOt from './public/3_dot_menu.svg';
import user from './public/user.jpg';
import no_priority from './public/No-priority.svg';
import low_priority from './public/Img-Low-Priority.svg';
import medium_priority from './public/Img-Medium-Priority.svg';
import high_priority from './public/Img-High-Priority.svg';
import urgent_priority from './public/Img-High-Priority.svg';

const ColumnHeader = ({ groupKey, groupBy, size }) => {
  const priority = {
    0: 'No priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent'
  }
  return (
    <div className='status_header'>
      {groupBy === 'status' ? (
        <div className='status'>
          <div className='status_left'>
            {groupKey === 'Todo' ? (
              <img src={todo} alt="Todo" className='todo' />
            ) : groupKey === 'In progress' ? (
              <img src={in_progress} alt="In Progress" className='inprogress' />
            ) : groupKey === 'Done' ? (
              <img src={done} alt="Done" className='done' />
            ) : groupKey === 'Cancelled' ? (
              <img src={cancelled} alt="Cancelled" className='cancelled' />
            ) : (
              <img src={backlog} alt="Backlog" className='backlog' />
            )}
            <span>{groupKey}</span>
            <span>{size}</span>
          </div>
          <div className='status_right'>
            <img src={add} alt="add" className='add' />
            <img src={threeDOt} alt="threeDOt" className='threeDOt' />
          </div>
        </div>
      ) : groupBy === 'user' ? (
        <div className="status">
          <div className="status_left">
            <img src={user} alt="user" className='user' />
            <span>{groupKey}</span>
            <span>{size}</span>
          </div>
          <div className='status_right'>
            <img src={add} alt="add" className='add user-right' />
            <img src={threeDOt} alt="threeDOt" className='threeDOt user-right' />
          </div>
        </div>
      ) : (
        <div className="status">
          <div className="status_left">
            {groupKey === '0' ? (
              <img src={no_priority} alt="No Priority" className='no_priority' />
            ) : groupKey === '1' ? (
              <img src={low_priority} alt="Low Priority" className='low_priority' />
            ) : groupKey === '2' ? (
              <img src={medium_priority} alt="Medium Priority" className='medium_priority' />
            ) : groupKey === '3' ? (
              <img src={high_priority} alt="High Priority" className='high_priority' />
            ) :<img src={urgent_priority} alt="Urgent Priority" className='urgent_priority' />}
            <span>{priority[groupKey]}</span>
            <span>{size}</span>
          </div>
          <div className='status_right'>
            <img src={add} alt="add" className='add user-right' />
            <img src={threeDOt} alt="threeDOt" className='threeDOt user-right' />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnHeader;
