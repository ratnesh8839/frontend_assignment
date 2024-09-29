import React from 'react';
import todo from '../icons_FEtask/To-do.svg';
import in_progress from '../icons_FEtask/in-progress.svg';
import backlog from '../icons_FEtask/Backlog.svg';
import done from '../icons_FEtask/Done.svg';
import cancelled from '../icons_FEtask/Cancelled.svg';
import add from '../icons_FEtask/add.svg';
import threeDOt from '../icons_FEtask/3_dot_menu.svg';
import user from '../icons_FEtask/user.jpg';
import no_priority from '../icons_FEtask/No-priority.svg';
import low_priority from '../icons_FEtask/Img-Low-Priority.svg';
import medium_priority from '../icons_FEtask/Img-Medium-Priority.svg';
import high_priority from '../icons_FEtask/Img-High-Priority.svg';
import urgent_priority from '../icons_FEtask/SVG-UrgentPrioritycolour.svg';

const Cards = ({ task, groupBy }) => {
  return (
    <div className="card">
      <div className="first">
        <span id='cam'>{task.id}</span>
        {
          groupBy !== 'user' ? (<img src={user} alt='user' className='user' />):null
        }
      </div>
      <div className="second">
      <div className="title_priority">
          {
            groupBy === 'priority' && (
              task.status === 'Todo' ? (
                <img src={todo} alt="Todo" className='todo' />
              ) : task.status === 'In progress' ? (
                <img src={in_progress} alt="In Progress" className='inprogress' />
              ) : task.status === 'Done' ? (
                <img src={done} alt="Done" className='done' />
              ) : task.status === 'Cancelled' ? (
                <img src={cancelled} alt="Cancelled" className='cancelled' />
              ) : (
                <img src={backlog} alt="Backlog" className='backlog' />
              )
            )
          }
        </div>
      <span id='title'>{task.title}</span>
      </div>
      <div className="third">
      <div className="card_priority">
          {
            groupBy !== 'priority' && (
              task.priority === 0 ? (
                <img src={no_priority} alt='no_priority' id='no_priority' />
              ) : task.priority === 1 ? (
                <img src={low_priority} alt='low_priority' id='low_priority' />
              ) : task.priority === 2 ? (
                <img src={medium_priority} alt='medium_priority' id='medium_priority' />
              ) : task.priority === 3 ? (
                <img src={high_priority} alt='high_priority' id='high_priority' />
              ) : (
                <img src={urgent_priority} alt='urgent_priority' id='urgent_priority' />
              )
            )
          }
        </div>
        <div id='circle'></div>
        <span id='tag'>{task.tag}</span>
      </div>
    </div>
  );
}

export default Cards;
