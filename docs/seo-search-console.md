# Google Search Console 등록 (하코 몫 — 준비 완료)

이 위키의 검색 색인을 위한 준비는 코드에 반영되어 있다. 실제 소유권 인증과
색인 요청은 Google 계정 소유자(하코)가 아래 절차로 진행한다. **이 문서 = 등록
런북.** 배포는 이미 라이브: <https://wiki.vibetip.help>.

## 이미 준비된 것 (코드/배포 측)

- `sitemap.xml` — 빌드 시 자동 생성(`vite.config.ts`의 `github-wiki-seo-artifacts`
  플러그인). 전 문서 slug + 정적 라우트 + 분류 페이지 포함. 배포되면
  <https://wiki.vibetip.help/sitemap.xml> 에서 서빙된다.
- `robots.txt` — 전체 허용 + sitemap 위치 명시.
  <https://wiki.vibetip.help/robots.txt>
- 페이지별 `<title>`, `<meta name="description">`, canonical, Open Graph/Twitter
  태그 — React 19 네이티브 메타(`src/components/PageMeta.tsx`)로 렌더. Googlebot은
  JS를 렌더링하므로 문서별 제목·설명·정규 URL을 색인 시 읽는다.
- 문서를 새로 추가하면 sitemap은 다음 배포에서 자동 갱신된다(수동 편집 불필요).

## 하코가 할 일 (순서대로)

1. **속성 추가**: <https://search.google.com/search-console> → 속성 추가 →
   "URL 접두어" 유형에 `https://wiki.vibetip.help` 입력.
2. **소유권 인증** (둘 중 하나):
   - *권장 — DNS TXT*: `vibetip.help` DNS에 Google이 준 `google-site-verification=…`
     TXT 레코드 추가. 서브도메인 전체를 한 번에 커버.
   - *대안 — HTML 메타 태그*: Google이 준
     `<meta name="google-site-verification" content="…">` 를 `index.html`
     `<head>`에 추가하고 재배포. (이 방법을 쓰려면 관제탑에 알려 주면 태그를
     넣어 재배포한다.)
3. **sitemap 제출**: Search Console → 색인 → Sitemaps →
   `https://wiki.vibetip.help/sitemap.xml` 제출.
4. **색인 요청**(선택, 초기 가속): URL 검사 도구에 주요 문서 URL(예: patina,
   gajae-code)을 넣고 "색인 생성 요청".
5. **성능 확인**: 며칠 뒤 실적 리포트에서 노출/클릭/쿼리 확인. patina 문서로의
   유입은 patina 랜딩 UTM(`utm_source=github-wiki`)으로 별도 추적된다.

## 확인 체크리스트

- [ ] `curl -sI https://wiki.vibetip.help/sitemap.xml` → 200 + `content-type: application/xml`
- [ ] `curl -s https://wiki.vibetip.help/robots.txt` → sitemap 라인 노출
- [ ] Search Console 소유권 인증 완료
- [ ] sitemap 제출 후 "성공" 상태
