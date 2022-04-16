import React from 'react'

const TableForm = ({ description, setDescription }) => {
    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor='description'>Item Description</label>
                <input type="text" name="description" id="description"
                    placeholder="Item description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
        </>
    )
}

export default TableForm