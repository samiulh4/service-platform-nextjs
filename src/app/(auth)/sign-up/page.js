"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    identity: "",
    email: "",
    mobile: "",
    gender: "",
    birthday: "",
    password: "",
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileRef = useRef(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  function removePhoto() {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...form, user_photo: photo };
    console.log("Sign up:", payload);
  }

  const inputClass =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500";

  const labelClass =
    "block text-sm/6 font-medium text-gray-900 dark:text-gray-100";

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <h1 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
          Create your account
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* User Photo */}
          <div className="flex flex-col items-center gap-3">
            <div
              onClick={() => fileRef.current?.click()}
              className="relative group cursor-pointer"
            >
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-indigo-600 ring-offset-2"
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center ring-2 ring-gray-300 dark:ring-white/20 ring-offset-2">
                  <svg
                    className="h-10 w-10 text-gray-400 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-xs text-white font-medium">Upload</span>
              </div>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              className="hidden"
            />
            {photoPreview && (
              <button
                type="button"
                onClick={removePhoto}
                className="text-xs text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 font-medium"
              >
                Remove photo
              </button>
            )}
            {!photoPreview && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Click to upload profile photo
              </p>
            )}
          </div>

          {/* Name + Identity */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Md.Samiul Haque"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="identity" className={labelClass}>
                Identity
              </label>
              <div className="mt-2">
                <input
                  id="identity"
                  name="identity"
                  type="text"
                  required
                  placeholder="samiulossp@gmail.com"
                  value={form.identity}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Email + Mobile */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="samiulossp@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="mobile" className={labelClass}>
                Mobile number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="01905199337"
                  value={form.mobile}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Gender + Birthday */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="gender" className={labelClass}>
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  required
                  value={form.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select gender</option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="birthday" className={labelClass}>
                Birthday
              </label>
              <div className="mt-2">
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                  value={form.birthday}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Min 8 characters"
                value={form.password}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Create account
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
