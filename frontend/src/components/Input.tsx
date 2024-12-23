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
} from "@/components/ui/form";
import { Input as ShadInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "../DarkModeContext";
import { useActor } from "@/ic/Actors";

const formSchema = z.object({
  image: z
    .any()
    .refine((file) => file instanceof File, { message: "File is required" }),
  name: z.string().min(1, { message: "Image name is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Input() {
  const { darkMode } = useDarkMode();
  const { actor: backend } = useActor();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [tokenId, setTokenId] = useState<bigint | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Added loading state

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true); // Start loading
    try {
      const arrayBuffer = await values.image.arrayBuffer();
      if (!backend) {
        throw new Error("Backend is not defined");
      }
      const response = await backend.icrc7_mint(
        "principal",
        "description",
        values.name,
        new Uint8Array(arrayBuffer)
      );

      if ("Ok" in response) {
        setTokenId(response.Ok);
        setError(null);
      } else {
        setError(response.Err);
        setTokenId(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      setTokenId(null);
    } finally {
      setIsLoading(false); // End loading
    }
  }

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-center bg-[url('/background2-rev.png')] bg-cover bg-center items-center py-10 px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center gap-4 p-6 border rounded-lg w-full max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            {/* Image Field */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image (Max 2 MB)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPreviewUrl(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <label
                        htmlFor="image-upload"
                        className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 ${
                          darkMode
                            ? "border-gray-600 hover:border-gray-500"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {previewUrl ? (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <>
                            <svg
                              className="w-12 h-12 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            <p
                              className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Click to upload an image
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Name</FormLabel>
                  <FormControl>
                    <ShadInput placeholder="Enter image name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              className="w-full h-full transition-all duration-300 ease-in-out text-white font-semibold transform hover:scale-[0.98] disabled:opacity-50"
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
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
        {error && <p className="text-red-500">Error: {error}</p>}
        {tokenId !== null && <p>Token ID: {tokenId.toString()}</p>}
      </div>
    </div>
  );
}
