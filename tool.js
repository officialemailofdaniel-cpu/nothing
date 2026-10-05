const $=s=>document.querySelector(s);
const state={files:[],pdf:null};
const input=$("#files"),drop=$("#drop"),list=$("#filesList"),result=$("#result");

function setFiles(files){state.files=[...files];list.innerHTML=state.files.length?state.files.map(f=>`<div>✓ ${escapeHtml(f.name)} — ${formatBytes(f.size)}</div>`).join(""):"No files selected.";$("#run").disabled=!state.files.length}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function formatBytes(n){if(n<1024)return n+" B";if(n<1024**2)return Math.round(n/1024)+" KB";return (n/1024**2).toFixed(1)+" MB"}
drop.addEventListener("click",()=>input.click());
input.addEventListener("change",e=>setFiles(e.target.files));
drop.addEventListener("dragover",e=>{e.preventDefault();drop.classList.add("drag")});
drop.addEventListener("dragleave",()=>drop.classList.remove("drag"));
drop.addEventListener("drop",e=>{e.preventDefault();drop.classList.remove("drag");setFiles(e.dataTransfer.files)});
$("#clear")?.addEventListener("click",()=>{state.files=[];input.value="";setFiles([]);result.textContent=""});
function saveBlob(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
async function readBytes(file){return new Uint8Array(await file.arrayBuffer())}
async function pdfFromFile(file){return await PDFLib.PDFDocument.load(await readBytes(file))}
async function downloadPdf(doc,name){saveBlob(new Blob([await doc.save()],{type:"application/pdf"}),name)}
function selectedPages(value,max){const out=[];for(const part of value.split(",")){const t=part.trim();if(!t)continue;if(t.includes("-")){let[a,b]=t.split("-").map(Number);if(Number.isFinite(a)&&Number.isFinite(b)){const step=a<=b?1:-1;for(let n=a;step>0?n<=b:n>=b;n+=step)if(n>=1&&n<=max)out.push(n-1)}}else{const n=Number(t);if(n>=1&&n<=max)out.push(n-1)}}return [...new Set(out)]}
