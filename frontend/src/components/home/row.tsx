import React from "react";
import QRCode from "react-qr-code";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Row = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <QRCode
          className="rounded-md"
          size={256}
          style={{ height: "60px", maxWidth: "100%", width: "100%" }}
          value={"https://www.npmjs.com/package/react-qr-code"}
          viewBox={`0 0 256 256`}
        />
        <div>
          <Link to="https://google.com">
            <p className="text-sm font-medium leading-none">
              https://google.com/fdasjfksafds
            </p>
          </Link>
          <Link to="https://google.com">
            <p className="text-sm text-muted-foreground">http:fdafda/lcosdf</p>
          </Link>
        </div>
      </div>
      <Select defaultValue="edit">
        <SelectTrigger className="ml-auto w-[110px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="edit">Can edit</SelectItem>
          <SelectItem value="view">Can view</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Row;
