import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const View = () => {
  const [data, setData] = useState({
    relation: "",
    name: "",
    gender: "",
  });
  const [details, setDetails] = useState({
    relation: "",
    name: "",
    gender: "",
  });

  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .post("https://dev.hrmnest.com/v1/viewDependents", {
        uuid: id,
      })
      .then((res) => {
        console.log(res.data);
        setData({
          relation: res.data[0].relation,
          name: res.data[0].name,
          gender: res.data[0].gender,
          date_of_birth: -29091999,
        });
      });
  }, [id]);

  useEffect(() => {
    setDetails(data);
  }, [data]);

  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", details);

  const deleteHandler = () => {
    axios
      .delete(`https://dev.hrmnest.com/v1/deleteDependents/${id}`)
      .then(localStorage.clear());
    alert("Deleted SuccessFully");
    navigate("/");
  };

  return (
    <div>
      <div className='bg-gray-900 max-w-xl rounded overflow-hidden shadow-lg'>
        <img
          className='w-full'
          src='https://img.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_274679-9896.jpg?w=2000'
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>
            Steve Harvey's CONNECTION
          </div>
          <table className='px-4'>
            <thead>
              <tr>
                <th className='px-6'>Relation</th>
                <th className='px-6'>Name</th>
                <th className='px-6'>Gender</th>
                <th className='px-6'>D.O.B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-6'>{data?.relation}</td>
                <td className='px-6'>{data?.name}</td>
                <td className='px-6'>{data?.gender}</td>
                <td className='px-6'>{data?.date_of_birth}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type='button'
          onClick={() => {
            navigate("/");
          }}
          className='text-green-600 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 '
        >
          GO BACK{" "}
        </button>
        <button
          type='button'
          onClick={() => navigate("/update")}
          className='text-gray-300 bg-black-600 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 '
        >
          UPDATE
        </button>

        <button
          type='button'
          onClick={deleteHandler}
          className='text-red-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 '
        >
          DELETE{" "}
        </button>
      </div>
    </div>
  );
};

export default View;
