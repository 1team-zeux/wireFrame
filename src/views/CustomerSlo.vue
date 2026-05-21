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
                <div class="text-label-caps font-bold text-primary">ZeuX AI</div>
                <div class="flex items-center gap-1">
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
                    <p class="text-body-md text-on-surface">SK텔레콤 SLA 현황을 분석했습니다. <strong class="text-error">billing-api</strong>의 에러 예산 소진율이 <strong class="text-error">14.4x Fast Burn</strong> 상태입니다.</p>
                </div>
            </div>


        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-outline-variant/10 shrink-0">
            <div class="relative w-full">
                <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-5 py-3 text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg pr-14" placeholder="서비스 현황에 대해 질문하세요...">
                <button class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <span class="material-symbols-outlined text-[18px]">send</span>
                </button>
            </div>
        </div>
    </div>

    <!-- RIGHT: Main Dashboard Content -->
    <div class="flex-grow flex flex-col overflow-hidden">
        <!-- Customer Context Header -->
        <div class="bg-surface-container/50 border-b border-outline-variant/10 px-6 py-4 flex justify-between items-end shrink-0">
            <div>
                <div class="flex items-center gap-4 mb-1">
                    <button @click="router.push('/page6')" class="text-on-surface-variant hover:text-on-surface transition-colors">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 class="text-headline-lg font-bold text-on-surface">SK텔레콤 (SKT) SLA 통합 현황</h1>
                </div>
                <p class="text-body-md text-on-surface-variant">t.world 운영 환경의 실시간 모니터링 및 서비스 수준 목표 준수 현황입니다.</p>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-body-sm text-on-surface-variant">조회 기간:</span>
                <select class="bg-surface-container-high border border-outline-variant/30 rounded px-3 py-1.5 text-body-sm font-bold">
                    <option>지난 24시간</option>
                    <option>지난 7일</option>
                    <option>이번 달</option>
                </select>
            </div>
        </div>

        <!-- Scrollable Body -->
        <div class="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-outline-variant/20">

            <!-- Top Row: Critical Summary -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4 shadow-xl">
                    <div class="flex justify-between items-start">
                        <span class="text-label-caps text-on-surface-variant uppercase">전체 에러 예산 소진</span>
                        <span class="material-symbols-outlined text-error">warning</span>
                    </div>
                    <div>
                        <div class="text-headline-xl font-bold text-on-surface">56.8%</div>
                        <div class="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                            <div class="bg-error h-full" style="width: 56.8%"></div>
                        </div>
                    </div>
                </div>

                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4 shadow-xl">
                    <div class="flex justify-between items-start">
                        <span class="text-label-caps text-on-surface-variant uppercase">남은 예산 (시간)</span>
                        <span class="material-symbols-outlined text-secondary">account_balance_wallet</span>
                    </div>
                    <div>
                        <div class="text-headline-xl font-bold text-on-surface">18m 42s</div>
                        <p class="text-[10px] text-on-surface-variant mt-2">현재 윈도우 기준 잔여 예산</p>
                    </div>
                </div>

                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4 shadow-xl">
                    <div class="flex justify-between items-start">
                        <span class="text-label-caps text-on-surface-variant uppercase">AI 예측 SLA 위반</span>
                        <span class="material-symbols-outlined text-tertiary">auto_graph</span>
                    </div>
                    <div>
                        <div class="text-headline-xl font-bold text-tertiary">~17일 후</div>
                        <p class="text-[10px] text-on-surface-variant mt-2">현재 소진율 유지 시 예상 시점</p>
                    </div>
                </div>

                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4 shadow-xl">
                    <div class="flex justify-between items-start">
                        <span class="text-label-caps text-on-surface-variant uppercase">평균 소진율 (Burn Rate)</span>
                        <span class="material-symbols-outlined text-error">local_fire_department</span>
                    </div>
                    <div>
                        <div class="flex items-baseline gap-2">
                            <span class="text-headline-xl font-bold text-error">2.4x</span>
                            <span class="text-[10px] text-error bg-error/20 px-1.5 py-0.5 rounded font-bold">Fast Burn</span>
                        </div>
                        <p class="text-[10px] text-on-surface-variant mt-2">활성 유효 알람: 2건</p>
                    </div>
                </div>
            </div>

            <!-- Middle Section: Service SLO List -->
            <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl overflow-hidden shadow-xl mb-8">
                <div class="p-4 border-b border-outline-variant/10 bg-surface-container-low/50 flex justify-between items-center">
                    <h2 class="text-headline-sm font-bold text-on-surface">서비스별 수준 목표 (SLOs)</h2>
                    <div class="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full text-[10px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        실시간 동기화 중
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-label-caps text-on-surface-variant border-b border-outline-variant/10 bg-surface-container-lowest/30">
                                <th class="px-6 py-4 font-bold uppercase">서비스 명</th>
                                <th class="px-6 py-4 font-bold uppercase">예산 소진율</th>
                                <th class="px-6 py-4 font-bold uppercase text-right">남은 예산</th>
                                <th class="px-6 py-4 font-bold uppercase text-right">Burn Rate</th>
                                <th class="px-6 py-4 font-bold uppercase text-center">알람 상태</th>
                                <th class="px-6 py-4 font-bold uppercase text-right">액션</th>
                            </tr>
                        </thead>
                        <tbody class="text-body-md divide-y divide-outline-variant/10">
                            <!-- billing-api -->
                            <tr class="hover:bg-surface-variant/10 transition-colors bg-error/5">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-error text-[18px]">bolt</span>
                                        <span class="font-label-code font-bold text-on-surface">billing-api</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
                                            <div class="bg-error h-full" style="width: 85%"></div>
                                        </div>
                                        <span class="text-[12px] font-bold text-error">85%</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right font-label-code">4m 12s</td>
                                <td class="px-6 py-4 text-right text-error font-bold font-label-code">14.4x</td>
                                <td class="px-6 py-4 text-center">
                                    <span class="px-2 py-0.5 bg-error/20 text-error rounded text-[10px] font-bold border border-error/30">CRITICAL</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button @click="router.push('/page8')" class="px-3 py-1.5 bg-surface-container-highest hover:bg-primary hover:text-background rounded-lg text-[11px] font-bold transition-all">Service Detail</button>
                                </td>
                            </tr>
                            <!-- catalog-search -->
                            <tr class="hover:bg-surface-variant/10 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
                                        <span class="font-label-code text-on-surface">catalog-search</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
                                            <div class="bg-tertiary h-full" style="width: 60%"></div>
                                        </div>
                                        <span class="text-[12px] font-bold text-tertiary">60%</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right font-label-code">12m 30s</td>
                                <td class="px-6 py-4 text-right text-tertiary font-label-code">1.2x</td>
                                <td class="px-6 py-4 text-center">
                                    <span class="text-on-surface-variant">-</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="px-3 py-1.5 bg-surface-container-highest rounded-lg text-[11px] font-bold opacity-50 cursor-not-allowed">Service Detail</button>
                                </td>
                            </tr>
                            <!-- auth-service -->
                            <tr class="hover:bg-surface-variant/10 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-on-surface-variant text-[18px]">lock</span>
                                        <span class="font-label-code text-on-surface">auth-service</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
                                            <div class="bg-[#3FB950] h-full" style="width: 25%"></div>
                                        </div>
                                        <span class="text-[12px] font-bold text-[#3FB950]">25%</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right font-label-code">28m 00s</td>
                                <td class="px-6 py-4 text-right text-[#3FB950] font-label-code">0.5x</td>
                                <td class="px-6 py-4 text-center">
                                    <span class="text-on-surface-variant">-</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="px-3 py-1.5 bg-surface-container-highest rounded-lg text-[11px] font-bold opacity-50 cursor-not-allowed">Service Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bottom Section: Infrastructure & Insights Split -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <!-- Infrastructure Cluster Health -->
                <div class="xl:col-span-2 bg-[#161B22]/60 border border-[#30363D] rounded-xl p-5 shadow-xl">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-headline-sm font-bold text-on-surface">인프라 클러스터 상태</h3>
                        <span class="text-label-code text-[11px] text-on-surface-variant">ID: skt-prod-cluster</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-[11px] text-on-surface-variant uppercase">CPU 사용률</div>
                            <div class="text-headline-md font-bold text-on-surface">78%</div>
                            <div class="w-full bg-surface-container rounded-full h-1">
                                <div class="bg-primary h-full" style="width: 78%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-[11px] text-on-surface-variant uppercase">Memory 사용률</div>
                            <div class="text-headline-md font-bold text-tertiary">92%</div>
                            <div class="w-full bg-surface-container rounded-full h-1">
                                <div class="bg-tertiary h-full" style="width: 92%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-[11px] text-on-surface-variant uppercase">Pod 가동률</div>
                            <div class="text-headline-md font-bold text-[#3FB950]">142 <span class="text-body-sm font-normal text-on-surface-variant">/ 142</span></div>
                            <div class="flex gap-1 mt-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Intelligent Insights (Customer Specific) -->
                <div class="bg-primary/5 border border-primary/20 rounded-xl p-5 shadow-xl ai-glow">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-primary">psychology</span>
                        <h3 class="text-label-caps text-primary font-bold uppercase">AI SKT 분석 리포트</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="pb-3 border-b border-outline-variant/10">
                            <p class="text-[12px] text-on-surface leading-relaxed">
                                <span class="font-bold text-error">지연시간 위험:</span> 결제 API의 지연시간이 최근 1시간 동안 15% 증가했습니다. DB 커넥션 병목이 예상됩니다.
                            </p>
                        </div>
                        <div>
                            <p class="text-[12px] text-on-surface leading-relaxed">
                                <span class="font-bold text-[#3FB950]">비용 절감 기회:</span> 카탈로그 검색 서비스의 트래픽 패턴 분석 결과, 새벽 시간대 노드 수를 20% 더 줄일 수 있습니다.
                            </p>
                        </div>
                        <button class="w-full py-2 bg-primary/20 text-primary rounded-lg font-bold text-[11px] hover:bg-primary/30 transition-colors mt-2">
                            상세 AI 진단 보고서 보기
                        </button>
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
