import './index.css';

export default function App() {
  return (
    <main>
      <div className="flex h-screen">
        <section className="flex-1 p-10 h-full">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="src/assets/images/icon_avatar.png"
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="pl-3 flex flex-col justify-center">
                <p className="text-xl text-white">hello,</p>
                <p className="font-bold text-2xl text-white">London</p>
              </div>
            </div>

            <form className="flex items-center bg-borderfillblue border-2 border-borderblue rounded-full pl-4 pr-2 py-1 w-80">
              <input
                type="text"
                placeholder="Search Location"
                className="flex-grow text-sm text-black bg-transparent focus:outline-none"
              />
              <button type="submit">
                <img
                  src="src/assets/images/arrow.png"
                  alt="search"
                  className="w-6 h-6"
                />
              </button>
            </form>
          </div>

          {/* Weather Cards */}
          <div className="flex items-center justify-between mt-8 space-x-6">
            {/* Weather Card */}
            <div
              className="flex flex-col bg-amber-200 w-[60%] p-5 rounded-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('src/assets/images/image.png')",
              }}
            >
              <div className="flex items-start">
                <img
                  src="src/assets/images/cloud.png"
                  alt="weather"
                  className="w-10 h-10"
                />
                <div className="pl-3 flex flex-col justify-center">
                  <p className="text-xl text-black">Weather</p>
                  <p className="font-bold text-2xl text-black">
                    What’s the weather
                  </p>
                </div>
              </div>
              <div className="mt-4 ml-2 flex flex-col justify-center">
                <p className="text-4xl font-bold text-textblue">22°C</p>
                <p className="font-bold text-lg text-textblue">Partly cloudy</p>
              </div>
              <div className="flex items-center justify-between mt-4 ">
                <div className="flex flex-col justify-center items-center bg-pressure rounded-2xl p-4 w-30 h-20">
                  <p className="text-sm text-white">Pressure</p>
                  <p className="font-bold text-lg text-white">800 mb</p>
                </div>
                <div className="flex flex-col  justify-center items-center bg-visibility rounded-2xl p-4 w-30 h-20">
                  <p className="text-sm text-white">Visibility</p>
                  <p className="font-bold text-lg text-white">4.3 km</p>
                </div>
                <div className="flex flex-col  justify-center items-center bg-white rounded-2xl p-4 w-30 h-20">
                  <p className="text-sm text-black">Humidity</p>
                  <p className="font-bold text-lg text-black">87%</p>
                </div>
              </div>
            </div>

            {/* Another Card (Placeholder) */}
            <div
              className="flex flex-col bg-amber-200 w-[60%] p-5 rounded-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('src/assets/images/image1.png')",
              }}
            >
              <div className="flex items-start">
                <img
                  src="src/assets/images/wind.png"
                  alt="wind"
                  className="w-10 h-10"
                />
                <div className="pl-3 flex flex-col justify-center">
                  <p className="text-xl text-black">Wind Status</p>
                  <p className="font-bold text-2xl text-black">
                    What’s the wind
                  </p>
                </div>
              </div>
              <div className="mt-4 ml-2 flex flex-col justify-center">
                <p className="text-4xl font-bold text-textblue">5.71 m/s</p>
                <p className="font-bold text-lg text-textblue">Broken cloud</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col justify-center items-center bg-winddir rounded-2xl p-4 w-50 h-20">
                  <p className="text-sm text-black">Wind Direction</p>
                  <p className="font-bold text-lg text-black">268°</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-windgust rounded-2xl p-4 w-50 h-20">
                  <p className="text-sm text-black">Wind Gust Speed</p>
                  <p className="font-bold text-lg text-black">7.41</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-3 flex flex-col justify-center mt-3">
            <p className="text-xl text-white">Today's </p>
            <p className="font-bold text-2xl text-white">Daylight Schedule</p>
          </div>
          <img
            src="./src/assets/images/Group 1.png"
            alt="sunstatus"
            className="w-xs mx-auto"
          />
        </section>

        {/* Right Side Section */}
        <aside className="w-[35%] h-full bg-gradient-to-b from-[#051937] to-[#004d7a] p-4 text-white">
          {/* Right side content */}
        </aside>
      </div>
    </main>
  );
}
