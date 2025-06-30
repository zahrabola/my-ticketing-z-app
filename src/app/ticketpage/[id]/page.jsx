import React from 'react'
import TicketForm from '@/app/(components)/TicketForm'


const Ticketpage = async ({params }) => {
      const EDITMODE = params.id === "new" ? false : true

      let updateTicketData = {};

      if(EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        console.log(updateTicketData)
      }
  return (

    <div>Ticketpage {params.id}
     <TicketForm />
    </div>
   
  )
}

export default Ticketpage