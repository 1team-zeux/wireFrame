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
                <div class="bg-error/5 backdrop-blur-md rounded-xl border border-error/20 p-4">
                    <p class="text-body-sm font-bold text-error mb-2">⚠ 지연시간 SLO 위반</p>
                    <p class="text-body-md text-on-surface">결제 API p95 지연시간이 <strong class="text-error">240ms</strong>로 목표치(<strong>200ms</strong>)를 초과했습니다.</p>
                </div>
            </div>

            <!-- AI Message 2: Root Cause -->
            <div class="flex flex-col gap-2 max-w-[90%]">
                <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-4">
                    <p class="text-body-sm font-bold text-on-surface mb-2">원인 분석 (OTel Trace)</p>
                    <p class="text-body-md text-on-surface mb-2">OTel 트레이스 분석 결과 <strong>DB 쿼리 단계</strong>에서 병목이 확인되었습니다.</p>
                    <div class="bg-surface-container-lowest/50 rounded p-2 font-label-code text-[11px] text-on-surface-variant">
                        <div class="flex justify-between"><span class="text-primary">DB Connection Pool</span><span class="text-error">98% 사용 중</span></div>
                        <div class="flex justify-between mt-1"><span>평균 대기 시간</span><span class="text-error">+185ms</span></div>
                    </div>
                </div>
            </div>

            <!-- AI Message 4: Recommendation -->
            <div class="flex flex-col gap-2 max-w-[90%]">
                <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-4">
                    <p class="text-body-sm font-bold text-on-surface mb-2">권장 조치</p>
                    <ul class="space-y-1.5 text-[12px] text-on-surface-variant">
                        <li class="flex items-start gap-2"><span class="text-primary mt-0.5">1.</span> DB 커넥션 풀 크기 증설 (현재 100 → 200)</li>
                        <li class="flex items-start gap-2"><span class="text-primary mt-0.5">2.</span> billing-api-v2 롤백 검토</li>
                        <li class="flex items-start gap-2"><span class="text-primary mt-0.5">3.</span> 슬로우 쿼리 최적화</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-outline-variant/10 shrink-0">
            <div class="relative w-full">
                <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-5 py-3 text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg pr-14" placeholder="서비스 이상 원인을 질문하세요...">
                <button class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <span class="material-symbols-outlined text-[18px]">send</span>
                </button>
            </div>
        </div>
    </div>

    <!-- RIGHT: Main Dashboard Content -->
    <div class="flex-grow flex flex-col overflow-hidden">
        <!-- Service Context Header -->
        <div class="bg-surface-container/50 border-b border-outline-variant/10 px-6 py-3 flex justify-between items-center shrink-0">
            <div class="flex items-center gap-4">
                <button @click="router.push('/page7')" class="text-on-surface-variant hover:text-on-surface transition-colors">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h1 class="text-headline-md font-bold text-on-surface">SK텔레콤 - 결제 API 서비스 (billing-api)</h1>
                    <p class="text-body-sm text-on-surface-variant">SLA 번들 버전: v1.2 | 리전: Asia-Northeast2</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex flex-col items-end">
                    <span class="text-[10px] text-on-surface-variant uppercase font-bold">수집 상태</span>
                    <span class="text-[11px] text-[#3FB950] flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950] animate-pulse"></span> OTel Collector 정상 수집 중
                    </span>
                </div>
                <select class="bg-surface-container-high border border-outline-variant/30 rounded px-3 py-1.5 text-body-sm font-bold">
                    <option>최근 6시간</option>
                    <option>최근 1시간</option>
                    <option>최근 24시간</option>
                </select>
            </div>
        </div>

        <!-- Scrollable Body -->
        <div class="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-outline-variant/20">

            <!-- Top Row: SLI Dashboard (FR-mon-012) -->
            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
                <!-- Availability SLI -->
                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden">
                    <div class="flex justify-between items-center">
                        <span class="text-label-caps text-on-surface-variant uppercase">SLI: 가용성 (Availability)</span>
                        <span class="px-2 py-0.5 bg-[#3FB950]/20 text-[#3FB950] rounded text-[10px] border border-[#3FB950]/30 font-bold">안전</span>
                    </div>
                    <div class="flex items-baseline gap-2">
                        <span class="text-headline-md font-bold text-on-surface">99.99%</span>
                        <span class="text-[11px] text-on-surface-variant">목표: 99.95%</span>
                    </div>
                    <p class="text-[10px] text-on-surface-variant">남은 에러 예산: 18m 42s (43.2% 남음)</p>
                </div>
                <!-- Latency SLI -->
                <div class="bg-[#161B22]/60 border border-error/30 rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden">
                    <div class="flex justify-between items-center">
                        <span class="text-label-caps text-on-surface-variant uppercase">SLI: 지연시간 (p95)</span>
                        <span class="px-2 py-0.5 bg-error/20 text-error rounded text-[10px] border border-error/30 font-bold animate-pulse">위험</span>
                    </div>
                    <div class="flex items-baseline gap-2">
                        <span class="text-headline-md font-bold text-error">240ms</span>
                        <span class="text-[11px] text-on-surface-variant">목표: &lt; 200ms</span>
                    </div>
                    <p class="text-[10px] text-error">경보 정책 'Slow Burn' 발화 중</p>
                </div>
                <!-- AI Insight -->
                <div class="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-col gap-2 ai-glow">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="material-symbols-outlined text-primary text-[18px]">psychology</span>
                        <span class="text-label-caps text-primary font-bold">AI 진단</span>
                    </div>
                    <p class="text-[12px] text-on-surface leading-tight">지연시간 증가는 <strong>billing-api-v2</strong> 배포 후 DB 커넥션 풀 부족으로 인한 것으로 추정됩니다.</p>
                    <button class="text-primary text-[11px] font-bold mt-1 text-left hover:underline">연관 로그 및 트레이스 보기 →</button>
                </div>
            </div>

            <!-- Middle Section: Unified Timeline View (FR-mon-011) -->
            <div class="px-6 flex flex-col gap-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-body-md font-bold text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-on-surface-variant">timeline</span>
                        통합 타임라인 연동 조회
                    </h2>
                    <span class="text-[11px] text-primary bg-primary/10 px-2 py-1 rounded">차트 구간을 드래그하여 상세 데이터를 필터링하세요</span>
                </div>

                <!-- 4-Lane Timeline Canvas -->
                <div class="border border-outline-variant/20 rounded-xl overflow-hidden flex flex-col bg-[#0D1117] mb-8">
                    <!-- Lane 1: Metric (Prometheus) -->
                    <div class="chart-lane p-4 flex flex-col h-[140px]">
                        <span class="text-[10px] text-on-surface-variant uppercase absolute top-2 left-3">Metrics (Prometheus)</span>
                        <div class="flex-grow relative mt-4">
                            <!-- Selection Box -->
                            <div class="selection-box absolute left-[45%] w-[15%] h-full"></div>
                            <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                <path d="M0,80 L200,75 L400,82 L450,20 L550,15 L600,78 L1000,80" fill="none" stroke="#818cf8" stroke-width="2"></path>
                                <circle cx="500" cy="18" r="4" fill="#ffb4ab" class="animate-pulse"></circle>
                            </svg>
                        </div>
                    </div>

                    <!-- Lane 2: Alert (AI Filtered) -->
                    <div class="chart-lane h-[60px] p-2 flex items-center border-t border-outline-variant/10">
                        <span class="text-[10px] text-on-surface-variant uppercase absolute top-1 left-3">Alerts</span>
                        <div class="w-full h-4 bg-error/20 rounded-full mx-20 relative">
                            <div class="absolute left-[45%] w-[15%] h-full bg-error animate-pulse rounded-full"></div>
                            <span class="absolute left-[45%] -top-6 text-[9px] text-error font-bold uppercase">Critical Alert (Firing)</span>
                        </div>
                    </div>

                    <!-- Lane 3: Log (Loki) -->
                    <div class="chart-lane p-4 flex flex-col bg-[#161B22]/30 h-[150px]">
                        <div class="flex justify-between absolute top-2 left-3 right-3">
                            <span class="text-[10px] text-on-surface-variant uppercase">Logs (Loki)</span>
                            <span class="text-[9px] text-primary bg-primary/20 px-1.5 rounded font-bold">Filtered by Timeline Selection</span>
                        </div>
                        <div class="flex-grow overflow-y-auto mt-4 space-y-1 font-label-code">
                            <div class="flex gap-4 text-[11px] bg-error/5 p-1 rounded border-l-2 border-error">
                                <span class="text-on-surface-variant">14:15:02</span>
                                <span class="text-error font-bold w-12">ERROR</span>
                                <span class="text-on-surface">Connection pool exhausted for DB: postgres-primary</span>
                            </div>
                            <div class="flex gap-4 text-[11px] bg-error/5 p-1 rounded border-l-2 border-error">
                                <span class="text-on-surface-variant">14:15:08</span>
                                <span class="text-error font-bold w-12">ERROR</span>
                                <span class="text-on-surface">Request timeout after 5000ms - upstream service billing-api</span>
                            </div>
                            <div class="flex gap-4 text-[11px] bg-error/5 p-1 rounded border-l-2 border-error">
                                <span class="text-on-surface-variant">14:15:15</span>
                                <span class="text-error font-bold w-12">ERROR</span>
                                <span class="text-on-surface">FATAL: could not connect to server: Connection refused</span>
                            </div>
                        </div>
                    </div>

                    <!-- Lane 4: Trace (Tempo) -->
                    <div class="chart-lane p-4 flex flex-col h-[100px]">
                        <span class="text-[10px] text-on-surface-variant uppercase absolute top-2 left-3">Traces (Tempo)</span>
                        <div class="mt-4 flex flex-col gap-2">
                            <div class="flex items-center gap-3 p-1.5 bg-surface-container-high/30 rounded border border-outline-variant/10">
                                <span class="material-symbols-outlined text-primary text-[16px]">account_tree</span>
                                <div class="flex-grow flex items-center gap-4">
                                    <span class="text-[10px] font-bold text-on-surface w-40 truncate">POST /v1/payments/authorize</span>
                                    <div class="flex-grow h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                                        <div class="bg-primary h-full" style="width: 15%"></div>
                                        <div class="bg-error h-full" style="width: 85%"></div>
                                    </div>
                                    <span class="text-[10px] text-error font-bold w-16 text-right">5240ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Row: Infrastructure & Pipeline Status (FR-mon-001~003) -->
            <div class="px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Infrastructure Health (6 cols) -->
                <div class="lg:col-span-7 bg-[#161B22]/40 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4">
                    <h3 class="text-label-caps text-on-surface-variant font-bold uppercase flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">hub</span>
                        컴포넌트 헬스 (EKS / RDS)
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-surface-container-lowest/50 rounded-lg p-3 text-center border border-outline-variant/10">
                            <div class="text-[10px] text-on-surface-variant mb-1 uppercase">Pod 상태</div>
                            <div class="text-headline-sm font-bold text-[#3FB950]">142/142</div>
                            <div class="text-[9px] text-[#3FB950]">정상</div>
                        </div>
                        <div class="bg-surface-container-lowest/50 rounded-lg p-3 text-center border border-outline-variant/10">
                            <div class="text-[10px] text-on-surface-variant mb-1 uppercase">CPU 부하</div>
                            <div class="text-headline-sm font-bold text-on-surface">78%</div>
                            <div class="text-[9px] text-on-surface-variant">최근 5분 평균</div>
                        </div>
                        <div class="bg-surface-container-lowest/50 rounded-lg p-3 text-center border border-outline-variant/10">
                            <div class="text-[10px] text-on-surface-variant mb-1 uppercase">Memory</div>
                            <div class="text-headline-sm font-bold text-tertiary">92%</div>
                            <div class="text-[9px] text-tertiary">임계치 근접</div>
                        </div>
                        <div class="bg-surface-container-lowest/50 rounded-lg p-3 text-center border border-outline-variant/10">
                            <div class="text-[10px] text-on-surface-variant mb-1 uppercase">DB Conn</div>
                            <div class="text-headline-sm font-bold text-error">98%</div>
                            <div class="text-[9px] text-error">경고 발생</div>
                        </div>
                    </div>
                </div>

                <!-- Data Pipeline Status (5 cols) -->
                <div class="lg:col-span-5 bg-[#161B22]/40 border border-[#30363D] rounded-xl p-5 flex flex-col gap-4">
                    <h3 class="text-label-caps text-on-surface-variant font-bold uppercase flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">settings_input_component</span>
                        관측 데이터 파이프라인
                    </h3>
                    <div class="flex flex-col gap-3">
                        <div class="flex justify-between items-center text-[11px] p-2 bg-surface-container-lowest/30 rounded border border-outline-variant/10">
                            <div class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                                <span class="text-on-surface">Metrics (OTel → Prometheus)</span>
                            </div>
                            <span class="text-on-surface-variant">정상 수집 중 (1m cycle)</span>
                        </div>
                        <div class="flex justify-between items-center text-[11px] p-2 bg-surface-container-lowest/30 rounded border border-outline-variant/10">
                            <div class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                                <span class="text-on-surface">Logs (OTel → Loki)</span>
                            </div>
                            <span class="text-on-surface-variant">정상 수집 중 (Streaming)</span>
                        </div>
                        <div class="flex justify-between items-center text-[11px] p-2 bg-surface-container-lowest/30 rounded border border-outline-variant/10">
                            <div class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></span>
                                <span class="text-on-surface">Traces (OTel → Tempo)</span>
                            </div>
                            <span class="text-on-surface-variant">정상 수집 중 (Sampling 10%)</span>
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
.chart-lane {
    background: rgba(22, 27, 34, 0.5);
    border-bottom: 1px solid rgba(48, 54, 61, 0.5);
    min-height: 100px;
    position: relative;
}
.selection-box {
    background: rgba(129, 140, 248, 0.1);
    border: 1px dashed #818cf8;
    pointer-events: none;
}
.ai-glow {
    box-shadow: 0 0 15px 2px rgba(129, 140, 248, 0.15);
}
</style>
