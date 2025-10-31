import React from 'react'
import { Eye, Edit2, Trash2, ArrowUpDown } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function JobApplicationsTable ({
  data,
  handleSort,
  onView,
  onEdit,
  onDelete
}) {
  const fields = [
    ['id', 'ID'],
    ['fullName', 'Full Name'],
    ['email', 'Email'],
    ['phoneNumber', 'Phone Number'],
    ['country', 'Country'],
    ['city', 'City'],
    ['jobTitle', 'Job Title'],
    ['experienceLevel', 'Experience Level'],
    ['expectedJoiningDate', 'Joining Date'],
    ['expectedSalary', 'Expected Salary'],
    ['viewJobPostSource', 'Job Post Source'],
    ['degree', 'Degree'],
    ['department', 'Department'],
    ['skills', 'Skills'],
    ['portfolio', 'Portfolio'],
    ['linkedin', 'LinkedIn'],
    ['github', 'GitHub'],
    ['cv', 'CV'],
    ['coverLetter', 'Cover Letter'],
    ['additionalInfo', 'Additional Info'],
    ['reference', 'Reference'],
    ['agreement', 'Agreement'],
    ['date', 'Application Date'],
    ['status', 'Status']
  ]

  return (
    <div className='w-full'>
      {/* DESKTOP TABLE */}
      <div className='overflow-x-auto rounded-xl border border-gray-200 shadow-sm'>
        <table className='min-w-full text-sm'>
          <thead className='bg-[#080156]/10 text-[#080156] uppercase text-xs font-semibold'>
            <tr>
              {fields.map(([key, label]) => (
                <th
                  key={key}
                  onClick={() => handleSort && handleSort(key)}
                  className='px-4 py-3 text-left cursor-pointer hover:text-[#080156]/80 select-none whitespace-nowrap'
                >
                  <div className='flex items-center gap-1'>
                    {label}
                    <ArrowUpDown className='w-3 h-3 opacity-70' />
                  </div>
                </th>
              ))}
              <th className='px-4 py-3 text-center whitespace-nowrap'>Action</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {data.length > 0 ? (
              data.map(row => (
                <tr
                  key={row.id}
                  className='hover:bg-[#080156]/5 transition-all even:bg-gray-50 whitespace-nowrap'
                >
                  {fields.map(([key]) => (
                    <td
                      key={key}
                      className='px-4 py-5 text-center font-medium text-gray-800 align-top max-w-[200px] whitespace-nowrap truncate'
                    >
                      {key === 'status' ? (
                        <StatusBadge status={row[key]} />
                      ) : key === 'agreement' ? (
                        row[key] ? (
                          'Yes'
                        ) : (
                          'No'
                        )
                      ) : key === 'cv' || key === 'coverLetter' ? (
                        row[key] ? (
                          <a
                            href={row[key]}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 hover:underline truncate'
                          >
                            {key.toUpperCase()}
                          </a>
                        ) : (
                          'N/A'
                        )
                      ) : key === 'linkedin' ||
                        key === 'github' ||
                        key === 'portfolio' ||
                        key === 'references' ? (
                        row[key] ? (
                          <a
                            href={row[key]}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 hover:underline truncate'
                          >
                            {row[key].replace(/^https?:\/\//, '')}
                          </a>
                        ) : (
                          'N/A'
                        )
                      ) : (
                        row[key] || 'N/A'
                      )}
                    </td>
                  ))}

                  {/* ACTION BUTTONS */}
                  <td className='px-4 py-3 text-right whitespace-nowrap'>
                    <div className='inline-flex items-center gap-2'>
                      <button
                        onClick={() => onView(row)}
                        className='p-2 rounded-lg bg-[#080156]/10 text-[#080156] hover:bg-[#080156]/20 transition'
                      >
                        <Eye className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => onEdit(row)}
                        className='p-2 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition'
                      >
                        <Edit2 className='w-4 h-4' />
                      </button>
                      <button
                        onClick={() => onDelete(row.id)}
                        className='p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition'
                      >
                        <Trash2 className='w-4 h-4' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={fields.length + 1}
                  className='px-4 py-6 text-center text-gray-500'
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
