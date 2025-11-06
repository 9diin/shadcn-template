import { Search } from "lucide-react";
import { Input } from "./components/ui/input";

function App() {
    return (
        <div className="w-full h-screen">
            {/* 배너 */}
            <div></div>
            {/* 자회사 링크 */}
            <div></div>
            {/* 헤더 */}
            <header className="w-full flex items-center justify-between">
                <div></div>
                <div>
                    {/* 검색창 */}
                    <div className="flex items-center gap-2">
                        <Search size={18} />
                        <Input placeholder="230,000개 이상의 크리에이티브 검색" />
                    </div>
                    {/* 로그인 */}
                    {/* 회원가입 */}
                </div>
            </header>
        </div>
    );
}

export default App;
