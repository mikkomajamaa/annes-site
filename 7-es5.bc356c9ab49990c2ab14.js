function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{YymU:function(t,n,e){"use strict";e.r(n);var i,o,a,c=e("tyNb"),r=e("ofXK"),s=e("fXoL"),b=e("/MXm"),l=e("XiUz"),u=((a=function(){function t(n){_classCallCheck(this,t),this.translationsService=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.I18nSubscription=this.translationsService.I18n.subscribe((function(n){t.I18n=n}))}},{key:"ngOnDestroy",value:function(){this.I18nSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||a)(s.Pb(b.a))},a.\u0275cmp=s.Jb({type:a,selectors:[["app-home"]],decls:8,vars:2,consts:[["fxLayout","row wrap","fxLayoutAlign","center"],["fxFlex","15"],["fxFlex","70",2,"text-align","center"],["src","../../../assets/Anne_Puronmaa.jpg","alt","Anne Puronmaa","fxFlex","nogrow",1,"img"]],template:function(t,n){1&t&&(s.Vb(0,"h1"),s.Dc(1),s.Ub(),s.Vb(2,"div",0),s.Qb(3,"span",1),s.Vb(4,"div",2),s.Dc(5),s.Ub(),s.Qb(6,"span",1),s.Qb(7,"img",3),s.Ub()),2&t&&(s.Cb(1),s.Ec(n.I18n.home),s.Cb(4),s.Fc(" ",n.I18n.home_content," "))},directives:[l.f,l.e,l.b],styles:[".img[_ngcontent-%COMP%]{width:30vw;height:auto;margin:15px 0}@media screen and (max-width:768px){.img[_ngcontent-%COMP%]{width:80vw;height:auto}}"]}),a),f=((o=function(){function t(){_classCallCheck(this,t),this.instagramLink="https://www.instagram.com/annesusanna_"}return _createClass(t,[{key:"openIg",value:function(){window.open("https://www.instagram.com/annesusanna_","_blank")}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275prov=s.Lb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),p=((i=function(){function t(n,e){_classCallCheck(this,t),this.translationsService=n,this.redirectService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.I18nSubscription=this.translationsService.I18n.subscribe((function(n){t.I18n=n}))}},{key:"openIg",value:function(){this.redirectService.openIg()}},{key:"mail",value:function(){window.location.href="mailto:anne"}},{key:"ngOnDestroy",value:function(){this.I18nSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||i)(s.Pb(b.a),s.Pb(f))},i.\u0275cmp=s.Jb({type:i,selectors:[["app-contact"]],decls:24,vars:4,consts:[[1,"contact-wrapper"],[1,"phone"],[1,"contact-info"],[1,"clickable",3,"click"],[1,"fa","fa-envelope"],[1,"clickable","ig",3,"click"],[1,"fa","fa-instagram"]],template:function(t,n){1&t&&(s.Vb(0,"div",0),s.Qb(1,"br"),s.Vb(2,"h1"),s.Dc(3),s.Ub(),s.Qb(4,"br"),s.Vb(5,"p"),s.Dc(6),s.Ub(),s.Vb(7,"div",1),s.Vb(8,"p",2),s.Dc(9,"+358 40 218 8744"),s.Ub(),s.Ub(),s.Qb(10,"br"),s.Vb(11,"p"),s.Dc(12),s.Ub(),s.Vb(13,"div",3),s.dc("click",(function(t){return n.mail()})),s.Qb(14,"i",4),s.Vb(15,"p",2),s.Dc(16,"\xa0annehyvonen@hotmail.com"),s.Ub(),s.Ub(),s.Qb(17,"br"),s.Vb(18,"p"),s.Dc(19),s.Ub(),s.Vb(20,"div",5),s.dc("click",(function(t){return n.openIg()})),s.Qb(21,"i",6),s.Vb(22,"p",2),s.Dc(23,"\xa0Annesusanna_"),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Cb(3),s.Ec(n.I18n.contact),s.Cb(3),s.Ec(n.I18n.phone),s.Cb(6),s.Ec(n.I18n.email),s.Cb(7),s.Ec(n.I18n.some))},styles:[".contact-wrapper[_ngcontent-%COMP%]{text-align:center;overflow:hidden}.clickable[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{border-radius:2px;font-size:20px;line-height:35px;-webkit-transition:all .25s;transition:all .25s;font-weight:700}.clickable[_ngcontent-%COMP%]:hover, .phone[_ngcontent-%COMP%]:hover{transform:scale(1.1);-webkit-transform:scale(1.1);cursor:pointer}.phone[_ngcontent-%COMP%]:hover{cursor:auto}.contact-info[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.contact-info[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{display:inline}.ig[_ngcontent-%COMP%]{margin-bottom:15px}"]}),i);function g(t,n){if(1&t&&(s.Vb(0,"div",5),s.Dc(1),s.Ub()),2&t){var e=s.hc();s.Cb(1),s.Fc(" ",e.I18n.cv_content,"\n")}}var d,h=((d=function(){function t(n){_classCallCheck(this,t),this.translationsService=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.I18nSubscription=this.translationsService.I18n.subscribe((function(n){t.I18n=n})),this.langSubscription=this.translationsService.lang.subscribe((function(n){t.language=n}))}},{key:"ngOnDestroy",value:function(){this.I18nSubscription.unsubscribe(),this.langSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||d)(s.Pb(b.a))},d.\u0275cmp=s.Jb({type:d,selectors:[["app-cv"]],decls:159,vars:1,consts:[["class","note",4,"ngIf"],["fxLayout","row",1,"container"],["fxFlex",""],["fxFlex","70"],[1,"space"],[1,"note"]],template:function(t,n){1&t&&(s.Vb(0,"h1"),s.Dc(1,"CV"),s.Ub(),s.Cc(2,g,2,1,"div",0),s.Vb(3,"div",1),s.Qb(4,"span",2),s.Vb(5,"table",3),s.Vb(6,"tr"),s.Vb(7,"td"),s.Dc(8,"CV"),s.Ub(),s.Vb(9,"td"),s.Dc(10,"Anne Puronmaa s. 04.08.1968"),s.Ub(),s.Ub(),s.Vb(11,"tr",4),s.Vb(12,"td"),s.Dc(13,"Taidekoulutus:"),s.Ub(),s.Vb(14,"td"),s.Dc(15,"Sis\xe4l\xe4hetysseuran opisto, taito- ja taideaineiden linja 1997-1998"),s.Ub(),s.Ub(),s.Vb(16,"tr"),s.Qb(17,"td"),s.Vb(18,"td"),s.Dc(19,"Etel\xe4-Karjalan ammattikorkeakoulu, kuvataiteen yksikk\xf6 2003-2007"),s.Ub(),s.Ub(),s.Vb(20,"tr",4),s.Vb(21,"td"),s.Dc(22,"Yhteisn\xe4yttelyt:"),s.Ub(),s.Vb(23,"td"),s.Dc(24,"Pieks\xe4m\xe4en kuvataideseuran vuosin\xe4yttely 1999"),s.Ub(),s.Ub(),s.Vb(25,"tr"),s.Qb(26,"td"),s.Vb(27,"td"),s.Dc(28,"Wanhat Weturitallit, Pieks\xe4m\xe4ki 2000"),s.Ub(),s.Ub(),s.Vb(29,"tr"),s.Qb(30,"td"),s.Vb(31,"td"),s.Dc(32,"Varkauden taidemuseo 2000"),s.Ub(),s.Ub(),s.Vb(33,"tr"),s.Qb(34,"td"),s.Vb(35,"td"),s.Dc(36,"PAND-rauhankulkuen\xe4yttely, Helsinki 2002"),s.Ub(),s.Ub(),s.Vb(37,"tr"),s.Qb(38,"td"),s.Vb(39,"td"),s.Dc(40,"Imatran kaupunginteatteri, Imatra 2005"),s.Ub(),s.Ub(),s.Vb(41,"tr"),s.Qb(42,"td"),s.Vb(43,"td"),s.Dc(44,"Stockforss, Pyht\xe4\xe4 2006"),s.Ub(),s.Ub(),s.Vb(45,"tr"),s.Qb(46,"td"),s.Vb(47,"td"),s.Dc(48,"Imatran taidemuseo, Imatra 2007"),s.Ub(),s.Ub(),s.Vb(49,"tr"),s.Qb(50,"td"),s.Vb(51,"td"),s.Dc(52,"Kaapelitehdas, Helsinki 2007"),s.Ub(),s.Ub(),s.Vb(53,"tr"),s.Qb(54,"td"),s.Vb(55,"td"),s.Dc(56,"Taidetalo Kalliopeia, Savonlinna 2007"),s.Ub(),s.Ub(),s.Vb(57,"tr"),s.Qb(58,"td"),s.Vb(59,"td"),s.Dc(60,"Taidekeskus Salmela 2008"),s.Ub(),s.Ub(),s.Vb(61,"tr"),s.Qb(62,"td"),s.Vb(63,"td"),s.Dc(64,"Taidekeskus Salmela 2009"),s.Ub(),s.Ub(),s.Vb(65,"tr"),s.Qb(66,"td"),s.Vb(67,"td"),s.Dc(68,"USA, kiert\xe4v\xe4 n\xe4yttely Atlantan alueella 2009"),s.Ub(),s.Ub(),s.Vb(69,"tr"),s.Qb(70,"td"),s.Vb(71,"td"),s.Dc(72,"Imatran taidemuseo 2010"),s.Ub(),s.Ub(),s.Vb(73,"tr"),s.Qb(74,"td"),s.Vb(75,"td"),s.Dc(76,"Human Culture Imatra 2010"),s.Ub(),s.Ub(),s.Vb(77,"tr"),s.Qb(78,"td"),s.Vb(79,"td"),s.Dc(80,"Taidekeskus Salmela 2013"),s.Ub(),s.Ub(),s.Vb(81,"tr"),s.Qb(82,"td"),s.Vb(83,"td"),s.Dc(84,"Taidekeskus Antares 2015"),s.Ub(),s.Ub(),s.Vb(85,"tr"),s.Qb(86,"td"),s.Vb(87,"td"),s.Dc(88,"Katariina, Lappeenrannan linnoitus 2015"),s.Ub(),s.Ub(),s.Vb(89,"tr"),s.Qb(90,"td"),s.Vb(91,"td"),s.Dc(92,"5000 m2 Lappeenranta 2016"),s.Ub(),s.Ub(),s.Vb(93,"tr"),s.Qb(94,"td"),s.Vb(95,"td"),s.Dc(96,"Vihre\xe4 makasiini, Lappeenrannan linnoitus 2016"),s.Ub(),s.Ub(),s.Vb(97,"tr",4),s.Vb(98,"td"),s.Dc(99,"Teoksia kokoelmissa:"),s.Ub(),s.Vb(100,"td"),s.Dc(101,"Henna ja Pertti Niemist\xf6 nykytaiteen kokoelma"),s.Ub(),s.Ub(),s.Vb(102,"tr"),s.Qb(103,"td"),s.Vb(104,"td"),s.Dc(105,"Merikaarinan Sy\xf6p\xe4yhdistys, Turku"),s.Ub(),s.Ub(),s.Vb(106,"tr"),s.Qb(107,"td"),s.Vb(108,"td"),s.Dc(109,"Etel\xe4-Karjalan Ammattikorkeakoulu"),s.Ub(),s.Ub(),s.Vb(110,"tr"),s.Qb(111,"td"),s.Vb(112,"td"),s.Dc(113,"M\xe4ntyharjun kunta"),s.Ub(),s.Ub(),s.Vb(114,"tr"),s.Qb(115,"td"),s.Vb(116,"td"),s.Dc(117,"Etel\xe4-Karjalan taidemuseo"),s.Ub(),s.Ub(),s.Vb(118,"tr"),s.Qb(119,"td"),s.Vb(120,"td"),s.Dc(121,"H\xe4meenlinnan taidemuseo"),s.Ub(),s.Ub(),s.Vb(122,"tr"),s.Qb(123,"td"),s.Vb(124,"td"),s.Dc(125,"Suomen Sis\xe4l\xe4hetysseuran opisto"),s.Ub(),s.Ub(),s.Vb(126,"tr"),s.Qb(127,"td"),s.Vb(128,"td"),s.Dc(129,"Imatran Taidemuseo"),s.Ub(),s.Ub(),s.Vb(130,"tr"),s.Vb(131,"td",4),s.Dc(132,"J\xe4senyydet:"),s.Ub(),s.Vb(133,"td"),s.Dc(134,"Taidemaalariliitto, kokelasj\xe4sen"),s.Ub(),s.Ub(),s.Vb(135,"tr"),s.Qb(136,"td"),s.Vb(137,"td"),s.Dc(138,"Etel\xe4-karjalan Taiteilijaseura ry hallituksen j\xe4sen 2015-"),s.Ub(),s.Ub(),s.Vb(139,"tr"),s.Qb(140,"td"),s.Vb(141,"td"),s.Dc(142,"Kuvasto"),s.Ub(),s.Ub(),s.Vb(143,"tr",4),s.Vb(144,"td"),s.Dc(145,"Apurahat:"),s.Ub(),s.Vb(146,"td"),s.Dc(147,"Kaakkois-Suomen taidetoimikunta, ty\xf6skentelyapuraha \xbd v. 2009"),s.Ub(),s.Ub(),s.Vb(148,"tr"),s.Qb(149,"td"),s.Vb(150,"td"),s.Dc(151," Suomen Kulttuurirahaston Etel\xe4-Karjalan rahasto, ty\xf6skentelyapuraha 1v. 2010 "),s.Ub(),s.Ub(),s.Vb(152,"tr"),s.Qb(153,"td"),s.Qb(154,"td"),s.Ub(),s.Vb(155,"tr"),s.Qb(156,"td"),s.Qb(157,"td"),s.Ub(),s.Ub(),s.Qb(158,"span",2),s.Ub()),2&t&&(s.Cb(2),s.mc("ngIf","en"==n.language))},directives:[r.t,l.f,l.b],styles:["*[_ngcontent-%COMP%]{font-family:Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace}td[_ngcontent-%COMP%]{vertical-align:top;text-align:left}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:25px 10px}tr.space[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding-top:25px}td[_ngcontent-%COMP%]{max-width:435px}.note[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{margin-bottom:15px}.container[_ngcontent-%COMP%]{overflow:auto}.note[_ngcontent-%COMP%]{text-align:center;width:100%}"]}),d),m=e("1G5W"),v=e("hFS5"),C=e("u7/l");function y(t,n){if(1&t){var e=s.Wb();s.Vb(0,"a",5),s.dc("click",(function(t){s.vc(e);var i=n.$implicit;return s.hc().onSubGallerySelected(i._id)})),s.Dc(1),s.Ub()}if(2&t){var i=n.$implicit,o=s.hc();s.mc("routerLink",i.en.toLowerCase()),s.Cb(1),s.Ec("fi"===o.language?i.fi:i.en)}}var _,k=((_=function(t){function n(t,e,i,o){var a;return _classCallCheck(this,n),(a=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this))).translationsService=t,a.route=e,a.router=i,a.facade=o,a.subGalleries$=a.facade.selectSubGalleries(),a.selectedSubGallery$=a.facade.getSelectedSubGallery(),a}return _inherits(n,t),_createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.facade.subGalleriesRequested("https://annes-gallery.s3.eu-north-1.amazonaws.com/sub_gallery_data.json"),this.translationsService.I18n.pipe(Object(m.a)(this.ngUnsubscribe)).subscribe((function(n){t.I18n=n})),this.translationsService.lang.pipe(Object(m.a)(this.ngUnsubscribe)).subscribe((function(n){t.language=n})),this.selectedSubGallery$.pipe(Object(m.a)(this.ngUnsubscribe)).subscribe((function(n){n&&"/gallery"===t.router.routerState.snapshot.url&&t.router.navigate([n.en],{relativeTo:t.route})}))}},{key:"onSubGallerySelected",value:function(t){this.facade.selectSubGallery(t)}}]),n}(v.a)).\u0275fac=function(t){return new(t||_)(s.Pb(b.a),s.Pb(c.a),s.Pb(c.c),s.Pb(C.a))},_.\u0275cmp=s.Jb({type:_,selectors:[["app-gallery"]],features:[s.zb],decls:13,vars:9,consts:[["fxLayout","row wrap"],["fxFlex.xs","100","fxLayoutAlign.xs","center",1,"sub-gallery-nav"],["fxLayout","column"],["routerLinkActive","active",3,"routerLink","click",4,"ngFor","ngForOf"],["fxFlex","100"],["routerLinkActive","active",3,"routerLink","click"]],template:function(t,n){1&t&&(s.Vb(0,"h1"),s.Dc(1),s.Ub(),s.Vb(2,"h2"),s.Dc(3),s.ic(4,"async"),s.ic(5,"async"),s.Ub(),s.Vb(6,"div",0),s.Vb(7,"div",1),s.Vb(8,"div",2),s.Cc(9,y,2,2,"a",3),s.ic(10,"async"),s.Ub(),s.Ub(),s.Vb(11,"div",4),s.Qb(12,"router-outlet"),s.Ub(),s.Ub()),2&t&&(s.Cb(1),s.Ec(n.I18n.gallery),s.Cb(2),s.Ec(s.jc(4,3,n.selectedSubGallery$)?s.jc(5,5,n.selectedSubGallery$)[n.language]:""),s.Cb(6),s.mc("ngForOf",s.jc(10,7,n.subGalleries$)))},directives:[l.f,l.b,l.e,r.s,c.h,c.f,c.e],pipes:[r.b],styles:["*[_ngcontent-%COMP%]{font-family:Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace}.sub-gallery-nav[_ngcontent-%COMP%]{position:fixed}.topnav[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.topnav[_ngcontent-%COMP%]{overflow:hidden}a[_ngcontent-%COMP%]{display:inline-block;color:#807c7c;padding:7px 16px;text-decoration:none;font-size:14px;outline:none;min-width:80px}a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{font-weight:700}.hover-shadow[_ngcontent-%COMP%]{margin:auto;width:100px;height:100px;background-color:red}.img[_ngcontent-%COMP%]{width:30vw;height:auto}.wide[_ngcontent-%COMP%]{margin-right:20px}.img-container[_ngcontent-%COMP%]{margin-bottom:20px}@media screen and (max-width:600px){.img[_ngcontent-%COMP%]{width:80vw;height:auto}.sub-gallery-nav[_ngcontent-%COMP%]{position:static;margin-bottom:32px}}"]}),_),O=e("NFeN");function P(t,n){1&t&&(s.Vb(0,"mat-icon",7),s.Dc(1,"menu"),s.Ub())}function U(t,n){1&t&&(s.Vb(0,"mat-icon",7),s.Dc(1,"close"),s.Ub())}var x,V,w,M=((w=function(){function t(n){_classCallCheck(this,t),this.translationsService=n,this.images=[{src:"./assets/uk.png",alt:"uk"},{src:"./assets/fi.png",alt:"fi"}],this.image=this.images[0],this.open=!1,this.myClass="topnav"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.I18nSubscription=this.translationsService.I18n.subscribe((function(n){t.I18n=n}))}},{key:"toggleLanguage",value:function(){this.translationsService.toggleLanguage(),this.image=this.image==this.images[0]?this.images[1]:this.images[0]}},{key:"toggleNavbar",value:function(){this.open=!0!==this.open,this.myClass="topnav"===this.myClass?"topnav responsive":"topnav"}},{key:"ngOnDestroy",value:function(){this.I18nSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||w)(s.Pb(b.a))},w.\u0275cmp=s.Jb({type:w,selectors:[["app-navbar"]],decls:14,vars:10,consts:[["routerLink","/home","routerLinkActive","active"],["routerLink","/cv","routerLinkActive","active"],["routerLink","/gallery","routerLinkActive","active"],["routerLink","/contact","routerLinkActive","active"],[1,"flag",3,"src","alt","click"],["href","javascript:void(0);",1,"icon",3,"click"],["style","float:right",4,"ngIf"],[2,"float","right"]],template:function(t,n){1&t&&(s.Vb(0,"div"),s.Vb(1,"a",0),s.Dc(2),s.Ub(),s.Vb(3,"a",1),s.Dc(4),s.Ub(),s.Vb(5,"a",2),s.Dc(6),s.Ub(),s.Vb(7,"a",3),s.Dc(8),s.Ub(),s.Vb(9,"a"),s.Vb(10,"img",4),s.dc("click",(function(t){return n.toggleLanguage()})),s.Ub(),s.Ub(),s.Vb(11,"a",5),s.dc("click",(function(t){return n.toggleNavbar()})),s.Cc(12,P,2,0,"mat-icon",6),s.Cc(13,U,2,0,"mat-icon",6),s.Ub(),s.Ub()),2&t&&(s.Eb(n.myClass),s.Cb(2),s.Ec(n.I18n.home),s.Cb(2),s.Ec(n.I18n.cv),s.Cb(2),s.Ec(n.I18n.gallery),s.Cb(2),s.Ec(n.I18n.contact),s.Cb(2),s.nc("src",n.image.src,s.wc),s.nc("alt",n.image.alt),s.Cb(2),s.mc("ngIf",!n.open),s.Cb(1),s.mc("ngIf",n.open))},directives:[c.f,c.e,r.t,O.a],styles:[".topnav[_ngcontent-%COMP%]{overflow:hidden;text-align:center}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;color:#807c7c;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px;outline:none;min-width:80px}.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-weight:700}.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:none}@media screen and (max-width:600px){.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:none}.topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[_ngcontent-%COMP%]{position:relative;background-color:#efefef;padding-top:47px}.topnav.responsive[_ngcontent-%COMP%], .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{-webkit-transition:all .25s;transition:all .25s}.topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:none;display:block;text-align:left;-webkit-transition:all .25s;transition:all .25s;width:100%}.topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-weight:700}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}}.flag[_ngcontent-%COMP%]{height:14px;width:20px}.flag[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),w),I=((V=function(){function t(n,e,i){_classCallCheck(this,t),this.translationsService=n,this.redirectService=e,this.window=i,this.mainEmail="annehyvonen@hotmail.com",this.devEmail="mikko.majamaa@outlook.com"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.I18nSubscription=this.translationsService.I18n.subscribe((function(n){t.I18n=n})),this.url=this.window.location.hostname}},{key:"openIg",value:function(){this.redirectService.openIg()}},{key:"ngOnDestroy",value:function(){this.I18nSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||V)(s.Pb(b.a),s.Pb(f),s.Pb(Window))},V.\u0275cmp=s.Jb({type:V,selectors:[["app-footer"]],decls:15,vars:5,consts:[[1,"footer-distributed"],[1,"footer-right"],["href","javascript:void(0)",3,"click"],[1,"fa","fa-instagram"],[3,"href"],[1,"fa","fa-envelope"],[1,"footer-left"],[1,"footer-links"],["href","",1,"link-1"],[1,"mail-link",3,"href"]],template:function(t,n){1&t&&(s.Vb(0,"footer",0),s.Vb(1,"div",1),s.Vb(2,"a",2),s.dc("click",(function(t){return n.openIg()})),s.Qb(3,"i",3),s.Ub(),s.Vb(4,"a",4),s.Qb(5,"i",5),s.Ub(),s.Ub(),s.Vb(6,"div",6),s.Vb(7,"p",7),s.Vb(8,"a",8),s.Dc(9),s.Ub(),s.Ub(),s.Vb(10,"p"),s.Dc(11),s.Vb(12,"a",9),s.Dc(13),s.Ub(),s.Dc(14," \xa9 2020 "),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Cb(4),s.oc("href","mailto:",n.mainEmail,"",s.wc),s.Cb(5),s.Ec(n.url),s.Cb(2),s.Fc(" ",n.I18n.implementation,": "),s.Cb(1),s.oc("href","mailto:",n.devEmail,"",s.wc),s.Cb(1),s.Ec(n.devEmail))},styles:['.footer-distributed[_ngcontent-%COMP%]{background-color:#efefef;box-shadow:0 1px 1px 0 rgba(0,0,0,.12);box-sizing:border-box;width:100%;text-align:left;font:normal 16px sans-serif;padding:15px 20px}.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8f9296;font-size:14px;margin:0}.footer-distributed[_ngcontent-%COMP%]   p.footer-links[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#fff;margin:0 0 10px;padding:0;-webkit-transition:.25s ease;transition:.25s ease}.footer-distributed[_ngcontent-%COMP%]   p.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;line-height:1.8;text-decoration:none;color:inherit;-webkit-transition:.25s ease;transition:.25s ease}.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"\xb7";font-size:20px;left:0;color:#fff;display:inline-block;padding-right:5px}.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .link-1[_ngcontent-%COMP%]:before{content:none}.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{float:right;max-width:180px}.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:35px;height:35px;border-radius:2px;font-size:20px;color:#8f9296;text-align:center;line-height:35px;margin-left:3px;-webkit-transition:all .25s;transition:all .25s}.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.1);-webkit-transform:scale(1.1)}.footer-distributed[_ngcontent-%COMP%]   p.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width:599px){.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:center}.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{float:none;margin:0 auto 20px}.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   p.footer-links[_ngcontent-%COMP%]{line-height:1.8}}.link[_ngcontent-%COMP%]:hover{cursor:pointer}*[_ngcontent-%COMP%]{font-family:Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace}.mail-link[_ngcontent-%COMP%]{text-decoration:none;color:inherit;word-wrap:break-word}.mail-link[_ngcontent-%COMP%]:hover{text-decoration:underline}']}),V),D=((x=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||x)},x.\u0275cmp=s.Jb({type:x,selectors:[["app-layout"]],decls:5,vars:0,consts:[[1,"content-wrapper"],["id","main"],["id","footer"]],template:function(t,n){1&t&&(s.Vb(0,"div",0),s.Qb(1,"app-navbar"),s.Vb(2,"div",1),s.Qb(3,"router-outlet"),s.Ub(),s.Qb(4,"app-footer",2),s.Ub())},directives:[M,c.h,I],styles:["*[_ngcontent-%COMP%]{font-family:Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace}.content-wrapper[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}#main[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}#footer[_ngcontent-%COMP%]{width:100%}"]}),x);function S(t,n){if(1&t&&(s.Vb(0,"div",4),s.Qb(1,"img",5),s.Vb(2,"span",6),s.Dc(3),s.Ub(),s.Ub()),2&t){var e=n.$implicit,i=s.hc(2);s.Cb(1),s.nc("src",e.url,s.wc),s.nc("alt","fi"==i.language?e.alt_fi:e.alt_en),s.Cb(2),s.Ec("fi"==i.language?e.alt_fi:e.alt_en)}}function Q(t,n){if(1&t&&(s.Vb(0,"div"),s.Dc(1),s.Ub()),2&t){var e=s.hc(2);s.Cb(1),s.Fc(" ",e.I18n.gallery_empty," ")}}function L(t,n){if(1&t&&(s.Vb(0,"div",1),s.Cc(1,S,4,3,"div",2),s.ic(2,"async"),s.Cc(3,Q,2,1,"div",3),s.ic(4,"async"),s.Ub()),2&t){var e=s.hc();s.Cb(1),s.mc("ngForOf",s.jc(2,2,e.subGallery$).images),s.Cb(2),s.mc("ngIf",0===s.jc(4,4,e.subGallery$).images.length)}}var j,E,F=((E=function(t){function n(t,e){var i;return _classCallCheck(this,n),(i=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this))).translationsService=t,i.facade=e,i.subGallery$=i.facade.getSelectedSubGallery(),i}return _inherits(n,t),_createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.translationsService.I18n.pipe(Object(m.a)(this.ngUnsubscribe)).subscribe((function(n){t.I18n=n})),this.translationsService.lang.pipe(Object(m.a)(this.ngUnsubscribe)).subscribe((function(n){t.language=n}))}}]),n}(v.a)).\u0275fac=function(t){return new(t||E)(s.Pb(b.a),s.Pb(C.a))},E.\u0275cmp=s.Jb({type:E,selectors:[["app-sub-gallery"]],features:[s.zb],decls:2,vars:3,consts:[["fxLayout","row wrap","fxLayoutAlign","center center","fxFill","",4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center center","fxFill",""],["fxFlex","100","class","img-container","fxLayout","column","fxLayoutAlign","center center",4,"ngFor","ngForOf"],[4,"ngIf"],["fxFlex","100","fxLayout","column","fxLayoutAlign","center center",1,"img-container"],["fxFlex","",1,"img",3,"src","alt"],["fxFlex",""]],template:function(t,n){1&t&&(s.Cc(0,L,5,6,"div",0),s.ic(1,"async")),2&t&&s.mc("ngIf",s.jc(1,1,n.subGallery$))},directives:[r.t,l.f,l.e,l.h,r.s,l.b],pipes:[r.b],styles:[".img[_ngcontent-%COMP%]{width:30vw;height:auto}.img-container[_ngcontent-%COMP%]{margin-bottom:20px}@media screen and (max-width:600px){.img[_ngcontent-%COMP%]{width:80vw;height:auto}}"]}),E),T=((j=function(){function t(n){_classCallCheck(this,t),this.translations=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.translationsSubscription=this.translations.I18n.subscribe((function(n){t.I18n=n}))}},{key:"ngOnDestroy",value:function(){this.translationsSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||j)(s.Pb(b.a))},j.\u0275cmp=s.Jb({type:j,selectors:[["app-not-found"]],decls:5,vars:2,consts:[["fxLayout","column","fxFill","","fxLayoutAlign","center center"],["fxFlex","nogrow"],["routerLink","/home"]],template:function(t,n){1&t&&(s.Vb(0,"div",0),s.Vb(1,"p",1),s.Dc(2),s.Ub(),s.Vb(3,"a",2),s.Dc(4),s.Ub(),s.Ub()),2&t&&(s.Cb(2),s.Ec(n.I18n.page_not_found),s.Cb(2),s.Ec(n.I18n.go_home))},directives:[l.f,l.h,l.e,l.b,c.f],styles:[""]}),j),A=e("hGdz");e.d(n,"MainPageModule",(function(){return z}));var G,z=((G=function t(){_classCallCheck(this,t)}).\u0275mod=s.Nb({type:G}),G.\u0275inj=s.Mb({factory:function(t){return new(t||G)},imports:[[c.g.forChild([{path:"",component:D,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:u},{path:"contact",component:p},{path:"cv",component:h},{path:"gallery",component:k,children:[{path:":en",component:F}]},{path:"page-not-found",component:T}]}]),A.a,r.c]]}),G)}}]);