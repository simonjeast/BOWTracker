// Interface logic checks in an in-memory DOM. These do not replace browser or visual checks.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
test('planner → archive results → journey → stops → service and manual recovery',async()=>{
 const dom=new JSDOM(await readFile(new URL('../index.html',import.meta.url),'utf8'),{url:'https://example.test/BOWTracker/'});
 const w=dom.window;
 for(const k of ['window','document','location','localStorage','FormData'])globalThis[k]=k==='window'?w:w[k];
 Object.defineProperty(globalThis,'navigator',{value:w.navigator,configurable:true});
 w.HTMLElement.prototype.scrollIntoView=()=>{};w.scrollTo=()=>{};
 w.localStorage.setItem('bow-preferences-v2','{broken');
 await import('../app.js');
 const $=s=>w.document.querySelector(s);
 const click=s=>{assert.ok($(s),s);$(s).click();};
 const route=async hash=>{w.location.hash=hash;await new Promise(r=>setTimeout(r,5));};
 const submit=()=>$('#planner').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
 assert.match($('#main').textContent,/Current schedule unconfirmed/);
 submit();assert.match($('#results').textContent,/confirm the schedule first/);assert.equal($('.trip-card'),null);
 click('[data-preview]');await new Promise(r=>setTimeout(r,5));
 assert.match($('#main').textContent,/Archived timetable preview/);assert.match($('.trip-card').textContent,/4:10 PM/);
 const link=$('.trip-card').getAttribute('href');await route(link);
 assert.equal(w.document.querySelectorAll('.journey-timeline li').length,4);assert.match($('.journey-time').textContent,/4:25 PM/);
 await route('#find');assert.equal($('[name=date]').value,'2026-04-16');assert.match($('.trip-card').textContent,/4:10 PM/);
 click('#swap');submit();assert.match($('.trip-card').textContent,/4:25 PM/);
 $('[name=destination]').value='olin-east';submit();assert.match($('#results').textContent,/No direct journey/);
 await route('#stops');assert.equal(w.document.querySelectorAll('.stop-card').length,4);
 assert.match($('#main').textContent,/Archived timetable preview/);
 Object.defineProperty(w.navigator,'geolocation',{value:{getCurrentPosition:(_ok,fail)=>fail({code:1})},configurable:true});
 click('#locate');assert.match($('#locationStatus').textContent,/permission was declined/);

 Object.defineProperty(w.navigator,'geolocation',{value:undefined,configurable:true});
 click('#locate');assert.match($('#locationStatus').textContent,/unavailable in this browser/);
 for(const coords of [
   {latitude:42.2937,longitude:-71.3065,accuracy:1200},
   {latitude:142,longitude:-71,accuracy:10}
 ]) {
   Object.defineProperty(w.navigator,'geolocation',{value:{getCurrentPosition:ok=>ok({coords})},configurable:true});
   click('#locate');assert.match($('#locationStatus').textContent,/too imprecise/);assert.equal($('#confirmStop'),null);
 }
 Object.defineProperty(w.navigator,'geolocation',{value:{getCurrentPosition:ok=>ok({coords:{latitude:51.5,longitude:-0.1,accuracy:10}})},configurable:true});
 click('#locate');assert.match($('#locationStatus').textContent,/away from the campuses/);assert.equal($('#confirmStop'),null);
 let lateLocation;
 Object.defineProperty(w.navigator,'geolocation',{value:{getCurrentPosition:ok=>{lateLocation=ok;}},configurable:true});
 click('#locate');await route('#service');
 lateLocation({coords:{latitude:42.2937,longitude:-71.3065,accuracy:10}});
 assert.equal($('#confirmStop'),null);assert.match($('#main').textContent,/Know before you go/);
 await route('#stops');
 Object.defineProperty(w.navigator,'geolocation',{value:{getCurrentPosition:ok=>ok({coords:{latitude:42.2937,longitude:-71.3065,accuracy:10}})},configurable:true});
 click('#locate');assert.ok($('#confirmStop'));click('#confirmStop');await new Promise(r=>setTimeout(r,5));
 assert.equal($('[name=origin]').value,'wellesley-campus');
 await route('#service');assert.equal(w.document.querySelectorAll('#timetable tbody tr').length,23);
 $('#tableDay').value='2026-04-18';$('#tableDay').dispatchEvent(new w.Event('change'));assert.equal(w.document.querySelectorAll('#timetable tbody tr').length,16);assert.match($('#timetable').textContent,/12:07 AM \+1 day/);
 await route('#find');click('#exitPreview');assert.match($('#main').textContent,/Current schedule unconfirmed/);assert.equal($('.trip-card'),null);

 Object.defineProperty(w.navigator,'onLine',{value:false,configurable:true});
 w.dispatchEvent(new w.Event('offline'));assert.ok($('#offlineNotice'));
 await route('#stops');assert.ok($('#offlineNotice'));
 await route('#find');click('[data-preview]');assert.ok($('#offlineNotice'));
 click('#swap');assert.ok($('#offlineNotice'));
 Object.defineProperty(w.navigator,'onLine',{value:true,configurable:true});
 w.dispatchEvent(new w.Event('online'));assert.equal($('#offlineNotice'),null);
 await route('#journey/not-a-trip');assert.match($('#main').textContent,/Start with your route/);
 dom.window.close();
});
