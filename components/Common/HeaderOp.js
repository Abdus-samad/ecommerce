import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { popup } from "../../data";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useAuth } from "../../context/Auth/auth";

const HeaderOp = () => {
  const { user, Logout } = useAuth();

  const router = useRouter();
  const [show, setShow] = useState(false);

  const dropDown = () => {
    setShow(!show);
  };

  const signOut = () => {
    Logout();
  };
  return (
    <div className="relative ml-3">
      <div className="block w-10 h-10 overflow-hidden cursor-pointer">
        <UserCircleIcon
          src={user.photoURL}
          onClick={dropDown}
          className="block w-full h-auto text-gray-500"
        />
      </div>

      {show && (
        <div className="Popover pop">
          <div>
            {popup.map((item, index) => {
              return (
                <div key={index}>
                  <a
                    style={{
                      display: "flex",
                      alignItems: " center",
                    }}
                    href={item.path}
                    className={`Item ${
                      router.asPath === item.path
                        ? "text-green-800"
                        : "text-gray-800"
                    }`}
                    role="menuitem"
                  >
                    <span>{item.title}</span>
                  </a>
                </div>
              );
            })}
          </div>

          <a
            onClick={signOut}
            style={{
              display: "flex",
              alignItems: " center",
            }}
            className="Item"
            role="menuitem"
          >
            <span>Logout</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderOp;
