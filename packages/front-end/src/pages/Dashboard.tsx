import { UserVault } from "../components/dashboard/UserVault";
import { UserOptionsList } from "../components/dashboard/UserOptionsList";
import { UserEpochPNL } from "../components/dashboard/UserEpochPNL";

export const Dashboard = () => {
  return (
    <div className="col-start-1 col-end-17">
      <div className="w-full mb-24">
        <UserVault />

        <UserEpochPNL />

        <UserOptionsList />
      </div>
    </div>
  );
};
