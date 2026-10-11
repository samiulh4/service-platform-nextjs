"use client";

import { useState } from "react";

const steps = [
  "১. সাধারণ তথ্য",
  "২. যন্ত্রপাতি ও সরঞ্জামাদি",
  "৩. উপাদানগুলোর তথ্য",
  "৪. সংযুক্তি",
  "৫. পেমেন্ট এবং সাবমিট",
];

function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md mb-4">
      <div className="text-blue-600 font-semibold text-[15px] px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <span>{title}</span>
        {action}
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, children, help }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-600 mb-1">
        {required && <span className="text-red-500 mr-0.5">*</span>}
        {label}
        {help && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-gray-400 inline ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </label>
      {children}
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full h-9 px-3 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 ${className}`}
      {...props}
    />
  );
}

function Select({ children, className = "" }) {
  return (
    <select
      className={`w-full h-9 px-3 border border-gray-300 rounded text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-blue-400 ${className}`}
    >
      {children}
    </select>
  );
}

function PhoneInput({ value }) {
  return (
    <div className="flex">
      <span className="flex items-center gap-1 px-2 h-9 border border-r-0 border-gray-300 rounded-l bg-gray-50 text-xs text-gray-600">
        🇧🇩 +880
      </span>
      <Input value={value} className="rounded-l-none" />
    </div>
  );
}

function TakaInput() {
  return (
    <div className="flex">
      <Input className="rounded-r-none" />
      <span className="flex items-center px-3 h-9 border border-l-0 border-gray-300 rounded-r bg-gray-50 text-xs text-gray-500">
        টাকা
      </span>
    </div>
  );
}

function AddButton() {
  return (
    <button className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded flex items-center justify-center mx-auto transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  );
}

function ThCell({ children, colSpan, rowSpan }) {
  return (
    <th
      className="px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 bg-gray-50 text-center"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </th>
  );
}

function TdCell({ children, className = "" }) {
  return (
    <td className={`px-2 py-2 border border-gray-200 text-center ${className}`}>
      {children}
    </td>
  );
}

export default function IndustryRegistrationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [sameAddress, setSameAddress] = useState(false);

  return (
    <>
      <h1 className="text-lg font-bold text-gray-800 mb-4">শিল্প নিবন্ধন</h1>

      {/* Stepper */}
      <div className="flex flex-wrap gap-1 mb-5">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`flex-1 min-w-[110px] text-[11px] font-medium text-center py-2.5 rounded-sm transition-colors ${
              i === activeStep
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {step}
          </button>
        ))}
      </div>

      {/* ===== সাধারণ তথ্য ===== */}
      <SectionCard title="সাধারণ তথ্য">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <Field label="প্রতিষ্ঠানের নাম বাংলা" required>
            <Input defaultValue="কোড রেড টেকনোলজি নিউ লিমিটেড" />
          </Field>
          <Field label="প্রতিষ্ঠানের নাম ইংরেজি" required>
            <Input defaultValue="Code Red Technology New Ltd" />
          </Field>
          <Field label="প্রকল্পের নাম" required>
            <Input placeholder="প্রকল্পের নাম" />
          </Field>
          <Field label="নিবন্ধনের প্রকৃতি" required>
            <Select>
              <option>বিদ্যমান</option>
            </Select>
          </Field>
          <Field label="প্রতিষ্ঠানের ধরণ" required>
            <Select>
              <option>প্রাইভেট লিমিটেড</option>
            </Select>
          </Field>
          <Field label="ব্যবসার ধরণ" required>
            <Select>
              <option>শিল্প</option>
            </Select>
          </Field>
          <Field label="বিনিয়োগের ধরণ" required>
            <Select>
              <option>স্থানীয়</option>
            </Select>
          </Field>
          <Field label="বিনিয়োগকৃত দেশ" required>
            <Select>
              <option>Bangladesh</option>
            </Select>
          </Field>
          <Field label="মোট বিনিয়োগ">
            <Input
              placeholder="মোট বিনিয়োগ লিখুন"
              className="bg-gray-50"
              disabled
            />
          </Field>
          <Field label="শিল্পের শ্রেণি" required help>
            <Select>
              <option></option>
            </Select>
          </Field>
          <Field label="শিল্পের খাত" required>
            <Select>
              <option>প্লাস্টিক শিল্প</option>
            </Select>
          </Field>
          <Field label="শিল্পের উপ-খাত" required help>
            <Select className="text-xs">
              <option>
                সাইকেল, মোটরসাইকেল ও যন্ত্রাংশ তৈরি ও সংযোজন
              </option>
            </Select>
          </Field>
        </div>
      </SectionCard>

      {/* ===== প্রতিষ্ঠানের কার্যালয়ের ঠিকানা ===== */}
      <SectionCard title="প্রতিষ্ঠানের কার্যালয়ের ঠিকানা">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <Field label="বিভাগ" required>
            <Select>
              <option>ঢাকা</option>
            </Select>
          </Field>
          <Field label="জেলা" required>
            <Select>
              <option>ঢাকা</option>
            </Select>
          </Field>
          <Field label="থানা" required>
            <Select>
              <option>মোহাম্মদপুর</option>
            </Select>
          </Field>
          <Field label="পোস্ট কোড" required>
            <Input defaultValue="১২০৭" />
          </Field>
          <div className="md:col-span-2">
            <Field label="ঠিকানা" required>
              <Input defaultValue="16/19, G Tasfia Mumjil, Dhaka, Bangladesh, Babor Road, 120?" />
            </Field>
          </div>
          <Field label="ইমেইল" required>
            <Input defaultValue="samiulossp@gmail.com" />
          </Field>
          <Field label="মোবাইল নং" required>
            <PhoneInput value="১৯০৫১৯৯৩৫৭" />
          </Field>
          <div className="md:col-span-2">
            <Field label="কারখানার অবস্থান">
              <Select>
                <option>কারখানা নির্দেশ করুন</option>
              </Select>
            </Field>
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="sameaddr"
              className="w-4 h-4"
              checked={sameAddress}
              onChange={(e) => setSameAddress(e.target.checked)}
            />
            <label htmlFor="sameaddr" className="text-xs text-gray-600">
              প্রতিষ্ঠানের কার্যালয় এবং কারখানার ঠিকানা একই হলে টিক দিন
            </label>
          </div>
        </div>
      </SectionCard>

      {/* ===== কারখানার ঠিকানা ===== */}
      <SectionCard title="প্রতিষ্ঠানের কারখানার ঠিকানা (এই ঠিকানা অনুযায়ী নিবন্ধন সম্পন্ন হবে)">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <Field label="বিভাগ" required>
            <Select>
              <option>ঢাকা</option>
            </Select>
          </Field>
          <Field label="জেলা" required>
            <Select>
              <option>ঢাকা</option>
            </Select>
          </Field>
          <Field label="থানা" required>
            <Select>
              <option>মোহাম্মদপুর</option>
            </Select>
          </Field>
          <Field label="পোস্ট কোড" required>
            <Input defaultValue="১২০৭" />
          </Field>
          <div className="md:col-span-2">
            <Field label="ঠিকানা">
              <Input defaultValue="Dhaka" />
            </Field>
          </div>
          <Field label="ইমেইল" required>
            <Input defaultValue="samiulossp@gmail.com" />
          </Field>
          <Field label="মোবাইল নং" required>
            <PhoneInput value="১৯০৫-১৯৯৩৫৭" />
          </Field>
        </div>
      </SectionCard>

      {/* ===== প্রধান নির্বাহী ===== */}
      <SectionCard
        title="প্রতিষ্ঠানের প্রধান নির্বাহী/ব্যবস্থাপনা পরিচালক"
        action={
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-medium px-3 py-1.5 rounded transition-colors">
            প্রতিনিধির তথ্য মোছ করুন
          </button>
        }
      >
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <Field label="প্রতিনিধির ধরণ" required>
            <Select>
              <option>উদ্যোক্তা/পরিচালক</option>
            </Select>
          </Field>
          <Field label="নাম" required>
            <Input defaultValue="MD. SAMIUL HAQUE" className="bg-gray-50" disabled />
          </Field>
          <Field label="জাতীয়তা" required>
            <Input defaultValue="Bangladeshi" />
          </Field>
          <Field label="পিতার নাম" required>
            <Input placeholder="Father Name" />
          </Field>
          <Field label="জাতীয় পরিচয়পত্র নম্বর" required>
            <Input defaultValue="৭৪১০৪৮৭৯৬০" />
          </Field>
          <Field label="জন্মতারিখ" required>
            <div className="relative">
              <Input defaultValue="১৯-১১-১৯৯৫" className="pr-9" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </Field>
          <Field label="পদবি" required>
            <Input defaultValue="ব্যবস্থাপনা পরিচালক" />
          </Field>
          <Field label="ইমেইল" required>
            <Input defaultValue="samiulossp@gmail.com" />
          </Field>
          <Field label="মোবাইল নং" required>
            <PhoneInput value="১৯০৫-১৯৯৩৫৭" />
          </Field>

          {/* Signature Upload */}
          <div className="md:col-span-2 flex flex-col items-center border-2 border-dashed border-gray-300 rounded-md py-8 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-sm text-gray-500 text-center">
              আপনার স্ক্যান স্বাক্ষরটি এখানে আপলোড করুন বা{" "}
              <span className="text-blue-500 underline cursor-pointer">
                ব্রাউজ করুন
              </span>
            </p>
            <p className="text-[11px] text-gray-400 mt-1">
              [File Format: *.jpg/.jpeg/.png, Maximum 5 MB]
            </p>
          </div>
          <div className="md:col-span-2 text-center">
            <a href="#" className="text-blue-500 text-xs underline">
              আপনার ইমেজ মডিফাই করতে পারেন
            </a>
            <p className="text-[11px] text-red-500 mt-1">
              প্রয়োজনীয় সকল ব্যাখ্যাসমূহ এই ব্যাখ্যার মাধ্যমে
              ব্যাখ্যাতিত হতে পারে
            </p>
          </div>
        </div>
      </SectionCard>

      {/* ===== নিবন্ধন গ্রহণ কার্যালয় ===== */}
      <SectionCard title="নিবন্ধন গ্রহণ করতে ইচ্ছুক কার্যালয়ের নাম">
        <div className="p-5">
          <Field label="নিবন্ধন গ্রহণ করতে ইচ্ছুক কার্যালয়ের নাম" required>
            <Select>
              <option>
                শিল্প সহায়ক কেন্দ্র, বিসিক, ১২৮, মতিঝিল বা/এ, ঢাকা-১০০০
              </option>
            </Select>
          </Field>
        </div>
      </SectionCard>

      <h1 className="text-lg font-bold text-gray-800 mt-8 mb-4">
        নিবন্ধন তথ্য
      </h1>

      {/* ===== কার্যাবলীর তথ্য ===== */}
      <SectionCard title="ক. প্রতিষ্ঠানের কার্যাবলীর তথ্য">
        <div className="p-5">
          <Field label="প্রতিষ্ঠানের প্রধান কার্যাবলী" required>
            <Input placeholder="মোট মোট শিল্প শিল্পের কার্যক্রম করে।" />
          </Field>
        </div>
      </SectionCard>

      {/* ===== বার্ষিক উৎপাদন ক্ষমতা ===== */}
      <SectionCard title="খ. প্রতিষ্ঠানের বার্ষিক উৎপাদন ক্ষমতা">
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr>
                <ThCell>দ্রব্য/সেবার নাম</ThCell>
                <ThCell>পরিমাণ</ThCell>
                <ThCell>পরিমাণ একক</ThCell>
                <ThCell>মূল্য</ThCell>
                <ThCell>একশন</ThCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TdCell>
                  <Input placeholder="নাম লিখুন" className="h-8 text-xs" />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="পরিমাণ লিখুন"
                    className="h-8 text-xs"
                  />
                </TdCell>
                <TdCell>
                  <Select className="h-8 text-xs">
                    <option>নির্বাচন করুন</option>
                  </Select>
                </TdCell>
                <TdCell>
                  <Input placeholder="মূল্য" className="h-8 text-xs" />
                </TdCell>
                <TdCell>
                  <AddButton />
                </TdCell>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-end gap-3 mt-3">
            <span className="text-sm font-medium text-gray-600">
              সর্বমোট
            </span>
            <Input
              placeholder="মূল্য (টাকায়)"
              disabled
              className="w-56 bg-gray-50 text-right"
            />
          </div>
        </div>
      </SectionCard>

      {/* ===== বিক্রয় % ===== */}
      <SectionCard title="গ. বিক্রয় %">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <Field label="স্থানীয়" required>
            <Input defaultValue="0%" />
          </Field>
          <Field label="বিদেশী" required>
            <Input defaultValue="0%" />
          </Field>
        </div>
      </SectionCard>

      {/* ===== জনবল ===== */}
      <SectionCard title="ঘ. প্রতিষ্ঠানের জনবল">
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr>
                <ThCell colSpan={3}>স্থানীয় (বাংলাদেশী)</ThCell>
                <ThCell colSpan={3}>বিদেশী</ThCell>
                <ThCell colSpan={3}>মোট</ThCell>
              </tr>
              <tr>
                <ThCell>পুরুষ</ThCell>
                <ThCell>মহিলা</ThCell>
                <ThCell>মোট</ThCell>
                <ThCell>পুরুষ</ThCell>
                <ThCell>মহিলা</ThCell>
                <ThCell>মোট</ThCell>
                <ThCell>সর্বমোট</ThCell>
                <ThCell>স্থানীয় হার</ThCell>
                <ThCell>বৈদেশিক হার</ThCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TdCell>
                  <Input
                    placeholder="সংখ্যা"
                    className="h-8 text-xs text-center"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="সংখ্যা"
                    className="h-8 text-xs text-center"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="মোট"
                    disabled
                    className="h-8 text-xs text-center bg-gray-50"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="সংখ্যা"
                    className="h-8 text-xs text-center"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="সংখ্যা"
                    className="h-8 text-xs text-center"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="মোট"
                    disabled
                    className="h-8 text-xs text-center bg-gray-50"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="সর্বমোট"
                    disabled
                    className="h-8 text-xs text-center bg-gray-50"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="স্থানীয় হার"
                    disabled
                    className="h-8 text-xs text-center bg-gray-50"
                  />
                </TdCell>
                <TdCell>
                  <Input
                    placeholder="বৈদেশিক হার"
                    disabled
                    className="h-8 text-xs text-center bg-gray-50"
                  />
                </TdCell>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ===== উপযোগ-সেবা ===== */}
      <SectionCard title="ঙ. প্রয়োজনীয় উপযোগ-সেবার বিবরণ">
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr>
                <ThCell>উপযোগ-সেবার নাম</ThCell>
                <ThCell>সংযোগ সুবিধা আছে কিনা</ThCell>
                <ThCell colSpan={2}>
                  নিকটস্থ সংযোগ উৎস হতে সম্ভাব্য দূরত্ব
                </ThCell>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "গ্যাস", key: "gas" },
                { name: "টেলিফোন", key: "tel" },
                { name: "পয়ঃনিষ্কাশন", key: "sewer" },
                { name: "পানি", key: "water" },
                { name: "বিদ্যুৎ", key: "elec" },
                { name: "রাস্তা", key: "road" },
              ].map((util, i) => (
                <tr key={util.key} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <TdCell className="text-left px-3">{util.name}</TdCell>
                  <TdCell>
                    <label className="mr-3 text-xs">
                      <input
                        type="radio"
                        name={util.key}
                        className="mr-1"
                      />
                      হ্যাঁ
                    </label>
                    <label className="text-xs">
                      <input
                        type="radio"
                        name={util.key}
                        className="mr-1"
                      />
                      না
                    </label>
                  </TdCell>
                  <TdCell>
                    <Input
                      placeholder="দূরত্ব"
                      className="h-8 text-xs"
                    />
                  </TdCell>
                  <TdCell>
                    <Select className="h-8 text-xs">
                      <option>নির্বাচন করুন</option>
                    </Select>
                  </TdCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ===== বিনিয়োগ ===== */}
      <SectionCard title="চ. বিনিয়োগ">
        <div className="p-5">
          <p className="text-center font-semibold text-gray-700 text-sm mb-3">
            স্থায়ী বিনিয়োগ
          </p>
          <div className="space-y-3">
            {[
              "ভূমি",
              "ভবন/শেড",
              "যন্ত্রপাতি ও সরঞ্জামাদি",
              "অন্যান্য",
              "চলতি মূলধন (৩ মাসের)",
            ].map((item) => (
              <div
                key={item}
                className="grid grid-cols-1 sm:grid-cols-[1fr,180px] gap-2 items-center"
              >
                <label className="text-sm text-gray-600">{item}</label>
                <TakaInput />
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,180px] gap-2 items-center">
              <label className="text-sm font-semibold text-gray-700">
                সর্বমোট
              </label>
              <Input disabled className="bg-gray-50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,180px] gap-2 items-center">
              <label className="text-sm text-gray-600">
                মার্কিন ডলার প্রেক্ষে রেট
              </label>
              <Input />
            </div>
            <p className="text-[11px] text-red-500">
              এক্সচেঞ্জ রেট বেহেরাজন: বাংলাদেশ ব্যাংক, অনুগ্রহ করে আজকের
              এক্সচেঞ্জ রেট দিয়ে লিখুন
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,180px] gap-2 items-center">
              <label className="text-sm text-gray-600">
                সমপরিমাণ টাকা (মার্কিন ডলার)
              </label>
              <Input />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,180px] gap-2 items-center">
              <label className="text-sm text-gray-600">নিবন্ধন ফি</label>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded transition-colors">
                Govt. Fees Calculator
              </button>
            </div>
          </div>

          {/* বিনিয়োগের উৎস */}
          <p className="text-center font-semibold text-gray-700 text-sm mt-6 mb-3">
            বিনিয়োগের উৎস
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr>
                  <ThCell>উৎস</ThCell>
                  <ThCell>টাকা</ThCell>
                  <ThCell>ডলার</ThCell>
                  <ThCell>ঋণ প্রদানকারী সংস্থা ও দেশের নাম</ThCell>
                </tr>
              </thead>
              <tbody>
                {[
                  "উদ্যোক্তা সম-মূলধন",
                  "স্থানীয় ঋণ",
                  "বিদেশী ঋণ",
                ].map((src) => (
                  <tr key={src}>
                    <TdCell className="text-left px-3">{src}</TdCell>
                    <TdCell>
                      <Input
                        defaultValue="0"
                        className="h-8 text-xs text-center"
                      />
                    </TdCell>
                    <TdCell>
                      <Input
                        defaultValue="0"
                        className="h-8 text-xs text-center"
                      />
                    </TdCell>
                    <TdCell>
                      <Input
                        placeholder="ঋণ প্রদানকারী সংস্থা ও দেশের নাম"
                        className="h-8 text-xs"
                      />
                    </TdCell>
                  </tr>
                ))}
                <tr>
                  <TdCell className="font-medium">সর্বমোট</TdCell>
                  <TdCell>
                    <Input
                      defaultValue="0"
                      disabled
                      className="h-8 text-xs text-center bg-gray-50"
                    />
                  </TdCell>
                  <TdCell>
                    <Input
                      defaultValue="0"
                      disabled
                      className="h-8 text-xs text-center bg-gray-50"
                    />
                  </TdCell>
                  <TdCell></TdCell>
                </tr>
              </tbody>
            </table>
          </div>

          {/* বৈদেশিক ঋণের উৎস */}
          <p className="text-center font-semibold text-gray-700 text-sm mt-6 mb-3">
            বৈদেশিক ঋণের উৎস
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr>
                  <ThCell>দেশের নাম</ThCell>
                  <ThCell>সংস্থার নাম</ThCell>
                  <ThCell>ঋণের পরিমাণ(টাকায়)</ThCell>
                  <ThCell>ঋণ গ্রহণের তারিখ</ThCell>
                  <ThCell>একশন</ThCell>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TdCell>
                    <Select className="h-8 text-xs">
                      <option>নির্বাচন করুন</option>
                    </Select>
                  </TdCell>
                  <TdCell>
                    <Input
                      placeholder="সংস্থার নাম"
                      className="h-8 text-xs"
                    />
                  </TdCell>
                  <TdCell>
                    <Input
                      placeholder="ঋণের পরিমাণ(টাকায়)"
                      className="h-8 text-xs"
                    />
                  </TdCell>
                  <TdCell className="relative">
                    <Input
                      placeholder="তারিখ"
                      className="h-8 text-xs pr-7"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </TdCell>
                  <TdCell>
                    <AddButton />
                  </TdCell>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6 mb-10">
        <button className="bg-sky-400 hover:bg-sky-500 text-white text-sm font-medium px-5 py-2 rounded transition-colors">
          Save as Draft
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
          Next
        </button>
      </div>
    </>
  );
}
