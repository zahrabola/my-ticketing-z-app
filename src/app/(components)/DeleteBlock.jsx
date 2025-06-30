"use client"
import React from "react";
import { FaX } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div className="text-red-400 hover:cursor-pointer hover:text-red-200"
   >
      <FaX  onClick={deleteTicket}  />

      </div>
  );
};

export default DeleteBlock;
