import { useBible } from "../hooks";
import "./ChapterView.css"

interface ChapterViewProps {
  book?: string;
  chapter?: number;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ book, chapter }) => {
  const bible = useBible();
  if (!bible) return <div className="container">Loading...</div>;
  if (book) bible.selectBook(book);
  if (chapter) bible.selectChapter(chapter);

  return (
    <div className="chapter-view-container">
      <h1>{book}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: bible.ls().join("\n"),
        }}
      />
    </div>
  );
};
