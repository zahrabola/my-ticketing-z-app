import React from 'react';
import TicketCard from './(components)/TicketCard';

const Dashboard = () => {
  return (
    <div className='p-5 '>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      </div>
    </div>
  );
}

export default   Dashboard;

///https://cloud.mongodb.com/v2/66a3b06aadb54846ebdd1ec8#/clusters 
