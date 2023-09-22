import React, { FC } from "react";
import QRCode from "react-qr-code";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Link } from "react-router-dom";
import { UrlItem, deleteUrl } from "@/services/url.service";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
interface Props {
  edit: string | undefined;
  setEdit: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  data: UrlItem;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Row: FC<Props> = ({ data, setLoading, setEdit, setFetch }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-2">
        <QRCode
          className="rounded-md"
          size={256}
          style={{ height: "60px", maxWidth: "100%", width: "100%" }}
          value={window.location.href + "api/url/" + data.short_url}
          viewBox={`0 0 256 256`}
        />
        <div>
          <Link to={data.url}>
            <p className="text-xs sm:text-sm font-medium leading-none">{data.url}</p>
          </Link>
          <Link to={"api/url/" + data.short_url} target="_blank">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {window.location.href + "api/url/" + data.short_url}
            </p>
          </Link>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(
                window.location.href + "api/url/" + data.short_url
              )
            }
          >
            Copy Short Url
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(
                 data.url
              )
            }
          >
            Copy Full Url
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setEdit(data.id)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              try {
                setLoading(true);
                await deleteUrl(data.id);
                setEdit(undefined);
                setLoading(false);
              } catch (error) {
              } finally {
                setFetch(true);
                setEdit(undefined);
                setLoading(false);
              }
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
