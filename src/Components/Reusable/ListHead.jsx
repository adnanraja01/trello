import React from "react";

const ListHead = (props) => {
  return (
    <div className="px-[1rem] h-[5rem]  w-[27rem] rounded-lg bg-[#242731] py-[1rem]  mt-[2rem] text-s16">
      <p className="text-white ">{props.title}</p>
    </div>
  );
};

export default ListHead;
