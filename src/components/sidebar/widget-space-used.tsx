export function WidgetSpaceUsed() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="text-xs/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-violet-100">
        <div className="h-2 w-[80%] bg-violet-500"></div>
      </div>

      <div className="space-x-3">
        <button
          className="text-sm font-medium text-violet-500 hover:text-violet-600"
          type="button"
        >
          Dismiss
        </button>
        <button
          className="text-sm font-medium text-violet-700 hover:text-violet-900"
          type="button"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  )
}
