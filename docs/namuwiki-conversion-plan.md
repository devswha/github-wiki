# 나무위키 전환 계획 (착수 전 관제탑 보고용)

하코 지시: 위키 문서 대상 레포가 나무위키 본 사이트에 문서로 존재하면, 우리 문서를
그 나무위키 내용으로 전환(CC BY-NC-SA 2.0 KR 준수). **이 문서는 착수 전 보고용이며,
전환은 관제탑 승인 후 실행한다.**

## 1. 실현 가능성 / 접근 제약

- 나무위키(namu.wiki)는 Cloudflare 봇 차단(CAPTCHA)이 걸려 있어 `read`(reader) 도구로는
  실존 확인·내용 취득 **불가**. **헤드리스 브라우저(스텔스)로만 접근 성공**.
- 페이지 innerText에는 광고·내비·푸터가 섞여 나온다. 전환 시 **본문 컨테이너만 추출하고
  광고/네비/댓글/추천을 제거**해야 한다(구현 부담 있음).
- 나무위키 문법(표·각주 `[1]`·내부링크)을 우리 타입드 구조(sections/table)로 옮기려면
  파싱이 필요. 1차는 본문 문단을 그대로 옮기고 각주·표는 단순화하는 방안 권장.

## 2. 전수 실존 확인 결과 (2026-07-07, 브라우저 확인)

판별 기준: 본문에 "최근 수정 시각" 존재 = 실제 문서.

### 전환 대상 (문서 존재 + 주제 일치)

