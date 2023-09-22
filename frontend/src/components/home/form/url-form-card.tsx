import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UrlItem, patchUrl, postUrl } from "@/services/url.service";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect} from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
const FormSchema = z.object({
  url: z.string().url(),
});
interface Props {
  edit: string | undefined;
  setEdit: React.Dispatch<React.SetStateAction<string | undefined>>;
  urls: UrlItem[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}
const UrlFormCard: FC<Props> = ({
  edit,
  setEdit,
  urls,
  setLoading,
  loading,
  setFetch,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  useEffect(() => {
    const url = urls.find((item) => item.id === edit)?.url;
    if (url) {
      form.reset({ url });
    } else {
      form.reset({ url: "" });
    }
  }, [edit]);
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      console.log(values);
      setLoading(true);
      if (edit) {
        await patchUrl(edit, values);
      } else {
        await postUrl(values);
      }
    } catch (error) {
      console.log(error);
    } finally {
      form.reset({ url: "" });
      setFetch(true);
      setEdit(undefined);
      setLoading(false);
    }
  }
  return (
    // <div className="w-full">
    <Form {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <div className="grid"> */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input
                    className="w-full"
                    disabled={loading}
                    placeholder="Url"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Input value="http://example.com/link/to/document" readOnly /> */}
          <Button type="submit" variant="secondary" className="shrink-0">
            {edit ? "Edit Link" : "Add Link"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="shrink-0"
            onClick={() => {
              setEdit(undefined);
              form.reset({ url: "" });
            }}
          >
            Cancel
          </Button>
          {/* </div> */}
        </div>
      </form>
    </Form>
    // </div>
  );
};

export default UrlFormCard;
