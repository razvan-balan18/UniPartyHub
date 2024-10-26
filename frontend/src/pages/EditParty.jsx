import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditParty = () => {

  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [budget, setBudget] = useState(0);
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [people, setPeople] = useState([]);
  const [peopleInput, setPeopleInput] = useState('');

  const [tasks, setTasks] = useState([]);
  const [tasksInput, setTasksInput] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/partys/${id}`)
    .then((res) => {
      setName(res.data.name);
      setPlace(res.data.place);
      setDate(res.data.date);
      setImage(res.data.image);
      setBudget(res.data.budget);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert("error");
      console.log(error);
    })
  }, [])

  const handleSaveParty = () => {
    const data = {
      name,
      place,
      budget,
      date: new Date(date).toISOString(),
      image,
      people: people, 
      tasks: tasks   
  };

    setLoading(true);
    axios
    .put(`http://localhost:3000/partys/${id}`, data)
    .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert("error")
        console.log("error");
      })
  }

  const addPerson = () => {
    if (peopleInput.trim()) {
      setPeople([...people, peopleInput]);
      setPeopleInput('');
    }
  };

  const addTask = () => {
    if (tasksInput.trim()) {
      setTasks([...tasks, tasksInput]);
      setTasksInput('');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-sm sm:text-base'>
      <div className='p-4'>
        <h1 className='text-3xl my-4 text-white'>Edit Party</h1>
        {
          loading ? <Spinner /> : ''
        }
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Place</label>
            <input
              type="text"
              value={place}
              onChange={(e) => { setPlace(e.target.value) }}
              className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Budget</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => { setBudget(e.target.value) }}
              className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => { setImage(e.target.value) }}
              className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>People</label>
            <div className='flex'>
              <input
                type="text"
                value={peopleInput}
                onChange={(e) => { setPeopleInput(e.target.value) }}
                className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
                placeholder='Add person'
              />
              <button
                onClick={addPerson}
                className='bg-sky-400 px-4 py-2 ml-2 hover:bg-blue-300 rounded-full'
              >
                Add
              </button>
            </div>
            <ul>
              {people.map((person, index) => (
                <li key={index} className='text-gray-600'>{person}</li>
              ))}
            </ul>
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Tasks</label>
            <div className='flex'>
              <input
                type="text"
                value={tasksInput}
                onChange={(e) => { setTasksInput(e.target.value) }}
                className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
                placeholder='Add task'
              />
              <button
                onClick={addTask}
                className='bg-sky-400 px-4 py-2 ml-2 hover:bg-blue-300 rounded-full'
              >
                Add
              </button>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className='text-gray-600'>{task}</li>
              ))}
            </ul>
          </div>
          <button className='p-2 bg-sky-400 m-8 hover:bg-blue-300 rounded-full' onClick={handleSaveParty}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditParty