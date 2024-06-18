import React from "react";

function Loading() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="flex-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="w-48 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-2"></div>
            <div className="w-64 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full h-10 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-zinc-600 dark:text-zinc-400">
              <th className="py-2">
                <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              </th>
              <th className="py-2">
                <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              </th>
              <th className="py-2">
                <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              </th>
              <th className="py-2">
                <div className="w-16 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              </th>
              <th className="py-2">
                <div className="w-16 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <tr
                  className="border-t border-zinc-200 dark:border-zinc-700"
                  key={index}
                >
                  <td className="py-2 flex items-center space-x-2">
                    <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-600 rounded-full animate-pulse"></div>
                    <div>
                      <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-2"></div>
                      <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="w-40 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-2"></div>
                    <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                  </td>
                  <td className="py-2">
                    <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                  </td>
                  <td className="py-2 flex items-center space-x-2">
                    <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-600 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                  </td>
                  <td className="py-2">
                    <div className="w-16 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4">
          <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
          <div className="flex items-center space-x-2">
            <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
            <div className="w-16 h-8 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
              <div className="w-6 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <div className="w-48 h-6 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-4"></div>
        <div className="w-64 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-6"></div>
        <div className="space-y-4">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-600 rounded-full animate-pulse"></div>
                  <div>
                    <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-2"></div>
                    <div className="w-32 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-16 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse mb-2"></div>
                  <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-600 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
