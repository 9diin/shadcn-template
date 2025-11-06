import { Heart } from "lucide-react";
import AppHeader from "./components/common/AppHeader";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";

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
            <main className="py-6">
                {/* 메인 홍보 갤러리 */}
                <section className="flex items-center gap-6 overflow-x-scroll">
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    <Skeleton className="min-w-[520px] w-[520px] h-80" />
                </section>
            </main>
        </div>
    );
}

export default App;
