"use client";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import { useEffectOnce } from "usehooks-ts";
import { updateDocView } from "../../admin/lib/updateEditorialViews";

/* eslint-disable @next/next/no-img-element */
type EditorialDataTypes = {
  singleEditorialData: any;
};

export default function EditorialData({
  singleEditorialData,
}: EditorialDataTypes) {
  useEffectOnce(() => {
    updateDocView(singleEditorialData?.id, singleEditorialData?.views);
  });
  return (
    <>
      <section className="sm:container relative w-full h-full ">
        {singleEditorialData?.image && (
          <div className="w-full relative h-[70dvh]">
            <img
              src={singleEditorialData?.image?.href}
              alt="article_image"
              className="absolute inset-0 w-full h-full min-h-[300px] object-cover object-top"
            />
          </div>
        )}

        <div
          className={`bg-white ring-1 ring-base-theme/20 lg:container mb-5 w-full h-full text-center ${
            singleEditorialData?.image ? "mt-[-10rem]" : "mt-0"
          }  relative z-30`}
        >
          <div className="px-5 md:px-[6rem] py-[2rem]">
            <div className="flex justify-center my-[2rem] text-center">
              <h1 className="lg:text-xl md:text-lg text-md font-bold leading-tight w-full sm:w-2/3 flex justify-center ">
                {singleEditorialData?.title}
              </h1>
            </div>

            <div className="flex justify-between flex-col lg:flex-row items-center my-[1rem]">
              <div className="flex gap-2 items-center">
                {/* <p className="text-base-theme/60 text-[14px]">
                  {singleEditorialData?.date}
                </p>
                <span className="font-bold">•</span> */}

                <p className="text-base-theme text-base">
                  <span className="font-bold uppercase">Olabisi Onabanjo</span>
                </p>
                <span className="font-bold">•</span>
                <p className="text-base-theme/60 text-[14px] uppercase">
                  {singleEditorialData?.minutes} minutes read
                </p>
              </div>
              {/* Socials */}
              <div className="flex gap-5 items-center my-[1rem]">
                <span className="text-base-theme">
                  {singleEditorialData?.date}
                </span>
                <Link href={"https://twitter.com"} target="__blank">
                  <FaXTwitter className="text-base-theme text-base" />
                </Link>

                <Link href={"https://linkedin.com"} target="__blank">
                  <FaLinkedinIn className="text-base-theme text-base" />
                </Link>
                <Link href={"https://instagram.com"} target="__blank">
                  <FaInstagram className="text-base-theme text-base" />
                </Link>
              </div>
            </div>
            {/* hr */}
            <hr className="my-[1rem] border-base-theme/20" />
            {/* Summary */}
            {/* <div className="flex justify-center text-center my-[3rem] ">
              <blockquote className="italic text-[16px] lg:text-[24px] w-full md:w-3/4 lg:w-1/2 font-extralight">
                <span>&quot;</span>
                {singleEditorialData?.summary}
                <span>&quot;</span>
              </blockquote>
            </div> */}
            <div className="flex justify-center my-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: singleEditorialData.content,
                }}
                className="text-left text-[1.2rem] font-light w-full leading-9 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
