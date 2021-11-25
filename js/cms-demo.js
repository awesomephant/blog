import { EditorView, drawSelection, highlightActiveLine } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { html } from "@codemirror/lang-html"
import { classHighlightStyle } from "@codemirror/highlight"
import { Liquid } from 'liquidjs'
import { parse } from "papaparse";
const liquid = new Liquid()

let dataEditor, templateEditor, recipeEditor;

const data = `site_title
Max's recipe box
`
const recipes = `title, duration
Mushroom pizza, 0:45
Pumpkin Soup, 1:20
Apple Pie, 2:00
`

const template = `<h1>{{title}}</h1>
<ul>
  {% for recipe in recipes %}
  <li>
    <h2>{{recipe.title}}</h2>
    <span>Duration: {{recipe.duration}}</span>
  </li>
  {% endfor %}
</ul>
`

function runLiquid() {
    const htmlContainer = document.querySelector(".cms-demo .output code")
    let recipes = parse(recipeEditor.state.doc.toString(), {
        header: true,
        skipEmptyLines: true,
        transformHeader: (value, index) => {
            return value.trim()
        },
        transform: (value, field) => {
            return value.trim()
        }
    });
    let meta = parse(dataEditor.state.doc.toString(), {
        header: true,
        skipEmptyLines: true,
        transformHeader: (value, index) => {
            return value.trim()
        },
        transform: (value, field) => {
            return value.trim()
        }
    });
    let data = {
        title: meta.data.site_title,
        recipes: [...recipes.data]
    }
    console.log(data)
    liquid
        .parseAndRender(templateEditor.state.doc.toString(), data)
        .then(html => {
            console.log(html)
            htmlContainer.innerText = html.trim();
        })
}

function initCodemirror() {
    console.log("hi")
    const dataContainer = document.querySelector(".cms-demo .data")
    const templateContainer = document.querySelector(".cms-demo .template")
    const runButton = document.querySelector(".cms-demo .run")
    const extensions = [classHighlightStyle, drawSelection(), highlightActiveLine()]
    dataEditor = new EditorView({
        state: EditorState.create({
            doc: data,
            extensions: extensions
        }),
        parent: dataContainer
    })
    recipeEditor = new EditorView({
        state: EditorState.create({
            doc: recipes,
            extensions: extensions
        }),
        parent: dataContainer
    })
    templateEditor = new EditorView({
        state: EditorState.create({
            doc: template,
            extensions: [...extensions, html()]
        }),
        parent: templateContainer
    })

    runButton.addEventListener("click", () => {
        runLiquid();
    })
}

export { initCodemirror }