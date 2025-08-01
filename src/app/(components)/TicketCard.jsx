import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

Link

const TicketCard = ({ticket}) => {

/*
const formatTimeStamp = (timestamp) => {
  const options = {
    year:"numeric",
    month: "2-digit",
    day:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
    hour12: true,
  }
  
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleString("en-gb", options);


  return formattedDate


}

{formatTimeStamp(ticket.createdAt)}
*/



  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay  priority={ticket.priority} />
        <div className="ml-auto">
          {" "}
          <DeleteBlock id={ticket._id}/>
        </div>
      </div>

      <Link href={`/TicketPage/${ticket._id}`}  style={{display: "contents"}}>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <hr className="h-px border-0 bg-page mb-2" />
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          <p className="text-xs my-1">{new Date(ticket.createdAt).toDateString()}</p>
          <ProgressDisplay progress={ticket.progress}/>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status}/>
        </div>
      </div>
         </Link>
    </div>
  );
};

export default TicketCard;
