import React from 'react'
import TicketForm from '@/app/(components)/TicketForm'

const Ticketpage = ({params}) => {
  return (
    <div>Ticketpage {params.id}
     <TicketForm />
    </div>
   
  )
}

export default Ticketpage