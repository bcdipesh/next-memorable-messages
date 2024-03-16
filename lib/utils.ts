import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDatetimeLocalToIso(datetimeLocal: string) {
  // Parse the input datetime-local string
  const [dateStr, timeStr] = datetimeLocal.split("T");
  const [year, month, day] = dateStr.split("-");
  const [hour, minute] = timeStr.split(":");

  // Create a new Date object with the parsed values
  const dt = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
  );

  // Convert to ISO datetime format
  const isoDatetime = dt.toISOString();

  return isoDatetime;
}
