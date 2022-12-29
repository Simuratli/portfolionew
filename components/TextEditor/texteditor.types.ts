export interface TextEditorPropTypes {
  value: string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}
