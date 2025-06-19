import './App.css'
import {IoSettingsOutline} from "react-icons/io5";
import {Switch} from "@heroui/switch";
import {Card, Skeleton} from "@heroui/react";
import {WiDaySunny, WiSunrise, WiSunset} from "react-icons/wi";
import {useState} from "react";

function App() {
    const [isCycle, setIsCycle] = useState<boolean>(true);

  return (
    <main>
        <nav>
            <h2>Wallpapermanager</h2>
            <button>
                <IoSettingsOutline />
            </button>
        </nav>
        <section className="wallpaperSection">
            <div>
                <img src="../public/placeholder.png" alt=""/>
                <div className="hiddenImgOverlay">
                    <button>
                        SET AS WALLPAPER
                    </button>
                </div>
            </div>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
            <Card className="w-[200px]" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
            </Card>
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
        </section>
    </main>
  )
}

export default App
