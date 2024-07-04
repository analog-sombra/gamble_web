import { Divider } from "@nextui-org/react";
import { Input } from "antd";

export default function DirectAdd() {
  return (
    <div className="bg-white rounded-md p-3 flex flex-col gap-3">
      <h2 className="mx-auto text-lg font-medium text-center">
        Direct Add Cash
      </h2>
      <Divider />
      <div className="flex lg:items-center gap-3 lg:flex-row flex-col">
        <div className="flex-1">
          <p className="text-sm font-normal">User Id: </p>
          <Input type="text" placeholder="Enter User Id" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-normal">Transaction Id: </p>
          <Input type="text" placeholder="Enter Transaction Id" />
        </div>
      </div>

      <div className="flex lg:items-center lg:flex-row flex-col gap-3">
        <div className="flex-1">
          <p className="text-sm font-normal">Gateway: </p>
          <Input type="text" placeholder="Enter gateway" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-normal">Amount: </p>
          <Input type="text" placeholder="Enter amount" />
        </div>
      </div>
      <div className="flex">
        <div className="grow"></div>
        <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm text-white">
          Send Payment
        </button>
      </div>
    </div>
  );
}
