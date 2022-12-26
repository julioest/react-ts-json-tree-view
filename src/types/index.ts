import { Dispatch, SetStateAction } from "react";

export type JSONValue =
  | string
  | number
  | boolean
  | { [key: string]: JSONValue }
  | Array<JSONValue>;

export type FetchAPIProps = {
  endpoint: string;
  method?: string;
}

export type SearchFormProps = {
  inputVal: string;
  onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
  setInputVal: Dispatch<SetStateAction<string>>;
};

export type TreeViewProps = {
  data: JSONValue;
  name?: string | null;
  toggled?: boolean;
  isFirstElement?: boolean;
  isLastElement?: boolean;
  isChildElement?: boolean;
};

export type TreeNodeWrapperProps = {
  condition: boolean;
  children: JSX.Element;
  className: string;
};
