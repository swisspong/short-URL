import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { postSignin } from "@/services/auth.service";
import { Link, useNavigate } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

const CardSignin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      console.log(values);
      setLoading(true);
      await postSignin(values);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card className="max-w-[500px] w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Sign In to access your account
        </CardTitle>
        <CardDescription>
          Enter your email below to access your account
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              {/* <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div> */}
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Email (required)"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" /> */}
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Password (required)"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link to={"/signup"}>
              <p className="text-xs sm:text-sm font-medium ">
                Go to create account
              </p>
            </Link>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Signin</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default CardSignin;
