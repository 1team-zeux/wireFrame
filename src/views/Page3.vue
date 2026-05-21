<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function switchTopology(id: string) {
    document.querySelectorAll<HTMLElement>('.topology-section').forEach(el => el.classList.remove('active'))
    document.querySelectorAll<HTMLElement>('.topo-tab').forEach(el => el.classList.remove('active'))
    document.getElementById('topology-' + id)!.classList.add('active')
    document.getElementById('tab-' + id)!.classList.add('active')
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

<main class="flex-grow flex flex-col md:flex-row h-[calc(100vh-65px)] overflow-hidden">
  <!-- Left Panel: Chatbot -->
  <div class="w-full md:w-[30%] flex flex-col relative">
    <div class="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <div class="flex flex-col gap-3 max-w-[85%]">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <span class="text-label-caps font-bold text-primary">ZeuX AI</span>
            </div>
            <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-5">
                <p class="text-body-md text-on-surface mb-3"><strong>SLA 우선 고가용성</strong> 정책을 기반으로 고가용성을 만족하는 <strong>3가지 토폴로지</strong>를 생성했습니다.</p>
                <p class="text-body-sm text-on-surface-variant">선택하신 정책에 따라 모든 옵션이 Multi-AZ 구성을 기본으로 하며, 운영 방식과 비용 구조가 다릅니다.</p>
            </div>
        </div>
    </div>
    <div class="p-6">
        <div class="relative w-full mx-auto">
            <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-6 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg" placeholder="ZeuX AI에게 토폴로지 수정 요청..." type="text">
            <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                <span class="material-symbols-outlined">send</span>
            </button>
        </div>
    </div>
  </div>

  <!-- Right Panel -->
  <div class="w-full md:w-[70%] flex flex-col relative bg-transparent overflow-hidden">
    <div class="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-outline-variant/20">
        <div class="max-w-[1400px] mx-auto flex flex-col gap-stack-lg pb-32">

            <!-- Header -->
            <div class="flex flex-col gap-stack-sm text-center md:text-left">
                <div class="flex items-center gap-3 justify-center md:justify-start">
                    <h1 class="font-headline-lg text-headline-lg text-on-background">운영 인프라 토폴로지 추천</h1>
                </div>
                <p class="font-body-lg text-body-lg text-on-surface-variant">다중 서비스 수용이 가능한 고가용성 아키텍처</p>
            </div>

            <!-- Stepper -->
            <div class="flex items-center justify-between px-2 mb-4 max-w-[900px]">
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-body-sm font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">업로드</span>
                </div>
                <div class="flex-grow h-px bg-primary mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-body-sm font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                    <span class="text-label-caps font-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">추출 및 검토</span>
                </div>
                <div class="flex-grow h-px bg-primary mx-2"></div>
                <div class="flex flex-col items-center gap-2 relative z-10">
                    <div class="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center text-body-sm font-bold border-2 border-primary shadow-[0_0_15px_rgba(129,140,248,0.3)]">3</div>
                    <span class="text-label-caps font-label-caps text-primary absolute top-10 whitespace-nowrap">토폴로지</span>
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

            <!-- Topology Toggle Tabs -->
            <div class="flex gap-2 p-1.5 bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] shadow-xl">
                <button @click="switchTopology('t1')" id="tab-t1" class="topo-tab active flex-1 flex flex-col items-center py-3 px-3 rounded-lg font-bold">
                    <div class="flex items-center gap-1.5 text-body-sm"><span class="material-symbols-outlined text-[15px]">star</span>추천: 운영 표준</div>
                    <div class="text-[10px] mt-0.5 opacity-80 font-normal">Multi-AZ · EKS · $8,450~$9,100/월</div>
                </button>
                <button @click="switchTopology('t2')" id="tab-t2" class="topo-tab flex-1 flex flex-col items-center py-3 px-3 rounded-lg font-bold">
                    <div class="flex items-center gap-1.5 text-body-sm"><span class="material-symbols-outlined text-[15px]">view_in_ar</span>서버리스 HA</div>
                    <div class="text-[10px] mt-0.5 opacity-80 font-normal">Multi-AZ · ECS · $4,500~$5,200/월</div>
                </button>
                <button @click="switchTopology('t3')" id="tab-t3" class="topo-tab flex-1 flex flex-col items-center py-3 px-3 rounded-lg font-bold">
                    <div class="flex items-center gap-1.5 text-body-sm"><span class="material-symbols-outlined text-[15px]">public</span>멀티 리전 DR</div>
                    <div class="text-[10px] mt-0.5 opacity-80 font-normal">Multi-Region · Aurora Global · $18,000~/월</div>
                </button>
            </div>

            <!-- ===== TOPOLOGY 1: 운영 표준 ===== -->
            <div id="topology-t1" class="topology-section active flex-col xl:flex-row gap-6">
                <div class="flex-[7] bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl relative flex flex-col overflow-hidden shadow-2xl min-h-[900px]">
                    <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <div class="flex items-center gap-2 bg-surface-container-high/80 backdrop-blur-md p-2 rounded-lg border border-outline-variant/20">
                            <span class="font-label-caps text-label-caps text-outline ml-1">리전: us-east-1 (버지니아 북부)</span>
                        </div>
                        <span class="px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded font-label-caps text-label-caps">표준 베이스 v1.2</span>
                    </div>

                    <div class="flex-1 overflow-auto topology-bg p-8 pt-20">
                        <div class="border-2 border-primary/20 rounded-3xl p-6 min-h-[820px] relative bg-primary/5">
                            <div class="absolute -top-3 left-6 px-3 bg-[#161B22] text-label-caps text-primary font-bold border border-primary/20 rounded">운영 VPC (Production)</div>

                            <!-- Edge Layer -->
                            <div class="flex justify-center gap-10 mb-10">
                                <div class="w-44 bg-surface-container-highest border border-outline-variant/30 rounded-xl p-3 text-center">
                                    <span class="material-symbols-outlined text-secondary-container">language</span>
                                    <div class="font-label-code text-on-surface text-[11px]">Route 53 / CF</div>
                                </div>
                                <div class="w-44 bg-surface-container-highest border border-primary/40 rounded-xl p-3 text-center ai-glow">
                                    <span class="material-symbols-outlined text-primary">shield</span>
                                    <div class="font-label-code text-on-surface text-[11px]">AWS WAF (보안)</div>
                                </div>
                                <div class="w-44 bg-surface-container-highest border border-outline-variant/30 rounded-xl p-3 text-center">
                                    <span class="material-symbols-outlined text-outline">balance</span>
                                    <div class="font-label-code text-on-surface text-[11px]">ALB</div>
                                </div>
                            </div>

                            <!-- AZs Grid -->
                            <div class="grid grid-cols-2 gap-6">
                                <!-- AZ-A -->
                                <div class="az-box p-4 flex flex-col gap-4 relative">
                                    <div class="absolute -top-3 left-4 px-2 bg-[#1c222d] text-[10px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 A (AZ-A)</div>
                                    <div class="border border-outline-variant/10 rounded-lg p-3 bg-surface-container-lowest/30">
                                        <div class="text-[9px] text-outline font-bold mb-2 uppercase">퍼블릭 서브넷</div>
                                        <div class="flex justify-center"><div class="w-28 bg-surface-container border border-outline-variant/30 rounded p-1 text-[10px] text-center">NAT 게이트웨이</div></div>
                                    </div>
                                    <div class="border border-primary/10 rounded-lg p-3 bg-primary/5 flex-grow">
                                        <div class="text-[9px] text-primary font-bold mb-2 uppercase">프라이빗 앱 서브넷</div>
                                        <div class="w-full bg-surface-container-high border border-primary/30 rounded-xl p-2 text-center">
                                            <span class="material-symbols-outlined text-primary text-[18px]">hub</span>
                                            <div class="text-[10px] font-bold text-on-surface">EKS 워커 노드</div>
                                            <div class="text-[9px] text-outline mb-2">m6i.xlarge</div>
                                        </div>
                                    </div>
                                    <div class="border border-tertiary/10 rounded-lg p-3 bg-tertiary/5">
                                        <div class="text-[9px] text-tertiary font-bold mb-2 uppercase">프라이빗 데이터 서브넷</div>
                                        <div class="bg-surface-container-highest border border-tertiary/40 rounded p-2 text-center">
                                            <div class="text-[10px] font-bold text-on-surface">RDS Aurora (Writer)</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- AZ-B -->
                                <div class="az-box p-4 flex flex-col gap-4 relative">
                                    <div class="absolute -top-3 left-4 px-2 bg-[#1c222d] text-[10px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 B (AZ-B)</div>
                                    <div class="border border-outline-variant/10 rounded-lg p-3 bg-surface-container-lowest/30">
                                        <div class="text-[9px] text-outline font-bold mb-2 uppercase">퍼블릭 서브넷</div>
                                        <div class="flex justify-center"><div class="w-28 bg-surface-container border border-outline-variant/30 rounded p-1 text-[10px] text-center">NAT 게이트웨이</div></div>
                                    </div>
                                    <div class="border border-primary/10 rounded-lg p-3 bg-primary/5 flex-grow">
                                        <div class="text-[9px] text-primary font-bold mb-2 uppercase">프라이빗 앱 서브넷</div>
                                        <div class="w-full bg-surface-container-high border border-primary/30 rounded-xl p-2 text-center">
                                            <span class="material-symbols-outlined text-primary text-[18px]">hub</span>
                                            <div class="text-[10px] font-bold text-on-surface">EKS 워커 노드</div>
                                            <div class="text-[9px] text-outline mb-2">m6i.xlarge</div>
                                        </div>
                                    </div>
                                    <div class="border border-tertiary/10 rounded-lg p-3 bg-tertiary/5">
                                        <div class="text-[9px] text-tertiary font-bold mb-2 uppercase">프라이빗 데이터 서브넷</div>
                                        <div class="bg-surface-container-highest border border-tertiary/20 rounded p-2 text-center">
                                            <div class="text-[10px] text-on-surface">RDS Aurora (Reader)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Shared Services -->
                            <div class="mt-4 border border-outline-variant/20 rounded-xl p-3 bg-surface-container-lowest/50 flex justify-around">
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">monitoring</span>
                                    <span class="text-[10px] font-bold uppercase">CloudWatch 모니터링</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">search</span>
                                    <span class="text-[10px] font-bold uppercase">OpenSearch 로그 분석</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">security</span>
                                    <span class="text-[10px] font-bold uppercase">IAM / Key 보안 관리</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Domain Cards: T1 -->
                <div class="flex-[4] flex flex-col gap-5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-outline-variant/20">
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 flex flex-col gap-2 shadow-xl sticky top-0 z-20">
                        <div class="flex justify-between items-center">
                            <h3 class="font-label-caps text-label-caps text-outline">최종 예상 월 비용</h3>
                            <span class="px-2 py-1 bg-primary/20 text-primary text-[11px] font-label-code rounded border border-primary/30 flex items-center gap-1">SLA 99.95% <span class="material-symbols-outlined text-[12px]">check</span></span>
                        </div>
                        <div class="font-headline-lg text-headline-lg text-on-surface">$8,450 ~ $9,100 <span class="text-body-md text-outline font-normal">/ 월</span></div>
                        <p class="text-[11px] text-on-surface-variant">표준 베이스 인프라 및 최대 5개 미션 크리티컬 서비스 수용 기준.</p>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">public</span><h3 class="font-headline-sm text-headline-sm text-on-surface">보안 및 에지</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$420/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">CloudFront + AWS WAF</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">L7 보호 기능이 포함된 글로벌 CDN. 보안 컴플라이언스 필수 적용.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">router</span><h3 class="font-headline-sm text-headline-sm text-on-surface">네트워크</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$1,280/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Multi-AZ VPC 설계</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">2개 가용 영역 격리 서브넷 구성. 이중 NAT 게이트웨이 포함.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">hub</span><h3 class="font-headline-sm text-headline-sm text-on-surface">컴퓨팅 (EKS)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$3,150/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Karpenter 자동 확장</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">혼합 노드 그룹. Spot 인스턴스 비용 최적화. 정책에 따라 Node Exporter DaemonSet 추가 배치.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">database</span><h3 class="font-headline-sm text-headline-sm text-on-surface">데이터 및 저장소</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$2,800/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">RDS Aurora Multi-AZ</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">99.95% 가용성 · RTO 1시간 이내. Writer/Reader AZ 분리 구성.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">analytics</span><h3 class="font-headline-sm text-headline-sm text-on-surface">관측성 (Monitoring)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$800/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">OpenSearch 및 메트릭</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">CloudWatch 메트릭 수집 및 OpenSearch 통합 로그 분석. 정책에 따라 세부 지표 조정.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== TOPOLOGY 2: 서버리스 HA ===== -->
            <div id="topology-t2" class="topology-section flex-col xl:flex-row gap-6">
                <div class="flex-[7] bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl relative flex flex-col overflow-hidden shadow-2xl min-h-[900px]">
                    <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <div class="flex items-center gap-2 bg-surface-container-high/80 backdrop-blur-md p-2 rounded-lg border border-outline-variant/20">
                            <span class="font-label-caps text-label-caps text-outline ml-1">리전: ap-northeast-2 (서울)</span>
                        </div>
                        <span class="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded font-label-caps text-label-caps">서버리스 HA v1.0</span>
                    </div>
                    <div class="flex-1 overflow-auto topology-bg p-8 pt-20">
                        <div class="border-2 border-secondary/20 rounded-3xl p-6 min-h-[820px] relative bg-secondary/5">
                            <div class="absolute -top-3 left-6 px-3 bg-[#161B22] text-label-caps text-secondary font-bold border border-secondary/20 rounded">운영 VPC (Serverless HA)</div>

                            <div class="flex justify-center gap-6 mb-8">
                                <div class="w-40 bg-surface-container-highest border border-outline-variant/30 rounded-xl p-3 text-center">
                                    <span class="material-symbols-outlined text-secondary-container">language</span>
                                    <div class="font-label-code text-on-surface text-[11px]">Route 53</div>
                                </div>
                                <div class="w-40 bg-surface-container-highest border border-secondary/40 rounded-xl p-3 text-center">
                                    <span class="material-symbols-outlined text-secondary">shield</span>
                                    <div class="font-label-code text-on-surface text-[11px]">AWS WAF (보안)</div>
                                </div>
                                <div class="w-40 bg-surface-container-highest border border-outline-variant/30 rounded-xl p-3 text-center">
                                    <span class="material-symbols-outlined text-outline">balance</span>
                                    <div class="font-label-code text-on-surface text-[11px]">ALB (Multi-AZ)</div>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="az-box p-4 flex flex-col gap-4 relative">
                                    <div class="absolute -top-3 left-4 px-2 bg-[#1c222d] text-[10px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 A (AZ-A)</div>
                                    <div class="border border-outline-variant/10 rounded-lg p-3 bg-surface-container-lowest/30">
                                        <div class="text-[9px] text-outline font-bold mb-2 uppercase">퍼블릭 서브넷</div>
                                        <div class="flex justify-center"><div class="w-28 bg-surface-container border border-outline-variant/30 rounded p-1 text-[10px] text-center">NAT 게이트웨이</div></div>
                                    </div>
                                    <div class="border border-secondary/10 rounded-lg p-3 bg-secondary/5 flex-grow">
                                        <div class="text-[9px] text-secondary font-bold mb-2 uppercase">프라이빗 앱 서브넷</div>
                                        <div class="w-full bg-surface-container-high border border-secondary/30 rounded-xl p-2 text-center">
                                            <span class="material-symbols-outlined text-secondary text-[18px]">view_in_ar</span>
                                            <div class="text-[10px] font-bold text-on-surface">ECS Fargate 태스크</div>
                                            <div class="text-[9px] text-outline mb-2">1 vCPU / 2 GB (서버리스)</div>
                                        </div>
                                    </div>
                                    <div class="border border-tertiary/10 rounded-lg p-3 bg-tertiary/5">
                                        <div class="text-[9px] text-tertiary font-bold mb-2 uppercase">프라이빗 데이터 서브넷</div>
                                        <div class="bg-surface-container-highest border border-tertiary/40 rounded p-2 text-center">
                                            <div class="text-[10px] font-bold text-on-surface">RDS Aurora (Writer)</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="az-box p-4 flex flex-col gap-4 relative">
                                    <div class="absolute -top-3 left-4 px-2 bg-[#1c222d] text-[10px] text-outline-variant font-bold border border-outline-variant/20 rounded">가용 영역 B (AZ-B)</div>
                                    <div class="border border-outline-variant/10 rounded-lg p-3 bg-surface-container-lowest/30">
                                        <div class="text-[9px] text-outline font-bold mb-2 uppercase">퍼블릭 서브넷</div>
                                        <div class="flex justify-center"><div class="w-28 bg-surface-container border border-outline-variant/30 rounded p-1 text-[10px] text-center">NAT 게이트웨이</div></div>
                                    </div>
                                    <div class="border border-secondary/10 rounded-lg p-3 bg-secondary/5 flex-grow">
                                        <div class="text-[9px] text-secondary font-bold mb-2 uppercase">프라이빗 앱 서브넷</div>
                                        <div class="w-full bg-surface-container-high border border-secondary/30 rounded-xl p-2 text-center">
                                            <span class="material-symbols-outlined text-secondary text-[18px]">view_in_ar</span>
                                            <div class="text-[10px] font-bold text-on-surface">ECS Fargate 태스크</div>
                                            <div class="text-[9px] text-outline mb-2">1 vCPU / 2 GB (서버리스)</div>
                                        </div>
                                    </div>
                                    <div class="border border-tertiary/10 rounded-lg p-3 bg-tertiary/5">
                                        <div class="text-[9px] text-tertiary font-bold mb-2 uppercase">프라이빗 데이터 서브넷</div>
                                        <div class="bg-surface-container-highest border border-tertiary/20 rounded p-2 text-center">
                                            <div class="text-[10px] text-on-surface">RDS Aurora (Reader)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 border border-outline-variant/20 rounded-xl p-3 bg-surface-container-lowest/50 flex justify-around">
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">monitoring</span>
                                    <span class="text-[10px] font-bold uppercase">CloudWatch 통합 모니터링</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">security</span>
                                    <span class="text-[10px] font-bold uppercase">IAM / WAF 보안 관리</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline-variant">
                                    <span class="material-symbols-outlined text-[16px]">backup</span>
                                    <span class="text-[10px] font-bold uppercase">S3 + Aurora 자동 백업</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Domain Cards: T2 -->
                <div class="flex-[4] flex flex-col gap-5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-outline-variant/20">
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 flex flex-col gap-2 shadow-xl sticky top-0 z-20">
                        <div class="flex justify-between items-center">
                            <h3 class="font-label-caps text-label-caps text-outline">최종 예상 월 비용</h3>
                            <span class="px-2 py-1 bg-primary/20 text-primary text-[11px] font-label-code rounded border border-primary/30 flex items-center gap-1">SLA 99.95% <span class="material-symbols-outlined text-[12px]">check</span></span>
                        </div>
                        <div class="font-headline-lg text-headline-lg text-on-surface">$4,500 ~ $5,200 <span class="text-body-md text-outline font-normal">/ 월</span></div>
                        <p class="text-[11px] text-on-surface-variant">Multi-AZ 서버리스 컨테이너. 운영 부담 감소 및 자동 스케일링 지원.</p>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[20px]">public</span><h3 class="font-headline-sm text-headline-sm text-on-surface">보안 및 에지</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$380/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">CloudFront + AWS WAF</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">SLA 우선 정책에 따라 L7 WAF 필수 적용. CDN 글로벌 캐싱 포함.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[20px]">router</span><h3 class="font-headline-sm text-headline-sm text-on-surface">네트워크</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$820/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Multi-AZ VPC 설계</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">2개 가용 영역 격리 서브넷. 이중 NAT 게이트웨이 및 ALB Multi-AZ 포함.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[20px]">view_in_ar</span><h3 class="font-headline-sm text-headline-sm text-on-surface">컴퓨팅 (ECS Fargate)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$1,650/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Multi-AZ 서버리스 컨테이너</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">AZ-A · AZ-B 각각 독립 태스크 실행. CloudWatch Agent + ADOT Collector 사이드카 동일 태스크 배치. EKS 대비 운영 부담 감소.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[20px]">database</span><h3 class="font-headline-sm text-headline-sm text-on-surface">데이터 및 저장소</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$1,850/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">RDS Aurora Multi-AZ</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">SLA 우선 정책 — Single-AZ 불가. Writer(AZ-A) / Reader(AZ-B) 분리 구성으로 99.95% 가용성 보장.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[20px]">analytics</span><h3 class="font-headline-sm text-headline-sm text-on-surface">관측성</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$420/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">CloudWatch + ADOT (양 AZ)</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">CloudWatch Agent + ADOT Collector 사이드카 양 AZ 배치. 정책에 따라 지표 및 로그 수집 방식 조정.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== TOPOLOGY 3: 멀티 리전 DR ===== -->
            <div id="topology-t3" class="topology-section flex-col xl:flex-row gap-6">
                <div class="flex-[7] bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl relative flex flex-col overflow-hidden shadow-2xl min-h-[900px]">
                    <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <div class="flex items-center gap-2 bg-surface-container-high/80 backdrop-blur-md p-2 rounded-lg border border-outline-variant/20">
                            <span class="font-label-caps text-label-caps text-outline ml-1">Active: us-east-1 · Standby: ap-northeast-2</span>
                        </div>
                        <span class="px-2 py-1 bg-error/20 text-error border border-error/30 rounded font-label-caps text-label-caps">엔터프라이즈 DR v2.0</span>
                    </div>
                    <div class="flex-1 overflow-auto topology-bg p-8 pt-20">
                        <div class="flex justify-center gap-4 mb-5">
                            <div class="w-40 bg-surface-container-highest border border-primary/30 rounded-xl p-2 text-center ai-glow">
                                <span class="material-symbols-outlined text-primary text-[16px]">language</span>
                                <div class="font-label-code text-on-surface text-[10px]">Route 53 지연 기반 라우팅</div>
                            </div>
                            <div class="w-40 bg-surface-container-highest border border-error/30 rounded-xl p-2 text-center">
                                <span class="material-symbols-outlined text-error text-[16px]">gpp_maybe</span>
                                <div class="font-label-code text-on-surface text-[10px]">AWS Shield Advanced</div>
                            </div>
                            <div class="w-40 bg-surface-container-highest border border-primary/30 rounded-xl p-2 text-center">
                                <span class="material-symbols-outlined text-primary text-[16px]">shield</span>
                                <div class="font-label-code text-on-surface text-[10px]">AWS WAF (글로벌)</div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="border-2 border-primary/30 rounded-2xl p-4 relative bg-primary/5">
                                <div class="absolute -top-3 left-4 px-2 bg-[#161B22] text-[10px] text-primary font-bold border border-primary/30 rounded">Primary: us-east-1</div>
                                <div class="grid grid-cols-2 gap-3 mb-3">
                                    <div class="az-box p-2">
                                        <div class="text-[8px] text-outline-variant font-bold mb-1">AZ-A</div>
                                        <div class="bg-surface-container-high border border-primary/30 rounded p-1.5 text-center mb-1">
                                            <div class="text-[9px] font-bold text-primary">EKS 노드</div>
                                            <div class="text-[8px] text-outline mb-1">m6i.2xlarge</div>
                                            <div class="flex flex-wrap gap-0.5 justify-center">
                                                <span class="px-1 py-px bg-primary/20 text-primary rounded text-[7px] border border-primary/20">app-svc</span>
                                                <span class="px-1 py-px bg-tertiary/20 text-tertiary rounded text-[7px] border border-tertiary/30 font-bold">prometheus</span>
                                                <span class="px-1 py-px bg-tertiary/20 text-tertiary rounded text-[7px] border border-tertiary/20">node-exp</span>
                                            </div>
                                        </div>
                                        <div class="bg-surface-container-highest border border-tertiary/30 rounded p-1 text-center">
                                            <div class="text-[9px] text-on-surface">Aurora Writer</div>
                                        </div>
                                    </div>
                                    <div class="az-box p-2">
                                        <div class="text-[8px] text-outline-variant font-bold mb-1">AZ-B</div>
                                        <div class="bg-surface-container-high border border-primary/30 rounded p-1.5 text-center mb-1">
                                            <div class="text-[9px] font-bold text-primary">EKS 노드</div>
                                            <div class="text-[8px] text-outline mb-1">m6i.2xlarge</div>
                                            <div class="flex flex-wrap gap-0.5 justify-center">
                                                <span class="px-1 py-px bg-primary/20 text-primary rounded text-[7px] border border-primary/20">app-svc</span>
                                                <span class="px-1 py-px bg-tertiary/20 text-tertiary rounded text-[7px] border border-tertiary/30 font-bold">alertmanager</span>
                                                <span class="px-1 py-px bg-tertiary/20 text-tertiary rounded text-[7px] border border-tertiary/30">thanos-ruler</span>
                                                <span class="px-1 py-px bg-tertiary/20 text-tertiary rounded text-[7px] border border-tertiary/20">node-exp</span>
                                            </div>
                                        </div>
                                        <div class="bg-surface-container-highest border border-tertiary/20 rounded p-1 text-center">
                                            <div class="text-[9px] text-on-surface">Aurora Reader</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border border-primary/10 rounded-lg p-1.5 bg-surface-container-lowest/50 text-center">
                                    <div class="text-[9px] text-outline font-bold">Aurora Global Primary · 복제 지연 &lt; 1초</div>
                                </div>
                            </div>

                            <div class="border-2 border-outline-variant/20 rounded-2xl p-4 relative bg-surface-container-lowest/30">
                                <div class="absolute -top-3 left-4 px-2 bg-[#161B22] text-[10px] text-outline font-bold border border-outline-variant/20 rounded">Standby: ap-northeast-2</div>
                                <div class="grid grid-cols-2 gap-3 mb-3">
                                    <div class="az-box p-2">
                                        <div class="text-[8px] text-outline-variant font-bold mb-1">AZ-A</div>
                                        <div class="bg-surface-container-high border border-outline-variant/30 rounded p-1.5 text-center mb-1">
                                            <div class="text-[9px] font-bold text-on-surface-variant">EKS 노드</div>
                                            <div class="text-[8px] text-outline mb-1">m6i.xlarge</div>
                                            <div class="flex flex-wrap gap-0.5 justify-center">
                                                <span class="px-1 py-px bg-surface-container-highest text-on-surface-variant rounded text-[7px] border border-outline-variant/20">app-svc</span>
                                                <span class="px-1 py-px bg-tertiary/10 text-tertiary rounded text-[7px] border border-tertiary/20">prometheus</span>
                                                <span class="px-1 py-px bg-outline-variant/10 text-outline rounded text-[7px] border border-outline-variant/10">node-exp</span>
                                            </div>
                                        </div>
                                        <div class="bg-surface-container-highest border border-outline-variant/20 rounded p-1 text-center">
                                            <div class="text-[9px] text-on-surface-variant">Aurora 복제본</div>
                                        </div>
                                    </div>
                                    <div class="az-box p-2">
                                        <div class="text-[8px] text-outline-variant font-bold mb-1">AZ-B</div>
                                        <div class="bg-surface-container-high border border-outline-variant/30 rounded p-1.5 text-center mb-1">
                                            <div class="text-[9px] font-bold text-on-surface-variant">EKS 노드</div>
                                            <div class="text-[8px] text-outline mb-1">m6i.xlarge</div>
                                            <div class="flex flex-wrap gap-0.5 justify-center">
                                                <span class="px-1 py-px bg-surface-container-highest text-on-surface-variant rounded text-[7px] border border-outline-variant/20">app-svc</span>
                                                <span class="px-1 py-px bg-tertiary/10 text-tertiary rounded text-[7px] border border-tertiary/20">thanos-query</span>
                                                <span class="px-1 py-px bg-outline-variant/10 text-outline rounded text-[7px] border border-outline-variant/10">node-exp</span>
                                            </div>
                                        </div>
                                        <div class="bg-surface-container-highest border border-outline-variant/20 rounded p-1 text-center">
                                            <div class="text-[9px] text-on-surface-variant">Aurora 복제본</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border border-outline-variant/10 rounded-lg p-1.5 bg-surface-container-lowest/50 text-center">
                                    <div class="text-[9px] text-outline font-bold">Aurora Global Secondary · RTO &lt; 1분</div>
                                </div>
                            </div>
                        </div>

                        <div class="border border-outline-variant/20 rounded-xl p-3 bg-surface-container-lowest/50 flex justify-around">
                            <div class="flex items-center gap-2 text-outline-variant">
                                <span class="material-symbols-outlined text-[16px]">monitoring</span>
                                <span class="text-[10px] font-bold uppercase">CloudWatch 크로스 리전</span>
                            </div>
                            <div class="flex items-center gap-2 text-outline-variant">
                                <span class="material-symbols-outlined text-[16px]">search</span>
                                <span class="text-[10px] font-bold uppercase">OpenSearch 글로벌 집계</span>
                            </div>
                            <div class="flex items-center gap-2 text-outline-variant">
                                <span class="material-symbols-outlined text-[16px]">manage_accounts</span>
                                <span class="text-[10px] font-bold uppercase">AWS Organizations / SCP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Domain Cards: T3 -->
                <div class="flex-[4] flex flex-col gap-5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-outline-variant/20">
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 flex flex-col gap-2 shadow-xl sticky top-0 z-20">
                        <div class="flex justify-between items-center">
                            <h3 class="font-label-caps text-label-caps text-outline">최종 예상 월 비용</h3>
                            <span class="px-2 py-1 bg-error/20 text-error text-[11px] font-label-code rounded border border-error/30">SLA 99.99% 목표</span>
                        </div>
                        <div class="font-headline-lg text-headline-lg text-on-surface">$18,000 ~ $22,000 <span class="text-body-md text-outline font-normal">/ 월</span></div>
                        <p class="text-[11px] text-on-surface-variant">2개 리전 액티브-스탠바이 DR. RTO &lt; 1분, RPO ≈ 0.</p>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-error text-[20px]">gpp_maybe</span><h3 class="font-headline-sm text-headline-sm text-on-surface">보안 및 에지 (Global)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$2,100/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Shield Advanced + WAF</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">DDoS 고급 방어 및 글로벌 WAF. Route 53 지연 기반 자동 리전 선택.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">hub</span><h3 class="font-headline-sm text-headline-sm text-on-surface">컴퓨팅 (EKS × 2 리전)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$8,400/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">EKS 듀얼 클러스터</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">정책에 따라 Thanos 스택(Ruler·Query·Compact)이 Primary AZ-B에, 각 노드에 Node Exporter DaemonSet이 배치됩니다.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">database</span><h3 class="font-headline-sm text-headline-sm text-on-surface">데이터 (Aurora Global)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$5,200/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Aurora Global Database</span><span class="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-[10px] border border-primary/30">확실 (Rule)</span></div>
                            <p class="text-[12px] text-on-surface-variant">리전 간 복제 지연 &lt; 1초. 장애 시 Standby 자동 승격. RPO ≈ 0, RTO &lt; 1분.</p>
                        </div>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl flex flex-col gap-3">
                        <div class="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                            <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[20px]">analytics</span><h3 class="font-headline-sm text-headline-sm text-on-surface">관측성 (크로스 리전)</h3></div>
                            <span class="font-label-code text-label-code text-tertiary font-bold">$1,600/월</span>
                        </div>
                        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex flex-col gap-1">
                            <div class="flex items-center justify-between"><span class="text-body-sm font-bold text-on-surface">Thanos + OpenSearch 통합</span><span class="px-1.5 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] border border-tertiary/30">조정 (LLM)</span></div>
                            <p class="text-[12px] text-on-surface-variant">Thanos 크로스 리전 집계 · OpenSearch 글로벌 로그 분석. 정책에 따라 수집 지표 및 알림 임계값 조정.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Sticky Footer -->
    <div class="absolute bottom-0 w-full bg-surface-dim/90 backdrop-blur-2xl p-6 flex justify-between items-center z-20">
        <button class="px-6 py-2 border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-variant/30 transition-colors font-body-sm text-body-sm flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>이전
        </button>
        <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm">임시 저장</button>
            <button @click="router.push('/page4')" class="px-12 py-3 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg hover:opacity-90 transition-opacity font-body-md text-body-md font-bold shadow-2xl flex items-center gap-2">
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
.topology-bg {
    background-image: radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}
.az-box {
    background: rgba(45, 52, 73, 0.2);
    border: 1px dashed rgba(144, 143, 158, 0.3);
    border-radius: 12px;
}
.ai-glow {
    box-shadow: 0 0 15px 2px rgba(129, 140, 248, 0.15);
}
.topology-section { display: none; }
.topology-section.active { display: flex; }
.topo-tab { transition: all 0.2s ease; }
.topo-tab.active {
    background: linear-gradient(135deg, #4f46e5, #818cf8);
    color: #060e20;
    box-shadow: 0 4px 14px rgba(129, 140, 248, 0.3);
}
.topo-tab:not(.active) { color: #c6c5d5; }
.topo-tab:not(.active):hover { background: rgba(45, 52, 73, 0.5); }
</style>
