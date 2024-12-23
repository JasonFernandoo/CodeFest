import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Adjust import path as needed
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input as ShadInput } from "@/components/ui/input"; // Adjust import path
import { Button } from "@/components/ui/button"; // Adjust import path
import { useDarkMode } from "../DarkModeContext";
import { useActor } from "@/ic/Actors";

const formSchema = z.object({
  name: z.string().min(1, { message: "Token ID is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Input() {
  const { actor: backend } = useActor();
  const { darkMode } = useDarkMode();
  const [data, setData] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    console.log(values);
    const tokenId = BigInt(values.name);
    if (!backend) {
      console.error("Backend is not defined");
      return;
    }
    const response = await backend.icrc7_get_image(tokenId);
    const blob = new Blob([new Uint8Array(response)], { type: "image/png" });
    const url = URL.createObjectURL(blob);
    setData(url);
    setIsDialogOpen(true);
  }

  function handleDialogClose(open: boolean) {
    if (!open) {
      setData(null);
    }
    setIsDialogOpen(open);
  }

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-center bg-[url('/background2.png')] bg-cover bg-center items-center py-10 px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center gap-4 p-6 border rounded-lg w-full max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            {/* Token ID */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token ID</FormLabel>
                  <FormControl>
                    <ShadInput placeholder="Token ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
              <DialogTrigger asChild>
                <Button
                  className="w-full h-full transition-all duration-300 ease-in-out text-white font-semibold transform hover:scale-[0.98]"
                  style={{
                    background: "linear-gradient(to right, #FF00FF, #086478)",
                    backgroundSize: "200% auto",
                    transition: "background-position 0.5s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = "right center";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = "left center";
                  }}
                  type="submit"
                  variant="default"
                >
                  Open
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>NFT</DialogTitle>
                  <DialogDescription>Here is your NFT</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {data && (
                    <img src={data} alt="NFT" className="w-full max-w-md" />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </form>
        </Form>
      </div>
    </div>
  );
}
