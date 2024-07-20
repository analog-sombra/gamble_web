"use client";
import { parseTransactionId } from "@/lib/utils";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";
import { createWorker } from "tesseract.js";
import Papa from "papaparse";
import * as XLSX from "xlsx";

const OCRView = () => {
  const [img, setImg] = useState<File | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [isOrc, setIsOcr] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [csv, setCsv] = useState<File | null>(null);
  const csvRef = useRef<HTMLInputElement>(null);

  interface PaymentData {
    amount: string;
    uid: string;
  }
  const [paymentdata, setPaymentData] = useState<PaymentData[]>([]);

  const handleLogoChange = async (
    value: React.ChangeEvent<HTMLInputElement>,
    setFun: (value: SetStateAction<File | null>) => void
  ) => {
    if (value!.target.files?.length == 0) return;
    // let file_size = parseInt(
    //   (value!.target.files![0].size / 1024 / 1024).toString()
    // );
    // if (file_size < 1) {
    if (value!.target.files![0].type.startsWith("image/")) {
      // convert image to grayscale
      const image = value!.target.files![0];

      setFun((val) => image);
    } else {
      toast.error("Please select an image file.", { theme: "light" });
    }
    // } else {
    //   toast.error("Image file size must be less then 1 mb", { theme: "light" });
    // }
  };

  const handleCSVChange = async (
    value: React.ChangeEvent<HTMLInputElement>,
    setFun: (value: SetStateAction<File | null>) => void
  ) => {
    if (value!.target.files?.length == 0) return;

    if (
      value!.target.files![0].type.endsWith("/csv") ||
      value!.target.files![0].type.endsWith("/vnd.ms-excel")
    ) {
      // convert image to grayscale
      const file = value!.target.files![0];

      setFun((val) => file);
    } else {
      toast.error("Please select an image file.", { theme: "light" });
    }
  };

  const startOCR = async () => {
    setIsLoading(true);
    if (img == null) {
      toast.error("Select an image to continue");
      setIsLoading(false);
      return;
    }

    // send to server
    // const fromdata = new FormData();
    // fromdata.append("file", img);

    // const response = await ImageProcess(fromdata);
    // if (response.status == false || response.data == null) {
    //   setIsLoading(false);
    //   return toast.error("Something want wrong");
    // }
    // const image = new File([response.data], "grayscale.jpg", {
    //   type: "image/jpeg",
    // });

    // parse transaction id
    const worker = await createWorker();
    const {
      data: { text },
    } = await worker.recognize(img);
    await worker.terminate();
    const transactionId = parseTransactionId(text);
    console.log(text);
    if (!transactionId) {
      setIsLoading(false);
      return toast.error("unable to parse transaction ID");
    }

    setIsOcr(true);
    setId(transactionId);

    toast.info(transactionId);
    setIsLoading(false);
  };

  const reset = () => {
    setIsOcr(false);
    setId("");
    setImg(null);
  };

  const startCSV = async () => {
    setIsLoading(true);
    if (csv == null) {
      toast.error("Select an csv to continue");
      setIsLoading(false);
      return;
    }

    console.log(csv);
    let csvFile: File = csv;

    if (csvFile.type.endsWith("/csv")) {
      // Read the CSV file
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            // console.log(results.data);
            // Process the CSV data as needed

            let recatoredata = results.data.map((value: any) => {
              const mydata: PaymentData = {
                amount: value[" Amount"],
                uid: value[" UTR ID"],
              };

              return mydata;
            });
            setPaymentData(recatoredata);

            setIsLoading(false);
          },
          error: (error: any) => {
            console.error(error.message);
            toast.error("Error parsing CSV file");
            setIsLoading(false);
          },
        });
      };
      reader.onerror = (error: any) => {
        console.error(error.message);
        toast.error("Error reading CSV file");
        setIsLoading(false);
      };
      reader.readAsText(csvFile);
    } else {
      try {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const data = event.target?.result;
          if (data) {
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            let recatoredata = jsonData
              .map((value: any) => {
                if (value.hasOwnProperty("__EMPTY_4")) {
                  if (value["__EMPTY_4"].startsWith("UPI/")) {
                    const mydata: PaymentData = {
                      amount: value["__EMPTY_8"],
                      uid: value["__EMPTY_4"].toString().split("/")[1],
                    };
                    return mydata;
                  }
                }
                return undefined;
              })
              .filter((item): item is PaymentData => item !== undefined);
            console.log(recatoredata);

            setPaymentData(recatoredata);
            // Do something with jsonData
          }
          setIsLoading(false);
        };
        reader.readAsBinaryString(csvFile);
      } catch (error) {
        console.error("Error reading file:", error);
        toast.error("Error reading file");
        setIsLoading(false);
      }
    }

    setIsLoading(false);
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

      {/* csv section */}
      <div className="h-[1px] bg-slate-600 w-full"></div>
      <div>
        <button
          onClick={() => csvRef.current?.click()}
          className="bg-emerald-500 px-4 py-1 rounded-md text-white text-sm"
        >
          {csv ? "Change CSV" : "Upload CSV"}
        </button>
        {csv && (
          <button
            className="bg-blue-500 px-4 py-1 rounded-md text-white text-sm"
            onClick={startCSV}
          >
            Start CSV
          </button>
        )}
        <div className="hidden">
          <input
            type="file"
            ref={csvRef}
            accept="application/vnd.ms-excel, text/csv"
            onChange={(val) => handleCSVChange(val, setCsv)}
          />
        </div>
        <div className="mt-4"></div>
      </div>
    </>
  );
};
export default OCRView;
