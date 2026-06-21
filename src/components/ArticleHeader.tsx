import type { ReactElement } from "react";
import { Clock, Edit3, History, MessageSquare, MoreHorizontal, Star } from "lucide-react";

type ArticleHeaderProps = {
  readonly title: string;
  readonly modifiedAt: string;
};

const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Asia/Seoul",
});

export function ArticleHeader({
  title,
  modifiedAt,
}: ArticleHeaderProps): ReactElement {
  const modifiedDate = new Date(modifiedAt);
  const displayDate = dateTimeFormatter.format(modifiedDate);

  return (
    <div className="article-header">
      <div className="article-title-group">
        <h1>{title}</h1>
        <p className="article-modified">
          <Clock aria-hidden="true" size={16} />
          <span>최근 수정 시각:</span>
          <time dateTime={modifiedAt}>{displayDate}</time>
        </p>
      </div>
      <div aria-label="문서 작업" className="article-actions">
        <button type="button" aria-label="내 문서함에 추가">
          <Star aria-hidden="true" size={16} />
          <span>1</span>
        </button>
        <button type="button">
          <Edit3 aria-hidden="true" size={16} />
          <span>편집</span>
        </button>
        <button type="button">
          <MessageSquare aria-hidden="true" size={16} />
          <span>토론</span>
        </button>
        <button type="button">
          <History aria-hidden="true" size={16} />
          <span>역사</span>
        </button>
        <button type="button" aria-label="더 보기">
          <MoreHorizontal aria-hidden="true" size={16} />
        </button>
      </div>
    </div>
  );
}
