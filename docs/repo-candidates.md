# 신규 등재 레포 후보 조사 (검색 표면 확장)

목적: 문서 수 = 검색 유입 표면 = patina 퍼널 입구 확대. 이 문서는 위키에 등재할
저장소 후보의 **조사·선별 기준·우선순위**를 담고, flask 트렌딩 소싱(P3)이 완성되면
그 피드를 후보 입력으로 받는 **접점 계약**을 정의한다.

> 조사 원칙: **실존 검증 필수.** 모든 후보는 GitHub API(`repos/{owner}/{name}`,
> `search/repositories`)로 stars·description·pushed_at을 그 자리에서 확인한 것만
> 올린다. 과거 자동 생성 PR에서 걸러낸 환각(없는 홈페이지 도메인, 존재하지 않는
> 레포)을 반복하지 않는다.

## 선별 기준 (등재 가치)

| 축 | 신호 | 비중 |
|---|---|---|
| **생태계 위상** | 기존 문서(oh-my-*, lazycodex, patina)의 **부모/확장 대상**이거나 같은 카테고리 허브인가. 부모-확장 관계 = 내부 링크 = 최우선. | 높음 |
| **검색량 프록시** | GitHub stars + 최근 `pushed_at`(활동성). 스타는 검색 수요의 대리 지표. | 높음 |
| **우리 레포 연관** | 문서 간 내부 링크로 탐색·SEO 그래프를 만들 수 있는가. | 중 |
| **테마 적합** | AI 코딩 에이전트 / 하네스 / CLI / LLM 개발 도구인가(일반 ML 프레임워크·치트시트는 후순위). | 중 |
| **근거·안전** | README·릴리스·라이선스가 문서화에 충분한가. 프롬프트 덤프, 키/보안 우회, 라이선스 애매한 재배포성 콘텐츠는 **제외**. | 게이트 |

## 후보 목록 (2026-07-07 GitHub API 검증)

### Tier 1 — 생태계 허브 (기존 확장 문서의 부모 → 최우선)

| 저장소 | ★ | pushed | 우리 문서와의 관계 | 상태 |
|---|---|---|---|---|
| `anthropics/claude-code` | 136.6k | 2026-07-06 | oh-my-claudecode의 기반 | **등재완료** |
| `openai/codex` | 95.9k | 2026-07-07 | oh-my-codex·lazycodex·oh-my-openagent의 실행 엔진 | **등재완료** |
| `anomalyco/opencode` | 183.1k | 2026-07-07 | oh-my-openagent가 겨냥하는 OpenCode | 후보 P1 |
| `earendil-works/pi` | 68.2k | 2026-07-06 | omnigent/omo가 하네스 대상으로 언급하는 Pi | 후보 P1 |

### Tier 2 — 주요 코딩 에이전트 (테마 핵심·높은 검색)

| 저장소 | ★ | pushed | 관찰 포인트 | 상태 |
|---|---|---|---|---|
| `OpenHands/OpenHands` | 79.7k | 2026-07-07 | AI-driven development, 오픈소스 코딩 에이전트 | 후보 P2 |
| `cline/cline` | 64.4k | 2026-07-07 | 자율 코딩 에이전트(SDK/IDE/CLI) | 후보 P2 |
| `openinterpreter/openinterpreter` | 64.3k | 2026-07-07 | 오픈 모델용 경량 코딩 에이전트 | 후보 P2 |
| `aaif-goose/goose` | 50.7k | 2026-07-07 | 확장형 AI 에이전트(설치·실행·편집·테스트) | 후보 P2 |
| `Aider-AI/aider` | 47.1k | 2026-05-22 | 터미널 AI 페어 프로그래밍 | 후보 P2 |
| `continuedev/continue` | 34.7k | 2026-07-06 | 오픈소스 코딩 에이전트 | 후보 P3 |
| `RooCodeInc/Roo-Code` | 24.3k | 2026-07-06 | 에디터 내 AI 에이전트 팀 | 후보 P3 |
| `SWE-agent/SWE-agent` | 19.7k | 2026-07-06 | GitHub 이슈 자동 수정 에이전트 | 후보 P3 |

### Tier 3 — 인접 인프라 (우리 도구가 접하는 LLM 계층)

| 저장소 | ★ | pushed | 관찰 포인트 | 상태 |
|---|---|---|---|---|
| `BerriAI/litellm` | 52.8k | 2026-07-07 | 100+ LLM API 게이트웨이(모델 카탈로그 인접) | 후보 P3 |
| `browser-use/browser-use` | 103.2k | 2026-07-07 | AI 에이전트용 브라우저 자동화 | 후보 P3 |
| `ollama/ollama` | 175.6k | 2026-07-07 | 로컬 모델 러너(patina 로컬 백엔드 맥락) | 후보 P3 |
| `Significant-Gravitas/AutoGPT` | 185.4k | 2026-07-07 | 초기 자율 에이전트 대표 저장소 | 후보 P4 |
| `danny-avila/LibreChat` | 40.4k | 2026-07-07 | 자가호스팅 챗·에이전트 | 후보 P4 |

### 제외 (게이트 미통과)

- `x1xhlol/system-prompts-and-models-of-ai-tools` — 시스템 프롬프트 덤프. 재배포
  리스크로 등재 제외(트렌딩 문서 운영 메모 기준과 동일).

## 집필·등재 절차 (③)

1. 후보의 실제 README를 `gh api repos/{r}/readme`로 읽어 **근거 기반** 집필(요약·
   기능·설치·생태계 관계). 스타/버전 등 수치는 API 값 그대로.
2. `src/wiki/<name>Article.ts` 작성 → `fixtures.ts`의 `wikiArticles`·홈 패널 등록 →
   필요 시 `categories.ts` 라벨 추가.
3. 부모-확장 관계는 **내부 링크**(`variant: "internal"`)로 상호 연결(SEO 그래프).
4. `typecheck` + `vitest` + `build`(sitemap 자동 반영) 검증 후 PR → 머지 → 배포.

## flask 트렌딩 소싱 접점 (④, P3 구축 중)

flask의 트렌딩 소싱이 완성되면, 사람이 검색 쿼리를 돌리는 대신 flask 피드를 이
후보 테이블의 **입력**으로 받는다. 접점 계약:

- **입력 스키마** (flask → 위키, JSON 배열): 각 항목은 GitHub API 원본 필드를 그대로
  전달한다.
  ```json
  {
    "full_name": "owner/name",
    "stargazers_count": 0,
    "pushed_at": "2026-07-07T00:00:00Z",
    "description": "…",
    "topics": ["ai-agent", "cli"],
    "html_url": "https://github.com/owner/name"
  }
  ```
- **필터(위키측 게이트, 자동)**: 위 선별 기준을 코드화 — 테마 토픽 매칭 + stars
  하한 + 최근 pushed + 제외 목록(프롬프트 덤프 등). 통과분만 후보 테이블에 승격.
- **중복 방지**: `wikiArticles`에 이미 있는 slug는 후보에서 제외.
- **사람 확인 유지**: 피드는 후보를 **제안**만 한다. 문서 집필·등재는 여전히
  README 근거 기반 + PR·검증·배포를 거친다(무감독 대량 등재 금지 — 환각·품질 게이트).
- **택소노미 일치**: 트렌딩 유입 문서에도 patina 링크가 있으면 위키 UTM 규격
  (`utm_source=github-wiki&utm_medium=wiki&utm_campaign=vibetip`)을 그대로 적용.

> 요약: flask 피드 = 후보 **발굴 자동화**, 위키 = 후보 **검증·집필·등재**. 발굴은
> 자동, 발행은 근거·게이트 유지.
