import React from 'react'

const Dates = ({invoiceDate,dueDate,invoiceNumber}) => {
    return (
        <>
            {/* Dates */}

            <article className="my-5 flex flex-col
        items-end justify-end">
                <ul>
                    <li className='p-1'>
                        <span className="font-bold">
                            Invoice Number:
                        </span>
                        {invoiceNumber}
                    </li>
                    <li className='p-1'>
                        <span className="font-bold">
                            Invoice Date:
                        </span>
                        {invoiceDate}
                    </li>
                    <li className='p-1'>
                        <span className="font-bold">
                            Due Date:
                        </span>
                        {dueDate}
                    </li>
                </ul>
            </article>
            {/* End of Dates */}
        </>
    )
}

export default Dates