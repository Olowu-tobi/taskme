import React, { useEffect } from "react";
import { useTasks } from "../../features/hooks/useTasks";

function AllTasks() {
  const { fetchTasks, loading, tasks } = useTasks();
  useEffect(() => {
    if (!tasks.length) {
      fetchTasks();
    }
  }, [fetchTasks, tasks]);

  return (
    <div className="w-full grid mt-8 px-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {loading
        ? "Loading..."
        : tasks.map((singleTask) => (
            <div
              key={singleTask._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singleTask.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {singleTask.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {`Buy for $${singleTask.price}`}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))}
    </div>
  );
}

export default AllTasks;
