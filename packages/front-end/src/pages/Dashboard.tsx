import { UserVault } from "../components/dashboard/UserVault";
import { UserOptions } from "../components/dashboard/UserOptions";

export const Dashboard = () => {
  return (
    <div className="col-start-1 col-end-17">
      <div>
        <UserVault />
        <UserOptions />
      </div>
    </div>
  );
};
