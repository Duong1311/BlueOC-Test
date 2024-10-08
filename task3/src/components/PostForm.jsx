import { useState } from "react";
import { addNewPost } from "../redux/apiRequests";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
export default function PostForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    if (!title || !body) {
      alert("Hãy nhập đủ thông tin");
      return;
    }

    addNewPost(dispatch, { userId: 1, id: uuidv4, title, body });
    setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex w-full items-center justify-between p-5 ">
              <h3 className="text-2xl font-semibold">Add new post</h3>
              <div
                className="p-1 ml-auto border-0 cursor-pointer  float-right text-3xl leading-none font-semibold "
                onClick={() => setShowModal(false)}
              >
                x
              </div>
            </div>
            {/*body*/}
            <div className=" w-full relative p-6 flex-auto">
              <div className="flex flex-col w-full gap-1 ">
                <label>Title:</label>
                <input
                  type="text"
                  className="outline-none bg-gray-50 border peer border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label>Body:</label>
                <textarea
                  className="outline-none bg-gray-50 border peer border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
