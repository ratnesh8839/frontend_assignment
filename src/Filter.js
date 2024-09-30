import React, { useEffect, useState } from 'react';
import Display from './public/Display.svg';
import Down from './public/down.svg';
import Cards from './Cards';
import LayoutColumn from './LayoutColumn';

const Filter = () => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [grouping, setGrouping] = useState(() => {
        return localStorage.getItem('grouping') || "status";
    });
    const [ordering, setOrdering] = useState(() => {
        return localStorage.getItem('ordering') || "priority";
    });
    const changeGroupFilter = (e) => {
        const newGrouping = e.target.value;
        setGrouping(newGrouping);
        localStorage.setItem('grouping', newGrouping); // Save to localStorage
    };

    const changeOrderFilter = (e) => {
        const newOrdering = e.target.value;
        setOrdering(newOrdering);
        localStorage.setItem('ordering', newOrdering); // Save to localStorage
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const data = await response.json();
                setTasks(data.tickets);
                setUsers(data.users);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const [visible, setVisible] = useState(false);
    const toggleBox = () => {
        setVisible(!visible);
    };

    const makeGroup = (tasks) => {
        let key;
        return tasks.reduce((newArr, task) => {
            if (grouping === "user") {
                key = users.find(user => user.id === task.userId)?.name || 'Unknown';
            } else if (grouping === "priority") {
                key = task.priority;
            } else {
                key = task.status;
            }
            if (!newArr[key]) {
                newArr[key] = [];
            }
            newArr[key].push(task);
            return newArr;
        }, {});
    };

    const filterByGroup = makeGroup(tasks);

    // Custom order for priority grouping
    const priorityOrder = [0, 4, 3, 2, 1];

    // Sort the keys if grouping is by priority
    const sortedKeys = grouping === "priority"
        ? Object.keys(filterByGroup).sort((a, b) => priorityOrder.indexOf(Number(a)) - priorityOrder.indexOf(Number(b)))
        : Object.keys(filterByGroup);

    return (
        <div>
            <div className='heading-container'>
                <button id='display_btn' onClick={toggleBox}>
                    <img id='setting' src={Display} alt="" />
                    <span id='display'>Display</span>
                    <img id='dropdown' src={Down} alt="" />
                </button>
                {visible && <div id="optionsBox">
                    <div className='options'>
                        <label htmlFor="grouping">Grouping</label>
                        <select id="grouping" className='select' value={grouping} onChange={changeGroupFilter}>
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className='options'>
                        <label htmlFor="ordering">Ordering</label>
                        <select className='select' id="ordering" value={ordering} onChange={changeOrderFilter}>
                            <option value="title">Title</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                </div>}
            </div>
            <div className="board">
                {sortedKeys.map((key) => (
                    <LayoutColumn key={key} groupKey={key} tasks={filterByGroup[key]} groupBy={grouping} orderBy={ordering} />
                ))}
            </div>
        </div>
    );
};

export default Filter;
