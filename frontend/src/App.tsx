import './App.css'
import {IoSettingsOutline} from "react-icons/io5";
import {Switch} from "@heroui/switch";
import {Card, Skeleton} from "@heroui/react";
import {WiDaySunny, WiSunrise, WiSunset} from "react-icons/wi";
import {useState} from "react";

function App() {
    const [isCycle, setIsCycle] = useState<boolean>(false);

    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([]);

    const handleSelectFolder = async () => {
        const result = await window.electronAPI.selectFolder();
        if (!result) return;

        const { folderPath, imageFiles } = result;
        setSelectedPath(folderPath);

        // Kombiniere absolute Pfade
        const imagePaths = imageFiles.map(file => `file://${folderPath}/${file}`);
        setImages(imagePaths);
    };

  return (
    <main>
        <nav>
            <h2>Wallpapermanager</h2>
            <button>
                <IoSettingsOutline />
            </button>
        </nav>
        <section className="wallpaperSection">
            {images.length > 0
                ? images.map((src, index) => (
                    <div key={index} className="wallpaperItem">
                        <img src={src} alt={`Wallpaper ${index}`} />
                        <div className="hiddenImgOverlay">
                            <button>SET AS WALLPAPER</button>
                        </div>
                    </div>
                ))
                : Array.from({ length: 9 }).map((_, i) => (
                    <Card key={i} className="w-[200px]" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="h-24 rounded-lg bg-default-300" />
                        </Skeleton>
                    </Card>
                ))}



        </section>
        <section className="dayNightCycleSection">
            <div className="dncCheck">
            <p>Day-Night Cycle</p>
            <Switch defaultChecked={isCycle} color="success" onChange={() => setIsCycle(!isCycle)}></Switch>
            </div>

            <div className={isCycle ? "ddZone" : "ddZoneDisabled"}>
                <WiSunrise />
            </div>
            <div className={isCycle ? "ddZone" : "ddZoneDisabled"}>
                <WiDaySunny />
            </div>
            <div className={isCycle ? "ddZone" : "ddZoneDisabled"}>
                <WiSunset />
            </div>

            <div className="selectFolder">
                {selectedPath && <p>{selectedPath}</p>}
                <button onClick={handleSelectFolder}>Select folder</button>
            </div>
        </section>
    </main>
  )
}

export default App
