"use client";
import { parseTransactionId } from "@/lib/utils";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";
import { createWorker } from "tesseract.js";

const OCRView = () => {
  const [img, setImg] = useState<File | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [isOrc, setIsOcr] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogoChange = async (
    value: React.ChangeEvent<HTMLInputElement>,
    setFun: (value: SetStateAction<File | null>) => void
  ) => {
    let file_size = parseInt(
      (value!.target.files![0].size / 1024 / 1024).toString()
    );
    if (file_size < 1) {
      if (value!.target.files![0].type.startsWith("image/")) {
        // convert image to grayscale
        const image = value!.target.files![0];

        // setFun((val) => value!.target.files![0]);
        setFun((val) => image);
      } else {
        toast.error("Please select an image file.", { theme: "light" });
      }
    } else {
      toast.error("Image file size must be less then 1 mb", { theme: "light" });
    }
  };

  const startOCR = async () => {
    setIsLoading(true);
    if (img == null) {
      toast.error("Select an image to continue");
      setIsLoading(false);
      return;
    }

    const worker = await createWorker();
    const {
      data: { text },
    } = await worker.recognize(img);
    const transactionId = parseTransactionId(text);
    if (!transactionId) {
      setIsLoading(false);
      return toast.error("Something want wrong");
    }

    setIsOcr(true);
    setId(transactionId);

    // toast.info(transactionId);
    await worker.terminate();
    setIsLoading(false);
  };

  const reset = () => {
    setIsOcr(false);
    setId("");
    setImg(null);
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-white rounded-md p-4">
          <p className="text-xl text-gray-800 text-center my-3">OCR</p>
          {img != null ? (
            <div className="w-full grid place-items-center">
              <div className="relative w-80 h-80">
                <Image
                  src={URL.createObjectURL(img!)}
                  alt="logo"
                  fill={true}
                  className="w-80 h-80 object-contain object-center rounded-md border"
                />
              </div>
            </div>
          ) : null}
          <div className="mt-4"></div>

          {isOrc ? (
            <>
              <div>
                <p className="text-center">ID: {id}</p>
                <div className="w-full grid place-items-center">
                  <button
                    onClick={reset}
                    className="bg-rose-400 hover:bg-rose-600 px-4 py-1 rounded-md text-white text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex gap-4 justify-center">
              {isLoading ? (
                <button
                  disabled
                  className="bg-emerald-500 px-4 py-1 rounded-md text-white text-sm"
                >
                  Loading...
                </button>
              ) : (
                <>
                  <button
                    onClick={() => imgRef.current?.click()}
                    className="bg-emerald-500 px-4 py-1 rounded-md text-white text-sm"
                  >
                    {img ? "Change Image" : "Upload Image"}
                  </button>
                  {img && (
                    <button
                      className="bg-blue-500 px-4 py-1 rounded-md text-white text-sm"
                      onClick={startOCR}
                    >
                      Start OCR
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          <div className="hidden">
            <input
              type="file"
              ref={imgRef}
              accept="image/*"
              onChange={(val) => handleLogoChange(val, setImg)}
            />
          </div>
          <div className="mt-4"></div>
        </div>
      </div>
    </>
  );
};
export default OCRView;
