import React, { cache } from 'react'
import TicketForm from '@/app/(components)/TicketForm'

const getTicketById = async(id) => {

    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
     cache:"no-store",
    });
    
   if(!res.ok){
    throw new Error("Failed to get ticket.")
  }

return res.json();

}


const Ticketpage = async ({params }) => {
      const EDITMODE = params.id === "new" ? false : true

      let updateTicketData = {};

      if(EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        console.log(updateTicketData)
        updateTicketData= updateTicketData.foundTicket;

      } else {
        updateTicketDatam= {
          _id:"new"
        }
      }
  return (
 ///{params.id}
    <div>Ticketpage
     <TicketForm ticket={updateTicketData} />
    </div>
   
  )
}

export default Ticketpage