// ── Estado ───────────────────────────────────────────────────
let curPage   = 'inicio';
let curHymn   = null;
let addCat    = 'harpa';
let listContext  = null;  // {listId, hymns[], pos}
let listViewId   = null;
let presentHymns = [];
let presentIdx   = 0;
let showChords   = false;

// ── YouTube IFrame API ───────────────────────────────────────
// window._ytApiReady pode já ser true se a API disparou antes deste script carregar
let ytApiReady = !!(window._ytApiReady);
const ytPlayers = {};
let ytTimerInterval = null;
const ytMuted = {louvor:false, playback:false};
let pendingYT = null;

window.onYouTubeIframeAPIReady = function(){
  ytApiReady = true;
  window._ytApiReady = true;
  if(pendingYT){
    const {louvorId, playbackId} = pendingYT;
    pendingYT = null;
    const yp = document.getElementById('ytPlayer');
    const ypb = document.getElementById('ytPlayback');
    if(louvorId && yp){ yp.classList.remove('hidden'); loadYTPlayer('louvor', louvorId); }
    if(playbackId && ypb){ ypb.classList.remove('hidden'); loadYTPlayer('playback', playbackId); }
  }
};

function fmtTime(s){
  s = Math.floor(s||0);
  return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
}

function loadYTPlayer(key, videoId){
  const fillEl = document.getElementById(key+'Fill');
  const timeEl = document.getElementById(key+'Time');
  const btnEl  = document.getElementById(key+'PlayBtn');
  if(fillEl) fillEl.style.width='0%';
  if(timeEl) timeEl.textContent='0:00 / 0:00';
  if(btnEl)  btnEl.textContent='▶';
  ytMuted[key]=false;

  // Reutiliza player existente — cueVideoById não dá play automático
  if(ytPlayers[key] && typeof ytPlayers[key].cueVideoById === 'function'){
    try{ ytPlayers[key].stopVideo(); ytPlayers[key].cueVideoById(videoId); startYTTimer(); return; }catch(e){}
  }

  // Recria container se foi removido do DOM pelo destroy() anterior
  const wrapper = document.getElementById('yt-player-wrapper');
  let container = document.getElementById(key+'Container');
  if(!container && wrapper){
    container = document.createElement('div');
    container.id = key+'Container';
    wrapper.appendChild(container);
  }

  ytPlayers[key]=new YT.Player(key+'Container',{
    height:'1', width:'1', videoId:videoId,
    playerVars:{autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1},
    events:{
      onReady:function(e){ e.target.setVolume(80); startYTTimer(); },
      onStateChange:function(e){
        const btn=document.getElementById(key+'PlayBtn');
        if(btn) btn.textContent=(e.data===1)?'⏸':'▶';
      }
    }
  });
}

function startYTTimer(){
  clearInterval(ytTimerInterval);
  ytTimerInterval=setInterval(()=>{
    ['louvor','playback'].forEach(key=>{
      const p=ytPlayers[key];
      if(!p||typeof p.getCurrentTime!=='function') return;
      try{
        const cur=p.getCurrentTime()||0, dur=p.getDuration()||0;
        const el=document.getElementById(key+'Time');
        if(el) el.textContent=fmtTime(cur)+' / '+fmtTime(dur);
        const fill=document.getElementById(key+'Fill');
        if(fill && dur>0) fill.style.width=(cur/dur*100)+'%';
      }catch(er){}
    });
  },500);
}

function stopYTPlayers(){
  clearInterval(ytTimerInterval); ytTimerInterval=null;
  ['louvor','playback'].forEach(key=>{
    if(ytPlayers[key]){ try{ ytPlayers[key].stopVideo(); }catch(e){} }
  });
}

function audioToggle(key){
  const p=ytPlayers[key];
  if(!p||typeof p.getPlayerState!=='function') return;
  if(p.getPlayerState()===1) p.pauseVideo(); else p.playVideo();
}

function audioMute(key){
  const p=ytPlayers[key]; if(!p) return;
  ytMuted[key]=!ytMuted[key];
  if(ytMuted[key]) p.mute(); else p.unMute();
  document.getElementById(key+'VolBtn').textContent=ytMuted[key]?'🔇':'🔊';
}

function audioSeek(key,e,el){
  const p=ytPlayers[key];
  if(!p||typeof p.getDuration!=='function') return;
  p.seekTo(p.getDuration()*(e.offsetX/el.offsetWidth),true);
}

function audioSkip(key,sec){
  const p=ytPlayers[key];
  if(!p||typeof p.getCurrentTime!=='function') return;
  p.seekTo(Math.max(0,p.getCurrentTime()+sec),true);
}

function audioVol(key,val){
  const p=ytPlayers[key]; if(!p) return;
  const v=parseInt(val);
  p.setVolume(v);
  if(v===0){ p.mute(); ytMuted[key]=true; document.getElementById(key+'VolBtn').textContent='🔇'; }
  else { p.unMute(); ytMuted[key]=false; document.getElementById(key+'VolBtn').textContent='🔊'; }
}
let audioMap  = {};
let logoClicks = 0, logoTimer = null;

// ── Persistência ─────────────────────────────────────────────
const ls = {
  get: (k,d) => { try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d }catch{return d} },
  set: (k,v) => { try{ localStorage.setItem(k,JSON.stringify(v)) }catch{} }
};

let favs     = ls.get('vda_favs',[]);
let recents  = ls.get('vda_recents',[]);
let custom   = ls.get('vda_custom',[]);
let lists    = ls.get('vda_lists',[]);
let cfg      = ls.get('vda_cfg',{theme:'dark',font:'medium'});
let ytMap        = Object.assign({},DEFAULT_YT,ls.get('vda_ytmap',{}));
let playbackMap  = Object.assign({},DEFAULT_PLAYBACK,ls.get('vda_playbackmap',{}));
let chordsOverride = ls.get('vda_chords',{});
let isAdmin  = false;
let isEditor = false;

// ── Auth ─────────────────────────────────────────────────────
function verifyUser(u,p){
  if(u===atob('V2VsbHlndG9u').toLowerCase() && p===atob('QFdlbGx5MjAyMEA=')) return 'admin';
  if(u===atob('VGhhbGl0YQ==').toLowerCase() && p===atob('VGhhbGl0YQ==')) return 'admin';
  return null;
}

function openAdminLogin(){
  if(isAdmin){ nav('gerenciar'); return; }
  if(isEditor){ showToast('Você já está logada.'); return; }
  document.getElementById('loginUser').value='';
  document.getElementById('loginPass').value='';
  document.getElementById('loginErr').style.display='none';
  openModal('loginModal');
}

function doLogin(){
  const u = document.getElementById('loginUser').value.trim().toLowerCase();
  const p = document.getElementById('loginPass').value.trim();
  const role = verifyUser(u,p);
  if(role){
    isAdmin  = role==='admin';
    isEditor = true;
    sessionStorage.setItem('vda_session', role);
    closeModal('loginModal');
    showAdminUI();
    showToast('✓ Bem-vindo'+( role==='admin' ? ', '+u : 'a, '+u )+'!');
  } else {
    document.getElementById('loginErr').style.display='block';
    document.getElementById('loginPass').value='';
  }
}

