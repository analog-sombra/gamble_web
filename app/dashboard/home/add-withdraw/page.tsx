"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { Divider, divider } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function AddWithdraw() {
  const [currentTab, setTab] = useState("add");
  return (
    <div className="mb-3 flex flex-col bg-white p-4 rounded-md w-full justify-center gap-3 items-center">
      <div className="border">
        <div className="flex gap-5">
          <div className="flex items-center space-x-2">
            <Label htmlFor="toggle-add">Add</Label>
            <Switch id="toggle-add" checked />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="toggle-withdraw">Withdraw</Label>
            <Switch id="toggle-withdraw" />
          </div>
        </div>
        <Divider />
        <div className="p-2 text-center">
          {currentTab == "add" ? (
            <div>Add limit: 3423</div>
          ) : (
            <div>withdraw Limit: 234</div>
          )}
        </div>
      </div>

      <div
        className={`flex ${
          currentTab == "add" ? "justify-between" : "justify-start"
        } w-[250px]`}
      >
        <Button className="p-2">Refresh</Button>
        {currentTab == "add" ? <Button className="p-2">Upload</Button> : ""}
      </div>

      <Tabs defaultValue="add">
        <TabsList className="w-full">
          <TabsTrigger value="add" onClick={() => setTab("add")}>
            Add Money
          </TabsTrigger>
          <TabsTrigger value="withdraw" onClick={() => setTab("withdraw")}>
            Withdraw Money
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="add"> */}
        {/* Make changes to your account here. */}
        {/* </TabsContent> */}
        {/* <TabsContent value="withdraw">Change your password here.</TabsContent> */}
      </Tabs>

      <div className="flex gap-2 flex-wrap">
        <p>Pending</p>
        <p>processed</p>
        <p>approved</p>
        <p>rejected</p>
        <p>refunded excel</p>
        <p>pending excel</p>
      </div>
    </div>
  );
}
