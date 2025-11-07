import { ArrowUpDown, BadgeCheck, BriefcaseBusiness, Brush, Camera, CirclePlay, Compass, Crosshair, Gem, IdCard, Layers, MousePointerClick, Package, Palette, Panda, PenTool, Sparkles, Type, WandSparkles } from "lucide-react";
import AppHeader from "./components/common/AppHeader";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";
import SkeletonImageCard from "./components/skeleton/ImageCard";
import { Card } from "./components/ui/card";
import { Badge } from "./components/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

function App() {
    const gallery = ["", "", "", "", "", "", ""];
    const categories = [
        {
            icon: Layers,
            label: "전체",
            isActive: true, // 라벨 색상 통제를 위한 속성
        },
        {
            icon: CirclePlay,
            label: "영상/모션그래픽",
            isActive: false,
        },
        {
            icon: Palette,
            label: "그래픽 디자인",
            isActive: false,
        },
        {
            icon: IdCard,
            label: "브랜딩/편집",
            isActive: false,
        },
        {
            icon: MousePointerClick,
            label: "UI/UX",
            isActive: false,
        },
        {
            icon: PenTool,
            label: "일러스트레이션",
            isActive: false,
        },
        {
            icon: Camera,
            label: "디지털 아트",
            isActive: false,
        },
        {
            icon: Sparkles,
            label: "AI",
            isActive: false,
        },
        {
            icon: Panda,
            label: "캐릭터 디자인",
            isActive: false,
        },
        {
            icon: Package,
            label: "제품/패키지 디자인",
            isActive: false,
        },
        {
            icon: Camera,
            label: "포토그래피",
            isActive: false,
        },
        {
            icon: Type,
            label: "타이포그래피",
            isActive: false,
        },
        {
            icon: Gem,
            label: "공예",
            isActive: false,
        },
        {
            icon: Brush,
            label: "파인아트",
            isActive: false,
        },
    ];
    const mentors = [
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "디자이너",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "디자이너",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "마케터",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "마케터",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "디자이너",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
        {
            imgUrl: "",
            name: "개발자 9Diin",
            career: "시니어(7년차)",
            job: "마케터",
            role: "현 마이리얼트립 프로덕트 디자이너",
        },
    ];
    const recruitments = [
        {
            imgUrl: "",
            logo: "",
            title: "그래픽 디자이너 (3D) 채용",
            company: "토스플레이스",
        },
        {
            imgUrl: "",
            logo: "",
            title: "광고 대행사 디자이너 채용 (3년 이상)",
            company: "브레이커스",
        },
        {
            imgUrl: "",
            logo: "",
            title: "[미리캔버스] 그래픽 디자이너(템플릿 디자이너)",
            company: "미리디",
        },
        {
            imgUrl: "",
            logo: "",
            title: "그래픽 디자이너 (3D) 채용",
            company: "토스플레이스",
        },
        {
            imgUrl: "",
            logo: "",
            title: "광고 대행사 디자이너 채용 (3년 이상)",
            company: "브레이커스",
        },
        {
            imgUrl: "",
            logo: "",
            title: "[미리캔버스] 그래픽 디자이너(템플릿 디자이너)",
            company: "미리디",
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
                <Skeleton className="w-[18px] h-[18px] rounded-full" />
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
                <section className="sticky top-14 z-10 w-full flex items-center justify-center py-2 gap-10 mt-20 bg-white">
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
                <section className="w-full grid grid-cols-6 gap-6 mt-4 px-20">
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
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                    <SkeletonImageCard />
                </section>
                {/* 포트폴리오 피드백부터 커리어 상담까지! */}
                <section className="w-full flex flex-col gap-6 py-12 px-20 mt-12 bg-black">
                    <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">포트폴리오 피드백부터 커리어 상담까지!</h3>
                    <div className="grid grid-cols-6 gap-6">
                        {/* 멘토 카드 */}
                        {mentors.map((mentor) => {
                            return (
                                <Card className="w-full p-0 gap-0">
                                    <div className="relative w-full">
                                        <Skeleton className="w-full h-52 rounded-t-lg rounded-b-none" />
                                        {mentor.job === "마케터" && (
                                            <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-blue-600">
                                                <Crosshair />
                                                {mentor.job}
                                            </Badge>
                                        )}
                                        {mentor.job === "디자이너" && (
                                            <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-green-600">
                                                <WandSparkles />
                                                {mentor.job}
                                            </Badge>
                                        )}
                                    </div>
                                    {/* 멘토 정보 */}
                                    <div className="flex flex-col gap-2 p-4">
                                        <p className="text-lg font-semibold">{mentor.name} 멘토</p>
                                        <Separator className="mb-1" />
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1">
                                                <BadgeCheck size={18} fill="#dc2626" className="text-white" />
                                                <p className="text-sm">{mentor.career}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {mentor.job === "마케터" && <BriefcaseBusiness size={18} fill="#2563eb" className="text-white" />}
                                                {mentor.job === "디자이너" && <BriefcaseBusiness size={18} fill="#16a34a" className="text-white" />}
                                                <p className="text-sm line-clamp-1">{mentor.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </section>
                {/* 디자이너 채용 정보는 노트폴리오에서! */}
                <section className="w-full flex flex-col gap-6 py-12 px-20 bg-neutral-100">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">디자이너 채용 정보는 노트폴리오에서!</h3>
                    <div className="grid grid-cols-6 gap-6">
                        {recruitments.map((recruitment) => {
                            return (
                                <Card className="w-full h-fit p-0 gap-3 border-none shadow-none bg-transparent">
                                    <Skeleton className="w-full h-52 rounded-lg bg-neutral-200" />
                                    <div className="flex gap-2">
                                        {/* 로고 */}
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            {/* 타이틀 */}
                                            <p className="text-[15px] font-semibold line-clamp-1">{recruitment.title}</p>
                                            {/* 회사명 */}
                                            <p className="text-sm text-neutral-700">{recruitment.company}</p>
                                        </div>
                                    </div>
                                </Card>
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
