"use client";

import React from "react";
import { SimpleWidget } from "..";
import { IoCafeOutline } from "react-icons/io5";
import { useAppSelector } from "@/app/store";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counterReducer.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        label="Contador"
        title={count.toString()}
        subTitle="Products Selected"
        href="/dashboard/counter"
      />
    </div>
  );
};
