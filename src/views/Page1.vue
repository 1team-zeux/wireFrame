<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
<div class="text-on-background min-h-screen flex flex-col font-sans antialiased">
<!-- Top Navigation -->
<header class="hidden md:flex bg-surface-dim/70 backdrop-blur-xl flex justify-between items-center w-full px-6 py-[16.5px] max-w-container-max mx-auto flat no shadows border-b border-outline-variant/10 docked full-width top-0 z-50 h-[65px]">
<div class="flex items-center gap-8">
<div class="text-headline-md font-headline-md font-bold text-primary tracking-tight">ZeuX</div>
<nav class="flex gap-6">
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md py-1" href="#">대시보드</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">IaC</a>
</nav>
</div>
</header>

<!-- Main Content Canvas -->
<main class="flex-grow flex flex-col md:flex-row h-[calc(100vh-65px)] overflow-hidden">
  <!-- Left Panel: Chatbot -->
  <div class="w-full md:w-[35%] flex flex-col relative">
    <!-- Inside Left Panel -->
    <div class="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <!-- AI Welcome Message -->
        <div class="flex flex-col gap-3 max-w-[85%]">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <span class="text-label-caps font-bold text-primary">ZeuX AI</span>
            </div>
            <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-5">
                <p class="text-body-md text-on-surface">안녕하세요! 저는 ZeuX AI입니다. SLA 문서를 분석하고 모니터링 정책 구성을 도와드릴 수 있습니다.</p>
            </div>
        </div>
    </div>

    <!-- Floating Input Area -->
    <div class="p-6">
        <div class="relative w-full mx-auto">
            <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-6 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg" placeholder="ZeuX AI에게 무엇이든 물어보세요..." type="text">
            <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                <span class="material-symbols-outlined">send</span>
            </button>
        </div>
    </div>
  </div>

  <!-- Right Panel: Upload Section -->
  <div class="w-full md:w-[65%] flex flex-col relative bg-transparent overflow-hidden">
    <!-- Scrollable Content -->
    <div class="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <div class="max-w-[900px] mx-auto flex flex-col gap-stack-lg pb-32">
            <!-- Header -->
            <div class="flex flex-col gap-stack-sm text-center md:text-left">
                <h1 class="font-headline-lg text-headline-lg text-on-background">고객 SLA 등록</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant">
                    SLA 문서와 API 명세서를 업로드하여 모니터링 정책과 인프라를 자동으로 구성하세요.
                </p>
            </div>

            <!-- Stepper -->
            <div class="flex items-center justify-between px-2 mb-4">
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center text-body-sm font-bold border-2 border-primary shadow-[0_0_15px_rgba(129,140,248,0.3)]">1</div>
                    <span class="text-label-caps font-label-caps text-primary absolute top-10 whitespace-nowrap">업로드</span>
                </div>
                <div class="flex-grow h-px bg-outline-variant/30 mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-body-sm border border-outline-variant/50">2</div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">추출 및 검토</span>
                </div>

                <div class="flex-grow h-px bg-outline-variant/30 mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-body-sm border border-outline-variant/50">3</div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">토폴로지</span>
                </div>
                <div class="flex-grow h-px bg-outline-variant/30 mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-body-sm border border-outline-variant/50">4</div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">정책 설정</span>
                </div>

                <div class="flex-grow h-px bg-outline-variant/30 mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-body-sm border border-outline-variant/50">5</div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">최종 승인</span>
                </div>
            </div>

            <!-- Upload Panels Stack -->
            <div class="flex flex-row gap-6 mt-6">
                <!-- SLA Document -->
                <div class="flex-1 bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-outline-variant transition-colors shadow-xl">
                    <div class="flex items-center justify-between border-b border-outline-variant/10 pb-3">
                        <h2 class="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">description</span>
                            SLA 문서
                        </h2>
                    </div>
                    <div class="flex-grow flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#30363D] rounded-lg bg-surface-container-lowest/50 group-hover:border-primary-container/50 group-hover:bg-primary-container/5 transition-all cursor-pointer min-h-[240px]">
                        <span class="material-symbols-outlined text-5xl text-on-surface-variant mb-4 group-hover:text-primary transition-colors">upload_file</span>
                        <p class="text-body-md font-body-md text-on-surface font-medium text-center">여기에 파일을 끌어다 놓으세요</p>
                        <p class="text-body-sm font-body-sm text-on-surface-variant text-center mt-2">PDF, DOCX, TXT</p>
                    </div>
                </div>

                <!-- API Spec -->
                <div class="flex-1 bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-outline-variant transition-colors shadow-xl">
                    <div class="flex items-center justify-between border-b border-outline-variant/10 pb-3">
                        <h2 class="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">api</span>
                            API 명세서
                        </h2>
                    </div>
                    <div class="flex-grow flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#30363D] rounded-lg bg-surface-container-lowest/50 group-hover:border-primary-container/50 group-hover:bg-primary-container/5 transition-all cursor-pointer mb-2">
                        <span class="material-symbols-outlined text-5xl text-on-surface-variant mb-2 group-hover:text-primary transition-colors">data_object</span>
                        <p class="text-body-md font-body-md text-on-surface font-medium text-center">명세서 파일 업로드</p>
                    </div>
                    <div class="flex flex-col gap-2 mt-auto">
                        <label class="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider font-bold">또는 URL로 가져오기</label>
                        <div class="flex gap-2">
                            <input class="flex-grow bg-[#020617] border border-[#30363D] rounded px-3 py-2 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none transition-shadow" placeholder="https://api.example.com/openapi.json" type="text">
                            <button class="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-4 py-2 rounded border border-outline-variant/30 text-body-sm font-body-sm transition-colors flex items-center gap-2 font-bold">
                                <span class="material-symbols-outlined text-[18px]">download</span> 가져오기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sticky Footer -->
    <div class="absolute bottom-0 w-full bg-surface-dim/90 backdrop-blur-2xl p-6 flex justify-between items-center z-20">
        <button class="px-6 py-2 border border-outline-variant/30 rounded-lg text-on-surface-variant cursor-not-allowed transition-colors font-body-sm text-body-sm flex items-center gap-2" disabled>
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            이전
        </button>
        <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm">
                임시 저장
            </button>
            <button @click="router.push('/page2')" class="px-12 py-3 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md font-bold shadow-2xl flex items-center gap-2">
                <span class="material-symbols-outlined text-[20px]">auto_awesome</span>
                AI 분석 시작
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
        </div>
    </div>
  </div>
</main>
</div>
</template>

<style>
body {
    background-color: #0D1117;
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
}
</style>
