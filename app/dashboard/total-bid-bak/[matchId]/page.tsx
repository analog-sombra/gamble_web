// "use client";
// import SimpleCard from "@/components/Dashboard/SimpleCard";
// import {
//   MaterialSymbolsAttachMoney,
//   MaterialSymbolsPerson,
//   MaterialSymbolsPersonRaisedHand,
//   MaterialSymbolsWifiRounded,
// } from "@/components/Icon";
// import {
//   Avatar,
//   Button,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   ModalProps,
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
//   useDisclosure,
// } from "@nextui-org/react";

// import { ButtonGroup, Divider } from "@nextui-org/react";
// import { Key, useCallback, useState } from "react";

// export default function MatchHistory({
//   params,
// }: {
//   params: { matchId: string };
// }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [scrollBehavior, setScrollBehavior] =
//     useState<ModalProps["scrollBehavior"]>("inside");
//   const matchId = params.matchId;
//   const array = [...Array(10)];
//   let counter = 1;
//   const winningNumber = 8;

//   //   table rendaring code
//   const renderCell = useCallback(
//     (user: ParticipantDetailsType, columnKey: Key) => {
//       const cellValue = user[columnKey as keyof ParticipantDetailsType];

//       switch (columnKey) {
//         case "name":
//           return (
//             <div className="flex items-center gap-3">
//               <Avatar src={user.avatar} />
//               <p>{user.name}</p>
//             </div>
//           );
//         default:
//           return cellValue;
//       }
//     },
//     []
//   );

//   return (
//     <>
//       <div className="bg-white rounded-lg p-3">
//         <h2 className="text-xl font-semibold">Match History</h2>
//         <p className="text-xs">match id: {matchId}</p>
//         <Divider className="my-3" />

//         <div>
//           <div className="bg-white p-3 rounded-md flex flex-wrap gap-6 justify-between ">
//             {cardData.map((item) => (
//               <SimpleCard count={item.count} title={item.name} key={item.name}>
//                 {item.icon}
//               </SimpleCard>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col">
//           {array.map((_, idx1) => (
//             <ButtonGroup className="flex justify-around" key={idx1}>
//               {array.map((_, idx2) => (
//                 <Button
//                   radius="none"
//                   className={`${
//                     winningNumber == counter ? "bg-blue-500" : ""
//                   } mx-2 my-1`}
//                   key={idx1 + idx2}
//                   onClick={onOpen}
//                 >
//                   {counter++}
//                 </Button> 
//               ))}
//             </ButtonGroup>
//           ))}
//         </div>
//       </div>

//       {/* Modal for info of match */}
//       <Modal
//         size="xl"
//         isOpen={isOpen}
//         onClose={onClose}
//         scrollBehavior={scrollBehavior}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 Participant Details
//                 <Divider />
//               </ModalHeader>
//               <ModalBody>
//                 <Table
//                   aria-label="Example table with custom cells"
//                   removeWrapper
//                 >
//                   <TableHeader columns={ParticipantColumns}>
//                     {(column) => (
//                       <TableColumn key={column.uid} align="start">
//                         {column.name}
//                       </TableColumn>
//                     )}
//                   </TableHeader>
//                   <TableBody items={ParticipantDetails}>
//                     {(item) => (
//                       //  TODO: Change the key
//                       <TableRow key={item.bet}>
//                         {(columnKey) => (
//                           <TableCell>{renderCell(item, columnKey)}</TableCell>
//                         )}
//                       </TableRow>
//                     )}
//                   </TableBody>
//                 </Table>
//               </ModalBody>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// const cardData = [
//   {
//     name: "Participant",
//     count: "23",
//     icon: (
//       <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
//         <MaterialSymbolsPerson />
//       </span>
//     ),
//   },

//   {
//     name: "Winning Number",
//     count: "8",
//     icon: (
//       <span className="text-blue-500 bg-blue-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
//         <MaterialSymbolsWifiRounded />
//       </span>
//     ),
//   },
//   {
//     name: "Betted",
//     count: "₹20934",
//     icon: (
//       <span className="text-yellow-500 bg-yellow-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
//         <MaterialSymbolsAttachMoney />
//       </span>
//     ),
//   },

//   {
//     name: "Profit",
//     count: "₹4002",
//     icon: (
//       <span className="text-teal-500 bg-teal-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
//         <MaterialSymbolsPersonRaisedHand />
//       </span>
//     ),
//   },
// ];

// type ParticipantDetailsType = {
//   avatar: string;
//   name: string;
//   bet: number;
// };

// const ParticipantDetails: ParticipantDetailsType[] = [];
// const ParticipantColumns = [
//   { name: "NAME", uid: "name" },
//   { name: "BET", uid: "bet" },
// ];

// let amt = 0;
// for (let i = 0; i < 10; i++) {
//   amt += 500;
//   ParticipantDetails.push({
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     name: "Adam smith",
//     bet: amt,
//   });
// }
