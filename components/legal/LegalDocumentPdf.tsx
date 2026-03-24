type LegalDocumentPdfProps = {
  src: string;
  title: string;
  className?: string;
};

export function LegalDocumentPdf({ src, title, className = "" }: LegalDocumentPdfProps) {
  return (
    <div className={`rounded-xl border border-gray-200 overflow-hidden bg-gray-50 not-prose ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 border-b border-gray-200 bg-white">
        <span className="text-sm font-medium text-gray-800">원문 PDF</span>
        <a href={src} download className="text-sm text-heart-600 hover:underline">
          다운로드
        </a>
      </div>
      <iframe title={title} src={src} className="w-full h-[min(50vh,480px)] bg-white" />
    </div>
  );
}
