import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...args) => {
  return twMerge(clsx(...args))
}

export const style = {
  text: "text-xs",
  bold: "font-bold",
}
