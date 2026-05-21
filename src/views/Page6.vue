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
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">대시보드</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md py-1" href="#">IaC</a>
</nav>
</div>
</header>

<!-- Main Content Canvas -->
<main class="flex-grow flex flex-row overflow-hidden h-[calc(100vh-65px)]">

    <!-- LEFT: ZeuX AI Chatbot Panel -->
    <div class="w-[320px] shrink-0 flex flex-col border-r border-outline-variant/10 bg-[#0D1117]/60">
        <!-- Chat Header -->
        <div class="px-5 py-4 border-b border-outline-variant/10 flex items-center gap-3 shrink-0">
            <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div>
                <div class="text-label-caps font-bold text-primary">
                    ZeuX AI
                </div>

            </div>
        </div>

        <!-- Chat Messages -->
        <div class="flex-grow overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-outline-variant/20">

            <!-- AI Message 1 -->
            <div class="flex flex-col gap-2 max-w-[90%]">
                <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <span class="material-symbols-outlined text-[14px]">smart_toy</span>
                    </div>
                    <span class="text-label-caps font-bold text-primary">ZeuX AI</span>
                </div>
                <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-4">
                    <p class="text-body-md text-on-surface">글로벌 SLA 현황을 모니터링 중입니다. 현재 <strong class="text-error">SK텔레콤 (SKT)</strong> 환경에서 심각한 이상 징후가 감지되었습니다.</p>
                </div>
            </div>

            <!-- AI Message 2: Critical Alert -->
            <div class="flex flex-col gap-2 max-w-[90%]">
                <div class="bg-error/5 backdrop-blur-md rounded-xl border border-error/20 p-4">
                    <p class="text-body-sm font-bold text-error mb-2">⚠ 긴급 알림</p>
                    <p class="text-body-md text-on-surface">결제 API Burn Rate <strong class="text-error">18.5x</strong> — 에러 예산 소진까지 약 <strong>45분</strong>이 남았습니다. 즉시 확인을 권장합니다.</p>
                </div>
            </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-outline-variant/10 shrink-0">
            <div class="relative w-full">
                <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-5 py-3 text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg pr-14" placeholder="고객사 또는 알람에 대해 질문하세요...">
                <button class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <span class="material-symbols-outlined text-[18px]">send</span>
                </button>
            </div>
        </div>
    </div>

    <!-- RIGHT: Main Dashboard Content -->
    <div class="flex-grow flex flex-col overflow-hidden">
        <!-- Top Global Health Bar -->
        <div class="bg-surface-container/50 border-b border-outline-variant/10 px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-6 shrink-0">
            <div class="flex flex-col">
                <span class="text-label-caps text-on-surface-variant uppercase">전체 관리 테넌트</span>
                <span class="text-headline-md font-bold text-on-surface">2 <span class="text-body-sm font-normal text-on-surface-variant ml-1">Enterprise Clients</span></span>
            </div>
            <div class="flex flex-col">
                <span class="text-label-caps text-on-surface-variant uppercase">유효 Alert (AI Filtered)</span>
                <div class="flex items-baseline gap-2">
                    <span class="text-headline-md font-bold text-error">2</span>
                    <span class="text-body-sm text-on-surface-variant">/ 142 total spikes</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="text-label-caps text-on-surface-variant uppercase">전역 SLA 달성률</span>
                <span class="text-headline-md font-bold text-[#3FB950]">96.95% <span class="text-body-sm font-normal text-on-surface-variant ml-1">avg score</span></span>
            </div>
        </div>

        <div class="flex flex-grow overflow-hidden">
            <!-- Left Section: Customer Grid (Main) -->
            <div class="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-outline-variant/20">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-headline-md font-bold text-on-surface">활성 고객사 환경</h2>
                    <div class="flex gap-2">
                        <button class="bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2 rounded-lg border border-outline-variant/30 text-body-sm transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">filter_list</span> 필터
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <!-- Customer Card: SKT -->
                    <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 hover:border-primary/50 transition-all group relative overflow-hidden shadow-xl">
                        <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded bg-primary/20 flex items-center justify-center font-bold text-primary">S</div>
                                <div>
                                    <h3 class="font-headline-sm text-on-surface">SK텔레콤 (SKT)</h3>
                                    <span class="text-label-caps text-on-surface-variant">Asia-Northeast2 (Seoul)</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-headline-sm font-bold text-on-surface">94%</div>
                                <span class="text-[10px] text-on-surface-variant uppercase">SLA 안정성 점수</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant/10 mb-4">
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">Burn Rate</div>
                                <div class="text-body-md font-bold text-error">18.5x</div>
                            </div>
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">예산 소진 예상</div>
                                <div class="text-body-md font-bold text-on-surface">45분 후</div>
                            </div>
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">유효 알람</div>
                                <div class="text-body-md font-bold text-error">2건</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex -space-x-2">
                                <div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center text-[10px]" title="Payment API">API</div>
                                <div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center text-[10px]" title="Auth">AUTH</div>
                            </div>
                            <button @click="router.push('/page7')" class="bg-primary text-background px-4 py-2 rounded-lg font-bold text-body-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                상세 정보 이동 <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <!-- Customer Card: SK Hynix -->
                    <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 hover:border-primary/50 transition-all group relative overflow-hidden shadow-xl">
                        <div class="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center font-bold text-secondary">H</div>
                                <div>
                                    <h3 class="font-headline-sm text-on-surface">SK하이닉스 (SK Hynix)</h3>
                                    <span class="text-label-caps text-on-surface-variant">Asia-Northeast2 (Seoul)</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-headline-sm font-bold text-[#3FB950]">99.9%</div>
                                <span class="text-[10px] text-on-surface-variant uppercase">SLA 안정성 점수</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant/10 mb-4">
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">Burn Rate</div>
                                <div class="text-body-md font-bold text-on-surface">0.8x</div>
                            </div>
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">예산 소진 예상</div>
                                <div class="text-body-md font-bold text-on-surface">> 30일</div>
                            </div>
                            <div>
                                <div class="text-[10px] text-on-surface-variant uppercase mb-1">유효 알람</div>
                                <div class="text-body-md font-bold text-on-surface">0건</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex -space-x-2">
                                <div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center text-[10px]">CORE</div>
                            </div>
                            <button class="bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg font-bold text-body-sm transition-all flex items-center gap-2">
                                상세 정보 이동 <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
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
.ai-glow {
    box-shadow: 0 0 15px 2px rgba(129, 140, 248, 0.15);
}
</style>
