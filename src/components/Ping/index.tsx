import React from "react";
import cn from "@/libs/utils/cn";
type PingProps = {
  type: 'success' | 'danger' | 'warning',
  className?: string
};

export default function Ping({ className, type='success' }: PingProps) {
  return (
    <div className={cn(
        "ping relative w-2 h-2 rounded-full",
        type === 'success' && "bg-green-500 ping-success",
        type === 'danger' && "bg-rose-500 ping-danger",
        type === 'warning' && "bg-amber-500 ping-warning",
        className
      )}
    />
  );
}
