import { render as baseRender, html, nothing } from '../../node_modules/lit-html/lit-html.js';

const container = document.querySelector('#wrapper main');

const render = (template) => baseRender(template, container);

export { html, nothing, render, baseRender };