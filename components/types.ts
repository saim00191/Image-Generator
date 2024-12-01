export interface PromptInputProps {
  text: string;
  setText: (value: string) => void;
}

export interface GenerateButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export interface ImageDisplayProps {
  isLoading: boolean;
  url: string;
}

export interface QueryData {
  inputs: string;
}