function adminLogout(){
  isAdmin=false;
  isEditor=false;
  sessionStorage.removeItem('vda_session');
  hideAdminUI();
  showToast('Saiu.');
  nav('inicio');
}

function showAdminUI(){
  document.querySelectorAll('.editor-only').forEach(e=>e.style.display='');
  if(isAdmin) document.querySelectorAll('.admin-only').forEach(e=>e.style.display='');
}
function hideAdminUI(){
  document.querySelectorAll('.admin-only').forEach(e=>e.style.display='none');
  document.querySelectorAll('.editor-only').forEach(e=>e.style.display='none');
}

// Mobile menu
function closeMobile(){
  const m=document.getElementById('mobileMenu');
  if(m) m.classList.add('hidden');
}

// ── Init ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded',()=>{
  applyCfg();
  setTimeout(()=>{
    const s=document.getElementById('splash');
    s.style.opacity='0';
    setTimeout(()=>{
      s.style.display='none';
      document.getElementById('app').classList.remove('hidden');
      const _sess=sessionStorage.getItem('vda_session');
      if(_sess==='admin'){ isAdmin=true; isEditor=true; showAdminUI(); }
      else if(_sess==='editor'){ isEditor=true; showAdminUI(); }
      buildAll();
      showVerse();
      nav('inicio');
    },500);
  },2500);

  // Burger mobile
  document.getElementById('burgerBtn').addEventListener('click',()=>{
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  // Fechar mobile ao clicar fora
  document.addEventListener('click',e=>{
    const mm=document.getElementById('mobileMenu');
    const bb=document.getElementById('burgerBtn');
    if(mm&&!mm.classList.contains('hidden')&&!mm.contains(e.target)&&!bb.contains(e.target))
      mm.classList.add('hidden');
  });

  // Busca com Enter
  document.getElementById('globalSearch').addEventListener('keydown',e=>{
    if(e.key==='Enter') runSearch();
  });

  // Enter no login
  document.getElementById('loginPass').addEventListener('keydown',e=>{
    if(e.key==='Enter') doLogin();
  });
});

function applyCfg(){
  document.documentElement.setAttribute('data-theme',cfg.theme||'dark');
  document.documentElement.setAttribute('data-font',cfg.font||'medium');
}

// ── Dados ────────────────────────────────────────────────────
function allHymns(){
  return[...HARPA_DATA,...CORINHOS_DATA,...ARQUIVO_DATA,...custom];
}
function getById(id){ return allHymns().find(h=>h.id===id); }
function hymnsByCategory(cat){
  if(cat==='harpa') return HARPA_DATA;
  if(cat==='arquivo') return [...ARQUIVO_DATA,...custom.filter(h=>h.category===cat)];
  if(cat==='corinhos') return [...CORINHOS_DATA,...custom.filter(h=>h.category===cat)];
  return custom.filter(h=>h.category===cat);
}

function buildAll(){
  renderHarpa();
  renderCat('arquivo');
  renderCorinhos();
  renderCat('canticos');
  renderFavs();
  renderRecents();
  renderLists();
  updateStats();
}

// ── Nav ──────────────────────────────────────────────────────
function nav(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('[data-p]').forEach(b=>b.classList.remove('active-page'));
  const pg=document.getElementById('page-'+page);
  if(pg) pg.classList.add('active');
  document.querySelectorAll(`[data-p="${page}"]`).forEach(b=>b.classList.add('active-page'));
  curPage=page;
  // hero compacto quando em sub-página
  const hero=document.getElementById('heroMain');
  if(hero) hero.classList.toggle('compact', page!=='inicio');
  closeMobile();
  window.scrollTo(0,0);
  if(page==='inicio') showVerse();
  if(page==='arquivo') renderCat('arquivo');
  if(page==='harpa') renderHarpa();
  if(page==='corinhos') renderCorinhos();
  if(page==='favoritos') renderFavs();
  if(page==='recentes') renderRecents();
  if(page==='gerenciar') renderGerenciar();
}

// ── Harpa ────────────────────────────────────────────────────
function renderHarpa(filter=''){
  const sort=document.getElementById('sortHarpa')?.value||'num';
  let data=[...HARPA_DATA,...custom.filter(h=>h.category==='harpa')];
  if(filter) data=data.filter(h=>
    h.title.toLowerCase().includes(filter.toLowerCase())||
    String(h.num||'').includes(filter)||
    (h.lyrics||'').toLowerCase().includes(filter.toLowerCase())
  );
  if(sort==='az') data.sort((a,b)=>a.title.localeCompare(b.title,'pt'));
  document.getElementById('listHarpa').innerHTML=data.map(h=>card(h)).join('');
}

// ── Categorias ───────────────────────────────────────────────
function renderCat(cat,filter=''){
  const data=hymnsByCategory(cat);
  const fl=filter.toLowerCase();
  const filtered=fl?data.filter(h=>
    h.title.toLowerCase().includes(fl)||
    String(h.num||'').includes(filter)
  ):data;
  const el=document.getElementById('list'+cap(cat));
  const em=document.getElementById('empty'+cap(cat));
  if(el) el.innerHTML=filtered.map(h=>card(h)).join('');
  if(em) em.style.display=filtered.length?'none':'block';
}
function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1) }

// ── Corinhos (agrupados por tag) ──────────────────────────────
const CORIM_TAGS = [
  {tag:'visitantes', label:'🤝 Visitantes'},
  {tag:'inicio',     label:'🌅 Início de Culto'},
  {tag:'adoracao',   label:'🙏 Adoração'},
  {tag:'louvor',     label:'🎉 Louvor'},
  {tag:'avivamento', label:'🔥 Avivamento / Espírito Santo'},
  {tag:'oracao',     label:'🕊️ Oração'},
  {tag:'despedida',  label:'👋 Encerramento'},
];
function renderCorinhos(filter=''){
  const all=hymnsByCategory('corinhos');
  const fl=filter.toLowerCase();
  const filtered=fl?all.filter(h=>
    h.title.toLowerCase().includes(fl)||
    String(h.num||'').includes(filter)||
    (h.lyrics||'').toLowerCase().includes(fl)
  ):all;
  const el=document.getElementById('listCorinhos');
  const em=document.getElementById('emptyCorinhos');
  if(!el) return;
  if(!filtered.length){ el.innerHTML=''; if(em) em.style.display='block'; return; }
  if(em) em.style.display='none';
  if(fl){
    el.innerHTML=filtered.map(h=>card(h)).join('');
    return;
  }
  el.innerHTML=CORIM_TAGS.map(({tag,label})=>{
    const group=filtered.filter(h=>h.tag===tag);
    if(!group.length) return '';
    return `<div class="corim-section">
      <div class="corim-section-title">${label}</div>
      <div class="grid">${group.map(h=>card(h)).join('')}</div>
    </div>`;
  }).join('');
}

// ── Favoritos ────────────────────────────────────────────────
function renderFavs(){
  const data=favs.map(id=>getById(id)).filter(Boolean);
  const el=document.getElementById('listFavoritos');
  const em=document.getElementById('emptyFavoritos');
  if(el) el.innerHTML=data.map(h=>card(h)).join('');
  if(em) em.style.display=data.length?'none':'block';
}

