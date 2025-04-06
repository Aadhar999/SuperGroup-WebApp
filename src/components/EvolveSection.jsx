import { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";

// Assets
import complete_body from "../assets/complete_body.svg";
import front from "../assets/front.svg";
import cabin from "../assets/cabin.svg";
import trunk from "../assets/trunk.svg";
import exterior from "../assets/exterior.svg";
import cabinVideo from "../assets/cabin.mp4";
import frontVideo from "../assets/front.mp4";
import trunkVideo from "../assets/trunk.mp4";
import exteriorVideo from "../assets/exterior.mp4";
import passengerVideo from "../assets/passenger_alpha.mp4";
import commercialVideo from "../assets/commercial_alpha.mp4";

const EvolveSection = () => {
  const [activeVehicle, setActiveVehicle] = useState("passenger");
  const [activeView, setActiveView] = useState("complete");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTabs, setShowTabs] = useState(false);
  const videoRef = useRef(null);

  // Show tabs on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTabs(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vehicleTabs = [
    {
      key: "passenger",
      label: "Passenger vehicles",
      desc: "Revving up Nonwoven innovation from interior to exterior.",
      views: [
        { key: "complete", label: "Complete Body", icon: complete_body, video: passengerVideo },
        { key: "front", label: "Front", icon: front, video: frontVideo },
        { key: "cabin", label: "Cabin", icon: cabin, video: cabinVideo },
        { key: "trunk", label: "Trunk", icon: trunk, video: trunkVideo },
        { key: "exterior", label: "Exterior", icon: exterior, video: exteriorVideo },
      ],
    },
    {
      key: "commercial",
      label: "Commercial vehicles",
      desc: "Advancing Nonwoven engineering for heavy-duty vehicles.",
      views: [
        { key: "complete", label: "Complete Body", icon: complete_body, video: commercialVideo },
      ],
    },
  ];

  const currentVehicle = vehicleTabs.find(v => v.key === activeVehicle);
  const views = currentVehicle?.views || [];
  const currentView = views.find(v => v.key === activeView) || views[0];

  const handleViewChange = (viewKey) => {
    setActiveView(viewKey);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full h-screen bg-black text-white flex flex-col justify-between relative overflow-hidden">
      {showTabs ? (
        <div className={`transition-opacity duration-700 ${showTabs ? "opacity-100" : "opacity-0"}`}>
          {/* Heading */}
          <div className="text-center pt-10">
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              Evolving the drive with <span className="font-bold">360-degree</span><br />
              nonwoven solutions
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-1 overflow-hidden">
            {/* Vehicle Tabs */}
            <div className="pl-10 pr-6 w-[300px] py-10 space-y-10 relative">
              {vehicleTabs.map(({ key, label, desc }) => (
                <div
                  key={key}
                  onClick={() => {
                    setActiveVehicle(key);
                    setActiveView("complete");
                  }}
                  className="relative pl-4 cursor-pointer group"
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-300 ${
                      activeVehicle === key ? "bg-white opacity-100" : "opacity-0"
                    }`}
                  />
                  <h3
                    className={`text-2xl font-semibold transition-colors ${
                      activeVehicle === key
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                  >
                    {label}
                  </h3>
                  <p
                    className={`text-base mt-1 transition-colors ${
                      activeVehicle === key
                        ? "text-gray-300"
                        : "text-gray-700 group-hover:text-gray-400"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="flex flex-1 flex-col items-center justify-center relative">
              {currentView?.video && (
                <video
                  ref={videoRef}
                  src={currentView.video}
                  autoPlay
                  muted
                  loop
                  className="max-w-[700px] w-full h-auto object-contain"
                />
              )}

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute bottom-20 ml-[70%] bg-white/20 hover:bg-white/30 p-3 rounded-full"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* View Thumbnails */}
              {views.length > 0 && (
                <div className="flex justify-center gap-6 mt-10">
                  {views.map((view) => (
                    <button
                      key={view.key}
                      onClick={() => handleViewChange(view.key)}
                      className="flex flex-col items-center text-xs transition-all duration-200"
                    >
                      <img
                        src={view.icon}
                        alt={`${view.label} icon`}
                        className={`w-auto h-[100px] mb-1 ${
                          view.key === activeView ? "opacity-100" : "opacity-40"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-medium mb-2">
            Evolving the drive with <span className="font-bold">360-degree</span>
          </h1>
          <p className="text-xl mb-20">nonwoven solutions</p>
          <p className="text-sm opacity-50">
            Scroll to explore <br />
            (Only written for prototype)
          </p>
        </div>
      )}
    </section>
  );
};

export default EvolveSection;
