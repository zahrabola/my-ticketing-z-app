import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  
  console.log("Unique Categories:", uniqueCategories);

  return (
    <div className="p-5 ">
      <div>
         {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => {
            console.log("Unique Category:", uniqueCategory);
            return (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                  {tickets
                    .filter((ticket) => ticket.category === uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <TicketCard
                        id={_index}
                        key={_index}
                        ticket={filteredTicket}
                      />
                    ))}
                </div>
              </div>
            );
          })}
       

{/*  










<div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
               <TicketCard />
               <TicketCard />
               <TicketCard /> 
      </div> */}
      
      
      </div>
    </div>
  );
};

export default Dashboard;

///https://cloud.mongodb.com/v2/66a3b06aadb54846ebdd1ec8#/clusters
///https://github.com/007tickooayush/assistance-ticket-system