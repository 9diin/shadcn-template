import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const menu = [
    {
        label: "발견",
        newest: false,
    },
    {
        label: "채용",
        newest: true,
    },
    {
        label: "워크숍/커뮤니티",
        newest: false,
    },
    {
        label: "포폴 피드백",
        newest: true,
    },
    {
        label: "에이전시",
        newest: false,
    },
];

function AppHeader() {
    return (
        <header className="w-full flex items-center justify-between py-2 px-8 border-b">
            <div className="flex items-center gap-10">
                {/* 로고 */}
                <img src="src/assets/logo.svg" alt="@LOGO" className="w-30" />
                <nav className="flex items-center gap-4">
                    {menu.map((item) => {
                        return (
                            <div className="flex items-center gap-1 font-medium">
                                {item.label}
                                {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
                            </div>
                        );
                    })}
                </nav>
            </div>
            <div class="flex items-center gap-2">
                <div className="flex items-center border px-3 rounded-full bg-neutral-50">
                    <Search size={18} className="text-neutral-400" />
                    <Input placeholder="230,000개 이상의 크리에이티브 검색" className="w-60 placeholder:text-neutral-400 outline-0 border-none focus-visible:ring-0" />
                </div>
                {/* 로그인 */}
                <Button variant="link">로그인</Button>
                {/* 회원가입 */}
                <Button>회원가입</Button>
            </div>
        </header>
    );
}

export default AppHeader;