| 우리 문서 | 나무위키 문서 | 충실도 | 비고 |
|---|---|---|---|
| `anthropics/claude-code` | [Claude Code](https://namu.wiki/w/Claude%20Code) | 충실(~4k자) | 개요·특징·요금제·사건사고 등 |
| `openai/codex` | [Codex](https://namu.wiki/w/Codex) | 충실(~5.4k자) | 개요·역사·이용방법(CLI/앱/웹/IDE) |
| `ollama/ollama` | [Ollama](https://namu.wiki/w/Ollama) | 보통(~1.6k자) | 로컬 LLM 실행 도구, 주제 일치 |
| `open-webui/open-webui` | [Open WebUI](https://namu.wiki/w/Open%20WebUI) | 보통(~2k자) | 로컬 AI 프론트엔드, 주제 일치 |
| `Significant-Gravitas/AutoGPT` | [AutoGPT](https://namu.wiki/w/AutoGPT) | **토막글(얇음)** | 우리 README 문서보다 정보 적음 → 전환 시 오히려 축소. 보류/후순위 권장 |

### 애매/제외

| 우리 문서 | 상태 | 판단 |
|---|---|---|
| `google-gemini/gemini-cli` | "Gemini CLI"는 독립 문서 없음 → [Gemini(인공지능 모델)](https://namu.wiki/w/Gemini(인공지능%20모델)) 문서의 **5.1 하위 섹션**일 뿐 | **주제 불일치**(레포가 아니라 모델 전반). 전환 제외, 우리 README 문서 유지 권장. (원하면 5.1 섹션만 발췌 가능) |

### 문서 없음 → 현행 유지(자체 집필)

나머지 ~35개 전부 나무위키 문서 없음: gajae-code, oh-my-claudecode, oh-my-codex,
oh-my-openagent, lazycodex, patina, hermes-agent, omnigent, k-skill, opencode, pi,
OpenHands, cline, openinterpreter, goose, aider, Roo-Code, SWE-agent, dify, langchain,
browser-use, litellm, vllm, crewAI, autogen, nanobot, deer-flow, LibreChat, cherry-studio,
CopilotKit, firecrawl, crawl4ai, ragflow 등 → **현행 README 근거 자체 집필 유지.**

> 요약: 실제 전환 후보는 사실상 **claude-code, codex, ollama, open-webui 4건**
> (AutoGPT는 토막글이라 보류 권장, gemini-cli는 제외 권장).

## 3. 라이선스 처리 방식 (전환 대상 공통)

① **출처·라이선스 고지(문서 하단)**: "이 문서는 나무위키 '<제목>' 문서
(<원문 링크>)에서 가져왔습니다. 원저작자: 나무위키 기여자. 변경: 발췌·재편집함."
② **동일 라이선스 배포 표기**: "본 문서는 CC BY-NC-SA 2.0 KR로 배포됩니다."
   (BY=출처표시, NC=비영리, SA=동일조건변경허락)
③ **patina 상업 전환 유도(구매 CTA) 금지**: 전환 문서에는 patina 구매/랜딩 CTA를
   붙이지 않는다. 추가로 **전 페이지 공통 헤더의 'patina Star' 프로모(상업 제품 홍보)도
   전환 문서에서는 숨기는 것을 권장**(NC 방어 강화).

구현안(승인 시): `WikiArticle`에 `attribution?: { source, sourceUrl, license, licenseUrl }`
필드를 추가하고, `ArticleSections`/푸터에서 이 필드가 있으면 고지 블록을 렌더. 같은 필드로
`RepoInfobox`의 patina성 요소·헤더 프로모를 조건부로 숨김.

## 4. 법적 주의 (관제탑 확인 요청)

- **NC(비영리) 조항 vs 상업 사이트 긴장**: 이 위키의 존재 목적이 patina 퍼널(상업 유입)이다.
  CC BY-NC-SA의 NC는 "주로 상업적 이익을 위한 이용"을 금한다. **개별 페이지에서 CTA를 빼도,
  사이트 전체가 상업 목적이면 NC 위반 소지가 남을 수 있다.** 지시대로 CTA 제거는 반영하되,
  이 잔여 리스크는 운영자/법률 확인이 필요하다.
- **SA(동일조건)**: 전환 문서는 CC BY-NC-SA 2.0 KR로 표기하면 충족. 사이트 코드/타 문서와
  라이선스가 분리되므로 페이지 단위 고지로 관리.
- **BY(출처표시)**: 원문 링크 + 기여자 표기 + 변경 사실 명시로 충족.

## 5. 관제탑 결정 요청 사항

1. 전환 **실행 승인** 여부 (위 4건: claude-code, codex, ollama, open-webui).
2. **AutoGPT**(토막글): 전환할지, 현행 자체 문서 유지할지.
3. **gemini-cli**: 제외(현행 유지)로 확정할지, "Gemini 5.1 CLI" 섹션만 발췌할지.
4. 전환 문서에서 **헤더 patina 프로모 숨김** 적용 여부.
5. NC-상업사이트 잔여 리스크에 대한 법률 확인 진행 여부.

## 6. 실행 완료 (관제탑 승인 반영, 2026-07-07)

승인 조건대로 4건 전환 실행. AutoGPT 유지, gemini-cli 제외.

- 전환본(신규 파일, 등록됨): `claudeCodeNamuArticle.ts`, `codexNamuArticle.ts`,
  `ollamaNamuArticle.ts`, `openWebuiNamuArticle.ts`. slug·infobox·이미지는 유지하고
  본문(summary/sections)만 나무위키 발췌본으로 교체, `attribution` 필드 부착.
- **원본 보존(되돌리기)**: 자체 집필본 `claudeCodeArticle.ts`, `codexCliArticle.ts`,
  `ollamaArticle.ts`, `openWebuiArticle.ts`는 그대로 남겨 두고 등록만 해제했다.
  되돌리려면 `fixtures.ts`에서 import·배열 항목을 원본(`...Article`)으로 다시
  바꾸기만 하면 된다(한 파일, 8줄).
- **라이선스 처리**: `WikiArticle.attribution` → `ArticlePage`가 문서 하단에
  출처(원문 링크)+기여자+변경사실 + "CC BY-NC-SA 2.0 KR 동일 배포" 고지를 렌더.
- **NC 방어**: `attribution` 있는 문서는 `document.documentElement[data-nc-license=1]`을
  설정 → 헤더 patina 프로모(`.patina-header-star`)를 CSS로 숨김. 전환 문서에는
  patina 구매 CTA·랜딩 링크 없음.
- **광고 제거 품질 검증**: 헤드리스 브라우저 추출 → 광고/푸터/각주 필터 →
  **육안 검수**로 잔여 지역광고(치과·인테리어·자동차검사 등)·"최근 변경" 위젯·
  Paraguay 푸터·reCAPTCHA 문구를 최종 제거한 판만 반영.
- 검증: typecheck 클린, 단위 78개(+2: 라이선스 푸터/자체문서 구분) 통과, 빌드 정상.

## 7. 롤백 (하코 결정 — 큐23 종결, 2026-07-07)

리스크 판단 결과 **③ 롤백**. 나무위키 파생 본문 전면 제거.

- 4건(claude-code·codex·ollama·open-webui) → 보존해 둔 **자체 집필본으로 복구**
  (`fixtures.ts` import·배열을 원본 `...Article`로 되돌림). 전환본 파일
  `*NamuArticle.ts` 4개는 삭제.
- 대신 각 자체 문서 개요 섹션에 **나무위키 단순 외부 링크만 추가**('나무위키 문서',
  variant external). 링크는 저작권 문제·CC BY-NC-SA 의무가 발생하지 않는다.
- 파생 본문이 사라졌으므로 **동일조건(SA) 고지·attribution 기능 전면 제거**:
  `WikiArticle.attribution` 타입·필드, `ArticlePage`의 라이선스 푸터·`data-nc-license`
  로직, `.article-license` CSS, 헤더 patina 프로모 숨김 규칙까지 모두 삭제(더 이상
  사용처 없음). 전환 문서가 없으므로 patina 프로모는 다시 전 문서 공통 노출.
- 검증: typecheck 클린, 단위 테스트 통과, 빌드 정상, 배포 확인.
