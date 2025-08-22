import React from 'react'

function List() {
  return (
    <>
  <div className="p-[50px] pt-[80px]">
  <p className="text-center text-2xl pb-[50px]">
    Ready to Use. Designed for Action.
  </p>
  <table className="table-auto border-collapse border border-[#E8F9FF] rounded-[10px] w-full">
    <thead>
      <tr className="bg-[#E8F9FF]">
        <th className="border border-[#E8F9FF] px-4 py-2">Toolkit Name</th>
        <th className="border border-[#E8F9FF] px-4 py-2">Description</th>
        <th className="border border-[#E8F9FF] px-4 py-2">Format</th>
        <th className="border border-[#E8F9FF] px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-[#E8F9FF] px-4 py-2">Campaign Starter Pack</td>
        <td className="border border-[#E8F9FF] px-4 py-2">Launch a local issue-based campaign</td>
        <td className="border border-[#E8F9FF] px-4 py-2">PDF</td>
        <td className="border border-[#E8F9FF] px-4 py-2 text-[#C5BAFF]">↓ Download</td>
      </tr>
      <tr>
        <td className="border border-[#E8F9FF] px-4 py-2">Volunteer Orientation Guide</td>
        <td className="border border-[#E8F9FF] px-4 py-2">For workshop volunteers and hosts</td>
        <td className="border border-[#E8F9FF] px-4 py-2">PDF</td>
        <td className="border border-[#E8F9FF] px-4 py-2 text-[#C5BAFF]">↓ Download</td>
      </tr>
      <tr>
        <td className="border border-[#E8F9FF] px-4 py-2">Constitution + Qur'an Reflection Sheet</td>
        <td className="border border-[#E8F9FF] px-4 py-2">Aligning values with civic engagement</td>
        <td className="border border-[#E8F9FF] px-4 py-2">PDF</td>
        <td className="border border-[#E8F9FF] px-4 py-2 text-[#C5BAFF]">↓ Download</td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  )
}

export default List