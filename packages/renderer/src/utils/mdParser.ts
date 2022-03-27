import {marked} from 'marked';

class AClerkRender extends marked.Renderer{
  code(code: string, language: string | undefined, isEscaped: boolean): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const lang = (language || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isEscaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if(language && language.match(/^mermaid/)){
      return '<div class="mermaid">' + code + '</div>';
    }

    if (!lang) {
      return '<pre><code>'
        + code
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + lang
      + '">'
      + code
      + '</code></pre>\n';
  }
}


export async function md2html(mdStr: string): Promise<string> {
  return marked.parse(mdStr, {renderer: new AClerkRender()});
}
