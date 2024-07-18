"use client";
import { IoMdClose } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TbReload } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import LoadingBar from "react-top-loading-bar";
import {
  MaterialSymbolsAttachMoney,
  MaterialSymbolsDone,
  MaterialSymbolsPerson,
  MaterialSymbolsPersonRaisedHand,
  MaterialSymbolsWifiRounded,
} from "@/components/Icon";
import AddMoney from "./add-money";
import WithdrawMoney from "./withdraw-money";
import { useTab } from "@/state/tabState";

export default function Home() {
  const {currentTab, setCurrentTab} = useTab()

  return (
    <div className="">
      <LoadingBar progress={50} className="text-blue-600"/>
      {/* Dashboard data */}
      {/* <div className={`flex flex-col lg:flex-row justify-between gap-3`}>
        <div className="flex-1">
          <div className="bg-white p-3 rounded-md flex flex-wrap gap-6 justify-between ">
            {cardData.map((item) => (
              <SimpleCard count={item.count} title={item.name} key={item.name}>
                {item.icon}
              </SimpleCard>
            ))}
          </div> */}

      {/* User */}
      {/* <div className="relative mt-3 bg-white p-3">
            <h3 className="text-xl p-3">Users</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Bet</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Wallet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.betCompleted}</TableCell>
                    <TableCell>
                      {user.status == "active" ? (
                        <Tag color="green">{user.status}</Tag>
                      ) : (
                        <Tag color="red">{user.status}</Tag>
                      )}
                    </TableCell>
                    <TableCell>{user.wallet}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Button className="w-full">View All</Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div> */}
      {/* mathc */}
      {/* <div className="bg-white p-3 rounded-t-small">
          <h3 className="text-xl p-3">Live Match Data</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Bet</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liveMatchData.map((match) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">{match.name}</TableCell>
                  <TableCell>{match.totalBet}</TableCell>
                  <TableCell>
                    {match.status == "active" ? (
                      <Tag color="green">{match.status}</Tag>
                    ) : (
                      <Tag color="red">{match.status}</Tag>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <Button className="w-full">View All</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div> 
      </div>
      */}
      <div className="">
        <div className="flex gap-2 items-center my-5 flex-row justify-between md:flex-row ">
          <button className="mr-4 text-white text-sm bg-blue-500 hover:bg-blue-600 h-8 py-1 px-2 rounded-md">
            <TbReload className="text-lg" />
          </button>
          {
            currentTab === "add" &&
            <button className="w-full md:w-32  mr-2 text-white h-8 text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
              Upload file
            </button>
          }
        </div>
        <div className=" bg-white px-4 rounded-md w-full justify-center gap-3 items-center">


          {/* <TableHead className="border text-center">GPay</TableHead>
                  <TableHead className="border text-center">Phone Pay</TableHead>
                  <TableHead className="border text-center">Paytm</TableHead>
                  <TableHead className="border text-center">PayPal QR</TableHead> */}
          {/* <Switch id="toggle-add" /> */}

          {
            currentTab == 'add' &&
            <div className="flex gap-6  justify-center overflow-auto " style={{ scrollbarWidth: "none" }}>
              {/* . . . . . . . . . . . UPI I'D options . . . . . . . . . . .  */}
              {/* Gpay switch button */}
              <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="border text-center flex flex-col py-1 px-3 h-34 rounded-md w-20">
                      <img className="w-13 " src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" />
                      <div className="h-[0.5px] bg-black"></div>
                      <span className="text-center">UPI id</span>
                    </div>
                  </AlertDialogTrigger>

                  {/* Gpay upi options  */}
                  <AlertDialogContent>
                    <div className="flex flex-col m-0 p-0">

                      <div className="flex justify-start items-center">
                        <span className="font-medium pr-6">Payment gateway details (GPay)</span>
                        {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                        <div className="grow"></div>

                        <button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">Clear</button>
                        <AlertDialogCancel>
                          <IoMdClose />
                        </AlertDialogCancel>
                      </div>

                      <div className="flex justify-start my-7 border border-x-white">
                        <span className=" pr-12">No.</span>
                        <div className="grow">UPI I'd</div>
                        <div className="grow"></div>
                        <div>Status</div>
                      </div>

                      <div className="flex mb- justify-start border-x-white">
                        <span className=" pr-12"> 1.</span>
                        <div className="grow">paytm@okici</div>
                        <div className="grow"></div>
                        <div>Active</div>
                      </div>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              {/* Paytem switch button */}
              <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <div className="border text-center flex flex-col py-1 px-3 h-34 rounded-md w-20">
                  <img className="w-13 " src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256" alt="" />
                  <div className="h-[0.5px] bg-black"></div>
                  <span className="text-center">UPI id</span>
                </div>
              </div>

              {/* Phonpe switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col py-1 px-3 h-34 rounded-md justify-center item-center w-20">
                  <img className="w-11 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s" alt="" />
                  <div className="h-[1.5px] my-1 bg-black"></div>
                  <span className="text-center">UPI id</span>
                </div>
              </div>

              {/* UPI switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col py-3 px-3 h-34 rounded-md justify-between item-center w-20">
                  <img className="w-11 my-1" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="" />
                  <div className="h-[1.5px] my-1 bg-black"></div>
                  <span className="text-center">UPI id</span>
                </div>
              </div>


              {/* Bank detail switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col py-1 px-3 h-34 rounded-md justify-center item-center w-20">
                  <img className="w-10 my-2 flex" src="https://www.clipartkey.com/mpngs/m/84-841013_bank-png-blue-bank-icon.png" alt="" />
                  <div className="h-[1.5px] my-1 bg-black"></div>
                  <span className="text-center text-xs">AC detail</span>
                </div>
              </div>

              {/* . . . . . . . . . . . QR options . . . . . . . . . . .  */}
              {/* Gpay QR switch button */}
              <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="border text-center flex flex-col py-1 px-3 h-34 rounded-md w-20">
                      <img className="w-13 " src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" />
                      <div className="h-[0.5px] bg-black"></div>
                      <span className="text-center text-sm py-1">QR code</span>
                    </div>
                  </AlertDialogTrigger>

                  {/* Gpay upi options  */}
                  <AlertDialogContent>
                    <div className="flex flex-col m-0 p-0">

                      <div className="flex justify-start items-center">
                        <span className="font-medium pr-6">Payment gateway details (GPay)</span>
                        {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                        <div className="grow"></div>

                        <button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">Clear</button>
                        <AlertDialogCancel>
                          <IoMdClose />
                        </AlertDialogCancel>
                      </div>

                      <div className="flex justify-start my-7 border border-x-white">
                        <span className=" pr-12">No.</span>
                        <div className="grow">UPI I'd</div>
                        <div className="grow"></div>
                        <div>Status</div>
                      </div>

                      <div className="flex mb-3 justify-start items-center border-x-white">
                        <span className=" pr-12"> 1.</span>
                        {/* <div className="grow"></div> */}
                        <img className=" w-20" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                        <div className="grow"></div>
                        <div>Active</div>
                      </div>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              {/* Paytem QR switch button */}
              <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <div className="border text-center flex flex-col py-1 px-3 h-34 rounded-md w-20">
                  <img className="w-13 " src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256" alt="" />
                  <div className="h-[0.5px] bg-black"></div>
                  <span className="text-center text-sm py-1">QR code</span>
                </div>
              </div>

              {/* Phonpe  QR switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col py-1 px-3 h-34 rounded-md justify-center item-center w-20">
                  <img className="w-11 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s" alt="" />
                  <div className="h-[1.5px] my-1 bg-black"></div>
                  <span className="text-center text-sm py-1">QR code</span>
                </div>
              </div>
            </div>
          }


          {/* withdraw and add money tabs */}

          <Tabs defaultValue="add" className="w-full flex flex-col mt-7 sm:mt-14 mb-0 sm:mb-12">
            <TabsList className=" m-auto mb-0  ">
              <TabsTrigger className=" text-lg" value="add" onClick={() => setCurrentTab("add")}>Add Money</TabsTrigger>
              <TabsTrigger className=" text-lg" value="withdraw" onClick={() => setCurrentTab("withdraw")}>Withdraw Money</TabsTrigger>
            </TabsList>

            <TabsContent className="m-0 p-0" value="add">
              <AddMoney />
            </TabsContent>

            <TabsContent value="withdraw">
              <WithdrawMoney />
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    name: "ALL users",
    count: "284739",
    icon: (
      <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsPerson />
      </span>
    ),
  },
  {
    name: "Total Money",
    count: "₹20934",
    icon: (
      <span className="text-yellow-500 bg-yellow-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsAttachMoney />
      </span>
    ),
  },
  {
    name: "Participant",
    count: "400+",
    icon: (
      <span className="text-teal-500 bg-teal-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsPersonRaisedHand />
      </span>
    ),
  },
  {
    name: "Live today",
    count: "8",
    icon: (
      <span className="text-blue-500 bg-blue-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsWifiRounded />
      </span>
    ),
  },
  {
    name: "Completed",
    count: "4",
    icon: (
      <span className="text-green-500 bg-green-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsDone />
      </span>
    ),
  },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "inactive",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
];
type LiveMatchType = {
  id: number;
  key: string;
  name: string;
  totalBet: string;
  status: string;
};

const liveMatchData: LiveMatchType[] = [
  {
    id: 0,
    key: "123-12-123",
    name: "Monday Mania",
    totalBet: "₹50320",
    status: "active",
  },
  {
    id: 1,
    key: "123-12-123",
    name: "Monday Masala",
    totalBet: "₹2342340",
    status: "inactive",
  },
  {
    id: 2,
    key: "123-12-123",
    name: "Final Frenzy",
    totalBet: "₹52234",
    status: "active",
  },
  {
    id: 3,
    key: "123-12-123",
    name: "Bracket Buster Bonanza",
    totalBet: "₹4635343",
    status: "inactive",
  },
  {
    id: 4,
    key: "123-12-123",
    name: "Madness Mayhem",
    totalBet: "₹59023",
    status: "active",
  },
  {
    id: 5,
    key: "123-12-123",
    name: "Slam Dunk Spectacular",
    totalBet: "₹20374",
    status: "inactive",
  },
  {
    id: 6,
    key: "123-12-123",
    name: "Court-side Showdown",
    totalBet: "₹128300",
    status: "active",
  },
];