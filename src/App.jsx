import { Heart } from "lucide-react";
import AppHeader from "./components/common/AppHeader";
import { Separator } from "./components/ui/separator";

function App() {
    return (
        <div className="w-full h-screen">
            {/* 배너 */}
            <div className="w-full h-15 flex items-center justify-center bg-[#4EABFF] text-xl font-semibold">
                <p className="text-white">레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍</p>
            </div>
            {/* 자회사 링크 */}
            <div className="w-full h-[34px] flex items-center gap-3 px-8">
                <img src="" alt="" />
                <Separator orientation="vertical" className="h-3!" />
                <p className="text-sm font-medium">notefolio</p>
                <Separator orientation="vertical" className="h-3!" />
                <p className="text-sm text-neutral-400 font-bold">LOUD</p>
            </div>
            {/* 헤더 */}
            <AppHeader />
        </div>
    );
}

export default App;
