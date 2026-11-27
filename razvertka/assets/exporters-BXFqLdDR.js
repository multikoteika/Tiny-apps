import{p,a as m,m as x}from"./index-DpMAdZdv.js";import"./three-Dv0gNCzD.js";const w=e=>e.map(o=>`${o.x.toFixed(3)},${o.y.toFixed(3)}`).join(" ");function $(e,o,s=1,n=null){const c=p(e),l=e.tabs.map(t=>`
    <polygon points="${w(t.points)}" fill="#edf1ff" stroke="#5d86ff" stroke-width="0.2" stroke-linejoin="round" />
    ${o.showLabels?`<text x="${m(t.points).x}" y="${m(t.points).y}" class="tab-label">${t.label}</text>`:""}
  `).join(""),i=e.faces.map(t=>`
    <polygon points="${w(t.points)}" fill="${n===t.id?"#dce4fd":"#ffffff"}" stroke="none" />
    ${o.showFaceIds?`<text x="${t.centroid.x}" y="${t.centroid.y}" class="face-label">${t.id+1}</text>`:""}
  `).join(""),r=c.map(t=>`
    <line x1="${t.a.x}" y1="${t.a.y}" x2="${t.b.x}" y2="${t.b.y}" class="${t.type}" />
    ${o.showLabels&&t.type==="cut"?`<text x="${x(t.a,t.b).x}" y="${x(t.a,t.b).y}" class="edge-label">${t.label}</text>`:""}
  `).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${e.width}mm" height="${e.height}mm" viewBox="0 0 ${e.width} ${e.height}">
  <style>
    .cut { stroke: #24242a; stroke-width: 0.28; stroke-linecap: round; }
    .fold { stroke: #3667f6; stroke-width: 0.25; stroke-dasharray: 2 1.35; stroke-linecap: round; }
    .soft { stroke: #4c9b89; stroke-width: 0.22; stroke-dasharray: 0.6 1.4; stroke-linecap: round; }
    .edge-label, .tab-label, .face-label { text-anchor: middle; dominant-baseline: middle; font-family: monospace; font-size: 2.6px; fill: #3667f6; paint-order: stroke; stroke: #ffffff; stroke-width: 0.8; stroke-linejoin: round; }
    .face-label { fill: #6d707b; font-size: 2.3px; }
    .sheet-meta { font-family: monospace; font-size: 2.8px; fill: #6d707b; letter-spacing: 0.3px; }
  </style>
  <rect width="${e.width}" height="${e.height}" fill="#ffffff" />
  <text x="${e.width/2}" y="6" class="sheet-meta" text-anchor="middle">SHEET ${e.index+1} / ${s}</text>
  <g>${l}</g>
  <g>${i}</g>
  <g>${r}</g>
  <text x="${e.width/2}" y="${e.height-4}" class="sheet-meta" text-anchor="middle">1:1 · mm</text>
</svg>`}function b(e,o){const s=URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=o,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3)}function g(e,o,s){const n=$(e,o,s);b(new Blob([n],{type:"image/svg+xml;charset=utf-8"}),`razvertka-list-${e.index+1}.svg`)}async function v(e,o,s){const n=$(e,o,s),c=new Blob([n],{type:"image/svg+xml;charset=utf-8"}),l=URL.createObjectURL(c);try{const i=new Image;await new Promise((d,f)=>{i.onload=()=>d(),i.onerror=()=>f(new Error("Не удалось подготовить PNG.")),i.src=l});const r=4,t=document.createElement("canvas");t.width=Math.round(e.width*r),t.height=Math.round(e.height*r);const a=t.getContext("2d");if(!a)throw new Error("Canvas недоступен в этом браузере.");a.fillStyle="#ffffff",a.fillRect(0,0,t.width,t.height),a.drawImage(i,0,0,t.width,t.height);const y=await new Promise((d,f)=>{t.toBlob(h=>h?d(h):f(new Error("Не удалось создать PNG.")),"image/png")});b(y,`razvertka-list-${e.index+1}.png`)}finally{URL.revokeObjectURL(l)}}export{b as downloadBlob,v as exportPng,g as exportSvg,$ as pageToSvg};
