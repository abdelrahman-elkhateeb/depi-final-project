

const Table = () => {

  return (
    <>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg  max-w-2xl  mx-auto  " >
<div className="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
<div className="flex justify-between items-center w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
  <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 w-[45%]"></div>
  <button
    type="button"
    className="ml-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  >
    Add task
  </button>
</div>





    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Task
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Category
                      
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Priority
                       
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Deta

                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Design Homepage
        </th>
        <td className="px-6 py-4">
            UI/UX
        </td>
        <td className="px-6 py-4">
            High
        </td>
        <td className="px-6 py-4">
            01/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Develop API
        </th>
        <td className="px-6 py-4">
            Backend Development
        </td>
        <td className="px-6 py-4">
            Medium
        </td>
        <td className="px-6 py-4">
            15/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Write Documentation
        </th>
        <td className="px-6 py-4">
            Documentation
        </td>
        <td className="px-6 py-4">
            Low
        </td>
        <td className="px-6 py-4">
            30/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Test Application
        </th>
        <td className="px-6 py-4">
            Quality Assurance
        </td>
        <td className="px-6 py-4">
            High
        </td>
        <td className="px-6 py-4">
            05/12/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Prepare Deployment
        </th>
        <td className="px-6 py-4">
            Deployment
        </td>
        <td className="px-6 py-4">
            Medium
        </td>
        <td className="px-6 py-4">
            20/12/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
</tbody>
<tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Design Homepage
        </th>
        <td className="px-6 py-4">
            UI/UX
        </td>
        <td className="px-6 py-4">
            High
        </td>
        <td className="px-6 py-4">
            01/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Develop API
        </th>
        <td className="px-6 py-4">
            Backend Development
        </td>
        <td className="px-6 py-4">
            Medium
        </td>
        <td className="px-6 py-4">
            15/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Write Documentation
        </th>
        <td className="px-6 py-4">
            Documentation
        </td>
        <td className="px-6 py-4">
            Low
        </td>
        <td className="px-6 py-4">
            30/11/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Test Application
        </th>
        <td className="px-6 py-4">
            Quality Assurance
        </td>
        <td className="px-6 py-4">
            High
        </td>
        <td className="px-6 py-4">
            05/12/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Prepare Deployment
        </th>
        <td className="px-6 py-4">
            Deployment
        </td>
        <td className="px-6 py-4">
            Medium
        </td>
        <td className="px-6 py-4">
            20/12/2024
        </td>
        <td className="px-6 py-4 text-right">
            <a href="/Editpage" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</a>
        </td>
    </tr>
</tbody>

    </table>
</div>

    </>
  )
}

export default Table
