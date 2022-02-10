import Split from "split-grid";
import "./style.css";

const $ = (selector) => document.querySelector(selector);

Split({
  columnGutters: [
    {
      track: 1,
      element: $(".gutter-col-1"),
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: $(".gutter-row-1"),
    },
  ],
});

const $js = $("#js");
const $css = $("#css");
const $html = $("#html");

$js.addEventListener("input", update);
$css.addEventListener("input", update);
$html.addEventListener("input", update);

function update() {
  const html = createHTML();
  $("iframe").setAttribute("srcdoc", html);
}

const createHTML = () => {
  const html = $html.value;
  const css = $css.value;
  const js = $js.value;
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <script>
      ${js}
    </script>
    <body>
      ${html}
    </body>
    </html>
  `;
};
