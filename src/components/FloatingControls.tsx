import type { ReactElement } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export function FloatingControls(): ReactElement {
  return (
    <aside aria-label="문서 위치 이동" className="floating-controls">
      <a aria-label="맨 위로" href="#top">
        <ArrowUp aria-hidden="true" size={18} />
      </a>
      <a aria-label="맨 아래로" href="#bottom">
        <ArrowDown aria-hidden="true" size={18} />
      </a>
    </aside>
  );
}
