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
        <!-- AI Message -->
        <div class="flex flex-col gap-3 max-w-[85%]">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <span class="text-label-caps font-bold text-primary">ZeuX AI</span>
            </div>
            <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-5">
                <p class="text-body-md text-on-surface">설정하신 <strong>99.95% SLA 목표</strong>를 바탕으로 알림 정책을 생성했습니다. 임계값과 라우팅 규칙을 검토해 주세요.</p>
            </div>
        </div>
    </div>

    <!-- Floating Input Area -->
    <div class="p-6">
        <div class="relative w-full mx-auto">
            <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-6 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg" placeholder="ZeuX AI에게 정책 수정을 요청하세요..." type="text">
            <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                <span class="material-symbols-outlined">send</span>
            </button>
        </div>
    </div>
  </div>

  <!-- Right Panel: Policy Section -->
  <div class="w-full md:w-[65%] flex flex-col relative bg-transparent overflow-hidden">
    <!-- Scrollable Content -->
    <div class="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <div class="max-w-[900px] mx-auto flex flex-col gap-stack-lg pb-32">
            <!-- Header Area -->
            <div class="flex flex-col gap-stack-sm text-center md:text-left">
                <h1 class="font-headline-lg text-headline-lg text-on-background">AI 알림 정책 제안</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant">AI가 생성한 모니터링 및 알림 정책을 검토하고 보완하세요.</p>
            </div>

            <!-- Stepper -->
            <div class="flex items-center justify-between px-2 mb-4">
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-body-sm font-bold border-2 border-primary/50">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                    </div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">업로드</span>
                </div>
                <div class="flex-grow h-px bg-primary mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-body-sm font-bold border-2 border-primary/50">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                    </div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">추출 및 검토</span>
                </div>
                <div class="flex-grow h-px bg-primary mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-body-sm font-bold border-2 border-primary/50">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                    </div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">토폴로지</span>
                </div>
                <div class="flex-grow h-px bg-primary mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center text-body-sm font-bold border-2 border-primary shadow-[0_0_15px_rgba(129,140,248,0.3)]">4</div>
                    <span class="text-label-caps font-label-caps text-primary absolute top-10 whitespace-nowrap">정책 설정</span>
                </div>
                <div class="flex-grow h-px bg-outline-variant/30 mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-body-sm border border-outline-variant/50">5</div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">최종 승인</span>
                </div>
            </div>

            <!-- AI Banner -->
            <div class="w-full bg-primary-container/10 border-l-4 border-primary-container rounded-r-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ai-glow">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                    <p class="font-body-md text-body-md text-on-surface"><span class="font-bold text-primary">99.95% SLA 목표</span>를 달성하기 위한 AI 생성 알림 정책입니다.</p>
                </div>
                <div class="flex flex-col items-end gap-1 font-body-sm text-body-sm text-on-surface-variant">
                    <span class="">소진율(Burn Rate): 14.4x fast · 6x slow</span>
                </div>
            </div>

            <!-- Topology + Monitoring Placement -->
            <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl shadow-xl overflow-hidden">
                <!-- Card Header -->
                <div class="flex items-center justify-between px-5 py-3 border-b border-[#30363D] bg-surface-container-lowest/40">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-tertiary text-[18px]">deployed_code</span>
                        <span class="font-headline-sm text-headline-sm text-on-surface">모니터링 컴포넌트 배치 현황</span>
                        <span class="px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded font-label-caps text-label-caps ml-1">확정 토폴로지: 운영 표준 Multi-AZ</span>
                    </div>
                    <span class="text-body-sm text-on-surface-variant">현재 정책 기준 자동 배치</span>
                </div>

                <!-- Topology Mini Canvas -->
                <div class="topology-bg-mini p-5">
                    <div class="border border-primary/15 rounded-2xl p-4 bg-primary/3 relative">
                        <div class="absolute -top-2.5 left-5 px-2 bg-[#161B22] text-[10px] text-primary font-bold border border-primary/20 rounded">운영 VPC — us-east-1</div>

                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <!-- AZ-A -->
                            <div class="az-box-mini p-3 flex flex-col gap-2 relative">
                                <div class="absolute -top-2.5 left-3 px-1.5 bg-[#1c222d] text-[9px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 A (AZ-A)</div>

                                <div class="bg-surface-container-high border border-primary/30 rounded-xl p-3">
                                    <div class="flex items-center gap-1.5 mb-2">
                                        <span class="material-symbols-outlined text-primary text-[14px]">hub</span>
                                        <span class="text-[10px] font-bold text-on-surface">EKS 워커 노드</span>
                                        <span class="text-[9px] text-outline ml-auto font-label-code">m6i.xlarge</span>
                                    </div>
                                    <div class="text-[8px] text-outline font-bold uppercase mb-1.5">배치된 파드</div>
                                    <div class="flex flex-wrap gap-1">
                                        <span class="mon-pod px-1.5 py-0.5 bg-primary/15 text-primary rounded text-[9px] border border-primary/25">app-service</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-secondary/25 text-secondary rounded text-[9px] border border-secondary/40" style="animation-delay:0.05s">otel-collector</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-tertiary/15 text-tertiary rounded text-[9px] border border-tertiary/25" style="animation-delay:0.1s">node-exporter</span>
                                    </div>
                                </div>

                                <div class="bg-surface-container-highest border border-outline-variant/20 rounded-lg p-2 flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-outline text-[13px]">database</span>
                                    <span class="text-[9px] text-on-surface-variant">RDS Aurora (Writer)</span>
                                </div>
                            </div>

                            <!-- AZ-B -->
                            <div class="az-box-mini p-3 flex flex-col gap-2 relative">
                                <div class="absolute -top-2.5 left-3 px-1.5 bg-[#1c222d] text-[9px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 B (AZ-B)</div>

                                <div class="bg-surface-container-high border border-primary/30 rounded-xl p-3">
                                    <div class="flex items-center gap-1.5 mb-2">
                                        <span class="material-symbols-outlined text-primary text-[14px]">hub</span>
                                        <span class="text-[10px] font-bold text-on-surface">EKS 워커 노드</span>
                                        <span class="text-[9px] text-outline ml-auto font-label-code">m6i.xlarge</span>
                                    </div>
                                    <div class="text-[8px] text-outline font-bold uppercase mb-1.5">배치된 파드</div>
                                    <div class="flex flex-wrap gap-1">
                                        <span class="mon-pod px-1.5 py-0.5 bg-primary/15 text-primary rounded text-[9px] border border-primary/25">app-service</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-tertiary/25 text-tertiary rounded text-[9px] border border-tertiary/40 font-bold" style="animation-delay:0.05s">prometheus</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-tertiary/15 text-tertiary rounded text-[9px] border border-tertiary/25" style="animation-delay:0.1s">loki</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-tertiary/15 text-tertiary rounded text-[9px] border border-tertiary/25" style="animation-delay:0.15s">grafana</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-secondary/25 text-secondary rounded text-[9px] border border-secondary/40" style="animation-delay:0.2s">otel-collector</span>
                                        <span class="mon-pod px-1.5 py-0.5 bg-tertiary/15 text-tertiary rounded text-[9px] border border-tertiary/25" style="animation-delay:0.25s">node-exporter</span>
                                    </div>
                                </div>

                                <div class="bg-surface-container-highest border border-outline-variant/20 rounded-lg p-2 flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-outline text-[13px]">database</span>
                                    <span class="text-[9px] text-on-surface-variant">RDS Aurora (Reader)</span>
                                </div>
                            </div>
                        </div>

                        <!-- Alert Flow -->
                        <div class="border border-tertiary/20 rounded-xl p-3 bg-tertiary/5">
                            <div class="text-[9px] text-tertiary font-bold uppercase mb-2 flex items-center gap-1">
                                <span class="material-symbols-outlined text-[11px]">route</span>알림 라우팅 플로우 (현재 정책 기준)
                            </div>
                            <div class="flex items-center gap-2 flex-wrap text-[9px]">
                                <div class="flex items-center gap-1 bg-surface-container-high rounded-lg px-2.5 py-1.5 border border-outline-variant/25">
                                    <span class="material-symbols-outlined text-outline text-[12px]">sensors</span>
                                    <div>
                                        <div class="font-bold text-on-surface-variant">Node Exporter</div>
                                        <div class="text-outline">각 AZ · 메트릭 수집</div>
                                    </div>
                                </div>
                                <span class="flow-arrow text-lg font-bold">→</span>
                                <div class="flex items-center gap-1 bg-surface-container-high rounded-lg px-2.5 py-1.5 border border-secondary/25">
                                    <span class="material-symbols-outlined text-secondary text-[12px]">call_merge</span>
                                    <div>
                                        <div class="font-bold text-secondary">OTel Collector</div>
                                        <div class="text-outline">각 AZ · 수집/전송</div>
                                    </div>
                                </div>
                                <span class="flow-arrow text-lg font-bold">→</span>
                                <div class="flex items-center gap-1 bg-surface-container-high rounded-lg px-2.5 py-1.5 border border-tertiary/25">
                                    <span class="material-symbols-outlined text-tertiary text-[12px]">monitoring</span>
                                    <div>
                                        <div class="font-bold text-tertiary">Prometheus</div>
                                        <div class="text-outline">AZ-B · 규칙 평가</div>
                                    </div>
                                </div>
                                <span class="flow-arrow text-lg font-bold">→</span>
                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center gap-1.5 bg-error/10 rounded px-2 py-1 border border-error/25">
                                        <span class="w-1.5 h-1.5 rounded-full bg-error flex-shrink-0"></span>
                                        <span class="font-bold text-error">Critical (14.4x)</span>
                                        <span class="font-label-code text-outline">#incident-critical</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 bg-surface-container-high rounded px-2 py-1 border border-outline-variant/20">
                                        <span class="w-1.5 h-1.5 rounded-full bg-tertiary flex-shrink-0"></span>
                                        <span class="font-bold text-on-surface">Warning (6x)</span>
                                        <span class="font-label-code text-outline">#ops-warnings</span>
                                    </div>
                                </div>
                                <span class="flow-arrow text-lg font-bold">→</span>
                                <div class="flex items-center gap-1 bg-surface-container-high rounded-lg px-2.5 py-1.5 border border-outline-variant/20">
                                    <span class="material-symbols-outlined text-outline text-[12px]">bar_chart</span>
                                    <div>
                                        <div class="font-bold text-on-surface">Grafana</div>
                                        <div class="text-outline">AZ-B · 대시보드</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Policy Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Error Budget Burn Rate -->
                <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-6 flex flex-col gap-4 shadow-xl">
                    <h2 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">speed</span>
                        에러 예산 소진 알림
                    </h2>
                    <div class="flex flex-col gap-3">
                        <div class="p-3 rounded-lg border border-error/20 bg-error/5 flex justify-between items-center">
                            <span class="text-body-md text-on-surface">위험 (빠른 소진)</span>
                            <span class="font-label-code text-primary">14.4x</span>
                        </div>
                        <div class="p-3 rounded-lg border border-tertiary/20 bg-tertiary/5 flex justify-between items-center">
                            <span class="text-body-md text-on-surface">경고 (느린 소진)</span>
                            <span class="font-label-code text-primary">6x</span>
                        </div>
                    </div>
                </div>

                <!-- Infrastructure Thresholds -->
                <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-6 flex flex-col gap-4 shadow-xl">
                    <h2 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">memory</span>
                        인프라 임계값
                    </h2>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between text-body-sm text-on-surface-variant">
                                <span>CPU 사용률</span>
                                <span>85%</span>
                            </div>
                            <div class="w-full bg-surface-container-high rounded-full h-1.5">
                                <div class="bg-primary h-1.5 rounded-full" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between text-body-sm text-on-surface-variant">
                                <span>메모리 사용률</span>
                                <span>80%</span>
                            </div>
                            <div class="w-full bg-surface-container-high rounded-full h-1.5">
                                <div class="bg-primary h-1.5 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Notification Routing -->
                <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-6 flex flex-col gap-4 shadow-xl">
                    <h2 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">route</span>
                        알림 라우팅
                    </h2>
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
                            <span class="text-body-sm text-on-surface-variant">위험 (Critical)</span>
                            <span class="text-label-code text-primary">#incident-critical</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-body-sm text-on-surface-variant">경고 (Warning)</span>
                            <span class="text-label-code text-on-surface">#ops-warnings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sticky Footer -->
    <div class="absolute bottom-0 w-full bg-surface-dim/90 backdrop-blur-2xl p-6 flex justify-between items-center z-20">
        <button class="px-6 py-2 border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-variant/30 transition-colors font-body-sm text-body-sm flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            이전
        </button>
        <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm">
                임시 저장
            </button>
            <button @click="router.push('/page5')" class="px-12 py-3 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md font-bold shadow-2xl flex items-center gap-2">
                확인 및 계속하기
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
.ai-glow {
    box-shadow: 0 0 15px 2px rgba(129, 140, 248, 0.15);
}
.topology-bg-mini {
    background-image: radial-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px);
    background-size: 16px 16px;
}
.az-box-mini {
    background: rgba(45, 52, 73, 0.2);
    border: 1px dashed rgba(144, 143, 158, 0.3);
    border-radius: 10px;
}
.mon-pod {
    animation: pod-appear 0.4s ease forwards;
}
@keyframes pod-appear {
    from { opacity: 0; transform: scale(0.8); }
    to   { opacity: 1; transform: scale(1); }
}
.flow-arrow {
    color: rgba(247, 189, 62, 0.6);
}
</style>
