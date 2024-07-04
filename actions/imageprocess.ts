"use server";
import { errorToString, parseTransactionId } from "@/lib/utils";
import { ApiResponseType } from "@/models/response";
import { writeFileSync } from "fs";
import Jimp from "jimp";
import { createWorker } from "tesseract.js";

const ImageProcess = async (
  data: FormData
): Promise<ApiResponseType<string | null>> => {
  try {
    //convert to grayscale
    const image = data.get("file") as File;
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const jimpImage = await Jimp.read(imageBuffer);
    await jimpImage.grayscale();
    const base64Data = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
    const grayscaleFile = new File([base64Data], "grayscale.jpg", {
      type: "image/jpeg",
    });

    writeFileSync("./temp.jpeg", Buffer.from(await image.arrayBuffer()));

    // parse transaction id
    // const worker = await createWorker();
    // const {
    //   data: { text },
    // } = await worker.recognize(grayscaleFile);
    // await worker.terminate();
    // const transactionId = parseTransactionId(text);

    // if (!transactionId) {
    //   throw new Error("Unable to parse transaction ID");
    // }

    // console.log(transactionId);

    const response: ApiResponseType<string> = {
      status: true,
      data: base64Data,
      message: "success",
      functionname: "ImageProcess",
    };
    return response;
  } catch (e) {
    const response: ApiResponseType<null> = {
      status: false,
      data: null,
      message: errorToString(e),
      functionname: "ImageProcess",
    };
    return response;
  }
};

export default ImageProcess;
