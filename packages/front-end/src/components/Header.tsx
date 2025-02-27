import { Link, useLocation } from "react-router-dom";

import { AppPaths } from "../config/appPaths";
import { Connect } from "src/clients/WalletProvider/components/Connect";

const links = [
  { path: AppPaths.VAULT, label: "Vault" },
  { path: AppPaths.TRADE, label: "Trade Options" },
  { path: AppPaths.DASHBOARD, label: "Dashboard" },
];

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed w-full h-24 t-0 flex items-center px-16 justify-between border-b-2 border-black bg-bone z-10">
      <Link to={AppPaths.VAULT}>
        <img src={"/logo.png"} alt="logo" className="w-20" />
      </Link>

      <div className="flex items-center">
        <div className="mr-4">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`mr-2 border-none bg-transparent p-2 underline-offset-2 ${
                pathname === path ? "underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Connect />
      </div>
    </div>
  );
};
