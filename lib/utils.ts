import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTransactionId(text: string) {
  const patterns = [
    // Define multiple patterns to capture various transaction ID formats
    /UPI transaction ID[\r\n]+(\w+)/,
    /UPI transaction ID: (\w+)/,
    /Transaction ID[\r\n]+(\w+)/,
    /Transaction Reference \| (\w+)/,
    /Transaction Reference Number \| (\w+)/,
    /IMPS Ref No: (\w+)/,
    /UTR:(\w+)/,
    /IMPS-(\w+)/,
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (match) {
      return match[1]; // Return the captured transaction ID
    }
  }

  return null;
}
