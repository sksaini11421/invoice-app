import React from 'react'

const ClientDetails = ({clientAddress,clientName}) => {
    return (
        <>
            {/* Clients Details */}

            <section className="mt-5">
                <h2 className="text-xl uppercase">{clientName}</h2>
                <p>{clientAddress}</p>
            </section>

            {/* End of Clients Details */}
        </>
    )
}

export default ClientDetails