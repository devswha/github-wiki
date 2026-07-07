# 트래픽 관측 vs 전환 귀속 (역할 구분)

위키에는 목적이 다른 두 계측이 함께 돈다. 겹치는 게 아니라 퍼널의 서로 다른 구간을 본다.

| | Vercel Web Analytics | patina UTM |
|---|---|---|
| **본다** | 위키 **자체 트래픽** (페이지뷰·방문자·경로·리퍼러) | 위키에서 **patina로 넘어간 전환** |
| **어디서** | 위키의 모든 페이지 (프로덕션) | patina 랜딩(`patina.vibetip.help`) → 결제까지 |
| **구현** | `/_vercel/insights/script.js` (프로덕션만 주입, `src/main.tsx`) | 랜딩 링크에 `utm_source=github-wiki&utm_medium=wiki&utm_campaign=vibetip` (`src/wiki/patinaArticle.ts`) |
| **질문** | "위키에 사람이 오나? 어느 문서가 유입되나?" | "위키를 통해 온 방문이 patina Pro 결제까지 갔나?" |
| **집계 주체** | Vercel 대시보드(github-wiki 프로젝트) | patina 애널리틱스(first-touch UTM 귀속) |

## 한 줄 요약

- **Analytics = 위키 트래픽 관측** (얼마나, 어디로 들어오나)
- **UTM = 위키→patina 전환 귀속** (그 트래픽이 매출로 이어지나)

앞단(위키 유입)이 Analytics로 보이고, 뒷단(patina 전환)이 UTM으로 귀속되어 퍼널
전체가 관측된다.

## Vercel Web Analytics 메모

- **프로덕션 전용**: `import.meta.env.PROD`일 때만 스크립트를 주입한다. 로컬 dev·테스트에서는 로드되지 않는다.
- **SPA 대응**: Vercel 스크립트가 History API 변경을 감지해 클라이언트 라우트 이동도 페이지뷰로 집계한다.
- **프라이버시**: 쿠키리스이며 개인정보(개인 식별 데이터)를 수집하지 않는다 — 배너·동의 흐름 없이 그대로 켤 수 있는 게 장점.
- **활성화**: Vercel 프로젝트(`devshwas-projects/github-wiki`)의 Web Analytics는 이미 활성 상태다(`webAnalytics.enabledAt` 설정됨). 별도 토글 불필요.
- **대시보드 확인 경로**: Vercel → github-wiki 프로젝트 → Analytics 탭.

> 만약 Web Analytics가 꺼져 있었다면(현재는 켜짐): Vercel 대시보드 → 해당 프로젝트
> → **Analytics** 탭 → **Enable**(약 30초). 코드는 이미 스크립트를 주입하므로,
> 토글만 켜면 다음 방문부터 수집된다.
