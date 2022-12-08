import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const [data, setData] = useState({
    relation: "",
    name: "",
    gender: "",
  });

  const [uid, setUid] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("https://dev.hrmnest.com/v1/viewDependents", {
        uuid: uid,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [uid]);
  console.log(data);

  const post = (event) => {
    event.preventDefault();

    // console.log(temp)
    axios
      .post("https://dev.hrmnest.com/v1/addDependents", {
        relation: event.target.relation.value,
        name: event.target.name.value,
        gender: event.target.gender.value,
        contactno: event.target.contact.value,
        employee: "b5009b71-6cee-4589-aca6-866079e3c6be",
        date_of_birth: -29091999,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.uuid);
        localStorage.setItem("id", res.data.uuid);
        setUid(res.data.uuid);
      });
    navigate("/view");
    alert("Connection Added SuccessFully");
  };

  //  let id = localStorage.getItem('id')

  //  const deleteHandler = () => {
  //    axios.delete(`https://dev.hrmnest.com/v1/deleteDependents/${id}`).then(setCheck(true))
  //    localStorage.clear()
  //    alert("Deleted SuccessFully")
  //  }

  //  const updateHandler = () => {
  //   axios.post('https://dev.hrmnest.com/v1/updateDependents', {
  //     "uuid": uid,
  //     "relation": details[0].relation,
  //     "name":details[0].name,
  //     "gender": details[0].gender,
  //     "employee": "b5009b71-6cee-4589-aca6-866079e3c6be",
  //     "date_of_birth": -29091999
  //   })
  //  }
  //  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',details[0].relation);

  return (
    <div className='grid place-items-center '>
      <div className='w-full  place-items-center'>
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-auto'
          onSubmit={post}
        >
          <h2>ADD RELATIVE</h2>
          <div className='mb-4 relative '>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='relation'
              type='text'
              placeholder='RELATION WITH EMPLOYEE'
            />
          </div>
          <div className='mb-4'>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='NAME OF RELATIVE'
            />
          </div>
          <div className='mb-4'>
            <span className='mb-4 font-semibold text-gray-600 dark:text-white'>
              GENDER
            </span>
            <ul className='items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
              <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                <div className='flex items-center pl-3'>
                  <input
                    id='horizontal-list-radio-license'
                    type='radio'
                    value='male'
                    name='gender'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                  <label
                    for='horizontal-list-radio-license'
                    className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Male
                  </label>
                </div>
              </li>
              <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                <div className='flex items-center pl-3'>
                  <input
                    id='horizontal-list-radio-id'
                    type='radio'
                    value='female'
                    name='gender'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                  <label
                    for='horizontal-list-radio-id'
                    className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Female
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div class='mb-4'>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='contact'
              type='text'
              placeholder='CONTACT NUMBER'
            />
          </div>
          <div class='mb-4'>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='dob'
              type='date'
              placeholder='DATE OF BIRTH'
            />
          </div>

          <div class='flex items-center justify-center'>
            <button
              class='bg-transparent hover:bg-gray-700 text-black  py-2 px-4 mr-2 rounded focus:outline-1 focus:shadow-outline'
              type='button'
              onClick={() => navigate("/")}
            >
              BACK
            </button>
            <button
              class='bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
