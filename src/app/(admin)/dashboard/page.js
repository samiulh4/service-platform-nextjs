const statCards = [
  {
    label: "My Desk",
    value: 49,
    gradient: "from-purple-500 to-violet-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "In Process",
    value: 59,
    gradient: "from-teal-400 to-teal-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Approved",
    value: 22,
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Others",
    value: 4,
    gradient: "from-red-400 to-red-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
];

const draftApplications = [
  {
    text: "Draft application for BIDA Service: Security Clearance Re-Investigation- New",
    updated: "Updated 1 month ago",
  },
  {
    text: "Draft application for National Board of Revenue (NBR)- e-TIN for Company / ETIN-12Jul2026-00001",
    updated: "Updated 1 month ago",
  },
  {
    text: "Draft application for Bangladesh Bank- Approval of Mid/Long Term Loan (From OBU) / BB781-26Apr2026-001",
    updated: "Updated 3 months ago",
  },
  {
    text: "Draft application for Bangladesh Bank- Issuance of Shares in favor of Non-Residents / BB757-26Apr2026-002",
    updated: "Updated 3 months ago",
  },
];

const quickLinks = [
  {
    label: "BIDA Registration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    label: "VIP/CIP Lounge",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Visa Recommendation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Import Permission",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: "Work Permit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Remittance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "IRC Recommendation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Office of the Registrar of Joint Stock Companies and Firms (RJSC)",
    dot: "bg-red-500",
  },
  {
    label: "Security Clearance",
    dot: "bg-orange-400",
  },
];

export default function DashboardPage() {
  return (
    <>
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.label}
            className={`relative overflow-hidden rounded-lg px-5 py-4 flex items-center justify-between shadow-sm bg-gradient-to-br ${card.gradient}`}
          >
            <div className="relative z-10 text-white">
              <p className="text-2xl font-bold leading-tight">{card.value}</p>
              <p className="text-sm">{card.label}</p>
            </div>
            <div className="relative z-10 w-10 h-10 rounded-md bg-white/20 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10" />
          </div>
        ))}
      </div>

      {/* Select a Service */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-[#2E9BE6] mb-4">
          Select a service
        </h2>
        <div className="max-w-xl mx-auto flex items-stretch rounded-full border-2 border-violet-500 overflow-hidden shadow-sm">
          <div className="flex items-center pl-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
          <select className="flex-1 px-3 py-2.5 text-sm text-gray-500 outline-none bg-transparent appearance-none cursor-pointer">
            <option>Select a service</option>
            <option>BIDA Registration</option>
            <option>Import Permission</option>
            <option>Work Permit</option>
          </select>
          <button
            type="button"
            className="bg-violet-500 hover:bg-violet-600 text-white font-semibold text-sm px-8 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Draft Applications */}
      <div className="mb-8">
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {draftApplications.map((item, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-between gap-2 py-3"
            >
              <p className="text-sm text-gray-700">
                {item.text}
                <span className="italic text-gray-400 ml-1">
                  {item.updated}
                </span>
              </p>
              <button
                type="button"
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 rounded transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 border border-blue-300 text-blue-500 text-sm font-medium px-4 py-1.5 rounded hover:bg-blue-50 transition-colors"
        >
          More Draft Applications
        </button>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-blue-500 font-semibold mb-3">Quick Link</h3>
        <div className="bg-gray-100 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                className="flex items-center justify-between bg-white border border-gray-200 rounded px-4 py-3 text-left hover:shadow-sm transition-shadow"
              >
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  {link.icon ? (
                    link.icon
                  ) : (
                    <span
                      className={`w-4 h-4 rounded-full ${link.dot} flex-shrink-0`}
                    />
                  )}
                  {link.label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
