import { useBible } from "../hooks";

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
    <div className="container">
      <strong>{book}</strong>
      <p
        dangerouslySetInnerHTML={{
          __html: bible.ls().join("\n"),
        }}
      />
    </div>
  );
};
