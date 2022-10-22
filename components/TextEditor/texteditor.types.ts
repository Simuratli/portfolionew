export interface TextEditorPropTypes {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sanitize: () => void;
  name: string;
}
