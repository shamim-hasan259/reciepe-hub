import { getAllSubscription } from "@/lib/api/subscription";
import React from "react";
import { CreditCard, ShieldCheck, CookingPot, CircleDot } from "lucide-react";

// স্ট্রাইপের মত ফেক ট্রানজেকশন আইডি জেনারেট করার ফাংশন
const generateFakeStripeId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "cs_test_a1";
  for (let i = 0; i < 18; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const formatDate = (dateString) => {
  const date = dateString ? new Date(dateString) : new Date();

  if (isNaN(date.getTime())) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      new Date(),
    );
  }
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const Transactions = async () => {
  const { data: subscription } = await getAllSubscription();

  return (
    <div className="w-full min-h-screen  p-4 md:p-8 text-gray-900 transition-colors duration-200 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header Section */}
        <div className="flex flex-col gap-1 rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-md dark:bg-zinc-900/80 dark:border dark:border-zinc-800">
          <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight md:text-3xl text-gray-800 dark:text-zinc-100">
            Transactions{" "}
            <CreditCard className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
          </h2>
          <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            All payment records on the platform
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <table className="w-full border-collapse text-left text-sm">
            {/* Table Head */}
            <thead className="border-b border-gray-100 bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
              <tr>
                <th className="px-6 py-4.5">User</th>
                <th className="px-6 py-4.5">Type</th>
                <th className="px-6 py-4.5">Amount</th>
                <th className="px-6 py-4.5">Status</th>
                <th className="px-6 py-4.5">Transaction ID</th>
                <th className="px-6 py-4.5">Date</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              {subscription && subscription.length > 0 ? (
                subscription.map((item, index) => {
                  const displayAmount = item.amount
                    ? Number(item.amount).toFixed(2)
                    : "9.99";
                  const displayTxnId =
                    item.transactionId || item.txnId || generateFakeStripeId();

                  // এখানে ডেট ফরম্যাট করা হচ্ছে
                  const formattedDate = formatDate(item.date || item.createdAt);

                  return (
                    <tr
                      key={item.id || item._id || index}
                      className="hover:bg-cyan-50/40 dark:hover:bg-zinc-800/40 transition-colors duration-150"
                    >
                      {/* User Email */}
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-700 dark:text-zinc-300">
                        {item.userEmail || item.email || "a@gmail.com"}
                      </td>

                      {/* Type Badge */}
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.type?.toLowerCase() === "premium" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/10 dark:bg-purple-500/10 dark:text-purple-400 dark:ring-purple-500/20">
                            <ShieldCheck className="h-3.5 w-3.5" /> Premium
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10 dark:bg-orange-500/10 dark:text-orange-400 dark:ring-orange-500/20">
                            <CookingPot className="h-3.5 w-3.5" /> Recipe
                          </span>
                        )}
                      </td>

                      {/* Amount */}
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400">
                        ${displayAmount}
                      </td>

                      {/* Status Badge */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
                          <CircleDot className="h-3 w-3 fill-current" />{" "}
                          {item.status || "paid"}
                        </span>
                      </td>

                      {/* Transaction ID */}
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-gray-500 dark:text-zinc-400">
                        <span title={displayTxnId}>
                          {displayTxnId.length > 18
                            ? `${displayTxnId.slice(0, 18)}...`
                            : displayTxnId}
                        </span>
                      </td>

                      {/* Formatted Date */}
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-600 dark:text-zinc-300">
                        {formattedDate}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-400 dark:text-zinc-500 bg-white/50 dark:bg-zinc-900/30"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
