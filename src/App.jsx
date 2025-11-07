import { ArrowUpDown, Brush, Camera, CirclePlay, Eye, Gem, Heart, IdCard, MousePointerClick, Package, Palette, Panda, PenTool, Sparkles, Type } from "lucide-react";
import AppHeader from "./components/common/AppHeader";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";
import SkeletonImageCard from "./components/skeleton/ImageCard";

function App() {
    const gallery = ["", "", "", "", "", "", ""];
    const categories = [
        {
            icon: Camera,
            label: "전체",
            isActive: true, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: CirclePlay,
            label: "영상/모션그래픽",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Palette,
            label: "그래픽 디자인",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: IdCard,
            label: "브랜딩/편집",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: MousePointerClick,
            label: "UI/UX",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: PenTool,
            label: "일러스트레이션",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Camera,
            label: "디지털 아트",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Sparkles,
            label: "AI",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Panda,
            label: "캐릭터 디자인",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Package,
            label: "제품/패키지 디자인",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Camera,
            label: "포토그래피",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Type,
            label: "타이포그래피",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Gem,
            label: "공예",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: Brush,
            label: "파인아트",
            isActive: false, // 라벨 색상 통제를 위한 속성
        },
    ];

    return (
        <div className="w-full h-screen">
            {/* 배너 */}
            <div className="w-full h-15 flex items-center justify-center bg-[#4EABFF] text-xl font-semibold">
                <p className="text-white">레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍</p>
            </div>
            {/* 자회사 링크 */}
            <div className="w-full h-[34px] flex items-center gap-3 px-8">
                {/* <img src="" alt="" /> */}
                <Separator orientation="vertical" className="h-3!" />
                <p className="text-sm font-medium">notefolio</p>
                <Separator orientation="vertical" className="h-3!" />
                <p className="text-sm text-neutral-400 font-bold">LOUD</p>
            </div>
            {/* 헤더 */}
            <AppHeader />
            <main className="w-full flex flex-col items-center py-6">
                {/* 메인 홍보 갤러리 */}
                <section className="w-full flex items-center gap-6 overflow-x-scroll">
                    {gallery.map(() => (
                        <Skeleton className="min-w-[520px] w-[520px] h-80" />
                    ))}
                </section>
                {/* STIKCY MENU */}
                <section className="flex gap-10 mt-20">
                    <div className="flex flex-col gap-2">
                        {/* 아이콘 */}
                        <ArrowUpDown className="text-neutral-700" />
                        {/* 아이콘 라벨 */}
                        <p className="text-sm">정렬</p>
                    </div>
                    <Separator orientation="vertical" className="h-10!" />
                    <div className="flex items-center gap-12">
                        {categories.map((category) => {
                            const IconComponent = category.icon;

                            return (
                                <div className="flex flex-col items-center gap-2">
                                    <IconComponent className="text-neutral-700" />
                                    <p className="text-sm">{category.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {/* IMAGE LIST */}
                <section className="w-full grid grid-cols-6 gap-6 mt-6 px-20">
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                </section>
            </main>
        </div>
    );
}

export default App;
