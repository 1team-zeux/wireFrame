<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface PlanLine {
  t: string
  cls: string
  ms: number
  done?: boolean
}

const PLAN_LINES: PlanLine[] = [
    { t: "Initializing the backend...",                                     cls: "plan-info",   ms: 0    },
    { t: "Initializing provider plugins...",                                cls: "plan-info",   ms: 350  },
    { t: "- Finding hashicorp/aws versions matching \"~> 5.0\"...",         cls: "",            ms: 600  },
    { t: "- Finding hashicorp/helm versions matching \"~> 2.12\"...",       cls: "",            ms: 800  },
    { t: "- Installing hashicorp/aws v5.47.0...",                           cls: "plan-info",   ms: 1050 },
    { t: "- Installing hashicorp/helm v2.12.1...",                          cls: "plan-info",   ms: 1250 },
    { t: "",                                                                cls: "",            ms: 1400 },
    { t: "Initializing modules...",                                         cls: "plan-info",   ms: 1500 },
    { t: "- module.vpc",                                                    cls: "plan-module", ms: 1700 },
    { t: "- module.eks_cluster",                                            cls: "plan-module", ms: 1900 },
    { t: "- module.rds_aurora",                                             cls: "plan-module", ms: 2100 },
    { t: "- module.monitoring",                                             cls: "plan-module", ms: 2300 },
    { t: "- module.edge",                                                   cls: "plan-module", ms: 2500 },
    { t: "",                                                                cls: "",            ms: 2650 },
    { t: "Terraform will perform the following actions:",                   cls: "plan-info",   ms: 2750 },
    { t: "",                                                                cls: "",            ms: 2900 },
    { t: "  + aws_vpc.main",                                               cls: "plan-add",    ms: 3000 },
    { t: "  + aws_subnet.public[\"us-east-1a\"]",                          cls: "plan-add",    ms: 3200 },
    { t: "  + aws_subnet.public[\"us-east-1b\"]",                          cls: "plan-add",    ms: 3400 },
    { t: "  + aws_subnet.private_app[\"us-east-1a\"]",                     cls: "plan-add",    ms: 3600 },
    { t: "  + aws_subnet.private_app[\"us-east-1b\"]",                     cls: "plan-add",    ms: 3800 },
    { t: "  + aws_nat_gateway.az_a",                                       cls: "plan-add",    ms: 4000 },
    { t: "  + aws_nat_gateway.az_b",                                       cls: "plan-add",    ms: 4200 },
    { t: "  + aws_eks_cluster.paybridge_prod",                             cls: "plan-add",    ms: 4450 },
    { t: "  + aws_eks_node_group.workers",                                 cls: "plan-add",    ms: 4650 },
    { t: "  + aws_eks_addon.karpenter",                                    cls: "plan-add",    ms: 4850 },
    { t: "  + aws_db_cluster.aurora_main",                                 cls: "plan-add",    ms: 5100 },
    { t: "  + aws_db_instance.aurora_writer",                              cls: "plan-add",    ms: 5300 },
    { t: "  + aws_db_instance.aurora_reader",                              cls: "plan-add",    ms: 5500 },
    { t: "  + helm_release.prometheus          # AZ-A 노드 배치",           cls: "plan-add",    ms: 5750 },
    { t: "  + helm_release.alertmanager        # AZ-B 노드 배치",           cls: "plan-add",    ms: 5950 },
    { t: "  + helm_release.grafana             # AZ-B 노드 배치",           cls: "plan-add",    ms: 6150 },
    { t: "  + helm_release.node_exporter       # DaemonSet 전체 노드",      cls: "plan-add",    ms: 6350 },
    { t: "  + aws_cloudwatch_metric_alarm.cpu_high",                       cls: "plan-add",    ms: 6550 },
    { t: "  + aws_cloudwatch_metric_alarm.mem_high",                       cls: "plan-add",    ms: 6750 },
    { t: "  + aws_cloudfront_distribution.main",                           cls: "plan-add",    ms: 6950 },
    { t: "  + aws_wafv2_web_acl.main",                                     cls: "plan-add",    ms: 7150 },
    { t: "",                                                                cls: "",            ms: 7350 },
    { t: "─────────────────────────────────────────────────────",           cls: "plan-info",   ms: 7500, done: true },
]

let running = false

