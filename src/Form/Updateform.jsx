import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Updateform = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const [value, setValue] = useState({
    relation: "",
    name: "",
    gender: "",
  });

  console.log(value);

  const uid = localStorage.getItem("id");

  useEffect(() => {
    axios
      .post("https://dev.hrmnest.com/v1/viewDependents", {
        uuid: uid,
      })
      .then((res) => {
        console.log(res, "uuuuuuuuuuuuuuuuuuuuu");
        setDetails(res.data[0]);
        console.log("");
        setValue({
          relation: res.data[0].relation,
          name: res.data[0].name,
          gender: res.data[0].gender,
        });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [uid]);

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const updateHandler = () => {
    axios.put("https://dev.hrmnest.com/v1/updateDependents", {
      uuid: uid,
      relation: value.relation,
      name: value.name,
      gender: value.gender,
      employee: "2d46f41a-dacf-4e5e-b570-0cfa1a5141d4",
      date_of_birth: -29091999,
    });
    alert("Updated Successfully");
    navigate("/view");
  };

  console.log(value);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", uid);

  console.log("hhhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbh", details);
  return (
    <div grid place-items-center>
      <div className='w-full  place-items-center'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-auto'>
          <h2>EDIT RELATIVE</h2>
          <div className='mb-4 relative '>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='relation'
              type='text'
              placeholder='RELATION WITH EMPLOYEE'
              onChange={handleChange}
              value={value.relation}
            />
          </div>
          <div className='mb-4'>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='NAME OF RELATIVE'
              onChange={handleChange}
              value={value.name}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
          {/* <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='contact' type="text" placeholder="CONTACT NUMBER" value={details[0].contact} />
      </div> */}
          <div className='mb-4'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='dob'
              type='date'
              placeholder='DATE OF BIRTH'
            />
          </div>

          <div className='flex items-center justify-center'>
            <button
              onClick={updateHandler}
              className='bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateform;
