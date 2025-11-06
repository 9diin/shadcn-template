1. npm create vite@latest
2. npm install tailwindcss @tailwindcss/vite
3. src/index.css 파일을 초기화한다.
4. @import "tailwindcss"; 해당 코드를 index.css에 붙여넣기 한다.
5. vite.config.js 파일을 갱신한다.
6. root 경로에 jsconfig.json 파일을 생성한다.
7. 아래 코드를 jsconfig.json에 붙여넣기 한다.
   {
   "compilerOptions": {
   "paths": {
   "@/_": ["./_"]
   }
   }
   }
8. shadcn ui 설치: npx shadcn@latest init
