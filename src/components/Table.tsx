import { useState } from "react";
import { formatDate } from "../utils";

export const Table = () => {
  const pages = new Array(100).fill(
    ({
      action: 'Sent for approval',
      description: '+56-955-510-831',
      date: new Date('2020-05-06 11:24:08'),
      status: true,
    })
  );

  const [page, setPage] = useState(1);
  const [slice, setSlice] = useState(new Array(10).fill(
    ({
      action: 'Sent for approval',
      description: '+56-955-510-831',
      date: new Date('2020-05-06 11:24:08'),
      status: true,
    })
  ));

  console.log(slice)

  const filteredData = (column: string) => {
    const sortedSlice =  [...slice].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });

    setSlice(sortedSlice);
  };

  return (
    <div className="p-4 w-full h-full bg-[#1B1E20] rounded-md text-white flex flex-col gap-4">
      <p className="text-2xl font-bold">Interaction History</p>
      <table className="w-full relative">
        <thead>
          <tr className="text-left">
            <th>
              Actions
            </th>
            <th>
              Description
            </th>
            <th>
              Date
            </th>
            <th>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="mt-2" />
              <div className="absolute w-full h-px bg-[#FFFFFF] opacity-10" />
              <div className="mt-2" />
            </td>
          </tr>
          {slice.map((row, index) => (
            <tr key={index} className={`${index % 2 !== 0 && 'bg-[#282B2C]'}`}>
              <td className="py-2 font-bold">
                {row.action}
              </td>
              <td className="font-bold">
                {row.description}
              </td>
              <td className="font-bold">
                {formatDate(row.date)}
              </td>
              <td className="font-bold" style={{ color: row.status ? '#BEFF38' : '#FF4F4F' }}>
                {row.status ? 'Successful' : 'Not Successful'}
              </td>
            </tr>
          ))}
        </tbody>
        {/* <div className="mt-4">
          <ul className="flex gap-2">
            {
              pages.map((i) => {
                return (
                  <div>
                    {i}
                  </div>
                )
              })
            }
          </ul>
        </div> */}
      </table>
    </div>
    
  );
}