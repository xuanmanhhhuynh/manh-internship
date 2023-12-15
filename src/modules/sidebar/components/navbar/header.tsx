"use client";
import React, { use, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="" alt="" />
        <p>piece</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path
            fill="none"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16 10-4 4-4-4"
          ></path>
        </svg>
      </div>
      <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m6.585 14.888-.101.113c-.286.322-.484.584-.484 1h12c0-.416-.198-.678-.484-1l-.101-.113c-.21-.233-.455-.505-.7-.887-.213-.33-.355-.552-.458-.79-.209-.483-.256-1.036-.4-2.71-.214-3.5-1.357-5.5-3.857-5.5s-3.643 2-3.857 5.5c-.144 1.674-.191 2.227-.4 2.71-.103.238-.245.46-.457.79a6.583 6.583 0 0 1-.701.887Zm10.511-2.313c-.083-.34-.131-.861-.241-2.147-.113-1.811-.469-3.392-1.237-4.544C14.8 4.657 13.57 4 12 4c-1.571 0-2.8.656-3.618 1.883-.768 1.152-1.124 2.733-1.237 4.544-.11 1.286-.158 1.807-.241 2.147-.062.254-.13.373-.46.885a5.182 5.182 0 0 1-.57.722c-.074.082-.15.167-.232.262C5.35 14.786 5 15.266 5 16a1 1 0 0 0 1 1h3a3 3 0 0 0 6 0h3a1 1 0 0 0 1-1c0-.735-.35-1.215-.642-1.557-.082-.095-.158-.18-.232-.262a5.176 5.176 0 0 1-.57-.722c-.33-.512-.398-.631-.46-.885ZM14 17.001h-4a2 2 0 1 0 4 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className={!open ? "bg-purple-300 " : ""}>
          <svg
            onClick={() => setOpen(!open)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
