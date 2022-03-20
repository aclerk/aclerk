import {marked} from 'marked';

export async function md2html(mdStr: string): Promise<string> {
  return marked.parse(mdStr);
}
