#!/usr/bin/env python3
"""Build a single self-contained HTML file of the writing studio.

Usage: python3 tools/bundle.py [output.html]
Default output: dist/writing-studio.html
Inlines css/app.css, every local <script src>, and the favicon. Google Fonts stay as a link
(without internet the page falls back to system fonts).
"""
import base64
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(rel):
    with open(os.path.join(ROOT, rel), encoding='utf-8') as f:
        return f.read()


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'dist', 'writing-studio.html')
    html = read('index.html')

    css = read('css/app.css')
    html = html.replace('<link rel="stylesheet" href="css/app.css">', '<style>\n' + css + '\n</style>')

    with open(os.path.join(ROOT, 'assets', 'favicon.svg'), 'rb') as f:
        fav = base64.b64encode(f.read()).decode()
    html = html.replace('href="assets/favicon.svg"', 'href="data:image/svg+xml;base64,' + fav + '"')

    missing = []

    def inline_script(match):
        src = match.group(1)
        path = os.path.join(ROOT, src)
        if not os.path.exists(path):
            missing.append(src)
            return ''
        code = read(src).replace('</script', '<\\/script')
        return '<script>/* ' + src + ' */\n' + code + '\n</script>'

    html = re.sub(r'<script src="([^"]+)"></script>', inline_script, html)
    html = html.replace('href="landing/index.html"', 'href="#/settings"')

    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Wrote', out, '({:.0f} KB)'.format(len(html.encode('utf-8')) / 1024))
    if missing:
        print('Skipped missing scripts:', ', '.join(missing))


if __name__ == '__main__':
    main()
