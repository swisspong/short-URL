import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
// import Row from "../row";
import { useNavigate } from "react-router-dom";
import { UrlItem, getUrls } from "@/services/url.service";
import UrlFormCard from "./url-form-card";
import { Row } from "../row";
import { Loader2 } from "lucide-react";

const UrlForm = () => {
  // const navigate = useNavigate();
  const [edit, setEdit] = useState<string>();
  // const [del, setDel] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetch, setFetch] = useState<boolean>(true);
  const [urls, setUrls] = useState<UrlItem[]>([]);
  useEffect(() => {
    const getUrlsReq = async () => {
      if (isFetch) {
        const result = await getUrls();
        setUrls(result.data);
        setFetch(false);
      }
    };
    getUrlsReq();
  }, [isFetch]);
  return (
    <Card className="p-0 m-0">
      <CardHeader>
        <CardTitle>Share this url</CardTitle>
        <CardDescription>Anyone can access your link.</CardDescription>
      </CardHeader>
      <CardContent className="p-2 md:p-6">
        <UrlFormCard
          setFetch={setFetch}
          edit={edit}
          setEdit={setEdit}
          urls={urls}
          setLoading={setLoading}
          loading={loading}
        />
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Shortener Urls</h4>
          <div
            className={`grid gap-6 md:grid-cols-2 relative ${
              loading || isFetch ? "pb-5" : undefined
            }`}
          >
            {loading || isFetch ? (
              <div className="absolute inset-0 flex justify-center">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              urls.map((url) => (
                <Row
                  key={url.id}
                  data={url}
                  setEdit={setEdit}
                  edit={edit}
                  setLoading={setLoading}
                  setFetch={setFetch}
                />
              ))
            )}

            {/* <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
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
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">b@example.com</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">p@example.com</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UrlForm;
