"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  addOne,
  initCounterState,
  resetCounter,
  substractOne,
} from "@/app/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value: number;
}

interface PropsGet {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data: PropsGet = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector((state) => state.counterReducer.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((res) => dispatch(initCounterState(res.count)));
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addOne());
  };

  const handleRemove = () => {
    dispatch(substractOne());
  };

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={handleAdd}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={handleRemove}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
