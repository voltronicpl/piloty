/*!
 * Piloty – uniwersalny pilot TV + amplituner dla Home Assistant
 * https://github.com/voltronicpl/piloty
 * MIT License
 */
(() => {
const VERSION = '1.0.0';
const STRUCT = "\n\n\nbutton{font-family:inherit;color:inherit;border:none;cursor:pointer;transition:transform .08s,box-shadow .12s}\n.scr{width:390px;height:844px;box-sizing:border-box;padding:52px 16px 22px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden}\n.hd{display:flex;align-items:center;gap:8px}.ttl{font-size:24px;font-weight:800;flex:1}\n.hi{width:44px;height:44px;border-radius:14px;display:flex;align-items:center;justify-content:center}\n.card{display:flex;flex-direction:column;gap:8px;padding:10px;border-radius:20px}\n.devs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n.dev{display:flex;align-items:center;gap:8px}\n.di{width:36px;height:36px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;background:rgba(128,128,128,.14)}\n.np{display:flex;align-items:center;gap:8px;padding-top:8px;border-top:1px solid rgba(128,128,128,.25)}\n.npt{display:flex;flex-direction:column;flex:1;gap:1px}.npk{font-size:10px;font-weight:800;opacity:.65;letter-spacing:.06em;text-transform:uppercase}\n.nb{width:32px;height:32px;border-radius:10px;font-size:12px}\n.thumb{width:64px;height:44px;border-radius:10px;background:linear-gradient(160deg,#3d6f9e,#a9c9e8 55%,#24405e);flex:none}\n.ci{display:flex;flex-direction:column;gap:3px;flex:1}.nm{font-size:15px;font-weight:800}.st{font-size:12px;display:flex;align-items:center;gap:6px}.dot{width:8px;height:8px;border-radius:4px}\n.ampi{font-size:12px;font-weight:800;padding:6px 10px;border-radius:12px}\n.tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding:4px;border-radius:16px}\n.tab{height:40px;border-radius:12px;font-size:13px;font-weight:800;position:relative;overflow:hidden}\n.lbl{font-size:13px;font-weight:800;margin-bottom:-4px}\n.apps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px}\n.app{height:54px;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:0 2px;font-size:10px;white-space:nowrap;font-weight:800;position:relative;overflow:hidden}\n.badge{width:22px;height:22px;border-radius:7px;flex:none;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff}\n.mid{display:flex;align-items:center;justify-content:space-between}\n.rock{width:62px;height:190px;border-radius:24px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:6px 0;box-sizing:border-box;position:relative;overflow:hidden}\n.rk{width:52px;height:56px;border-radius:18px;background:transparent;font-size:26px;font-weight:700}\n.vl{font-size:10px;font-weight:800;text-align:center;line-height:1.4}\n.dpad{width:196px;height:196px;border-radius:98px;position:relative;isolation:isolate}\n.dk{position:absolute;width:48px;height:48px;background:transparent;display:flex;align-items:center;justify-content:center;border-radius:24px;z-index:2}\n.u{left:74px;top:6px}.dn{left:74px;bottom:6px}.l{left:6px;top:74px}.r{right:6px;top:74px}\n.ok{position:absolute;left:56px;top:56px;width:84px;height:84px;border-radius:42px;font-size:20px;font-weight:800;z-index:2}\n.side{display:flex;flex-direction:column;gap:10px}\n.sk{width:58px;height:56px;border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:9px;font-weight:800;position:relative;overflow:hidden}\n.media{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}\n.mk{height:48px;border-radius:16px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}\n.big{height:60px;border-radius:22px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:17px;font-weight:800;margin-top:auto;position:relative;overflow:hidden}\n\n.uni{display:flex;flex-direction:column;gap:12px;flex:1;min-height:0}\n.pan{display:flex;flex-direction:column;gap:10px;flex:1;min-height:0;overflow-y:auto;padding:4px 6px 10px;margin:0 -6px}\n.g3,.g4,.g5{display:grid;gap:8px}.g3{grid-template-columns:repeat(3,minmax(0,1fr))}.g4{grid-template-columns:repeat(4,minmax(0,1fr))}.g5{grid-template-columns:repeat(5,minmax(0,1fr))}\n.pan .mk{height:44px;font-size:11px;font-weight:800;gap:6px;flex:none}\n.pan .lbl{margin:4px 0 -2px}\n.pan .rock{height:176px;flex:none}\n.pan .mid{flex:none}\n.mk.on{outline:2px solid currentColor;outline-offset:1px}\n.mk.dg{font-size:17px;height:48px}\n.mk.big2{font-size:24px;height:50px}\n.mk.pwr{color:#e5484d}\n.mk.rec{color:#e5484d}\n.cdot{width:22px;height:14px;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.3)}\n.vread{display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800}\n.pan .sk span{font-size:9px;line-height:1.1;text-align:center}\n";
const THEMES = {
 "cream": "\n.scr{background:linear-gradient(180deg,#f1ece5 0%,#e9e2d8 100%);color:#2b2420;font-family:Nunito,system-ui,sans-serif}\n.ttl{font-size:26px;color:#2b2420}\n.hi{background:transparent;box-shadow:none;color:#3a312b}\n.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,#fbf9f6 0%,#f3eee8 100%);border:1px solid rgba(255,255,255,.9);box-shadow:0 6px 14px rgba(120,95,70,.16),0 1px 2px rgba(120,95,70,.12),inset 0 -2px 3px rgba(150,125,100,.08)}\n.card{border-radius:24px}\n.app{border-radius:999px;justify-content:center;padding:0 8px}\n.rock{border-radius:999px}\n.sk{border-radius:16px}\n.mk{border-radius:999px}\n.tabs{background:#e6dfd5;box-shadow:inset 0 1px 3px rgba(120,95,70,.18)}\n.tab{border-radius:999px;background:linear-gradient(180deg,#fbf9f6,#f1ebe4);color:#3a312b;box-shadow:0 2px 5px rgba(120,95,70,.14)}\n.tab.on{background:linear-gradient(180deg,#8d6446,#6e4a30);color:#fff;box-shadow:0 4px 10px rgba(110,74,48,.35)}\n.ampi{background:#efe8df;color:#6e4a30;border-radius:999px}\n.di{background:#efe8df;color:#3a312b}\n.dot{box-shadow:0 0 0 2px rgba(47,184,106,.2)}\n.app.on{background:linear-gradient(180deg,#f3ece4,#ebe3d9);box-shadow:inset 0 2px 5px rgba(120,95,70,.22);outline:2px solid #8d6446;outline-offset:1px}\n.badge{border-radius:6px}\n.dpad{background:radial-gradient(circle at 50% 35%,#fdfcfa 0%,#f4efe9 60%,#ebe4db 100%);box-shadow:0 12px 26px rgba(120,95,70,.2),0 2px 4px rgba(120,95,70,.12),inset 0 -3px 6px rgba(150,125,100,.1)}\n.dk{color:#3a312b}\n.dk svg{stroke-width:2}\n.ok{left:62px;top:62px;width:72px;height:72px;background:linear-gradient(180deg,#fdfcfa,#f0eae2);border:1px solid rgba(255,255,255,.9);box-shadow:0 4px 10px rgba(120,95,70,.22),0 0 0 6px rgba(235,228,219,.6);color:#2b2420;font-size:19px}\n.rk{color:#3a312b;font-weight:600}\n.sk.on{color:#b3261e}\n.big{border-radius:999px;color:#fff;background:linear-gradient(180deg,#8d6446 0%,#6e4a30 100%);box-shadow:0 10px 22px rgba(110,74,48,.35),0 2px 0 #573a25;font-weight:700}\n.hi:active{transform:scale(.9)}\n.app:active,.sk:active,.mk:active,.tab:active,.card:active{transform:scale(.96);box-shadow:inset 0 3px 7px rgba(120,95,70,.26)}\n.rk:active,.dk:active{transform:scale(.88);background:rgba(120,95,70,.08)}\n.ok:active{transform:scale(.94);box-shadow:inset 0 3px 8px rgba(120,95,70,.3),0 0 0 6px rgba(235,228,219,.6)}\n.big:active{transform:translateY(2px);box-shadow:0 3px 8px rgba(110,74,48,.3),inset 0 3px 8px rgba(0,0,0,.25)}\n",
 "neon": "\n.scr{background:radial-gradient(90% 45% at 50% 48%,rgba(30,110,255,.22),rgba(30,110,255,0) 70%),repeating-linear-gradient(45deg,rgba(255,255,255,.012) 0 2px,rgba(0,0,0,.03) 2px 4px),linear-gradient(180deg,#0b0f18,#04060b);color:#d6e6ff;font-family:Nunito,system-ui,sans-serif}\n@keyframes glow{0%,100%{box-shadow:0 0 0 1px rgba(60,150,255,.35),0 0 8px rgba(40,130,255,.35),inset 0 0 6px rgba(40,130,255,.12),inset 0 1px 0 rgba(255,255,255,.08)}50%{box-shadow:0 0 0 1px rgba(90,170,255,.9),0 0 20px rgba(40,130,255,.85),inset 0 0 14px rgba(40,130,255,.35),inset 0 1px 0 rgba(255,255,255,.12)}}\n@keyframes ring{0%,100%{box-shadow:0 0 18px rgba(40,130,255,.45),inset 0 0 22px rgba(40,130,255,.2)}50%{box-shadow:0 0 42px rgba(40,140,255,.95),inset 0 0 34px rgba(40,140,255,.45)}}\n@keyframes okp{0%,100%{transform:scale(1);text-shadow:0 0 6px #3a9bff}50%{transform:scale(1.05);text-shadow:0 0 18px #7cc0ff}}\n@keyframes nu{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}\n@keyframes nd{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}\n@keyframes nl{0%,100%{transform:translateX(0)}50%{transform:translateX(-4px)}}\n@keyframes nr{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}\n@keyframes flow{0%{background-position:0% 50%}100%{background-position:200% 50%}}\n.hi,.card,.app,.rock,.sk,.mk,.tabs{background:linear-gradient(180deg,#141c2c 0%,#0b111d 60%,#070b14 100%);border:1px solid rgba(70,150,255,.4);animation:glow 11.2s ease-in-out infinite}\n.sk:nth-child(2){animation-delay:1.6s}.sk:nth-child(3){animation-delay:3.2s}.mk:nth-child(2){animation-delay:2s}.mk:nth-child(3){animation-delay:4s}\n.tabs{animation:none;box-shadow:inset 0 2px 8px rgba(0,0,0,.6)}\n.tab{background:transparent;color:#7f97bb}\n.tab.on{color:#fff;background:linear-gradient(180deg,#123a7a,#0a2350);border:1px solid #3a9bff;box-shadow:0 0 14px rgba(58,155,255,.7),inset 0 0 10px rgba(58,155,255,.4);text-shadow:0 0 8px #7cc0ff}\n.ampi{background:rgba(58,155,255,.12);color:#8ec8ff;border:1px solid rgba(58,155,255,.45)}\n.app.on{border-color:#7cc0ff;background:linear-gradient(180deg,#123060,#0a1a36)}\n.dpad{background:radial-gradient(circle at 50% 40%,#16203a,#080c16 70%);border:2px solid #2f8cff;animation:ring 12s ease-in-out infinite}\n.dpad::before{content:'';position:absolute;inset:44px;border-radius:50%;border:1px solid rgba(58,155,255,.5);background:#060911;z-index:1}\n.dk{color:#4aa3ff;filter:drop-shadow(0 0 6px #2f8cff)}\n.u svg{animation:nu 6.4s ease-in-out infinite}.dn svg{animation:nd 6.4s ease-in-out infinite}.l svg{animation:nl 6.4s ease-in-out infinite 1.6s}.r svg{animation:nr 6.4s ease-in-out infinite 1.6s}\n.ok{background:radial-gradient(circle at 50% 35%,#1b3b78,#08142c);border:2px solid #3a9bff;color:#d8ecff;box-shadow:0 0 22px rgba(58,155,255,.7),inset 0 0 16px rgba(58,155,255,.45);animation:okp 8.8s ease-in-out infinite}\n.rk{color:#8ec8ff}\n.sk.on{color:#ff6b8a;border-color:#ff6b8a}\n.big{color:#cfe6ff;border:2px solid #3a9bff;background:linear-gradient(90deg,#071430,#0f3a85,#071430,#0f3a85,#071430);background-size:200% 100%;animation:flow 16s linear infinite;box-shadow:0 0 26px rgba(58,155,255,.65),inset 0 0 18px rgba(58,155,255,.35);text-shadow:0 0 10px #5aaeff}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:scale(.94);animation:none;box-shadow:0 0 30px #3a9bff,inset 0 0 22px rgba(58,155,255,.7)}\n.rk:active,.dk:active{transform:scale(.85);filter:drop-shadow(0 0 14px #7cc0ff)}\n.ok:active{transform:scale(.92);animation:none;box-shadow:0 0 44px #5aaeff,inset 0 0 30px rgba(90,174,255,.9)}\n.big:active{transform:scale(.97);box-shadow:0 0 44px #5aaeff,inset 0 0 30px rgba(90,174,255,.7)}\n\n.app,.mk,.rock,.tab,.big{border-radius:999px}\n.app{border-radius:16px}\n.sk{border-radius:16px}\n.card{border-radius:22px;background:linear-gradient(180deg,#121a2b,#070b14);border:1px solid rgba(90,170,255,.55)}\n.scr::after{content:'';position:absolute;left:187px;bottom:8px;width:16px;height:6px;border-radius:3px;background:#3a9bff;box-shadow:0 0 12px #3a9bff,0 0 26px #3a9bff;animation:okp 8s ease-in-out infinite}\n.tab{border:1px solid rgba(70,150,255,.25)}\n.hi{border-radius:12px}\n\n@keyframes a_wob{0%,100%{transform:rotate(0)}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}\n@keyframes a_pul{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}\n@keyframes a_bnc{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}50%{transform:translateY(0)}65%{transform:translateY(-2px)}}\n@keyframes a_spin{to{transform:rotate(360deg)}}\n@keyframes a_flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}\n@keyframes a_shk{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}\n@keyframes a_hb{0%,100%{transform:scale(1)}14%{transform:scale(1.2)}28%{transform:scale(1)}42%{transform:scale(1.2)}70%{transform:scale(1)}}\n@keyframes a_flt{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(4deg)}}\n@keyframes a_zoom{0%,80%,100%{transform:scale(1)}90%{transform:scale(1.3) rotate(-8deg)}}\n@keyframes a_eq{0%,100%{transform:scaleY(1)}25%{transform:scaleY(.6)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.8)}}\n@keyframes a_l{0%,100%{transform:translateX(0)}50%{transform:translateX(-5px)}}\n@keyframes a_r{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}\n@keyframes a_up{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes a_dn{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes a_back{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-35deg)}}\n@keyframes a_wave{0%,100%{opacity:1}50%{opacity:.35}}\n@keyframes a_blink{0%,90%,100%{opacity:1}95%{opacity:.2}}\n@keyframes a_pw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.75}}\n@keyframes a_tilt{0%,100%{transform:perspective(200px) rotateX(0)}50%{transform:perspective(200px) rotateX(18deg)}}\n.badge,.sk svg,.mk svg,.hi svg,.big svg,.di svg{display:inline-flex}\n.app:nth-child(1) .badge{animation:a_wob 9.6s ease-in-out infinite}\n.app:nth-child(2) .badge{animation:a_hb 8.8s ease-in-out infinite}\n.app:nth-child(3) .badge{animation:a_pul 7.2s ease-in-out infinite}\n.app:nth-child(4) .badge{animation:a_flip 13.6s ease-in-out infinite}\n.app:nth-child(5) .badge{animation:a_bnc 6.4s ease-in-out infinite}\n.app:nth-child(6) .badge{animation:a_spin 16s linear infinite}\n.app:nth-child(7) .badge{animation:a_shk 10.4s ease-in-out infinite}\n.app:nth-child(8) .badge{animation:a_zoom 12s ease-in-out infinite}\n.app:nth-child(9) .badge{animation:a_eq 3.6s ease-in-out infinite;transform-origin:bottom}\n.app:nth-child(10) .badge{animation:a_flt 11.2s ease-in-out infinite}\n.hi:nth-child(2) svg{animation:a_wave 6.4s ease-in-out infinite}\n.hi:nth-child(3) svg{animation:a_spin 24s linear infinite}\n.devs .dev:nth-child(1) .di svg{animation:a_blink 16s linear infinite}\n.devs .dev:nth-child(2) .di svg{animation:a_eq 4.8s ease-in-out infinite}\n.rock .rk:first-child{animation:a_up 7.2s ease-in-out infinite}\n.rock .rk:last-child{animation:a_dn 7.2s ease-in-out infinite 3.6s}\n.side .sk:nth-child(1) svg{animation:a_back 10.4s ease-in-out infinite}\n.side .sk:nth-child(2) svg{animation:a_bnc 8.8s ease-in-out infinite 1.6s}\n.side .sk:nth-child(3) svg{animation:a_shk 11.2s ease-in-out infinite 4s}\n.media .mk:nth-child(1) svg{animation:a_l 5.6s ease-in-out infinite}\n.media .mk:nth-child(2) svg{animation:a_hb 8s ease-in-out infinite}\n.media .mk:nth-child(3) svg{animation:a_r 5.6s ease-in-out infinite}\n.big svg{animation:a_pw 8s ease-in-out infinite}\n.tab.on{animation:a_tilt 12s ease-in-out infinite}\n.app:active .badge,.sk:active svg,.mk:active svg,.rk:active{animation-play-state:paused}\n.dk.u svg{animation:a_up 6.4s ease-in-out infinite}.dk.dn svg{animation:a_dn 6.4s ease-in-out infinite}.dk.l svg{animation:a_l 6.4s ease-in-out infinite 1.6s}.dk.r svg{animation:a_r 6.4s ease-in-out infinite 1.6s}\n@keyframes a_grow{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}\n@keyframes a_shrink{0%,100%{transform:scale(1)}50%{transform:scale(.65)}}\n.rock .rk:first-child{animation:a_grow 6.4s ease-in-out infinite}\n.rock .rk:last-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n.g3 .mk.big2:last-child{animation:a_grow 6.4s ease-in-out infinite}\n.g3 .mk.big2:first-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n",
 "arctic": "\n.scr{background:radial-gradient(100% 50% at 50% 0%,#ffffff,rgba(255,255,255,0) 70%),radial-gradient(80% 40% at 50% 100%,#c9d6df,rgba(201,214,223,0) 70%),linear-gradient(180deg,#eef2f5,#dbe3e9);color:#26323b;font-family:Nunito,system-ui,sans-serif}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}\n@keyframes halo{0%,100%{box-shadow:0 0 0 3px rgba(17,197,217,.35),0 0 18px rgba(17,197,217,.45),inset 0 -4px 8px rgba(0,40,60,.35)}50%{box-shadow:0 0 0 6px rgba(17,197,217,.15),0 0 34px rgba(17,197,217,.8),inset 0 -4px 8px rgba(0,40,60,.35)}}\n@keyframes scan{0%{left:-40%}100%{left:120%}}\n.hi,.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,#ffffff 0%,#f1f5f8 55%,#e1e8ee 100%);border:1px solid #ffffff;box-shadow:0 8px 18px rgba(60,90,110,.22),0 2px 0 #c6d2db,inset 0 1px 0 #ffffff,inset 0 -2px 4px rgba(90,120,140,.12)}\n.app{animation:bob 12s ease-in-out infinite}\n.sk:nth-child(1){animation:bob 12s ease-in-out infinite}.sk:nth-child(2){animation:bob 12s ease-in-out infinite 2s}.sk:nth-child(3){animation:bob 12s ease-in-out infinite 4s}\n.tabs{background:linear-gradient(180deg,#dde5eb,#eef2f5);box-shadow:inset 0 2px 6px rgba(60,90,110,.25)}\n.tab{background:transparent;color:#5d6d79}\n.tab.on{color:#fff;background:linear-gradient(180deg,#3fe0ef,#0fa9c2);box-shadow:0 0 16px rgba(17,197,217,.6),inset 0 1px 0 rgba(255,255,255,.6);text-shadow:0 1px 2px rgba(0,60,80,.4)}\n.ampi{background:#e3f8fb;color:#0a8aa0;border:1px solid #9ee6ef}\n.di{background:linear-gradient(180deg,#e6fbfd,#c8eef4);color:#0a8aa0}\n.app.on{border-color:#11c5d9;box-shadow:0 0 0 2px #11c5d9,0 0 18px rgba(17,197,217,.55),inset 0 1px 0 #fff}\n.dpad{background:radial-gradient(circle at 50% 30%,#ffffff,#e8eef2 60%,#d3dde4);box-shadow:0 14px 30px rgba(60,90,110,.3),inset 0 2px 0 #fff}\n.dpad::before{content:'';position:absolute;inset:-6px;border-radius:50%;background:conic-gradient(from 0deg,rgba(17,197,217,0) 0deg,rgba(17,197,217,0) 200deg,#11c5d9 300deg,#a8f6ff 340deg,rgba(17,197,217,0) 360deg);z-index:-1;animation:spin 10.4s linear infinite;filter:blur(1.5px)}\n.dpad::after{content:'';position:absolute;inset:46px;border-radius:50%;box-shadow:0 0 0 3px rgba(17,197,217,.5),0 0 18px rgba(17,197,217,.5);z-index:1}\n.dk{color:#3f5361}\n.ok{background:radial-gradient(circle at 50% 30%,#3a4a56,#16212a);border:none;color:#bff6ff;animation:halo 9.6s ease-in-out infinite}\n.rk{color:#26323b}\n.sk.on{color:#e0445a}\n.big{color:#e9fdff;border:none;background:linear-gradient(180deg,#2c3b47,#121b22);box-shadow:0 0 0 2px #11c5d9,0 0 22px rgba(17,197,217,.6),0 10px 20px rgba(0,0,0,.3);}\n.big::after{content:'';position:absolute;top:0;width:35%;height:100%;background:linear-gradient(100deg,rgba(17,197,217,0),rgba(17,197,217,.45),rgba(17,197,217,0));animation:scan 11.2s ease-in-out infinite}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:translateY(2px) scale(.96);animation:none;box-shadow:inset 0 3px 8px rgba(60,90,110,.3),0 0 0 2px #11c5d9}\n.rk:active,.dk:active{transform:scale(.86);color:#11c5d9}\n.ok:active{transform:scale(.92);animation:none;box-shadow:0 0 0 8px rgba(17,197,217,.4),0 0 40px #11c5d9,inset 0 4px 10px rgba(0,0,0,.5)}\n.big:active{transform:translateY(2px);box-shadow:0 0 0 3px #11c5d9,0 0 34px #11c5d9,inset 0 4px 12px rgba(0,0,0,.5)}\n\n.app,.mk,.rock,.tab,.big{border-radius:999px}\n.app{border-radius:18px}\n.sk{border-radius:16px}\n.card{border-radius:22px}\n.tab{background:linear-gradient(180deg,#ffffff,#eef2f5);box-shadow:0 2px 5px rgba(60,90,110,.18)}\n.tab.on{background:linear-gradient(180deg,#3fe0ef,#0fa9c2)}\n.big{background:linear-gradient(180deg,#1f4f5a,#0d2a31);color:#c9fbff}\n.dpad{border:5px solid #e9f7fa;box-shadow:0 0 0 3px rgba(17,197,217,.75),0 0 26px rgba(17,197,217,.65),0 14px 30px rgba(60,90,110,.3)}\n.ok{border:3px solid #11c5d9}\n\n@keyframes a_wob{0%,100%{transform:rotate(0)}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}\n@keyframes a_pul{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}\n@keyframes a_bnc{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}50%{transform:translateY(0)}65%{transform:translateY(-2px)}}\n@keyframes a_spin{to{transform:rotate(360deg)}}\n@keyframes a_flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}\n@keyframes a_shk{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}\n@keyframes a_hb{0%,100%{transform:scale(1)}14%{transform:scale(1.2)}28%{transform:scale(1)}42%{transform:scale(1.2)}70%{transform:scale(1)}}\n@keyframes a_flt{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(4deg)}}\n@keyframes a_zoom{0%,80%,100%{transform:scale(1)}90%{transform:scale(1.3) rotate(-8deg)}}\n@keyframes a_eq{0%,100%{transform:scaleY(1)}25%{transform:scaleY(.6)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.8)}}\n@keyframes a_l{0%,100%{transform:translateX(0)}50%{transform:translateX(-5px)}}\n@keyframes a_r{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}\n@keyframes a_up{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes a_dn{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes a_back{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-35deg)}}\n@keyframes a_wave{0%,100%{opacity:1}50%{opacity:.35}}\n@keyframes a_blink{0%,90%,100%{opacity:1}95%{opacity:.2}}\n@keyframes a_pw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.75}}\n@keyframes a_tilt{0%,100%{transform:perspective(200px) rotateX(0)}50%{transform:perspective(200px) rotateX(18deg)}}\n.badge,.sk svg,.mk svg,.hi svg,.big svg,.di svg{display:inline-flex}\n.app:nth-child(1) .badge{animation:a_wob 9.6s ease-in-out infinite}\n.app:nth-child(2) .badge{animation:a_hb 8.8s ease-in-out infinite}\n.app:nth-child(3) .badge{animation:a_pul 7.2s ease-in-out infinite}\n.app:nth-child(4) .badge{animation:a_flip 13.6s ease-in-out infinite}\n.app:nth-child(5) .badge{animation:a_bnc 6.4s ease-in-out infinite}\n.app:nth-child(6) .badge{animation:a_spin 16s linear infinite}\n.app:nth-child(7) .badge{animation:a_shk 10.4s ease-in-out infinite}\n.app:nth-child(8) .badge{animation:a_zoom 12s ease-in-out infinite}\n.app:nth-child(9) .badge{animation:a_eq 3.6s ease-in-out infinite;transform-origin:bottom}\n.app:nth-child(10) .badge{animation:a_flt 11.2s ease-in-out infinite}\n.hi:nth-child(2) svg{animation:a_wave 6.4s ease-in-out infinite}\n.hi:nth-child(3) svg{animation:a_spin 24s linear infinite}\n.devs .dev:nth-child(1) .di svg{animation:a_blink 16s linear infinite}\n.devs .dev:nth-child(2) .di svg{animation:a_eq 4.8s ease-in-out infinite}\n.rock .rk:first-child{animation:a_up 7.2s ease-in-out infinite}\n.rock .rk:last-child{animation:a_dn 7.2s ease-in-out infinite 3.6s}\n.side .sk:nth-child(1) svg{animation:a_back 10.4s ease-in-out infinite}\n.side .sk:nth-child(2) svg{animation:a_bnc 8.8s ease-in-out infinite 1.6s}\n.side .sk:nth-child(3) svg{animation:a_shk 11.2s ease-in-out infinite 4s}\n.media .mk:nth-child(1) svg{animation:a_l 5.6s ease-in-out infinite}\n.media .mk:nth-child(2) svg{animation:a_hb 8s ease-in-out infinite}\n.media .mk:nth-child(3) svg{animation:a_r 5.6s ease-in-out infinite}\n.big svg{animation:a_pw 8s ease-in-out infinite}\n.tab.on{animation:a_tilt 12s ease-in-out infinite}\n.app:active .badge,.sk:active svg,.mk:active svg,.rk:active{animation-play-state:paused}\n.dk.u svg{animation:a_up 6.4s ease-in-out infinite}.dk.dn svg{animation:a_dn 6.4s ease-in-out infinite}.dk.l svg{animation:a_l 6.4s ease-in-out infinite 1.6s}.dk.r svg{animation:a_r 6.4s ease-in-out infinite 1.6s}\n@keyframes a_grow{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}\n@keyframes a_shrink{0%,100%{transform:scale(1)}50%{transform:scale(.65)}}\n.rock .rk:first-child{animation:a_grow 6.4s ease-in-out infinite}\n.rock .rk:last-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n.g3 .mk.big2:last-child{animation:a_grow 6.4s ease-in-out infinite}\n.g3 .mk.big2:first-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n",
 "chrome": "\n.scr{background:linear-gradient(115deg,rgba(255,255,255,0) 35%,rgba(255,255,255,.08) 45%,rgba(255,255,255,0) 55%),radial-gradient(80% 40% at 50% 110%,rgba(255,255,255,.12),rgba(255,255,255,0) 70%),linear-gradient(180deg,#141416,#000000);color:#e7e7ea;font-family:Nunito,system-ui,sans-serif}\n@keyframes sheen{0%{left:-70%}55%,100%{left:130%}}\n@keyframes rot{to{transform:rotate(360deg)}}\n@keyframes gl{0%,100%{box-shadow:0 0 0 2px #9a9aa0,0 8px 18px rgba(0,0,0,.8),inset 0 2px 3px rgba(255,255,255,.35)}50%{box-shadow:0 0 0 2px #e8e8ee,0 0 22px rgba(255,255,255,.35),inset 0 2px 3px rgba(255,255,255,.5)}}\n.hi,.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,#3a3a40 0%,#1a1a1d 48%,#0c0c0e 52%,#1d1d21 100%);border:1px solid #5e5e66;box-shadow:0 8px 18px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.28),inset 0 -1px 0 rgba(255,255,255,.06)}\n.app::after,.sk::after,.mk::after,.big::after,.tab.on::after,.rock::after,.hi::after{content:'';position:absolute;top:-10%;left:-70%;width:45%;height:120%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.38),rgba(255,255,255,0));animation:sheen 16s ease-in-out infinite;pointer-events:none}\n.hi{position:relative;overflow:hidden}\n.app:nth-child(2)::after{animation-delay:1s}.app:nth-child(3)::after{animation-delay:2s}.app:nth-child(4)::after{animation-delay:3s}.app:nth-child(5)::after{animation-delay:4s}.app:nth-child(6)::after{animation-delay:5s}.app:nth-child(7)::after{animation-delay:6s}.app:nth-child(8)::after{animation-delay:7s}\n.sk:nth-child(2)::after{animation-delay:2.4s}.sk:nth-child(3)::after{animation-delay:4.8s}.mk:nth-child(2)::after{animation-delay:2s}.mk:nth-child(3)::after{animation-delay:4s}.big::after{animation-delay:8s}\n.tabs{background:#08080a;border:1px solid #333;box-shadow:inset 0 2px 6px rgba(0,0,0,.9)}\n.tab{background:transparent;color:#8d8d94}\n.tab.on{color:#111;background:linear-gradient(180deg,#f5f5f7 0%,#b9b9c0 48%,#8f8f97 52%,#d8d8de 100%);box-shadow:0 4px 12px rgba(0,0,0,.6),inset 0 1px 0 #fff}\n.ampi{background:linear-gradient(180deg,#26262b,#111113);color:#d8d8de;border:1px solid #55555c}\n.di{background:linear-gradient(180deg,#e0e0e6,#8a8a92);color:#111}\n.app.on{border-color:#e8e8ee;animation:gl 9.6s ease-in-out infinite}\n.dpad{background:radial-gradient(circle at 50% 30%,#2b2b30,#09090b 70%);border:none}\n.dpad::before{content:'';position:absolute;inset:-5px;border-radius:50%;background:conic-gradient(#f2f2f5,#5c5c63,#e0e0e6,#3d3d43,#f7f7fa,#6a6a72,#f2f2f5);z-index:-1;animation:rot 36s linear infinite}\n.dpad::after{content:'';position:absolute;inset:44px;border-radius:50%;background:conic-gradient(#cfcfd6,#55555c,#e6e6ec,#45454b,#cfcfd6);z-index:1;animation:rot 24s linear infinite reverse}\n.dk{color:#d8d8de}\n.ok{background:radial-gradient(circle at 40% 30%,#4a4a52,#0b0b0d 70%);border:none;color:#f2f2f5;box-shadow:inset 0 2px 3px rgba(255,255,255,.3),inset 0 -6px 10px rgba(0,0,0,.8);z-index:3}\n.ok{left:62px;top:62px;width:72px;height:72px}\n.rk{color:#ececf0}\n.sk.on{color:#ff5f6d}\n.big{color:#f2f2f5;background:linear-gradient(180deg,#3a3a40 0%,#18181b 48%,#09090b 52%,#1f1f23 100%);border:1px solid #8a8a92;box-shadow:0 0 0 2px #2a2a2f,0 12px 26px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.35)}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:scale(.95);box-shadow:inset 0 4px 10px rgba(0,0,0,.9),0 0 0 1px #e8e8ee,0 0 16px rgba(255,255,255,.3)}\n.rk:active,.dk:active{transform:scale(.86);color:#fff;filter:drop-shadow(0 0 8px #fff)}\n.ok:active{transform:scale(.92);box-shadow:inset 0 6px 14px rgba(0,0,0,.95),0 0 22px rgba(255,255,255,.4)}\n.big:active{transform:translateY(2px);box-shadow:inset 0 5px 14px rgba(0,0,0,.95),0 0 20px rgba(255,255,255,.3)}\n\n.apps{gap:8px}\n.app{height:58px;border-radius:16px}\n.app .badge{width:26px;height:26px;border-radius:8px;font-size:11px}\n.app.on{transform:scale(1.04);box-shadow:0 0 0 2px #f0f0f4,0 0 26px rgba(255,255,255,.45),inset 0 1px 0 rgba(255,255,255,.4)}\n.mk,.rock,.big{border-radius:999px}\n.tab{border-radius:12px}\n.card{border-radius:20px}\n\n@keyframes a_wob{0%,100%{transform:rotate(0)}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}\n@keyframes a_pul{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}\n@keyframes a_bnc{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}50%{transform:translateY(0)}65%{transform:translateY(-2px)}}\n@keyframes a_spin{to{transform:rotate(360deg)}}\n@keyframes a_flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}\n@keyframes a_shk{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}\n@keyframes a_hb{0%,100%{transform:scale(1)}14%{transform:scale(1.2)}28%{transform:scale(1)}42%{transform:scale(1.2)}70%{transform:scale(1)}}\n@keyframes a_flt{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(4deg)}}\n@keyframes a_zoom{0%,80%,100%{transform:scale(1)}90%{transform:scale(1.3) rotate(-8deg)}}\n@keyframes a_eq{0%,100%{transform:scaleY(1)}25%{transform:scaleY(.6)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.8)}}\n@keyframes a_l{0%,100%{transform:translateX(0)}50%{transform:translateX(-5px)}}\n@keyframes a_r{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}\n@keyframes a_up{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes a_dn{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes a_back{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-35deg)}}\n@keyframes a_wave{0%,100%{opacity:1}50%{opacity:.35}}\n@keyframes a_blink{0%,90%,100%{opacity:1}95%{opacity:.2}}\n@keyframes a_pw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.75}}\n@keyframes a_tilt{0%,100%{transform:perspective(200px) rotateX(0)}50%{transform:perspective(200px) rotateX(18deg)}}\n.badge,.sk svg,.mk svg,.hi svg,.big svg,.di svg{display:inline-flex}\n.app:nth-child(1) .badge{animation:a_wob 9.6s ease-in-out infinite}\n.app:nth-child(2) .badge{animation:a_hb 8.8s ease-in-out infinite}\n.app:nth-child(3) .badge{animation:a_pul 7.2s ease-in-out infinite}\n.app:nth-child(4) .badge{animation:a_flip 13.6s ease-in-out infinite}\n.app:nth-child(5) .badge{animation:a_bnc 6.4s ease-in-out infinite}\n.app:nth-child(6) .badge{animation:a_spin 16s linear infinite}\n.app:nth-child(7) .badge{animation:a_shk 10.4s ease-in-out infinite}\n.app:nth-child(8) .badge{animation:a_zoom 12s ease-in-out infinite}\n.app:nth-child(9) .badge{animation:a_eq 3.6s ease-in-out infinite;transform-origin:bottom}\n.app:nth-child(10) .badge{animation:a_flt 11.2s ease-in-out infinite}\n.hi:nth-child(2) svg{animation:a_wave 6.4s ease-in-out infinite}\n.hi:nth-child(3) svg{animation:a_spin 24s linear infinite}\n.devs .dev:nth-child(1) .di svg{animation:a_blink 16s linear infinite}\n.devs .dev:nth-child(2) .di svg{animation:a_eq 4.8s ease-in-out infinite}\n.rock .rk:first-child{animation:a_up 7.2s ease-in-out infinite}\n.rock .rk:last-child{animation:a_dn 7.2s ease-in-out infinite 3.6s}\n.side .sk:nth-child(1) svg{animation:a_back 10.4s ease-in-out infinite}\n.side .sk:nth-child(2) svg{animation:a_bnc 8.8s ease-in-out infinite 1.6s}\n.side .sk:nth-child(3) svg{animation:a_shk 11.2s ease-in-out infinite 4s}\n.media .mk:nth-child(1) svg{animation:a_l 5.6s ease-in-out infinite}\n.media .mk:nth-child(2) svg{animation:a_hb 8s ease-in-out infinite}\n.media .mk:nth-child(3) svg{animation:a_r 5.6s ease-in-out infinite}\n.big svg{animation:a_pw 8s ease-in-out infinite}\n.tab.on{animation:a_tilt 12s ease-in-out infinite}\n.app:active .badge,.sk:active svg,.mk:active svg,.rk:active{animation-play-state:paused}\n.dk.u svg{animation:a_up 6.4s ease-in-out infinite}.dk.dn svg{animation:a_dn 6.4s ease-in-out infinite}.dk.l svg{animation:a_l 6.4s ease-in-out infinite 1.6s}.dk.r svg{animation:a_r 6.4s ease-in-out infinite 1.6s}\n@keyframes a_grow{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}\n@keyframes a_shrink{0%,100%{transform:scale(1)}50%{transform:scale(.65)}}\n.rock .rk:first-child{animation:a_grow 6.4s ease-in-out infinite}\n.rock .rk:last-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n.g3 .mk.big2:last-child{animation:a_grow 6.4s ease-in-out infinite}\n.g3 .mk.big2:first-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n",
 "steam": "\n.scr{background:linear-gradient(90deg,rgba(0,0,0,.45) 0 1px,transparent 1px) 0 0/97px 100%,linear-gradient(0deg,rgba(0,0,0,.45) 0 1px,transparent 1px) 0 0/100% 120px,linear-gradient(90deg,rgba(255,255,255,.05) 0 1px,transparent 1px) 1px 0/97px 100%,radial-gradient(60% 30% at 50% 52%,rgba(255,170,60,.10),rgba(255,170,60,0) 70%),linear-gradient(160deg,#3a3d42 0%,#23262a 40%,#16181b 100%);color:#e9e4da;font-family:Nunito,system-ui,sans-serif}\n.scr::before{content:'';position:absolute;inset:6px;border-radius:38px;border:2px solid #4a4d53;box-shadow:inset 0 0 0 1px #0d0e10,inset 0 0 40px rgba(0,0,0,.6);pointer-events:none}\n@keyframes rot{to{transform:rotate(360deg)}}\n@keyframes rotr{to{transform:rotate(-360deg)}}\n@keyframes core{0%,100%{box-shadow:0 0 0 3px #f2a33a,0 0 14px rgba(242,163,58,.55),inset 0 0 10px rgba(242,163,58,.25)}50%{box-shadow:0 0 0 3px #ffc46b,0 0 28px rgba(255,180,80,.95),inset 0 0 16px rgba(255,180,80,.45)}}\n@keyframes edge{0%,100%{box-shadow:0 0 0 1px #000,0 6px 14px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -2px 0 rgba(242,163,58,.25)}50%{box-shadow:0 0 0 1px #000,0 6px 14px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.2),inset 0 -2px 0 rgba(255,190,90,.8)}}\n@keyframes glow{0%,100%{box-shadow:0 0 0 2px #e39a32,0 0 14px rgba(242,163,58,.45),inset 0 1px 0 rgba(255,255,255,.12)}50%{box-shadow:0 0 0 2px #ffc46b,0 0 30px rgba(255,180,80,.85),inset 0 1px 0 rgba(255,255,255,.2)}}\n.hi,.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,#45484e 0%,#2c2f34 45%,#1d1f23 100%);border:1px solid #5a5d63;animation:edge 12.8s ease-in-out infinite}\n.app:nth-child(2n){animation-delay:2.4s}.app:nth-child(3n){animation-delay:4.8s}.sk:nth-child(2){animation-delay:3.2s}.sk:nth-child(3){animation-delay:6.4s}.mk:nth-child(2){animation-delay:2.8s}.mk:nth-child(3){animation-delay:5.6s}\n.hi{border-radius:12px}\n.card{border-radius:18px;animation:none;box-shadow:0 0 0 1px #000,0 8px 18px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.12)}\n.app,.mk{border-radius:12px}\n.rock{border-radius:20px}\n.sk{border-radius:14px}\n.tabs{background:#141518;border:1px solid #3c3f44;box-shadow:inset 0 2px 6px rgba(0,0,0,.8);border-radius:14px}\n.tab{border-radius:10px;background:linear-gradient(180deg,#3a3d42,#24262a);color:#c9c4ba;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}\n.tab.on{color:#1c1206;background:linear-gradient(180deg,#ffd27a 0%,#f2a33a 50%,#b8701b 100%);box-shadow:0 0 14px rgba(242,163,58,.55),inset 0 1px 0 #fff0c8}\n.ampi{background:#16171a;color:#f2b456;border:1px solid #5a4a2e;border-radius:8px}\n.di{background:linear-gradient(180deg,#4a4d53,#2a2c30);color:#f2b456;border:1px solid #5a5d63}\n.app.on{border-color:#f2a33a;animation:none;box-shadow:0 0 0 1px #f2a33a,0 0 16px rgba(242,163,58,.6),inset 0 1px 0 rgba(255,255,255,.15)}\n.dpad{background:radial-gradient(circle at 50% 40%,#2f3237,#121315 72%);border:none;box-shadow:0 0 0 4px #1a1b1e,0 10px 26px rgba(0,0,0,.7)}\n.dpad::before{content:'';position:absolute;inset:-12px;border-radius:50%;background:repeating-conic-gradient(#7d8188 0deg 5deg,#3a3d42 5deg 10deg,#5b5f66 10deg 15deg,#26282c 15deg 30deg);-webkit-mask:radial-gradient(circle,transparent 103px,#000 104px);mask:radial-gradient(circle,transparent 103px,#000 104px);z-index:-1;animation:rot 80s linear infinite;box-shadow:0 0 0 2px #0c0d0f}\n.dpad::after{content:'';position:absolute;inset:40px;border-radius:50%;border:2px solid #2a1a08;background:radial-gradient(circle,#16171a 60%,#0d0e10);z-index:1;animation:core 10.4s ease-in-out infinite}\n.dk{color:#f2b456;filter:drop-shadow(0 0 4px rgba(242,163,58,.6))}\n.ok{left:58px;top:58px;width:80px;height:80px;background:radial-gradient(circle at 50% 35%,#3a3d42,#141518 75%);border:2px solid #6a6d73;color:#ffffff;font-size:21px;text-shadow:0 0 6px rgba(255,255,255,.4);box-shadow:inset 0 2px 0 rgba(255,255,255,.15),inset 0 -6px 10px rgba(0,0,0,.7);z-index:3}\n.ok::before{content:'';position:absolute;inset:-7px;border-radius:50%;border:2px dashed rgba(242,163,58,.7);animation:rotr 40s linear infinite}\n.rk{color:#f0ebe1}\n.sk.on{color:#ff6b4a}\n.big{border-radius:16px;color:#f2b456;background:linear-gradient(180deg,#2c2e33,#16171a);border:none;animation:glow 12s ease-in-out infinite;text-shadow:0 0 10px rgba(242,163,58,.7)}\n.big svg{filter:drop-shadow(0 0 6px #f2a33a)}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:translateY(2px) scale(.95);animation:none;box-shadow:0 0 0 1px #f2a33a,inset 0 4px 10px rgba(0,0,0,.85),0 0 16px rgba(242,163,58,.6)}\n.rk:active,.dk:active{transform:scale(.85);color:#fff;filter:drop-shadow(0 0 10px #ffb84a)}\n.ok:active{transform:scale(.92);box-shadow:0 0 30px rgba(255,180,80,.9),inset 0 6px 14px rgba(0,0,0,.8)}\n.big:active{transform:translateY(2px);animation:none;box-shadow:0 0 0 2px #ffc46b,0 0 40px rgba(255,180,80,.95),inset 0 4px 12px rgba(0,0,0,.7)}\n\n.tex{position:absolute;left:0;top:0;pointer-events:none;mix-blend-mode:overlay;opacity:.55}\n.rv{position:absolute;width:10px;height:10px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d8dbe0,#6b6f76 55%,#2a2c30);box-shadow:0 1px 2px rgba(0,0,0,.8),inset 0 0 0 1px rgba(0,0,0,.4);pointer-events:none}\n.rv::after{content:'';position:absolute;left:2px;right:2px;top:4px;height:2px;background:#2a2c30;transform:rotate(35deg)}\n.hd,.card,.tabs,.lbl,.apps,.mid,.media,.big{position:relative;z-index:1}\n.app::before,.sk::before,.mk::before,.rock::before,.tab::before,.hi::before{content:'';position:absolute;left:6%;right:6%;top:1px;height:42%;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,0));pointer-events:none}\n.big::before{content:'';position:absolute;left:4%;right:4%;top:2px;height:40%;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,0));pointer-events:none}\n.card::after{content:'';position:absolute;inset:0;border-radius:inherit;background:linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.07) 45%,rgba(255,255,255,0) 60%);pointer-events:none}\n.ok{background:radial-gradient(circle at 38% 28%,#5a5e65 0%,#2a2c31 40%,#0f1012 80%)}\n.dpad{box-shadow:0 0 0 4px #1a1b1e,0 0 0 6px #4c4f55,0 14px 30px rgba(0,0,0,.8),inset 0 2px 1px rgba(255,255,255,.12)}\n.di{box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 2px 4px rgba(0,0,0,.6)}\n\n@keyframes a_wob{0%,100%{transform:rotate(0)}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}\n@keyframes a_pul{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}\n@keyframes a_bnc{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}50%{transform:translateY(0)}65%{transform:translateY(-2px)}}\n@keyframes a_spin{to{transform:rotate(360deg)}}\n@keyframes a_flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}\n@keyframes a_shk{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}\n@keyframes a_hb{0%,100%{transform:scale(1)}14%{transform:scale(1.2)}28%{transform:scale(1)}42%{transform:scale(1.2)}70%{transform:scale(1)}}\n@keyframes a_flt{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(4deg)}}\n@keyframes a_zoom{0%,80%,100%{transform:scale(1)}90%{transform:scale(1.3) rotate(-8deg)}}\n@keyframes a_eq{0%,100%{transform:scaleY(1)}25%{transform:scaleY(.6)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.8)}}\n@keyframes a_l{0%,100%{transform:translateX(0)}50%{transform:translateX(-5px)}}\n@keyframes a_r{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}\n@keyframes a_up{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes a_dn{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes a_back{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-35deg)}}\n@keyframes a_wave{0%,100%{opacity:1}50%{opacity:.35}}\n@keyframes a_blink{0%,90%,100%{opacity:1}95%{opacity:.2}}\n@keyframes a_pw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.75}}\n@keyframes a_tilt{0%,100%{transform:perspective(200px) rotateX(0)}50%{transform:perspective(200px) rotateX(18deg)}}\n.badge,.sk svg,.mk svg,.hi svg,.big svg,.di svg{display:inline-flex}\n.app:nth-child(1) .badge{animation:a_wob 9.6s ease-in-out infinite}\n.app:nth-child(2) .badge{animation:a_hb 8.8s ease-in-out infinite}\n.app:nth-child(3) .badge{animation:a_pul 7.2s ease-in-out infinite}\n.app:nth-child(4) .badge{animation:a_flip 13.6s ease-in-out infinite}\n.app:nth-child(5) .badge{animation:a_bnc 6.4s ease-in-out infinite}\n.app:nth-child(6) .badge{animation:a_spin 16s linear infinite}\n.app:nth-child(7) .badge{animation:a_shk 10.4s ease-in-out infinite}\n.app:nth-child(8) .badge{animation:a_zoom 12s ease-in-out infinite}\n.app:nth-child(9) .badge{animation:a_eq 3.6s ease-in-out infinite;transform-origin:bottom}\n.app:nth-child(10) .badge{animation:a_flt 11.2s ease-in-out infinite}\n.hi:nth-child(2) svg{animation:a_wave 6.4s ease-in-out infinite}\n.hi:nth-child(3) svg{animation:a_spin 24s linear infinite}\n.devs .dev:nth-child(1) .di svg{animation:a_blink 16s linear infinite}\n.devs .dev:nth-child(2) .di svg{animation:a_eq 4.8s ease-in-out infinite}\n.rock .rk:first-child{animation:a_up 7.2s ease-in-out infinite}\n.rock .rk:last-child{animation:a_dn 7.2s ease-in-out infinite 3.6s}\n.side .sk:nth-child(1) svg{animation:a_back 10.4s ease-in-out infinite}\n.side .sk:nth-child(2) svg{animation:a_bnc 8.8s ease-in-out infinite 1.6s}\n.side .sk:nth-child(3) svg{animation:a_shk 11.2s ease-in-out infinite 4s}\n.media .mk:nth-child(1) svg{animation:a_l 5.6s ease-in-out infinite}\n.media .mk:nth-child(2) svg{animation:a_hb 8s ease-in-out infinite}\n.media .mk:nth-child(3) svg{animation:a_r 5.6s ease-in-out infinite}\n.big svg{animation:a_pw 8s ease-in-out infinite}\n.tab.on{animation:a_tilt 12s ease-in-out infinite}\n.app:active .badge,.sk:active svg,.mk:active svg,.rk:active{animation-play-state:paused}\n.dk.u svg{animation:a_up 6.4s ease-in-out infinite}.dk.dn svg{animation:a_dn 6.4s ease-in-out infinite}.dk.l svg{animation:a_l 6.4s ease-in-out infinite 1.6s}.dk.r svg{animation:a_r 6.4s ease-in-out infinite 1.6s}\n@keyframes a_grow{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}\n@keyframes a_shrink{0%,100%{transform:scale(1)}50%{transform:scale(.65)}}\n.rock .rk:first-child{animation:a_grow 6.4s ease-in-out infinite}\n.rock .rk:last-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n.g3 .mk.big2:last-child{animation:a_grow 6.4s ease-in-out infinite}\n.g3 .mk.big2:first-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n",
 "wood": ".scr{background:repeating-linear-gradient(92deg,rgba(0,0,0,.05) 0 2px,rgba(255,255,255,.03) 2px 5px,rgba(0,0,0,.04) 5px 9px),radial-gradient(120% 40% at 30% 20%,rgba(255,200,140,.18),rgba(255,200,140,0) 70%),linear-gradient(170deg,#6b4226 0%,#4a2c17 55%,#331d0e 100%);color:#f6e7d2;font-family:Nunito,system-ui,sans-serif}\n@keyframes wglow{0%,100%{box-shadow:0 0 0 2px #c9a24a,0 0 10px rgba(255,200,90,.25),inset 0 1px 0 rgba(255,240,200,.5)}50%{box-shadow:0 0 0 2px #e8c46a,0 0 22px rgba(255,200,90,.6),inset 0 1px 0 rgba(255,240,200,.6)}}\n.hi,.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,#f3e6cf 0%,#e2cfae 55%,#cdb48b 100%);color:#3a2412;border:1px solid #a9874e;box-shadow:0 6px 12px rgba(20,8,0,.45),inset 0 1px 0 rgba(255,255,255,.7),inset 0 -2px 3px rgba(120,80,30,.3)}\n.hi{background:transparent;border:none;box-shadow:none;color:#f6e7d2}\n.card{background:linear-gradient(180deg,#3d2412,#2a180b);color:#f6e7d2;border:2px solid #b8913f}\n.di{background:linear-gradient(180deg,#e8c46a,#a8812f);color:#2a180b}\n.ampi{background:#2a180b;color:#e8c46a;border:1px solid #8a6a2f}\n.tabs{background:#2a180b;border:1px solid #6b4a24;box-shadow:inset 0 2px 6px rgba(0,0,0,.6)}\n.tab{background:transparent;color:#d9c3a1}\n.tab.on{color:#2a180b;background:linear-gradient(180deg,#f2d27a,#c9a24a 55%,#9a7428);box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 1px 0 #fff3c8}\n.app.on{outline:2px solid #e8c46a;outline-offset:1px}\n.dpad{background:radial-gradient(circle at 40% 30%,#f6ead6,#d9c29b 60%,#b89a68);border:6px solid #b8913f;box-shadow:0 0 0 2px #5a3a1a,0 12px 24px rgba(0,0,0,.5),inset 0 2px 0 rgba(255,255,255,.6)}\n.dk{color:#3a2412}\n.ok{background:radial-gradient(circle at 40% 30%,#f2d27a,#b8913f 60%,#7d5a1d);border:none;color:#2a180b;box-shadow:0 5px 10px rgba(0,0,0,.45),inset 0 2px 0 rgba(255,255,255,.6),inset 0 -3px 6px rgba(0,0,0,.25)}\n.rk{color:#3a2412}\n.sk.on{color:#b3261e}\n.big{color:#2a180b;border:none;background:linear-gradient(180deg,#f2d27a,#c9a24a 55%,#8f6a22);animation:wglow 8s ease-in-out infinite}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:translateY(2px) scale(.96);box-shadow:inset 0 3px 8px rgba(80,40,0,.45)}\n.rk:active,.dk:active{transform:scale(.86);background:rgba(120,80,30,.15)}\n.ok:active{transform:scale(.93);box-shadow:inset 0 4px 10px rgba(0,0,0,.5)}\n.big:active{transform:translateY(2px);animation:none;box-shadow:inset 0 4px 10px rgba(0,0,0,.45)}\n",
 "synth": ".scr{background:linear-gradient(180deg,rgba(0,0,0,0) 62%,rgba(255,60,200,.25) 62.3%,rgba(0,0,0,0) 63%),repeating-linear-gradient(90deg,rgba(255,80,220,.18) 0 1px,transparent 1px 38px),radial-gradient(60% 22% at 50% 62%,rgba(255,140,60,.55),rgba(255,60,160,.2) 55%,rgba(0,0,0,0) 75%),linear-gradient(180deg,#14002e 0%,#2a0750 45%,#3d0a5c 62%,#12001f 100%);color:#ffe6ff;font-family:Nunito,system-ui,sans-serif}\n@keyframes sgrid{to{background-position:0 0,38px 0,0 0,0 0}}\n@keyframes shue{0%,100%{filter:hue-rotate(0)}50%{filter:hue-rotate(40deg)}}\n@keyframes sglow{0%,100%{box-shadow:0 0 0 1px #ff4fd8,0 0 10px rgba(255,79,216,.45),inset 0 0 8px rgba(255,79,216,.2)}50%{box-shadow:0 0 0 1px #4ff3ff,0 0 20px rgba(79,243,255,.6),inset 0 0 12px rgba(79,243,255,.3)}}\n.scr{animation:sgrid 24s linear infinite}\n.hi,.card,.app,.rock,.sk,.mk{background:linear-gradient(180deg,rgba(60,10,100,.85),rgba(20,0,40,.9));border:none;color:#ffe6ff;animation:sglow 12s ease-in-out infinite}\n.app:nth-child(odd),.sk:nth-child(2),.mk:nth-child(2){animation-delay:6s}\n.hi{background:transparent;animation:none}\n.card{animation:none;box-shadow:0 0 0 1px #ff4fd8,0 0 24px rgba(255,79,216,.35)}\n.ttl{background:linear-gradient(90deg,#ff4fd8,#ffb84f);-webkit-background-clip:text;background-clip:text;color:transparent}\n.di{background:linear-gradient(135deg,#ff4fd8,#7b4fff);color:#fff}\n.ampi{background:rgba(79,243,255,.12);color:#4ff3ff;border:1px solid rgba(79,243,255,.5)}\n.tabs{background:rgba(10,0,25,.8);box-shadow:inset 0 0 0 1px rgba(255,79,216,.4)}\n.tab{background:transparent;color:#c9a6e8}\n.tab.on{color:#14002e;background:linear-gradient(90deg,#ff4fd8,#ffb84f);box-shadow:0 0 16px rgba(255,79,216,.6)}\n.app.on{box-shadow:0 0 0 2px #ffb84f,0 0 22px rgba(255,184,79,.7)!important;animation:none}\n.dpad{background:radial-gradient(circle at 50% 40%,#2c0a50,#0e001c 70%);border:2px solid #ff4fd8;box-shadow:0 0 30px rgba(255,79,216,.45),inset 0 0 26px rgba(79,243,255,.2);animation:shue 16s ease-in-out infinite}\n.dk{color:#4ff3ff;filter:drop-shadow(0 0 6px #4ff3ff)}\n.ok{background:linear-gradient(135deg,#ff4fd8,#ff8a4f);border:none;color:#14002e;box-shadow:0 0 24px rgba(255,79,216,.7)}\n.rk{color:#ffe6ff}\n.sk.on{color:#ffb84f}\n.big{color:#14002e;border:none;background:linear-gradient(90deg,#ff4fd8,#ffb84f,#4ff3ff,#ff4fd8);background-size:300% 100%;animation:sbg 16s linear infinite;box-shadow:0 0 26px rgba(255,79,216,.6)}\n@keyframes sbg{to{background-position:300% 0}}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:scale(.94);animation:none;box-shadow:0 0 0 2px #4ff3ff,0 0 30px #4ff3ff,inset 0 0 18px rgba(79,243,255,.5)}\n.rk:active,.dk:active{transform:scale(.85);filter:drop-shadow(0 0 12px #ff4fd8)}\n.ok:active{transform:scale(.92);box-shadow:0 0 44px #ff4fd8,inset 0 4px 12px rgba(0,0,0,.4)}\n.big:active{transform:scale(.97);box-shadow:0 0 44px #ff4fd8}\n\n@keyframes a_wob{0%,100%{transform:rotate(0)}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}\n@keyframes a_pul{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}\n@keyframes a_bnc{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}50%{transform:translateY(0)}65%{transform:translateY(-2px)}}\n@keyframes a_spin{to{transform:rotate(360deg)}}\n@keyframes a_flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}\n@keyframes a_shk{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}\n@keyframes a_hb{0%,100%{transform:scale(1)}14%{transform:scale(1.2)}28%{transform:scale(1)}42%{transform:scale(1.2)}70%{transform:scale(1)}}\n@keyframes a_flt{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(4deg)}}\n@keyframes a_zoom{0%,80%,100%{transform:scale(1)}90%{transform:scale(1.3) rotate(-8deg)}}\n@keyframes a_eq{0%,100%{transform:scaleY(1)}25%{transform:scaleY(.6)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.8)}}\n@keyframes a_l{0%,100%{transform:translateX(0)}50%{transform:translateX(-5px)}}\n@keyframes a_r{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}\n@keyframes a_up{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes a_dn{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes a_back{0%,60%,100%{transform:rotate(0)}75%{transform:rotate(-35deg)}}\n@keyframes a_wave{0%,100%{opacity:1}50%{opacity:.35}}\n@keyframes a_blink{0%,90%,100%{opacity:1}95%{opacity:.2}}\n@keyframes a_pw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.75}}\n@keyframes a_tilt{0%,100%{transform:perspective(200px) rotateX(0)}50%{transform:perspective(200px) rotateX(18deg)}}\n.badge,.sk svg,.mk svg,.hi svg,.big svg,.di svg{display:inline-flex}\n.app:nth-child(1) .badge{animation:a_wob 9.6s ease-in-out infinite}\n.app:nth-child(2) .badge{animation:a_hb 8.8s ease-in-out infinite}\n.app:nth-child(3) .badge{animation:a_pul 7.2s ease-in-out infinite}\n.app:nth-child(4) .badge{animation:a_flip 13.6s ease-in-out infinite}\n.app:nth-child(5) .badge{animation:a_bnc 6.4s ease-in-out infinite}\n.app:nth-child(6) .badge{animation:a_spin 16s linear infinite}\n.app:nth-child(7) .badge{animation:a_shk 10.4s ease-in-out infinite}\n.app:nth-child(8) .badge{animation:a_zoom 12s ease-in-out infinite}\n.app:nth-child(9) .badge{animation:a_eq 3.6s ease-in-out infinite;transform-origin:bottom}\n.app:nth-child(10) .badge{animation:a_flt 11.2s ease-in-out infinite}\n.hi:nth-child(2) svg{animation:a_wave 6.4s ease-in-out infinite}\n.hi:nth-child(3) svg{animation:a_spin 24s linear infinite}\n.devs .dev:nth-child(1) .di svg{animation:a_blink 16s linear infinite}\n.devs .dev:nth-child(2) .di svg{animation:a_eq 4.8s ease-in-out infinite}\n.rock .rk:first-child{animation:a_up 7.2s ease-in-out infinite}\n.rock .rk:last-child{animation:a_dn 7.2s ease-in-out infinite 3.6s}\n.side .sk:nth-child(1) svg{animation:a_back 10.4s ease-in-out infinite}\n.side .sk:nth-child(2) svg{animation:a_bnc 8.8s ease-in-out infinite 1.6s}\n.side .sk:nth-child(3) svg{animation:a_shk 11.2s ease-in-out infinite 4s}\n.media .mk:nth-child(1) svg{animation:a_l 5.6s ease-in-out infinite}\n.media .mk:nth-child(2) svg{animation:a_hb 8s ease-in-out infinite}\n.media .mk:nth-child(3) svg{animation:a_r 5.6s ease-in-out infinite}\n.big svg{animation:a_pw 8s ease-in-out infinite}\n.tab.on{animation:a_tilt 12s ease-in-out infinite}\n.app:active .badge,.sk:active svg,.mk:active svg,.rk:active{animation-play-state:paused}\n.dk.u svg{animation:a_up 6.4s ease-in-out infinite}.dk.dn svg{animation:a_dn 6.4s ease-in-out infinite}.dk.l svg{animation:a_l 6.4s ease-in-out infinite 1.6s}.dk.r svg{animation:a_r 6.4s ease-in-out infinite 1.6s}\n@keyframes a_grow{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}@keyframes a_shrink{0%,100%{transform:scale(1)}50%{transform:scale(.65)}}.rock .rk:first-child{animation:a_grow 6.4s ease-in-out infinite}.rock .rk:last-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}.g3 .mk.big2:last-child{animation:a_grow 6.4s ease-in-out infinite}.g3 .mk.big2:first-child{animation:a_shrink 6.4s ease-in-out infinite 3.2s}\n",
 "graphite": ".scr{background:linear-gradient(180deg,#1f2124,#151619);color:#eceef1;font-family:Nunito,system-ui,sans-serif}\n@keyframes gdot{0%,100%{opacity:.35;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}\n.hi,.card,.app,.rock,.sk,.mk{background:#26282c;border:1px solid #2f3237;box-shadow:0 1px 0 rgba(255,255,255,.04) inset,0 6px 14px rgba(0,0,0,.35);color:#eceef1}\n.hi{background:transparent;border:none;box-shadow:none}\n.card{background:#202226}\n.di{background:#2f3237;color:#ff7a2f}\n.ampi{background:#2f3237;color:#ff9b5c}\n.dot{animation:gdot 6s ease-in-out infinite}\n.tabs{background:#1a1b1e;border:1px solid #2a2c30}\n.tab{background:transparent;color:#8e939b}\n.tab.on{color:#fff;background:#ff7a2f;box-shadow:0 6px 16px rgba(255,122,47,.35)}\n.app.on{border-color:#ff7a2f;box-shadow:0 0 0 1px #ff7a2f,0 8px 20px rgba(255,122,47,.25)}\n.dpad{background:#26282c;border:1px solid #2f3237;box-shadow:0 14px 30px rgba(0,0,0,.45)}\n.dpad::before{content:'';position:absolute;inset:50px;border-radius:50%;background:#1d1f22;z-index:1}\n.dk{color:#c9ccd1}\n.ok{left:60px;top:60px;width:76px;height:76px;background:#ff7a2f;border:none;color:#fff;box-shadow:0 8px 22px rgba(255,122,47,.45)}\n.rk{color:#eceef1}\n.sk.on{color:#ff7a2f}\n.big{color:#fff;border:none;background:#ff7a2f;box-shadow:0 10px 24px rgba(255,122,47,.35)}\n.hi:active,.app:active,.sk:active,.mk:active,.tab:active{transform:scale(.95);background:#303338}\n.rk:active,.dk:active{transform:scale(.86);color:#ff7a2f}\n.ok:active{transform:scale(.93);background:#e86a22}\n.big:active{transform:scale(.98);background:#e86a22}\n"
};
const THEME_LIST = [['cream', 'Krem'], ['neon', 'Niebieski neon'], ['arctic', 'Arctic'], ['chrome', 'Czarny chrom'], ['steam', 'Mechaniczny'], ['wood', 'Drewno i mosiądz'], ['synth', 'Synthwave'], ['graphite', 'Grafit minimal']];
const LS_KEY = 'piloty-card-theme';
const UD_KEY = 'piloty-card';

const DEFAULT_APPS = [
  { name: 'Apple TV', short: 'tv', color: '#1c1c1e', activity: 'com.apple.atve.androidtv.appletv' },
  { name: 'Netflix', short: 'N', color: '#e50914', activity: 'com.netflix.ninja' },
  { name: 'YouTube', short: '▶', color: '#ff0033', activity: 'com.google.android.youtube.tv' },
  { name: 'Prime', short: 'pv', color: '#1a98ff', activity: 'com.amazon.amazonvideo.livingroom' },
  { name: 'Player', short: 'P', color: '#7b2ff7', activity: 'pl.tvn.player.tv' },
  { name: 'HBO Max', short: 'H', color: '#5b2bdb', activity: 'com.wbd.stream' },
  { name: 'Polsat Go', short: 'PG', color: '#e2001a', activity: 'pl.cyfrowypolsat.flexigo' },
  { name: 'Disney+', short: 'D+', color: '#0b3d91', activity: 'com.disney.disneyplus' },
  { name: 'Spotify', short: '♫', color: '#1db954', activity: 'com.spotify.tv.android' },
  { name: 'HDMI 1', short: '⇥', color: '#5a6270', command: 'TV_INPUT_HDMI_1' }
];

const OFF = ['off', 'unavailable', 'unknown', 'standby'];
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const SV = (d, w = 20) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const SF = (d) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;
const I = {
  back: SV('<path d="M9 14L4 9l5-5"></path><path d="M4 9h11a5 5 0 010 10h-3"></path>'),
  home: SV('<path d="M3 11l9-7 9 7"></path><path d="M5 10v10h14V10"></path>'),
  mute: SV('<path d="M11 5L6 9H3v6h3l5 4V5z"></path><path d="M22 9l-6 6M16 9l6 6"></path>'),
  power: SV('<path d="M12 3v9"></path><path d="M6.3 7.3a8 8 0 1011.4 0"></path>', 22),
  cast: SV('<path d="M3 8V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-6"></path><path d="M3 12a8 8 0 018 8M3 16a4 4 0 014 4"></path>'),
  gear: SV('<circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"></path>'),
  close: SV('<path d="M6 6l12 12M18 6L6 18"></path>'),
  tv: SV('<rect x="2" y="4" width="20" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path>'),
  amp: SV('<rect x="2" y="7" width="20" height="10" rx="2"></rect><circle cx="17" cy="12" r="2.5"></circle><path d="M5 11h5M5 13.5h3"></path>'),
  rew: SF('<path d="M11 6L3 12l8 6V6zm10 0l-8 6 8 6V6z"></path>'),
  ff: SF('<path d="M13 6l8 6-8 6V6zM3 6l8 6-8 6V6z"></path>'),
  pp: SF('<path d="M5 5l8 7-8 7V5zm10 0h2.5v14H15zm4 0h2.5v14H19z"></path>'),
  stop: SF('<rect x="6" y="6" width="12" height="12" rx="1.5"></rect>'),
  rec: SF('<circle cx="12" cy="12" r="6"></circle>'),
  prev: SF('<path d="M6 5h2v14H6zM20 5l-10 7 10 7V5z"></path>'),
  next: SF('<path d="M16 5h2v14h-2zM4 5l10 7-10 7V5z"></path>')
};
const arrow = (p) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="${p}"></path></svg>`;

const EXTRA = `
:host{display:block}
.scr{width:100%;max-width:440px;height:auto;min-height:0;margin:0 auto;padding:18px 14px;border-radius:30px}
.uni,.pan{flex:none;overflow:visible;margin:0;padding:0}
.big{margin-top:4px}
.tex{width:100%;height:100%}
.tile{cursor:pointer}
.tile .scr{padding:14px;gap:10px}
.tile .card{cursor:pointer}
.ov{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.6);display:flex;align-items:flex-end;justify-content:center;overflow-y:auto;-webkit-overflow-scrolling:touch}
.ov .scr{border-radius:30px 30px 0 0;max-width:460px;min-height:92vh;padding-bottom:28px}
@media (min-width:700px){.ov{align-items:center;padding:24px}.ov .scr{border-radius:30px;min-height:0}}
.x{width:44px;height:44px;border-radius:14px;display:flex;align-items:center;justify-content:center}
.tm{position:absolute;right:12px;top:62px;z-index:30;width:260px;background:#ffffff;color:#1d1d1f;border-radius:18px;padding:12px;box-shadow:0 14px 40px rgba(0,0,0,.45);display:flex;flex-direction:column;gap:6px;font-family:Nunito,system-ui,sans-serif}
.tm h4{margin:2px 4px 4px;font-size:13px;font-weight:800;color:#555}
.tr{display:flex;align-items:center;gap:6px}
.tr span{flex:1;font-size:14px;font-weight:700}
.tb{all:unset;cursor:pointer;font-size:11px;font-weight:800;padding:8px 9px;border-radius:9px;background:#f0f0f3;color:#333}
.tb.on{background:#1d1d1f;color:#fff}
.tclr{all:unset;cursor:pointer;text-align:center;font-size:12px;font-weight:700;padding:9px;border-radius:10px;background:#f6e9e9;color:#a1262a;margin-top:4px}
.tinfo{font-size:11px;color:#777;margin:2px 4px}
`;

const loadFont = () => {
  if (document.getElementById('piloty-font')) return;
  const l = document.createElement('link');
  l.id = 'piloty-font';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap';
  document.head.appendChild(l);
};

class PilotyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._tab = 'uni';
    this._open = false;
    this._menu = false;
    this._key = '';
    this.shadowRoot.addEventListener('click', (e) => {
      const b = e.target.closest('[data-a]');
      if (!b) return;
      e.stopPropagation();
      this._act(b.dataset.a, b.dataset.v);
    });
  }

  static getStubConfig() {
    return { tv_remote: 'remote.telewizor', tv_player: 'media_player.telewizor', amp: 'media_player.amplituner', mode: 'tile' };
  }

  setConfig(config) {
    if (!config || !config.tv_remote || !config.amp) throw new Error('Piloty: podaj tv_remote i amp');
    this._c = Object.assign({ room: 'Salon', mode: 'tile', amp_source: 'HDMI1', theme: 'cream' }, config);
    this._apps = Array.isArray(config.apps) && config.apps.length ? config.apps : DEFAULT_APPS;
    this._key = '';
    if (this._hass) this._render(true);
  }

  getCardSize() { return this._c && this._c.mode === 'card' ? 14 : 3; }

  set hass(h) {
    const first = !this._hass;
    this._hass = h;
    if (first) { loadFont(); this._loadTheme(); }
    this._render(false);
  }

  /* ---------- motyw: konto + urządzenie ---------- */
  async _loadTheme() {
    try { this._devTheme = localStorage.getItem(LS_KEY); } catch (e) { this._devTheme = null; }
    try {
      const r = await this._hass.callWS({ type: 'frontend/get_user_data', key: UD_KEY });
      this._userTheme = r && r.value && r.value.theme ? r.value.theme : null;
    } catch (e) { this._userTheme = null; }
    this._render(true);
  }

  _theme() {
    const t = this._devTheme || this._userTheme || this._c.theme || 'cream';
    return THEMES[t] ? t : 'cream';
  }

  async _setTheme(t, deviceOnly) {
    if (deviceOnly) {
      try { localStorage.setItem(LS_KEY, t); } catch (e) { /* brak dostępu */ }
      this._devTheme = t;
    } else {
      this._userTheme = t;
      try { localStorage.removeItem(LS_KEY); } catch (e) { /* brak dostępu */ }
      this._devTheme = null;
      try { await this._hass.callWS({ type: 'frontend/set_user_data', key: UD_KEY, value: { theme: t } }); } catch (e) { /* zapis się nie udał */ }
    }
    this._menu = false;
    this._render(true);
  }

  _clearDevice() {
    try { localStorage.removeItem(LS_KEY); } catch (e) { /* brak dostępu */ }
    this._devTheme = null;
    this._menu = false;
    this._render(true);
  }

  /* ---------- stan urządzeń ---------- */
  _st(id) { return id && this._hass ? this._hass.states[id] : undefined; }

  _model() {
    const c = this._c;
    const tvp = this._st(c.tv_player);
    const tvr = this._st(c.tv_remote);
    const amp = this._st(c.amp);
    const tvOn = !!((tvp && !OFF.includes(tvp.state)) || (!tvp && tvr && !OFF.includes(tvr.state)));
    const ampOn = !!(amp && !OFF.includes(amp.state));
    const a = (amp && amp.attributes) || {};
    const appId = tvp && tvp.attributes ? (tvp.attributes.app_id || '') : '';
    const appName = tvp && tvp.attributes ? (tvp.attributes.app_name || '') : '';
    let cur = -1;
    this._apps.forEach((ap, i) => {
      if (cur < 0 && ap.activity && appId && (ap.activity === appId || appId.indexOf(ap.activity) === 0)) cur = i;
    });
    if (cur < 0 && appName) cur = this._apps.findIndex((ap) => ap.name.toLowerCase() === appName.toLowerCase());
    const muted = !!a.is_volume_muted;
    const db = this._st(c.amp_volume_db);
    let vol = '';
    if (db && !OFF.includes(db.state)) vol = `${Number(db.state).toFixed(1).replace('.', ',')} dB`;
    else if (typeof a.volume_level === 'number') vol = `${Math.round(a.volume_level * 100)}%`;
    const ampObj = c.amp.split('.')[1];
    let scenes = c.amp_scenes;
    if (!Array.isArray(scenes)) {
      scenes = Object.keys(this._hass.states).filter((e) => e.indexOf(`button.${ampObj}_`) === 0);
    }
    const ampFriendly = (a.friendly_name || '').trim();
    const sceneList = scenes.map((e) => {
      const s = this._st(e);
      let n = (s && s.attributes.friendly_name) || e;
      if (ampFriendly && n.indexOf(ampFriendly) === 0) n = n.slice(ampFriendly.length).trim();
      return { id: e, name: n };
    });
    const band = this._st(c.amp_tuner_band);
    return {
      tvOn, ampOn, cur,
      nowName: cur >= 0 ? this._apps[cur].name : (appName || (tvOn ? '—' : 'Wyłączony')),
      src: a.source || '—',
      sources: a.source_list || [],
      modes: a.sound_mode_list || [],
      mode: a.sound_mode || '',
      muted,
      vol: muted ? 'Wyciszony' : (vol || '—'),
      volShort: muted ? 'MUTE' : (vol || ''),
      scenes: sceneList,
      bands: band && band.attributes.options ? band.attributes.options : [],
      band: band ? band.state : '',
      hasPreset: !!this._st(c.amp_tuner_preset)
    };
  }

  /* ---------- akcje ---------- */
  _call(domain, service, data) {
    return this._hass.callService(domain, service, data).catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('Piloty:', domain, service, e);
    });
  }

  _tv(cmd) { return this._call('remote', 'send_command', { entity_id: this._c.tv_remote, command: cmd }); }

  _ampr(cmd) {
    if (!this._c.amp_remote) return Promise.resolve();
    return this._call('remote', 'send_command', { entity_id: this._c.amp_remote, command: cmd });
  }

  async _ampToSource() {
    const m = this._model();
    if (!m.ampOn) await this._call('media_player', 'turn_on', { entity_id: this._c.amp });
    await this._call('media_player', 'select_source', { entity_id: this._c.amp, source: this._c.amp_source });
  }

  _haptic() {
    this.dispatchEvent(new CustomEvent('haptic', { detail: 'light', bubbles: true, composed: true }));
  }

  async _act(a, v) {
    const c = this._c;
    const amp = { entity_id: c.amp };
    this._haptic();
    switch (a) {
      case 'open': this._open = true; this._render(true); return;
      case 'close': this._open = false; this._menu = false; this._render(true); return;
      case 'tab': this._tab = v; this._render(true); return;
      case 'menu': this._menu = !this._menu; this._render(true); return;
      case 'theme': this._setTheme(v, false); return;
      case 'themedev': this._setTheme(v, true); return;
      case 'cleardev': this._clearDevice(); return;
      case 'more': {
        const id = v === 'amp' ? c.amp : (c.tv_player || c.tv_remote);
        this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true }));
        return;
      }
      case 'app': {
        const ap = this._apps[Number(v)];
        if (!ap) return;
        if (ap.activity) await this._call('remote', 'turn_on', { entity_id: c.tv_remote, activity: ap.activity });
        else if (ap.command) await this._tv(ap.command);
        if (ap.amp_source !== false) await this._ampToSource();
        return;
      }
      case 'tv': this._tv(v); return;
      case 'ampr': this._ampr(v); return;
      case 'src': this._call('media_player', 'select_source', Object.assign({ source: v }, amp)); return;
      case 'mode': this._call('media_player', 'select_sound_mode', Object.assign({ sound_mode: v }, amp)); return;
      case 'scene': this._call('button', 'press', { entity_id: v }); return;
      case 'band': this._call('select', 'select_option', { entity_id: c.amp_tuner_band, option: v }); return;
      case 'preset': {
        const s = this._st(c.amp_tuner_preset);
        if (!s) return;
        const n = Number(s.state) + (v === 'up' ? 1 : -1);
        const min = Number(s.attributes.min || 1);
        const max = Number(s.attributes.max || 40);
        this._call('number', 'set_value', { entity_id: c.amp_tuner_preset, value: Math.min(max, Math.max(min, n)) });
        return;
      }
      case 'volup': this._call('media_player', 'volume_up', amp); return;
      case 'voldown': this._call('media_player', 'volume_down', amp); return;
      case 'mute': this._call('media_player', 'volume_mute', Object.assign({ is_volume_muted: !this._model().muted }, amp)); return;
      case 'ampmedia': this._call('media_player', v, amp); return;
      case 'tvpower': {
        const m = this._model();
        this._call('remote', m.tvOn ? 'turn_off' : 'turn_on', { entity_id: c.tv_remote });
        return;
      }
      case 'amppower': this._call('media_player', 'toggle', amp); return;
      case 'power': {
        const m = this._model();
        if (m.tvOn || m.ampOn) {
          this._call('remote', 'turn_off', { entity_id: c.tv_remote });
          this._call('media_player', 'turn_off', amp);
        } else {
          this._call('remote', 'turn_on', { entity_id: c.tv_remote });
          await this._ampToSource();
        }
        return;
      }
      default:
    }
  }

  /* ---------- widok ---------- */
  _btn(cls, act, val, inner, label) {
    return `<button class="${cls}" data-a="${act}"${val !== undefined ? ` data-v="${esc(val)}"` : ''}${label ? ` aria-label="${esc(label)}"` : ''}>${inner}</button>`;
  }

  _dpad(act, map, okLabel) {
    const b = (cls, cmd, lab, p) => this._btn(`dk ${cls}`, act, cmd, arrow(p), lab);
    return `<div class="dpad">${b('u', map.up, 'Góra', 'M6 15l6-6 6 6')}${b('dn', map.down, 'Dół', 'M6 9l6 6 6-6')}${b('l', map.left, 'Lewo', 'M15 6l-6 6 6 6')}${b('r', map.right, 'Prawo', 'M9 6l6 6-6 6')}${this._btn('ok', act, map.ok, esc(okLabel || 'OK'))}</div>`;
  }

  _status(m, inModal) {
    const dot = (on) => `<span class="dot" style="background: ${on ? '#2fb86a' : '#999999'}"></span>`;
    const ap = m.cur >= 0 ? this._apps[m.cur] : null;
    return `<div class="card">
<div class="devs">
<div class="dev" data-a="more" data-v="tv"><span class="di">${I.tv}</span><span class="ci"><span class="nm">Telewizor</span><span class="st">${dot(m.tvOn)}${m.tvOn ? 'Włączony' : 'Wyłączony'}</span></span></div>
<div class="dev" data-a="more" data-v="amp"><span class="di">${I.amp}</span><span class="ci"><span class="nm">Amplituner</span><span class="st">${dot(m.ampOn)}${m.ampOn ? 'Włączony' : 'Wyłączony'}</span></span></div>
</div>
<div class="np"${inModal ? '' : ' data-a="open"'}><span class="badge nb" style="background: ${ap ? esc(ap.color) : '#888888'}">${ap ? esc(ap.short) : '•'}</span><span class="npt"><span class="npk">Teraz leci</span><span class="nm">${esc(m.nowName)}</span></span><span class="ampi">${esc(m.src)}</span><span class="ampi">${esc(m.vol)}</span></div>
</div>`;
  }

  _uni(m) {
    const apps = this._apps.map((ap, i) => `<button class="app${m.cur === i ? ' on' : ''}" data-a="app" data-v="${i}" aria-label="${esc(ap.name)}"><span class="badge" style="background: ${esc(ap.color || '#555')}">${esc(ap.short || ap.name.slice(0, 2))}</span><span>${esc(ap.name)}</span></button>`).join('');
    return `<div class="uni">
<span class="lbl">Źródło</span>
<div class="apps">${apps}</div>
<div class="mid">
<div class="rock">${this._btn('rk', 'volup', undefined, '+', 'Głośniej')}<span class="vl">Głośność<br>${esc(m.volShort)}</span>${this._btn('rk', 'voldown', undefined, '−', 'Ciszej')}</div>
${this._dpad('tv', { up: 'DPAD_UP', down: 'DPAD_DOWN', left: 'DPAD_LEFT', right: 'DPAD_RIGHT', ok: 'DPAD_CENTER' })}
<div class="side">${this._btn('sk', 'tv', 'BACK', I.back, 'Wstecz')}${this._btn('sk', 'tv', 'HOME', I.home, 'Home')}${this._btn(`sk${m.muted ? ' on' : ''}`, 'mute', undefined, `${I.mute}<span>Wycisz</span>`)}</div>
</div>
<div class="media">${this._btn('mk', 'tv', 'MEDIA_REWIND', I.rew, 'Przewiń wstecz')}${this._btn('mk', 'tv', 'MEDIA_PLAY_PAUSE', I.pp, 'Play pauza')}${this._btn('mk', 'tv', 'MEDIA_FAST_FORWARD', I.ff, 'Do przodu')}</div>
${this._btn('big', 'power', undefined, `${I.power}<span>${m.tvOn || m.ampOn ? 'Wyłącz wszystko' : 'Włącz wszystko'}</span>`)}
</div>`;
  }

  _tvPanel(m) {
    const k = (cmd, inner, lab, cls = '') => this._btn(`mk${cls}`, 'tv', cmd, inner, lab);
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => k(d, d, d, ' dg')).join('')
      + k('BACK', '⌫', 'Wstecz', ' dg') + k('0', '0', '0', ' dg') + k('DPAD_CENTER', 'OK', 'OK', ' dg');
    const color = (cmd, c, n) => k(cmd, `<span class="cdot" style="background: ${c}"></span>`, n);
    return `<div class="pan">
<span class="lbl">Telewizor</span>
<div class="g4">${this._btn('mk pwr', 'tvpower', undefined, `${I.power}<span>Power</span>`)}${k('TV_INPUT', 'Źródło')}${k('INFO', 'Info')}${k('SETTINGS', 'Ustaw.')}</div>
<div class="g4">${k('ESCAPE', 'Exit')}${k('TV', 'TV')}${k('MENU', 'Menu')}${k('GUIDE', 'Guide')}</div>
<div class="mid">
<div class="rock">${this._btn('rk', 'tv', 'CHANNEL_UP', '+', 'Kanał w górę')}<span class="vl">Kanał</span>${this._btn('rk', 'tv', 'CHANNEL_DOWN', '−', 'Kanał w dół')}</div>
${this._dpad('tv', { up: 'DPAD_UP', down: 'DPAD_DOWN', left: 'DPAD_LEFT', right: 'DPAD_RIGHT', ok: 'DPAD_CENTER' })}
<div class="side">${this._btn('sk', 'tv', 'BACK', I.back, 'Wstecz')}${this._btn('sk', 'tv', 'HOME', I.home, 'Home')}${this._btn(`sk${m.muted ? ' on' : ''}`, 'mute', undefined, `${I.mute}<span>Wycisz</span>`)}</div>
</div>
<span class="lbl">Odtwarzanie</span>
<div class="g5">${k('MEDIA_REWIND', I.rew, 'Przewiń wstecz')}${k('MEDIA_PLAY_PAUSE', I.pp, 'Play pauza')}${k('MEDIA_FAST_FORWARD', I.ff, 'Do przodu')}${k('MEDIA_STOP', I.stop, 'Stop')}${k('MEDIA_RECORD', I.rec, 'Nagrywaj', ' rec')}</div>
<div class="g3">${k('CAPTIONS', 'Napisy')}${k('MEDIA_AUDIO_TRACK', 'Audio')}${k('TV_TELETEXT', 'Teletekst')}</div>
<div class="g4">${color('PROG_RED', '#e5484d', 'Czerwony')}${color('PROG_GREEN', '#30a46c', 'Zielony')}${color('PROG_YELLOW', '#f5d90a', 'Żółty')}${color('PROG_BLUE', '#3e63dd', 'Niebieski')}</div>
<span class="lbl">Cyfry</span>
<div class="g3">${digits}</div>
</div>`;
  }

  _ampPanel(m) {
    const c = this._c;
    const ar = (cmd, inner, lab) => this._btn('sk', 'ampr', cmd, inner, lab);
    let h = `<div class="pan">
<span class="lbl">Amplituner</span>
<div class="g3">${this._btn('mk pwr', 'amppower', undefined, `${I.power}<span>Power</span>`)}${this._btn(`mk${m.muted ? ' on' : ''}`, 'mute', undefined, `${I.mute}<span>Mute</span>`)}${this._btn('mk', 'more', 'amp', 'Więcej')}</div>
<div class="g3">${this._btn('mk big2', 'voldown', undefined, '−', 'Ciszej')}<span class="vread">${esc(m.vol)}</span>${this._btn('mk big2', 'volup', undefined, '+', 'Głośniej')}</div>`;
    if (m.sources.length) h += `<span class="lbl">Wejście</span><div class="g4">${m.sources.map((s) => this._btn(`mk${s === m.src ? ' on' : ''}`, 'src', s, esc(s))).join('')}</div>`;
    if (m.scenes.length) h += `<span class="lbl">Sceny</span><div class="g4">${m.scenes.map((s) => this._btn('mk', 'scene', s.id, esc(s.name))).join('')}</div>`;
    if (m.modes.length) h += `<span class="lbl">Tryb dźwięku</span><div class="g3">${m.modes.map((s) => this._btn(`mk${s === m.mode ? ' on' : ''}`, 'mode', s, esc(s))).join('')}</div>`;
    if (c.amp_remote) {
      h += `<span class="lbl">Menu</span><div class="mid">
<div class="side">${ar('on_screen', '<span>SETUP</span>', 'Setup')}${ar('option', '<span>OPTION</span>', 'Option')}${ar('display', '<span>DISPLAY</span>', 'Display')}</div>
${this._dpad('ampr', { up: 'up', down: 'down', left: 'left', right: 'right', ok: 'enter' })}
<div class="side">${ar('return', I.back, 'Return')}${ar('top_menu', '<span>TOP<br>MENU</span>', 'Top menu')}${ar('popup_menu', '<span>POP-UP</span>', 'Pop-up menu')}</div>
</div>`;
    }
    if (m.bands.length || m.hasPreset) {
      h += '<span class="lbl">Tuner</span><div class="g4">';
      h += m.bands.map((b) => this._btn(`mk${b === m.band ? ' on' : ''}`, 'band', b, esc(b))).join('');
      if (m.hasPreset) h += this._btn('mk', 'preset', 'down', 'Preset −') + this._btn('mk', 'preset', 'up', 'Preset +');
      h += '</div>';
    }
    h += `<span class="lbl">Odtwarzanie</span><div class="g4">${this._btn('mk', 'ampmedia', 'media_previous_track', I.prev, 'Poprzedni')}${this._btn('mk', 'ampmedia', 'media_play_pause', I.pp, 'Play pauza')}${this._btn('mk', 'ampmedia', 'media_stop', I.stop, 'Stop')}${this._btn('mk', 'ampmedia', 'media_next_track', I.next, 'Następny')}</div>
</div>`;
    return h;
  }

  _menuHtml(theme) {
    if (!this._menu) return '';
    const rows = THEME_LIST.map(([id, n]) => `<div class="tr"><span>${n}</span><button class="tb${this._userTheme === id ? ' on' : ''}" data-a="theme" data-v="${id}">Konto</button><button class="tb${this._devTheme === id ? ' on' : ''}" data-a="themedev" data-v="${id}">To urządzenie</button></div>`).join('');
    return `<div class="tm"><h4>Szata pilota</h4>${rows}<div class="tinfo">Teraz: ${esc((THEME_LIST.find((t) => t[0] === theme) || [0, theme])[1])}${this._devTheme ? ' (to urządzenie)' : ''}</div>${this._devTheme ? '<button class="tclr" data-a="cleardev">Wyczyść dla tego urządzenia</button>' : ''}</div>`;
  }

  _extras(theme) {
    if (theme !== 'steam') return '';
    return `<svg class="tex" aria-hidden="true"><filter id="mt"><feTurbulence type="fractalNoise" baseFrequency="0.9 0.04" numOctaves="3" seed="4"></feTurbulence><feColorMatrix values="0 0 0 0 0.6  0 0 0 0 0.6  0 0 0 0 0.62  0 0 0 0.55 0"></feColorMatrix></filter><filter id="sc"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="9"></feTurbulence><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 -0.35"></feColorMatrix></filter><rect width="100%" height="100%" filter="url(#mt)"></rect><rect width="100%" height="100%" filter="url(#sc)"></rect></svg>
<span class="rv" style="left: 20px; top: 20px"></span><span class="rv" style="right: 20px; top: 20px"></span><span class="rv" style="left: 20px; bottom: 20px"></span><span class="rv" style="right: 20px; bottom: 20px"></span>`;
  }

  _remote(m, theme, inModal) {
    const tabs = [['uni', 'Uniwersalny'], ['tv', 'Telewizor'], ['amp', 'Amplituner']]
      .map(([id, l]) => this._btn(`tab${this._tab === id ? ' on' : ''}`, 'tab', id, l)).join('');
    let body = '';
    if (this._tab === 'tv') body = this._tvPanel(m);
    else if (this._tab === 'amp') body = this._ampPanel(m);
    else body = this._uni(m);
    return `<div class="scr">${this._extras(theme)}
<div class="hd"><span class="ttl">${esc(this._c.room)}</span>${this._btn('hi', 'more', 'tv', I.cast, 'Telewizor – szczegóły')}${this._btn('hi', 'menu', undefined, I.gear, 'Szata pilota')}${inModal ? this._btn('hi x', 'close', undefined, I.close, 'Zamknij') : ''}</div>
${this._menuHtml(theme)}
${this._status(m, true)}
<div class="tabs">${tabs}</div>
${body}
</div>`;
  }

  _tile(m, theme) {
    return `<div class="tile"><div class="scr">${this._extras(theme)}
<div class="hd"><span class="ttl">${esc(this._c.room)}</span>${this._btn('hi', 'menu', undefined, I.gear, 'Szata pilota')}${this._btn('hi', 'open', undefined, I.cast, 'Otwórz pilota')}</div>
${this._menuHtml(theme)}
${this._status(m, false)}
${this._btn('big', 'open', undefined, '<span>Otwórz pilota</span>')}
</div></div>`;
  }

  _render(force) {
    if (!this._hass || !this._c) return;
    const theme = this._theme();
    const m = this._model();
    const key = JSON.stringify([theme, this._tab, this._open, this._menu, this._userTheme, this._devTheme, m]);
    if (!force && key === this._key) return;
    this._key = key;
    const css = `<style>${STRUCT}\n${THEMES[theme]}\n${EXTRA}</style>`;
    let html;
    if (this._c.mode === 'card') html = this._remote(m, theme, false);
    else html = this._tile(m, theme) + (this._open ? `<div class="ov">${this._remote(m, theme, true)}</div>` : '');
    this.shadowRoot.innerHTML = css + html;
    const ov = this.shadowRoot.querySelector('.ov');
    if (ov) ov.addEventListener('click', (e) => { if (e.target === ov) this._act('close'); });
  }
}

if (!customElements.get('piloty-card')) customElements.define('piloty-card', PilotyCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === 'piloty-card')) {
  window.customCards.push({ type: 'piloty-card', name: 'Piloty', description: 'Uniwersalny pilot TV + amplituner z 5 szatami graficznymi', preview: false });
}
// eslint-disable-next-line no-console
console.info(`%c PILOTY %c ${VERSION} `, 'background:#6e4a30;color:#fff;border-radius:4px 0 0 4px;padding:2px 6px', 'background:#efe8df;color:#6e4a30;border-radius:0 4px 4px 0;padding:2px 6px');
})();
