import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ImageUser from "../images/ImageUser.jpg";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authOperations";
import ProfileSettingsModal from "./ProfileSettingsModal";
import { useState } from "react";

export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    Notify.success("Successfully logged out!");
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full border px-12 py-1 mr-4">
          <img
            src={ImageUser}
            alt="user"
            className="h-6 w-6 rounded-full bg-black mr-2"
          />
          <div>
            <p>Geraldine Mailla</p>
          </div>
          <span>
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </span>
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                onClick={toggleModal}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Profile settings
              </a>
            </MenuItem>

            <MenuItem>
              <button
                onClick={handleLogout}
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Log out
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>

      {isOpen && <ProfileSettingsModal />}
    </>
  );
}
