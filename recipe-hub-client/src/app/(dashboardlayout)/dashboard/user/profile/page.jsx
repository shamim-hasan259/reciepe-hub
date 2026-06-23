import { getUserSession } from "@/lib/session/session";

export default async function ProfileAndPremiumServer() {
  const user = await getUserSession();

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0c1017] p-6 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white dark:bg-[#111c2a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-serif">
            Edit Profile
          </h2>

          {/* User Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-md">
              <img
                src={user?.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {user?.name}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Form with Server Action */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                defaultValue={user?.name}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#162235] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Profile Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={user?.image}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#162235] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              Save Changes
            </button>
          </form>
        </div>

        <div className="w-full md:w-[360px] bg-white dark:bg-[#111c2a] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col items-center justify-between text-center transition-colors duration-300">
          <div>
            <div className="text-4xl mb-4">👑</div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-serif">
              Go Premium
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 px-2">
              Unlock unlimited recipe uploads and exclusive features
            </p>

            {/* Features List */}
            <ul className="text-left space-y-3 max-w-[240px] mx-auto text-sm text-gray-600 dark:text-gray-300 mb-8">
              <li className="flex items-center gap-2.5">
                <span className="text-green-500 dark:text-green-400 font-bold">
                  ✓
                </span>{" "}
                Unlimited recipe uploads
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-green-500 dark:text-green-400 font-bold">
                  ✓
                </span>{" "}
                Premium profile badge
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-green-500 dark:text-green-400 font-bold">
                  ✓
                </span>{" "}
                Priority visibility
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-green-500 dark:text-green-400 font-bold">
                  ✓
                </span>{" "}
                Exclusive features
              </li>
            </ul>
          </div>

          {/* Pricing & Premium Form Button */}
          <form
            action="/api/checkout_sessions"
            method="POST"
            className="w-full"
          >
            {/* <input type="hidden" name="plan_id" value="premium_lifetime" /> */}

            <div className="text-3xl font-black text-orange-500 dark:text-orange-400 mb-5">
              $9.99{" "}
              <span className="text-sm font-normal text-gray-400 dark:text-gray-500">
                / lifetime
              </span>
            </div>

            <button
              type="submit"
              role="link"
              className="w-full bg-[#18181b] dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 hover:bg-black dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white py-3 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2"
            >
              👑 Upgrade to Premium
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
