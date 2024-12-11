export interface ICodeItem {
  id: string;
  title: string;
  date: Date;
  language: string;
  tags: string[];
  codeString: string;
  isLiked: boolean;
}