function runPlan() {
    if (running) return
    running = true

    const btn        = document.getElementById('plan-btn') as HTMLButtonElement
    const btnIcon    = document.getElementById('plan-btn-icon') as HTMLElement
    const btnLabel   = document.getElementById('plan-btn-label') as HTMLElement
    const badge      = document.getElementById('plan-badge') as HTMLElement
    const panel      = document.getElementById('plan-panel') as HTMLElement
    const log        = document.getElementById('plan-log') as HTMLElement
    const statusIcon = document.getElementById('plan-status-icon') as HTMLElement
    const statusText = document.getElementById('plan-status-text') as HTMLElement
    const success    = document.getElementById('plan-success') as HTMLElement

    log.innerHTML = ''
    success.classList.add('hidden')
    badge.classList.add('hidden')
    badge.classList.remove('flex')

    btn.disabled = true
    btnIcon.className = 'material-symbols-outlined text-[16px] spin'
    btnIcon.textContent = 'progress_activity'
    btnLabel.textContent = '검증 중...'

    panel.classList.remove('hidden')
    statusIcon.className = 'material-symbols-outlined text-[16px] spin text-primary'
    statusIcon.style.animation = ''
    statusIcon.textContent = 'progress_activity'
    statusText.textContent = 'terraform plan 실행 중...'
    statusText.className = 'font-label-code text-[12px] text-on-surface-variant'

    PLAN_LINES.forEach(line => {
        setTimeout(() => {
            const el = document.createElement('div')
            el.className = 'plan-line ' + line.cls
            el.textContent = line.t
            log.appendChild(el)
            requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')))
            log.scrollTop = log.scrollHeight

            if (line.done) setTimeout(showSuccess, 350)
        }, line.ms)
    })
}

