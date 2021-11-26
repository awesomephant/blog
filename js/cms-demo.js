import { EditorView, drawSelection, highlightActiveLine, ViewUpdate } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { html } from "@codemirror/lang-html"
import { classHighlightStyle } from "@codemirror/highlight"
import { Liquid } from 'liquidjs'
import { parse } from "papaparse";
const liquid = new Liquid()

let state = {
    dataEditor: null,
    templateEditor: null,
    recipeEditor: null,
    htmlEditor: null,
    autoRefresh: false,
}

const data = `site_title
Max's recipe box
`
const recipes = `title, duration
Mushroom pizza, 0:45
Pumpkin Soup, 1:20kjh
Apple Pie, 2:00
`

const template = `<h1>{{site_title}}</h1>
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
    let recipes = parse(state.recipeEditor.state.doc.toString(), {
        header: true,
        skipEmptyLines: true,
        transformHeader: (value, index) => {
            return value.trim()
        },
        transform: (value, field) => {
            return value.trim()
        }
    });
    let meta = parse(state.dataEditor.state.doc.toString(), {
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
        ...meta.data[0],
        recipes: [...recipes.data]
    }
    liquid
        .parseAndRender(state.templateEditor.state.doc.toString(), data)
        .then(html => {
            console.log(html)
            state.htmlEditor.dispatch({
                changes: { from: 0, to: state.htmlEditor.state.doc.toString().length, insert: html }
            })
        })
}

function resetEditorContent() {
    state.dataEditor.dispatch({
        changes: { from: 0, to: state.dataEditor.state.doc.toString().length, insert: data }
    })
    state.recipeEditor.dispatch({
        changes: { from: 0, to: state.recipeEditor.state.doc.toString().length, insert: recipes }
    })
    state.templateEditor.dispatch({
        changes: { from: 0, to: state.templateEditor.state.doc.toString().length, insert: template }
    })
    state.htmlEditor.dispatch({
        changes: { from: 0, to: state.templateEditor.state.doc.toString().length, insert: "" }
    })
}

function handleEditorUpdate(update) {
    if (update.changedRanges.length > 0) {
        if (state.autoRefresh) {
            runLiquid()
        }
    }
}

function initCodemirror() {
    console.log("Initialising CMS Demo")

    const dataContainer = document.querySelector(".cms-demo .data")
    const templateContainer = document.querySelector(".cms-demo .template")
    const htmlContainer = document.querySelector(".cms-demo .html")
    const extensions = [classHighlightStyle, drawSelection(), highlightActiveLine()]
    const autoRefreshToggle = document.querySelector(".cms-demo #enable-auto-refresh")

    const runButton = document.querySelector(".cms-demo #run")
    const resetButton = document.querySelector(".cms-demo #reset")

    state.dataEditor = new EditorView({
        state: EditorState.create({
            doc: data,
            extensions: [...extensions, EditorView.updateListener.of(handleEditorUpdate)]
        }),
        parent: dataContainer
    })
    state.recipeEditor = new EditorView({
        state: EditorState.create({
            doc: recipes,
            extensions: [...extensions, EditorView.updateListener.of(handleEditorUpdate)]
        }),
        parent: dataContainer
    })
    state.templateEditor = new EditorView({
        state: EditorState.create({
            doc: template,
            extensions: [...extensions, html(), EditorView.updateListener.of(handleEditorUpdate)]
        }),
        parent: templateContainer
    })
    state.htmlEditor = new EditorView({
        state: EditorState.create({
            doc: "",
            extensions: [...extensions, html(), EditorView.editable.of(false)]
        }),
        parent: htmlContainer
    })

    autoRefreshToggle.addEventListener("change", e => {
        state.autoRefresh = autoRefreshToggle.checked;
    })

    runButton.addEventListener("click", () => {
        runLiquid();
    })

    resetButton.addEventListener("click", () => {
        resetEditorContent();
    })

}

window.addEventListener("DOMContentLoaded", () => {
    initCodemirror()
})