import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { LuPartyPopper } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

const PartyCard = ({ party }) => {

  return (
    <Link
      to={`/partys/details/${party._id}`}
      className='block'
    >
      <div className='border-2 border-blue-400 rounded-lg px-4 py-2 m-4 relative hover:bg-slate-700'>
        <div className='flex justify-start items-center gap-x-2'>
          <LuPartyPopper className='text-blue-400 text-2xl' />
          <h2 className='my-2'>{party.name}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <FaHome className='text-blue-400 text-2xl' />
          <h2 className='my-2'>{party.place}</h2>
        </div>
        <div>
          <img src={party.image} alt={party.name} className='w-full object-cover h-48 my-2 rounded-2xl' />
        </div>
        <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
          <Link to={`/partys/details/${party._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
          </Link>
          <Link to={`/partys/edit/${party._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
          </Link>
          <Link to={`/partys/delete/${party._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
          </Link>
        </div>
      </div>
    </Link>

  );
};

export default PartyCard;