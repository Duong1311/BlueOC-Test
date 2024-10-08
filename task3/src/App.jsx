import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/apiRequests";
import PostForm from "./components/PostForm";

function App() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="top-0 z-10 ">
        <Header />
      </div>
      {showModal && <PostForm setShowModal={setShowModal} />}

      <div className=" pt-[60px] z-0 h-auto min-h-screen w-full">
        <div className="flex justify-center items-center h-full w-full my-9">
          <div className="w-11/12 bg-slate-100 p-4 rounded-lg shadow-lg ">
            <div className="flex flex-row justify-between items-center">
              <div className="text-2xl font-bold">List Post</div>
              <div
                className=" px-3 py-1 rounded-lg cursor-pointer bg-blue-500 text-white active:bg-blue-600 font-bold"
                onClick={() => setShowModal(true)}
              >
                ADD
              </div>
            </div>
            <div className="flex flex-col rounded-lg mt-4 [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-blue-200">
              <div className="flex justify-between bg-gray-100 p-2">
                <div className="w-1/4 font-bold">UserId</div>
                <div className="w-1/4 font-bold">Id</div>
                <div className="w-1/4 font-bold">Title</div>
                <div className="w-1/4 font-bold">Body</div>
              </div>
              {post?.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-between bg-gray-100 p-2"
                >
                  <div className="w-1/4 font-bold ">{post?.userId}</div>
                  <div className="w-1/4 font-bold">{post?.id}</div>
                  <div className="w-1/4 font-bold line-clamp-3">
                    {post?.title}
                  </div>
                  <div className="w-1/4 font-bold line-clamp-3">
                    {post?.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
