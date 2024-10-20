export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <div className="bg-[#d9d9d9] flex items-center justify-center py-3 rounded-2xl pt-10 mb-4 m-2">
        <img
          src="homeview-min.jpeg"
          alt="logo"
          className="w-2/5 self-center rounded-lg mb-6"
        />
      </div>
      <p className="text-lg text-center">
        Welcome to GeoSense! Click the links below to get started...
      </p>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div className="bg-slate-200 rounded-xl flex flex-col items-center p-5 space-y-4">
          <span className="material-symbols-rounded text-5xl">stethoscope</span>
          <p className="font-semibold text-center">Find Doctors Near You</p>
        </div>
        <div className="bg-slate-200 rounded-xl flex flex-col items-center p-5 space-y-4">
          <span className="material-symbols-rounded text-5xl">
            travel_explore
          </span>
          <p className="font-semibold text-center">Find NGOs Near You</p>
        </div>
      </div>
    </div>
  );
}