// ── Recentes ─────────────────────────────────────────────────
function renderRecents(){
  const data=recents.map(id=>getById(id)).filter(Boolean);
  const el=document.getElementById('listRecentes');
  const em=document.getElementById('emptyRecentes');
  if(el) el.innerHTML=data.map(h=>card(h)).join('');
  if(em) em.style.display=data.length?'none':'block';
}

// ── Listas ───────────────────────────────────────────────────
function renderLists(){
  const el=document.getElementById('listListas');
  const em=document.getElementById('emptyListas');
  if(el) el.innerHTML=lists.map(l=>{
    const count=(l.hymns||[]).length;
    return `<div class="lcard">
      <div class="lcard-main" onclick="openList('${l.id}')">
        <div class="lcard-name">&#128196; ${l.name}</div>
        <div class="lcard-count">${count} hino${count!==1?'s':''}</div>
      </div>
      <div class="lcard-actions">
        <button class="icon-btn" onclick="event.stopPropagation();editList('${l.id}')" title="Renomear">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="icon-btn del-btn" onclick="event.stopPropagation();deleteList('${l.id}')" title="Excluir">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
  if(em) em.style.display=lists.length?'none':'block';
}
function deleteList(id){
  const l=lists.find(x=>x.id===id);
  if(!l) return;
  if(!confirm(`Excluir a lista "${l.name}"?`)) return;
  lists=lists.filter(x=>x.id!==id);
  ls.set('vda_lists',lists);
  renderLists();
  showToast('Lista excluída.');
}
function editList(id){
  const l=lists.find(x=>x.id===id);
  if(!l) return;
  document.getElementById('listName').value=l.name;
  document.getElementById('listModalTitle').textContent='Renomear Lista';
  document.getElementById('listSaveBtn').textContent='Salvar';
  document.getElementById('listSaveBtn').onclick=()=>saveListEdit(id);
  openModal('listModal');
}
function saveListEdit(id){
  const name=document.getElementById('listName').value.trim();
  if(!name){ showToast('Informe o nome da lista.'); return; }
  const l=lists.find(x=>x.id===id);
  if(l) l.name=name;
  ls.set('vda_lists',lists);
  closeModal('listModal');
  renderLists();
  showToast('Lista renomeada!');
}

// ── Quick Grid ───────────────────────────────────────────────
function renderQuickGrid(){
  const favHymns=favs.slice(0,4).map(id=>getById(id)).filter(Boolean);
  const items=favHymns.length?favHymns:HARPA_DATA.slice(0,8);
  const el=document.getElementById('quickGrid');
  if(el) el.innerHTML=items.map(h=>card(h,true)).join('');
}

// ── Gerenciar (admin) ────────────────────────────────────────
function renderGerenciar(filter=''){
  const catFilter=document.getElementById('catGerenciar')?.value||'';
  let data=allHymns();
  if(catFilter) data=data.filter(h=>h.category===catFilter);
  if(filter) data=data.filter(h=>h.title.toLowerCase().includes(filter.toLowerCase())||String(h.num||'').includes(filter));
  const el=document.getElementById('listGerenciar');
  if(el) el.innerHTML=data.map(h=>cardAdmin(h)).join('');
}
function filterGerenciar(){
  renderGerenciar(document.getElementById('filterGerenciar')?.value||'');
}

// ── Card HTML ────────────────────────────────────────────────
const catLabel={harpa:'Harpa Cristã',corinhos:'Corim',canticos:'Cântico',adoracao:'Adoração',arquivo:'Arquivo'};

function card(h,compact=false){
  const isFav=favs.includes(h.id);
  const hasAudio=!!audioMap[h.id];
  const hasYt=!!ytMap[h.id];
  const prev=(h.lyrics||'').split('\n').slice(0,2).join(' ').trim().substring(0,80);
  return `<div class="hcard" onclick="openHymn('${h.id}')">
    ${h.num?`<div class="hcard-num">Nº ${h.num}</div>`:''}
    <div class="hcard-title">${h.title}</div>
    ${!compact&&prev?`<div class="hcard-prev">${prev}</div>`:''}
    <div class="hcard-foot">
      <span class="hcard-cat">${catLabel[h.category]||''}</span>
      <div style="display:flex;gap:5px;align-items:center">
        ${hasYt?'<span class="has-audio">▶ YT</span>':''}
        ${hasAudio?'<span class="has-audio">&#127925; MP3</span>':''}
        <button class="hfav${isFav?' on':''}" onclick="event.stopPropagation();toggleFavId('${h.id}')" title="Favoritar">&#9733;</button>
      </div>
    </div>
  </div>`;
}

function cardAdmin(h){
  return `<div class="hcard" onclick="openHymn('${h.id}')">
    ${h.num?`<div class="hcard-num">Nº ${h.num}</div>`:''}
    <div class="hcard-title">${h.title}</div>
    <div class="hcard-foot">
      <span class="hcard-cat">${catLabel[h.category]||''}</span>
      <div style="display:flex;gap:5px">
        <button class="hfav" onclick="event.stopPropagation();editHymnById('${h.id}')" title="Editar" style="color:var(--gold2)">&#9998;</button>
        ${h.id.startsWith('c_')?`<button class="hfav" onclick="event.stopPropagation();deleteHymn('${h.id}')" title="Excluir" style="color:#e74c3c">&#128465;</button>`:''}
      </div>
    </div>
  </div>`;
}

// ── Abrir Hino ───────────────────────────────────────────────
function openHymn(id, ctx=null){
  const h=getById(id);
  if(!h) return;
  curHymn=h;
  listContext=ctx;
  addToRecents(id);

  showChords=false;
  document.getElementById('mNum').textContent=h.num?'HINO Nº '+h.num:'';
  document.getElementById('mTitle').textContent=h.title;
  document.getElementById('mCat').textContent=catLabel[h.category]||'';
  document.getElementById('mAuthor').textContent=h.author||'';
  document.getElementById('mLyrics').innerHTML=formatLyrics(h.lyrics);
  document.getElementById('mLyrics').style.display='';
  const cifraEl=document.getElementById('mCifra');
  if(cifraEl){ cifraEl.innerHTML=''; cifraEl.style.display='none'; }
  const chordsBtn=document.getElementById('chordsBtn');
  if(chordsBtn){
    const hasChords=chordsOverride[id]||(typeof ARQUIVO_CHORDS!=='undefined'&&ARQUIVO_CHORDS[id])||(typeof HARPA_CHORDS!=='undefined'&&HARPA_CHORDS[id])||(typeof CORINHOS_CHORDS!=='undefined'&&CORINHOS_CHORDS[id]);
    chordsBtn.style.display=hasChords?'':'none';
    chordsBtn.classList.remove('on');
  }

  const fb=document.getElementById('favBtn');
  fb.classList.toggle('on',favs.includes(id));

  // editBtn e editChordsBtn visíveis para admin e editor
  const eb=document.getElementById('editBtn');
  if(eb) eb.style.display=(isAdmin||isEditor)?'':'none';
  const ecb=document.getElementById('editChordsBtn');
  if(ecb) ecb.style.display=(isAdmin||isEditor)?'':'none';

  const audio=document.getElementById('audioEl');
  const noAudio=document.getElementById('noAudio');
  const ytPlayer=document.getElementById('ytPlayer');
  const ytPlayback=document.getElementById('ytPlayback');

  // resetar
  audio.pause(); audio.src=''; audio.classList.add('hidden');
  stopYTPlayers();
  ytPlayer.classList.add('hidden');
  ytPlayback.classList.add('hidden');
  noAudio.style.display='none';

  const ytId=getYouTubeId(ytMap[id]);
  const pbId=getYouTubeId(playbackMap[id]);

  pendingYT = null;
  if(ytId){
    ytPlayer.classList.remove('hidden');
    if(ytApiReady) loadYTPlayer('louvor', ytId);
    else pendingYT = Object.assign(pendingYT||{}, {louvorId: ytId});
  }
  if(pbId){
    ytPlayback.classList.remove('hidden');
    if(ytApiReady) loadYTPlayer('playback', pbId);
    else pendingYT = Object.assign(pendingYT||{}, {playbackId: pbId});
  }
  if(!ytId && !pbId && audioMap[id]){
    document.getElementById('audioSrc').src=audioMap[id];
    audio.load();
    audio.className='audio-player';
  } else if(!ytId && !pbId && !audioMap[id]){
    noAudio.style.display='block';
  }

  // nav de lista (prev/next)
  const lnav=document.getElementById('modalListNav');
  const lpos=document.getElementById('modalListNavPos');
  if(lnav && listContext){
    lnav.classList.remove('hidden');
    lpos.textContent=`${listContext.pos+1} / ${listContext.hymns.length}`;
  } else if(lnav){
    lnav.classList.add('hidden');
  }

  openModal('hymnModal');
}

function editCurrentHymn(){ if(curHymn) editHymnById(curHymn.id); }

function editCurrentChords(){
  if(!curHymn) return;
  const id=curHymn.id;
  const cur=chordsOverride[id]||(typeof HARPA_CHORDS!=='undefined'&&HARPA_CHORDS[id])||(typeof CORINHOS_CHORDS!=='undefined'&&CORINHOS_CHORDS[id])||(typeof ARQUIVO_CHORDS!=='undefined'&&ARQUIVO_CHORDS[id])||'';
  document.getElementById('chordsEditTitle').textContent='Cifra — '+curHymn.title;
  document.getElementById('chordsEditId').value=id;
  document.getElementById('chordsEditText').value=cur;
  closeModal('hymnModal');
  openModal('chordsEditModal');
}

function saveChords(){
  const id=document.getElementById('chordsEditId').value;
  const val=document.getElementById('chordsEditText').value.trim();
  if(val){ chordsOverride[id]=val; } else { delete chordsOverride[id]; }
  ls.set('vda_chords',chordsOverride);
  closeModal('chordsEditModal');
  showToast('Cifra salva!');
}

// ── Fechar/Abrir Modal ───────────────────────────────────────
function openModal(id){
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow='hidden';
}
function closeModal(id){
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow='';
  if(id==='hymnModal'){
    pendingYT = null;
    const a=document.getElementById('audioEl'); a.pause(); a.src='';
    stopYTPlayers();
    const yp=document.getElementById('ytPlayer'); if(yp) yp.classList.add('hidden');
    const pp=document.getElementById('ytPlayback'); if(pp) pp.classList.add('hidden');
  }
}
function closeOverlay(e,id){ if(e.target===document.getElementById(id)) closeModal(id); }

// ── Favoritos ────────────────────────────────────────────────
function toggleFav(){
  if(!curHymn) return;
  toggleFavId(curHymn.id);
  document.getElementById('favBtn').classList.toggle('on',favs.includes(curHymn.id));
}
function toggleFavId(id){
  const i=favs.indexOf(id);
  if(i>=0){ favs.splice(i,1); showToast('Removido dos favoritos'); }
  else { favs.unshift(id); showToast('★ Adicionado aos favoritos!'); }
  ls.set('vda_favs',favs);
  renderFavs(); updateStats();
  // atualiza estrela no card
  document.querySelectorAll('.hfav').forEach(b=>{
    const fn=b.getAttribute('onclick')||'';
    if(fn.includes(`'${id}'`)&&fn.includes('toggleFavId')){
      b.classList.toggle('on',favs.includes(id));
    }
  });
}

// ── Recentes ─────────────────────────────────────────────────
function addToRecents(id){
  recents=recents.filter(i=>i!==id);
  recents.unshift(id);
  if(recents.length>30) recents=recents.slice(0,30);
  ls.set('vda_recents',recents);
  renderRecents(); updateStats();
}
function clearRecentes(){
  if(!confirm('Limpar histórico de recentes?')) return;
  recents=[]; ls.set('vda_recents',recents);
  renderRecents(); updateStats();
}

// ── Filtros ──────────────────────────────────────────────────
function filterPage(cat){
  const v=document.getElementById('filter'+cap(cat))?.value||'';
  if(cat==='harpa') renderHarpa(v);
  else if(cat==='corinhos') renderCorinhos(v);
  else renderCat(cat,v);
}

function runSearch(){
  const q=document.getElementById('globalSearch').value.trim();
  if(!q) return;
  document.getElementById('searchTerm').textContent=q;
  const ql=q.toLowerCase();
  const results=allHymns().filter(h=>
    h.title.toLowerCase().includes(ql)||
    (h.lyrics||'').toLowerCase().includes(ql)||
    String(h.num||'').includes(q)
  );
  document.getElementById('listBusca').innerHTML=results.map(h=>card(h)).join('');
  document.getElementById('emptyBusca').style.display=results.length?'none':'block';
  nav('busca');
}

// ── Add/Edit Hino (admin) ────────────────────────────────────
function openAdd(cat){
  if(!isAdmin){ openModal('loginModal'); return; }
  addCat=cat;
  document.getElementById('addModalTitle').textContent={arquivo:'Adicionar ao Arquivo',harpa:'Adicionar Hino',corinhos:'Adicionar Corim',canticos:'Adicionar Cântico',adoracao:'Adicionar Música'}[cat]||'Adicionar';
  document.getElementById('editId').value='';
  document.getElementById('addNum').value='';
  document.getElementById('addTitle').value='';
  document.getElementById('addLyrics').value='';
  document.getElementById('addAuthor').value='';
  document.getElementById('addYoutube').value='';
  openModal('addModal');
}
function editHymnById(id){
  if(!isAdmin && !isEditor) return;
  const h=getById(id);
  if(!h) return;
  addCat=h.category;
  document.getElementById('addModalTitle').textContent='Editar Hino';
  document.getElementById('editId').value=h.id;
  document.getElementById('addNum').value=h.num||'';
  document.getElementById('addTitle').value=h.title;
  document.getElementById('addLyrics').value=h.lyrics||'';
  document.getElementById('addAuthor').value=h.author||'';
  document.getElementById('addYoutube').value=ytMap[h.id]||'';
  document.getElementById('addPlayback').value=playbackMap[h.id]||'';
  const curChords=chordsOverride[h.id]||(typeof HARPA_CHORDS!=='undefined'&&HARPA_CHORDS[h.id])||(typeof CORINHOS_CHORDS!=='undefined'&&CORINHOS_CHORDS[h.id])||(typeof ARQUIVO_CHORDS!=='undefined'&&ARQUIVO_CHORDS[h.id])||'';
  document.getElementById('addChords').value=curChords;
  openModal('addModal');
  // Fecha o modal do hino se estiver aberto
  closeModal('hymnModal');
}
function saveHymn(){
  const title=document.getElementById('addTitle').value.trim();
  if(!title){ showToast('Informe o título.'); return; }
  const editId=document.getElementById('editId').value;
  const hymn={
    id: editId||('c_'+Date.now()),
    num: document.getElementById('addNum').value||null,
    title,
    category: addCat,
    author: document.getElementById('addAuthor').value.trim(),
    lyrics: document.getElementById('addLyrics').value.trim()
  };
  if(editId){
    // Editar harpa nativa
    const hIdx=HARPA_DATA.findIndex(h=>h.id===editId);
    if(hIdx>=0){ HARPA_DATA[hIdx]={...HARPA_DATA[hIdx],...hymn}; }
    else {
      const corIdx=CORINHOS_DATA.findIndex(h=>h.id===editId);
      const arqIdx=ARQUIVO_DATA.findIndex(h=>h.id===editId);
      const cIdx=custom.findIndex(h=>h.id===editId);
      if(corIdx>=0){ CORINHOS_DATA[corIdx]={...CORINHOS_DATA[corIdx],...hymn}; }
      else if(arqIdx>=0){ ARQUIVO_DATA[arqIdx]={...ARQUIVO_DATA[arqIdx],...hymn}; }
      else if(cIdx>=0){ custom[cIdx]={...custom[cIdx],...hymn}; }
    }
    showToast('Hino atualizado!');
  } else {
    custom.unshift(hymn);
    showToast('Hino salvo!');
  }
  ls.set('vda_custom',custom);
  // salvar cifra
  const chordsVal=document.getElementById('addChords').value.trim();
  if(chordsVal){ chordsOverride[hymn.id]=chordsVal; } else { delete chordsOverride[hymn.id]; }
  ls.set('vda_chords',chordsOverride);
  // salvar YouTube louvor
  const ytUrl=document.getElementById('addYoutube').value.trim();
  if(ytUrl){ ytMap[hymn.id]=ytUrl; } else { delete ytMap[hymn.id]; }
  ls.set('vda_ytmap',ytMap);
  // salvar YouTube playback
  const pbUrl=document.getElementById('addPlayback').value.trim();
  if(pbUrl){ playbackMap[hymn.id]=pbUrl; } else { delete playbackMap[hymn.id]; }
  ls.set('vda_playbackmap',playbackMap);
  closeModal('addModal');
  buildAll();
}
function deleteHymn(id){
  if(!confirm('Excluir este hino?')) return;
  custom=custom.filter(h=>h.id!==id);
  ls.set('vda_custom',custom);
  buildAll();
  showToast('Hino excluído.');
}

// ── Listas ───────────────────────────────────────────────────
function openNewList(){
  document.getElementById('listName').value='';
  document.getElementById('listModalTitle').textContent='Nova Lista';
  document.getElementById('listSaveBtn').textContent='Criar';
  document.getElementById('listSaveBtn').onclick=saveList;
  openModal('listModal');
}
function saveList(){
  const name=document.getElementById('listName').value.trim();
  if(!name){ showToast('Informe o nome da lista.'); return; }
  lists.push({id:'l_'+Date.now(),name,hymns:[]});
  ls.set('vda_lists',lists);
  closeModal('listModal');
  renderLists();
  showToast('Lista criada!');
}
function openList(id){ openListView(id); }
function addToList(){
  if(!curHymn) return;
  if(!lists.length){ showToast('Crie uma lista primeiro.'); openNewList(); return; }
  document.getElementById('pickListHymnName').textContent=curHymn.title;
  const container=document.getElementById('pickListOptions');
  container.innerHTML=lists.map(l=>{
    const already=l.hymns.includes(curHymn.id);
    return `<button class="pick-list-item${already?' already':''}" onclick="pickList('${l.id}')" ${already?'disabled':''}>
      <span>${l.name}</span>
      <span class="pick-list-count">${already?'✓ já adicionado':`${l.hymns.length} hino${l.hymns.length!==1?'s':''}`}</span>
    </button>`;
  }).join('');
  openModal('pickListModal');
}
function pickList(listId){
  const l=lists.find(x=>x.id===listId);
  if(!l||!curHymn) return;
  if(!l.hymns.includes(curHymn.id)){ l.hymns.push(curHymn.id); ls.set('vda_lists',lists); }
  closeModal('pickListModal');
  showToast(`Adicionado a "${l.name}"!`);
}

// ── Compartilhar ─────────────────────────────────────────────
function shareHymn(){
  if(!curHymn) return;
  const text=`${curHymn.num?`Nº ${curHymn.num} — `:''}${curHymn.title}\n\n${curHymn.lyrics||''}`;
  if(navigator.share) navigator.share({title:curHymn.title,text}).catch(()=>{});
  else navigator.clipboard.writeText(text).then(()=>showToast('Letra copiada!')).catch(()=>showToast('Não foi possível copiar.'));
}

// ── Versículos Bíblicos ──────────────────────────────────────
const VERSICULOS=[
  {t:"O Senhor é o meu pastor; nada me faltará.",r:"Salmos 23:1"},
  {t:"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",r:"João 3:16"},
  {t:"Posso tudo naquele que me fortalece.",r:"Filipenses 4:13"},
  {t:"Porque sou eu que sei os planos que tenho para vós, diz o Senhor, planos de paz e não de mal, para vos dar um futuro e uma esperança.",r:"Jeremias 29:11"},
  {t:"Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",r:"Salmos 37:5"},
  {t:"Não andeis ansiosos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica com ação de graças.",r:"Filipenses 4:6"},
  {t:"Mas os que esperam no Senhor renovarão as forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",r:"Isaías 40:31"},
  {t:"Portanto, se alguém está em Cristo, é nova criatura; as coisas velhas já passaram; eis que tudo se fez novo.",r:"2 Coríntios 5:17"},
  {t:"Jesus disse: Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai senão por mim.",r:"João 14:6"},
  {t:"Fia-te no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",r:"Provérbios 3:5"},
  {t:"Alegrai-vos sempre no Senhor; outra vez digo: Alegrai-vos.",r:"Filipenses 4:4"},
  {t:"Porque não nos deu Deus espírito de covardia, mas de poder, de amor e de moderação.",r:"2 Timóteo 1:7"},
  {t:"Buscai primeiro o reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas.",r:"Mateus 6:33"},
  {t:"A paz vos deixo, a minha paz vos dou; não vo-la dou como o mundo a dá.",r:"João 14:27"},
  {t:"Porque a palavra de Deus é viva e eficaz, e mais penetrante do que qualquer espada de dois gumes.",r:"Hebreus 4:12"},
  {t:"Bem-aventurados os puros de coração, porque eles verão a Deus.",r:"Mateus 5:8"},
  {t:"Lança sobre o Senhor o teu cuidado, e ele te susterá; não permitirá jamais que o justo seja abalado.",r:"Salmos 55:22"},
  {t:"O Senhor está perto dos que têm o coração quebrantado, e salva os de espírito contrito.",r:"Salmos 34:18"},
  {t:"Porque eu, o Senhor teu Deus, te tomo pela tua mão direita e te digo: Não temas, eu te ajudo.",r:"Isaías 41:13"},
  {t:"Sede fortes e corajosos. Não temais nem vos assusteis, porque o Senhor, teu Deus, vai contigo; não te deixará, nem te desamparará.",r:"Deuteronômio 31:6"},
  {t:"Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",r:"Efésios 4:32"},
  {t:"Louvarei o Senhor em todo o tempo; o seu louvor estará sempre nos meus lábios.",r:"Salmos 34:1"},
  {t:"Cantai ao Senhor um cântico novo; cantai ao Senhor, toda a terra.",r:"Salmos 96:1"},
  {t:"O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido; pelo que o meu coração exulta de alegria.",r:"Salmos 28:7"},
  {t:"Grande é o Senhor e mui digno de ser louvado; a sua grandeza é insondável.",r:"Salmos 145:3"},
  {t:"O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?",r:"Salmos 27:1"},
  {t:"Graças a Deus pelo seu dom inefável.",r:"2 Coríntios 9:15"},
  {t:"Eu vivo pela fé no Filho de Deus, que me amou e se entregou a si mesmo por mim.",r:"Gálatas 2:20"},
  {t:"Nenhuma arma forjada contra ti prosperará, e toda língua que se levantar contra ti em juízo, tu a condenarás.",r:"Isaías 54:17"},
  {t:"O amor não perece jamais. Porém havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá.",r:"1 Coríntios 13:8"},
  {t:"E o Deus de esperança vos encha de todo o gozo e paz no crer, para que abundeis em esperança pelo poder do Espírito Santo.",r:"Romanos 15:13"},
  {t:"Não vos conformeis com este século, mas transformai-vos pela renovação do vosso entendimento.",r:"Romanos 12:2"},
  {t:"Porque nem a morte, nem a vida, nem os anjos, nem os principados nos poderá separar do amor de Deus.",r:"Romanos 8:38-39"},
  {t:"Exaltai o Senhor, nosso Deus, e adorai-o no seu santo monte; porque o Senhor, nosso Deus, é santo.",r:"Salmos 99:9"},
  {t:"Louvai ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.",r:"Salmos 136:1"},
  {t:"Mas a mim, o aproximar-me de Deus é bom; ponho no Senhor Deus a minha confiança.",r:"Salmos 73:28"},
  {t:"Porque ele satisfará a alma sequiosa e encherá de bem a alma faminta.",r:"Salmos 107:9"},
  {t:"Teu é, ó Senhor, a grandeza, o poder, a glória, a vitória e a majestade.",r:"1 Crônicas 29:11"},
  {t:"Sede cheios do Espírito Santo, falando entre vós com salmos, hinos e cânticos espirituais.",r:"Efésios 5:18-19"},
  {t:"Canta ao Senhor enquanto viveres; entoa louvores ao teu Deus enquanto existires.",r:"Salmos 104:33"},
];

function showVerse(){
  const v=VERSICULOS[Math.floor(Math.random()*VERSICULOS.length)];
  const et=document.getElementById('verseText');
  const er=document.getElementById('verseRef');
  const ec=document.getElementById('verseCard');
  if(!et||!er) return;
  // animação de troca
  if(ec){ ec.style.opacity='0'; ec.style.transform='translateY(8px)'; }
  setTimeout(()=>{
    et.textContent='“'+v.t+'”';
    er.textContent=v.r;
    if(ec){ ec.style.transition='opacity .4s ease, transform .4s ease';
      ec.style.opacity='1'; ec.style.transform='none'; }
  },150);
}

// ── Toolbar do editor de letra ───────────────────────────────
function insertTag(text){
  const ta=document.getElementById('addLyrics');
  const s=ta.selectionStart, e=ta.selectionEnd;
  ta.value=ta.value.substring(0,s)+text+ta.value.substring(e);
  ta.selectionStart=ta.selectionEnd=s+text.length;
  ta.focus();
}
function wrapRepeat(n){
  const ta=document.getElementById('addLyrics');
  const s=ta.selectionStart, e=ta.selectionEnd;
  const sel=ta.value.substring(s,e).trim();
  if(!sel){ showToast('Selecione as linhas que deseja repetir.'); return; }
  const wrapped=`(${n}x)\n${sel}`;
  ta.value=ta.value.substring(0,s)+wrapped+ta.value.substring(e);
  ta.selectionStart=s; ta.selectionEnd=s+wrapped.length;
  ta.focus();
}

// ── Formatar Letra (destacar coro e repetições) ─────────────
function formatLyrics(raw){
  if(!raw) return '<span class="no-lyrics">Letra não disponível — o admin pode adicionar via painel.</span>';
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const isCoroPat = /^(coro|refrão|refrao|chorus)(\s*[:.]\s*|\s*$)/i;
  const repeatPat = /^\((\d+)x\)\s*$/i;
  const blocks = raw.split(/\n{2,}/);
  return blocks.map(block=>{
    const t = block.trim();
    if(!t) return '';
    const lines = t.split('\n');
    const firstLine = lines[0].trim();
    // detecta linha de repetição isolada ex: "(3x)"
    const repeatMatch = firstLine.match(repeatPat);
    const repeatCount = repeatMatch ? parseInt(repeatMatch[1]) : 1;
    const badge = repeatCount>1 ? `<span class="repeat-badge">${repeatCount}x</span>` : '';
    const contentLines = repeatMatch ? lines.slice(1) : lines;
    const isCoro = isCoroPat.test(contentLines[0]?.trim()||'');
    const html = contentLines.map(esc).join('<br>');
    return isCoro
      ? `<span class="lyric-coro">${badge}${html}</span>`
      : `<span class="lyric-verso">${badge}${html}</span>`;
  }).filter(Boolean).join('');
}

// ── YouTube ──────────────────────────────────────────────────
function getYouTubeId(url){
  if(!url) return null;
  const m=url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/\s]+)/);
  return m?m[1]:null;
}

// ── MP3 ──────────────────────────────────────────────────────
function handleMP3(input){
  const files=Array.from(input.files);
  const log=document.getElementById('importLog');
  files.forEach(file=>{
    const url=URL.createObjectURL(file);
    const name=file.name.replace(/\.[^.]+$/,'').trim().toLowerCase();
    const match=allHymns().find(h=>
      h.title.toLowerCase()===name||
      name.includes(h.title.toLowerCase())||
      (h.num&&name.includes(String(h.num)))
    );
    if(match){
      audioMap[match.id]=url;
      log.innerHTML+=`<p>✓ MP3 vinculado: <strong>${match.title}</strong></p>`;
    } else {
      log.innerHTML+=`<p>⚠ Não encontrado para: <em>${file.name}</em></p>`;
    }
  });
  buildAll();
  showToast(`${files.length} arquivo(s) importado(s)!`);
}
function handlePDF(input){
  const file=input.files[0];
  if(!file) return;
  document.getElementById('importLog').innerHTML+=`<p>📄 PDF recebido: <strong>${file.name}</strong> (${(file.size/1024).toFixed(0)} KB)</p>`;
  showToast('PDF recebido! Entre em contato para extração dos hinos.');
}

// ── Export / Import ──────────────────────────────────────────
function exportJSON(){
  const data={version:'2.1',date:new Date().toISOString(),favs,recents,custom,lists,ytMap,playbackMap};
  download('vda-backup.json',JSON.stringify(data,null,2),'application/json');
  showToast('Backup exportado!');
}
function importJSON(input){
  const file=input.files[0]; if(!file) return;
  const r=new FileReader();
  r.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(data.favs){ favs=data.favs; ls.set('vda_favs',favs); }
      if(data.recents){ recents=data.recents; ls.set('vda_recents',recents); }
      if(data.custom){ custom=data.custom; ls.set('vda_custom',custom); }
      if(data.lists){ lists=data.lists; ls.set('vda_lists',lists); }
      if(data.ytMap){ ytMap=Object.assign({},ytMap,data.ytMap); ls.set('vda_ytmap',ytMap); }
      if(data.playbackMap){ playbackMap=Object.assign({},playbackMap,data.playbackMap); ls.set('vda_playbackmap',playbackMap); }
      buildAll(); showToast('Backup restaurado!');
    }catch{ showToast('Erro ao importar — arquivo inválido.'); }
  };
  r.readAsText(file);
}
function download(name,content,type){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([content],{type}));
  a.download=name; a.click();
}

// ── Configurações ────────────────────────────────────────────
function setTheme(t){ cfg.theme=t; ls.set('vda_cfg',cfg); applyCfg(); }
function setFont(f){ cfg.font=f; ls.set('vda_cfg',cfg); applyCfg(); }
function clearAllData(){
  if(!confirm('Isso apagará favoritos, listas e hinos personalizados. Continuar?')) return;
  localStorage.clear(); location.reload();
}

// ── Stats ────────────────────────────────────────────────────
function updateStats(){
  const harpaCust=custom.filter(h=>h.category==='harpa').length;
  const corCust=custom.filter(h=>h.category==='corinhos').length;
  const arquivoCust=custom.filter(h=>h.category==='arquivo').length;
  document.getElementById('st-harpa').textContent=HARPA_DATA.length+harpaCust;
  document.getElementById('st-arquivo').textContent=ARQUIVO_DATA.length+arquivoCust;
  document.getElementById('st-cor').textContent=CORINHOS_DATA.length+corCust;
  document.getElementById('st-fav').textContent=favs.length;
  document.getElementById('st-rec').textContent=recents.length;
}

// ── Toast ────────────────────────────────────────────────────
let toastT;
function showToast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=msg; t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT=setTimeout(()=>t.classList.add('hidden'),2800);
}

// ── WhatsApp ─────────────────────────────────────────────────
function shareWhatsApp(){
  if(!curHymn) return;
  const header=`*${curHymn.num?`Nº ${curHymn.num} — `:''}${curHymn.title}*`;
  const body=curHymn.lyrics||'(sem letra)';
  const text=`${header}\n\n${body}`;
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}

// ── Modo Apresentação ─────────────────────────────────────────
function presentSingle(){
  if(!curHymn) return;
  closeModal('hymnModal');
  openPresentMode([curHymn],0);
}

function openPresentMode(hymns,idx){
  presentHymns=hymns;
  presentIdx=idx;
  renderPresentSlide();
  document.getElementById('presentMode').classList.remove('hidden');
  document.body.style.overflow='hidden';
  const el=document.getElementById('presentMode');
  if(el.requestFullscreen) el.requestFullscreen().catch(()=>{});
}

function closePresentMode(){
  document.getElementById('presentMode').classList.add('hidden');
  document.body.style.overflow='';
  if(document.fullscreenElement) document.exitFullscreen().catch(()=>{});
}

function presentNav(dir){
  const ni=presentIdx+dir;
  if(ni<0||ni>=presentHymns.length) return;
  presentIdx=ni;
  renderPresentSlide();
}

function renderPresentSlide(){
  const h=presentHymns[presentIdx];
  if(!h) return;
  document.getElementById('pmNum').textContent=h.num?'HINO Nº '+h.num:'';
  document.getElementById('pmTitle').textContent=h.title;
  const lyricsHtml=h.lyrics
    ?`<div class="pm-lyrics-wrap"><div class="pm-lyrics">${formatLyrics(h.lyrics)}</div></div>`
    :`<div class="pm-lyrics-wrap"><p class="pm-no-lyrics">Letra não disponível.</p></div>`;
  document.getElementById('pmBody').innerHTML=lyricsHtml;
  const footer=document.getElementById('pmFooter');
  if(presentHymns.length>1){
    footer.style.display='';
    document.getElementById('pmProgress').textContent=`${presentIdx+1} / ${presentHymns.length}`;
    document.getElementById('pmPrev').disabled=(presentIdx===0);
    document.getElementById('pmNext').disabled=(presentIdx===presentHymns.length-1);
  } else {
    footer.style.display='none';
  }
}

// teclado e swipe para navegação em apresentação
document.addEventListener('keydown',e=>{
  if(document.getElementById('presentMode').classList.contains('hidden')) return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown') presentNav(1);
  else if(e.key==='ArrowLeft'||e.key==='ArrowUp') presentNav(-1);
  else if(e.key==='Escape') closePresentMode();
});
(function(){
  let tx=0;
  const pm=document.getElementById('presentMode');
  if(!pm) return;
  pm.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
  pm.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>60) presentNav(dx<0?1:-1);
  },{passive:true});
})();

// ── List View Modal ───────────────────────────────────────────
function searchListAdd(){
  const q=document.getElementById('listAddSearch').value.trim().toLowerCase();
  const res=document.getElementById('listAddResults');
  if(!q){ res.classList.add('hidden'); res.innerHTML=''; return; }
  const l=lists.find(x=>x.id===listViewId);
  const matches=allHymns().filter(h=>
    (h.title.toLowerCase().includes(q)||String(h.num||'').startsWith(q))
    && !l?.hymns.includes(h.id)
  ).slice(0,8);
  if(!matches.length){ res.innerHTML='<div class="lv-add-none">Nenhum resultado</div>'; res.classList.remove('hidden'); return; }
  res.innerHTML=matches.map(h=>`
    <button class="lv-add-item" onclick="addToListDirect('${h.id}')">
      ${h.num?`<span class="lv-add-num">Nº ${h.num}</span>`:''}
      <span class="lv-add-title">${h.title}</span>
      <span class="lv-add-cat">${h.category==='harpa'?'Harpa':h.category==='arquivo'?'Arquivo':'Corinho'}</span>
    </button>`).join('');
  res.classList.remove('hidden');
}
function addToListDirect(hymnId){
  const l=lists.find(x=>x.id===listViewId);
  if(!l) return;
  if(!(l.hymns||[]).includes(hymnId)){ if(!l.hymns) l.hymns=[]; l.hymns.push(hymnId); ls.set('vda_lists',lists); }
  document.getElementById('listAddSearch').value='';
  document.getElementById('listAddResults').classList.add('hidden');
  document.getElementById('listAddPanel').classList.add('hidden');
  renderListViewItems();
  showToast('Hino adicionado!');
}
function toggleListAddSearch(){
  const panel=document.getElementById('listAddPanel');
  panel.classList.toggle('hidden');
  if(!panel.classList.contains('hidden')) document.getElementById('listAddSearch').focus();
}
function openListView(id){
  const l=lists.find(x=>x.id===id);
  if(!l) return;
  listViewId=id;
  document.getElementById('listViewTitle').textContent='📄 '+l.name;
  document.getElementById('listAddSearch').value='';
  document.getElementById('listAddResults').classList.add('hidden');
  document.getElementById('listAddPanel').classList.add('hidden');
  renderListViewItems();
  openModal('listViewModal');
}

function renderListViewItems(){
  const l=lists.find(x=>x.id===listViewId);
  if(!l) return;
  const el=document.getElementById('listViewItems');
  const em=document.getElementById('listViewEmpty');
  document.getElementById('listViewCount').textContent=`${l.hymns.length} hino${l.hymns.length!==1?'s':''}`;
  if(!l.hymns.length){el.innerHTML='';em.style.display='block';return;}
  em.style.display='none';
  el.innerHTML=l.hymns.map((hid,i)=>{
    const h=getById(hid);
    if(!h) return '';
    return `<div class="list-view-item" data-id="${hid}" onclick="openHymnFromList('${hid}')">
      <span class="drag-handle" title="Arrastar para reordenar" onclick="event.stopPropagation()">⠿</span>
      <span class="lvi-pos">${i+1}.</span>
      <span class="lvi-title">${h.title}</span>
      ${h.num?`<span class="lvi-num">Nº ${h.num}</span>`:''}
      <button class="lvi-rm" onclick="event.stopPropagation();removeFromList('${listViewId}','${hid}')" title="Remover">✕</button>
    </div>`;
  }).join('');
  initListDrag(el);
}

function openHymnFromList(hymnId){
  const l=lists.find(x=>x.id===listViewId);
  if(!l) return;
  const pos=l.hymns.indexOf(hymnId);
  const ctx={listId:listViewId,hymns:[...l.hymns],pos};
  closeModal('listViewModal');
  openHymn(hymnId,ctx);
}

function removeFromList(listId,hymnId){
  const l=lists.find(x=>x.id===listId);
  if(!l) return;
  l.hymns=l.hymns.filter(id=>id!==hymnId);
  ls.set('vda_lists',lists);
  renderListViewItems();
  renderLists();
  showToast('Hino removido da lista.');
}

function startListPresent(){
  const l=lists.find(x=>x.id===listViewId);
  if(!l||!l.hymns.length){showToast('Lista vazia!');return;}
  const hymns=l.hymns.map(id=>getById(id)).filter(Boolean);
  closeModal('listViewModal');
  openPresentMode(hymns,0);
}

// navegação prev/next dentro do modal do hino (quando aberto via lista)
function modalListGo(dir){
  if(!listContext) return;
  const np=listContext.pos+dir;
  if(np<0||np>=listContext.hymns.length) return;
  const hymnId=listContext.hymns[np];
  const ctx={...listContext,pos:np};
  closeModal('hymnModal');
  openHymn(hymnId,ctx);
}

// ── Drag-to-reorder para listas ───────────────────────────────
function initListDrag(container){
  let dragging=null;
  container.querySelectorAll('.drag-handle').forEach(handle=>{
    handle.addEventListener('pointerdown',e=>{
      dragging=handle.closest('.list-view-item');
      if(!dragging) return;
      dragging.classList.add('lvi-dragging');
      handle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    handle.addEventListener('pointermove',e=>{
      if(!dragging) return;
      const items=[...container.querySelectorAll('.list-view-item:not(.lvi-dragging)')];
      const y=e.clientY;
      let target=null;
      items.forEach(it=>{
        const r=it.getBoundingClientRect();
        if(y>=r.top&&y<=r.bottom) target=it;
      });
      if(target){
        const r=target.getBoundingClientRect();
        if(y<r.top+r.height/2) container.insertBefore(dragging,target);
        else container.insertBefore(dragging,target.nextSibling);
      }
    });
    handle.addEventListener('pointerup',()=>{
      if(!dragging) return;
      dragging.classList.remove('lvi-dragging');
      const l=lists.find(x=>x.id===listViewId);
      if(l){
        l.hymns=[...container.querySelectorAll('.list-view-item')]
          .map(el=>el.dataset.id).filter(Boolean);
        ls.set('vda_lists',lists);
        renderListViewItems();
      }
      dragging=null;
    });
  });
}

// ── Cifras ───────────────────────────────────────────────────
function toggleChords(){
  if(!curHymn) return;
  const id=curHymn.id;
  const chordData=chordsOverride[id]||(typeof ARQUIVO_CHORDS!=='undefined'&&ARQUIVO_CHORDS[id])||(typeof HARPA_CHORDS!=='undefined'&&HARPA_CHORDS[id])||(typeof CORINHOS_CHORDS!=='undefined'&&CORINHOS_CHORDS[id]);
  if(!chordData) return;
  showChords=!showChords;
  const lyricsEl=document.getElementById('mLyrics');
  const cifraEl=document.getElementById('mCifra');
  const btn=document.getElementById('chordsBtn');
  if(showChords){
    lyricsEl.style.display='none';
    const hasInline=/\[[A-G][^\]]*\]/.test(chordData);
    if(hasInline){
      // cifra completa com acordes inline — mostra só a cifra
      cifraEl.innerHTML=renderCifra(chordData);
    } else {
      // cifra simplificada (só Tom + progressão) — mostra progressão + letra
      cifraEl.innerHTML=renderCifra(chordData)+
        '<div class="cifra-lyric-divider"></div>'+
        '<div class="lyrics">'+formatLyrics(curHymn.lyrics)+'</div>';
    }
    cifraEl.style.display='';
    if(btn) btn.classList.add('on');
  } else {
    lyricsEl.style.display='';
    cifraEl.style.display='none';
    if(btn) btn.classList.remove('on');
  }
}

function renderCifra(text){
  if(!text) return '';
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const lines=text.split('\n');
  return '<div class="cifra-container">'+lines.map(line=>{
    if(!line.trim()) return '<div class="cifra-break"></div>';
    if(/^(Tom|Verso|Coro|Ponte|Refrão|Intro|Final|Bridge):/.test(line)){
      return `<div class="cifra-header">${esc(line)}</div>`;
    }
    if(!/\[[A-G][^\]]*\]/.test(line)){
      return `<div class="cifra-line"><span class="cifra-seg"><span class="cifra-chord"> </span><span class="cifra-text">${esc(line)}</span></span></div>`;
    }
    const parts=line.split(/(\[[A-G][^\]]*\])/);
    let html='<div class="cifra-line">';
    let pendingChord='';
    parts.forEach(part=>{
      if(/^\[[A-G]/.test(part)){
        pendingChord=part.slice(1,-1);
      } else {
        html+=`<span class="cifra-seg"><span class="cifra-chord">${esc(pendingChord)||' '}</span><span class="cifra-text">${esc(part)||' '}</span></span>`;
        pendingChord='';
      }
    });
    if(pendingChord) html+=`<span class="cifra-seg"><span class="cifra-chord">${esc(pendingChord)}</span><span class="cifra-text"> </span></span>`;
    return html+'</div>';
  }).join('')+'</div>';
}
