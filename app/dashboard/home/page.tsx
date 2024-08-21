"use client";
import { IoMdClose } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Image } from "antd";

export default function Home() {
  const { currentTab, setCurrentTab } = useTab();

  const handleUploadFile = async () => {
    // const reqUlr = generateUrl('api/payment/login', {}, ParamType.Body)
    // console.info(reqUlr)

    // const response = await apiRequest(`${BASE_URL}/api/payment/login`, HttpMethodType.POST, {
    //   bodyParam: {
    //     "email": "kenkani0408@gmail.com",
    //     "password": "Doremon@0408",
    //   },
    //   includeToke: true,
    //   makeNewTokenReq: true,

    // })
    // console.log(response);
  }


  return (
    <div className="">
      {/* <LoadingBar progress={50} className="text-blue-600" /> */}
      <div className="">
        <div className="flex gap-2 items-center my-5 flex-row justify-between md:flex-row ">
          <button className="mr-4 text-white text-sm bg-blue-500 hover:bg-blue-600 h-8 py-1 px-2 rounded-md">
            <TbReload className="text-lg" />
          </button>
          {
            currentTab === "add" && (
              <button onClick={handleUploadFile} className="w-full md:w-32  mr-2 text-white h-8 text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
                Upload file
              </button>
            )
          }
        </div>
        <div className=" bg-white px-4 rounded-md w-full justify-center gap-3 items-center">
          {/* <TableHead className="border text-center">GPay</TableHead>
                  <TableHead className="border text-center">Phone Pay</TableHead>
                  <TableHead className="border text-center">Paytm</TableHead>
                  <TableHead className="border text-center">PayPal QR</TableHead> */}
          {/* <Switch id="toggle-add" /> */}

          {currentTab == "add" && (
            <div
              className="flex gap-6 sm:justify-center overflow-auto "
              style={{ scrollbarWidth: "none" }}
            >
              {/* . . . . . . . . . . . UPI I'D options . . . . . . . . . . .  */}
              {/* Gpay switch button */}
              <div className="flex flex-col  gap-3 items-center">
                <Switch></Switch>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="border text-center flex items-center flex-col justify-start py-1 px-3 h-24 rounded-md w-20">
                      <Image
                        width={50}
                        height={45}
                        preview={false}
                        className="my-2 flex"
                        src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png"
                        alt=""
                      />
                      <div className="grow"></div>
                      <div className="h-[0.5px] w-full bg-black my-1"></div>
                      <span className="text-center mb-1">UPI id</span>
                    </div>
                  </AlertDialogTrigger>

                  {/* Gpay upi options  */}
                  <AlertDialogContent>
                    <div className="flex flex-col m-0 p-0">
                      <div className="flex justify-start items-center">
                        <span className="font-medium pr-6">
                          Payment gateway details (GPay)
                        </span>
                        {/* Imageg className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                        <div className="grow"></div>

                        <button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">
                          Clear
                        </button>
                        <AlertDialogCancel>
                          <IoMdClose />
                        </AlertDialogCancel>
                      </div>

                      <div className="flex justify-start my-7 border border-x-white">
                        <span className=" pr-12">No.</span>
                        <div className="grow">UPI I&apos;d</div>
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
                <div className="border text-center flex flex-col justify-start items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={50}
                    height={45}
                    preview={false}
                    className="my-2 flex"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                    alt=""
                  />
                  <div className="grow"></div>
                  <div className="h-[0.5px] w-full bg-black my-1"></div>
                  <span className="text-center mb-1">UPI id</span>
                </div>
              </div>

              {/* Phonpe switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col justify-center items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={40}
                    height={40}
                    preview={false}
                    className="w-full my-1 mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
                  />
                  {/* <div className=""></div> */}
                  <div className="h-[0.5px] bg-black w-full my-1 mt-3"></div>
                  <span className="text-center mb-1">UPI id</span>
                </div>
              </div>

              {/* UPI switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border text-center flex flex-col justify-center items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={50}
                    // height={45}
                    preview={false}
                    className="mt-4 flex"
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"
                    alt=""
                  />
                  <div className="grow "></div>
                  <div className="h-[0.5px] w-full bg-black my-1"></div>
                  <span className="text-center mb-1">UPI id</span>
                </div>
              </div>

              {/* Bank detail switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border text-center flex flex-col justify-center items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={37}
                    // height={45}
                    preview={false}
                    className="mt-2  "
                    src="https://www.clipartkey.com/mpngs/m/84-841013_bank-png-blue-bank-icon.png"
                    alt=""
                  />
                  <div className="grow "></div>
                  <div className="h-[0.5px] w-full bg-black my-1"></div>
                  <span className="text-center mb-1">UPI id</span>
                </div>
              </div>

              {/* . . . . . . . . . . . QR options . . . . . . . . . . .  */}
              {/* Gpay QR switch button */}
              <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="border text-center flex items-center flex-col justify-start py-1 px-3 h-24 rounded-md w-20">
                      <Image
                        width={50}
                        height={45}
                        preview={false}
                        className="my-2 flex"
                        src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png"
                        alt=""
                      />
                      <div className="grow"></div>
                      <div className="h-[0.5px] w-full bg-black my-1"></div>
                      <span className="text-center text-sm mb-1">QR code</span>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <div className="flex flex-col m-0 p-0">
                      <div className="flex justify-start items-center">
                        <span className="font-medium pr-6">
                          Payment gateway details (GPay)
                        </span>
                        {/* Imageg className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                        <div className="grow"></div>

                        <button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">
                          Clear
                        </button>
                        <AlertDialogCancel>
                          <IoMdClose />
                        </AlertDialogCancel>
                      </div>

                      <div className="flex justify-start my-7 border border-x-white">
                        <span className=" pr-12">No.</span>
                        <div className="grow">UPI I&apos;d</div>
                        <div className="grow"></div>
                        <div>Status</div>
                      </div>

                      <div className="flex mb-3 justify-start items-center border-x-white">
                        <span className=" pr-12"> 1.</span>
                        {/* <div className="grow"></div> */}
                        <Image
                          width={50}
                          className=" w-20"
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                          alt=""
                        />
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
                <div className="border text-center flex flex-col justify-start items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={50}
                    height={45}
                    preview={false}
                    className="my-2 flex"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                    alt=""
                  />
                  <div className="grow"></div>
                  <div className="h-[0.5px] w-full bg-black my-1"></div>
                  <span className="text-center mb-1 text-sm ">QR code</span>
                </div>
              </div>

              {/* Phonpe  QR switch button */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Switch></Switch>
                <div className="border flex flex-col justify-center items-center py-1 px-3 h-24 rounded-md w-20">
                  <Image
                    width={40}
                    height={40}
                    preview={false}
                    className="w-full my-1 mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
                  />
                  {/* <div className=""></div> */}
                  <div className="h-[0.5px] bg-black w-full my-1 mt-3"></div>
                  <span className="text-center mb-1 text-sm ">QR code</span>
                </div>
              </div>
            </div>
          )}

          {/* ************************** withdraw and add money tabs ************************** */}
          <Tabs
            defaultValue={currentTab}
            className="w-full flex flex-col mt-7 sm:mt-14 mb-0 sm:mb-12"
          >
            <TabsList className=" m-auto mb-0  ">
              <TabsTrigger
                className=" text-lg"
                value="add"
                onClick={() => setCurrentTab("add")}
              >
                Add Money
              </TabsTrigger>
              <TabsTrigger
                className=" text-lg"
                value="withdraw"
                onClick={() => setCurrentTab("withdraw")}
              >
                Withdraw Money
              </TabsTrigger>
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
