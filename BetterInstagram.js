// ==UserScript==
// @name BetterInstagram
// @namespace https://www.instagram.com/
// @include https://www.instagram.com/direct/*
// @version 1.1
// @author legend_recalls
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        document.querySelector('textarea').focus();
    });

    GM_addStyle(`
        /*
        /* Instagram Dark Theme v10.1*/
/* Created by frokfrdk (formerly Lexan)*/

/* Dark Scrollbar*/
::-webkit-scrollbar,
 ::-webkit-scrollbar-corner,
 ::-webkit-scrollbar,
::-webkit-scrollbar-corner {
    background: var(--bg-color) !important;
    width: 8px
  }
::-webkit-scrollbar-button,
 ::-webkit-scrollbar-button {
    display: none !important;
  }
::-webkit-scrollbar-thumb,
 ::-webkit-scrollbar-thumb {
    background: #999 !important;
    width: 8px !important;
    border-radius: 10px;
     transition: .1s !important;
  }
::-webkit-scrollbar-thumb:not(:active):hover,
 ::-webkit-scrollbar-thumb:not(:active):hover {
    background: #777 !important;
     transition: .1s !important;
  }
::-webkit-scrollbar-thumb:active,
::-webkit-scrollbar-thumb:hover:active,
 ::-webkit-scrollbar-thumb:active,
 ::-webkit-scrollbar-thumb:hover:active {
    background: #5c5c5c !important;
     transition: .1s !important;
  }

/*Variables*/
    :root {
        --bg: #000;
        --bg2: #141414;
	    --bg3: #222;
        --item: #333;
        --item-hover: #666;
        --item-active: #777;
        --text: #fff;
        --text-dark: #ddd;
        --text-dark2: #aaa;
        --none: #00000000;
        --accent: #0084ff;
        --multi-select: #1e4166;
        --ig-primary-background: 0,0,0;
        --ig-secondary-background: 0, 0, 0;
        --ig-highlight-background: 34,34,34;
        --ig-elevated-separator: 0,0,0,0;
        --ig-seperator: 0,0,0,0 !important;
        --post-separator: 0,0,0,0;
        --ig-primary-text: 255,255,255;
        --ig-secondary-button: 255,255,255;
        --ig-link: 255,255,255;
        --direct-message-max-width: 55vw;
        --ig-elevated-background: 35,35,35;
        --grey-9: 255,255,255;
        --nav-wide-width: 220px;
        --ig-banner-baclground: #141414;
        --input-border-radius: 20px !important;
    }

/*Main*/
body {
    background: var(--bg) !important;
}

input {
    background: var(--bg3) !important;
}

textarea {
    background: var(--none) !important;
}

/*Header*/
    .sp_jY02qVAhKr8.sx_98e64d,.sp_j88osDFh7lo.sx_385bf7,.sp_TNg2CZYaF1T.sx_7d646c,.sp_wTGAZ71KLpI.sx_67386d /*Instagram logo*/{
        filter: invert(1);
    }

    ._acun /*icon width*/{
        max-width: 90vw;
    }

._aawf /*search bar width*/{
    width: 35vw;
}

    ._lz6s,.Hz2lF,._acum /*Header*/{
	    backdrop-filter: blur(25px) !important;
        background-color: #000000cc !important;
        border-bottom: none !important;
    }

    ._ab6- /*UNIVERSAL ICON FIX PT2*/{
        color: #fff;
        fill: #fff;
    }

    polygon,circle,line,polyline,rect /*THE UNIVERSAL ICON FIX!!*/{
        stroke: #fff !important;
    }

._aa1g /*log out divider*/{
    background-color: var(--none);
}

/*Home*/
    ._ab6- [d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"] /*Heart icon colour*/{
    fill: #ed4956 !important;
    }

._aahn, ._aaho{
    filter: invert(1)
}

textarea{
    background-color: var(--bg)
}

/*Sidebar*/
.xvb8j5{
    border-right: none;
}

._ad7x,._ad8j,._aa61{
    background: var(--bg3);
    border-bottom-style: none;
}

._aba8{
    border-bottom: none;
}

._aawf{
    width: 90%;
}

._aauy{
    border-radius: 20px;
}

/*Individual Post*/
    ._aatg ._aasi,._aasx,._ab0-._ab10 ._aepp,._ab0- ._aaz3 /*header*/{
        background-color: var(--bg);
        border: none;
    }

    ._aatg._aati ._aasi,._ab0-._ab10 ._aaz4 /*header border*/{
        border-left: none;
    }

    ._aatg._aati ._aasx{
        border-left: none;
    }

   ._aad7/*description*/{
        color: var(--text-dark2);
    }

._ae1h, ._ae2q /*background fix when looking at comments*/{
    background-color: var(--bg)
}

._ae3w{
    border-left: none;
}

._ae47,._ae3y{
    border-top: none;
}

a /*hashtags and links*/{
    color: var(--text)
}

    ._aatg ._aasi{
        border-bottom: none;
    }

    ._aatg ._aat0,._aatg._aati ._aaso,._aaoe,._ab0- ._aaz9{
        border-top: none;
    }
    .oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl._acan._acao._acat._acaw._a6hd, ._ac6f,._aacl._aaco._aacw._aad6._aade/*header text*/{
        color: var(--text);
    }

._ablz /*text area*/{
    color: var(--text-dark2);
}

._a9--:hover/*menu*/{
    background-color: var(--bg3);
    transition: .1s;
}

._a9_1 /*menu text*/{
    color: var(--text-dark)
}

._ab0q /*liked by profile icons*/{
    border-color: var(--bg)
}

._aasi,._aatk/*small resolution fix*/{
    background-color: var(--bg)
}

._aaqn,._aaqn:visited /*music in post*/{
    color: var(--text-dark);
}


/*Post Insights - With contributions from Alipoodle*/
div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div /* Insight notice regarding regions */{
    background: var(--bg2) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div span /* Insight notice regarding regions - Text */{
    color: var(--text) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(2) /*remove border*/{
    background: var(--bg2) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div span[style*="cursor: pointer;"] /* Learn More link */ {
    color: var(--accent) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w [data-bloks-name="ig.components.Icon"] /* Insight Icons */ {
    background-color: var(--text-dark) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w [data-bloks-name="bk.components.Text"] /* Insight Text */ {
    color: var(--text) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(4) > div /*remove border*/{
    background: var(--bg2) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w > div > div > div:nth-child(2) > div > div > div:nth-child(6) > div /*remove border*/{
    background: var(--bg2) !important;
}

div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._ab8w._ab94._ab99._ab9f._ab9m._ab9o._ab9w [data-bloks-name="bk.components.Text"][style*="color: rgb(142, 142, 142);"] /*text hierarchy*/{
    color: var(--text-dark2) !important;
}

/*Reels*/
._aiiy{
    border: none;
}

/*Menu*/
._a9--, ._aas-{
    background-color: var(--bg2);
}

._a9--,._aas-/*menu*/{
    border-bottom: none;
    border-top: none;
}

.f0dnt3l3,.x7r02ix /*popup boxes*/{
    background-color: var(--bg2);
}

/*Direct Messages*/
._ab8j._ab8l._ab8w._ab94._ab99._ab9h._ab9k._ab9o._ab9s._abcm /*message width*/{
        max-width: 999999999px !important;
    border: none;
    }

._abyb::before{
    border-bottom: none;
}

    ._aa5b /*padding fix*/{
        padding: 0px;
    }

    ._abyb::before /*primary and general border*/{
        border-bottom: none;
    }

    ._acrb /*message box*/{
        background-color: var(--bg3)
    }

    ._aa61 /*emoji picker*/{
    background-color: var(--bg3);
    }

    ._aa62 /*emoji picker gradient*/{
        background: linear-gradient( to bottom, rgba(34, 34, 34, 0) 0%, rgb(34,34,34) 100% )
}
        ._aa5_ /*emoji picker arrow*/{
            background: var(--bg3) !important;
            border: none;
    }

   ._ac1q {
        background: var(--accent) !important;
}


/*    ._ac1q *sent messages - This is me trying to test gradients like in the mobile app, but to no success*{
        background-image: linear-gradient(to bottom, #a205bd ,#1480f7) !important;
}

*/

    ._ac1q:hover{
	    background: #1EBAFF !important;
        transition: .2s;
    }

._aacx,._aadf{
    text-shadow: 0px 0px 7px rgba(0,0,0,0.5)
}

._aadf{
    color: var(--text-dark)
}

    ._ac1r /*recieved messages*/{
        background: var(--bg3)
    }

    ._ac1r:hover{
        background: var(--item)
    }

    ._abwa /*message options*/{
        background-color: var(--bg3)
    }

    ._ac15 /*replying*/{
        border-top: none;
    }

    .qg4pu3sx /*reactions background*/{
        background-color: var(--bg2);
    }

     ._ac76 /*reactions heading*/{
        border-bottom:none;
    }

    ._ac78 /*reactions text*/{
        color: var(--text)
    }

    ._aada /*reactions body, also controls many secondary text elements*/{
        color: var(--text-dark2);
    }

    ._aacx /*New message names*/{
        color: var(--text);
    }

    ._abm4:hover /*hover item*/{
        background-color: var(--item);
        transition: .1s;
    }

    ._aag-{
        border-bottom: none;
    }

    ._aaie /*new message textbox*/{
        color: var(--text-dark2);
    }

     ._ab8p /*share names*/{
        background-color: var(--multi-select);
    }

._aaie{
    border-radius: 50px
}

    ._aa5a /*general messages*/{
        filter:invert(1);
    }

._aa4j /*header*/{
	    backdrop-filter: blur(12px) !important;
        background-color: #000000cc !important;
        border-bottom: none !important;
    }

._ab5x /*translucent fix*/{
    padding-top: 0
}

._abyc /*temp padding fix*/{
    padding-left: 20px;
}

._ab8o,._abm4:hover /*Selected account*/{
    border-radius: 20px
}

/*Create Post*/
    ._abg0 /*selected button*/{
        background: var(--item);
    }

    ._abmb /*background*/{
        background-color: var(--bg);
    }

    ._aagd /*tab text*/{
        color: var(--text);
    }

    ._aage /*tab underline*/{
        border-bottom: 1px solid #fff;
    }

    ._ac2v /*left border*/{
        border-left: none;
    }

    ._abgh,._abm8{
        border-top: none;
    }

    ._aaie._aaif._aaig._aaid._aaiq.focus-visible{
        color: var(--text-dark2) !important;
    }

.bixrwtb6,.p9wrh9lq{
    filter: invert(1);
}

._acm- /*hashtag selector*/{
    background-color: var(--item);
    border-bottom: none;
}

._acm_ {
    background-color: var(--bg3)
}

._acmx{
    border-bottom: none;
}

._acmu{
    color: var(--text)
}

._ac2y::-webkit-slider-thumb {
    background: var(--text);
}

/*sign in*/
    .sp_jY02qVAhKr8.sx_48f333 /*logo*/{
        filter:invert(1);
}

    ._ab21._ab22._ab23 /*background*/{
        background-color: var(--bg2)
}

    ._aahe:checked~._aahg::before /*check*/{
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
}

    ._aa5k,._aa5o/*text boxes*/{
        background: var(--bg3) !important;
        border: none;
}

    ._aa49 ._aa4b/*text colour*/{
        color: var(--text);
    }

    ._acao._acat, a._acao._acat, a._acao._acat:visited,._aa8q /*show password button*/{
        color: var(--text);
    }

._aa48 ._aa4b{
    caret-color: var(--text);
}

._ab2y, ._ab2y:hover, ._ab2y:active,._ab2y:visited{
    color: var(--accent);
}

.swB58{
    color: var(--text);
}

div._ab8w._ab94._ab99._ab9f._ab9m._ab9p._abal._abc5._abcm > div > i {
    filter:invert(1)
}

/*Logged out*/
.gr27e /*elevated boxes*/{
    background-color: var(--none);
    border: none;
}

.izU2O,.b_nGN /*text*/{
    color: var(--text-dark2)
}

._2Lks6, ._2Lks6:hover, ._2Lks6:active, ._2Lks6:visited,.KPnG0 /*links fix*/{
    color: var(--accent)
}

._2hvTZ,._9GP1n /*text inputs*/{
    background: var(--bg3);
    border: none;
    color: var(--text);
    caret-color: var(--text);
}

.yWX7d._8A5w5, a.yWX7d._8A5w5, a.yWX7d._8A5w5:visited{
    color: var(--text);
}

/*Forgot Password*/
.coreSpriteLockSmall /*lock icon*/{
    filter: invert(1);
}

.tHaIX{
    background-color: var(--bg2);
    border: none;
}

/*Explore*/
    ._aaqh /*arrow*/{
        background: var(--bg3);
    }

/*Stories*/
    ._ac0e /*background*/{
        background: var(--bg);
    }

._ac0k /*top shadow*/{
    background: linear-gradient( 180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 100% )
}

._ac11 /*bottom shadow*/{
    background: linear-gradient( 180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .6) 100% )
}

/*Profile*/
   ._ac2d /*post hover animation*/{
        transition: .1s !important;
    }

._aa-g{
    border-top: none;
}

._aa__ /*suggested accounts*/{
    border: none;
}

._acj1 /*suggested accounts background*/{
    background: var(--bg2)
}

._aap3 /*remove border from hover*/{
    box-shadow: none;
}

._acat, a._acat, a._acat:visited /*remove followers*/{
    color: var(--text);
}

._aacz,._aabs,._aabs:visited /*following account text*/{
    color: var(--text)
}

._acbw /*tab bottom bar*/{
    border-bottom: 1px solid var(--text);
}

._aabo /*not following hashtags circle*/{
    border: 1.5px solid var(--text)
}

._aa-r /*NO POSTSS? (megamind meme)*/{
    color: var(--text)
}

._aa-s /*decription for NO POSTSS?*/{
    color: var(--text-dark2)
}

/*Saved Posts*/
._aavc /*gradient fix*/{
    background-image: linear-gradient( to top, rgba(0, 0,0, .6), rgba(0, 0, 00, 0) )
}

._aavb{
    border: none;
}

._aav7,._aav8,._aav9,._aava /*border removal*/{
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: none;
}

._9zlg /*no saves icon*/{
    filter: invert(1);
}

._aaic /*Create new collection text box*/{
    background: var(--item);
    border: none;
}

.x1wzhzgj{
    border-top: none;
}

/*Footer*/
select /*language selector*/{
    background-color: var(--bg);
    color: var(--text);
}

/*Settings (Legacy)*/
.PVkFi{
    background-color: var(--bg2);
}

.kHYQv{
    color: var(--text);
}

.JLJ-B{
    background-color: var(--bg3);
    border: none;
    color: var(--text-dark2);
}

.JLJ-B:focus, .p7vTm:focus, .yg1DH:focus {
    border: 2px solid #333 !important;
}

.wW1cu{
    background-color: var(--bg);
    border-right: none;
}

.sxIVS{
    color: var(--text);
}

.BvMHM{
    border: 1px solid #333;
}

.h-aRd, .h-aRd:visited, .h-aRd:hover, .h-aRd:active{
    color: var(--text);
}

.-HRM-{
    border-left-color: var(--text);
}

.fuQUr:hover{
    background-color: var(--bg3);
    transition: .1s;
}

.p7vTm{
    background-color: var(--bg3);
    border: none;
    color: var(--text-dark2);
}

.F0B8Y{
    background-color: var(--bg3);
    border: none;
    color: var(--text-dark2);
}

.AC7dP{
    color: var(--text-dark2);
}

.tlZCJ:checked~.mwD2G::before{
    border-left: 2px solid var(--text);
    border-bottom: 2px solid var(--text);
}

.RO68f{
    background-color: var(--bg3);
    border: none;
    color: var(--text);
}

.QXEMa, .kHYQv{
    color: var(--text);
}

._9MPbZ{
    color: var(--text) !important;
    border-bottom: 1px solid var(--text);
}

.PLphk{
    color: var(--text);
}

.nsKSz{
    color: var(--text);
}

.KVrxL{
    color: var(--text-dark2);
}

.SZRPf{
    color: var(--text-dark2);
}

.CcMMZ{
    color: var(--text-dark2);
}

.ufStW{
    color: var(--text);
}

.oxbtc{
    color: var(--text);
}

.JKd3m{
    color: var(--text-dark2);
}

.vlbOS{
    color: var(--text-dark2);
}

.P5eiA{
    background-color: var(--bg3);
    border: none;
    color: var(--text-dark2);
}

.coreSpriteKeyhole{
    filter: invert(1);
}

.olLwo{
    color: var(--text);
}

.leaflet-popup-content-wrapper, .leaflet-popup-tip{
    background-color: var(--bg3);
}

.glyphsSpriteError__outline__24__grey_9{
    filter: invert(1);
}

.glyphsSpriteLocation__outline__24__grey_9, .glyphsSpriteLock__outline__24__grey_9{
    filter: invert(1);
}

.wpHm3{
    background-color: var(--bg);
}

    .UDpcu,.x-Vyw,.vdqkn,.vfoLd{
        background-color: var(--bg)
    }

    ._6zPK7 /*ewwww meta ewwwww eww ew ew ewwww ewwwwww fuck meta*/{
        background-color: var(--bg)
    }

    .UDpcu,.x-Vyw,.vdqkn,.vfoLd,.DPiy6{
        background-color: var(--bg)
    }

/*Header (Legacy)*/
._lz6s,.Hz2lF /*Header*/{
	backdrop-filter: blur(12px) !important;
    background-color: #000000cc !important;
    border-bottom: none !important;
}

.pbgfb.Di7vw,.LWmhU._0aCwM,.XTCLo,.pbgfb,.cTBqC /*Search Bar*/{
    background: var(--bg3) !important;
    border: none !important;
    border-radius: 7px !important;
}

    ._0aCwM,.QY4Ed /*search bar width*/{
        width: 600px !important;
    }

.LWmhU{
    max-width: 40vw !important;
    width: 1200px;
    min-width: 0vw !important;
}

.MWDvN{
    max-width: 90vw !important;
}

._8-yf5 /*legacy icon fix*/{
    fill: #fff !important
}


/*Add birthday popup*/
._1MP5K /*background*/{
    background-color: var(--bg)
}

.s4Iyt,.glyphsSpriteBirthday_cake /*Instagram logo and birthday cake*/{
    filter: invert(1)
}

.AHCwU, .x-Vyw, .vdqkn, .DPiy6,._1XyCr /*elevated box*/{
    background-color: var(--bg2);
    border: none;
}

.KV-D4,.m82CD,.HoLwm{
    color: var(--text)
}

.h144Z /*selection boxes*/{
    background: var(--item);
    border: none;
    color: var(--text) !important;
}

.tkIXv,.eiUFA,.aOOlW /*border removal*/{
    border-top: none;
    border-bottom: none;
}

/*Account directory*/
.GBPOY{
    background-color: var(--bg);
    border: none;
}

._7kTyW, ._7kTyW:visited{
    color: var(--text);
}

/*Account locked*/
div._0lGlC{
    color: var(--text);
}

.v2bgO{
    background-color: var(--bg2) !important;
    color: var(--text);
}

.yPuYu{
    border-top: 2px solid #fff;
}

/*Well congrats, you made it to the end, have a cookie*/
        */
    `);
})();
(function() {
    'use strict';

    // Define the emoji mappings
    const emojiMap = {
        ':sob:': '😭',
        ':joy:': '😂',
        ':skull:': '💀',
        ':heart:': '❤️',
        ':smile:': '😊',
        ':laugh:': '😂',
        ':wink:': '😉',
        ':thumbsup:': '👍',
        ':thumbsdown:': '👎',
        ':clap:': '👏',
        ':pray:': '🙏',
        ':fire:': '🔥',
        ':100:': '💯',
        ':money:': '💰',
        ':gift:': '🎁',
        ':clock:': '🕒',
        ':beer:': '🍺',
        ':pizza:': '🍕',
        ':hamburger:': '🍔',
        ':icecream:': '🍦',
        ':sunglasses:': '😎',
        ':thinking:': '🤔',
        ':sweat:': '😓',
        ':muscle:': '💪',
        ':heart_eyes:': '😍',
        ':star:': '⭐️',
        ':book:': '📚',
        ':envelope:': '✉️',
        ':phone:': '📱',
        ':computer:': '💻',
        ':globe:': '🌎',
        ':sun:': '☀️',
        ':rain:': '🌧️',
        ':snow:': '❄️',
        ':moon:': '🌙',
        ':spider:': '🕷️',
        ':snake:': '🐍',
        ':tiger:': '🐯',
        ':elephant:': '🐘',
        ':dog:': '🐶',
        ':cat:': '🐱',
        ':rabbit:': '🐰',
        ':bear:': '🐻',
        ':unicorn:': '🦄',
        ':dragon:': '🐲',
        ':octopus:': '🐙',
        ':fish:': '🐟',
        ':whale:': '🐳',
        ':penguin:': '🐧',
        ':bird:': '🐦',
        ':butterfly:': '🦋',
        ':flower:': '🌺',
        ':tree:': '🌳',
        ':mountain:': '⛰️',
        ':beach:': '🏖️',
        ':cityscape:': '🏙️',
        ':nails:': '💅',
        ':respect:':'🫡',
        ':wave:': '👋',
        ':inlove:':'🥰',
        ':heart2:':'💕',
        ':broken_heart:':'💔',
        ':kiss:':'👩‍❤️‍💋‍👨',
        ':heart_arrow:':'💘',
    };
    // Watch for keypress events on the document object
    document.addEventListener('keydown', function(event) {
        // Check if the keypress was triggered in an input element
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            const messageInput = event.target;

            // Replace :sob:, :joy:, and :skull: with their corresponding emojis
            Object.entries(emojiMap).forEach(([emojiStr, emoji]) => {
                messageInput.value = messageInput.value.replace(new RegExp(emojiStr, 'g'), emoji);
            });

                }
    });
})();
