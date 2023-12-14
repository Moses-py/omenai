import DOMPurify from "dompurify";

interface Props {
  htmlContent: string;
}

const SanitizedHTMLRenderer: React.FC<Props> = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default SanitizedHTMLRenderer;