function showSuccess() {
    const btn        = document.getElementById('plan-btn') as HTMLButtonElement
    const btnIcon    = document.getElementById('plan-btn-icon') as HTMLElement
    const btnLabel   = document.getElementById('plan-btn-label') as HTMLElement
    const badge      = document.getElementById('plan-badge') as HTMLElement
    const log        = document.getElementById('plan-log') as HTMLElement
    const statusIcon = document.getElementById('plan-status-icon') as HTMLElement
    const statusText = document.getElementById('plan-status-text') as HTMLElement
    const success    = document.getElementById('plan-success') as HTMLElement

    const el = document.createElement('div')
    el.className = 'plan-line plan-add font-bold'
    el.textContent = 'Plan: 18 to add, 0 to change, 0 to destroy.'
    log.appendChild(el)
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')))
    log.scrollTop = log.scrollHeight

    running = false

    btn.disabled = false
    btn.style.background = ''
    btn.className = 'flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-bold bg-[#3fb950]/15 text-[#3fb950] border border-[#3fb950]/30 hover:bg-[#3fb950]/25 transition-all shadow-md'
    btnIcon.className = 'material-symbols-outlined text-[16px]'
    btnIcon.style.animation = 'none'
    btnIcon.textContent = 'check_circle'
    btnLabel.textContent = '검증 완료'

    statusIcon.className = 'material-symbols-outlined text-[16px] text-[#3fb950]'
    statusIcon.style.animation = 'none'
    statusIcon.textContent = 'check_circle'
    statusText.textContent = '검증 완료 — 배포 가능 상태입니다.'
    statusText.className = 'font-label-code text-[12px] text-[#3fb950] font-bold'

    badge.classList.remove('hidden')
    badge.classList.add('flex')
    badge.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold bg-[#3fb950]/10 text-[#3fb950] border border-[#3fb950]/30'
    badge.innerHTML = '<span class="material-symbols-outlined text-[14px]" style="font-variation-settings:\'FILL\' 1">check_circle</span> Plan 통과'

    success.classList.remove('hidden')
}
</script>

<template>
<div class="text-on-background min-h-screen flex flex-col font-sans antialiased">

<!-- Top Navigation -->
<header class="hidden md:flex bg-surface-dim/70 backdrop-blur-xl flex justify-between items-center w-full px-6 py-[16.5px] max-w-container-max mx-auto border-b border-outline-variant/10 top-0 z-50 h-[65px]">
    <div class="flex items-center gap-8">
        <div class="text-headline-md font-headline-md font-bold text-primary tracking-tight">ZeuX</div>
        <nav class="flex gap-6">
            <a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md py-1" href="#">대시보드</a>
            <a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">IaC</a>
        </nav>
    </div>
</header>

<main class="flex-grow flex flex-col md:flex-row h-[calc(100vh-65px)] overflow-hidden">

    <!-- Left Panel -->
    <div class="w-full md:w-[35%] flex flex-col relative">
        <div class="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-outline-variant/20">
            <div class="flex flex-col gap-3 max-w-[90%]">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined text-[18px]">smart_toy</span>
                    </div>
                    <span class="text-label-caps font-bold text-primary">ZeuX AI 최종 보고</span>
                </div>
                <div class="bg-[#161B22]/80 backdrop-blur-md rounded-xl border border-[#30363D] p-5">
                    <p class="text-body-md text-on-surface mb-3">Terraform 코드를 확인하고 Plan을 실행해 배포 전 검증을 완료해 주세요.</p>
                </div>
            </div>

            <div class="flex flex-col gap-4 max-w-[90%]">
                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-4 flex flex-col gap-1 shadow-lg">
                    <span class="text-[10px] text-on-surface-variant uppercase font-bold">SLA 준수율</span>
                    <div class="flex justify-between items-center">
                        <span class="text-headline-sm font-bold text-[#3FB950]">99.95% 목표 충족</span>
                        <span class="material-symbols-outlined text-[#3FB950] text-[20px]">verified</span>
                    </div>
                </div>
                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-4 flex flex-col gap-1 shadow-lg">
                    <span class="text-[10px] text-on-surface-variant uppercase font-bold">최종 예상 월 비용</span>
                    <div class="flex justify-between items-center">
                        <span class="text-headline-sm font-bold text-on-surface">$8,642</span>
                        <span class="text-[11px] text-on-surface-variant">승인된 예산 범위</span>
                    </div>
                </div>
                <div class="bg-[#161B22]/60 border border-[#30363D] rounded-xl p-4 flex flex-col gap-1 shadow-lg">
                    <span class="text-[10px] text-on-surface-variant uppercase font-bold">보안 수준</span>
                    <div class="flex justify-between items-center">
                        <span class="text-headline-sm font-bold text-primary">PCI-DSS 준비 완료</span>
                        <span class="material-symbols-outlined text-primary text-[20px]">lock</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2 max-w-[90%]">
                <h4 class="text-[10px] text-on-surface-variant font-bold uppercase px-1">대화형 수정 이력</h4>
                <div class="bg-surface-container-lowest/30 rounded-lg border border-outline-variant/10 p-3 space-y-2">
                    <div class="flex gap-2 items-start text-[11px]">
                        <span class="material-symbols-outlined text-tertiary text-[14px] mt-0.5">edit</span>
                        <span class="text-on-surface-variant">운영자 요청에 따라 EKS Spot 인스턴스 비율을 70%로 조정.</span>
                    </div>
                    <div class="flex gap-2 items-start text-[11px]">
                        <span class="material-symbols-outlined text-tertiary text-[14px] mt-0.5">edit</span>
                        <span class="text-on-surface-variant">장기 로그 보관을 위해 OpenSearch 클러스터 추가됨.</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-6">
            <div class="relative w-full mx-auto">
                <input class="w-full bg-[#020617] border border-[#30363D] rounded-full px-6 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-on-surface-variant/50 shadow-lg" placeholder="ZeuX AI에게 최종 확인 질문..." type="text">
                <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <span class="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Right Panel -->
    <div class="w-full md:w-[65%] flex flex-col relative bg-transparent overflow-hidden">
        <div class="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-outline-variant/20">
            <div class="max-w-[1000px] mx-auto flex flex-col gap-stack-lg pb-40">

                <!-- Header -->
                <div class="flex flex-col gap-stack-sm text-center md:text-left">
                    <h1 class="font-headline-lg text-headline-lg text-on-background uppercase tracking-tight">최종 검토 및 인프라 배포</h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant">IaC 코드를 검토하고 Plan으로 사전 검증 후 승인해 주세요.</p>
                </div>

                <!-- Stepper -->
                <div class="flex items-center justify-between px-2 mb-4">
                    <div class="flex flex-col items-center gap-2 relative z-10">
                        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                        <span class="text-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">업로드</span>
                    </div>
                    <div class="flex-grow h-px bg-primary mx-2"></div>
                    <div class="flex flex-col items-center gap-2 relative z-10">
                        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                        <span class="text-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">추출 및 검토</span>
                    </div>
                    <div class="flex-grow h-px bg-primary mx-2"></div>
                    <div class="flex flex-col items-center gap-2 relative z-10">
                        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                        <span class="text-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">토폴로지</span>
                    </div>
                    <div class="flex-grow h-px bg-primary mx-2"></div>
                    <div class="flex flex-col items-center gap-2 relative z-10">
                        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border-2 border-primary/50"><span class="material-symbols-outlined text-[16px]">check</span></div>
                        <span class="text-label-caps text-on-surface-variant absolute top-10 whitespace-nowrap opacity-70">정책 설정</span>
                    </div>
                    <div class="flex-grow h-px bg-primary mx-2"></div>
                    <div class="flex flex-col items-center gap-2 relative z-10">
                        <div class="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold border-2 border-primary shadow-[0_0_15px_rgba(129,140,248,0.3)]">5</div>
                        <span class="text-label-caps text-primary absolute top-10 whitespace-nowrap">최종 승인</span>
                    </div>
                </div>

                <!-- ====== SECTION 1: TERRAFORM CODE + PLAN ====== -->
                <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl overflow-hidden shadow-xl">

                    <!-- Header bar -->
                    <div class="flex items-center justify-between px-5 py-3 border-b border-[#30363D] bg-surface-container-lowest/60">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary text-[18px]">code</span>
                            <h2 class="font-headline-sm text-headline-sm text-on-surface">Terraform 코드</h2>
                            <span class="px-2 py-0.5 border border-outline-variant/30 rounded font-label-code text-[10px] text-outline ml-1">v0.14.0-draft</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div id="plan-badge" class="hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border"></div>
                            <button id="plan-btn" @click="runPlan()" class="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg text-body-sm font-bold hover:opacity-90 active:scale-95 shadow-md">
                                <span id="plan-btn-icon" class="material-symbols-outlined text-[16px]">play_arrow</span>
                                <span id="plan-btn-label">terraform plan</span>
                            </button>
                        </div>
                    </div>

                    <!-- Code -->
                    <div class="tf-code p-5 overflow-x-auto max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-outline-variant/20">
<pre><span class="tf-comment"># 확정 토폴로지: 운영 표준 Multi-AZ · us-east-1</span>
<span class="tf-comment"># 생성일: 2026-05-20  정책 버전: v0.14.0</span>

<span class="tf-keyword">terraform</span> {
  <span class="tf-attr">required_version</span> = <span class="tf-string">"&gt;= 1.6.0"</span>
  <span class="tf-attr">required_providers</span> {
    <span class="tf-attr">aws</span>  = { <span class="tf-attr">source</span> = <span class="tf-string">"hashicorp/aws"</span>,  <span class="tf-attr">version</span> = <span class="tf-string">"~&gt; 5.0"</span>  }
    <span class="tf-attr">helm</span> = { <span class="tf-attr">source</span> = <span class="tf-string">"hashicorp/helm"</span>, <span class="tf-attr">version</span> = <span class="tf-string">"~&gt; 2.12"</span> }
  }
}

<span class="tf-module">module</span> <span class="tf-string">"vpc"</span> {
  <span class="tf-attr">source</span> = <span class="tf-string">"./modules/aws-vpc-multi-az"</span>

  <span class="tf-attr">region</span>               = <span class="tf-string">"us-east-1"</span>
  <span class="tf-attr">tier</span>                 = <span class="tf-string">"production"</span>
  <span class="tf-attr">azs</span>                  = [<span class="tf-string">"us-east-1a"</span>, <span class="tf-string">"us-east-1b"</span>]
  <span class="tf-attr">public_subnet_cidrs</span>  = [<span class="tf-string">"10.0.1.0/24"</span>,  <span class="tf-string">"10.0.2.0/24"</span>]
  <span class="tf-attr">private_subnet_cidrs</span> = [<span class="tf-string">"10.0.11.0/24"</span>, <span class="tf-string">"10.0.12.0/24"</span>]
  <span class="tf-attr">data_subnet_cidrs</span>    = [<span class="tf-string">"10.0.21.0/24"</span>, <span class="tf-string">"10.0.22.0/24"</span>]
  <span class="tf-attr">enable_nat_gateway</span>   = <span class="tf-value">true</span>
  <span class="tf-attr">single_nat_gateway</span>   = <span class="tf-value">false</span>  <span class="tf-comment"># 이중 NAT (Multi-AZ HA)</span>
}

<span class="tf-module">module</span> <span class="tf-string">"eks_cluster"</span> {
  <span class="tf-attr">source</span> = <span class="tf-string">"./modules/aws-eks-karpenter"</span>

  <span class="tf-attr">cluster_name</span>       = <span class="tf-string">"paybridge-prod"</span>
  <span class="tf-attr">kubernetes_version</span> = <span class="tf-string">"1.29"</span>
  <span class="tf-attr">vpc_id</span>             = <span class="tf-value">module.vpc.vpc_id</span>
  <span class="tf-attr">subnet_ids</span>         = <span class="tf-value">module.vpc.private_subnet_ids</span>

  <span class="tf-attr">node_instance_type</span> = <span class="tf-string">"m6i.xlarge"</span>
  <span class="tf-attr">autoscaling_min</span>    = <span class="tf-num">2</span>
  <span class="tf-attr">autoscaling_max</span>    = <span class="tf-num">12</span>
  <span class="tf-attr">spot_percentage</span>    = <span class="tf-num">70</span>  <span class="tf-comment"># Spot 70% 절감</span>
}

<span class="tf-module">module</span> <span class="tf-string">"rds_aurora"</span> {
  <span class="tf-attr">source</span> = <span class="tf-string">"./modules/aws-rds-aurora-multi-az"</span>

  <span class="tf-attr">engine</span>              = <span class="tf-string">"aurora-mysql"</span>
  <span class="tf-attr">engine_version</span>      = <span class="tf-string">"8.0.mysql_aurora.3.04.0"</span>
  <span class="tf-attr">instance_class</span>      = <span class="tf-string">"db.r6g.2xlarge"</span>
  <span class="tf-attr">multi_az</span>            = <span class="tf-value">true</span>
  <span class="tf-attr">writer_az</span>           = <span class="tf-string">"us-east-1a"</span>
  <span class="tf-attr">reader_az</span>           = <span class="tf-string">"us-east-1b"</span>
  <span class="tf-attr">backup_retention</span>    = <span class="tf-num">7</span>
  <span class="tf-attr">deletion_protection</span> = <span class="tf-value">true</span>
}

<span class="tf-module">module</span> <span class="tf-string">"monitoring"</span> {
  <span class="tf-attr">source</span> = <span class="tf-string">"./modules/aws-monitoring-stack"</span>

  <span class="tf-attr">cluster_name</span>    = <span class="tf-value">module.eks_cluster.cluster_name</span>
  <span class="tf-comment"># 4단계 알림 정책 기반 배치</span>
  <span class="tf-attr">prometheus_az</span>   = <span class="tf-string">"us-east-1a"</span>  <span class="tf-comment"># AZ-A 노드</span>
  <span class="tf-attr">alertmanager_az</span> = <span class="tf-string">"us-east-1b"</span>  <span class="tf-comment"># AZ-B 노드</span>
  <span class="tf-attr">grafana_az</span>      = <span class="tf-string">"us-east-1b"</span>  <span class="tf-comment"># AZ-B 노드</span>
  <span class="tf-attr">node_exporter</span>   = <span class="tf-value">true</span>          <span class="tf-comment"># DaemonSet 전체 노드</span>

  <span class="tf-attr">burn_rate_fast</span>         = <span class="tf-num">14.4</span>
  <span class="tf-attr">burn_rate_slow</span>         = <span class="tf-num">6.0</span>
  <span class="tf-attr">cpu_threshold</span>          = <span class="tf-num">85</span>
  <span class="tf-attr">mem_threshold</span>          = <span class="tf-num">80</span>
  <span class="tf-attr">alert_channel_critical</span> = <span class="tf-string">"#incident-critical"</span>
  <span class="tf-attr">alert_channel_warning</span>  = <span class="tf-string">"#ops-warnings"</span>
}

<span class="tf-module">module</span> <span class="tf-string">"edge"</span> {
  <span class="tf-attr">source</span> = <span class="tf-string">"./modules/aws-edge-security"</span>

  <span class="tf-attr">enable_cloudfront</span> = <span class="tf-value">true</span>
  <span class="tf-attr">enable_waf</span>        = <span class="tf-value">true</span>
  <span class="tf-attr">enable_route53</span>    = <span class="tf-value">true</span>
  <span class="tf-attr">domain_name</span>       = <span class="tf-string">"paybridge-prod.internal"</span>
}</pre>
                    </div>

                    <!-- Plan output (hidden by default) -->
                    <div id="plan-panel" class="hidden border-t border-[#30363D]">
                        <div class="flex items-center gap-2 px-5 py-2.5 bg-[#0d1117]">
                            <span id="plan-status-icon" class="material-symbols-outlined text-[16px] spin text-primary">progress_activity</span>
                            <span id="plan-status-text" class="font-label-code text-[12px] text-on-surface-variant">terraform plan 실행 중...</span>
                        </div>
                        <div id="plan-log" class="plan-terminal px-5 pb-4 pt-2 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-outline-variant/20 border-t border-[#1a1f2a]"></div>
                        <div id="plan-success" class="hidden px-5 py-4 bg-[#0d1117] border-t border-[#30363D]">
                            <div class="flex items-center justify-between flex-wrap gap-3">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-full bg-[#3fb950]/15 flex items-center justify-center flex-shrink-0">
                                        <span class="material-symbols-outlined text-[#3fb950] text-[20px]" style="font-variation-settings:'FILL' 1">check_circle</span>
                                    </div>
                                    <div>
                                        <div class="font-bold text-[#3fb950] text-body-md">Plan 검증 통과 — 배포 가능 상태</div>
                                        <div class="font-label-code text-[11px] text-on-surface-variant mt-0.5">Plan: 18 to add, 0 to change, 0 to destroy.</div>
                                    </div>
                                </div>
                                <div class="flex gap-2 text-[11px]">
                                    <span class="px-2 py-1 bg-[#3fb950]/10 text-[#3fb950] rounded border border-[#3fb950]/30 font-label-code">+18 add</span>
                                    <span class="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded border border-outline-variant/20 font-label-code">~0 change</span>
                                    <span class="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded border border-outline-variant/20 font-label-code">-0 destroy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ====== SECTION 2: BOM ====== -->
                <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl overflow-hidden shadow-xl">
                    <div class="p-4 border-b border-outline-variant/10 bg-surface-container-low/50 flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">receipt_long</span>
                        <h2 class="font-headline-sm text-headline-sm text-on-surface">인프라 자원 명세서 (BOM)</h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse min-w-[580px]">
                            <thead>
                                <tr class="border-b border-outline-variant/20 bg-surface-container-lowest/50 text-label-caps text-on-surface-variant">
                                    <th class="px-6 py-3 font-bold uppercase">리소스 유형</th>
                                    <th class="px-6 py-3 font-bold uppercase">상세 사양</th>
                                    <th class="px-6 py-3 font-bold uppercase text-center">수량</th>
                                    <th class="px-6 py-3 font-bold uppercase text-right">예상 비용</th>
                                </tr>
                            </thead>
                            <tbody class="text-body-sm divide-y divide-outline-variant/10">
                                <tr><td class="px-6 py-4 font-bold text-on-surface">EKS 클러스터</td><td class="px-6 py-4 text-on-surface-variant">m6i.xlarge (Karpenter 자동 확장)</td><td class="px-6 py-4 text-center">2~12</td><td class="px-6 py-4 text-right font-label-code text-tertiary">$3,150</td></tr>
                                <tr><td class="px-6 py-4 font-bold text-on-surface">RDS Aurora</td><td class="px-6 py-4 text-on-surface-variant">r6g.2xlarge (Multi-AZ)</td><td class="px-6 py-4 text-center">2</td><td class="px-6 py-4 text-right font-label-code text-tertiary">$1,456</td></tr>
                                <tr><td class="px-6 py-4 font-bold text-on-surface">에지 계층</td><td class="px-6 py-4 text-on-surface-variant">CloudFront + WAF v2 + Route53</td><td class="px-6 py-4 text-center">1</td><td class="px-6 py-4 text-right font-label-code text-tertiary">$420</td></tr>
                                <tr><td class="px-6 py-4 font-bold text-on-surface">네트워크</td><td class="px-6 py-4 text-on-surface-variant">이중 NAT 게이트웨이 + VPC</td><td class="px-6 py-4 text-center">2</td><td class="px-6 py-4 text-right font-label-code text-tertiary">$1,280</td></tr>
                                <tr><td class="px-6 py-4 font-bold text-on-surface">모니터링 스택</td><td class="px-6 py-4 text-on-surface-variant">Prometheus · AlertManager · Grafana</td><td class="px-6 py-4 text-center">1</td><td class="px-6 py-4 text-right font-label-code text-tertiary">$536</td></tr>
                                <tr class="bg-primary/5"><td colspan="3" class="px-6 py-4 font-bold text-primary text-right">최종 합계</td><td class="px-6 py-4 text-right font-bold text-primary font-label-code">$8,642</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- ====== SECTION 3: VALIDATION ====== -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl">
                        <h3 class="text-label-caps text-primary font-bold uppercase mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">verified_user</span>SLA 준수 여부
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3"><span class="material-symbols-outlined text-[#3FB950] text-[20px]">check_circle</span><div><div class="text-body-sm font-bold text-on-surface">가용성 99.95% 충족</div><div class="text-[11px] text-on-surface-variant">Multi-AZ 구성 검증 완료.</div></div></li>
                            <li class="flex items-center gap-3"><span class="material-symbols-outlined text-[#3FB950] text-[20px]">check_circle</span><div><div class="text-body-sm font-bold text-on-surface">RPO ≤ 5분 이내 충족</div><div class="text-[11px] text-on-surface-variant">RDS PITR 및 MSK 다중화 설정 완료.</div></div></li>
                        </ul>
                    </div>
                    <div class="bg-[#161B22]/60 backdrop-blur-xl border border-[#30363D] rounded-xl p-5 shadow-xl">
                        <h3 class="text-label-caps text-primary font-bold uppercase mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">policy</span>정책 및 보안 검증
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3"><span class="material-symbols-outlined text-[#3FB950] text-[20px]">check_circle</span><div><div class="text-body-sm font-bold text-on-surface">PCI-DSS 보안 준수</div><div class="text-[11px] text-on-surface-variant">데이터 암호화 및 전송 구간 보안 설정 완료.</div></div></li>
                            <li class="flex items-center gap-3"><span class="material-symbols-outlined text-[#3FB950] text-[20px]">check_circle</span><div><div class="text-body-sm font-bold text-on-surface">예산 가드레일 작동</div><div class="text-[11px] text-on-surface-variant">비용 이상 징후 감지 임계값 설정 완료.</div></div></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <!-- Sticky Footer -->
        <div class="absolute bottom-0 w-full bg-surface-dim/90 backdrop-blur-2xl p-4 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center z-50 gap-4">
            <div class="flex items-center gap-2">
                <input type="checkbox" id="approval-check" class="w-4 h-4 rounded border-outline-variant/30 bg-[#020617] text-primary focus:ring-primary/50">
                <label for="approval-check" class="text-[11px] text-on-surface font-medium cursor-pointer">최종 토폴로지와 예상 비용을 모두 확인했으며, IaC 코드 생성을 승인합니다.</label>
            </div>
            <div class="flex items-center gap-2 w-full md:w-auto">
                <button @click="router.push('/page4')" class="flex-1 md:flex-none px-4 py-2 border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-variant/30 transition-colors text-body-sm">반려 및 수정</button>
                <button @click="router.push('/page6')" class="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white rounded-lg hover:brightness-110 active:scale-[0.98] transition-all text-body-sm font-bold shadow-[0_0_15px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group">
                    승인 및 인프라 배포
                    <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">rocket_launch</span>
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
.ai-glow { box-shadow: 0 0 15px 2px rgba(129, 140, 248, 0.15); }

.tf-code {
    font-family: 'JetBrains Mono', monospace;
    background: #010409;
    font-size: 12.5px;
    line-height: 1.75;
    color: #e6edf3;
}
.tf-keyword { color: #ff7b72; }
.tf-string  { color: #a5d6ff; }
.tf-attr    { color: #79c0ff; }
.tf-value   { color: #f2cc60; }
.tf-comment { color: #8b949e; font-style: italic; }
.tf-module  { color: #7ee787; }
.tf-num     { color: #f47067; }

.plan-terminal {
    font-family: 'JetBrains Mono', monospace;
    background: #010409;
    font-size: 12px;
    line-height: 1.85;
    color: #e6edf3;
}
.plan-line { opacity: 0; transform: translateY(3px); transition: opacity 0.18s ease, transform 0.18s ease; }
.plan-line.show { opacity: 1; transform: translateY(0); }
.plan-add    { color: #3fb950; }
.plan-info   { color: #58a6ff; }
.plan-module { color: #d2a8ff; }

.spin { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

#plan-btn { transition: all 0.25s ease; }
#plan-btn:disabled { cursor: not-allowed; }
</style>
