export interface InputPropTypes {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type: string;
  placeholder: string;
  value: string;
  label: string;
}
