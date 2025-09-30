"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const { formState, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

async function onSubmit(data: any) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent!");
      reset();
      setTimeout(() => setFormDisplay(!formDisplay), 5000);
    } else {
      toast.error("Message not sent, try again.");
    }
  } catch (err) {
    toast.error("Network error, try again later.");
  }
}

  return (
    <>
      <section
        ref={ref}
        id="contact"
        style={{
          transform: `${
            formDisplay
              ? "perspective(300px) rotateY(-180deg)"
              : "perspective(300px) rotateY(-360deg)"
          }`,
        }}
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 pb-4 md:pb-10 lg:pb-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        {!formDisplay ? (
          <div
            className={` ${
              syne.className
            } flex justify-between items-center w-full duration-1000 ${
              formDisplay && "opacity-0"
            }`}
          >
            <div className="inline w-full">
              <Link href="#footer" data-no-blobity>
                <span
                  data-blobity
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                  }}
                  className="text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
                >
                  CONTACT ME
                </span>
              </Link>
            </div>
            <Link href="#footer">
              <button
                className={`text-base ml-auto mt-6 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 lg:mt-12 rounded-xl border-2 border-white leading-none ${
                  viewCount <= 1 && "duration-500 delay-[1500ms]"
                } ${
                  inView
                    ? " opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                data-blobity-radius="12"
                onClick={() => {
                  setFormDisplay(!formDisplay);
                }}
              >
                CONTACT&nbsp;ME
              </button>
            </Link>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              exit={{ opacity: 0 }}
              style={{
                transform: `${
                  formDisplay
                    ? "perspective(300px) rotateY(-180deg)"
                    : "perspective(300px) rotateY(0deg)"
                }`,
              }}
              className="w-full"
            >
              <div className="flex items-center justify-between py-4 md:py-5 lg:py-6">
                
                <Icon
                  icon="gg:close"
                  data-blobity
                  onClick={() => {
                    setFormDisplay(false);
                    reset();
                  }}
                  className="text-2xl opacity-50"
                />
              </div>
              <div className="flex items-center h-full gap-2 w-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={`back w-full flex flex-col gap-3 grow-2 basis-0`}
                >
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userName"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      {...register("userName", {
                        required: "I need to know your name",
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                          message: "Please enter a valid name.",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-hidden py-1 pl-2"
                    />
                    {errors?.userName && (
                      <span className="text-red-400 text-xs">
                        {errors?.userName?.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userEmail"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Email
                    </label>
                    <input
                      id="userEmail"
                      type="email"
                      {...register("userEmail", {
                        required: "Enter a correct email address",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-hidden py-1 pl-2"
                    />
                    {errors?.userEmail && (
                      <span className="text-red-400 text-xs">
                        {errors?.userEmail?.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userMessage"
                      className="opacity-70 text-sm lg:text-base"
                    >
                      Message
                    </label>
                    <textarea
                      id="userMessage"
                      {...register("userMessage", {
                        required: "I'll appreciate what you have to say.",
                      })}
                      rows={4}
                      cols={50}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-hidden py-1 pl-2"
                    />
                    {errors?.userMessage && (
                      <span className="text-red-400 text-xs">
                        {errors?.userMessage?.message as string}
                      </span>
                    )}
                  </div>
                  <button
                    className={`rounded-md bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ${syne.className} font-bold uppercase mt-4`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
      <ToastContainer />
    </>
  );
}
