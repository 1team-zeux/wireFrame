<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function selectCostPriority(value: string) {
    const input = document.getElementById('cost-priority-value') as HTMLInputElement
    input.value = value

    const text = document.getElementById('cost-priority-text') as HTMLElement
    const display = document.getElementById('cost-priority-display') as HTMLElement
    text.textContent = value
    display.style.color = '#dae2fd'
    display.style.borderStyle = 'solid'
    display.style.borderColor = 'rgba(189,194,255,0.5)'

    document.querySelectorAll<HTMLElement>('.cost-option').forEach(btn => {
        const dot = btn.querySelector<HTMLElement>('.option-dot')
        if (btn.dataset.value === value) {
            btn.style.borderWidth = '2px'
            btn.style.borderColor = '#bdc2ff'
            btn.style.backgroundColor = 'rgba(189,194,255,0.1)'
            if (dot) dot.style.backgroundColor = '#bdc2ff'
        } else {
            btn.style.borderWidth = '1px'
            btn.style.borderColor = 'rgba(69,70,83,0.3)'
            btn.style.backgroundColor = ''
            if (dot) dot.style.backgroundColor = 'transparent'
        }
    })
}
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
        <!-- AI Cost Priority Recommendation -->
        <div class="flex flex-col gap-3 max-w-[85%]">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <span class="text-label-caps font-bold text-primary">ZeuX AI</span>
            </div>
            <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-5 flex flex-col gap-4">
                <div>
                    <p class="text-label-caps font-bold text-on-surface-variant mb-2 uppercase tracking-wider">비용 우선순위 추천</p>
                    <p class="text-body-md text-on-surface">결제 처리 서비스의 <strong>99.99% 가용성</strong> 목표 및 미션 크리티컬 등급을 고려하면 고가용성 우선 정책이 적합합니다. 장애 발생 시 금전적 손실이 직결되기 때문입니다.</p>
                </div>
                <!-- Recommended Option -->
                <button class="cost-option w-full text-left p-3 rounded-lg border-2 border-primary/60 bg-primary/10 hover:bg-primary/20 transition-all flex items-center gap-3"
                        data-value="SLA 우선 (고가용성)"
                        @click="selectCostPriority('SLA 우선 (고가용성)')">
                    <div class="w-5 h-5 rounded-full border-2 border-primary flex-shrink-0 flex items-center justify-center">
                        <div class="option-dot w-2.5 h-2.5 rounded-full"></div>
                    </div>
                    <div class="flex flex-col flex-grow">
                        <div class="flex items-center gap-2">
                            <span class="text-body-md font-bold text-primary">SLA 우선 (고가용성)</span>
                            <span class="bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/30 font-label-caps text-label-caps">추천</span>
                        </div>
                        <span class="text-body-sm text-on-surface-variant">다중 가용 영역, 자동 장애조치, 비용 ↑</span>
                    </div>
                </button>
                <!-- Other Options -->
                <div class="flex flex-col gap-2">
                    <p class="text-label-caps text-on-surface-variant">다른 선택지</p>
                    <button class="cost-option w-full text-left p-3 rounded-lg border border-outline-variant/30 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center gap-3"
                            data-value="균형 (Balanced)"
                            @click="selectCostPriority('균형 (Balanced)')">
                        <div class="w-5 h-5 rounded-full border-2 border-outline-variant flex-shrink-0 flex items-center justify-center">
                            <div class="option-dot w-2.5 h-2.5 rounded-full"></div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-body-md font-bold text-on-surface">균형 (Balanced)</span>
                            <span class="text-body-sm text-on-surface-variant">성능과 비용의 균형, 일반적인 선택</span>
                        </div>
                    </button>
                    <button class="cost-option w-full text-left p-3 rounded-lg border border-outline-variant/30 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center gap-3"
                            data-value="비용 최적화 (Cost Optimized)"
                            @click="selectCostPriority('비용 최적화 (Cost Optimized)')">
                        <div class="w-5 h-5 rounded-full border-2 border-outline-variant flex-shrink-0 flex items-center justify-center">
                            <div class="option-dot w-2.5 h-2.5 rounded-full"></div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-body-md font-bold text-on-surface">비용 최적화 (Cost Optimized)</span>
                            <span class="text-body-sm text-on-surface-variant">최소 비용, SLA 목표 충족 불가 위험</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Floating Input Area -->
    <div class="p-6">
        <div class="relative w-full mx-auto">
            <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-6 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg" placeholder="ZeuX AI에게 보완 정보 입력..." type="text">
            <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                <span class="material-symbols-outlined">send</span>
            </button>
        </div>
    </div>
  </div>

  <!-- Right Panel: Review Section -->
  <div class="w-full md:w-[65%] flex flex-col relative bg-transparent overflow-hidden">
    <!-- Scrollable Content -->
    <div class="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <div class="max-w-[900px] mx-auto flex flex-col gap-stack-lg pb-32">
            <!-- Header Area -->
            <div class="flex flex-col gap-stack-sm text-center md:text-left">
                <h1 class="font-headline-lg text-headline-lg text-on-background">SLA 등록 마법사</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant">여러 서비스에 대해 AI가 추출한 서비스 수준 계약(SLA)을 검토하고 보완하세요.</p>
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
                    <div class="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center text-body-sm font-bold border-2 border-primary shadow-[0_0_15px_rgba(129,140,248,0.3)]">2</div>
                    <span class="text-label-caps font-label-caps text-primary absolute top-10 whitespace-nowrap">추출 및 검토</span>
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

            <!-- Global Metadata Card -->
            <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-6 flex flex-col gap-4 shadow-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div class="flex flex-col gap-1">
                        <label class="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-bold">고객사 명</label>
                        <input class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary transition-all" type="text" value="SK텔레콤 (SKT)">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label class="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-bold">사업 부서</label>
                        <input class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary transition-all" type="text" value="MNO · T-Payment 사업부">
                    </div>
                    <div class="flex flex-col gap-1 mt-2">
                        <label class="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-bold">주 리전 (Primary Region)</label>
                        <select class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary transition-all appearance-none">
                            <option value="">리전 선택...</option>
                            <option>us-east-1</option>
                            <option selected>ap-northeast-2</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-1 mt-2">
                        <label class="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider font-bold flex items-center gap-1">
                            비용 우선순위
                            <span class="text-[10px] text-primary/60 font-normal normal-case tracking-normal ml-1">← AI 추천에서 선택</span>
                        </label>
                        <div id="cost-priority-display" class="bg-[#020617]/50 border border-dashed border-primary/20 rounded-md px-3 py-2 font-body-md text-body-md flex items-center justify-between select-none cursor-default" style="color: rgba(198,197,213,0.4);">
                            <span id="cost-priority-text">AI 추천에서 선택해주세요</span>
                            <span class="material-symbols-outlined text-[16px]">keyboard_arrow_left</span>
                        </div>
                        <input type="hidden" id="cost-priority-value" value="">
                    </div>
                </div>
            </div>

            <!-- Service Group 1 -->
            <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl flex flex-col overflow-hidden shadow-2xl">
                <div class="flex items-center justify-between p-4 border-b border-outline-variant/10 bg-primary/5">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">01</div>
                        <h2 class="font-headline-sm text-headline-sm text-primary">결제 처리 서비스 (Payment Processing)</h2>
                    </div>
                    <div class="flex items-center gap-2 bg-[#064e3b]/20 text-[#34d399] px-3 py-1 rounded-full border border-[#34d399]/30 font-label-caps text-label-caps">
                        <span class="w-2 h-2 rounded-full bg-[#34d399]"></span>
                        AI 분석 완료
                    </div>
                </div>

                <div class="p-6 flex flex-col gap-8">
                    <!-- Service SLA Params -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">티어 레벨</label>
                            <select class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary transition-all appearance-none">
                                <option>Tier 1 (미션 크리티컬)</option>
                                <option>Tier 2</option>
                                <option>Tier 3</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">예상 트래픽</label>
                            <input class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-label-code text-label-code focus:outline-none focus:border-primary transition-all" type="text" value="5,000 TPS">
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">가용성 목표</label>
                            <div class="relative">
                                <input class="w-full bg-[#020617] border border-outline-variant/30 rounded-md pl-3 pr-8 py-2 text-on-surface font-label-code text-label-code focus:outline-none focus:border-primary transition-all" type="text" value="99.99">
                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-code">%</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">지연시간 목표 (p95)</label>
                            <div class="relative">
                                <input class="w-full bg-[#020617] border border-outline-variant/30 rounded-md pl-3 pr-10 py-2 text-on-surface font-label-code text-label-code focus:outline-none focus:border-primary transition-all" type="text" value="200">
                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-sm">ms</span>
                            </div>
                        </div>
                    </div>

                    <!-- Endpoint Mapping for Service 1 -->
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between">
                            <h3 class="text-body-md font-bold text-on-surface">엔드포인트 매핑 및 중요도</h3>
                            <span class="text-label-caps text-on-surface-variant">명세서: payment_v1.yaml</span>
                        </div>
                        <div class="border border-outline-variant/20 rounded-lg overflow-hidden bg-surface-container-lowest/50">
                            <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 border-b border-outline-variant/20 bg-surface-variant/30 font-label-caps text-label-caps text-on-surface-variant">
                                <div>엔드포인트 경로</div>
                                <div>중요도</div>
                                <div>포함 여부</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 border-b border-outline-variant/10 items-center hover:bg-surface-variant/20 transition-colors">
                                    <div class="font-label-code text-label-code text-primary">POST /v1/payments/authorize</div>
                                    <div class="bg-[#7f1d1d]/20 text-[#fca5a5] px-2 py-0.5 rounded text-[10px] border border-[#fca5a5]/30 uppercase tracking-wide">크리티컬</div>
                                    <div class="flex items-center justify-center w-12">
                                        <div class="w-8 h-4 bg-primary rounded-full relative cursor-pointer"><div class="absolute right-0.5 top-0.5 w-3 h-3 bg-background rounded-full"></div></div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 items-center hover:bg-surface-variant/20 transition-colors">
                                    <div class="font-label-code text-label-code text-on-surface">GET /v1/payments/{id}/status</div>
                                    <div class="bg-surface-variant/50 text-on-surface-variant px-2 py-0.5 rounded text-[10px] border border-outline-variant/20 uppercase tracking-wide">보통</div>
                                    <div class="flex items-center justify-center w-12">
                                        <div class="w-8 h-4 bg-primary rounded-full relative cursor-pointer"><div class="absolute right-0.5 top-0.5 w-3 h-3 bg-background rounded-full"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Group 2 -->
            <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl flex flex-col overflow-hidden shadow-2xl">
                <div class="flex items-center justify-between p-4 border-b border-outline-variant/10 bg-primary/5">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">02</div>
                        <h2 class="font-headline-sm text-headline-sm text-primary">계정 관리 서비스 (Account Management)</h2>
                    </div>
                    <div class="flex items-center gap-2 bg-[#064e3b]/20 text-[#34d399] px-3 py-1 rounded-full border border-[#34d399]/30 font-label-caps text-label-caps">
                        <span class="w-2 h-2 rounded-full bg-[#34d399]"></span>
                        AI 분석 완료
                    </div>
                </div>

                <div class="p-6 flex flex-col gap-8">
                    <!-- Service SLA Params -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">티어 레벨</label>
                            <select class="bg-[#020617] border border-outline-variant/30 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary transition-all appearance-none">
                                <option>Tier 2</option>
                                <option>Tier 1</option>
                                <option>Tier 3</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">가용성 목표</label>
                            <div class="relative">
                                <input class="w-full bg-[#020617] border border-outline-variant/30 rounded-md pl-3 pr-8 py-2 text-on-surface font-label-code text-label-code focus:outline-none focus:border-primary transition-all" type="text" value="99.9">
                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-code">%</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="font-body-sm text-body-sm text-on-surface-variant">지연시간 목표 (p95)</label>
                            <div class="relative">
                                <input class="w-full bg-[#020617] border border-outline-variant/30 rounded-md pl-3 pr-10 py-2 text-on-surface font-label-code text-label-code focus:outline-none focus:border-primary transition-all" type="text" value="500">
                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-sm">ms</span>
                            </div>
                        </div>
                    </div>

                    <!-- Endpoint Mapping for Service 2 -->
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between">
                            <h3 class="text-body-md font-bold text-on-surface">엔드포인트 매핑 및 중요도</h3>
                            <span class="text-label-caps text-on-surface-variant">명세서: accounts_v2.json</span>
                        </div>
                        <div class="border border-outline-variant/20 rounded-lg overflow-hidden bg-surface-container-lowest/50">
                            <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 border-b border-outline-variant/20 bg-surface-variant/30 font-label-caps text-label-caps text-on-surface-variant">
                                <div>엔드포인트 경로</div>
                                <div>중요도</div>
                                <div>포함 여부</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 border-b border-outline-variant/10 items-center hover:bg-surface-variant/20 transition-colors">
                                    <div class="font-label-code text-label-code text-on-surface">GET /v1/accounts/{user_id}/balance</div>
                                    <div class="bg-surface-variant/50 text-on-surface-variant px-2 py-0.5 rounded text-[10px] border border-outline-variant/20 uppercase tracking-wide">보통</div>
                                    <div class="flex items-center justify-center w-12">
                                        <div class="w-8 h-4 bg-primary rounded-full relative cursor-pointer"><div class="absolute right-0.5 top-0.5 w-3 h-3 bg-background rounded-full"></div></div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-[1fr_auto_auto] gap-4 p-3 items-center hover:bg-surface-variant/20 transition-colors">
                                    <div class="font-label-code text-label-code text-on-surface">PATCH /v1/accounts/profile</div>
                                    <div class="bg-surface-variant/50 text-on-surface-variant px-2 py-0.5 rounded text-[10px] border border-outline-variant/20 uppercase tracking-wide">보통</div>
                                    <div class="flex items-center justify-center w-12">
                                        <div class="w-8 h-4 bg-primary rounded-full relative cursor-pointer"><div class="absolute right-0.5 top-0.5 w-3 h-3 bg-background rounded-full"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Service Button -->
            <button class="w-full border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                <span class="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">add_circle</span>
                <span class="text-body-md font-bold text-on-surface-variant group-hover:text-on-surface">다른 서비스 추가</span>
            </button>
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
            <button @click="router.push('/page3')" class="px-12 py-3 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md font-bold shadow-2xl flex items-center gap-2">
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
</style>
