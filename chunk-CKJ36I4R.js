import{a as At}from"./chunk-5ANR4EAJ.js";import{a as gt,b as Vt}from"./chunk-B3XCFFHF.js";import{a as be,b as ye,c as Se,d as Z,e as le,f as pe,g as Te,i as _t}from"./chunk-SAP5YZVS.js";import"./chunk-LLY55UQV.js";import"./chunk-YYKWZG6Q.js";import{a as kt}from"./chunk-OVQSLA4R.js";import{$ as it,$a as m,$b as ke,$f as Re,Ac as ct,Ad as ft,Da as z,Db as $,Ec as ut,Ga as x,Ha as fe,Hg as oe,Ib as e,Ig as G,Jb as ge,Kb as lt,Kc as Et,La as U,Lg as Ce,Ma as ot,Mf as Me,Ne as Tt,Nf as ie,Oa as rt,Oc as xt,Oe as Fe,Og as je,Pb as y,Qa as nt,Qb as S,Rb as b,Re as De,Sc as qe,Sd as vt,Se as Dt,Te as h,Ua as k,Ud as Oe,Vb as _e,Vf as Pt,Wa as q,X as et,Xf as ae,Y as he,Ya as at,Yb as pt,Yd as v,Za as we,Zb as me,_ as tt,_a as Ae,_f as Le,a as de,ab as i,ac as dt,af as ce,b as se,ba as c,bb as t,bd as yt,bf as te,ca as u,cb as r,eg as ue,fg as Ee,hc as mt,hd as St,hf as ze,ic as st,jd as I,ka as H,kg as xe,lb as L,ld as j,md as re,mg as wt,nc as X,nd as N,ne as W,od as Ie,oe as M,pa as Y,pd as g,qd as Q,rb as f,rd as ne,tb as s,ua as Pe,ub as ee,ud as bt,vb as V,vd as Ve,wd as ve,we as Ct,xa as d,xb as F,xe as B,yb as D,yg as J,zb as P,zd as ht}from"./chunk-DS6AOV3O.js";var ro=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],no=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],qt=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-grid"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:no,decls:8633,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","Array<ThfFilterByColumn>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'defaultColumn'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'timepicker'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfFilterByColumn"],["pan","",1,"docs-api-property-type","any"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(ro),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  (t-after-duplicate)="EventEmitter"
  t-aggregates-config="ThfAggregateConfig"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-before-duplicate)="EventEmitter"
  (t-change-aggregates)="EventEmitter"
  (t-change-filter-by-column)="EventEmitter"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-row-state-filter)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  t-components-size="string"
  t-container="boolean"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-column-properties="Array<ThfFilterByColumn>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  t-selectable-removed="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),r(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),r(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>
`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),r(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),r(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),r(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),r(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-dots-three-vertical"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>
`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),r(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),r(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",32)(244,"span",33),e(245," (t-after-duplicate)"),r(246,"br"),t()()(),i(247,"td",23)(248,"code",34),e(249,"EventEmitter"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Evento disparado ap\xF3s concluir o processo de duplica\xE7\xE3o de linha na edi\xE7\xE3o flu\xEDda."),t()()(),i(258,"tr",19)(259,"td",20)(260,"div",21)(261,"span",22),e(262," t-aggregates-config"),r(263,"br"),t()()(),i(264,"td",23)(265,"code",35),e(266,"ThfAggregateConfig"),t()(),i(267,"td",25),e(268,"-"),t(),i(269,"td",26)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Objeto de configura\xE7\xE3o para definir as "),i(275,"strong"),e(276,"op\xE7\xF5es de comportamento e apresenta\xE7\xE3o"),t(),e(277,`
dos totalizadores/agregados (aggregates) da grid.`),t()()(),i(278,"tr",19)(279,"td",20)(280,"div",21)(281,"span",22),e(282," t-aggregates"),r(283,"br"),t()()(),i(284,"td",23)(285,"code",36),e(286,"Array<ThfAggregateDescriptor>"),t()(),i(287,"td",25)(288,"p")(289,"code"),e(290,"[]"),t()()(),i(291,"td",26)(292,"em")(293,"strong"),e(294,"(opcional)"),t()(),i(295,"p"),e(296,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(297,"code"),e(298,"ThfAggregateDescriptor"),t(),e(299,"."),t()()(),i(300,"tr",19)(301,"td",20)(302,"div",21)(303,"span",22),e(304," t-allow-batch-delete"),r(305,"br"),t()()(),i(306,"td",23)(307,"code",24),e(308,"boolean"),t()(),i(309,"td",25)(310,"p")(311,"code"),e(312,"false"),t()()(),i(313,"td",26)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),i(317,"p"),e(318,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(319,"strong"),e(320,"t-service-api"),t(),e(321," e/ou "),i(322,"strong"),e(323,"t-service-delete-api"),t(),e(324,", desde que o servi\xE7o implemente o m\xE9todo "),i(325,"code"),e(326,"deleteBatchItems"),t(),e(327," da interface "),i(328,"code"),e(329,"ThfGridDeleteService"),t(),e(330,"."),t()()(),i(331,"tr",19)(332,"td",20)(333,"div",21)(334,"span",22),e(335,"t-auto-size"),r(336,"br"),t()()(),i(337,"td",23)(338,"code",24),e(339,"boolean"),t()(),i(340,"td",25)(341,"p")(342,"code"),e(343,"false"),t()()(),i(344,"td",26)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(350,"strong"),e(351,"t-resizable"),t(),e(352," esteja habilitada."),t(),i(353,"blockquote")(354,"p"),e(355,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(356,"tr",19)(357,"td",20)(358,"div",21)(359,"span",22),e(360,"t-auto-size-on-scroll"),r(361,"br"),t()()(),i(362,"td",23)(363,"code",24),e(364,"boolean"),t()(),i(365,"td",25)(366,"p")(367,"code"),e(368,"false"),t()()(),i(369,"td",26)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(375,"p"),e(376,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(377,"p"),e(378,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(379,"code"),e(380,"t-page-size-virtual"),t(),e(381," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(382,"blockquote")(383,"p")(384,"strong"),e(385,"Pr\xE9-requisitos"),t(),e(386,": Requer que as propriedades "),i(387,"code"),e(388,"t-auto-size"),t(),e(389,", "),i(390,"code"),e(391,"t-resizable"),t(),e(392,`
e `),i(393,"code"),e(394,"t-virtual-scroll"),t(),e(395," (ou altura fixa via "),i(396,"code"),e(397,"[t-height]"),t(),e(398,") estejam habilitadas."),t()(),i(399,"blockquote")(400,"p")(401,"strong"),e(402,"Incompatibilidade"),t(),e(403,": N\xE3o funciona com "),i(404,"code"),e(405,"t-grid-row-actions"),t(),e(406," habilitado;"),t()(),i(407,"p")(408,"strong"),e(409,"Exemplo de uso:"),t()(),i(410,"pre")(411,"code",28),e(412,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(413,"tr",19)(414,"td",20)(415,"div",32)(416,"span",33),e(417," (t-before-duplicate)"),r(418,"br"),t()()(),i(419,"td",23)(420,"code",34),e(421,"EventEmitter"),t()(),i(422,"td",25),e(423,"-"),t(),i(424,"td",26)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),i(428,"p"),e(429,`Evento disparado antes da duplica\xE7\xE3o de uma linha na edi\xE7\xE3o flu\xEDda.
Permite cancelar a a\xE7\xE3o definindo `),i(430,"code"),e(431,"cancel = true"),t(),e(432," e manipular os dados atrav\xE9s de "),i(433,"code"),e(434,"duplicatedRow"),t(),e(435,"."),t()()(),i(436,"tr",19)(437,"td",20)(438,"div",32)(439,"span",33),e(440," (t-change-aggregates)"),r(441,"br"),t()()(),i(442,"td",23)(443,"code",34),e(444,"EventEmitter"),t()(),i(445,"td",25),e(446,"-"),t(),i(447,"td",26)(448,"p"),e(449,"Evento disparado ap\xF3s alterar os "),i(450,"code"),e(451,"aggregates"),t(),e(452,"."),t()()(),i(453,"tr",19)(454,"td",20)(455,"div",32)(456,"span",33),e(457," (t-change-filter-by-column)"),r(458,"br"),t()()(),i(459,"td",23)(460,"code",34),e(461,"EventEmitter"),t()(),i(462,"td",25),e(463,"-"),t(),i(464,"td",26)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),i(468,"p"),e(469,`Evento disparado ao alterar um filtro por coluna.
Retorna um array de `),i(470,"code"),e(471,"ThfFilterByColumn"),t(),e(472," com as colunas que possuem filtros aplicados."),t()()(),i(473,"tr",19)(474,"td",20)(475,"div",32)(476,"span",33),e(477," (t-change-fixed-columns)"),r(478,"br"),t()()(),i(479,"td",23)(480,"code",34),e(481,"EventEmitter"),t()(),i(482,"td",25),e(483,"-"),t(),i(484,"td",26)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),i(488,"p"),e(489,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(490,"tr",19)(491,"td",20)(492,"div",32)(493,"span",33),e(494," (t-change-options-column-manager)"),r(495,"br"),t()()(),i(496,"td",23)(497,"code",34),e(498,"EventEmitter"),t()(),i(499,"td",25),e(500,"-"),t(),i(501,"td",26)(502,"em")(503,"strong"),e(504,"(opcional)"),t()(),i(505,"p"),e(506,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(507,"tr",19)(508,"td",20)(509,"div",32)(510,"span",33),e(511," (t-change-row-state-filter)"),r(512,"br"),t()()(),i(513,"td",23)(514,"code",34),e(515,"EventEmitter"),t()(),i(516,"td",25),e(517,"-"),t(),i(518,"td",26)(519,"em")(520,"strong"),e(521,"(opcional)"),t()(),i(522,"p"),e(523,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(524,"tr",19)(525,"td",20)(526,"div",32)(527,"span",33),e(528," (t-change-visible-columns)"),r(529,"br"),t()()(),i(530,"td",23)(531,"code",34),e(532,"EventEmitter"),t()(),i(533,"td",25),e(534,"-"),t(),i(535,"td",26)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),i(539,"p"),e(540,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(541,"tr",19)(542,"td",20)(543,"div",32)(544,"span",33),e(545," (t-changed-density)"),r(546,"br"),t()()(),i(547,"td",23)(548,"code",34),e(549,"EventEmitter"),t()(),i(550,"td",25),e(551,"-"),t(),i(552,"td",26)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),i(556,"p"),e(557,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(558,"tr",19)(559,"td",20)(560,"div",32)(561,"span",33),e(562," (t-changed-items)"),r(563,"br"),t()()(),i(564,"td",23)(565,"code",34),e(566,"EventEmitter"),t()(),i(567,"td",25),e(568,"-"),t(),i(569,"td",26)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),i(573,"p"),e(574,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(575,"tr",19)(576,"td",20)(577,"div",32)(578,"span",33),e(579," (t-restore-column-manager)"),r(580,"br"),t()()(),i(581,"td",23)(582,"code",34),e(583,"EventEmitter"),t()(),i(584,"td",25),e(585,"-"),t(),i(586,"td",26)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),i(590,"p"),e(591,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(592,"tr",19)(593,"td",20)(594,"div",21)(595,"span",22),e(596,"t-columns"),r(597,"br"),t()()(),i(598,"td",23)(599,"code",37),e(600,"Array<ThfGridColumn>"),t()(),i(601,"td",25),e(602,"-"),t(),i(603,"td",26)(604,"em")(605,"strong"),e(606,"(opcional)"),t()(),i(607,"p"),e(608,"Permite definir e configurar as colunas do grid que implementam a interface "),i(609,"strong"),e(610,"ThfGridColumn"),t(),e(611,"."),t(),i(612,"pre")(613,"code",28),e(614,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>
`),t()(),i(615,"pre")(616,"code",31),e(617,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(618,"tr",19)(619,"td",20)(620,"div",21)(621,"span",22),e(622,"t-components-size"),r(623,"br"),t()()(),i(624,"td",23)(625,"code",38),e(626,"string"),t()(),i(627,"td",25)(628,"p")(629,"code"),e(630,"medium"),t()()(),i(631,"td",26)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),i(635,"p"),e(636,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(637,"ul")(638,"li")(639,"code"),e(640,"small"),t(),e(641,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(642,"li")(643,"code"),e(644,"medium"),t(),e(645,": aplica a medida medium de cada componente."),t()(),i(646,"blockquote")(647,"p"),e(648,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(649,"code"),e(650,"medium"),t(),e(651,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(652,"a",39),e(653,"po-theme"),t(),e(654,"."),t()()()(),i(655,"tr",19)(656,"td",20)(657,"div",21)(658,"span",22),e(659,"t-container"),r(660,"br"),t()()(),i(661,"td",23)(662,"code",24),e(663,"boolean"),t()(),i(664,"td",25)(665,"p")(666,"code"),e(667,"true"),t()()(),i(668,"td",26)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),i(672,"p"),e(673,"Adiciona um contorno arredondado ao "),i(674,"code"),e(675,"thf-grid"),t(),e(676,"."),t()()(),i(677,"tr",19)(678,"td",20)(679,"div",21)(680,"span",22),e(681,"t-custom-actions"),r(682,"br"),t()()(),i(683,"td",23)(684,"code",40),e(685,"Array<PoDropdownAction>"),t()(),i(686,"td",25),e(687,"-"),t(),i(688,"td",26)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),i(692,"p"),e(693,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(694,"strong"),e(695,"PoDropdownAction"),t(),e(696,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(697,"strong"),e(698,"t-selectable"),t(),e(699," esteja habilitada."),t(),i(700,"pre")(701,"code",28),e(702,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>
`),t()(),i(703,"pre")(704,"code",31),e(705,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}
`),t()()()(),i(706,"tr",19)(707,"td",20)(708,"div",32)(709,"span",33),e(710," (t-custom-filter)"),r(711,"br"),t()()(),i(712,"td",23)(713,"code",34),e(714,"EventEmitter"),t()(),i(715,"td",25),e(716,"-"),t(),i(717,"td",26)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Evento disparado ao clicar no menu Filtros."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",21)(726,"span",22),e(727,"t-custom-templates"),r(728,"br"),t()()(),i(729,"td",23)(730,"code",41),e(731,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(732,"td",25),e(733,"-"),t(),i(734,"td",26)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),i(738,"p"),e(739,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(740,"pre")(741,"code",28),e(742,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>
`),t()(),i(743,"p"),e(744,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(745,"p"),e(746,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(747,"p"),e(748,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(749,"p"),e(750,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(751,"p"),e(752,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(753,"code"),e(754,"p-decimals-length"),t(),e(755,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(756,"p"),e(757,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(758,"code"),e(759,"editProperties"),t(),e(760," a propriedade "),i(761,"code"),e(762,"required"),t(),e(763," como "),i(764,"code"),e(765,"true"),t(),e(766,"."),t(),i(767,"blockquote")(768,"p"),e(769,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()(),i(770,"p"),e(771,"Ao utilizar templates customizados na edi\xE7\xE3o flu\xEDda, \xE9 obrigat\xF3rio definir "),i(772,"code"),e(773,'p-append-in-body="true"'),t(),e(774,` para componentes que possuam listas flutuantes, popovers ou tooltips, bem como para componentes que utilizem po-helper.
`),i(775,"strong"),e(776,"Componentes impactados:"),t()(),i(777,"ul")(778,"li"),e(779,"po-checkbox"),t(),i(780,"li"),e(781,"po-combo"),t(),i(782,"li"),e(783,"po-datepicker"),t(),i(784,"li"),e(785,"po-datepicker-range"),t(),i(786,"li"),e(787,"po-decimal"),t(),i(788,"li"),e(789,"po-input"),t(),i(790,"li"),e(791,"po-login"),t(),i(792,"li"),e(793,"po-lookup"),t(),i(794,"li"),e(795,"po-multiselect"),t(),i(796,"li"),e(797,"po-number"),t(),i(798,"li"),e(799,"po-password"),t(),i(800,"li"),e(801,"po-radio-group"),t(),i(802,"li"),e(803,"po-rich-text"),t(),i(804,"li"),e(805,"po-select"),t(),i(806,"li"),e(807,"po-switch"),t(),i(808,"li"),e(809,"po-textarea"),t(),i(810,"li"),e(811,"po-upload"),t(),i(812,"li"),e(813,"thf-lookup"),t()(),i(814,"blockquote")(815,"p"),e(816,"Para mais informa\xE7\xF5es sobre a propriedade p-append-in-body, consulte a documenta\xE7\xE3o do componente correspondente."),t()()()(),i(817,"tr",19)(818,"td",20)(819,"div",32)(820,"span",33),e(821," (t-delete-item)"),r(822,"br"),t()()(),i(823,"td",23)(824,"code",34),e(825,"EventEmitter"),t()(),i(826,"td",25),e(827,"-"),t(),i(828,"td",26)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(834,"tr",19)(835,"td",20)(836,"div",21)(837,"span",22),e(838,"t-disabled-include-button"),r(839,"br"),t()()(),i(840,"td",23)(841,"code",24),e(842,"boolean"),t()(),i(843,"td",25)(844,"p")(845,"code"),e(846,"false"),t()()(),i(847,"td",26)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),i(851,"p"),e(852,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(853,"tr",19)(854,"td",20)(855,"div",21)(856,"span",22),e(857,"t-draggable"),r(858,"br"),t()()(),i(859,"td",23)(860,"code",24),e(861,"boolean"),t()(),i(862,"td",25)(863,"p")(864,"code"),e(865,"false"),t()()(),i(866,"td",26)(867,"em")(868,"strong"),e(869,"(opcional)"),t()(),i(870,"p"),e(871,"Habilita o Drag and Drop nas colunas."),t()()(),i(872,"tr",19)(873,"td",20)(874,"div",21)(875,"span",22),e(876,"t-edit-properties"),r(877,"br"),t()()(),i(878,"td",23)(879,"code",42),e(880,"ThfGridEditProperties"),t()(),i(881,"td",25),e(882,"-"),t(),i(883,"td",26)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(889,"strong"),e(890,"ThfGridEditProperties"),t(),e(891,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(892,"blockquote")(893,"p"),e(894,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(895,"tr",19)(896,"td",20)(897,"div",32)(898,"span",33),e(899," (t-change-page-size)"),r(900,"br"),t()()(),i(901,"td",23)(902,"code",34),e(903,"EventEmitter"),t()(),i(904,"td",25),e(905,"-"),t(),i(906,"td",26)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),i(910,"p"),e(911,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(912,"tr",19)(913,"td",20)(914,"div",21)(915,"span",22),e(916,"t-fields"),r(917,"br"),t()()(),i(918,"td",23)(919,"code",43),e(920,"Array<PoPageDynamicSearchFilters>"),t()(),i(921,"td",25),e(922,"-"),t(),i(923,"td",26)(924,"em")(925,"strong"),e(926,"(opcional)"),t()(),i(927,"p"),e(928,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(929,"strong"),e(930,"PoPageDynamicSearchFilters"),t(),e(931,"."),t(),i(932,"pre")(933,"code",28),e(934,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>
`),t()(),i(935,"pre")(936,"code",31),e(937,`customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]
`),t()()()(),i(938,"tr",19)(939,"td",20)(940,"div",21)(941,"span",22),e(942,"t-filter-column-properties"),r(943,"br"),t()()(),i(944,"td",23)(945,"code",44),e(946,"Array<ThfFilterByColumn>"),t()(),i(947,"td",25),e(948,"-"),t(),i(949,"td",26)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),i(953,"p"),e(954,"Permite definir filtros por coluna logo na inicializa\xE7\xE3o, deixando o grid j\xE1 filtrado ao ser carregado."),t(),i(955,"pre")(956,"code",31),e(957,`filterColumnProperties = [
  {
    property: 'name',
    operator1: 'contains',
    value1: 'Ana'
  },
  {
    property: 'age',
    operator1: 'gte',
    value1: 18
  }
];
`),t()()()(),i(958,"tr",19)(959,"td",20)(960,"div",21)(961,"span",22),e(962,"t-filter-input-mode"),r(963,"br"),t()()(),i(964,"td",23)(965,"code",45),e(966,"'basic' "),t(),i(967,"code",46),e(968," 'service'"),t()(),i(969,"td",25)(970,"p")(971,"code"),e(972,"basic"),t()()(),i(973,"td",26)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),i(977,"p"),e(978,"Define o modo do filtro para o input de pesquisa."),t()()(),i(979,"tr",19)(980,"td",20)(981,"div",21)(982,"span",22),e(983,"t-grid-row-actions"),r(984,"br"),t()()(),i(985,"td",23)(986,"code",47),e(987,"ThfGridRowActions"),t()(),i(988,"td",25),e(989,"-"),t(),i(990,"td",26)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),i(994,"p"),e(995,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(996,"strong"),e(997,"ThfGridRowActions"),t(),e(998,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(999,"blockquote")(1e3,"p"),e(1001,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(1002,"tr",19)(1003,"td",20)(1004,"div",21)(1005,"span",22),e(1006," t-group"),r(1007,"br"),t()()(),i(1008,"td",23)(1009,"code",48),e(1010,"Array<string>"),t()(),i(1011,"td",25),e(1012,"-"),t(),i(1013,"td",26)(1014,"em")(1015,"strong"),e(1016,"(opcional)"),t()(),i(1017,"p"),e(1018,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1019,"strong"),e(1020,"t-groupable"),t(),e(1021," esteja habilitada."),t()()(),i(1022,"tr",19)(1023,"td",20)(1024,"div",21)(1025,"span",22),e(1026,"t-groupable"),r(1027,"br"),t()()(),i(1028,"td",23)(1029,"code",24),e(1030,"boolean "),t(),i(1031,"code",49),e(1032," GroupableSettings"),t()(),i(1033,"td",25)(1034,"p")(1035,"code"),e(1036,"false"),t()()(),i(1037,"td",26)(1038,"em")(1039,"strong"),e(1040,"(opcional)"),t()(),i(1041,"p"),e(1042,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1043,"tr",19)(1044,"td",20)(1045,"div",21)(1046,"span",22),e(1047,"t-header-template"),r(1048,"br"),t()()(),i(1049,"td",23)(1050,"code",50),e(1051,"TemplateRef<void>"),t()(),i(1052,"td",25),e(1053,"-"),t(),i(1054,"td",26)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),i(1058,"p"),e(1059,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(1060,"pre")(1061,"code",28),e(1062,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>
`),t()()()(),i(1063,"tr",19)(1064,"td",20)(1065,"div",21)(1066,"span",22),e(1067,"t-headline-fixed"),r(1068,"br"),t()()(),i(1069,"td",23)(1070,"code",24),e(1071,"boolean"),t()(),i(1072,"td",25)(1073,"p")(1074,"code"),e(1075,"false"),t()()(),i(1076,"td",26)(1077,"em")(1078,"strong"),e(1079,"(opcional)"),t()(),i(1080,"p"),e(1081,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(1082,"strong"),e(1083,"t-height"),t(),e(1084,") n\xE3o esteja definida."),t()()(),i(1085,"tr",19)(1086,"td",20)(1087,"div",21)(1088,"span",22),e(1089,"t-height"),r(1090,"br"),t()()(),i(1091,"td",23)(1092,"code",51),e(1093,"number "),t(),i(1094,"code",38),e(1095," string "),t(),i(1096,"code",52),e(1097," null"),t()(),i(1098,"td",25)(1099,"p"),e(1100,"100%"),t()(),i(1101,"td",26)(1102,"em")(1103,"strong"),e(1104,"(opcional)"),t()(),i(1105,"p"),e(1106,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1107,"code"),e(1108,'"<n\xFAmero>%"'),t(),e(1109,")."),t(),i(1110,"ul")(1111,"li"),e(1112,"Se "),i(1113,"strong"),e(1114,"n\xE3o informado"),t(),e(1115,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(1116,"li"),e(1117,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(1118,"strong"),e(1119,"100%"),t(),e(1120," como padr\xE3o."),t(),i(1121,"li"),e(1122,"Se "),i(1123,"code"),e(1124,"t-height"),t(),e(1125," for menor que "),i(1126,"code"),e(1127,"t-min-height"),t(),e(1128,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(1129,"li"),e(1130,"Se "),i(1131,"code"),e(1132,"t-height"),t(),e(1133," for maior que "),i(1134,"code"),e(1135,"t-max-height"),t(),e(1136,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(1137,"blockquote")(1138,"p")(1139,"strong"),e(1140,"Observa\xE7\xE3o:"),t(),e(1141," Quando definido, o "),i(1142,"strong"),e(1143,"virtual scroll"),t(),e(1144," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1145,"strong"),e(1146,"t-virtual-scroll"),t(),e(1147," para mais detalhes."),t()()()(),i(1148,"tr",19)(1149,"td",20)(1150,"div",21)(1151,"span",22),e(1152,"t-hide-action-fixed-columns"),r(1153,"br"),t()()(),i(1154,"td",23)(1155,"code",24),e(1156,"boolean"),t()(),i(1157,"td",25)(1158,"p")(1159,"code"),e(1160,"false"),t()()(),i(1161,"td",26)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),i(1165,"p"),e(1166,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1167,"tr",19)(1168,"td",20)(1169,"div",21)(1170,"span",22),e(1171," t-hide-batch-actions"),r(1172,"br"),t()()(),i(1173,"td",23)(1174,"code",24),e(1175,"boolean"),t()(),i(1176,"td",25)(1177,"p")(1178,"code"),e(1179,"false"),t()()(),i(1180,"td",26)(1181,"em")(1182,"strong"),e(1183,"(opcional)"),t()(),i(1184,"p"),e(1185,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1186,"tr",19)(1187,"td",20)(1188,"div",21)(1189,"span",22),e(1190,"t-hide-columns-manager"),r(1191,"br"),t()()(),i(1192,"td",23)(1193,"code",24),e(1194,"boolean"),t()(),i(1195,"td",25)(1196,"p")(1197,"code"),e(1198,"false"),t()()(),i(1199,"td",26)(1200,"em")(1201,"strong"),e(1202,"(opcional)"),t()(),i(1203,"p"),e(1204,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1205,"tr",19)(1206,"td",20)(1207,"div",21)(1208,"span",22),e(1209,"t-hide-select-all"),r(1210,"br"),t()()(),i(1211,"td",23)(1212,"code",24),e(1213,"boolean"),t()(),i(1214,"td",25)(1215,"p")(1216,"code"),e(1217,"false"),t()()(),i(1218,"td",26)(1219,"em")(1220,"strong"),e(1221,"(opcional)"),t()(),i(1222,"p"),e(1223,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1224,"tr",19)(1225,"td",20)(1226,"div",21)(1227,"span",22),e(1228,"t-hide-table-search"),r(1229,"br"),t()()(),i(1230,"td",23)(1231,"code",24),e(1232,"boolean"),t()(),i(1233,"td",25)(1234,"p")(1235,"code"),e(1236,"false"),t()()(),i(1237,"td",26)(1238,"em")(1239,"strong"),e(1240,"(opcional)"),t()(),i(1241,"p"),e(1242,"Permite ocultar o campo de pesquisa."),t()()(),i(1243,"tr",19)(1244,"td",20)(1245,"div",21)(1246,"span",22),e(1247," t-loading"),r(1248,"br"),t()()(),i(1249,"td",23)(1250,"code",24),e(1251,"boolean"),t()(),i(1252,"td",25)(1253,"p")(1254,"code"),e(1255,"false"),t()()(),i(1256,"td",26)(1257,"em")(1258,"strong"),e(1259,"(opcional)"),t()(),i(1260,"p"),e(1261,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1262,"tr",19)(1263,"td",20)(1264,"div",21)(1265,"span",22),e(1266,"t-items"),r(1267,"br"),t()()(),i(1268,"td",23)(1269,"code",53),e(1270,"Array<any>"),t()(),i(1271,"td",25),e(1272,"-"),t(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1279,"pre")(1280,"code",28),e(1281,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>
`),t()()()(),i(1282,"tr",19)(1283,"td",20)(1284,"div",32)(1285,"span",33),e(1286," (t-items-after-get)"),r(1287,"br"),t()()(),i(1288,"td",23)(1289,"code",34),e(1290,"EventEmitter"),t()(),i(1291,"td",25),e(1292,"-"),t(),i(1293,"td",26)(1294,"em")(1295,"strong"),e(1296,"(opcional)"),t()(),i(1297,"p"),e(1298,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1299,"strong"),e(1300,"t-service-api"),t(),e(1301,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1302,"strong"),e(1303,"t-actions-filter"),t(),e(1304,`
ou no GET do input de pesquisa quando a propriedade `),i(1305,"strong"),e(1306,"t-filter-input-mode"),t(),e(1307," estiver como "),i(1308,"code"),e(1309,"service"),t(),e(1310,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1311,"tr",19)(1312,"td",20)(1313,"div",21)(1314,"span",22),e(1315,"t-literals"),r(1316,"br"),t()()(),i(1317,"td",23)(1318,"code",54),e(1319,"ThfGridLiterals"),t()(),i(1320,"td",25),e(1321,"-"),t(),i(1322,"td",26)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),i(1326,"p"),e(1327,"Permite definir literais personalizados para o componente, conforme a interface "),i(1328,"strong"),e(1329,"ThfGridLiterals"),t(),e(1330,"."),t(),i(1331,"pre")(1332,"code",28),e(1333,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>
`),t()(),i(1334,"pre")(1335,"code",31),e(1336,`customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };
`),t()()()(),i(1337,"tr",19)(1338,"td",20)(1339,"div",21)(1340,"span",22),e(1341,"t-max-columns"),r(1342,"br"),t()()(),i(1343,"td",23)(1344,"code",51),e(1345,"number"),t()(),i(1346,"td",25),e(1347,"-"),t(),i(1348,"td",26)(1349,"em")(1350,"strong"),e(1351,"(opcional)"),t()(),i(1352,"p"),e(1353,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1354,"tr",19)(1355,"td",20)(1356,"div",21)(1357,"span",22),e(1358," t-max-height"),r(1359,"br"),t()()(),i(1360,"td",23)(1361,"code",51),e(1362,"number "),t(),i(1363,"code",38),e(1364," string "),t(),i(1365,"code",52),e(1366," null"),t()(),i(1367,"td",25),e(1368,"-"),t(),i(1369,"td",26)(1370,"em")(1371,"strong"),e(1372,"(opcional)"),t()(),i(1373,"p"),e(1374,"Define a "),i(1375,"strong"),e(1376,"altura m\xE1xima"),t(),e(1377," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1378,"code"),e(1379,'"<n\xFAmero>%"'),t(),e(1380,")."),t(),i(1381,"ul")(1382,"li"),e(1383,"Se "),i(1384,"strong"),e(1385,"n\xE3o informado"),t(),e(1386,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1387,"code"),e(1388,"t-height"),t(),e(1389,", se existir."),t(),i(1390,"li"),e(1391,"Caso "),i(1392,"code"),e(1393,"t-height"),t(),e(1394," seja "),i(1395,"strong"),e(1396,"maior"),t(),e(1397," que "),i(1398,"code"),e(1399,"t-max-height"),t(),e(1400,", o grid usar\xE1 "),i(1401,"code"),e(1402,"t-max-height"),t(),e(1403," como limite superior."),t(),i(1404,"li"),e(1405,"Caso o valor passado seja inv\xE1lido, "),i(1406,"strong"),e(1407,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1408,"."),t()()()(),i(1409,"tr",19)(1410,"td",20)(1411,"div",21)(1412,"span",22),e(1413,"t-max-resizable-width"),r(1414,"br"),t()()(),i(1415,"td",23)(1416,"code",51),e(1417,"number"),t()(),i(1418,"td",25),e(1419,"-"),t(),i(1420,"td",26)(1421,"em")(1422,"strong"),e(1423,"(opcional)"),t()(),i(1424,"p"),e(1425,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1426,"strong"),e(1427,"t-resizable"),t(),e(1428," esteja habilitada."),t()()(),i(1429,"tr",19)(1430,"td",20)(1431,"div",21)(1432,"span",22),e(1433," t-min-height"),r(1434,"br"),t()()(),i(1435,"td",23)(1436,"code",51),e(1437,"number "),t(),i(1438,"code",38),e(1439," string "),t(),i(1440,"code",52),e(1441," null"),t()(),i(1442,"td",25),e(1443,"-"),t(),i(1444,"td",26)(1445,"em")(1446,"strong"),e(1447,"(opcional)"),t()(),i(1448,"p"),e(1449,"Define a "),i(1450,"strong"),e(1451,"altura m\xEDnima"),t(),e(1452," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1453,"code"),e(1454,'"<n\xFAmero>%"'),t(),e(1455,")."),t(),i(1456,"ul")(1457,"li"),e(1458,"Se "),i(1459,"strong"),e(1460,"n\xE3o informado"),t(),e(1461,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1462,"code"),e(1463,"t-height"),t(),e(1464,", se existir."),t(),i(1465,"li"),e(1466,"Caso "),i(1467,"code"),e(1468,"t-height"),t(),e(1469," seja "),i(1470,"strong"),e(1471,"menor"),t(),e(1472," que "),i(1473,"code"),e(1474,"t-min-height"),t(),e(1475,", o grid usar\xE1 "),i(1476,"code"),e(1477,"t-min-height"),t(),e(1478," como limite inferior."),t(),i(1479,"li"),e(1480,"Caso o valor passado seja inv\xE1lido, "),i(1481,"strong"),e(1482,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1483,"."),t()()()(),i(1484,"tr",19)(1485,"td",20)(1486,"div",21)(1487,"span",22),e(1488,"t-min-resizable-width"),r(1489,"br"),t()()(),i(1490,"td",23)(1491,"code",51),e(1492,"number"),t()(),i(1493,"td",25)(1494,"p")(1495,"code"),e(1496,"10"),t()()(),i(1497,"td",26)(1498,"em")(1499,"strong"),e(1500,"(opcional)"),t()(),i(1501,"p"),e(1502,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1503,"strong"),e(1504,"t-resizable"),t(),e(1505," esteja habilitada."),t()()(),i(1506,"tr",19)(1507,"td",20)(1508,"div",32)(1509,"span",33),e(1510," (t-change-group)"),r(1511,"br"),t()()(),i(1512,"td",23)(1513,"code",34),e(1514,"EventEmitter"),t()(),i(1515,"td",25),e(1516,"-"),t(),i(1517,"td",26)(1518,"em")(1519,"strong"),e(1520,"(opcional)"),t()(),i(1521,"p"),e(1522,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1523,"tr",19)(1524,"td",20)(1525,"div",21)(1526,"span",22),e(1527," t-load"),r(1528,"br"),t()()(),i(1529,"td",23)(1530,"code",38),e(1531,"string "),t(),i(1532,"code",55),e(1533," (() => ThfGridOptions)"),t()(),i(1534,"td",25),e(1535,"-"),t(),i(1536,"td",26)(1537,"em")(1538,"strong"),e(1539,"(opcional)"),t()(),i(1540,"p"),e(1541,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1542,"strong"),e(1543,"ThfGridOptions"),t(),e(1544,"."),t()()(),i(1545,"tr",19)(1546,"td",20)(1547,"div",21)(1548,"span",22),e(1549,"t-options-paging"),r(1550,"br"),t()()(),i(1551,"td",23)(1552,"code",56),e(1553,"Array<ThfGridOptionPaging>"),t()(),i(1554,"td",25),e(1555,"-"),t(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1562,"strong"),e(1563,"ThfGridOptionPaging"),t(),e(1564,`.
Requer que a propriedade `),i(1565,"strong"),e(1566,"t-pageable"),t(),e(1567," esteja habilitada."),t()()(),i(1568,"tr",19)(1569,"td",20)(1570,"div",32)(1571,"span",33),e(1572," (t-change-order-column)"),r(1573,"br"),t()()(),i(1574,"td",23)(1575,"code",34),e(1576,"EventEmitter"),t()(),i(1577,"td",25),e(1578,"-"),t(),i(1579,"td",26)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),i(1583,"p"),e(1584,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1585,"tr",19)(1586,"td",20)(1587,"div",21)(1588,"span",22),e(1589,"t-page-size"),r(1590,"br"),t()()(),i(1591,"td",23)(1592,"code",51),e(1593,"number"),t()(),i(1594,"td",25)(1595,"p")(1596,"code"),e(1597,"10"),t()()(),i(1598,"td",26)(1599,"em")(1600,"strong"),e(1601,"(opcional)"),t()(),i(1602,"p"),e(1603,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1604,"strong"),e(1605,"t-pageable"),t(),e(1606," esteja habilitada."),t()()(),i(1607,"tr",19)(1608,"td",20)(1609,"div",21)(1610,"span",22),e(1611,"t-page-size-virtual"),r(1612,"br"),t()()(),i(1613,"td",23)(1614,"code",51),e(1615,"number"),t()(),i(1616,"td",25)(1617,"p")(1618,"code"),e(1619,"60"),t()()(),i(1620,"td",26)(1621,"em")(1622,"strong"),e(1623,"(opcional)"),t()(),i(1624,"p"),e(1625,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1626,"tr",19)(1627,"td",20)(1628,"div",21)(1629,"span",22),e(1630,"t-pageable"),r(1631,"br"),t()()(),i(1632,"td",23)(1633,"code",24),e(1634,"boolean"),t()(),i(1635,"td",25)(1636,"p")(1637,"code"),e(1638,"false"),t()()(),i(1639,"td",26)(1640,"em")(1641,"strong"),e(1642,"(opcional)"),t()(),i(1643,"p"),e(1644,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1645,"tr",19)(1646,"td",20)(1647,"div",21)(1648,"span",22),e(1649,"t-param-delete-api"),r(1650,"br"),t()()(),i(1651,"td",23)(1652,"code",38),e(1653,"string"),t()(),i(1654,"td",25),e(1655,"-"),t(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1662,"code"),e(1663,"t-allow-batch-delete"),t(),e(1664," seja definida)."),t(),i(1665,"p"),e(1666,"Quando "),i(1667,"strong"),e(1668,"t-service-delete-api"),t(),e(1669," estiver configurado e o valor de "),i(1670,"strong"),e(1671,"t-param-delete-api"),t(),e(1672,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1673,"code"),e(1674,"key"),t(),e(1675," (definido ao usar "),i(1676,"strong"),e(1677,"ThfGridColumn"),t(),e(1678,") ou, na aus\xEAncia, "),i(1679,"code"),e(1680,"id"),t(),e(1681,`. Caso
`),i(1682,"strong"),e(1683,"t-service-delete-api"),t(),e(1684," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1685,"strong"),e(1686,"t-service-api"),t(),e(1687,"."),t(),i(1688,"blockquote")(1689,"p"),e(1690,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1691,"pre")(1692,"code"),e(1693,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com
`),t()(),i(1694,"p"),e(1695,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1696,"pre")(1697,"code"),e(1698,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com
`),t()(),i(1699,"p"),e(1700,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1701,"pre")(1702,"code"),e(1703,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1
`),t()()(),i(1704,"blockquote")(1705,"p"),e(1706,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1707,"code"),e(1708,"paramDelete"),t(),e(1709,", conforme o exemplo abaixo:"),t(),i(1710,"pre")(1711,"code",57),e(1712,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}
`),t()()()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717,"t-resizable"),r(1718,"br"),t()()(),i(1719,"td",23)(1720,"code",24),e(1721,"boolean"),t()(),i(1722,"td",25)(1723,"p")(1724,"code"),e(1725,"false"),t()()(),i(1726,"td",26)(1727,"em")(1728,"strong"),e(1729,"(opcional)"),t()(),i(1730,"p"),e(1731,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1732,"tr",19)(1733,"td",20)(1734,"div",21)(1735,"span",22),e(1736,"t-row-height"),r(1737,"br"),t()()(),i(1738,"td",23)(1739,"code",51),e(1740,"number"),t()(),i(1741,"td",25),e(1742,"-"),t(),i(1743,"td",26)(1744,"em")(1745,"strong"),e(1746,"(opcional)"),t()(),i(1747,"p"),e(1748,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1749,"code"),e(1750,"columnTemplate"),t(),e(1751," e "),i(1752,"code"),e(1753,"cellTemplate"),t(),e(1754,")."),t()()(),i(1755,"tr",19)(1756,"td",20)(1757,"div",32)(1758,"span",33),e(1759," (t-rows-selected)"),r(1760,"br"),t()()(),i(1761,"td",23)(1762,"code",34),e(1763,"EventEmitter"),t()(),i(1764,"td",25),e(1765,"-"),t(),i(1766,"td",26)(1767,"p"),e(1768,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1769,"tr",19)(1770,"td",20)(1771,"div",21)(1772,"span",22),e(1773,"t-selectable"),r(1774,"br"),t()()(),i(1775,"td",23)(1776,"code",24),e(1777,"boolean"),t()(),i(1778,"td",25)(1779,"p")(1780,"code"),e(1781,"false"),t()()(),i(1782,"td",26)(1783,"em")(1784,"strong"),e(1785,"(opcional)"),t()(),i(1786,"p"),e(1787,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1788,"tr",19)(1789,"td",20)(1790,"div",21)(1791,"span",22),e(1792,"t-selectable-entire-line"),r(1793,"br"),t()()(),i(1794,"td",23)(1795,"code",24),e(1796,"boolean"),t()(),i(1797,"td",25)(1798,"p")(1799,"code"),e(1800,"true"),t()()(),i(1801,"td",26)(1802,"em")(1803,"strong"),e(1804,"(opcional)"),t()(),i(1805,"p"),e(1806,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1807,"strong"),e(1808,"t-selectable"),t(),e(1809," esteja habilitada."),t()()(),i(1810,"tr",19)(1811,"td",20)(1812,"div",21)(1813,"span",22),e(1814,"t-selectable-removed"),r(1815,"br"),t()()(),i(1816,"td",23)(1817,"code",24),e(1818,"boolean"),t()(),i(1819,"td",25)(1820,"p")(1821,"code"),e(1822,"false"),t()()(),i(1823,"td",26)(1824,"em")(1825,"strong"),e(1826,"(opcional)"),t()(),i(1827,"p"),e(1828,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1829,"tr",19)(1830,"td",20)(1831,"div",32)(1832,"span",33),e(1833," (t-selected)"),r(1834,"br"),t()()(),i(1835,"td",23)(1836,"code",34),e(1837,"EventEmitter"),t()(),i(1838,"td",25),e(1839,"-"),t(),i(1840,"td",26)(1841,"em")(1842,"strong"),e(1843,"(opcional)"),t()(),i(1844,"p"),e(1845,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1846,"tr",19)(1847,"td",20)(1848,"div",32)(1849,"span",33),e(1850," (t-all-selected)"),r(1851,"br"),t()()(),i(1852,"td",23)(1853,"code",34),e(1854,"EventEmitter"),t()(),i(1855,"td",25),e(1856,"-"),t(),i(1857,"td",26)(1858,"em")(1859,"strong"),e(1860,"(opcional)"),t()(),i(1861,"p"),e(1862,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1863,"tr",19)(1864,"td",20)(1865,"div",21)(1866,"span",22),e(1867,"t-service-delete-api"),r(1868,"br"),t()()(),i(1869,"td",23)(1870,"code",38),e(1871,"string "),t(),i(1872,"code",58),e(1873," ThfGridDeleteService"),t()(),i(1874,"td",25),e(1875,"-"),t(),i(1876,"td",26)(1877,"em")(1878,"strong"),e(1879,"(opcional)"),t()(),i(1880,"p"),e(1881,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1882,"strong"),e(1883,"ThfGridDeleteService"),t(),e(1884," ou uma URL."),t(),i(1885,"p"),e(1886,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1887,"strong"),e(1888,"t-param-delete-api"),t(),e(1889,". Se configurado e "),i(1890,"strong"),e(1891,"t-param-delete-api"),t(),e(1892," n\xE3o for informado, ser\xE1 enviado "),i(1893,"code"),e(1894,"key"),t(),e(1895,`
(definido ao usar `),i(1896,"strong"),e(1897,"ThfGridColumn"),t(),e(1898,") ou, na aus\xEAncia, "),i(1899,"code"),e(1900,"id"),t(),e(1901,"."),t(),i(1902,"p"),e(1903,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1904,"strong"),e(1905,"t-allow-batch-delete"),t(),e(1906,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1907,"code"),e(1908,"deleteBatchItems"),t(),e(1909,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1910,"blockquote")(1911,"p"),e(1912,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1913,"a",59),e(1914,"API do PO UI"),t()()(),i(1915,"blockquote")(1916,"p"),e(1917,"Caso utilize um servi\xE7o "),i(1918,"strong"),e(1919,"ThfGridDeleteService"),t(),e(1920,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1921,"tr",19)(1922,"td",20)(1923,"div",21)(1924,"span",22),e(1925," t-service-api"),r(1926,"br"),t()()(),i(1927,"td",23)(1928,"code",38),e(1929,"string"),t()(),i(1930,"td",25),e(1931,"-"),t(),i(1932,"td",26)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),i(1936,"p"),e(1937,"Define a rota da "),i(1938,"code"),e(1939,"API"),t(),e(1940,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1941,"code"),e(1942,"API"),t(),e(1943,` esteja preparada para receber uma ou
mais `),i(1944,"code"),e(1945,"keys"),t(),e(1946," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1947,"code"),e(1948,"keys"),t(),e(1949,`,
que implementa a interface `),i(1950,"strong"),e(1951,"ThfGridColumn"),t(),e(1952,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1953,"code"),e(1954,"id"),t(),e(1955,"."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960,"t-show-densification-configuration"),r(1961,"br"),t()()(),i(1962,"td",23)(1963,"code",24),e(1964,"boolean"),t()(),i(1965,"td",25)(1966,"p")(1967,"code"),e(1968,"false"),t()()(),i(1969,"td",26)(1970,"em")(1971,"strong"),e(1972,"(opcional)"),t()(),i(1973,"p"),e(1974,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1975,"code"),e(1976,"Compacto"),t(),e(1977," e "),i(1978,"code"),e(1979,"Espa\xE7oso"),t(),e(1980,` no
Gerenciar Tabela.`),t(),i(1981,"blockquote")(1982,"p"),e(1983,"Em n\xEDvel de acessibilidade "),i(1984,"strong"),e(1985,"AA"),t(),e(1986,", a op\xE7\xE3o "),i(1987,"code"),e(1988,"Extra Compacto"),t(),e(1989," tamb\xE9m \xE9 exibida."),t()()()(),i(1990,"tr",19)(1991,"td",20)(1992,"div",21)(1993,"span",22),e(1994,"t-show-draggable-icon"),r(1995,"br"),t()()(),i(1996,"td",23)(1997,"code",24),e(1998,"boolean"),t()(),i(1999,"td",25)(2e3,"p")(2001,"code"),e(2002,"false"),t()()(),i(2003,"td",26)(2004,"em")(2005,"strong"),e(2006,"(opcional)"),t()(),i(2007,"p"),e(2008,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(2009,"tr",19)(2010,"td",20)(2011,"div",21)(2012,"span",22),e(2013," t-show-footer-aggregates"),r(2014,"br"),t()()(),i(2015,"td",23)(2016,"code",24),e(2017,"boolean"),t()(),i(2018,"td",25)(2019,"p")(2020,"code"),e(2021,"false"),t()()(),i(2022,"td",26)(2023,"em")(2024,"strong"),e(2025,"(opcional)"),t()(),i(2026,"p"),e(2027,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(2028,"code"),e(2029,"t-aggregates"),t(),e(2030,"."),t()()(),i(2031,"tr",19)(2032,"td",20)(2033,"div",32)(2034,"span",33),e(2035," (t-show-more)"),r(2036,"br"),t()()(),i(2037,"td",23)(2038,"code",34),e(2039,"EventEmitter"),t()(),i(2040,"td",25),e(2041,"-"),t(),i(2042,"td",26)(2043,"em")(2044,"strong"),e(2045,"(opcional)"),t()(),i(2046,"p"),e(2047,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(2048,"strong"),e(2049,"ThfGridColumnSort"),t(),e(2050,`,
caso existam colunas ordenadas definidas.`),t(),i(2051,"blockquote")(2052,"p"),e(2053,"Caso "),i(2054,"strong"),e(2055,"t-items"),t(),e(2056," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(2057,"tr",19)(2058,"td",20)(2059,"div",21)(2060,"span",22),e(2061,"t-show-more-disabled"),r(2062,"br"),t()()(),i(2063,"td",23)(2064,"code",24),e(2065,"boolean"),t()(),i(2066,"td",25)(2067,"p")(2068,"code"),e(2069,"false"),t()()(),i(2070,"td",26)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),i(2074,"p"),e(2075,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2076,"tr",19)(2077,"td",20)(2078,"div",21)(2079,"span",22),e(2080,"t-show-more-visible"),r(2081,"br"),t()()(),i(2082,"td",23)(2083,"code",24),e(2084,"boolean"),t()(),i(2085,"td",25)(2086,"p")(2087,"code"),e(2088,"true"),t()()(),i(2089,"td",26)(2090,"em")(2091,"strong"),e(2092,"(opcional)"),t()(),i(2093,"p"),e(2094,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2095,"strong"),e(2096,"t-pageable"),t(),e(2097," esteja habilitada, ou seja utilizado o evento "),i(2098,"code"),e(2099,"t-show-more"),t(),e(2100," em conjunto com a propriedade "),i(2101,"strong"),e(2102,"t-items"),t(),e(2103,"."),t(),i(2104,"blockquote")(2105,"p"),e(2106,"Caso seja utilizado em conjunto com "),i(2107,"strong"),e(2108,"t-show-more-disabled"),t(),e(2109,", a propriedade "),i(2110,"strong"),e(2111,"t-show-more-visible"),t(),e(2112," ter\xE1 prioridade."),t()()()(),i(2113,"tr",19)(2114,"td",20)(2115,"div",21)(2116,"span",22),e(2117,"t-single-select"),r(2118,"br"),t()()(),i(2119,"td",23)(2120,"code",24),e(2121,"boolean"),t()(),i(2122,"td",25)(2123,"p")(2124,"code"),e(2125,"false"),t()()(),i(2126,"td",26)(2127,"em")(2128,"strong"),e(2129,"(opcional)"),t()(),i(2130,"p"),e(2131,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(2132,"strong"),e(2133,"t-selectable"),t(),e(2134," esteja habilitada."),t()()(),i(2135,"tr",19)(2136,"td",20)(2137,"div",21)(2138,"span",22),e(2139,"t-sort"),r(2140,"br"),t()()(),i(2141,"td",23)(2142,"code",60),e(2143,"Array<ThfGridColumnSort>"),t()(),i(2144,"td",25),e(2145,"-"),t(),i(2146,"td",26)(2147,"em")(2148,"strong"),e(2149,"(opcional)"),t()(),i(2150,"p"),e(2151,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2152,"pre")(2153,"code",28),e(2154,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>
`),t()(),i(2155,"pre")(2156,"code",31),e(2157,`sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(2158,"tr",19)(2159,"td",20)(2160,"div",32)(2161,"span",33),e(2162," (t-change-sort-column)"),r(2163,"br"),t()()(),i(2164,"td",23)(2165,"code",34),e(2166,"EventEmitter"),t()(),i(2167,"td",25),e(2168,"-"),t(),i(2169,"td",26)(2170,"em")(2171,"strong"),e(2172,"(opcional)"),t()(),i(2173,"p"),e(2174,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2175,"strong"),e(2176,"ThfGridColumnSort"),t(),e(2177," com a regra de sortable e a coluna aplicada."),t()()(),i(2178,"tr",19)(2179,"td",20)(2180,"div",21)(2181,"span",22),e(2182,"t-sortable"),r(2183,"br"),t()()(),i(2184,"td",23)(2185,"code",24),e(2186,"boolean"),t()(),i(2187,"td",25)(2188,"p")(2189,"code"),e(2190,"true"),t()()(),i(2191,"td",26)(2192,"em")(2193,"strong"),e(2194,"(opcional)"),t()(),i(2195,"p"),e(2196,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2197,"tr",19)(2198,"td",20)(2199,"div",21)(2200,"span",22),e(2201,"t-spacing"),r(2202,"br"),t()()(),i(2203,"td",23)(2204,"code",38),e(2205,"string"),t()(),i(2206,"td",25)(2207,"p")(2208,"code"),e(2209,"medium"),t()()(),i(2210,"td",26)(2211,"em")(2212,"strong"),e(2213,"(opcional)"),t()(),i(2214,"p"),e(2215,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2216,"strong"),e(2217,"ThfColumnSpacing"),t(),e(2218,"."),t(),i(2219,"blockquote")(2220,"p"),e(2221,"Em n\xEDvel de acessibilidade "),i(2222,"strong"),e(2223,"AA"),t(),e(2224,", caso o valor de "),i(2225,"code"),e(2226,"t-spacing"),t(),e(2227," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2228,"code"),e(2229,"extraSmall"),t(),e(2230,`
nos seguintes cen\xE1rios:`),t(),i(2231,"ul")(2232,"li"),e(2233,"Quando o valor de "),i(2234,"code"),e(2235,"t-components-size"),t(),e(2236," for "),i(2237,"code"),e(2238,"small"),t(),e(2239,";"),t(),i(2240,"li"),e(2241,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2242,"code"),e(2243,"small"),t(),e(2244,` no
`),i(2245,"a",39),e(2246,"servi\xE7o de tema"),t(),e(2247,"."),t()()()()(),i(2248,"tr",19)(2249,"td",20)(2250,"div",21)(2251,"span",22),e(2252,"t-striped"),r(2253,"br"),t()()(),i(2254,"td",23)(2255,"code",24),e(2256,"boolean"),t()(),i(2257,"td",25)(2258,"p")(2259,"code"),e(2260,"true"),t()()(),i(2261,"td",26)(2262,"em")(2263,"strong"),e(2264,"(opcional)"),t()(),i(2265,"p"),e(2266,"Define o estilo listrado no grid (striped)."),t()()(),i(2267,"tr",19)(2268,"td",20)(2269,"div",21)(2270,"span",22),e(2271,"t-text-wrap"),r(2272,"br"),t()()(),i(2273,"td",23)(2274,"code",24),e(2275,"boolean"),t()(),i(2276,"td",25)(2277,"p")(2278,"code"),e(2279,"false"),t()()(),i(2280,"td",26)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),i(2284,"p"),e(2285,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2286,"blockquote")(2287,"p"),e(2288,"Propriedade incompat\xEDvel quando "),i(2289,"strong"),e(2290,"t-virtual-scroll"),t(),e(2291," est\xE1 habilitado."),t()()()(),i(2292,"tr",19)(2293,"td",20)(2294,"div",32)(2295,"span",33),e(2296," (t-unselected)"),r(2297,"br"),t()()(),i(2298,"td",23)(2299,"code",34),e(2300,"EventEmitter"),t()(),i(2301,"td",25),e(2302,"-"),t(),i(2303,"td",26)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),i(2307,"p"),e(2308,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2309,"tr",19)(2310,"td",20)(2311,"div",32)(2312,"span",33),e(2313," (t-all-unselected)"),r(2314,"br"),t()()(),i(2315,"td",23)(2316,"code",34),e(2317,"EventEmitter"),t()(),i(2318,"td",25),e(2319,"-"),t(),i(2320,"td",26)(2321,"em")(2322,"strong"),e(2323,"(opcional)"),t()(),i(2324,"p"),e(2325,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2326,"tr",19)(2327,"td",20)(2328,"div",21)(2329,"span",22),e(2330,"t-virtual-columns"),r(2331,"br"),t()()(),i(2332,"td",23)(2333,"code",24),e(2334,"boolean"),t()(),i(2335,"td",25)(2336,"p")(2337,"code"),e(2338,"false"),t()()(),i(2339,"td",26)(2340,"em")(2341,"strong"),e(2342,"(opcional)"),t()(),i(2343,"p"),e(2344,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2345,"strong"),e(2346,"t-auto-size"),t(),e(2347," e m\xE9todo "),i(2348,"strong"),e(2349,"autoFitColumns()"),t(),e(2350,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2351,"tr",19)(2352,"td",20)(2353,"div",21)(2354,"span",22),e(2355,"t-virtual-scroll"),r(2356,"br"),t()()(),i(2357,"td",23)(2358,"code",24),e(2359,"boolean"),t()(),i(2360,"td",25)(2361,"p")(2362,"code"),e(2363,"true"),t()()(),i(2364,"td",26)(2365,"em")(2366,"strong"),e(2367,"(opcional)"),t()(),i(2368,"p"),e(2369,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2370,"strong"),e(2371,"t-height"),t(),e(2372," esteja definida."),t(),i(2373,"blockquote")(2374,"p"),e(2375,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2376,"strong"),e(2377,"t-text-wrap"),t(),e(2378,", "),i(2379,"strong"),e(2380,"t-row-height"),t(),e(2381," e "),i(2382,"strong"),e(2383,"t-page-size-virtual"),t(),e(2384,"."),t()()()()()(),i(2385,"po-accordion-item",61)(2386,"table",62)(2387,"tr",19)(2388,"th",63)(2389,"div",21)(2390,"h4")(2391,"span",22),e(2392," autoFitColumns "),t()()()()(),i(2393,"tr",26)(2394,"td",26)(2395,"p"),e(2396,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2397,"p"),e(2398,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2399,"p")(2400,"strong"),e(2401,"Exemplo de uso:"),t()(),i(2402,"pre")(2403,"code",31),e(2404,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();
`),t()(),i(2405,"blockquote")(2406,"p"),e(2407,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2408,"ul")(2409,"li"),e(2410,"A propriedade "),i(2411,"code"),e(2412,"t-auto-size"),t(),e(2413," \xE9 habilitada"),t(),i(2414,"li"),e(2415,"O evento "),i(2416,"code"),e(2417,"t-auto-size-on-scroll"),t(),e(2418," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2419,"h5")(2420,"b"),e(2421,"Par\xE2metros"),t()(),i(2422,"table",16)(2423,"tr",17)(2424,"th",18),e(2425,"Nome"),t(),i(2426,"th",18),e(2427,"Tipo"),t(),i(2428,"th",18),e(2429,"Descri\xE7\xE3o"),t()(),i(2430,"tr",19)(2431,"td",20),e(2432," recalculate"),t(),i(2433,"td",23)(2434,"code",64),e(2435," boolean "),t()(),i(2436,"td",26)(2437,"p"),e(2438,"Quando "),i(2439,"code"),e(2440,"true"),t(),e(2441,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2442,"code"),e(2443,"false"),t(),e(2444," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),r(2445,"br"),i(2446,"table",62)(2447,"tr",19)(2448,"th",63)(2449,"div",21)(2450,"h4")(2451,"span",22),e(2452," cleanRowActionsMode "),t()()()()(),i(2453,"tr",26)(2454,"td",26)(2455,"p"),e(2456,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2457,"p"),e(2458,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2459,"pre")(2460,"code"),e(2461,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);
`),t()(),i(2462,"p"),e(2463,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2464,"pre")(2465,"code",31),e(2466,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});
`),t()()()()(),i(2467,"h5")(2468,"b"),e(2469,"Par\xE2metros"),t()(),i(2470,"table",16)(2471,"tr",17)(2472,"th",18),e(2473,"Nome"),t(),i(2474,"th",18),e(2475,"Tipo"),t(),i(2476,"th",18),e(2477,"Descri\xE7\xE3o"),t()(),i(2478,"tr",19)(2479,"td",20),e(2480," edit"),t(),i(2481,"td",23)(2482,"code",64),e(2483," boolean "),t()(),i(2484,"td",26)(2485,"p"),e(2486,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2487,"tr",19)(2488,"td",20),e(2489," include"),t(),i(2490,"td",23)(2491,"code",64),e(2492," boolean "),t()(),i(2493,"td",26)(2494,"p"),e(2495,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2496,"tr",19)(2497,"td",20),e(2498," del"),t(),i(2499,"td",23)(2500,"code",64),e(2501," boolean "),t()(),i(2502,"td",26)(2503,"p"),e(2504,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),r(2505,"br"),i(2506,"table",62)(2507,"tr",19)(2508,"th",63)(2509,"div",21)(2510,"h4")(2511,"span",22),e(2512," deleteItems "),t()()()()(),i(2513,"tr",26)(2514,"td",26)(2515,"p"),e(2516,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2517,"p"),e(2518,"Quando "),i(2519,"strong"),e(2520,"t-items"),t(),e(2521,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2522,"strong"),e(2523,"t-service-api"),t(),e(2524," e/ou "),i(2525,"strong"),e(2526,"t-service-delete-api"),t(),e(2527,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2528,"blockquote")(2529,"p"),e(2530,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2531,"strong"),e(2532,"t-grid-row-actions"),t(),e(2533,`)" remove localmente
as linhas sinalizadas com `),i(2534,"code"),e(2535,"$removed"),t(),e(2536,"."),t()(),i(2537,"blockquote")(2538,"p"),e(2539,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2540,"strong"),e(2541,"t-allow-batch-delete"),t(),e(2542," em conjunto com "),i(2543,"strong"),e(2544,"t-service-api"),t(),e(2545," e/ou "),i(2546,"strong"),e(2547,"t-service-delete-api"),t(),e(2548,"."),t()()()()(),r(2549,"br"),i(2550,"table",62)(2551,"tr",19)(2552,"th",63)(2553,"div",21)(2554,"h4")(2555,"span",22),e(2556," getChangedItems "),t()()()()(),i(2557,"tr",26)(2558,"td",26)(2559,"p"),e(2560,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2561,"code"),e(2562,"op"),t(),e(2563,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2564,"pre")(2565,"code"),e(2566,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]
`),t()()()()(),i(2567,"h5")(2568,"b"),e(2569,"Retorno"),t()(),i(2570,"table",16)(2571,"tr",17)(2572,"th",18),e(2573,"Tipo"),t(),i(2574,"th",18),e(2575,"Descri\xE7\xE3o"),t()(),i(2576,"tr",19)(2577,"td",23)(2578,"code",64),e(2579,"Array<any>"),t()(),i(2580,"td",26)(2581,"p"),e(2582,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2583,"code"),e(2584,"op"),t(),e(2585," que indica a a\xE7\xE3o realizada"),t()()()(),r(2586,"br"),i(2587,"table",62)(2588,"tr",19)(2589,"th",63)(2590,"div",21)(2591,"h4")(2592,"span",22),e(2593," getSelectedRows "),t()()()()(),i(2594,"tr",26)(2595,"td",26)(2596,"p"),e(2597,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),r(2598,"br"),i(2599,"table",62)(2600,"tr",19)(2601,"th",63)(2602,"div",21)(2603,"h4")(2604,"span",22),e(2605," showAdditionalHelp "),t()()()()(),i(2606,"tr",26)(2607,"td",26)(2608,"p"),e(2609,"Exibe o conte\xFAdo da propriedade "),i(2610,"code"),e(2611,"helper"),t(),e(2612," durante a edi\xE7\xE3o ("),i(2613,"code"),e(2614,"t-edit-properties"),t(),e(2615," ou "),i(2616,"code"),e(2617,"t-grid-row-actions"),t(),e(2618,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2619,"code"),e(2620,"t-keydown"),t(),e(2621,"."),t(),i(2622,"pre")(2623,"code"),e(2624,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}
`),t()(),i(2625,"blockquote")(2626,"p"),e(2627,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2628,"a",65),e(2629,"TDN"),t(),e(2630,"."),t()()()()(),i(2631,"h5")(2632,"b"),e(2633,"Par\xE2metros"),t()(),i(2634,"table",16)(2635,"tr",17)(2636,"th",18),e(2637,"Nome"),t(),i(2638,"th",18),e(2639,"Tipo"),t(),i(2640,"th",18),e(2641,"Descri\xE7\xE3o"),t()(),i(2642,"tr",19)(2643,"td",20),e(2644," property"),t(),i(2645,"td",23)(2646,"code",64),e(2647," string "),t()(),i(2648,"td",26)(2649,"p"),e(2650,"Identificador da coluna."),t()()()(),r(2651,"br"),i(2652,"table",62)(2653,"tr",19)(2654,"th",63)(2655,"div",21)(2656,"h4")(2657,"span",22),e(2658," selectRowItem "),t()()()()(),i(2659,"tr",26)(2660,"td",26)(2661,"p"),e(2662,"Seleciona um item do grid."),t()()()(),i(2663,"h5")(2664,"b"),e(2665,"Par\xE2metros"),t()(),i(2666,"table",16)(2667,"tr",17)(2668,"th",18),e(2669,"Nome"),t(),i(2670,"th",18),e(2671,"Tipo"),t(),i(2672,"th",18),e(2673,"Descri\xE7\xE3o"),t()(),i(2674,"tr",19)(2675,"td",20),e(2676," item"),t(),i(2677,"td",23)(2678,"code",66),e(2679," { key: value } "),t(),i(2680,"code",27),e(2681," Function "),t()(),i(2682,"td",26)(2683,"p"),e(2684,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),r(2685,"br"),i(2686,"table",62)(2687,"tr",19)(2688,"th",63)(2689,"div",21)(2690,"h4")(2691,"span",22),e(2692," unselectRowItem "),t()()()()(),i(2693,"tr",26)(2694,"td",26)(2695,"p"),e(2696,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2697,"h5")(2698,"b"),e(2699,"Par\xE2metros"),t()(),i(2700,"table",16)(2701,"tr",17)(2702,"th",18),e(2703,"Nome"),t(),i(2704,"th",18),e(2705,"Tipo"),t(),i(2706,"th",18),e(2707,"Descri\xE7\xE3o"),t()(),i(2708,"tr",19)(2709,"td",20),e(2710," item"),t(),i(2711,"td",23)(2712,"code",66),e(2713," { key: value } "),t(),i(2714,"code",27),e(2715," Function "),t()(),i(2716,"td",26)(2717,"p"),e(2718,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),r(2719,"br"),i(2720,"table",62)(2721,"tr",19)(2722,"th",63)(2723,"div",21)(2724,"h4")(2725,"span",22),e(2726," applyFilters "),t()()()()(),i(2727,"tr",26)(2728,"td",26)(2729,"p"),e(2730,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2731,"p"),e(2732,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2733,"pre")(2734,"code"),e(2735,`url + ?page=1&pageSize=10
`),t()(),i(2736,"blockquote")(2737,"p"),e(2738,"Obs: os par\xE2metros "),i(2739,"code"),e(2740,"page"),t(),e(2741," e "),i(2742,"code"),e(2743,"pageSize"),t(),e(2744," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2745,"p"),e(2746,"Caso sejam informados os par\xE2metros "),i(2747,"code"),e(2748,"{ name: 'JOHN', age: '23' }"),t(),e(2749,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2750,"pre")(2751,"code"),e(2752,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),t()()()()(),i(2753,"h5")(2754,"b"),e(2755,"Par\xE2metros"),t()(),i(2756,"table",16)(2757,"tr",17)(2758,"th",18),e(2759,"Nome"),t(),i(2760,"th",18),e(2761,"Tipo"),t(),i(2762,"th",18),e(2763,"Descri\xE7\xE3o"),t()(),i(2764,"tr",19)(2765,"td",20),e(2766," queryParams"),t(),i(2767,"td",23)(2768,"code",66),e(2769," { key: value } "),t()(),i(2770,"td",26)(2771,"p"),e(2772,"Formato do objeto a ser enviado."),t(),i(2773,"blockquote")(2774,"p"),e(2775,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),r(2776,"br"),i(2777,"table",62)(2778,"tr",19)(2779,"th",63)(2780,"div",21)(2781,"h4")(2782,"span",22),e(2783," calculateHeightDynamically "),t()()()()(),i(2784,"tr",26)(2785,"td",26)(2786,"p"),e(2787,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2788,"code"),e(2789,"calculateDynamicSize"),t(),e(2790," com a propriedade "),i(2791,"code"),e(2792,"'height'"),t(),e(2793,"."),t()()()(),i(2794,"h5")(2795,"b"),e(2796,"Par\xE2metros"),t()(),i(2797,"table",16)(2798,"tr",17)(2799,"th",18),e(2800,"Nome"),t(),i(2801,"th",18),e(2802,"Tipo"),t(),i(2803,"th",18),e(2804,"Descri\xE7\xE3o"),t()(),i(2805,"tr",19)(2806,"td",20),e(2807," callRowHeight"),t(),r(2808,"td",23),i(2809,"td",26)(2810,"p"),e(2811,"Define se o "),i(2812,"code"),e(2813,"calculateRowHeight"),t(),e(2814," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),r(2815,"br"),i(2816,"table",62)(2817,"tr",19)(2818,"th",63)(2819,"div",21)(2820,"h4")(2821,"span",22),e(2822," removeItem "),t()()()()(),i(2823,"tr",26)(2824,"td",26)(2825,"p"),e(2826,"Remove um item localmente do grid."),t()()()(),i(2827,"h5")(2828,"b"),e(2829,"Par\xE2metros"),t()(),i(2830,"table",16)(2831,"tr",17)(2832,"th",18),e(2833,"Nome"),t(),i(2834,"th",18),e(2835,"Tipo"),t(),i(2836,"th",18),e(2837,"Descri\xE7\xE3o"),t()(),i(2838,"tr",19)(2839,"td",20),e(2840," item"),t(),i(2841,"td",23)(2842,"code",51),e(2843," number "),t(),i(2844,"code",66),e(2845," { key: value } "),t()(),i(2846,"td",26)(2847,"p"),e(2848,"\xCDndice ou item que ser\xE1 removido."),t(),i(2849,"blockquote")(2850,"p"),e(2851,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),r(2852,"br"),i(2853,"table",62)(2854,"tr",19)(2855,"th",63)(2856,"div",21)(2857,"h4")(2858,"span",22),e(2859," unselectRows "),t()()()()(),i(2860,"tr",26)(2861,"td",26)(2862,"p"),e(2863,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),r(2864,"br"),i(2865,"table",62)(2866,"tr",19)(2867,"th",63)(2868,"div",21)(2869,"h4")(2870,"span",22),e(2871," getInfoProperties "),t()()()()(),i(2872,"tr",26)(2873,"td",26)(2874,"p"),e(2875,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2876,"p"),e(2877,"Inclui:"),t(),i(2878,"ul")(2879,"li")(2880,"code"),e(2881,"items"),t(),e(2882,": lista de itens atualmente carregados na tabela."),t(),i(2883,"li")(2884,"code"),e(2885,"total"),t(),e(2886,": total de itens informado pela API atrav\xE9s da propriedade "),i(2887,"code"),e(2888,"total"),t(),e(2889,"; pode ser "),i(2890,"code"),e(2891,"undefined"),t(),e(2892," caso a API n\xE3o informe."),t(),i(2893,"li")(2894,"code"),e(2895,"page"),t(),e(2896,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2897,"code"),e(2898,"itemsByApi.page"),t(),e(2899,"); se n\xE3o existir, utiliza a propriedade local "),i(2900,"code"),e(2901,"page"),t(),e(2902,"."),t(),i(2903,"li")(2904,"code"),e(2905,"pageSize"),t(),e(2906,": quantidade de itens por p\xE1gina informada pela API ("),i(2907,"code"),e(2908,"itemsByApi.pageSize"),t(),e(2909,"); se n\xE3o existir, utiliza a propriedade local "),i(2910,"code"),e(2911,"pageSize"),t(),e(2912,"."),t()()()()(),r(2913,"br"),i(2914,"table",62)(2915,"tr",19)(2916,"th",63)(2917,"div",21)(2918,"h4")(2919,"span",22),e(2920," updateItem "),t()()()()(),i(2921,"tr",26)(2922,"td",26)(2923,"p"),e(2924,"Atualiza um item do grid quando utilizado "),i(2925,"strong"),e(2926,"t-itens"),t(),e(2927,"."),t()()()(),i(2928,"h5")(2929,"b"),e(2930,"Par\xE2metros"),t()(),i(2931,"table",16)(2932,"tr",17)(2933,"th",18),e(2934,"Nome"),t(),i(2935,"th",18),e(2936,"Tipo"),t(),i(2937,"th",18),e(2938,"Descri\xE7\xE3o"),t()(),i(2939,"tr",19)(2940,"td",20),e(2941," item"),t(),i(2942,"td",23)(2943,"code",51),e(2944," number "),t(),i(2945,"code",66),e(2946," { key: value } "),t()(),i(2947,"td",26)(2948,"p"),e(2949,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2950,"tr",19)(2951,"td",20),e(2952," updatedItem"),t(),i(2953,"td",23)(2954,"code",66),e(2955," { key: value } "),t()(),i(2956,"td",26)(2957,"p"),e(2958,"Item que foi atualizado."),t(),i(2959,"blockquote")(2960,"p"),e(2961,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),r(2962,"br"),i(2963,"table",62)(2964,"tr",19)(2965,"th",63)(2966,"div",21)(2967,"h4")(2968,"span",22),e(2969," calculateDynamicSize "),t()()()()(),i(2970,"tr",26)(2971,"td",26)(2972,"p"),e(2973,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2974,"strong"),e(2975,"t-height"),t(),e(2976,`,
`),i(2977,"strong"),e(2978,"t-min-height"),t(),e(2979," e "),i(2980,"strong"),e(2981,"t-max-height"),t(),e(2982,"."),t(),i(2983,"p"),e(2984,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2985,"pre")(2986,"code",28),e(2987,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>
`),t()(),i(2988,"pre")(2989,"code",31),e(2990,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}
`),t()()()()(),i(2991,"h5")(2992,"b"),e(2993,"Par\xE2metros"),t()(),i(2994,"table",16)(2995,"tr",17)(2996,"th",18),e(2997,"Nome"),t(),i(2998,"th",18),e(2999,"Tipo"),t(),i(3e3,"th",18),e(3001,"Descri\xE7\xE3o"),t()(),i(3002,"tr",19)(3003,"td",20),e(3004," property"),t(),r(3005,"td",23),i(3006,"td",26)(3007,"p"),e(3008,"Define qual propriedade ser\xE1 calculada: "),i(3009,"code"),e(3010,"'height'"),t(),e(3011,", "),i(3012,"code"),e(3013,"'minHeight'"),t(),e(3014," ou "),i(3015,"code"),e(3016,"'maxHeight'"),t(),e(3017,"."),t()()(),i(3018,"tr",19)(3019,"td",20),e(3020," callRowHeight"),t(),r(3021,"td",23),i(3022,"td",26)(3023,"p"),e(3024,"Define se o m\xE9todo "),i(3025,"code"),e(3026,"calculateRowHeight"),t(),e(3027," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),r(3028,"br"),i(3029,"table",62)(3030,"tr",19)(3031,"th",63)(3032,"div",21)(3033,"h4")(3034,"span",22),e(3035," findColumnIndex "),t()()()()(),i(3036,"tr",26)(3037,"td",26)(3038,"p"),e(3039,"Encontra o \xEDndice da coluna baseado na propriedade."),t()()()(),r(3040,"br"),i(3041,"table",62)(3042,"tr",19)(3043,"th",63)(3044,"div",21)(3045,"h4")(3046,"span",22),e(3047," isColumnRequired "),t()()()()(),i(3048,"tr",26)(3049,"td",26)(3050,"p"),e(3051,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(3052,"code"),e(3053,"editProperties"),t(),e(3054," ou no "),i(3055,"code"),e(3056,"formGroupIntern"),t()()()()(),r(3057,"br"),i(3058,"table",62)(3059,"tr",19)(3060,"th",63)(3061,"div",21)(3062,"h4")(3063,"span",22),e(3064," setRowStateFilter "),t()()()()(),i(3065,"tr",26)(3066,"td",26)(3067,"p"),e(3068,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(3069,"p"),e(3070,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(3071,"code"),e(3072,"$removed"),t(),e(3073,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(3074,"strong"),e(3075,"t-grid-row-actions"),t(),e(3076,")."),t(),i(3077,"p"),e(3078,"Quando o filtro \xE9 alterado:"),t(),i(3079,"ul")(3080,"li"),e(3081,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(3082,"li"),e(3083,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(3084,"code"),e(3085,"skip = 0"),t(),e(3086,")"),t(),i(3087,"li"),e(3088,"O label do filtro \xE9 atualizado"),t(),i(3089,"li"),e(3090,"Os agregados totais s\xE3o recalculados"),t(),i(3091,"li"),e(3092,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(3093,"pre")(3094,"code",31),e(3095,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);
`),t()(),i(3096,"blockquote")(3097,"p"),e(3098,"Quando o filtro \xE9 alterado para "),i(3099,"code"),e(3100,"'removed'"),t(),e(3101,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(3102,"p"),e(3103,"Ao retornar para "),i(3104,"code"),e(3105,"'active'"),t(),e(3106,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(3107,"h5")(3108,"b"),e(3109,"Par\xE2metros"),t()(),i(3110,"table",16)(3111,"tr",17)(3112,"th",18),e(3113,"Nome"),t(),i(3114,"th",18),e(3115,"Tipo"),t(),i(3116,"th",18),e(3117,"Descri\xE7\xE3o"),t()(),i(3118,"tr",19)(3119,"td",20),e(3120," filter"),t(),i(3121,"td",23)(3122,"code",67),e(3123," ('active' "),t(),i(3124,"code",68),e(3125," 'removed') "),t()(),i(3126,"td",26)(3127,"p"),e(3128,"Define qual filtro ser\xE1 aplicado:"),t(),i(3129,"ul")(3130,"li")(3131,"code"),e(3132,"'active'"),t(),e(3133,": Exibe apenas itens n\xE3o removidos ("),i(3134,"code"),e(3135,"$removed !== true"),t(),e(3136,")"),t(),i(3137,"li")(3138,"code"),e(3139,"'removed'"),t(),e(3140,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(3141,"code"),e(3142,"$removed === true"),t(),e(3143,")"),t()()()(),i(3144,"tr",19)(3145,"td",20),e(3146," reloadGrid"),t(),i(3147,"td",23)(3148,"code",64),e(3149," boolean "),t()(),i(3150,"td",26)(3151,"p"),e(3152,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3153,"ul")(3154,"li"),e(3155,"Quando "),i(3156,"code"),e(3157,"true"),t(),e(3158,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3159,"li"),e(3160,"Quando "),i(3161,"code"),e(3162,"false"),t(),e(3163,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3164,"tr",19)(3165,"td",20),e(3166," emitEvent"),t(),i(3167,"td",23)(3168,"code",64),e(3169," boolean "),t()(),i(3170,"td",26)(3171,"p"),e(3172,"Indica se o evento "),i(3173,"code"),e(3174,"changeRowStateFilter"),t(),e(3175," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3176,"ul")(3177,"li"),e(3178,"Quando "),i(3179,"code"),e(3180,"true"),t(),e(3181,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3182,"li"),e(3183,"Quando "),i(3184,"code"),e(3185,"false"),t(),e(3186,", o evento n\xE3o \xE9 emitido"),t()()()()(),r(3187,"br"),i(3188,"table",62)(3189,"tr",19)(3190,"th",63)(3191,"div",21)(3192,"h4")(3193,"span",22),e(3194," applyFilterByColumnProps "),t()()()()(),i(3195,"tr",26)(3196,"td",26)(3197,"p"),e(3198,"Aplica filtro por coluna com base no par\xE2metro fornecido."),t(),i(3199,"pre")(3200,"code",31),e(3201,`// Aplica filtro na coluna 'email' para exibir itens cujo e-mail:
// - cont\xE9m 'gmail'
// - e n\xE3o cont\xE9m 'teste'

const filter: Array<ThfFilterByColumn> = [
  {
    property: 'email',
    logic: 'and',
    operator1: 'contains',
    value1: 'gmail',
    operator2: 'doesnotcontain',
    value2: 'teste'
  }
];
this.gridComponent.applyFilterByColumnProps(filter);

> Requer que a propriedade \`filter\` esteja habilitada na coluna.
`),t()()()()(),i(3202,"h5")(3203,"b"),e(3204,"Par\xE2metros"),t()(),i(3205,"table",16)(3206,"tr",17)(3207,"th",18),e(3208,"Nome"),t(),i(3209,"th",18),e(3210,"Tipo"),t(),i(3211,"th",18),e(3212,"Descri\xE7\xE3o"),t()(),i(3213,"tr",19)(3214,"td",20),e(3215," filterColumnProps"),t(),i(3216,"td",23)(3217,"code",44),e(3218," Array<ThfFilterByColumn> "),t()(),i(3219,"td",26)(3220,"p"),e(3221,"Lista de filtros a serem aplicados."),t()()()(),r(3222,"br"),t()()(),V(3223,2),t(),i(3224,"po-tab",69),V(3225,3),i(3226,"po-container",5)(3227,"po-accordion",6)(3228,"po-accordion-item",70)(3229,"h4",9)(3230,"code"),e(3231,"ThfTableAction"),t()(),i(3232,"div",10)(3233,"p"),e(3234," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3235,"h4",15),e(3236,"Propriedades"),t(),i(3237,"table",16)(3238,"tr",17)(3239,"th",18),e(3240,"Nome"),t(),i(3241,"th",18),e(3242,"Tipo"),t(),i(3243,"th",18),e(3244,"Descri\xE7\xE3o"),t()(),i(3245,"tr",19)(3246,"td",20)(3247,"div",21)(3248,"span",22),e(3249," action"),r(3250,"br"),t()()(),i(3251,"td",23)(3252,"code",27),e(3253,"Function"),t()(),i(3254,"td",26)(3255,"em")(3256,"strong"),e(3257,"(opcional)"),t()(),i(3258,"p"),e(3259,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3260,"p"),e(3261,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(3262,"code"),e(3263,"subItems"),t(),e(3264,"."),t(),i(3265,"blockquote")(3266,"p"),e(3267,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(3268,"em"),e(3269,"bind"),t(),e(3270,`:
`),i(3271,"code"),e(3272,"action: this.myFunction.bind(this)"),t()()()()(),i(3273,"tr",19)(3274,"td",20)(3275,"div",21)(3276,"span",22),e(3277," disabled"),r(3278,"br"),t()()(),i(3279,"td",23)(3280,"code",24),e(3281,"boolean "),t(),i(3282,"code",27),e(3283," Function"),t()(),i(3284,"td",26)(3285,"em")(3286,"strong"),e(3287,"(opcional)"),t()(),i(3288,"p"),e(3289,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),i(3290,"tr",19)(3291,"td",20)(3292,"div",21)(3293,"span",22),e(3294," fixed"),r(3295,"br"),t()()(),i(3296,"td",23)(3297,"code",24),e(3298,"boolean"),t()(),i(3299,"td",26)(3300,"em")(3301,"strong"),e(3302,"(opcional)"),t()(),i(3303,"p"),e(3304,"Propriedade para fixar a a\xE7\xE3o"),t(),i(3305,"blockquote")(3306,"p"),e(3307,"N\xE3o se aplica ao componente "),i(3308,"code"),e(3309,"thf-treelist"),t()()()()(),i(3310,"tr",19)(3311,"td",20)(3312,"div",21)(3313,"span",22),e(3314," icon"),r(3315,"br"),t()()(),i(3316,"td",23)(3317,"code",38),e(3318,"string "),t(),i(3319,"code",50),e(3320," TemplateRef<void>"),t()(),i(3321,"td",26)(3322,"em")(3323,"strong"),e(3324,"(opcional)"),t()(),i(3325,"p"),e(3326,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),i(3327,"p"),e(3328,"Aceita \xEDcones da "),i(3329,"a",30),e(3330,"Biblioteca de \xEDcones"),t(),e(3331,`, fontes externas (ex: Font Awesome)
ou um `),i(3332,"code"),e(3333,"TemplateRef"),t(),e(3334," para \xEDcones customizados."),t(),i(3335,"pre")(3336,"code"),e(3337,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),i(3338,"tr",19)(3339,"td",20)(3340,"div",21)(3341,"span",22),e(3342," label"),r(3343,"br"),t()()(),i(3344,"td",23)(3345,"code",38),e(3346,"string"),t()(),i(3347,"td",26)(3348,"p"),e(3349,"R\xF3tulo da a\xE7\xE3o."),t(),i(3350,"p"),e(3351,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(3352,"code"),e(3353,"subItems"),t(),e(3354,"."),t()()(),i(3355,"tr",19)(3356,"td",20)(3357,"div",21)(3358,"span",22),e(3359," selected"),r(3360,"br"),t()()(),i(3361,"td",23)(3362,"code",24),e(3363,"boolean"),t()(),i(3364,"td",26)(3365,"em")(3366,"strong"),e(3367,"(opcional)"),t()(),i(3368,"p"),e(3369,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3370,"tr",19)(3371,"td",20)(3372,"div",21)(3373,"span",22),e(3374," separator"),r(3375,"br"),t()()(),i(3376,"td",23)(3377,"code",24),e(3378,"boolean"),t()(),i(3379,"td",26)(3380,"em")(3381,"strong"),e(3382,"(opcional)"),t()(),i(3383,"p"),e(3384,"Atribui uma linha separadora acima do item."),t()()(),i(3385,"tr",19)(3386,"td",20)(3387,"div",21)(3388,"span",22),e(3389," subItems"),r(3390,"br"),t()()(),i(3391,"td",23)(3392,"code",71),e(3393,"Array<PoPopupAction>"),t()(),i(3394,"td",26)(3395,"em")(3396,"strong"),e(3397,"(opcional)"),t()(),i(3398,"p"),e(3399,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),i(3400,"p"),e(3401,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),i(3402,"blockquote")(3403,"p"),e(3404,"As propriedades "),i(3405,"code"),e(3406,"disabled"),t(),e(3407,", "),i(3408,"code"),e(3409,"type"),t(),e(3410," e "),i(3411,"code"),e(3412,"visible"),t(),e(3413," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),i(3414,"blockquote")(3415,"p"),e(3416,"Quando "),i(3417,"code"),e(3418,"url"),t(),e(3419," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),i(3420,"blockquote")(3421,"p"),e(3422,"Em subn\xEDveis aninhados, o "),i(3423,"code"),e(3424,"icon"),t(),e(3425," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),i(3426,"tr",19)(3427,"td",20)(3428,"div",21)(3429,"span",22),e(3430," type"),r(3431,"br"),t()()(),i(3432,"td",23)(3433,"code",38),e(3434,"string"),t()(),i(3435,"td",26)(3436,"em")(3437,"strong"),e(3438,"(opcional)"),t()(),i(3439,"p"),e(3440,"Define a cor do item."),t(),i(3441,"p"),e(3442,"Valores v\xE1lidos:"),t(),i(3443,"ul")(3444,"li")(3445,"code"),e(3446,"default"),t()(),i(3447,"li")(3448,"code"),e(3449,"danger"),t()()()()(),i(3450,"tr",19)(3451,"td",20)(3452,"div",21)(3453,"span",22),e(3454," url"),r(3455,"br"),t()()(),i(3456,"td",23)(3457,"code",38),e(3458,"string"),t()(),i(3459,"td",26)(3460,"em")(3461,"strong"),e(3462,"(opcional)"),t()(),i(3463,"p"),e(3464,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),i(3465,"p"),e(3466,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3467,"code"),e(3468,"url"),t(),e(3469," \xE9 informada em um agrupador, o clique "),i(3470,"strong"),e(3471,"n\xE3o abrir\xE1 os subitens"),t(),e(3472,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),i(3473,"blockquote")(3474,"p"),e(3475,"Quando informada, tem prioridade sobre a propriedade "),i(3476,"code"),e(3477,"action"),t(),e(3478,"."),t()()()(),i(3479,"tr",19)(3480,"td",20)(3481,"div",21)(3482,"span",22),e(3483," visible"),r(3484,"br"),t()()(),i(3485,"td",23)(3486,"code",24),e(3487,"boolean "),t(),i(3488,"code",27),e(3489," Function"),t()(),i(3490,"td",26)(3491,"em")(3492,"strong"),e(3493,"(opcional)"),t()(),i(3494,"p"),e(3495,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()()(),i(3496,"po-accordion-item",72)(3497,"h4",9)(3498,"code"),e(3499,"ThfAggregateDescriptor"),t()(),i(3500,"div",10)(3501,"p"),e(3502,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3503,"h4",15),e(3504,"Propriedades"),t(),i(3505,"table",16)(3506,"tr",17)(3507,"th",18),e(3508,"Nome"),t(),i(3509,"th",18),e(3510,"Tipo"),t(),i(3511,"th",18),e(3512,"Descri\xE7\xE3o"),t()(),i(3513,"tr",19)(3514,"td",20)(3515,"div",21)(3516,"span",22),e(3517," aggregate"),r(3518,"br"),t()()(),i(3519,"td",23)(3520,"code",73),e(3521,"'sum' "),t(),i(3522,"code",74),e(3523," 'average' "),t(),i(3524,"code",75),e(3525," 'count' "),t(),i(3526,"code",76),e(3527," 'min' "),t(),i(3528,"code",77),e(3529," 'max'"),t()(),i(3530,"td",26)(3531,"p"),e(3532,"Fun\xE7\xE3o de agrega\xE7\xE3o a ser aplicada inicialmente: 'sum', 'average', 'count', 'min', ou 'max'."),t()()(),i(3533,"tr",19)(3534,"td",20)(3535,"div",21)(3536,"span",22),e(3537," field"),r(3538,"br"),t()()(),i(3539,"td",23)(3540,"code",38),e(3541,"string"),t()(),i(3542,"td",26)(3543,"p"),e(3544,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3545,"tr",19)(3546,"td",20)(3547,"div",21)(3548,"span",22),e(3549," label"),r(3550,"br"),t()()(),i(3551,"td",23)(3552,"code",38),e(3553,"string"),t()(),i(3554,"td",26)(3555,"em")(3556,"strong"),e(3557,"(opcional)"),t()(),i(3558,"p"),e(3559,"Texto exibido ao lado do resultado da agrega\xE7\xE3o no agrupamento."),t()()()()(),i(3560,"po-accordion-item",78)(3561,"h4",9)(3562,"code"),e(3563,"ThfAggregateConfig"),t()(),i(3564,"div",10)(3565,"p"),e(3566,"Interface para configura\xE7\xE3o do "),i(3567,"code"),e(3568,"Aggregate"),t(),e(3569,"."),t()(),i(3570,"h4",15),e(3571,"Propriedades"),t(),i(3572,"table",16)(3573,"tr",17)(3574,"th",18),e(3575,"Nome"),t(),i(3576,"th",18),e(3577,"Tipo"),t(),i(3578,"th",18),e(3579,"Descri\xE7\xE3o"),t()(),i(3580,"tr",19)(3581,"td",20)(3582,"div",21)(3583,"span",22),e(3584," aggregateAlign"),r(3585,"br"),t()()(),i(3586,"td",23)(3587,"code",79),e(3588,"'right' "),t(),i(3589,"code",80),e(3590," 'defaultColumn'"),t()(),i(3591,"td",26)(3592,"em")(3593,"strong"),e(3594,"(opcional)"),t()(),i(3595,"p"),e(3596,"Define o alinhamento horizontal dos valores dos totalizadores."),t(),i(3597,"ul")(3598,"li")(3599,"strong"),e(3600,"Valores aceitos:"),t()(),i(3601,"li")(3602,"code"),e(3603,"'right'"),t(),e(3604,": Alinha os valores \xE0 direita (comportamento padr\xE3o)."),t(),i(3605,"li")(3606,"code"),e(3607,"'defaultColumn'"),t(),e(3608,": Alinha o valor no mesmo alinhamento da sua coluna de origem."),t()()()(),i(3609,"tr",19)(3610,"td",20)(3611,"div",21)(3612,"span",22),e(3613," disabled"),r(3614,"br"),t()()(),i(3615,"td",23)(3616,"code",48),e(3617,"Array<string>"),t()(),i(3618,"td",26)(3619,"em")(3620,"strong"),e(3621,"(opcional)"),t()(),i(3622,"p"),e(3623,"Define a lista das propriedades (colunas) que devem ter a sele\xE7\xE3o dos aggregates desabilitada no rodap\xE9 da grid."),t()()(),i(3624,"tr",19)(3625,"td",20)(3626,"div",21)(3627,"span",22),e(3628," visible"),r(3629,"br"),t()()(),i(3630,"td",23)(3631,"code",48),e(3632,"Array<string>"),t()(),i(3633,"td",26)(3634,"em")(3635,"strong"),e(3636,"(opcional)"),t()(),i(3637,"p"),e(3638,"Define a lista das propriedades (colunas) que devem exibir a sele\xE7\xE3o de aggregates no rodap\xE9 da grid."),t()()()()(),i(3639,"po-accordion-item",81)(3640,"h4",9)(3641,"code"),e(3642,"ThfGridColumnSort"),t()(),i(3643,"div",10)(3644,"p"),e(3645,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3646,"strong"),e(3647,"t-sort"),t(),e(3648,")."),t()(),i(3649,"h4",15),e(3650,"Propriedades"),t(),i(3651,"table",16)(3652,"tr",17)(3653,"th",18),e(3654,"Nome"),t(),i(3655,"th",18),e(3656,"Tipo"),t(),i(3657,"th",18),e(3658,"Descri\xE7\xE3o"),t()(),i(3659,"tr",19)(3660,"td",20)(3661,"div",21)(3662,"span",22),e(3663," dir"),r(3664,"br"),t()()(),i(3665,"td",23)(3666,"code",82),e(3667,"'asc' "),t(),i(3668,"code",83),e(3669," 'desc'"),t()(),i(3670,"td",26)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),t()(),i(3674,"p"),e(3675,"Dire\xE7\xE3o da coluna:"),t(),i(3676,"ul")(3677,"li")(3678,"code"),e(3679,"asc"),t()(),i(3680,"li")(3681,"code"),e(3682,"desc"),t()()()()(),i(3683,"tr",19)(3684,"td",20)(3685,"div",21)(3686,"span",22),e(3687," field"),r(3688,"br"),t()()(),i(3689,"td",23)(3690,"code",38),e(3691,"string"),t()(),i(3692,"td",26)(3693,"p"),e(3694,"Coluna"),t()()()()(),i(3695,"po-accordion-item",84)(3696,"h4",9)(3697,"code"),e(3698,"ThfGridColumn"),t()(),i(3699,"div",10)(3700,"p"),e(3701,"Interface para configura\xE7\xE3o das colunas ("),i(3702,"strong"),e(3703,"t-columns"),t(),e(3704,")."),t()(),i(3705,"h4",15),e(3706,"Propriedades"),t(),i(3707,"table",16)(3708,"tr",17)(3709,"th",18),e(3710,"Nome"),t(),i(3711,"th",18),e(3712,"Tipo"),t(),i(3713,"th",18),e(3714,"Descri\xE7\xE3o"),t()(),i(3715,"tr",19)(3716,"td",20)(3717,"div",21)(3718,"span",22),e(3719," action"),r(3720,"br"),t()()(),i(3721,"td",23)(3722,"code",27),e(3723,"Function"),t()(),i(3724,"td",26)(3725,"em")(3726,"strong"),e(3727,"(opcional)"),t()(),i(3728,"p"),e(3729,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3730,"code"),e(3731,"link"),t(),e(3732," ou "),i(3733,"code"),e(3734,"icon"),t(),e(3735,"."),t(),i(3736,"blockquote")(3737,"p"),e(3738,"Quando for do tipo "),i(3739,"code"),e(3740,"link"),t(),e(3741,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3742,"blockquote")(3743,"p"),e(3744,"Quando for do tipo "),i(3745,"code"),e(3746,"icon"),t(),e(3747," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3748,"tr",19)(3749,"td",20)(3750,"div",21)(3751,"span",22),e(3752," boolean"),r(3753,"br"),t()()(),i(3754,"td",23)(3755,"code",85),e(3756,"PoTableBoolean"),t()(),i(3757,"td",26)(3758,"em")(3759,"strong"),e(3760,"(opcional)"),t()(),i(3761,"p"),e(3762,"Define um objeto do tipo "),i(3763,"code"),e(3764,"PoTableBoolean"),t(),e(3765," para as colunas do tipo "),i(3766,"em"),e(3767,"boolean"),t(),e(3768,". Por exemplo:"),t(),i(3769,"pre")(3770,"code"),e(3771,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(3772,"blockquote")(3773,"p"),e(3774,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3775,"em"),e(3776,"boolean"),t(),e(3777,`,
esta exibir\xE1 por padr\xE3o `),i(3778,"code"),e(3779,"Sim"),t(),e(3780," e "),i(3781,"code"),e(3782,"N\xE3o"),t(),e(3783," de acordo com os valores "),i(3784,"em"),e(3785,"booleanos"),t(),e(3786,"."),t()()()(),i(3787,"tr",19)(3788,"td",20)(3789,"div",21)(3790,"span",22),e(3791," booleanFalse"),r(3792,"br"),t()()(),i(3793,"td",23)(3794,"code",38),e(3795,"string"),t()(),i(3796,"td",26)(3797,"em")(3798,"strong"),e(3799,"(opcional)"),t()(),i(3800,"p"),e(3801,"Texto exibido quando o valor da coluna for "),i(3802,"em"),e(3803,"false"),t(),e(3804,"."),t()()(),i(3805,"tr",19)(3806,"td",20)(3807,"div",21)(3808,"span",22),e(3809," booleanTrue"),r(3810,"br"),t()()(),i(3811,"td",23)(3812,"code",38),e(3813,"string"),t()(),i(3814,"td",26)(3815,"em")(3816,"strong"),e(3817,"(opcional)"),t()(),i(3818,"p"),e(3819,"Texto exibido quando o valor da coluna for "),i(3820,"em"),e(3821,"true"),t(),e(3822,"."),t()()(),i(3823,"tr",19)(3824,"td",20)(3825,"div",21)(3826,"span",22),e(3827," color"),r(3828,"br"),t()()(),i(3829,"td",23)(3830,"code",38),e(3831,"string "),t(),i(3832,"code",27),e(3833," Function"),t()(),i(3834,"td",26)(3835,"em")(3836,"strong"),e(3837,"(opcional)"),t()(),i(3838,"p"),e(3839,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3840,"p"),e(3841,"Valores v\xE1lidos:"),t(),i(3842,"ul")(3843,"li"),r(3844,"span",86),i(3845,"code"),e(3846,"color-01"),t()(),i(3847,"li"),r(3848,"span",87),i(3849,"code"),e(3850,"color-02"),t()(),i(3851,"li"),r(3852,"span",88),i(3853,"code"),e(3854,"color-03"),t()(),i(3855,"li"),r(3856,"span",89),i(3857,"code"),e(3858,"color-04"),t()(),i(3859,"li"),r(3860,"span",90),i(3861,"code"),e(3862,"color-05"),t()(),i(3863,"li"),r(3864,"span",91),i(3865,"code"),e(3866,"color-06"),t()(),i(3867,"li"),r(3868,"span",92),i(3869,"code"),e(3870,"color-07"),t()(),i(3871,"li"),r(3872,"span",93),i(3873,"code"),e(3874,"color-08"),t()(),i(3875,"li"),r(3876,"span",94),i(3877,"code"),e(3878,"color-09"),t()(),i(3879,"li"),r(3880,"span",95),i(3881,"code"),e(3882,"color-10"),t()(),i(3883,"li"),r(3884,"span",96),i(3885,"code"),e(3886,"color-11"),t()(),i(3887,"li"),r(3888,"span",97),i(3889,"code"),e(3890,"color-12"),t()()(),i(3891,"blockquote")(3892,"p"),e(3893,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),i(3894,"strong"),e(3895,"Caption Tag Colors"),t(),e(3896,":"),t()(),i(3897,"ul")(3898,"li"),r(3899,"span",98),i(3900,"code"),e(3901,"caption-tag-01"),t(),r(3902,"span",99),i(3903,"code"),e(3904,"caption-tag-02"),t(),r(3905,"span",100),i(3906,"code"),e(3907,"caption-tag-03"),t(),r(3908,"span",101),i(3909,"code"),e(3910,"caption-tag-04"),t(),r(3911,"span",102),i(3912,"code"),e(3913,"caption-tag-05"),t()(),i(3914,"li"),r(3915,"span",103),i(3916,"code"),e(3917,"caption-tag-06"),t(),r(3918,"span",104),i(3919,"code"),e(3920,"caption-tag-07"),t(),r(3921,"span",105),i(3922,"code"),e(3923,"caption-tag-08"),t(),r(3924,"span",106),i(3925,"code"),e(3926,"caption-tag-09"),t(),r(3927,"span",107),i(3928,"code"),e(3929,"caption-tag-10"),t()(),i(3930,"li"),r(3931,"span",108),i(3932,"code"),e(3933,"caption-tag-11"),t(),r(3934,"span",109),i(3935,"code"),e(3936,"caption-tag-12"),t(),r(3937,"span",110),i(3938,"code"),e(3939,"caption-tag-13"),t(),r(3940,"span",111),i(3941,"code"),e(3942,"caption-tag-14"),t(),r(3943,"span",112),i(3944,"code"),e(3945,"caption-tag-15"),t()(),i(3946,"li"),r(3947,"span",113),i(3948,"code"),e(3949,"caption-tag-16"),t(),r(3950,"span",114),i(3951,"code"),e(3952,"caption-tag-17"),t(),r(3953,"span",115),i(3954,"code"),e(3955,"caption-tag-18"),t(),r(3956,"span",116),i(3957,"code"),e(3958,"caption-tag-19"),t(),r(3959,"span",117),i(3960,"code"),e(3961,"caption-tag-20"),t()(),i(3962,"li"),r(3963,"span",118),i(3964,"code"),e(3965,"caption-tag-21"),t(),r(3966,"span",119),i(3967,"code"),e(3968,"caption-tag-22"),t(),r(3969,"span",120),i(3970,"code"),e(3971,"caption-tag-23"),t(),r(3972,"span",121),i(3973,"code"),e(3974,"caption-tag-24"),t(),r(3975,"span",122),i(3976,"code"),e(3977,"caption-tag-25"),t()(),i(3978,"li"),r(3979,"span",123),i(3980,"code"),e(3981,"caption-tag-26"),t(),r(3982,"span",124),i(3983,"code"),e(3984,"caption-tag-27"),t(),r(3985,"span",125),i(3986,"code"),e(3987,"caption-tag-28"),t(),r(3988,"span",126),i(3989,"code"),e(3990,"caption-tag-29"),t(),r(3991,"span",127),i(3992,"code"),e(3993,"caption-tag-30"),t()(),i(3994,"li"),r(3995,"span",128),i(3996,"code"),e(3997,"caption-tag-31"),t(),r(3998,"span",129),i(3999,"code"),e(4e3,"caption-tag-32"),t(),r(4001,"span",130),i(4002,"code"),e(4003,"caption-tag-33"),t(),r(4004,"span",131),i(4005,"code"),e(4006,"caption-tag-34"),t(),r(4007,"span",132),i(4008,"code"),e(4009,"caption-tag-35"),t()()(),i(4010,"blockquote")(4011,"p"),e(4012,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(4013,"pre")(4014,"code"),e(4015,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),t()(),i(4016,"blockquote")(4017,"p"),e(4018,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(4019,"code"),e(4020,"icons"),t(),e(4021,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(4022,"pre")(4023,"code"),e(4024,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),t()()()(),i(4025,"tr",19)(4026,"td",20)(4027,"div",21)(4028,"span",22),e(4029," detail"),r(4030,"br"),t()()(),i(4031,"td",23)(4032,"code",133),e(4033,"PoTableDetail"),t()(),i(4034,"td",26)(4035,"em")(4036,"strong"),e(4037,"(opcional)"),t()(),i(4038,"p"),e(4039,"Define um objeto que segue a interface "),i(4040,"code"),e(4041,"PoTableDetail"),t(),e(4042,", para as colunas de detalhes. Por exemplo:"),t(),i(4043,"pre")(4044,"code"),e(4045,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),t()()()(),i(4046,"tr",19)(4047,"td",20)(4048,"div",21)(4049,"span",22),e(4050," disabled"),r(4051,"br"),t()()(),i(4052,"td",23)(4053,"code",27),e(4054,"Function"),t()(),i(4055,"td",26)(4056,"em")(4057,"strong"),e(4058,"(opcional)"),t()(),i(4059,"p"),e(4060,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(4061,"em"),e(4062,"link"),t(),e(4063," e sua a\xE7\xE3o."),t(),i(4064,"blockquote")(4065,"p"),e(4066,"Propriedade dispon\xEDvel nas colunas do tipo "),i(4067,"code"),e(4068,"link"),t(),e(4069,"."),t()()()(),i(4070,"tr",19)(4071,"td",20)(4072,"div",21)(4073,"span",22),e(4074," editProperties"),r(4075,"br"),t()()(),i(4076,"td",23)(4077,"code",134),e(4078,"CustomEditProperties"),t()(),i(4079,"td",26)(4080,"em")(4081,"strong"),e(4082,"(opcional)"),t()(),i(4083,"p"),e(4084,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(4085,"tr",19)(4086,"td",20)(4087,"div",21)(4088,"span",22),e(4089," filter"),r(4090,"br"),t()()(),i(4091,"td",23)(4092,"code",24),e(4093,"boolean"),t()(),i(4094,"td",26)(4095,"em")(4096,"strong"),e(4097,"(opcional)"),t()(),i(4098,"p"),e(4099,"Habilita o filtro por coluna."),t(),i(4100,"p"),e(4101,`Quando ativado, exibe um \xEDcone de filtro no cabe\xE7alho da coluna e permite que o usu\xE1rio aplique filtros diretamente
no grid.`),t(),i(4102,"p"),e(4103,"O filtro n\xE3o realiza requisi\xE7\xF5es \xE0 API, toda a filtragem ocorre localmente sobre os dados j\xE1 carregados."),t(),i(4104,"p"),e(4105,"O tipo do filtro \xE9 determinado pelo "),i(4106,"code"),e(4107,"type"),t(),e(4108," definido na coluna. Cada tipo renderiza um componente espec\xEDfico:"),t(),i(4109,"ul")(4110,"li"),e(4111,"string: "),i(4112,"code"),e(4113,"input"),t()(),i(4114,"li"),e(4115,"number, currency:"),i(4116,"ul")(4117,"li")(4118,"code"),e(4119,"decimal"),t(),e(4120," - Caso seja utilizado "),i(4121,"code"),e(4122,"editProperties.componentEditable"),t(),e(4123," do tipo "),i(4124,"code"),e(4125,"decimal"),t()(),i(4126,"li")(4127,"code"),e(4128,"number"),t(),e(4129," - Utilizado por padr\xE3o"),t()()(),i(4130,"li"),e(4131,"date: "),i(4132,"code"),e(4133,"datepicker"),t()(),i(4134,"li"),e(4135,"boolean: "),i(4136,"code"),e(4137,"checkbox"),t()(),i(4138,"li"),e(4139,"time:"),i(4140,"ul")(4141,"li")(4142,"code"),e(4143,"timepicker"),t(),e(4144," - Caso seja utilizado "),i(4145,"code"),e(4146,"editProperties.componentEditable"),t(),e(4147," do tipo "),i(4148,"code"),e(4149,"timepicker"),t()(),i(4150,"li")(4151,"code"),e(4152,"input"),t(),e(4153," - Utilizado por padr\xE3o. "),i(4154,"strong"),e(4155,"Recomendado caso a coluna utilize milissegundos"),t(),e(4156,", pois o "),i(4157,"code"),e(4158,"timepicker"),t(),e(4159," n\xE3o os suporta"),t()()()(),i(4160,"p"),e(4161,"Caso o "),i(4162,"code"),e(4163,"type"),t(),e(4164," da coluna n\xE3o seja um desses ou n\xE3o seja informado, o filtro assume o tipo "),i(4165,"code"),e(4166,"string"),t(),e(4167," como padr\xE3o."),t(),i(4168,"blockquote")(4169,"p"),e(4170,`Para conhecer todos os operadores dispon\xEDveis para cada tipo de coluna, consulte tamb\xE9m a interface
`),i(4171,"strong"),e(4172,"ThfFilterByColumn"),t(),e(4173,"."),t()()()(),i(4174,"tr",19)(4175,"td",20)(4176,"div",21)(4177,"span",22),e(4178," fixed"),r(4179,"br"),t()()(),i(4180,"td",23)(4181,"code",24),e(4182,"boolean"),t()(),i(4183,"td",26)(4184,"em")(4185,"strong"),e(4186,"(opcional)"),t()(),i(4187,"p"),e(4188,"Propriedade para fixar a coluna inicialmente."),t(),i(4189,"blockquote")(4190,"p"),e(4191,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(4192,"tr",19)(4193,"td",20)(4194,"div",21)(4195,"span",22),e(4196," format"),r(4197,"br"),t()()(),i(4198,"td",23)(4199,"code",38),e(4200,"string"),t()(),i(4201,"td",26)(4202,"em")(4203,"strong"),e(4204,"(opcional)"),t()(),i(4205,"p"),e(4206,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(4207,"table")(4208,"thead")(4209,"tr")(4210,"th"),e(4211,"Formata\xE7\xE3o"),t(),i(4212,"th"),e(4213,"Type da Coluna"),t(),i(4214,"th"),e(4215,"Descri\xE7\xE3o"),t(),i(4216,"th"),e(4217,"Exemplos"),t()()(),i(4218,"tbody")(4219,"tr")(4220,"td"),e(4221,"Monet\xE1rio"),t(),i(4222,"td")(4223,"code"),e(4224,"currency"),t()(),i(4225,"td"),e(4226,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(4227,"code"),e(4228,"'USD'"),t(),e(4229," por padr\xE3o"),t(),i(4230,"td")(4231,"code"),e(4232,"'BRL'"),t(),e(4233,", "),i(4234,"code"),e(4235,"'USD'"),t(),e(4236,", "),i(4237,"code"),e(4238,"'EUR'"),t(),e(4239,", "),i(4240,"code"),e(4241,"'RUB'"),t()()(),i(4242,"tr")(4243,"td"),e(4244,"Data"),t(),i(4245,"td")(4246,"code"),e(4247,"date"),t()(),i(4248,"td"),e(4249,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(4250,"td")(4251,"code"),e(4252,"'dd/MM/yyyy'"),t(),e(4253,", "),i(4254,"code"),e(4255,"'dd-MM-yy'"),t(),e(4256,", "),i(4257,"code"),e(4258,"'mm/dd/yyyy'"),t()()(),i(4259,"tr")(4260,"td"),e(4261,"Hora"),t(),i(4262,"td")(4263,"code"),e(4264,"time"),t()(),i(4265,"td"),e(4266,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(4267,"td")(4268,"code"),e(4269,"'HH:mm'"),t(),e(4270,", "),i(4271,"code"),e(4272,"'HH:mm:ss.ffffff'"),t(),e(4273,", "),i(4274,"code"),e(4275,"'HH:mm:ss.ff'"),t(),e(4276,", "),i(4277,"code"),e(4278,"'mm:ss.fff'"),t()()(),i(4279,"tr")(4280,"td"),e(4281,"N\xFAmero"),t(),i(4282,"td")(4283,"code"),e(4284,"number"),t()(),i(4285,"td"),e(4286,"Aceita um valor seguindo o padr\xE3o "),i(4287,"a",135)(4288,"strong"),e(4289,"DecimalPipe"),t()(),e(4290," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(4291,"td")(4292,"code"),e(4293,"'1.2-5'"),t(),e(4294," (ex.: "),i(4295,"code"),e(4296,"50"),t(),e(4297," \u2192 "),i(4298,"code"),e(4299,"50.00"),t(),e(4300,")"),t()()()(),i(4301,"p"),e(4302,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(4303,"blockquote")(4304,"p"),e(4305,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(4306,"tr",19)(4307,"td",20)(4308,"div",21)(4309,"span",22),e(4310," icons"),r(4311,"br"),t()()(),i(4312,"td",23)(4313,"code",136),e(4314,"Array<PoTableColumnIcon>"),t()(),i(4315,"td",26)(4316,"em")(4317,"strong"),e(4318,"(opcional)"),t()(),i(4319,"p"),e(4320,"Define um "),i(4321,"em"),e(4322,"array"),t(),e(4323," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(4324,"code"),e(4325,"action"),t(),e(4326," e "),i(4327,"code"),e(4328,"color"),t(),e(4329,`
definidos na coluna, \xE0 partir do `),i(4330,"em"),e(4331,"value"),t(),e(4332," da "),i(4333,"a",137)(4334,"code"),e(4335,"PoTableColumnIcon"),t()(),e(4336,", por exemplo:"),t(),i(4337,"pre")(4338,"code"),e(4339,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),t()(),i(4340,"pre")(4341,"code"),e(4342,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),t()()()(),i(4343,"tr",19)(4344,"td",20)(4345,"div",21)(4346,"span",22),e(4347," key"),r(4348,"br"),t()()(),i(4349,"td",23)(4350,"code",24),e(4351,"boolean "),t(),i(4352,"code",51),e(4353," number"),t()(),i(4354,"td",26)(4355,"em")(4356,"strong"),e(4357,"(opcional)"),t()(),i(4358,"p"),e(4359,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(4360,"code"),e(4361,"API"),t(),e(4362," esteja preparada para receber uma ou mais "),i(4363,"code"),e(4364,"keys"),t(),e(4365," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(4366,"blockquote")(4367,"p"),e(4368,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(4369,"tr",19)(4370,"td",20)(4371,"div",21)(4372,"span",22),e(4373," label"),r(4374,"br"),t()()(),i(4375,"td",23)(4376,"code",38),e(4377,"string"),t()(),i(4378,"td",26)(4379,"em")(4380,"strong"),e(4381,"(opcional)"),t()(),i(4382,"p"),e(4383,"Texto para t\xEDtulo da coluna."),t(),i(4384,"p"),e(4385,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4386,"em"),e(4387,"label"),t(),e(4388," o valor da propriedade "),i(4389,"em"),e(4390,"property"),t(),e(4391," com a primeira letra em mai\xFAsculo."),t()()(),i(4392,"tr",19)(4393,"td",20)(4394,"div",21)(4395,"span",22),e(4396," labels"),r(4397,"br"),t()()(),i(4398,"td",23)(4399,"code",138),e(4400,"Array<PoTableColumnLabel>"),t()(),i(4401,"td",26)(4402,"em")(4403,"strong"),e(4404,"(opcional)"),t()(),i(4405,"p"),e(4406,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(4407,"code"),e(4408,"PoTableColumnLabel"),t(),e(4409," na qual devem ser definidas os labels. Por exemplo:"),t(),i(4410,"pre")(4411,"code"),e(4412,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(4413,"tr",19)(4414,"td",20)(4415,"div",21)(4416,"span",22),e(4417," link"),r(4418,"br"),t()()(),i(4419,"td",23)(4420,"code",38),e(4421,"string"),t()(),i(4422,"td",26)(4423,"em")(4424,"strong"),e(4425,"(opcional)"),t()(),i(4426,"p"),e(4427,"Define o nome da propriedade que conter\xE1 o "),i(4428,"code"),e(4429,"link"),t(),e(4430," a ser redirecionado."),t()()(),i(4431,"tr",19)(4432,"td",20)(4433,"div",21)(4434,"span",22),e(4435," locale"),r(4436,"br"),t()()(),i(4437,"td",23)(4438,"code",38),e(4439,"string"),t()(),i(4440,"td",26)(4441,"em")(4442,"strong"),e(4443,"(opcional)"),t()(),i(4444,"p"),e(4445,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4446,"a",139)(4447,"code"),e(4448,"I18n"),t()()(),i(4449,"p"),e(4450,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4451,"pre")(4452,"code"),e(4453,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(4454,"blockquote")(4455,"p"),e(4456,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4457,"p"),e(4458,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4459,"p"),e(4460,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4461,"a",139)(4462,"code"),e(4463,"I18n"),t()()()(),i(4464,"p"),e(4465,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4466,"pre")(4467,"code"),e(4468,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(4469,"blockquote")(4470,"p"),e(4471,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(4472,"code"),e(4473,"number"),t(),e(4474," e "),i(4475,"code"),e(4476,"currency"),t(),e(4477,"."),t()(),i(4478,"blockquote")(4479,"p"),e(4480,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4481,"p")(4482,"strong"),e(4483,"Componentes compat\xEDveis"),t(),e(4484,": "),i(4485,"code"),e(4486,"decimal"),t()()()()(),i(4487,"tr",19)(4488,"td",20)(4489,"div",21)(4490,"span",22),e(4491," mask"),r(4492,"br"),t()()(),i(4493,"td",23)(4494,"code",38),e(4495,"string"),t()(),i(4496,"td",26)(4497,"em")(4498,"strong"),e(4499,"(opcional)"),t()(),i(4500,"p"),e(4501,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4502,"code"),e(4503,"number"),t(),e(4504," e "),i(4505,"code"),e(4506,"string"),t(),e(4507,`
Nas colunas do tipo `),i(4508,"code"),e(4509,"number"),t(),e(4510," a propriedade "),i(4511,"code"),e(4512,"mask"),t(),e(4513," ter\xE1 prioridade sob "),i(4514,"code"),e(4515,"format"),t()()()(),i(4516,"tr",19)(4517,"td",20)(4518,"div",21)(4519,"span",22),e(4520," property"),r(4521,"br"),t()()(),i(4522,"td",23)(4523,"code",38),e(4524,"string"),t()(),i(4525,"td",26)(4526,"p"),e(4527,"Identificador da coluna."),t()()(),i(4528,"tr",19)(4529,"td",20)(4530,"div",21)(4531,"span",22),e(4532," resizable"),r(4533,"br"),t()()(),i(4534,"td",23)(4535,"code",24),e(4536,"boolean"),t()(),i(4537,"td",26)(4538,"em")(4539,"strong"),e(4540,"(opcional)"),t()(),i(4541,"p"),e(4542,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4543,"tr",19)(4544,"td",20)(4545,"div",21)(4546,"span",22),e(4547," sortable"),r(4548,"br"),t()()(),i(4549,"td",23)(4550,"code",24),e(4551,"boolean"),t()(),i(4552,"td",26)(4553,"em")(4554,"strong"),e(4555,"(opcional)"),t()(),i(4556,"p"),e(4557,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4558,"tr",19)(4559,"td",20)(4560,"div",21)(4561,"span",22),e(4562," subtitles"),r(4563,"br"),t()()(),i(4564,"td",23)(4565,"code",140),e(4566,"Array<PoTableSubtitleColumn>"),t()(),i(4567,"td",26)(4568,"em")(4569,"strong"),e(4570,"(opcional)"),t()(),i(4571,"p"),e(4572,"Define um array de objetos para as colunas de legenda. Onde, "),i(4573,"code"),e(4574,"subtitles"),t(),e(4575,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4576,"pre")(4577,"code"),e(4578,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),t()(),i(4579,"p"),e(4580,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4581,"tr",19)(4582,"td",20)(4583,"div",21)(4584,"span",22),e(4585," tooltip"),r(4586,"br"),t()()(),i(4587,"td",23)(4588,"code",38),e(4589,"string"),t()(),i(4590,"td",26)(4591,"em")(4592,"strong"),e(4593,"(opcional)"),t()(),i(4594,"p"),e(4595,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4596,"em"),e(4597,"mouse"),t(),e(4598," sobre um texto."),t(),i(4599,"blockquote")(4600,"p"),e(4601,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4602,"em"),e(4603,"link"),t(),e(4604,"."),t()(),i(4605,"blockquote")(4606,"p"),e(4607,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4608,"em"),e(4609,"tooltip"),t(),e(4610," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4611,"tr",19)(4612,"td",20)(4613,"div",21)(4614,"span",22),e(4615," type"),r(4616,"br"),t()()(),i(4617,"td",23)(4618,"code",38),e(4619,"string"),t()(),i(4620,"td",26)(4621,"em")(4622,"strong"),e(4623,"(opcional)"),t()(),i(4624,"p"),e(4625,"Tipo da coluna."),t(),i(4626,"p"),e(4627,"Valores v\xE1lidos:"),t(),i(4628,"ul")(4629,"li")(4630,"p")(4631,"code"),e(4632,"boolean"),t(),e(4633,": Exibir\xE1 por padr\xE3o "),i(4634,"code"),e(4635,"Sim"),t(),e(4636," e "),i(4637,"code"),e(4638,"N\xE3o"),t(),e(4639," de acordo com os valores "),i(4640,"em"),e(4641,"booleanos"),t(),e(4642,"."),t(),i(4643,"blockquote")(4644,"p"),e(4645,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4646,"code"),e(4647,"boolean"),t(),e(4648," desta interface."),t()()(),i(4649,"li")(4650,"p")(4651,"code"),e(4652,"currency"),t(),e(4653,": valores monet\xE1rios."),t()(),i(4654,"li")(4655,"p")(4656,"code"),e(4657,"date"),t(),e(4658,": valor de datas."),t(),i(4659,"ul")(4660,"li"),e(4661,"Aceita os tipos "),i(4662,"em"),e(4663,"string"),t(),e(4664," e "),i(4665,"em"),e(4666,"Date"),t(),e(4667,` padr\xE3o do Javascript,
por exemplo: `),i(4668,"code"),e(4669,"'2017-11-28'"),t(),e(4670," ou "),i(4671,"code"),e(4672,"new Date(2017, 10, 28)"),t(),e(4673,"."),t()()(),i(4674,"li")(4675,"p")(4676,"code"),e(4677,"dateTime"),t(),e(4678,": valor de data com hor\xE1rio."),t(),i(4679,"ul")(4680,"li"),e(4681,"Aceita o tipo "),i(4682,"em"),e(4683,"string"),t(),e(4684," no formato "),i(4685,"strong"),e(4686,"ISO-8601"),t(),e(4687," extendido "),i(4688,"strong"),e(4689,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4690,`
e o tipo `),i(4691,"em"),e(4692,"Date"),t(),e(4693," padr\xE3o do Javascript, por exemplo: "),i(4694,"code"),e(4695,"'2017-11-28T00:00:00-02:00'"),t(),e(4696," ou "),i(4697,"code"),e(4698,"new Date(2017, 10, 28)"),t(),e(4699,"."),t()()(),i(4700,"li")(4701,"p")(4702,"code"),e(4703,"detail"),t(),e(4704,": array de objetos para o master-detail."),t(),i(4705,"ul")(4706,"li"),e(4707,"Incompat\xEDvel com "),i(4708,"code"),e(4709,"virtual-scroll"),t(),e(4710,", que requer altura fixa nas linhas."),t()()(),i(4711,"li")(4712,"p")(4713,"code"),e(4714,"icon"),t(),e(4715,": "),i(4716,"em"),e(4717,"array"),t(),e(4718," de "),i(4719,"em"),e(4720,"string"),t(),e(4721," ou objetos para a coluna de \xEDcones."),t()(),i(4722,"li")(4723,"p")(4724,"code"),e(4725,"label"),t(),e(4726,": texto com destaque."),t()(),i(4727,"li")(4728,"p")(4729,"code"),e(4730,"link"),t(),e(4731,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4732,"li")(4733,"p")(4734,"code"),e(4735,"number"),t(),e(4736,": valores num\xE9ricos."),t()(),i(4737,"li")(4738,"p")(4739,"code"),e(4740,"string"),t(),e(4741,": textos."),t()(),i(4742,"li")(4743,"p")(4744,"code"),e(4745,"subtitle"),t(),e(4746,": array de objetos para a coluna de legenda."),t()(),i(4747,"li")(4748,"p")(4749,"code"),e(4750,"time"),t(),e(4751,": valor de hor\xE1rio."),t(),i(4752,"ul")(4753,"li"),e(4754,"Aceita o tipo "),i(4755,"em"),e(4756,"string"),t(),e(4757," nos formatos "),i(4758,"strong"),e(4759,"'HH:mm:ss'"),t(),e(4760," ou "),i(4761,"strong"),e(4762,"'HH:mm:ss.ffffff'"),t(),e(4763,", por exemplo: "),i(4764,"code"),e(4765,"'23:12:45'"),t(),e(4766,"."),t()()(),i(4767,"li")(4768,"p")(4769,"code"),e(4770,"cellTemplate"),t(),e(4771,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4772,"a",141),e(4773,"PoTableCellTemplate"),t(),e(4774,"."),t()(),i(4775,"li")(4776,"p")(4777,"code"),e(4778,"columnTemplate"),t(),e(4779,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4780,"a",142),e(4781,"PoTableColumnTemplate"),t(),e(4782,"."),t()()()()(),i(4783,"tr",19)(4784,"td",20)(4785,"div",21)(4786,"span",22),e(4787," visible"),r(4788,"br"),t()()(),i(4789,"td",23)(4790,"code",24),e(4791,"boolean"),t()(),i(4792,"td",26)(4793,"em")(4794,"strong"),e(4795,"(opcional)"),t()(),i(4796,"p"),e(4797,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4798,"strong"),e(4799,"gerenciador de colunas"),t(),e(4800,"."),t(),i(4801,"blockquote")(4802,"p"),e(4803,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4804,"code"),e(4805,"p-max-columns"),t(),e(4806,"."),t()()()(),i(4807,"tr",19)(4808,"td",20)(4809,"div",21)(4810,"span",22),e(4811," width"),r(4812,"br"),t()()(),i(4813,"td",23)(4814,"code",51),e(4815,"number "),t(),i(4816,"code",38),e(4817," string"),t()(),i(4818,"td",26)(4819,"em")(4820,"strong"),e(4821,"(opcional)"),t()(),i(4822,"p"),e(4823,"Caso seja passado o formato "),i(4824,"code"),e(4825,"number"),t(),e(4826,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4827,"blockquote")(4828,"p"),e(4829,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4830,"po-accordion-item",143)(4831,"h4",9)(4832,"code"),e(4833,"CustomEditProperties"),t()(),i(4834,"div",10)(4835,"p"),e(4836,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4837,"strong"),e(4838,"editProperties"),t(),e(4839,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4840,"a",144),e(4841,"PoDynamicFormField"),t(),e(4842,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4843,"h4",15),e(4844,"Propriedades"),t(),i(4845,"table",16)(4846,"tr",17)(4847,"th",18),e(4848,"Nome"),t(),i(4849,"th",18),e(4850,"Tipo"),t(),i(4851,"th",18),e(4852,"Descri\xE7\xE3o"),t()(),i(4853,"tr",19)(4854,"td",20)(4855,"div",21)(4856,"span",22),e(4857," componentEditable"),r(4858,"br"),t()()(),i(4859,"td",23)(4860,"code",145),e(4861,"'input' "),t(),i(4862,"code",146),e(4863," 'number' "),t(),i(4864,"code",147),e(4865," 'select' "),t(),i(4866,"code",148),e(4867," 'datepicker' "),t(),i(4868,"code",149),e(4869," 'switch' "),t(),i(4870,"code",150),e(4871," 'combo' "),t(),i(4872,"code",151),e(4873," 'multiselect' "),t(),i(4874,"code",152),e(4875," 'decimal' "),t(),i(4876,"code",153),e(4877," 'checkbox' "),t(),i(4878,"code",154),e(4879," 'lookup' "),t(),i(4880,"code",155),e(4881," 'timepicker'"),t()(),i(4882,"td",26)(4883,"em")(4884,"strong"),e(4885,"(opcional)"),t()(),i(4886,"p"),e(4887,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4888,"blockquote")(4889,"p"),e(4890,"O valor padr\xE3o \xE9 "),i(4891,"code"),e(4892,"input"),t(),e(4893,"."),t()()()(),i(4894,"tr",19)(4895,"td",20)(4896,"div",21)(4897,"span",22),e(4898," componentSize"),r(4899,"br"),t()()(),i(4900,"td",23)(4901,"code",156),e(4902,"'small' "),t(),i(4903,"code",157),e(4904," 'medium' "),t(),i(4905,"code",158),e(4906," 'large'"),t()(),i(4907,"td",26)(4908,"em")(4909,"strong"),e(4910,"(opcional)"),t()(),i(4911,"p"),e(4912,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4913,"ul")(4914,"li")(4915,"code"),e(4916,"small"),t(),e(4917,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4918,"li")(4919,"code"),e(4920,"medium"),t(),e(4921,": aplica a medida medium de cada componente."),t(),i(4922,"li")(4923,"code"),e(4924,"large"),t(),e(4925,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4926,"code"),e(4927,"po-checkbox"),t(),e(4928," e "),i(4929,"code"),e(4930,"po-radio-group"),t(),e(4931,")."),i(4932,"blockquote")(4933,"p"),e(4934,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4935,"code"),e(4936,"medium"),t(),e(4937,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4938,"a",39),e(4939,"po-theme"),t(),e(4940,"."),t()()()()()(),i(4941,"tr",19)(4942,"td",20)(4943,"div",21)(4944,"span",22),e(4945," controlValueWithLabel"),r(4946,"br"),t()()(),i(4947,"td",23)(4948,"code",24),e(4949,"boolean"),t()(),i(4950,"td",26)(4951,"em")(4952,"strong"),e(4953,"(opcional)"),t()(),i(4954,"p"),e(4955,"Determina se os componentes "),i(4956,"code"),e(4957,"select"),t(),e(4958,", "),i(4959,"code"),e(4960,"combo"),t(),e(4961,", "),i(4962,"code"),e(4963,"multiselect"),t(),e(4964," e "),i(4965,"code"),e(4966,"thf-lookup"),t(),e(4967,`
devem exibir o `),i(4968,"code"),e(4969,"label"),t(),e(4970," ao inv\xE9s de "),i(4971,"code"),e(4972,"value"),t(),e(4973," na grid"),t()()(),i(4974,"tr",19)(4975,"td",20)(4976,"div",21)(4977,"span",22),e(4978," customItems"),r(4979,"br"),t()()(),i(4980,"td",23)(4981,"code",53),e(4982,"Array<any>"),t()(),i(4983,"td",26)(4984,"em")(4985,"strong"),e(4986,"(opcional)"),t()(),i(4987,"p"),e(4988,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4989,"blockquote")(4990,"p")(4991,"strong"),e(4992,"Componente compat\xEDvel"),t(),e(4993,": "),i(4994,"code"),e(4995,"thf-lookup"),t()()()()(),i(4996,"tr",19)(4997,"td",20)(4998,"div",21)(4999,"span",22),e(5e3," disabled"),r(5001,"br"),t()()(),i(5002,"td",23)(5003,"code",24),e(5004,"boolean "),t(),i(5005,"code",159),e(5006," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5007,"td",26)(5008,"em")(5009,"strong"),e(5010,"(opcional)"),t()(),i(5011,"p"),e(5012,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(5013,"tr",19)(5014,"td",20)(5015,"div",21)(5016,"span",22),e(5017," fieldFormat"),r(5018,"br"),t()()(),i(5019,"td",23)(5020,"code",48),e(5021,"Array<string> "),t(),i(5022,"code",160),e(5023," ((item: any) => string)"),t()(),i(5024,"td",26)(5025,"em")(5026,"strong"),e(5027,"(opcional)"),t()(),i(5028,"p"),e(5029,"Formato de exibi\xE7\xE3o do campo."),t(),i(5030,"p"),e(5031,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(5032,"em"),e(5033,"string"),t(),e(5034," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(5035,"pre")(5036,"code",31),e(5037,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"
`),t()(),i(5038,"blockquote")(5039,"p"),e(5040,"Componente compat\xEDvel: "),i(5041,"code"),e(5042,"thf-lookup"),t(),e(5043,"."),t()()()(),i(5044,"tr",19)(5045,"td",20)(5046,"div",21)(5047,"span",22),e(5048," filterSearchSelect"),r(5049,"br"),t()()(),i(5050,"td",23)(5051,"code",161),e(5052,"Array<ThfLookupFilterSearchSelect>"),t()(),i(5053,"td",26)(5054,"em")(5055,"strong"),e(5056,"(opcional)"),t()(),i(5057,"p"),e(5058,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(5059,"blockquote")(5060,"p"),e(5061,"Componente compat\xEDvel: "),i(5062,"code"),e(5063,"thf-lookup"),t(),e(5064,"."),t()()()(),i(5065,"tr",19)(5066,"td",20)(5067,"div",21)(5068,"span",22),e(5069," keysLabel"),r(5070,"br"),t()()(),i(5071,"td",23)(5072,"code",162),e(5073,"Array<ThfLookupKeysLabel>"),t()(),i(5074,"td",26)(5075,"em")(5076,"strong"),e(5077,"(opcional)"),t()(),i(5078,"p"),e(5079,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(5080,"blockquote")(5081,"p"),e(5082,"Componente compat\xEDvel: "),i(5083,"code"),e(5084,"thf-lookup"),t(),e(5085,"."),t()()()(),i(5086,"tr",19)(5087,"td",20)(5088,"div",21)(5089,"span",22),e(5090," loading"),r(5091,"br"),t()()(),i(5092,"td",23)(5093,"code",24),e(5094,"boolean"),t()(),i(5095,"td",26)(5096,"em")(5097,"strong"),e(5098,"(opcional)"),t()(),i(5099,"p"),e(5100,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(5101,"blockquote")(5102,"p"),e(5103,"Por padr\xE3o \xE9 "),i(5104,"code"),e(5105,"false"),t(),e(5106,"."),t()(),i(5107,"blockquote")(5108,"p")(5109,"strong"),e(5110,"Componentes compat\xEDveis:"),t(),i(5111,"code"),e(5112,"po-datepicker"),t(),e(5113,", "),i(5114,"code"),e(5115,"po-number"),t(),e(5116,", "),i(5117,"code"),e(5118,"po-decimal"),t(),e(5119,", "),i(5120,"code"),e(5121,"po-input"),t(),e(5122,", "),i(5123,"code"),e(5124,"po-select"),t(),e(5125,", "),i(5126,"code"),e(5127,"po-switch"),t(),e(5128,`,
`),i(5129,"code"),e(5130,"po-combo"),t(),e(5131,", "),i(5132,"code"),e(5133,"po-multiselect"),t(),e(5134,", "),i(5135,"code"),e(5136,"thf-lookup"),t(),e(5137,"."),t()(),i(5138,"blockquote")(5139,"p"),e(5140,"No "),i(5141,"code"),e(5142,"thf-lookup"),t(),e(5143,", o estado de loading n\xE3o desabilita o campo, exibindo apenas o indicador visual."),t()()()(),i(5144,"tr",19)(5145,"td",20)(5146,"div",21)(5147,"span",22),e(5148," locale"),r(5149,"br"),t()()(),i(5150,"td",23)(5151,"code",38),e(5152,"string"),t()(),i(5153,"td",26)(5154,"em")(5155,"strong"),e(5156,"(opcional)"),t()(),i(5157,"p"),e(5158,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(5159,"a",139)(5160,"code"),e(5161,"I18n"),t()()(),i(5162,"p"),e(5163,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(5164,"pre")(5165,"code"),e(5166,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},
`),t()(),i(5167,"blockquote")(5168,"p"),e(5169,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(5170,"p"),e(5171,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(5172,"p"),e(5173,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(5174,"a",139)(5175,"code"),e(5176,"I18n"),t()()()(),i(5177,"p"),e(5178,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(5179,"pre")(5180,"code"),e(5181,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(5182,"blockquote")(5183,"p"),e(5184,"Caso seja definida em conjunto com a propriedade "),i(5185,"code"),e(5186,"locale"),t(),e(5187," da coluna, o "),i(5188,"code"),e(5189,"editProperties.locale"),t(),e(5190," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(5191,"code"),e(5192,"locale"),t(),e(5193," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()(),i(5194,"blockquote")(5195,"p")(5196,"strong"),e(5197,"Componentes compat\xEDveis"),t(),e(5198,": "),i(5199,"code"),e(5200,"po-datepicker"),t(),e(5201,", "),i(5202,"code"),e(5203,"po-decimal"),t(),e(5204,", "),i(5205,"code"),e(5206,"po-timepicker"),t(),e(5207,"."),t()()()(),i(5208,"tr",19)(5209,"td",20)(5210,"div",21)(5211,"span",22),e(5212," lookupGridProperties"),r(5213,"br"),t()()(),i(5214,"td",23)(5215,"code",163),e(5216,"ThfLookupGridProperties"),t()(),i(5217,"td",26)(5218,"em")(5219,"strong"),e(5220,"(opcional)"),t()(),i(5221,"p"),e(5222,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(5223,"blockquote")(5224,"p")(5225,"strong"),e(5226,"Componentes compat\xEDveis"),t(),e(5227,": thf-lookup`"),t()()()(),i(5228,"tr",19)(5229,"td",20)(5230,"div",21)(5231,"span",22),e(5232," onBlur"),r(5233,"br"),t()()(),i(5234,"td",23)(5235,"code",27),e(5236,"Function"),t()(),i(5237,"td",26)(5238,"em")(5239,"strong"),e(5240,"(opcional)"),t()(),i(5241,"p"),e(5242,"Evento disparado ao sair do campo."),t(),i(5243,"blockquote")(5244,"p")(5245,"strong"),e(5246,"Componentes compat\xEDveis"),t(),e(5247,": "),i(5248,"code"),e(5249,"po-input"),t(),e(5250,", "),i(5251,"code"),e(5252,"po-number"),t(),e(5253,", "),i(5254,"code"),e(5255,"po-decimal"),t(),e(5256,", "),i(5257,"code"),e(5258,"po-datepicker"),t(),e(5259,", "),i(5260,"code"),e(5261,"po-timepicker"),t(),e(5262,", "),i(5263,"code"),e(5264,"po-select"),t(),e(5265,", "),i(5266,"code"),e(5267,"po-combo"),t(),e(5268,", "),i(5269,"code"),e(5270,"po-multiselect"),t(),e(5271,", "),i(5272,"code"),e(5273,"po-checkbox"),t()()()()(),i(5274,"tr",19)(5275,"td",20)(5276,"div",21)(5277,"span",22),e(5278," onChange"),r(5279,"br"),t()()(),i(5280,"td",23)(5281,"code",164),e(5282,"(value: any) => void"),t()(),i(5283,"td",26)(5284,"em")(5285,"strong"),e(5286,"(opcional)"),t()(),i(5287,"p"),e(5288,"Evento disparado ao alterar valor e deixar o campo."),t(),i(5289,"blockquote")(5290,"p")(5291,"strong"),e(5292,"Componentes compat\xEDveis"),t(),e(5293,": "),i(5294,"code"),e(5295,"po-input"),t(),e(5296,", "),i(5297,"code"),e(5298,"po-number"),t(),e(5299,", "),i(5300,"code"),e(5301,"po-decimal"),t(),e(5302,", "),i(5303,"code"),e(5304,"po-datepicker"),t(),e(5305,", "),i(5306,"code"),e(5307,"po-timepicker"),t(),e(5308,", "),i(5309,"code"),e(5310,"po-select"),t(),e(5311,", "),i(5312,"code"),e(5313,"po-switch"),t(),e(5314,", "),i(5315,"code"),e(5316,"po-combo"),t(),e(5317,", "),i(5318,"code"),e(5319,"po-multiselect"),t(),e(5320,", "),i(5321,"code"),e(5322,"po-checkbox"),t(),e(5323,", "),i(5324,"code"),e(5325,"thf-lookup"),t()()()()(),i(5326,"tr",19)(5327,"td",20)(5328,"div",21)(5329,"span",22),e(5330," onChangeModel"),r(5331,"br"),t()()(),i(5332,"td",23)(5333,"code",165),e(5334,"(model: any) => void"),t()(),i(5335,"td",26)(5336,"em")(5337,"strong"),e(5338,"(opcional)"),t()(),i(5339,"p"),e(5340,"Evento disparado ao alterar valor do model."),t(),i(5341,"blockquote")(5342,"p")(5343,"strong"),e(5344,"Componentes compat\xEDveis"),t(),e(5345,": "),i(5346,"code"),e(5347,"po-input"),t(),e(5348,", "),i(5349,"code"),e(5350,"po-number"),t(),e(5351,", "),i(5352,"code"),e(5353,"po-decimal"),t(),e(5354,", "),i(5355,"code"),e(5356,"po-select"),t(),e(5357,", "),i(5358,"code"),e(5359,"po-combo"),t(),e(5360,", "),i(5361,"code"),e(5362,"thf-lookup"),t()()()()(),i(5363,"tr",19)(5364,"td",20)(5365,"div",21)(5366,"span",22),e(5367," onEnter"),r(5368,"br"),t()()(),i(5369,"td",23)(5370,"code",27),e(5371,"Function"),t()(),i(5372,"td",26)(5373,"em")(5374,"strong"),e(5375,"(opcional)"),t()(),i(5376,"p"),e(5377,"Evento disparado ao entrar no campo."),t(),i(5378,"blockquote")(5379,"p")(5380,"strong"),e(5381,"Componentes compat\xEDveis"),t(),e(5382,": "),i(5383,"code"),e(5384,"po-input"),t(),e(5385,", "),i(5386,"code"),e(5387,"po-number"),t(),e(5388,", "),i(5389,"code"),e(5390,"po-decimal"),t()()()()(),i(5391,"tr",19)(5392,"td",20)(5393,"div",21)(5394,"span",22),e(5395," onError"),r(5396,"br"),t()()(),i(5397,"td",23)(5398,"code",166),e(5399,"(error: HttpErrorResponse) => void"),t()(),i(5400,"td",26)(5401,"em")(5402,"strong"),e(5403,"(opcional)"),t()(),i(5404,"p"),e(5405,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(5406,"blockquote")(5407,"p")(5408,"strong"),e(5409,"Componente compat\xEDvel"),t(),e(5410,": "),i(5411,"code"),e(5412,"thf-lookup"),t()()()()(),i(5413,"tr",19)(5414,"td",20)(5415,"div",21)(5416,"span",22),e(5417," onFocus"),r(5418,"br"),t()()(),i(5419,"td",23)(5420,"code",27),e(5421,"Function"),t()(),i(5422,"td",26)(5423,"em")(5424,"strong"),e(5425,"(opcional)"),t()(),i(5426,"p"),e(5427,"Callback disparado quando o campo recebe foco."),t(),i(5428,"blockquote")(5429,"p")(5430,"strong"),e(5431,"Componente compat\xEDvel"),t(),e(5432,": "),i(5433,"code"),e(5434,"thf-lookup"),t()()()()(),i(5435,"tr",19)(5436,"td",20)(5437,"div",21)(5438,"span",22),e(5439," onInputChange"),r(5440,"br"),t()()(),i(5441,"td",23)(5442,"code",164),e(5443,"(value: any) => void"),t()(),i(5444,"td",26)(5445,"em")(5446,"strong"),e(5447,"(opcional)"),t()(),i(5448,"p"),e(5449,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(5450,"blockquote")(5451,"p")(5452,"strong"),e(5453,"Componente compat\xEDvel"),t(),e(5454,": "),i(5455,"code"),e(5456,"po-combo"),t()()()()(),i(5457,"tr",19)(5458,"td",20)(5459,"div",21)(5460,"span",22),e(5461," onSelected"),r(5462,"br"),t()()(),i(5463,"td",23)(5464,"code",167),e(5465,"(selection: any "),t(),i(5466,"code",168),e(5467," Array<any>) => void"),t()(),i(5468,"td",26)(5469,"em")(5470,"strong"),e(5471,"(opcional)"),t()(),i(5472,"p"),e(5473,"Callback disparado ao selecionar item(s)."),t(),i(5474,"blockquote")(5475,"p")(5476,"strong"),e(5477,"Componente compat\xEDvel"),t(),e(5478,": "),i(5479,"code"),e(5480,"thf-lookup"),t()()()()(),i(5481,"tr",19)(5482,"td",20)(5483,"div",21)(5484,"span",22),e(5485," readonly"),r(5486,"br"),t()()(),i(5487,"td",23)(5488,"code",24),e(5489,"boolean "),t(),i(5490,"code",159),e(5491," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5492,"td",26)(5493,"em")(5494,"strong"),e(5495,"(opcional)"),t()(),i(5496,"p"),e(5497,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(5498,"tr",19)(5499,"td",20)(5500,"div",21)(5501,"span",22),e(5502," required"),r(5503,"br"),t()()(),i(5504,"td",23)(5505,"code",24),e(5506,"boolean"),t()(),i(5507,"td",26)(5508,"em")(5509,"strong"),e(5510,"(opcional)"),t()(),i(5511,"p"),e(5512,"Define a obrigatoriedade do campo."),t(),i(5513,"blockquote")(5514,"p"),e(5515,"Caso seja definido como "),i(5516,"code"),e(5517,"true"),t(),e(5518,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(5519,"tr",19)(5520,"td",20)(5521,"div",21)(5522,"span",22),e(5523," size"),r(5524,"br"),t()()(),i(5525,"td",23)(5526,"code",169),e(5527,"'sm' "),t(),i(5528,"code",170),e(5529," 'md' "),t(),i(5530,"code",171),e(5531," 'lg' "),t(),i(5532,"code",172),e(5533," 'xl' "),t(),i(5534,"code",173),e(5535," 'auto'"),t()(),i(5536,"td",26)(5537,"em")(5538,"strong"),e(5539,"(opcional)"),t()(),i(5540,"p"),e(5541,"Propriedade para definir o tamanho do modal."),t(),i(5542,"blockquote")(5543,"p"),e(5544,"Componente compat\xEDvel: "),i(5545,"code"),e(5546,"thf-lookup"),t(),e(5547,"."),t()()()()()(),i(5548,"po-accordion-item",174)(5549,"h4",9)(5550,"code"),e(5551,"ThfGridDeleteService"),t()(),i(5552,"div",10)(5553,"p"),e(5554,"Interface para excluir algum item via servi\xE7o."),t()(),i(5555,"table",62)(5556,"tr",19)(5557,"th",63)(5558,"div",21)(5559,"h4")(5560,"span",22),e(5561," deleteItem "),t()()()()(),i(5562,"tr",26)(5563,"td",26)(5564,"p"),e(5565,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5566,"em"),e(5567,"Observable"),t(),e(5568,"."),t()()()(),i(5569,"h5")(5570,"b"),e(5571,"Par\xE2metros"),t()(),i(5572,"table",16)(5573,"tr",17)(5574,"th",18),e(5575,"Nome"),t(),i(5576,"th",18),e(5577,"Tipo"),t(),i(5578,"th",18),e(5579,"Descri\xE7\xE3o"),t()(),i(5580,"tr",19)(5581,"td",20),e(5582," selectedRow"),t(),i(5583,"td",23)(5584,"code",64),e(5585," any "),t()(),i(5586,"td",26)(5587,"p"),e(5588,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5589,"tr",19)(5590,"td",20),e(5591," filterParams"),t(),i(5592,"td",23)(5593,"code",64),e(5594," any "),t()(),i(5595,"td",26)(5596,"p"),e(5597,"Valor informado atrav\xE9s da propriedade "),i(5598,"code"),e(5599,"t-param-delete-api"),t(),e(5600,"."),t()()(),i(5601,"tr",19)(5602,"td",20),e(5603," keyValue"),t(),i(5604,"td",23)(5605,"code",64),e(5606," string "),t()(),i(5607,"td",26)(5608,"p"),e(5609,"Valor informado caso tenha alguma coluna com a propriedade "),i(5610,"code"),e(5611,"key"),t(),e(5612," ativa ou o valor da propriedade "),i(5613,"code"),e(5614,"id"),t(),e(5615,"."),t()()()(),r(5616,"br"),i(5617,"table",62)(5618,"tr",19)(5619,"th",63)(5620,"div",21)(5621,"h4")(5622,"span",22),e(5623," deleteBatchItems "),t()()()()(),i(5624,"tr",26)(5625,"td",26)(5626,"p"),e(5627,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5628,"code"),e(5629,"t-allow-batch-delete"),t(),e(5630,` habilitada, deve-se retornar
um `),i(5631,"em"),e(5632,"Observable"),t(),e(5633,"."),t(),i(5634,"p"),e(5635,"Ao habilitar a propriedade "),i(5636,"code"),e(5637,"t-allow-batch-delete"),t(),e(5638,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5639,"h5")(5640,"b"),e(5641,"Par\xE2metros"),t()(),i(5642,"table",16)(5643,"tr",17)(5644,"th",18),e(5645,"Nome"),t(),i(5646,"th",18),e(5647,"Tipo"),t(),i(5648,"th",18),e(5649,"Descri\xE7\xE3o"),t()(),i(5650,"tr",19)(5651,"td",20),e(5652," selectedRows"),t(),i(5653,"td",23)(5654,"code",64),e(5655," any "),t()(),i(5656,"td",26)(5657,"p"),e(5658,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5659,"tr",19)(5660,"td",20),e(5661," paramDelete"),t(),i(5662,"td",23)(5663,"code",64),e(5664," any "),t()(),i(5665,"td",26)(5666,"p"),e(5667,"Valor informado atrav\xE9s da propriedade "),i(5668,"code"),e(5669,"t-param-delete-api"),t(),e(5670,"."),t()()(),i(5671,"tr",19)(5672,"td",20),e(5673," keys"),t(),i(5674,"td",23)(5675,"code",64),e(5676," string "),t()(),i(5677,"td",26)(5678,"p"),e(5679,"Valor informado caso tenha alguma coluna com a propriedade "),i(5680,"code"),e(5681,"key"),t(),e(5682," ativa ou o valor da propriedade "),i(5683,"code"),e(5684,"id"),t(),e(5685,"."),t()()()(),r(5686,"br"),t(),i(5687,"po-accordion-item",175)(5688,"h4",9)(5689,"code"),e(5690,"ThfGridEditProperties"),t()(),i(5691,"div",10)(5692,"p"),e(5693,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5694,"strong"),e(5695,"t-edit-properties"),t(),e(5696,")."),t()(),i(5697,"h4",15),e(5698,"Propriedades"),t(),i(5699,"table",16)(5700,"tr",17)(5701,"th",18),e(5702,"Nome"),t(),i(5703,"th",18),e(5704,"Tipo"),t(),i(5705,"th",18),e(5706,"Descri\xE7\xE3o"),t()(),i(5707,"tr",19)(5708,"td",20)(5709,"div",21)(5710,"span",22),e(5711," actionEdit"),r(5712,"br"),t()()(),i(5713,"td",23)(5714,"code",176),e(5715,"(param: any) => FormGroup"),t()(),i(5716,"td",26)(5717,"p"),e(5718,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5719,"code"),e(5720,"property"),t(),e(5721," da coluna desejada."),t(),i(5722,"p"),e(5723,"Exemplo de envio para a API:"),t(),i(5724,"pre")(5725,"code",28),e(5726,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>
`),t()(),i(5727,"pre")(5728,"code",31),e(5729,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};
`),t()()()(),i(5730,"tr",19)(5731,"td",20)(5732,"div",21)(5733,"span",22),e(5734," validate"),r(5735,"br"),t()()(),i(5736,"td",23)(5737,"code",177),e(5738,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5739,"td",26)(5740,"em")(5741,"strong"),e(5742,"(opcional)"),t()(),i(5743,"p"),e(5744,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5745,"code"),e(5746,"property"),t(),e(5747,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5748,"code"),e(5749,"property"),t(),e(5750," da coluna desejada."),t()()()()(),i(5751,"po-accordion-item",178)(5752,"h4",9)(5753,"code"),e(5754,"ThfFilterByColumn"),t()(),i(5755,"div",10)(5756,"p"),e(5757,"Interface que define as condi\xE7\xF5es utilizadas no filtro por coluna."),t(),i(5758,"p"),e(5759,"Cada filtro pode conter "),i(5760,"strong"),e(5761,"at\xE9 duas condi\xE7\xF5es"),t(),e(5762,", combinadas pela l\xF3gica "),i(5763,"code"),e(5764,"and"),t(),e(5765," ou "),i(5766,"code"),e(5767,"or"),t(),e(5768,"."),t(),i(5769,"p"),e(5770,"Os operadores dispon\xEDveis e o tipo de valor aceito variam conforme o "),i(5771,"code"),e(5772,"type"),t(),e(5773,`
configurado na coluna (string, number, currency, date, time ou boolean).`),t(),i(5774,"p"),e(5775,"Para a lista completa de operadores permitidos por tipo, consulte as propriedades "),i(5776,"code"),e(5777,"operator1"),t(),e(5778," e "),i(5779,"code"),e(5780,"operator2"),t(),e(5781,"."),t()(),i(5782,"h4",15),e(5783,"Propriedades"),t(),i(5784,"table",16)(5785,"tr",17)(5786,"th",18),e(5787,"Nome"),t(),i(5788,"th",18),e(5789,"Tipo"),t(),i(5790,"th",18),e(5791,"Descri\xE7\xE3o"),t()(),i(5792,"tr",19)(5793,"td",20)(5794,"div",21)(5795,"span",22),e(5796," logic"),r(5797,"br"),t()()(),i(5798,"td",23)(5799,"code",38),e(5800,"string"),t()(),i(5801,"td",26)(5802,"em")(5803,"strong"),e(5804,"(opcional)"),t()(),i(5805,"p"),e(5806,"L\xF3gica entre as duas condi\xE7\xF5es do filtro."),t(),i(5807,"p"),e(5808,"Valores v\xE1lidos: "),i(5809,"code"),e(5810,"and"),t(),e(5811," | "),i(5812,"code"),e(5813,"or"),t(),e(5814,"."),t(),i(5815,"p"),e(5816,"Para filtros do tipo "),i(5817,"code"),e(5818,"boolean"),t(),e(5819,", a l\xF3gica ainda pode ser usada:"),t(),i(5820,"ul")(5821,"li")(5822,"code"),e(5823,"and"),t(),e(5824,": exige que ambos os checkboxes marcados sejam verdadeiros no item"),t(),i(5825,"li")(5826,"code"),e(5827,"or"),t(),e(5828,": aceita qualquer item que corresponda a um dos valores marcados"),t()()()(),i(5829,"tr",19)(5830,"td",20)(5831,"div",21)(5832,"span",22),e(5833," operator1"),r(5834,"br"),t()()(),i(5835,"td",23)(5836,"code",38),e(5837,"string"),t()(),i(5838,"td",26)(5839,"em")(5840,"strong"),e(5841,"(opcional)"),t()(),i(5842,"p"),e(5843,"Operador da primeira condi\xE7\xE3o do filtro."),t(),i(5844,"p"),e(5845,"Operadores dispon\xEDveis, dependendo do tipo da coluna:"),t(),i(5846,"p")(5847,"strong"),e(5848,"Para colunas do tipo "),i(5849,"code"),e(5850,"string"),t(),e(5851,":"),t()(),i(5852,"ul")(5853,"li")(5854,"code"),e(5855,"contains"),t(),e(5856," \u2014 cont\xE9m."),t(),i(5857,"li")(5858,"code"),e(5859,"doesnotcontain"),t(),e(5860," \u2014 n\xE3o cont\xE9m."),t(),i(5861,"li")(5862,"code"),e(5863,"eq"),t(),e(5864," \u2014 igual."),t(),i(5865,"li")(5866,"code"),e(5867,"neq"),t(),e(5868," \u2014 diferente."),t(),i(5869,"li")(5870,"code"),e(5871,"startswith"),t(),e(5872," \u2014 come\xE7a com."),t(),i(5873,"li")(5874,"code"),e(5875,"endswith"),t(),e(5876," \u2014 termina com."),t(),i(5877,"li")(5878,"code"),e(5879,"isnull"),t(),e(5880," \u2014 \xE9 nulo."),t(),i(5881,"li")(5882,"code"),e(5883,"isnotnull"),t(),e(5884," \u2014 n\xE3o \xE9 nulo."),t(),i(5885,"li")(5886,"code"),e(5887,"isempty"),t(),e(5888," \u2014 vazio ("),i(5889,"code"),e(5890,"''"),t(),e(5891,")."),t(),i(5892,"li")(5893,"code"),e(5894,"isnotempty"),t(),e(5895," \u2014 n\xE3o vazio."),t()(),i(5896,"p")(5897,"strong"),e(5898,"Para colunas "),i(5899,"code"),e(5900,"number"),t(),e(5901,", "),i(5902,"code"),e(5903,"currency"),t(),e(5904,", "),i(5905,"code"),e(5906,"date"),t(),e(5907," e "),i(5908,"code"),e(5909,"time"),t(),e(5910,":"),t()(),i(5911,"ul")(5912,"li")(5913,"code"),e(5914,"eq"),t(),e(5915," \u2014 igual."),t(),i(5916,"li")(5917,"code"),e(5918,"neq"),t(),e(5919," \u2014 diferente."),t(),i(5920,"li")(5921,"code"),e(5922,"gte"),t(),e(5923," \u2014 maior ou igual."),t(),i(5924,"li")(5925,"code"),e(5926,"gt"),t(),e(5927," \u2014 maior que."),t(),i(5928,"li")(5929,"code"),e(5930,"lte"),t(),e(5931," \u2014 menor ou igual."),t(),i(5932,"li")(5933,"code"),e(5934,"lt"),t(),e(5935," \u2014 menor que."),t(),i(5936,"li")(5937,"code"),e(5938,"isnull"),t(),e(5939," \u2014 nulo."),t(),i(5940,"li")(5941,"code"),e(5942,"isnotnull"),t(),e(5943," \u2014 n\xE3o nulo."),t()(),i(5944,"p")(5945,"strong"),e(5946,"Para colunas do tipo "),i(5947,"code"),e(5948,"boolean"),t(),e(5949,", esta propriedade \xE9 ignorada."),t()()()(),i(5950,"tr",19)(5951,"td",20)(5952,"div",21)(5953,"span",22),e(5954," operator2"),r(5955,"br"),t()()(),i(5956,"td",23)(5957,"code",38),e(5958,"string"),t()(),i(5959,"td",26)(5960,"em")(5961,"strong"),e(5962,"(opcional)"),t()(),i(5963,"p"),e(5964,"Operador da segunda condi\xE7\xE3o do filtro."),t(),i(5965,"p"),e(5966,"Funciona exatamente como "),i(5967,"code"),e(5968,"operator1"),t(),e(5969,`, respeitando os operadores v\xE1lidos para o tipo
da coluna.`),t(),i(5970,"p"),e(5971,"Ignorado para filtros do tipo "),i(5972,"code"),e(5973,"boolean"),t(),e(5974,"."),t()()(),i(5975,"tr",19)(5976,"td",20)(5977,"div",21)(5978,"span",22),e(5979," property"),r(5980,"br"),t()()(),i(5981,"td",23)(5982,"code",38),e(5983,"string"),t()(),i(5984,"td",26)(5985,"p"),e(5986,"Nome da propriedade da coluna que ter\xE1 o filtro aplicado."),t()()(),i(5987,"tr",19)(5988,"td",20)(5989,"div",21)(5990,"span",22),e(5991," value1"),r(5992,"br"),t()()(),i(5993,"td",23)(5994,"code",179),e(5995,"any"),t()(),i(5996,"td",26)(5997,"p"),e(5998,"Valor comparado na primeira condi\xE7\xE3o do filtro."),t(),i(5999,"ul")(6e3,"li"),e(6001,"Para "),i(6002,"code"),e(6003,"string"),t(),e(6004,", "),i(6005,"code"),e(6006,"number"),t(),e(6007,", "),i(6008,"code"),e(6009,"currency"),t(),e(6010,", "),i(6011,"code"),e(6012,"date"),t(),e(6013," e "),i(6014,"code"),e(6015,"time"),t(),e(6016,", corresponde ao valor informado no campo."),t(),i(6017,"li"),e(6018,"Para "),i(6019,"code"),e(6020,"boolean"),t(),e(6021,", deve ser "),i(6022,"code"),e(6023,"true"),t(),e(6024," ou "),i(6025,"code"),e(6026,"false"),t(),e(6027,", representando o estado do checkbox."),t()()()(),i(6028,"tr",19)(6029,"td",20)(6030,"div",21)(6031,"span",22),e(6032," value2"),r(6033,"br"),t()()(),i(6034,"td",23)(6035,"code",179),e(6036,"any"),t()(),i(6037,"td",26)(6038,"em")(6039,"strong"),e(6040,"(opcional)"),t()(),i(6041,"p"),e(6042,"Valor comparado na segunda condi\xE7\xE3o do filtro."),t(),i(6043,"ul")(6044,"li"),e(6045,"Para "),i(6046,"code"),e(6047,"string"),t(),e(6048,", "),i(6049,"code"),e(6050,"number"),t(),e(6051,", "),i(6052,"code"),e(6053,"currency"),t(),e(6054,", "),i(6055,"code"),e(6056,"date"),t(),e(6057," e "),i(6058,"code"),e(6059,"time"),t(),e(6060,", \xE9 o valor informado na segunda entrada."),t(),i(6061,"li"),e(6062,"Para "),i(6063,"code"),e(6064,"boolean"),t(),e(6065,", \xE9 o valor associado ao segundo checkbox ("),i(6066,"code"),e(6067,"true"),t(),e(6068," ou "),i(6069,"code"),e(6070,"false"),t(),e(6071,")."),t()()()()()(),i(6072,"po-accordion-item",180)(6073,"h4",9)(6074,"code"),e(6075,"ThfGridLiterals"),t()(),i(6076,"div",10)(6077,"p"),e(6078,"Interface para customizar literais ("),i(6079,"strong"),e(6080,"t-literals"),t(),e(6081,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(6082,"h4",15),e(6083,"Propriedades"),t(),i(6084,"table",16)(6085,"tr",17)(6086,"th",18),e(6087,"Nome"),t(),i(6088,"th",18),e(6089,"Tipo"),t(),i(6090,"th",18),e(6091,"Descri\xE7\xE3o"),t()(),i(6092,"tr",19)(6093,"td",20)(6094,"div",21)(6095,"span",22),e(6096," advancedSearch"),r(6097,"br"),t()()(),i(6098,"td",23)(6099,"code",38),e(6100,"string"),t()(),i(6101,"td",26)(6102,"em")(6103,"strong"),e(6104,"(opcional)"),t()(),i(6105,"p"),e(6106,"T\xEDtulo do modal Filtros"),t()()(),i(6107,"tr",19)(6108,"td",20)(6109,"div",21)(6110,"span",22),e(6111," and"),r(6112,"br"),t()()(),i(6113,"td",23)(6114,"code",38),e(6115,"string"),t()(),i(6116,"td",26)(6117,"em")(6118,"strong"),e(6119,"(opcional)"),t()(),i(6120,"p"),e(6121,"Op\xE7\xE3o E, filtro por coluna."),t()()(),i(6122,"tr",19)(6123,"td",20)(6124,"div",21)(6125,"span",22),e(6126," averageAggregate"),r(6127,"br"),t()()(),i(6128,"td",23)(6129,"code",38),e(6130,"string"),t()(),i(6131,"td",26)(6132,"em")(6133,"strong"),e(6134,"(opcional)"),t()(),i(6135,"p"),e(6136,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6137,"strong"),e(6138,"M\xE9dia"),t(),e(6139," (Average)"),t()()(),i(6140,"tr",19)(6141,"td",20)(6142,"div",21)(6143,"span",22),e(6144," bodyDelete"),r(6145,"br"),t()()(),i(6146,"td",23)(6147,"code",38),e(6148,"string"),t()(),i(6149,"td",26)(6150,"em")(6151,"strong"),e(6152,"(opcional)"),t()(),i(6153,"p"),e(6154,"Conte\xFAdo do modal Excluir"),t()()(),i(6155,"tr",19)(6156,"td",20)(6157,"div",21)(6158,"span",22),e(6159," bodyDeleteBatch"),r(6160,"br"),t()()(),i(6161,"td",23)(6162,"code",38),e(6163,"string"),t()(),i(6164,"td",26)(6165,"em")(6166,"strong"),e(6167,"(opcional)"),t()(),i(6168,"p"),e(6169,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(6170,"tr",19)(6171,"td",20)(6172,"div",21)(6173,"span",22),e(6174," cancel"),r(6175,"br"),t()()(),i(6176,"td",23)(6177,"code",38),e(6178,"string"),t()(),i(6179,"td",26)(6180,"em")(6181,"strong"),e(6182,"(opcional)"),t()(),i(6183,"p"),e(6184,"Label do bot\xE3o Cancelar"),t()()(),i(6185,"tr",19)(6186,"td",20)(6187,"div",21)(6188,"span",22),e(6189," checkFalse"),r(6190,"br"),t()()(),i(6191,"td",23)(6192,"code",38),e(6193,"string"),t()(),i(6194,"td",26)(6195,"em")(6196,"strong"),e(6197,"(opcional)"),t()(),i(6198,"p"),e(6199,"Checkbox n\xE3o, filtro por coluna."),t()()(),i(6200,"tr",19)(6201,"td",20)(6202,"div",21)(6203,"span",22),e(6204," checkTrue"),r(6205,"br"),t()()(),i(6206,"td",23)(6207,"code",38),e(6208,"string"),t()(),i(6209,"td",26)(6210,"em")(6211,"strong"),e(6212,"(opcional)"),t()(),i(6213,"p"),e(6214,"Checkbox sim, filtro por coluna."),t()()(),i(6215,"tr",19)(6216,"td",20)(6217,"div",21)(6218,"span",22),e(6219," columnsManager"),r(6220,"br"),t()()(),i(6221,"td",23)(6222,"code",38),e(6223,"string"),t()(),i(6224,"td",26)(6225,"em")(6226,"strong"),e(6227,"(opcional)"),t()(),i(6228,"p"),e(6229,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(6230,"tr",19)(6231,"td",20)(6232,"div",21)(6233,"span",22),e(6234," compact"),r(6235,"br"),t()()(),i(6236,"td",23)(6237,"code",38),e(6238,"string"),t()(),i(6239,"td",26)(6240,"em")(6241,"strong"),e(6242,"(opcional)"),t()(),i(6243,"p"),e(6244,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(6245,"tr",19)(6246,"td",20)(6247,"div",21)(6248,"span",22),e(6249," confirm"),r(6250,"br"),t()()(),i(6251,"td",23)(6252,"code",38),e(6253,"string"),t()(),i(6254,"td",26)(6255,"em")(6256,"strong"),e(6257,"(opcional)"),t()(),i(6258,"p"),e(6259,"Label do bot\xE3o Confirmar"),t()()(),i(6260,"tr",19)(6261,"td",20)(6262,"div",21)(6263,"span",22),e(6264," contains"),r(6265,"br"),t()()(),i(6266,"td",23)(6267,"code",38),e(6268,"string"),t()(),i(6269,"td",26)(6270,"em")(6271,"strong"),e(6272,"(opcional)"),t()(),i(6273,"p"),e(6274,"Op\xE7\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6275,"tr",19)(6276,"td",20)(6277,"div",21)(6278,"span",22),e(6279," countAggregate"),r(6280,"br"),t()()(),i(6281,"td",23)(6282,"code",38),e(6283,"string"),t()(),i(6284,"td",26)(6285,"em")(6286,"strong"),e(6287,"(opcional)"),t()(),i(6288,"p"),e(6289,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6290,"strong"),e(6291,"Contagem"),t(),e(6292," (Count)"),t()()(),i(6293,"tr",19)(6294,"td",20)(6295,"div",21)(6296,"span",22),e(6297," default"),r(6298,"br"),t()()(),i(6299,"td",23)(6300,"code",38),e(6301,"string"),t()(),i(6302,"td",26)(6303,"em")(6304,"strong"),e(6305,"(opcional)"),t()(),i(6306,"p"),e(6307,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(6308,"tr",19)(6309,"td",20)(6310,"div",21)(6311,"span",22),e(6312," delete"),r(6313,"br"),t()()(),i(6314,"td",23)(6315,"code",38),e(6316,"string"),t()(),i(6317,"td",26)(6318,"em")(6319,"strong"),e(6320,"(opcional)"),t()(),i(6321,"p"),e(6322,"Label do bot\xE3o Excluir"),t()()(),i(6323,"tr",19)(6324,"td",20)(6325,"div",21)(6326,"span",22),e(6327," deleteApiError"),r(6328,"br"),t()()(),i(6329,"td",23)(6330,"code",38),e(6331,"string"),t()(),i(6332,"td",26)(6333,"em")(6334,"strong"),e(6335,"(opcional)"),t()(),i(6336,"p"),e(6337,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(6338,"tr",19)(6339,"td",20)(6340,"div",21)(6341,"span",22),e(6342," deleteItem"),r(6343,"br"),t()()(),i(6344,"td",23)(6345,"code",38),e(6346,"string"),t()(),i(6347,"td",26)(6348,"em")(6349,"strong"),e(6350,"(opcional)"),t()(),i(6351,"p"),e(6352,"T\xEDtulo do modal Excluir"),t()()(),i(6353,"tr",19)(6354,"td",20)(6355,"div",21)(6356,"span",22),e(6357," density"),r(6358,"br"),t()()(),i(6359,"td",23)(6360,"code",38),e(6361,"string"),t()(),i(6362,"td",26)(6363,"em")(6364,"strong"),e(6365,"(opcional)"),t()(),i(6366,"p"),e(6367,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(6368,"tr",19)(6369,"td",20)(6370,"div",21)(6371,"span",22),e(6372," doesntContain"),r(6373,"br"),t()()(),i(6374,"td",23)(6375,"code",38),e(6376,"string"),t()(),i(6377,"td",26)(6378,"em")(6379,"strong"),e(6380,"(opcional)"),t()(),i(6381,"p"),e(6382,"Op\xE7\xE3o n\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6383,"tr",19)(6384,"td",20)(6385,"div",21)(6386,"span",22),e(6387," draggable"),r(6388,"br"),t()()(),i(6389,"td",23)(6390,"code",38),e(6391,"string"),t()(),i(6392,"td",26)(6393,"em")(6394,"strong"),e(6395,"(opcional)"),t()(),i(6396,"p"),e(6397,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6398,"tr",19)(6399,"td",20)(6400,"div",21)(6401,"span",22),e(6402," edit"),r(6403,"br"),t()()(),i(6404,"td",23)(6405,"code",38),e(6406,"string"),t()(),i(6407,"td",26)(6408,"em")(6409,"strong"),e(6410,"(opcional)"),t()(),i(6411,"p"),e(6412,"Label do bot\xE3o Editar"),t()()(),i(6413,"tr",19)(6414,"td",20)(6415,"div",21)(6416,"span",22),e(6417," editRow"),r(6418,"br"),t()()(),i(6419,"td",23)(6420,"code",38),e(6421,"string"),t()(),i(6422,"td",26)(6423,"em")(6424,"strong"),e(6425,"(opcional)"),t()(),i(6426,"p"),e(6427,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(6428,"tr",19)(6429,"td",20)(6430,"div",21)(6431,"span",22),e(6432," endsWith"),r(6433,"br"),t()()(),i(6434,"td",23)(6435,"code",38),e(6436,"string"),t()(),i(6437,"td",26)(6438,"em")(6439,"strong"),e(6440,"(opcional)"),t()(),i(6441,"p"),e(6442,"Op\xE7\xE3o Termina com, filtro por coluna."),t()()(),i(6443,"tr",19)(6444,"td",20)(6445,"div",21)(6446,"span",22),e(6447," export"),r(6448,"br"),t()()(),i(6449,"td",23)(6450,"code",38),e(6451,"string"),t()(),i(6452,"td",26)(6453,"em")(6454,"strong"),e(6455,"(opcional)"),t()(),i(6456,"p"),e(6457,"Label do bot\xE3o Exportar"),t()()(),i(6458,"tr",19)(6459,"td",20)(6460,"div",21)(6461,"span",22),e(6462," exportExcel"),r(6463,"br"),t()()(),i(6464,"td",23)(6465,"code",38),e(6466,"string"),t()(),i(6467,"td",26)(6468,"em")(6469,"strong"),e(6470,"(opcional)"),t()(),i(6471,"p"),e(6472,"Label do bot\xE3o Exportar Excel"),t()()(),i(6473,"tr",19)(6474,"td",20)(6475,"div",21)(6476,"span",22),e(6477," exportPDF"),r(6478,"br"),t()()(),i(6479,"td",23)(6480,"code",38),e(6481,"string"),t()(),i(6482,"td",26)(6483,"em")(6484,"strong"),e(6485,"(opcional)"),t()(),i(6486,"p"),e(6487,"Label do bot\xE3o Exportar PDF"),t()()(),i(6488,"tr",19)(6489,"td",20)(6490,"div",21)(6491,"span",22),e(6492," extraCompact"),r(6493,"br"),t()()(),i(6494,"td",23)(6495,"code",38),e(6496,"string"),t()(),i(6497,"td",26)(6498,"em")(6499,"strong"),e(6500,"(opcional)"),t()(),i(6501,"p"),e(6502,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(6503,"tr",19)(6504,"td",20)(6505,"div",21)(6506,"span",22),e(6507," filterButton"),r(6508,"br"),t()()(),i(6509,"td",23)(6510,"code",38),e(6511,"string"),t()(),i(6512,"td",26)(6513,"em")(6514,"strong"),e(6515,"(opcional)"),t()(),i(6516,"p"),e(6517,"Bot\xE3o de filtrar por coluna."),t()()(),i(6518,"tr",19)(6519,"td",20)(6520,"div",21)(6521,"span",22),e(6522," filterByColumn"),r(6523,"br"),t()()(),i(6524,"td",23)(6525,"code",38),e(6526,"string"),t()(),i(6527,"td",26)(6528,"em")(6529,"strong"),e(6530,"(opcional)"),t()(),i(6531,"p"),e(6532,"Filtros, filtro por coluna."),t()()(),i(6533,"tr",19)(6534,"td",20)(6535,"div",21)(6536,"span",22),e(6537," filters"),r(6538,"br"),t()()(),i(6539,"td",23)(6540,"code",38),e(6541,"string"),t()(),i(6542,"td",26)(6543,"em")(6544,"strong"),e(6545,"(opcional)"),t()(),i(6546,"p"),e(6547,"Label do bot\xE3o Filtros"),t()()(),i(6548,"tr",19)(6549,"td",20)(6550,"div",21)(6551,"span",22),e(6552," fixed"),r(6553,"br"),t()()(),i(6554,"td",23)(6555,"code",38),e(6556,"string"),t()(),i(6557,"td",26)(6558,"em")(6559,"strong"),e(6560,"(opcional)"),t()(),i(6561,"p"),e(6562,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(6563,"tr",19)(6564,"td",20)(6565,"div",21)(6566,"span",22),e(6567," gridRowActionsConfirmAddCancelButton"),r(6568,"br"),t()()(),i(6569,"td",23)(6570,"code",38),e(6571,"string"),t()(),i(6572,"td",26)(6573,"em")(6574,"strong"),e(6575,"(opcional)"),t()(),i(6576,"p"),e(6577,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6578,"tr",19)(6579,"td",20)(6580,"div",21)(6581,"span",22),e(6582," gridRowActionsConfirmAddConfirmButton"),r(6583,"br"),t()()(),i(6584,"td",23)(6585,"code",38),e(6586,"string"),t()(),i(6587,"td",26)(6588,"em")(6589,"strong"),e(6590,"(opcional)"),t()(),i(6591,"p"),e(6592,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6593,"tr",19)(6594,"td",20)(6595,"div",21)(6596,"span",22),e(6597," gridRowActionsConfirmAddTitle"),r(6598,"br"),t()()(),i(6599,"td",23)(6600,"code",38),e(6601,"string"),t()(),i(6602,"td",26)(6603,"em")(6604,"strong"),e(6605,"(opcional)"),t()(),i(6606,"p"),e(6607,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6608,"tr",19)(6609,"td",20)(6610,"div",21)(6611,"span",22),e(6612," gridRowActionsConfirmEditTitle"),r(6613,"br"),t()()(),i(6614,"td",23)(6615,"code",38),e(6616,"string"),t()(),i(6617,"td",26)(6618,"em")(6619,"strong"),e(6620,"(opcional)"),t()(),i(6621,"p"),e(6622,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6623,"tr",19)(6624,"td",20)(6625,"div",21)(6626,"span",22),e(6627," gridRowActionsConfirmRemoveAttention"),r(6628,"br"),t()()(),i(6629,"td",23)(6630,"code",38),e(6631,"string"),t()(),i(6632,"td",26)(6633,"em")(6634,"strong"),e(6635,"(opcional)"),t()(),i(6636,"p"),e(6637,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6638,"tr",19)(6639,"td",20)(6640,"div",21)(6641,"span",22),e(6642," gridRowActionsConfirmRemoveConfirmButton"),r(6643,"br"),t()()(),i(6644,"td",23)(6645,"code",38),e(6646,"string"),t()(),i(6647,"td",26)(6648,"em")(6649,"strong"),e(6650,"(opcional)"),t()(),i(6651,"p"),e(6652,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6653,"tr",19)(6654,"td",20)(6655,"div",21)(6656,"span",22),e(6657," gridRowActionsConfirmRemoveDescription"),r(6658,"br"),t()()(),i(6659,"td",23)(6660,"code",38),e(6661,"string"),t()(),i(6662,"td",26)(6663,"em")(6664,"strong"),e(6665,"(opcional)"),t()(),i(6666,"p"),e(6667,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6668,"tr",19)(6669,"td",20)(6670,"div",21)(6671,"span",22),e(6672," gridRowActionsConfirmRemoveTitle"),r(6673,"br"),t()()(),i(6674,"td",23)(6675,"code",38),e(6676,"string"),t()(),i(6677,"td",26)(6678,"em")(6679,"strong"),e(6680,"(opcional)"),t()(),i(6681,"p"),e(6682,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6683,"tr",19)(6684,"td",20)(6685,"div",21)(6686,"span",22),e(6687," gridRowActionsRestoreSuccessful"),r(6688,"br"),t()()(),i(6689,"td",23)(6690,"code",38),e(6691,"string"),t()(),i(6692,"td",26)(6693,"em")(6694,"strong"),e(6695,"(opcional)"),t()(),i(6696,"p"),e(6697,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(6698,"tr",19)(6699,"td",20)(6700,"div",21)(6701,"span",22),e(6702," groupable"),r(6703,"br"),t()()(),i(6704,"td",23)(6705,"code",38),e(6706,"string"),t()(),i(6707,"td",26)(6708,"em")(6709,"strong"),e(6710,"(opcional)"),t()(),i(6711,"p"),e(6712,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6713,"tr",19)(6714,"td",20)(6715,"div",21)(6716,"span",22),e(6717," groupableText"),r(6718,"br"),t()()(),i(6719,"td",23)(6720,"code",38),e(6721,"string"),t()(),i(6722,"td",26)(6723,"em")(6724,"strong"),e(6725,"(opcional)"),t()(),i(6726,"p"),e(6727,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(6728,"tr",19)(6729,"td",20)(6730,"div",21)(6731,"span",22),e(6732," isAfter"),r(6733,"br"),t()()(),i(6734,"td",23)(6735,"code",38),e(6736,"string"),t()(),i(6737,"td",26)(6738,"em")(6739,"strong"),e(6740,"(opcional)"),t()(),i(6741,"p"),e(6742,"Op\xE7\xE3o \xC9 posterior que, filtro por coluna."),t()()(),i(6743,"tr",19)(6744,"td",20)(6745,"div",21)(6746,"span",22),e(6747," isAfterOrEqual"),r(6748,"br"),t()()(),i(6749,"td",23)(6750,"code",38),e(6751,"string"),t()(),i(6752,"td",26)(6753,"em")(6754,"strong"),e(6755,"(opcional)"),t()(),i(6756,"p"),e(6757,"Op\xE7\xE3o \xC9 posterior ou igual a, filtro por coluna."),t()()(),i(6758,"tr",19)(6759,"td",20)(6760,"div",21)(6761,"span",22),e(6762," isBefore"),r(6763,"br"),t()()(),i(6764,"td",23)(6765,"code",38),e(6766,"string"),t()(),i(6767,"td",26)(6768,"em")(6769,"strong"),e(6770,"(opcional)"),t()(),i(6771,"p"),e(6772,"Op\xE7\xE3o \xC9 anterior que, filtro por coluna."),t()()(),i(6773,"tr",19)(6774,"td",20)(6775,"div",21)(6776,"span",22),e(6777," isBeforeOrEqual"),r(6778,"br"),t()()(),i(6779,"td",23)(6780,"code",38),e(6781,"string"),t()(),i(6782,"td",26)(6783,"em")(6784,"strong"),e(6785,"(opcional)"),t()(),i(6786,"p"),e(6787,"Op\xE7\xE3o \xC9 anterior ou igual a, filtro por coluna."),t()()(),i(6788,"tr",19)(6789,"td",20)(6790,"div",21)(6791,"span",22),e(6792," isEmpty"),r(6793,"br"),t()()(),i(6794,"td",23)(6795,"code",38),e(6796,"string"),t()(),i(6797,"td",26)(6798,"em")(6799,"strong"),e(6800,"(opcional)"),t()(),i(6801,"p"),e(6802,"Op\xE7\xE3o \xC9 vazio, filtro por coluna."),t()()(),i(6803,"tr",19)(6804,"td",20)(6805,"div",21)(6806,"span",22),e(6807," isEqual"),r(6808,"br"),t()()(),i(6809,"td",23)(6810,"code",38),e(6811,"string"),t()(),i(6812,"td",26)(6813,"em")(6814,"strong"),e(6815,"(opcional)"),t()(),i(6816,"p"),e(6817,"Op\xE7\xE3o igual a, filtro por coluna."),t()()(),i(6818,"tr",19)(6819,"td",20)(6820,"div",21)(6821,"span",22),e(6822," isGreater"),r(6823,"br"),t()()(),i(6824,"td",23)(6825,"code",38),e(6826,"string"),t()(),i(6827,"td",26)(6828,"em")(6829,"strong"),e(6830,"(opcional)"),t()(),i(6831,"p"),e(6832,"Op\xE7\xE3o \xC9 maior que, filtro por coluna."),t()()(),i(6833,"tr",19)(6834,"td",20)(6835,"div",21)(6836,"span",22),e(6837," isGreaterOrEqual"),r(6838,"br"),t()()(),i(6839,"td",23)(6840,"code",38),e(6841,"string"),t()(),i(6842,"td",26)(6843,"em")(6844,"strong"),e(6845,"(opcional)"),t()(),i(6846,"p"),e(6847,"Op\xE7\xE3o \xC9 maior ou igual a, filtro por coluna."),t()()(),i(6848,"tr",19)(6849,"td",20)(6850,"div",21)(6851,"span",22),e(6852," isLess"),r(6853,"br"),t()()(),i(6854,"td",23)(6855,"code",38),e(6856,"string"),t()(),i(6857,"td",26)(6858,"em")(6859,"strong"),e(6860,"(opcional)"),t()(),i(6861,"p"),e(6862,"Op\xE7\xE3o \xC9 menor que, filtro por coluna."),t()()(),i(6863,"tr",19)(6864,"td",20)(6865,"div",21)(6866,"span",22),e(6867," isLessOrEqual"),r(6868,"br"),t()()(),i(6869,"td",23)(6870,"code",38),e(6871,"string"),t()(),i(6872,"td",26)(6873,"em")(6874,"strong"),e(6875,"(opcional)"),t()(),i(6876,"p"),e(6877,"Op\xE7\xE3o \xC9 menor ou igual que, filtro por coluna."),t()()(),i(6878,"tr",19)(6879,"td",20)(6880,"div",21)(6881,"span",22),e(6882," isNotEmpty"),r(6883,"br"),t()()(),i(6884,"td",23)(6885,"code",38),e(6886,"string"),t()(),i(6887,"td",26)(6888,"em")(6889,"strong"),e(6890,"(opcional)"),t()(),i(6891,"p"),e(6892,"Op\xE7\xE3o N\xE3o \xE9 vazio, filtro por coluna."),t()()(),i(6893,"tr",19)(6894,"td",20)(6895,"div",21)(6896,"span",22),e(6897," isNotEqual"),r(6898,"br"),t()()(),i(6899,"td",23)(6900,"code",38),e(6901,"string"),t()(),i(6902,"td",26)(6903,"em")(6904,"strong"),e(6905,"(opcional)"),t()(),i(6906,"p"),e(6907,"Op\xE7\xE3o n\xE3o igual, filtro por coluna."),t()()(),i(6908,"tr",19)(6909,"td",20)(6910,"div",21)(6911,"span",22),e(6912," isNotNull"),r(6913,"br"),t()()(),i(6914,"td",23)(6915,"code",38),e(6916,"string"),t()(),i(6917,"td",26)(6918,"em")(6919,"strong"),e(6920,"(opcional)"),t()(),i(6921,"p"),e(6922,"Op\xE7\xE3o N\xE3o \xE9 nulo, filtro por coluna."),t()()(),i(6923,"tr",19)(6924,"td",20)(6925,"div",21)(6926,"span",22),e(6927," isNull"),r(6928,"br"),t()()(),i(6929,"td",23)(6930,"code",38),e(6931,"string"),t()(),i(6932,"td",26)(6933,"em")(6934,"strong"),e(6935,"(opcional)"),t()(),i(6936,"p"),e(6937,"Op\xE7\xE3o \xC9 nulo, filtro por coluna."),t()()(),i(6938,"tr",19)(6939,"td",20)(6940,"div",21)(6941,"span",22),e(6942," legendListOptions"),r(6943,"br"),t()()(),i(6944,"td",23)(6945,"code",38),e(6946,"string"),t()(),i(6947,"td",26)(6948,"em")(6949,"strong"),e(6950,"(opcional)"),t()(),i(6951,"p"),e(6952,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6953,"tr",19)(6954,"td",20)(6955,"div",21)(6956,"span",22),e(6957," loadMoreData"),r(6958,"br"),t()()(),i(6959,"td",23)(6960,"code",38),e(6961,"string"),t()(),i(6962,"td",26)(6963,"em")(6964,"strong"),e(6965,"(opcional)"),t()(),i(6966,"p"),e(6967,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(6968,"tr",19)(6969,"td",20)(6970,"div",21)(6971,"span",22),e(6972," loadingData"),r(6973,"br"),t()()(),i(6974,"td",23)(6975,"code",38),e(6976,"string"),t()(),i(6977,"td",26)(6978,"em")(6979,"strong"),e(6980,"(opcional)"),t()(),i(6981,"p"),e(6982,"Texto do modal Carregando..."),t()()(),i(6983,"tr",19)(6984,"td",20)(6985,"div",21)(6986,"span",22),e(6987," manageTable"),r(6988,"br"),t()()(),i(6989,"td",23)(6990,"code",38),e(6991,"string"),t()(),i(6992,"td",26)(6993,"em")(6994,"strong"),e(6995,"(opcional)"),t()(),i(6996,"p"),e(6997,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(6998,"tr",19)(6999,"td",20)(7e3,"div",21)(7001,"span",22),e(7002," maxAggregate"),r(7003,"br"),t()()(),i(7004,"td",23)(7005,"code",38),e(7006,"string"),t()(),i(7007,"td",26)(7008,"em")(7009,"strong"),e(7010,"(opcional)"),t()(),i(7011,"p"),e(7012,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7013,"strong"),e(7014,"M\xE1ximo"),t(),e(7015," (Max)"),t()()(),i(7016,"tr",19)(7017,"td",20)(7018,"div",21)(7019,"span",22),e(7020," minAggregate"),r(7021,"br"),t()()(),i(7022,"td",23)(7023,"code",38),e(7024,"string"),t()(),i(7025,"td",26)(7026,"em")(7027,"strong"),e(7028,"(opcional)"),t()(),i(7029,"p"),e(7030,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7031,"strong"),e(7032,"M\xEDnimo"),t(),e(7033," (Min)"),t()()(),i(7034,"tr",19)(7035,"td",20)(7036,"div",21)(7037,"span",22),e(7038," moreActions"),r(7039,"br"),t()()(),i(7040,"td",23)(7041,"code",38),e(7042,"string"),t()(),i(7043,"td",26)(7044,"em")(7045,"strong"),e(7046,"(opcional)"),t()(),i(7047,"p"),e(7048,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(7049,"tr",19)(7050,"td",20)(7051,"div",21)(7052,"span",22),e(7053," multipleItems"),r(7054,"br"),t()()(),i(7055,"td",23)(7056,"code",38),e(7057,"string"),t()(),i(7058,"td",26)(7059,"em")(7060,"strong"),e(7061,"(opcional)"),t()(),i(7062,"p"),e(7063,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(7064,"tr",19)(7065,"td",20)(7066,"div",21)(7067,"span",22),e(7068," noColumns"),r(7069,"br"),t()()(),i(7070,"td",23)(7071,"code",38),e(7072,"string"),t()(),i(7073,"td",26)(7074,"em")(7075,"strong"),e(7076,"(opcional)"),t()(),i(7077,"p"),e(7078,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(7079,"tr",19)(7080,"td",20)(7081,"div",21)(7082,"span",22),e(7083," noData"),r(7084,"br"),t()()(),i(7085,"td",23)(7086,"code",38),e(7087,"string"),t()(),i(7088,"td",26)(7089,"em")(7090,"strong"),e(7091,"(opcional)"),t()(),i(7092,"p"),e(7093,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(7094,"tr",19)(7095,"td",20)(7096,"div",21)(7097,"span",22),e(7098," noDataDescriptionRowStateFilterActive"),r(7099,"br"),t()()(),i(7100,"td",23)(7101,"code",38),e(7102,"string"),t()(),i(7103,"td",26)(7104,"em")(7105,"strong"),e(7106,"(opcional)"),t()(),i(7107,"p"),e(7108,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7109,"tr",19)(7110,"td",20)(7111,"div",21)(7112,"span",22),e(7113," noDataDescriptionRowStateFilterRemoved"),r(7114,"br"),t()()(),i(7115,"td",23)(7116,"code",38),e(7117,"string"),t()(),i(7118,"td",26)(7119,"em")(7120,"strong"),e(7121,"(opcional)"),t()(),i(7122,"p"),e(7123,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7124,"tr",19)(7125,"td",20)(7126,"div",21)(7127,"span",22),e(7128," noDataRowStateFilterActive"),r(7129,"br"),t()()(),i(7130,"td",23)(7131,"code",38),e(7132,"string"),t()(),i(7133,"td",26)(7134,"em")(7135,"strong"),e(7136,"(opcional)"),t()(),i(7137,"p"),e(7138,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7139,"tr",19)(7140,"td",20)(7141,"div",21)(7142,"span",22),e(7143," noDataRowStateFilterRemoved"),r(7144,"br"),t()()(),i(7145,"td",23)(7146,"code",38),e(7147,"string"),t()(),i(7148,"td",26)(7149,"em")(7150,"strong"),e(7151,"(opcional)"),t()(),i(7152,"p"),e(7153,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7154,"tr",19)(7155,"td",20)(7156,"div",21)(7157,"span",22),e(7158," noItem"),r(7159,"br"),t()()(),i(7160,"td",23)(7161,"code",38),e(7162,"string"),t()(),i(7163,"td",26)(7164,"em")(7165,"strong"),e(7166,"(opcional)"),t()(),i(7167,"p"),e(7168,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(7169,"tr",19)(7170,"td",20)(7171,"div",21)(7172,"span",22),e(7173," noneAggregate"),r(7174,"br"),t()()(),i(7175,"td",23)(7176,"code",38),e(7177,"string"),t()(),i(7178,"td",26)(7179,"em")(7180,"strong"),e(7181,"(opcional)"),t()(),i(7182,"p"),e(7183,"Texto quando "),i(7184,"strong"),e(7185,"nenhuma"),t(),e(7186," opera\xE7\xE3o de agrega\xE7\xE3o estiver selecionada (None)"),t()()(),i(7187,"tr",19)(7188,"td",20)(7189,"div",21)(7190,"span",22),e(7191," oneItem"),r(7192,"br"),t()()(),i(7193,"td",23)(7194,"code",38),e(7195,"string"),t()(),i(7196,"td",26)(7197,"em")(7198,"strong"),e(7199,"(opcional)"),t()(),i(7200,"p"),e(7201,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(7202,"tr",19)(7203,"td",20)(7204,"div",21)(7205,"span",22),e(7206," onlyRequiredFields"),r(7207,"br"),t()()(),i(7208,"td",23)(7209,"code",38),e(7210,"string"),t()(),i(7211,"td",26)(7212,"em")(7213,"strong"),e(7214,"(opcional)"),t()(),i(7215,"p"),e(7216,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(7217,"tr",19)(7218,"td",20)(7219,"div",21)(7220,"span",22),e(7221," or"),r(7222,"br"),t()()(),i(7223,"td",23)(7224,"code",38),e(7225,"string"),t()(),i(7226,"td",26)(7227,"em")(7228,"strong"),e(7229,"(opcional)"),t()(),i(7230,"p"),e(7231,"Op\xE7\xE3o OU, filtro por coluna."),t()()(),i(7232,"tr",19)(7233,"td",20)(7234,"div",21)(7235,"span",22),e(7236," orderAsc"),r(7237,"br"),t()()(),i(7238,"td",23)(7239,"code",38),e(7240,"string"),t()(),i(7241,"td",26)(7242,"em")(7243,"strong"),e(7244,"(opcional)"),t()(),i(7245,"p"),e(7246,"Ordenar ascendente, filtro por coluna."),t()()(),i(7247,"tr",19)(7248,"td",20)(7249,"div",21)(7250,"span",22),e(7251," orderDesc"),r(7252,"br"),t()()(),i(7253,"td",23)(7254,"code",38),e(7255,"string"),t()(),i(7256,"td",26)(7257,"em")(7258,"strong"),e(7259,"(opcional)"),t()(),i(7260,"p"),e(7261,"Ordenar descendente, filtro por coluna."),t()()(),i(7262,"tr",19)(7263,"td",20)(7264,"div",21)(7265,"span",22),e(7266," otherColumns"),r(7267,"br"),t()()(),i(7268,"td",23)(7269,"code",38),e(7270,"string"),t()(),i(7271,"td",26)(7272,"em")(7273,"strong"),e(7274,"(opcional)"),t()(),i(7275,"p"),e(7276,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(7277,"tr",19)(7278,"td",20)(7279,"div",21)(7280,"span",22),e(7281," placeholderSearchInput"),r(7282,"br"),t()()(),i(7283,"td",23)(7284,"code",38),e(7285,"string"),t()(),i(7286,"td",26)(7287,"em")(7288,"strong"),e(7289,"(opcional)"),t()(),i(7290,"p"),e(7291,"Placeholder do campo Buscar na tabela"),t()()(),i(7292,"tr",19)(7293,"td",20)(7294,"div",21)(7295,"span",22),e(7296," placeholderSearchInputBasic"),r(7297,"br"),t()()(),i(7298,"td",23)(7299,"code",38),e(7300,"string"),t()(),i(7301,"td",26)(7302,"em")(7303,"strong"),e(7304,"(opcional)"),t()(),i(7305,"p"),e(7306,'Placeholder do campo Buscar na tabela quando a busca r\xE1pida est\xE1 ativa (t-filter-input-mode="basic")'),t()()(),i(7307,"tr",19)(7308,"td",20)(7309,"div",21)(7310,"span",22),e(7311," remove"),r(7312,"br"),t()()(),i(7313,"td",23)(7314,"code",38),e(7315,"string"),t()(),i(7316,"td",26)(7317,"em")(7318,"strong"),e(7319,"(opcional)"),t()(),i(7320,"p"),e(7321,'R\xF3tulo do bot\xE3o "Limpar" exibido no painel de filtro por coluna enquanto o usu\xE1rio preenche os crit\xE9rios do filtro.'),t()()(),i(7322,"tr",19)(7323,"td",20)(7324,"div",21)(7325,"span",22),e(7326," removeFilter"),r(7327,"br"),t()()(),i(7328,"td",23)(7329,"code",38),e(7330,"string"),t()(),i(7331,"td",26)(7332,"em")(7333,"strong"),e(7334,"(opcional)"),t()(),i(7335,"p"),e(7336,'R\xF3tulo do bot\xE3o "Limpar" exibido no pop-up do filtro por coluna.'),t()()(),i(7337,"tr",19)(7338,"td",20)(7339,"div",21)(7340,"span",22),e(7341," requiredFieldsToasterDisableActionLabel"),r(7342,"br"),t()()(),i(7343,"td",23)(7344,"code",38),e(7345,"string"),t()(),i(7346,"td",26)(7347,"em")(7348,"strong"),e(7349,"(opcional)"),t()(),i(7350,"p"),e(7351,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7352,"tr",19)(7353,"td",20)(7354,"div",21)(7355,"span",22),e(7356," requiredFieldsToasterEnableActionLabel"),r(7357,"br"),t()()(),i(7358,"td",23)(7359,"code",38),e(7360,"string"),t()(),i(7361,"td",26)(7362,"em")(7363,"strong"),e(7364,"(opcional)"),t()(),i(7365,"p"),e(7366,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7367,"tr",19)(7368,"td",20)(7369,"div",21)(7370,"span",22),e(7371," requiredFieldsToasterMessage"),r(7372,"br"),t()()(),i(7373,"td",23)(7374,"code",38),e(7375,"string"),t()(),i(7376,"td",26)(7377,"em")(7378,"strong"),e(7379,"(opcional)"),t()(),i(7380,"p"),e(7381,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7382,"tr",19)(7383,"td",20)(7384,"div",21)(7385,"span",22),e(7386," requiredFieldsToasterSupportMessage"),r(7387,"br"),t()()(),i(7388,"td",23)(7389,"code",38),e(7390,"string"),t()(),i(7391,"td",26)(7392,"em")(7393,"strong"),e(7394,"(opcional)"),t()(),i(7395,"p"),e(7396,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7397,"tr",19)(7398,"td",20)(7399,"div",21)(7400,"span",22),e(7401," restoreDefault"),r(7402,"br"),t()()(),i(7403,"td",23)(7404,"code",38),e(7405,"string"),t()(),i(7406,"td",26)(7407,"em")(7408,"strong"),e(7409,"(opcional)"),t()(),i(7410,"p"),e(7411,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(7412,"tr",19)(7413,"td",20)(7414,"div",21)(7415,"span",22),e(7416," resultsByPage"),r(7417,"br"),t()()(),i(7418,"td",23)(7419,"code",38),e(7420,"string"),t()(),i(7421,"td",26)(7422,"em")(7423,"strong"),e(7424,"(opcional)"),t()(),i(7425,"p"),e(7426,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(7427,"tr",19)(7428,"td",20)(7429,"div",21)(7430,"span",22),e(7431," rowStateFilterActive"),r(7432,"br"),t()()(),i(7433,"td",23)(7434,"code",38),e(7435,"string"),t()(),i(7436,"td",26)(7437,"em")(7438,"strong"),e(7439,"(opcional)"),t()(),i(7440,"p"),e(7441,"Label do filtro para mostrar itens ativos"),t()()(),i(7442,"tr",19)(7443,"td",20)(7444,"div",21)(7445,"span",22),e(7446," rowStateFilterActiveLabel"),r(7447,"br"),t()()(),i(7448,"td",23)(7449,"code",38),e(7450,"string"),t()(),i(7451,"td",26)(7452,"em")(7453,"strong"),e(7454,"(opcional)"),t()(),i(7455,"p"),e(7456,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(7457,"tr",19)(7458,"td",20)(7459,"div",21)(7460,"span",22),e(7461," rowStateFilterRemoved"),r(7462,"br"),t()()(),i(7463,"td",23)(7464,"code",38),e(7465,"string"),t()(),i(7466,"td",26)(7467,"em")(7468,"strong"),e(7469,"(opcional)"),t()(),i(7470,"p"),e(7471,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(7472,"tr",19)(7473,"td",20)(7474,"div",21)(7475,"span",22),e(7476," rowStateFilterRemovedLabel"),r(7477,"br"),t()()(),i(7478,"td",23)(7479,"code",38),e(7480,"string"),t()(),i(7481,"td",26)(7482,"em")(7483,"strong"),e(7484,"(opcional)"),t()(),i(7485,"p"),e(7486,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(7487,"tr",19)(7488,"td",20)(7489,"div",21)(7490,"span",22),e(7491," save"),r(7492,"br"),t()()(),i(7493,"td",23)(7494,"code",38),e(7495,"string"),t()(),i(7496,"td",26)(7497,"em")(7498,"strong"),e(7499,"(opcional)"),t()(),i(7500,"p"),e(7501,"Label do bot\xE3o Salvar"),t()()(),i(7502,"tr",19)(7503,"td",20)(7504,"div",21)(7505,"span",22),e(7506," selectedItemsMultipleLabel"),r(7507,"br"),t()()(),i(7508,"td",23)(7509,"code",38),e(7510,"string"),t()(),i(7511,"td",26)(7512,"em")(7513,"strong"),e(7514,"(opcional)"),t()(),i(7515,"p"),e(7516,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(7517,"tr",19)(7518,"td",20)(7519,"div",21)(7520,"span",22),e(7521," selectedItemsSingleLabel"),r(7522,"br"),t()()(),i(7523,"td",23)(7524,"code",38),e(7525,"string"),t()(),i(7526,"td",26)(7527,"em")(7528,"strong"),e(7529,"(opcional)"),t()(),i(7530,"p"),e(7531,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(7532,"tr",19)(7533,"td",20)(7534,"div",21)(7535,"span",22),e(7536," showOnlySelectedItemsTooltip"),r(7537,"br"),t()()(),i(7538,"td",23)(7539,"code",38),e(7540,"string"),t()(),i(7541,"td",26)(7542,"em")(7543,"strong"),e(7544,"(opcional)"),t()(),i(7545,"p"),e(7546,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(7547,"tr",19)(7548,"td",20)(7549,"div",21)(7550,"span",22),e(7551," startsWith"),r(7552,"br"),t()()(),i(7553,"td",23)(7554,"code",38),e(7555,"string"),t()(),i(7556,"td",26)(7557,"em")(7558,"strong"),e(7559,"(opcional)"),t()(),i(7560,"p"),e(7561,"Op\xE7\xE3o Inicia com, filtro por coluna."),t()()(),i(7562,"tr",19)(7563,"td",20)(7564,"div",21)(7565,"span",22),e(7566," sumAggregate"),r(7567,"br"),t()()(),i(7568,"td",23)(7569,"code",38),e(7570,"string"),t()(),i(7571,"td",26)(7572,"em")(7573,"strong"),e(7574,"(opcional)"),t()(),i(7575,"p"),e(7576,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7577,"strong"),e(7578,"Soma"),t(),e(7579," (Sum)"),t()()(),i(7580,"tr",19)(7581,"td",20)(7582,"div",21)(7583,"span",22),e(7584," warningAbandonEditing"),r(7585,"br"),t()()(),i(7586,"td",23)(7587,"code",38),e(7588,"string"),t()(),i(7589,"td",26)(7590,"em")(7591,"strong"),e(7592,"(opcional)"),t()(),i(7593,"p"),e(7594,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(7595,"tr",19)(7596,"td",20)(7597,"div",21)(7598,"span",22),e(7599," warningColumnsRequired"),r(7600,"br"),t()()(),i(7601,"td",23)(7602,"code",38),e(7603,"string"),t()(),i(7604,"td",26)(7605,"em")(7606,"strong"),e(7607,"(opcional)"),t()(),i(7608,"p"),e(7609,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(7610,"po-accordion-item",181)(7611,"h4",9)(7612,"code"),e(7613,"ThfGridOptionPaging"),t()(),i(7614,"div",10)(7615,"p"),e(7616,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(7617,"strong"),e(7618,"t-options-paging"),t(),e(7619,")."),t()(),i(7620,"h4",15),e(7621,"Propriedades"),t(),i(7622,"table",16)(7623,"tr",17)(7624,"th",18),e(7625,"Nome"),t(),i(7626,"th",18),e(7627,"Tipo"),t(),i(7628,"th",18),e(7629,"Descri\xE7\xE3o"),t()(),i(7630,"tr",19)(7631,"td",20)(7632,"div",21)(7633,"span",22),e(7634," label"),r(7635,"br"),t()()(),i(7636,"td",23)(7637,"code",38),e(7638,"string"),t()(),i(7639,"td",26)(7640,"p"),e(7641,"Label correspondente a quantidade de itens"),t()()(),i(7642,"tr",19)(7643,"td",20)(7644,"div",21)(7645,"span",22),e(7646," value"),r(7647,"br"),t()()(),i(7648,"td",23)(7649,"code",51),e(7650,"number"),t()(),i(7651,"td",26)(7652,"p"),e(7653,"Quantidade de itens por p\xE1gina"),t()()()()(),i(7654,"po-accordion-item",182)(7655,"h4",9)(7656,"code"),e(7657,"ThfGridOptions"),t()(),i(7658,"div",10)(7659,"p"),e(7660,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(7661,"h4",15),e(7662,"Propriedades"),t(),i(7663,"table",16)(7664,"tr",17)(7665,"th",18),e(7666,"Nome"),t(),i(7667,"th",18),e(7668,"Tipo"),t(),i(7669,"th",18),e(7670,"Descri\xE7\xE3o"),t()(),i(7671,"tr",19)(7672,"td",20)(7673,"div",21)(7674,"span",22),e(7675," actions"),r(7676,"br"),t()()(),i(7677,"td",23)(7678,"code",29),e(7679,"Array<ThfTableAction>"),t()(),i(7680,"td",26)(7681,"em")(7682,"strong"),e(7683,"(opcional)"),t()(),i(7684,"p"),e(7685,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(7686,"tr",19)(7687,"td",20)(7688,"div",21)(7689,"span",22),e(7690," columns"),r(7691,"br"),t()()(),i(7692,"td",23)(7693,"code",37),e(7694,"Array<ThfGridColumn>"),t()(),i(7695,"td",26)(7696,"em")(7697,"strong"),e(7698,"(opcional)"),t()(),i(7699,"p"),e(7700,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(7701,"code"),e(7702,"property"),t(),e(7703," com o mesmo conte\xFAdo do original."),t()()(),i(7704,"tr",19)(7705,"td",20)(7706,"div",21)(7707,"span",22),e(7708," customActions"),r(7709,"br"),t()()(),i(7710,"td",23)(7711,"code",40),e(7712,"Array<PoDropdownAction>"),t()(),i(7713,"td",26)(7714,"em")(7715,"strong"),e(7716,"(opcional)"),t()(),i(7717,"p"),e(7718,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(7719,"code"),e(7720,"actions"),t(),e(7721,"."),t(),i(7722,"pre")(7723,"code",31),e(7724,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];
`),t()()()()()(),i(7725,"po-accordion-item",183)(7726,"h4",9)(7727,"code"),e(7728,"ThfGridRowActions"),t()(),i(7729,"div",10)(7730,"p"),e(7731,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(7732,"strong"),e(7733,"t-grid-row-actions"),t(),e(7734,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(7735,"h4",15),e(7736,"Propriedades"),t(),i(7737,"table",16)(7738,"tr",17)(7739,"th",18),e(7740,"Nome"),t(),i(7741,"th",18),e(7742,"Tipo"),t(),i(7743,"th",18),e(7744,"Descri\xE7\xE3o"),t()(),i(7745,"tr",19)(7746,"td",20)(7747,"div",21)(7748,"span",22),e(7749," actionEdit"),r(7750,"br"),t()()(),i(7751,"td",23)(7752,"code",184),e(7753,"(param: any, mode: 'edit' "),t(),i(7754,"code",185),e(7755," 'include') => FormGroup "),t(),i(7756,"code",186),e(7757," Observable<FormGroup>"),t()(),i(7758,"td",26)(7759,"p"),e(7760,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(7761,"code"),e(7762,"FormGroup"),t(),e(7763," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(7764,"pre")(7765,"code",31),e(7766,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})
`),t()(),i(7767,"p"),e(7768,"ou"),t(),i(7769,"pre")(7770,"code",31),e(7771,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }
`),t()()()(),i(7772,"tr",19)(7773,"td",20)(7774,"div",21)(7775,"span",22),e(7776," afterRemove"),r(7777,"br"),t()()(),i(7778,"td",23)(7779,"code",187),e(7780,"(row: any) => void"),t()(),i(7781,"td",26)(7782,"em")(7783,"strong"),e(7784,"(opcional)"),t()(),i(7785,"p"),e(7786,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7787,"tr",19)(7788,"td",20)(7789,"div",21)(7790,"span",22),e(7791," afterSave"),r(7792,"br"),t()()(),i(7793,"td",23)(7794,"code",187),e(7795,"(row: any) => void"),t()(),i(7796,"td",26)(7797,"em")(7798,"strong"),e(7799,"(opcional)"),t()(),i(7800,"p"),e(7801,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(7802,"tr",19)(7803,"td",20)(7804,"div",21)(7805,"span",22),e(7806," afterUndoRemove"),r(7807,"br"),t()()(),i(7808,"td",23)(7809,"code",187),e(7810,"(row: any) => void"),t()(),i(7811,"td",26)(7812,"em")(7813,"strong"),e(7814,"(opcional)"),t()(),i(7815,"p"),e(7816,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7817,"tr",19)(7818,"td",20)(7819,"div",21)(7820,"span",22),e(7821," beforeInsert"),r(7822,"br"),t()()(),i(7823,"td",23)(7824,"code",188),e(7825,"(row: any) => boolean "),t(),i(7826,"code",189),e(7827," Observable<boolean>"),t()(),i(7828,"td",26)(7829,"em")(7830,"strong"),e(7831,"(opcional)"),t()(),i(7832,"p"),e(7833,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(7834,"tr",19)(7835,"td",20)(7836,"div",21)(7837,"span",22),e(7838," beforeRemove"),r(7839,"br"),t()()(),i(7840,"td",23)(7841,"code",188),e(7842,"(row: any) => boolean "),t(),i(7843,"code",189),e(7844," Observable<boolean>"),t()(),i(7845,"td",26)(7846,"em")(7847,"strong"),e(7848,"(opcional)"),t()(),i(7849,"p"),e(7850,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(7851,"tr",19)(7852,"td",20)(7853,"div",21)(7854,"span",22),e(7855," beforeSave"),r(7856,"br"),t()()(),i(7857,"td",23)(7858,"code",190),e(7859,"(updatedRow: any, originalRow: any) => boolean "),t(),i(7860,"code",189),e(7861," Observable<boolean>"),t()(),i(7862,"td",26)(7863,"em")(7864,"strong"),e(7865,"(opcional)"),t()(),i(7866,"p"),e(7867,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(7868,"tr",19)(7869,"td",20)(7870,"div",21)(7871,"span",22),e(7872," beforeUndoRemove"),r(7873,"br"),t()()(),i(7874,"td",23)(7875,"code",188),e(7876,"(row: any) => boolean "),t(),i(7877,"code",189),e(7878," Observable<boolean>"),t()(),i(7879,"td",26)(7880,"em")(7881,"strong"),e(7882,"(opcional)"),t()(),i(7883,"p"),e(7884,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(7885,"tr",19)(7886,"td",20)(7887,"div",21)(7888,"span",22),e(7889," change"),r(7890,"br"),t()()(),i(7891,"td",23)(7892,"code",191),e(7893,"(updatedRows: Array<any>) => void"),t()(),i(7894,"td",26)(7895,"em")(7896,"strong"),e(7897,"(opcional)"),t()(),i(7898,"p"),e(7899,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(7900,"tr",19)(7901,"td",20)(7902,"div",21)(7903,"span",22),e(7904," hiddenGrid"),r(7905,"br"),t()()(),i(7906,"td",23)(7907,"code",24),e(7908,"boolean"),t()(),i(7909,"td",26)(7910,"em")(7911,"strong"),e(7912,"(opcional)"),t()(),i(7913,"p"),e(7914,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(7915,"tr",19)(7916,"td",20)(7917,"div",21)(7918,"span",22),e(7919," noPermission"),r(7920,"br"),t()()(),i(7921,"td",23)(7922,"code",192),e(7923,"Array<ThfGridEditModeActionType>"),t()(),i(7924,"td",26)(7925,"em")(7926,"strong"),e(7927,"(opcional)"),t()(),i(7928,"p"),e(7929,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(7930,"strong"),e(7931,"ThfGridEditModeActionType"),t(),e(7932,":"),t(),i(7933,"blockquote")(7934,"p"),e(7935,"Importante: ao declarar "),i(7936,"strong"),e(7937,"ThfGridEditModeActionType.Add"),t(),e(7938," em "),i(7939,"code"),e(7940,"noPermission"),t(),e(7941,`,
a a\xE7\xE3o de duplica\xE7\xE3o tamb\xE9m ficar\xE1 indispon\xEDvel.`),t()(),i(7942,"pre")(7943,"code",31),e(7944,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Duplicate,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, duplica\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};
`),t()()()(),i(7945,"tr",19)(7946,"td",20)(7947,"div",21)(7948,"span",22),e(7949," title"),r(7950,"br"),t()()(),i(7951,"td",23)(7952,"code",38),e(7953,"string"),t()(),i(7954,"td",26)(7955,"em")(7956,"strong"),e(7957,"(opcional)"),t()(),i(7958,"p"),e(7959,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(7960,"tr",19)(7961,"td",20)(7962,"div",21)(7963,"span",22),e(7964," validateField"),r(7965,"br"),t()()(),i(7966,"td",23)(7967,"code",193),e(7968,"(updatedField: any, columnProperty: string) => boolean "),t(),i(7969,"code",189),e(7970," Observable<boolean>"),t()(),i(7971,"td",26)(7972,"em")(7973,"strong"),e(7974,"(opcional)"),t()(),i(7975,"p"),e(7976,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(7977,"pre")(7978,"code",31),e(7979,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}
`),t()()()()()()()(),V(7980,4),t(),i(7981,"po-tab",194),V(7982,5),i(7983,"po-container",5)(7984,"po-accordion",6)(7985,"po-accordion-item",195)(7986,"h4",9)(7987,"code"),e(7988,"ThfColumnSpacing"),t()(),i(7989,"h4",15),e(7990,"Propriedades"),t(),i(7991,"table",16)(7992,"tr",17)(7993,"th",18),e(7994,"Nome"),t(),i(7995,"th",18),e(7996,"Descri\xE7\xE3o"),t()(),i(7997,"tr",19)(7998,"td",20)(7999,"div",21)(8e3,"span",22),e(8001," ExtraSmall"),r(8002,"br"),t()()(),i(8003,"td",26)(8004,"p"),e(8005,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(8006,"tr",19)(8007,"td",20)(8008,"div",21)(8009,"span",22),e(8010," Large"),r(8011,"br"),t()()(),i(8012,"td",26)(8013,"p"),e(8014,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(8015,"tr",19)(8016,"td",20)(8017,"div",21)(8018,"span",22),e(8019," Medium"),r(8020,"br"),t()()(),i(8021,"td",26)(8022,"p"),e(8023,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(8024,"tr",19)(8025,"td",20)(8026,"div",21)(8027,"span",22),e(8028," Small"),r(8029,"br"),t()()(),i(8030,"td",26)(8031,"p"),e(8032,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(8033,"po-accordion-item",196)(8034,"h4",9)(8035,"code"),e(8036,"ThfGridEditModeActionType"),t()(),i(8037,"h4",15),e(8038,"Propriedades"),t(),i(8039,"table",16)(8040,"tr",17)(8041,"th",18),e(8042,"Nome"),t(),i(8043,"th",18),e(8044,"Descri\xE7\xE3o"),t()(),i(8045,"tr",19)(8046,"td",20)(8047,"div",21)(8048,"span",22),e(8049," Add"),r(8050,"br"),t()()(),i(8051,"td",26)(8052,"p"),e(8053,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(8054,"tr",19)(8055,"td",20)(8056,"div",21)(8057,"span",22),e(8058," Duplicate"),r(8059,"br"),t()()(),i(8060,"td",26)(8061,"p"),e(8062,"A\xE7\xE3o de duplica\xE7\xE3o"),t()()(),i(8063,"tr",19)(8064,"td",20)(8065,"div",21)(8066,"span",22),e(8067," Remove"),r(8068,"br"),t()()(),i(8069,"td",26)(8070,"p"),e(8071,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(8072,"tr",19)(8073,"td",20)(8074,"div",21)(8075,"span",22),e(8076," Replace"),r(8077,"br"),t()()(),i(8078,"td",26)(8079,"p"),e(8080,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),V(8081,6),t(),i(8082,"po-tab",197),V(8083,7),i(8084,"po-container",5)(8085,"po-accordion",6)(8086,"po-accordion-item",198)(8087,"h4",9)(8088,"code"),e(8089,"ThfGridCellTemplateDirective"),t()(),i(8090,"div",10)(8091,"p"),e(8092,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(8093,"p"),e(8094,"Em seu uso, deve-se apenas adicionar a diretiva "),i(8095,"strong"),e(8096,"t-grid-cell-template"),t(),e(8097," \xE0 tag "),i(8098,"code"),e(8099,"ng-template"),t(),e(8100,"."),t(),i(8101,"p"),e(8102,"Retorno:"),t(),i(8103,"ul")(8104,"li")(8105,"code"),e(8106,"column"),t(),e(8107,": conte\xFAdo da coluna corrente."),t(),i(8108,"li")(8109,"code"),e(8110,"row"),t(),e(8111,": conte\xFAdo da linha corrente"),t()(),i(8112,"p"),e(8113,"Modo de uso:"),t(),i(8114,"pre")(8115,"code"),e(8116,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),t()(),i(8117,"blockquote")(8118,"p"),e(8119,"No exemplo acima, o usu\xE1rio tem como retorno "),i(8120,"code"),e(8121,"row"),t(),e(8122," e a "),i(8123,"code"),e(8124,"column"),t(),e(8125," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(8126,"p"),e(8127,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(8128,"pre")(8129,"code"),e(8130,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),t()(),i(8131,"blockquote")(8132,"p"),e(8133,"Observa\xE7\xE3o: Sempre adicionar o "),i(8134,"strong"),e(8135,"type"),t(),e(8136," da coluna que deseja manipular com a directiva como "),i(8137,"code"),e(8138,"cellTemplate"),t()()()(),i(8139,"div",11)(8140,"h4",12),e(8141,"Seletor"),t(),i(8142,"pre",13),e(8143,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(8144,"po-accordion-item",199)(8145,"h4",9)(8146,"code"),e(8147,"ThfGridColumnTemplateDirective"),t()(),i(8148,"div",10)(8149,"p"),e(8150,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(8151,"p"),e(8152,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(8153,"strong"),e(8154,"[t-property]"),t(),e(8155,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(8156,"p"),e(8157,"Retorno:"),t(),i(8158,"ul")(8159,"li"),e(8160,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(8161,"p"),e(8162,"Modo de uso:"),t(),i(8163,"pre")(8164,"code",28),e(8165,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...
`),t()(),i(8166,"blockquote")(8167,"p"),e(8168,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(8169,"code"),e(8170,"status"),t(),e(8171," ter\xE3o o conte\xFAdo alterado para "),i(8172,"code"),e(8173,"<h1>${value}</h1>"),t(),e(8174,`,
sendo que `),i(8175,"code"),e(8176,"value"),t(),e(8177," refere-se ao conte\xFAdo da linha."),t()(),i(8178,"pre")(8179,"code",28),e(8180,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...
`),t()(),i(8181,"blockquote")(8182,"p"),e(8183,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(8184,"p"),e(8185,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(8186,"pre")(8187,"code",31),e(8188,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),t()(),i(8189,"blockquote")(8190,"p"),e(8191,"Observa\xE7\xE3o: Sempre adicionar o "),i(8192,"strong"),e(8193,"type"),t(),e(8194," da coluna que deseja manipular com a directiva como "),i(8195,"code"),e(8196,"columnTemplate"),t()()()(),i(8197,"div",11)(8198,"h4",12),e(8199,"Seletor"),t(),i(8200,"pre",13),e(8201,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),V(8202,8),t(),i(8203,"po-tab",200)(8204,"po-container",5),V(8205,9),i(8206,"h3"),e(8207,"Tokens customiz\xE1veis"),t(),i(8208,"p"),e(8209,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(8210,"blockquote")(8211,"p"),e(8212,"Para maiores informa\xE7\xF5es, acesse o guia "),i(8213,"a",201),e(8214,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(8215,"."),t()(),i(8216,"table")(8217,"thead")(8218,"tr")(8219,"th"),e(8220,"Propriedade"),t(),i(8221,"th"),e(8222,"Descri\xE7\xE3o"),t(),i(8223,"th"),e(8224,"Valor Padr\xE3o"),t()()(),i(8225,"tbody")(8226,"tr")(8227,"td")(8228,"strong"),e(8229,"Default Values"),t()(),r(8230,"td")(8231,"td"),t(),i(8232,"tr")(8233,"td")(8234,"code"),e(8235,"--font-family"),t()(),i(8236,"td"),e(8237,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(8238,"td")(8239,"code"),e(8240,"var(--font-family-theme)"),t()()(),i(8241,"tr")(8242,"td")(8243,"code"),e(8244,"--background-color"),t()(),i(8245,"td"),e(8246,"Cor de background"),t(),i(8247,"td")(8248,"code"),e(8249,"var(--color-neutral-light-00)"),t()()(),i(8250,"tr")(8251,"td")(8252,"code"),e(8253,"--color"),t()(),i(8254,"td"),e(8255,"Cor principal da table"),t(),i(8256,"td")(8257,"code"),e(8258,"var(--color-neutral-dark-95)"),t()()(),i(8259,"tr")(8260,"td")(8261,"code"),e(8262,"--background-striped-color"),t()(),i(8263,"td"),e(8264,"Cor do background quando striped"),t(),i(8265,"td")(8266,"code"),e(8267,"var(--color-neutral-light-05)"),t()()(),i(8268,"tr")(8269,"td")(8270,"code"),e(8271,"--color-line"),t()(),i(8272,"td"),e(8273,"Cor das linhas"),t(),i(8274,"td")(8275,"code"),e(8276,"var(--color-neutral-mid-40)"),t()()(),i(8277,"tr")(8278,"td")(8279,"code"),e(8280,"--border-color"),t()(),i(8281,"td"),e(8282,"Cor da borda"),t(),i(8283,"td")(8284,"code"),e(8285,"var(--color-neutral-light-10)"),t()()(),i(8286,"tr")(8287,"td")(8288,"code"),e(8289,"--border-radius"),t()(),i(8290,"td"),e(8291,"Raio da borda"),t(),i(8292,"td")(8293,"code"),e(8294,"var(--border-radius-lg)"),t()()(),i(8295,"tr")(8296,"td")(8297,"code"),e(8298,"--border-width"),t()(),i(8299,"td"),e(8300,"Largura da borda"),t(),i(8301,"td")(8302,"code"),e(8303,"var(--border-width-sm)"),t()()(),i(8304,"tr")(8305,"td")(8306,"code"),e(8307,"--background-color-edited"),t()(),i(8308,"td"),e(8309,"Cor de background da linha editada"),t(),i(8310,"td")(8311,"code"),e(8312,"var(--color-feedback-warning-lightest)"),t()()(),i(8313,"tr")(8314,"td")(8315,"code"),e(8316,"--border-color-edited"),t()(),i(8317,"td"),e(8318,"Cor da borda da linha editada"),t(),i(8319,"td")(8320,"code"),e(8321,"var(--color-feedback-warning-base)"),t()()(),i(8322,"tr")(8323,"td")(8324,"code"),e(8325,"--background-color-included"),t()(),i(8326,"td"),e(8327,"Cor de background da linha inclu\xEDda"),t(),i(8328,"td")(8329,"code"),e(8330,"var(--color-feedback-warning-lightest)"),t()()(),i(8331,"tr")(8332,"td")(8333,"code"),e(8334,"--border-color-included"),t()(),i(8335,"td"),e(8336,"Cor da borda da linha inclu\xEDda"),t(),i(8337,"td")(8338,"code"),e(8339,"var(--color-feedback-warning-base)"),t()()(),i(8340,"tr")(8341,"td")(8342,"code"),e(8343,"--background-color-removed"),t()(),i(8344,"td"),e(8345,"Cor de background da linha removida"),t(),i(8346,"td"),e(8347,"-"),t()(),i(8348,"tr")(8349,"td")(8350,"strong"),e(8351,"Hover"),t()(),r(8352,"td")(8353,"td"),t(),i(8354,"tr")(8355,"td")(8356,"code"),e(8357,"--color-hover"),t()(),i(8358,"td"),e(8359,"Cor principal no estado hover"),t(),i(8360,"td")(8361,"code"),e(8362,"var(--color-action-hover)"),t()()(),i(8363,"tr")(8364,"td")(8365,"code"),e(8366,"--background-color-hover"),t()(),i(8367,"td"),e(8368,"Cor de background no estado hover"),t(),i(8369,"td")(8370,"code"),e(8371,"var(--color-brand-01-lighter)"),t()()(),i(8372,"tr")(8373,"td")(8374,"strong"),e(8375,"Focused"),t()(),r(8376,"td")(8377,"td"),t(),i(8378,"tr")(8379,"td")(8380,"code"),e(8381,"--outline-color-focused"),t()(),i(8382,"td"),e(8383,"Cor do outline do estado de focus"),t(),i(8384,"td")(8385,"code"),e(8386,"var(--color-action-focus)"),t()()(),i(8387,"tr")(8388,"td")(8389,"strong"),e(8390,"Disabled"),t()(),r(8391,"td")(8392,"td"),t(),i(8393,"tr")(8394,"td")(8395,"code"),e(8396,"--color-disabled"),t()(),i(8397,"td"),e(8398,"Cor principal no estado disabled"),t(),i(8399,"td")(8400,"code"),e(8401,"var(--color-neutral-mid-40)"),t()()(),i(8402,"tr")(8403,"td")(8404,"strong"),e(8405,"Headline"),t()(),r(8406,"td")(8407,"td"),t(),i(8408,"tr")(8409,"td")(8410,"code"),e(8411,"--background-color-headline"),t()(),i(8412,"td"),e(8413,"Cor do cabe\xE7alho"),t(),i(8414,"td")(8415,"code"),e(8416,"var(--color-neutral-light-10)"),t()()(),i(8417,"tr")(8418,"td")(8419,"code"),e(8420,"--font-weight-headline"),t()(),i(8421,"td"),e(8422,"Peso da fonte do cabe\xE7alho"),t(),i(8423,"td")(8424,"code"),e(8425,"var(--font-weight-bold)"),t()()(),i(8426,"tr")(8427,"td")(8428,"strong"),e(8429,"Selected"),t()(),r(8430,"td")(8431,"td"),t(),i(8432,"tr")(8433,"td")(8434,"code"),e(8435,"--background-color-selected"),t()(),i(8436,"td"),e(8437,"Cor de background no estado de selecionado"),t(),i(8438,"td")(8439,"code"),e(8440,"var(--color-brand-01-lightest)"),t()()(),i(8441,"tr")(8442,"td")(8443,"code"),e(8444,"--color-actived"),t()(),i(8445,"td"),e(8446,"Cor do texto no estado de selecionado"),t(),i(8447,"td")(8448,"code"),e(8449,"var(--color-neutral-dark-90)"),t()()(),i(8450,"tr")(8451,"td")(8452,"strong"),e(8453,"Pressed"),t()(),r(8454,"td")(8455,"td"),t(),i(8456,"tr")(8457,"td")(8458,"code"),e(8459,"--background-color-actived"),t()(),i(8460,"td"),e(8461,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(8462,"td")(8463,"code"),e(8464,"var(--color-brand-01-light)"),t()()(),i(8465,"tr"),r(8466,"td")(8467,"td")(8468,"td"),t(),i(8469,"tr")(8470,"td")(8471,"strong"),e(8472,"Toolbar"),t()(),r(8473,"td")(8474,"td"),t(),i(8475,"tr")(8476,"td")(8477,"code"),e(8478,"--background-color-toolbar"),t()(),i(8479,"td"),e(8480,"Cor de background da toolbar"),t(),i(8481,"td")(8482,"code"),e(8483,"var(--border-color)"),t()()(),i(8484,"tr")(8485,"td")(8486,"code"),e(8487,"--border-color-toolbar"),t()(),i(8488,"td"),e(8489,"Cor da borda da toolbar"),t(),i(8490,"td")(8491,"code"),e(8492,"var(--border-width-sm)"),t()()(),i(8493,"tr"),r(8494,"td")(8495,"td")(8496,"td"),t(),i(8497,"tr")(8498,"td")(8499,"strong"),e(8500,"Toolbar Title"),t()(),r(8501,"td")(8502,"td"),t(),i(8503,"tr")(8504,"td")(8505,"code"),e(8506,"--font-family-toolbar-title"),t()(),i(8507,"td"),e(8508,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(8509,"td")(8510,"code"),e(8511,"var(--font-family)"),t()()(),i(8512,"tr")(8513,"td")(8514,"code"),e(8515,"--font-size-toolbar-title"),t()(),i(8516,"td"),e(8517,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(8518,"td")(8519,"code"),e(8520,"var(--font-size-md)"),t()()(),i(8521,"tr")(8522,"td")(8523,"code"),e(8524,"--font-weight-toolbar-title"),t()(),i(8525,"td"),e(8526,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(8527,"td")(8528,"code"),e(8529,"var(--font-weight-bold)"),t()()(),i(8530,"tr")(8531,"td")(8532,"code"),e(8533,"--letter-spacing-toolbar-title"),t()(),i(8534,"td"),e(8535,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(8536,"td"),e(8537,"0.017rem"),t()(),i(8538,"tr"),r(8539,"td")(8540,"td")(8541,"td"),t(),i(8542,"tr")(8543,"td")(8544,"strong"),e(8545,"Aggregates"),t()(),r(8546,"td")(8547,"td"),t(),i(8548,"tr")(8549,"td")(8550,"code"),e(8551,"--border-color-aggregates"),t()(),i(8552,"td"),e(8553,"Cor da borda do aggregates"),t(),i(8554,"td")(8555,"code"),e(8556,"var(--border-color)"),t()()(),i(8557,"tr")(8558,"td")(8559,"code"),e(8560,"--border-width-aggregates"),t()(),i(8561,"td"),e(8562,"Largura da borda do aggregates"),t(),i(8563,"td")(8564,"code"),e(8565,"var(--border-width-sm)"),t()()(),i(8566,"tr"),r(8567,"td")(8568,"td")(8569,"td"),t(),i(8570,"tr")(8571,"td")(8572,"strong"),e(8573,"Empty State - Body"),t()(),r(8574,"td")(8575,"td"),t(),i(8576,"tr")(8577,"td")(8578,"code"),e(8579,"--font-family-empty-state-body-subtitle"),t()(),i(8580,"td"),e(8581,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(8582,"td")(8583,"code"),e(8584,"var(--font-family)"),t()()(),i(8585,"tr")(8586,"td")(8587,"code"),e(8588,"--font-size-empty-state-body-subtitle"),t()(),i(8589,"td"),e(8590,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(8591,"td")(8592,"code"),e(8593,"var(--font-size-md)"),t()()(),i(8594,"tr")(8595,"td")(8596,"code"),e(8597,"--font-weight-empty-state-body-subtitle"),t()(),i(8598,"td"),e(8599,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(8600,"td")(8601,"code"),e(8602,"var(--font-weight-bold)"),t()()(),i(8603,"tr")(8604,"td")(8605,"code"),e(8606,"--font-family-empty-state-body-message"),t()(),i(8607,"td"),e(8608,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(8609,"td")(8610,"code"),e(8611,"var(--font-family)"),t()()(),i(8612,"tr")(8613,"td")(8614,"code"),e(8615,"--font-size-empty-state-body-message"),t()(),i(8616,"td"),e(8617,"Tamanho da fonte da mensagem do estado vazio"),t(),i(8618,"td")(8619,"code"),e(8620,"var(--font-size-default)"),t()()(),i(8621,"tr")(8622,"td")(8623,"code"),e(8624,"--font-weight-empty-state-body-message"),t()(),i(8625,"td"),e(8626,"Peso da fonte da mensagem do estado vazio"),t(),i(8627,"td")(8628,"code"),e(8629,"var(--font-weight-normal)"),t()()()()()(),V(8630,10),t(),i(8631,"po-tab",202),V(8632,11),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var lo=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],po=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],It=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-lookup"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:po,decls:2786,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","boolean,","any"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(lo),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-compact-label="boolean, any"
  t-size="string"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-loading="boolean"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="string | PoHelperOptions"
  t-readonly="boolean, any"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),r(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),r(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),r(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),r(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),r(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),r(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),r(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),r(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),r(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>
`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-compact-label"),r(261,"br"),t()()(),i(262,"td",24)(263,"code",35),e(264,"boolean, any"),t()(),i(265,"td",26)(266,"p")(267,"code"),e(268,"false"),t()()(),i(269,"td",27)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(275,"p"),e(276,"Quando habilitado ("),i(277,"code"),e(278,"true"),t(),e(279,"), o modo compacto afeta o conjunto composto por:"),t(),i(280,"ul")(281,"li")(282,"code"),e(283,"po-label"),t()(),i(284,"li")(285,"code"),e(286,"p-requirement (showRequired)"),t()(),i(287,"li")(288,"code"),e(289,"po-helper"),t()()(),i(290,"p"),e(291,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(292,"p"),e(293,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(294,"ul")(295,"li")(296,"code"),e(297,"--field-container-title-justify"),t()(),i(298,"li")(299,"code"),e(300,"--field-container-title-flex"),t()()(),i(301,"p"),e(302,"Exemplo:"),t(),i(303,"pre")(304,"code"),e(305,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(306,"p"),e(307,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(308,"tr",19)(309,"td",20)(310,"div",21)(311,"span",22),e(312," t-size"),r(313,"br"),t()()(),i(314,"td",24)(315,"code",28),e(316,"string"),t()(),i(317,"td",26)(318,"p")(319,"code"),e(320,"medium"),t()()(),i(321,"td",27)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),i(325,"p"),e(326,"Define o tamanho do componente:"),t(),i(327,"ul")(328,"li")(329,"code"),e(330,"small"),t(),e(331,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(332,"li")(333,"code"),e(334,"medium"),t(),e(335,": altura do input como 44px."),t()(),i(336,"blockquote")(337,"p"),e(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(339,"code"),e(340,"medium"),t(),e(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(342,"a",36),e(343,"po-theme"),t(),e(344,"."),t()()()(),i(345,"tr",19)(346,"td",20)(347,"div",21)(348,"span",22),e(349,"t-custom-items"),r(350,"br"),t()()(),i(351,"td",24)(352,"code",37),e(353,"Array<any>"),t()(),i(354,"td",26)(355,"p")(356,"code"),e(357,"[]"),t()()(),i(358,"td",27)(359,"em")(360,"strong"),e(361,"(opcional)"),t()(),i(362,"p"),e(363,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(364,"tr",19)(365,"td",20)(366,"div",21)(367,"span",22),e(368,"t-disabled"),r(369,"br"),t()()(),i(370,"td",24)(371,"code",29),e(372,"boolean"),t()(),i(373,"td",26)(374,"p")(375,"code"),e(376,"false"),t()()(),i(377,"td",27)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),i(381,"p"),e(382,"Desabilita o campo."),t()()(),i(383,"tr",19)(384,"td",20)(385,"div",21)(386,"span",22),e(387,"t-error-limit"),r(388,"br"),t()()(),i(389,"td",24)(390,"code",29),e(391,"boolean"),t()(),i(392,"td",26)(393,"p")(394,"code"),e(395,"false"),t()()(),i(396,"td",27)(397,"em")(398,"strong"),e(399,"(opcional)"),t()(),i(400,"p"),e(401,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(402,"blockquote")(403,"p"),e(404,"Caso essa propriedade seja definida como "),i(405,"code"),e(406,"true"),t(),e(407,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(408,"tr",19)(409,"td",20)(410,"div",21)(411,"span",22),e(412,"t-field-error-message"),r(413,"br"),t()()(),i(414,"td",24)(415,"code",28),e(416,"string"),t()(),i(417,"td",26),e(418,"-"),t(),i(419,"td",27)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),i(423,"p"),e(424,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(425,"blockquote")(426,"p"),e(427,"Necess\xE1rio que a propriedade "),i(428,"code"),e(429,"t-required"),t(),e(430," esteja habilitada."),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",21)(434,"span",22),e(435," t-field-format"),r(436,"br"),t()()(),i(437,"td",24)(438,"code",38),e(439,"Array<string> "),t(),i(440,"code",39),e(441," ((item: any) => string)"),t()(),i(442,"td",26),e(443,"-"),t(),i(444,"td",27)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),i(448,"p"),e(449,"Formato de exibi\xE7\xE3o do campo."),t(),i(450,"p"),e(451,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(452,"em"),e(453,"string"),t(),e(454," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(455,"pre")(456,"code",34),e(457,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}\n"),t()(),i(458,"pre")(459,"code",33),e(460,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->
`),t()(),i(461,"p"),e(462,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(463,"code"),e(464,"-"),t(),e(465,` como separador.
Por exemplo:`),t(),i(466,"pre")(467,"code",33),e(468,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->
`),t()(),i(469,"blockquote")(470,"p"),e(471,"Esta propriedade sobrep\xF5e a "),i(472,"code"),e(473,"t-keys-label"),t(),e(474," como formata\xE7\xE3o do campo."),t()()()(),i(475,"tr",19)(476,"td",20)(477,"div",21)(478,"span",22),e(479,"t-field-label"),r(480,"br"),t()()(),i(481,"td",24)(482,"code",28),e(483,"string"),t()(),i(484,"td",26),e(485,"-"),t(),i(486,"td",27)(487,"p"),e(488,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(489,"tr",19)(490,"td",20)(491,"div",21)(492,"span",22),e(493,"t-field-value"),r(494,"br"),t()()(),i(495,"td",24)(496,"code",28),e(497,"string"),t()(),i(498,"td",26),e(499,"-"),t(),i(500,"td",27)(501,"p"),e(502,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(503,"blockquote")(504,"p"),e(505,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(506,"tr",19)(507,"td",20)(508,"div",21)(509,"span",22),e(510,"t-filter-params"),r(511,"br"),t()()(),i(512,"td",24)(513,"code",40),e(514,"any"),t()(),i(515,"td",26),e(516,"-"),t(),i(517,"td",27)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),i(521,"p"),e(522,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(523,"strong"),e(524,"ThfLookupFilter"),t(),e(525,"."),t()()(),i(526,"tr",19)(527,"td",20)(528,"div",21)(529,"span",22),e(530,"t-filter-search-select"),r(531,"br"),t()()(),i(532,"td",24)(533,"code",41),e(534,"Array<ThfLookupFilterSearchSelect>"),t()(),i(535,"td",26),e(536,"-"),t(),i(537,"td",27)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),i(541,"p"),e(542,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(543,"strong"),e(544,"ThfLookupFilterSearchSelect"),t(),e(545,"."),t(),i(546,"pre")(547,"code",33),e(548,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>
`),t()(),i(549,"pre")(550,"code",34),e(551,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];
`),t()()()(),i(552,"tr",19)(553,"td",20)(554,"div",21)(555,"span",22),e(556,"t-filter-service"),r(557,"br"),t()()(),i(558,"td",24)(559,"code",42),e(560,"ThfLookupFilter "),t(),i(561,"code",28),e(562," string"),t()(),i(563,"td",26),e(564,"-"),t(),i(565,"td",27)(566,"p"),e(567,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(568,"strong"),e(569,"ThfLookupFilter"),t(),e(570," ou uma URL."),t(),i(571,"p"),e(572,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(573,"code"),e(574,"filter"),t(),e(575," com o valor da busca:"),t(),i(576,"pre")(577,"code"),e(578,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(579,"p"),e(580,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(581,"code"),e(582,"order"),t(),e(583,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(584,"pre")(585,"code"),e(586,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()(),i(587,"p"),e(588,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(589,"pre")(590,"code"),e(591,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()(),i(592,"p"),e(593,"Se definido "),i(594,"strong"),e(595,"t-filter-params"),t(),e(596,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(597,"code"),e(598,"{ age: 23 }"),t(),e(599,":"),t(),i(600,"pre")(601,"code"),e(602,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(603,"p"),e(604,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(605,"pre")(606,"code"),e(607,`model = 1234;

GET url/1234
`),t()(),i(608,"p"),e(609,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(610,"pre")(611,"code"),e(612,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(613,"blockquote")(614,"p"),e(615,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(616,"a",43),e(617,"API do PO UI"),t(),e(618,` e utilizar
os valores definidos nas propriedades `),i(619,"strong"),e(620,"t-field-label"),t(),e(621," e "),i(622,"strong"),e(623,"t-field-value"),t(),e(624," para a constru\xE7\xE3o do "),i(625,"strong"),e(626,"thf-lookup"),t(),e(627,"."),t()(),i(628,"p"),e(629,"Caso a busca tenha ocorrido pressionando a tecla "),i(630,"em"),e(631,"TAB"),t(),e(632,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(633,"a",44),e(634,"encodeURIComponent"),t(),e(635,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(636,"pre")(637,"code"),e(638,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(639,"blockquote")(640,"p"),e(641,"Caso utilize um servi\xE7o "),i(642,"strong"),e(643,"ThfLookupFilter"),t(),e(644,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(645,"tr",19)(646,"td",20)(647,"div",21)(648,"span",22),e(649,"t-grid-properties"),r(650,"br"),t()()(),i(651,"td",24)(652,"code",45),e(653,"ThfLookupGridProperties"),t()(),i(654,"td",26),e(655,"-"),t(),i(656,"td",27)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),i(660,"p"),e(661,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(662,"p"),e(663,"// Exemplo de uso:"),t(),i(664,"pre")(665,"code",33),e(666,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(667,"pre")(668,"code",34),e(669,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}
`),t()()()(),i(670,"tr",19)(671,"td",20)(672,"div",21)(673,"span",22),e(674,"t-help"),r(675,"br"),t()()(),i(676,"td",24)(677,"code",28),e(678,"string"),t()(),i(679,"td",26),e(680,"-"),t(),i(681,"td",27)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),i(685,"p"),e(686,"Texto de apoio do campo."),t()()(),i(687,"tr",19)(688,"td",20)(689,"div",30)(690,"span",31),e(691," (t-focus)"),r(692,"br"),t()()(),i(693,"td",24)(694,"code",25),e(695,"EventEmitter"),t()(),i(696,"td",26),e(697,"-"),t(),i(698,"td",27)(699,"em")(700,"strong"),e(701,"(opcional)"),t()(),i(702,"p"),e(703,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(704,"p"),e(705,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(706,"tr",19)(707,"td",20)(708,"div",21)(709,"span",22),e(710,"t-key-last-search"),r(711,"br"),t()()(),i(712,"td",24)(713,"code",28),e(714,"string"),t()(),i(715,"td",26),e(716,"-"),t(),i(717,"td",27)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",30)(726,"span",31),e(727," (t-keydown)"),r(728,"br"),t()()(),i(729,"td",24)(730,"code",25),e(731,"EventEmitter"),t()(),i(732,"td",26),e(733,"-"),t(),i(734,"td",27)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),i(738,"p"),e(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(740,"code"),e(741,"KeyboardEvent"),t(),e(742," com informa\xE7\xF5es sobre a tecla."),t()()(),i(743,"tr",19)(744,"td",20)(745,"div",21)(746,"span",22),e(747,"t-keys-label"),r(748,"br"),t()()(),i(749,"td",24)(750,"code",46),e(751,"Array<ThfLookupKeysLabel>"),t()(),i(752,"td",26),e(753,"-"),t(),i(754,"td",27)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),i(758,"p"),e(759,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(760,"pre")(761,"code",33),e(762,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>
`),t()(),i(763,"pre")(764,"code",34),e(765,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];
`),t()(),i(766,"pre")(767,"code"),e(768,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com
`),t()()()(),i(769,"tr",19)(770,"td",20)(771,"div",21)(772,"span",22),e(773,"t-label"),r(774,"br"),t()()(),i(775,"td",24)(776,"code",28),e(777,"string"),t()(),i(778,"td",26),e(779,"-"),t(),i(780,"td",27)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),i(784,"p"),e(785,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(786,"code"),e(787,"modalTitle"),t(),e(788," n\xE3o estiver definido em "),i(789,"strong"),e(790,"t-literals"),t(),e(791,"."),t()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796," t-label-text-wrap"),r(797,"br"),t()()(),i(798,"td",24)(799,"code",29),e(800,"boolean"),t()(),i(801,"td",26)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",27)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(811,"code"),e(812,"t-label"),t(),e(813,". Quando "),i(814,"code"),e(815,"t-label-text-wrap"),t(),e(816,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(817,"tr",19)(818,"td",20)(819,"div",21)(820,"span",22),e(821,"t-literals"),r(822,"br"),t()()(),i(823,"td",24)(824,"code",47),e(825,"ThfLookupLiterals"),t()(),i(826,"td",26),e(827,"-"),t(),i(828,"td",27)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Permite definir literais personalizados para o componente, conforme a interface "),i(834,"strong"),e(835,"ThfLookupLiterals"),t(),e(836,"."),t(),i(837,"pre")(838,"code",33),e(839,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>
`),t()(),i(840,"pre")(841,"code",34),e(842,`customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };
`),t()()()(),i(843,"tr",19)(844,"td",20)(845,"div",21)(846,"span",22),e(847,"t-loading"),r(848,"br"),t()()(),i(849,"td",24)(850,"code",29),e(851,"boolean"),t()(),i(852,"td",26)(853,"p")(854,"code"),e(855,"false"),t()()(),i(856,"td",27)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(862,"tr",19)(863,"td",20)(864,"div",21)(865,"span",22),e(866,"t-multiple"),r(867,"br"),t()()(),i(868,"td",24)(869,"code",29),e(870,"boolean"),t()(),i(871,"td",26)(872,"p")(873,"code"),e(874,"false"),t()()(),i(875,"td",27)(876,"em")(877,"strong"),e(878,"(opcional)"),t()(),i(879,"p"),e(880,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(881,"blockquote")(882,"p"),e(883,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(884,"code"),e(885,"[ 12345, 67890 ]"),t()()()()(),i(886,"tr",19)(887,"td",20)(888,"div",21)(889,"span",22),e(890,"t-no-autocomplete"),r(891,"br"),t()()(),i(892,"td",24)(893,"code",29),e(894,"boolean"),t()(),i(895,"td",26)(896,"p")(897,"code"),e(898,"false"),t()()(),i(899,"td",27)(900,"em")(901,"strong"),e(902,"(opcional)"),t()(),i(903,"p"),e(904,"Desabilita o "),i(905,"code"),e(906,"autocomplete"),t(),e(907," (propriedade nativa) do campo."),t()()(),i(908,"tr",19)(909,"td",20)(910,"div",30)(911,"span",31),e(912," (t-error)"),r(913,"br"),t()()(),i(914,"td",24)(915,"code",25),e(916,"EventEmitter"),t()(),i(917,"td",26),e(918,"-"),t(),i(919,"td",27)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(925,"tr",19)(926,"td",20)(927,"div",21)(928,"span",22),e(929,"t-optional"),r(930,"br"),t()()(),i(931,"td",24)(932,"code",29),e(933,"boolean"),t()(),i(934,"td",26)(935,"p")(936,"code"),e(937,"false"),t()()(),i(938,"td",27)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),i(942,"p"),e(943,"Exibe um indicador opcional no campo. Requer que "),i(944,"strong"),e(945,"t-label"),t(),e(946," esteja definido e "),i(947,"strong"),e(948,"t-required"),t(),e(949," desabilitado."),t()()(),i(950,"tr",19)(951,"td",20)(952,"div",21)(953,"span",22),e(954,"t-placeholder"),r(955,"br"),t()()(),i(956,"td",24)(957,"code",28),e(958,"string"),t()(),i(959,"td",26),e(960,"-"),t(),i(961,"td",27)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),i(965,"p"),e(966,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(967,"tr",19)(968,"td",20)(969,"div",21)(970,"span",22),e(971," t-helper"),r(972,"br"),t()()(),i(973,"td",24)(974,"code",28),e(975,"string "),t(),i(976,"code",48),e(977," PoHelperOptions"),t()(),i(978,"td",26),e(979,"-"),t(),i(980,"td",27)(981,"em")(982,"strong"),e(983,"(opcional)"),t()(),i(984,"p"),e(985,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(986,"p"),e(987,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(988,"code"),e(989,"t-additional-help-tooltip"),t(),e(990," e "),i(991,"code"),e(992,"t-additional-help"),t(),e(993,") ser\xE1 ignorado."),t()()(),i(994,"tr",19)(995,"td",20)(996,"div",21)(997,"span",22),e(998," t-readonly"),r(999,"br"),t()()(),i(1e3,"td",24)(1001,"code",35),e(1002,"boolean, any"),t()(),i(1003,"td",26)(1004,"p")(1005,"code"),e(1006,"false"),t()()(),i(1007,"td",27)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),i(1011,"p"),e(1012,"Indica que o campo ser\xE1 somente leitura."),t()()(),i(1013,"tr",19)(1014,"td",20)(1015,"div",21)(1016,"span",22),e(1017,"t-required"),r(1018,"br"),t()()(),i(1019,"td",24)(1020,"code",29),e(1021,"boolean"),t()(),i(1022,"td",26)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),i(1026,"td",27)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),i(1030,"p"),e(1031,"Define o campo como obrigat\xF3rio. Caso "),i(1032,"strong"),e(1033,"t-disabled"),t(),e(1034," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(1035,"tr",19)(1036,"td",20)(1037,"div",21)(1038,"span",22),e(1039,"t-search-on-enter"),r(1040,"br"),t()()(),i(1041,"td",24)(1042,"code",49),e(1043,"'equal' "),t(),i(1044,"code",50),e(1045," 'include'"),t()(),i(1046,"td",26)(1047,"p")(1048,"code"),e(1049,"equal"),t()()(),i(1050,"td",27)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(1056,"blockquote")(1057,"p"),e(1058,"Caso essa propriedade seja definida como "),i(1059,"code"),e(1060,"equal"),t(),e(1061,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(1062,"code"),e(1063,"include"),t(),e(1064,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(1065,"tr",19)(1066,"td",20)(1067,"div",30)(1068,"span",31),e(1069," (t-selected)"),r(1070,"br"),t()()(),i(1071,"td",24)(1072,"code",25),e(1073,"EventEmitter"),t()(),i(1074,"td",26),e(1075,"-"),t(),i(1076,"td",27)(1077,"em")(1078,"strong"),e(1079,"(opcional)"),t()(),i(1080,"p"),e(1081,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1082,"strong"),e(1083,"t-field-value"),t(),e(1084,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1085,"tr",19)(1086,"td",20)(1087,"div",21)(1088,"span",22),e(1089,"t-show-required"),r(1090,"br"),t()()(),i(1091,"td",24)(1092,"code",29),e(1093,"boolean"),t()(),i(1094,"td",26)(1095,"p")(1096,"code"),e(1097,"false"),t()()(),i(1098,"td",27)(1099,"em")(1100,"strong"),e(1101,"(opcional)"),t()(),i(1102,"p"),e(1103,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1104,"strong"),e(1105,"t-required"),t(),e(1106," esteja habilitado e "),i(1107,"strong"),e(1108,"t-label"),t(),e(1109," definido."),t()()(),i(1110,"tr",19)(1111,"td",20)(1112,"div",21)(1113,"span",22),e(1114," t-modal-size"),r(1115,"br"),t()()(),i(1116,"td",24)(1117,"code",28),e(1118,"string"),t()(),i(1119,"td",26)(1120,"p")(1121,"code"),e(1122,"lg"),t()()(),i(1123,"td",27)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Define o tamanho do modal."),t(),i(1129,"p"),e(1130,"Valores v\xE1lidos:"),t(),i(1131,"ul")(1132,"li")(1133,"code"),e(1134,"sm"),t(),e(1135," (pequeno)"),t(),i(1136,"li")(1137,"code"),e(1138,"md"),t(),e(1139," (m\xE9dio)"),t(),i(1140,"li")(1141,"code"),e(1142,"lg"),t(),e(1143," (grande)"),t(),i(1144,"li")(1145,"code"),e(1146,"xl"),t(),e(1147," (extra grande)"),t(),i(1148,"li")(1149,"code"),e(1150,"auto"),t(),e(1151," (autom\xE1tico)"),t()(),i(1152,"blockquote")(1153,"p"),e(1154,"Quando informado "),i(1155,"code"),e(1156,"auto"),t(),e(1157,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1158,"code"),e(1159,"lg"),t(),e(1160,"."),t()()()()()(),i(1161,"po-accordion-item",51)(1162,"table",52)(1163,"tr",19)(1164,"th",53)(1165,"div",21)(1166,"h4")(1167,"span",22),e(1168," showAdditionalHelp "),t()()()()(),i(1169,"tr",27)(1170,"td",27)(1171,"p"),e(1172,"M\xE9todo que exibe "),i(1173,"code"),e(1174,"t-helper"),t(),e(1175," ou executa a a\xE7\xE3o definida em "),i(1176,"code"),e(1177,"t-helper{eventOnClick}"),t(),e(1178," ou em "),i(1179,"code"),e(1180,"t-additionalHelp"),t(),e(1181,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1182,"code"),e(1183,"t-keydown"),t(),e(1184,"."),t(),i(1185,"pre")(1186,"code"),e(1187,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>
`),t()(),i(1188,"pre")(1189,"code"),e(1190,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),r(1191,"br"),t()()(),V(1192,2),t(),i(1193,"po-tab",54),V(1194,3),i(1195,"po-container",5)(1196,"po-accordion",6)(1197,"po-accordion-item",55)(1198,"h4",9)(1199,"code"),e(1200,"ThfLookupColumn"),t()(),i(1201,"div",10)(1202,"p"),e(1203,"Interface para configura\xE7\xE3o das colunas ("),i(1204,"strong"),e(1205,"t-columns"),t(),e(1206,")."),t()(),i(1207,"h4",15),e(1208,"Propriedades"),t(),i(1209,"table",16)(1210,"tr",17)(1211,"th",18),e(1212,"Nome"),t(),i(1213,"th",18),e(1214,"Tipo"),t(),i(1215,"th",18),e(1216,"Descri\xE7\xE3o"),t()(),i(1217,"tr",19)(1218,"td",20)(1219,"div",21)(1220,"span",22),e(1221," boolean"),r(1222,"br"),t()()(),i(1223,"td",24)(1224,"code",56),e(1225,"PoTableBoolean"),t()(),i(1226,"td",27)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),i(1230,"p"),e(1231,"Define um objeto do tipo "),i(1232,"code"),e(1233,"PoTableBoolean"),t(),e(1234," para as colunas do tipo "),i(1235,"em"),e(1236,"boolean"),t(),e(1237,". Por exemplo:"),t(),i(1238,"pre")(1239,"code"),e(1240,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(1241,"blockquote")(1242,"p"),e(1243,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1244,"em"),e(1245,"boolean"),t(),e(1246,`,
esta exibir\xE1 por padr\xE3o `),i(1247,"code"),e(1248,"Sim"),t(),e(1249," e "),i(1250,"code"),e(1251,"N\xE3o"),t(),e(1252," de acordo com os valores "),i(1253,"em"),e(1254,"booleanos"),t(),e(1255,"."),t()()()(),i(1256,"tr",19)(1257,"td",20)(1258,"div",21)(1259,"span",22),e(1260," booleanFalse"),r(1261,"br"),t()()(),i(1262,"td",24)(1263,"code",28),e(1264,"string"),t()(),i(1265,"td",27)(1266,"em")(1267,"strong"),e(1268,"(opcional)"),t()(),i(1269,"p"),e(1270,"Texto exibido quando o valor da coluna for "),i(1271,"em"),e(1272,"false"),t(),e(1273,"."),t()()(),i(1274,"tr",19)(1275,"td",20)(1276,"div",21)(1277,"span",22),e(1278," booleanTrue"),r(1279,"br"),t()()(),i(1280,"td",24)(1281,"code",28),e(1282,"string"),t()(),i(1283,"td",27)(1284,"em")(1285,"strong"),e(1286,"(opcional)"),t()(),i(1287,"p"),e(1288,"Texto exibido quando o valor da coluna for "),i(1289,"em"),e(1290,"true"),t(),e(1291,"."),t()()(),i(1292,"tr",19)(1293,"td",20)(1294,"div",21)(1295,"span",22),e(1296," disabled"),r(1297,"br"),t()()(),i(1298,"td",24)(1299,"code",57),e(1300,"Function"),t()(),i(1301,"td",27)(1302,"em")(1303,"strong"),e(1304,"(opcional)"),t()(),i(1305,"p"),e(1306,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1307,"em"),e(1308,"link"),t(),e(1309," e sua a\xE7\xE3o."),t(),i(1310,"blockquote")(1311,"p"),e(1312,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1313,"code"),e(1314,"link"),t(),e(1315,"."),t()()()(),i(1316,"tr",19)(1317,"td",20)(1318,"div",21)(1319,"span",22),e(1320," format"),r(1321,"br"),t()()(),i(1322,"td",24)(1323,"code",28),e(1324,"string"),t()(),i(1325,"td",27)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),i(1329,"p"),e(1330,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1331,"ul")(1332,"li"),e(1333,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1334,"li"),e(1335,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1336,"tr",19)(1337,"td",20)(1338,"div",21)(1339,"span",22),e(1340," label"),r(1341,"br"),t()()(),i(1342,"td",24)(1343,"code",28),e(1344,"string"),t()(),i(1345,"td",27)(1346,"em")(1347,"strong"),e(1348,"(opcional)"),t()(),i(1349,"p"),e(1350,"Texto para t\xEDtulo da coluna."),t(),i(1351,"p"),e(1352,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1353,"em"),e(1354,"label"),t(),e(1355," o valor da propriedade "),i(1356,"em"),e(1357,"property"),t(),e(1358," com a primeira letra em mai\xFAsculo."),t()()(),i(1359,"tr",19)(1360,"td",20)(1361,"div",21)(1362,"span",22),e(1363," labels"),r(1364,"br"),t()()(),i(1365,"td",24)(1366,"code",58),e(1367,"Array<PoTableColumnLabel>"),t()(),i(1368,"td",27)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1374,"code"),e(1375,"PoTableColumnLabel"),t(),e(1376," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1377,"pre")(1378,"code"),e(1379,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(1380,"tr",19)(1381,"td",20)(1382,"div",21)(1383,"span",22),e(1384," locale"),r(1385,"br"),t()()(),i(1386,"td",24)(1387,"code",28),e(1388,"string"),t()(),i(1389,"td",27)(1390,"em")(1391,"strong"),e(1392,"(opcional)"),t()(),i(1393,"p"),e(1394,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1395,"a",59)(1396,"code"),e(1397,"I18n"),t()()(),i(1398,"p"),e(1399,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1400,"pre")(1401,"code"),e(1402,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(1403,"blockquote")(1404,"p"),e(1405,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1406,"p"),e(1407,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1408,"p"),e(1409,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1410,"a",59)(1411,"code"),e(1412,"I18n"),t()()()(),i(1413,"p"),e(1414,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1415,"pre")(1416,"code"),e(1417,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(1418,"blockquote")(1419,"p"),e(1420,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1421,"code"),e(1422,"number"),t(),e(1423," e "),i(1424,"code"),e(1425,"currency"),t(),e(1426,"."),t()()()(),i(1427,"tr",19)(1428,"td",20)(1429,"div",21)(1430,"span",22),e(1431," property"),r(1432,"br"),t()()(),i(1433,"td",24)(1434,"code",28),e(1435,"string"),t()(),i(1436,"td",27)(1437,"em")(1438,"strong"),e(1439,"(opcional)"),t()(),i(1440,"p"),e(1441,"Nome identificador da coluna."),t()()(),i(1442,"tr",19)(1443,"td",20)(1444,"div",21)(1445,"span",22),e(1446," type"),r(1447,"br"),t()()(),i(1448,"td",24)(1449,"code",28),e(1450,"string"),t()(),i(1451,"td",27)(1452,"em")(1453,"strong"),e(1454,"(opcional)"),t()(),i(1455,"p"),e(1456,"Tipo da coluna:"),t(),i(1457,"ul")(1458,"li"),e(1459,"string (padr\xE3o): textos"),t(),i(1460,"li"),e(1461,"number: valores num\xE9ricos"),t(),i(1462,"li"),e(1463,"date: data"),t(),i(1464,"li"),e(1465,"currency: valores monet\xE1rios"),t(),i(1466,"li"),e(1467,"dateTime: data e hora"),t()()()(),i(1468,"tr",19)(1469,"td",20)(1470,"div",21)(1471,"span",22),e(1472," visible"),r(1473,"br"),t()()(),i(1474,"td",24)(1475,"code",29),e(1476,"boolean"),t()(),i(1477,"td",27)(1478,"em")(1479,"strong"),e(1480,"(opcional)"),t()(),i(1481,"p"),e(1482,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1483,"strong"),e(1484,"gerenciador de colunas"),t(),e(1485,"."),t(),i(1486,"blockquote")(1487,"p"),e(1488,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1489,"code"),e(1490,"p-max-columns"),t(),e(1491,"."),t()()()(),i(1492,"tr",19)(1493,"td",20)(1494,"div",21)(1495,"span",22),e(1496," width"),r(1497,"br"),t()()(),i(1498,"td",24)(1499,"code",28),e(1500,"string"),t()(),i(1501,"td",27)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),t()(),i(1505,"p"),e(1506,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1507,"po-accordion-item",60)(1508,"h4",9)(1509,"code"),e(1510,"ThfLookupFilterSearchSelect"),t()(),i(1511,"div",10)(1512,"p"),e(1513,"Interface que define as colunas para busca ("),i(1514,"strong"),e(1515,"t-filter-search-select"),t(),e(1516,")"),t()(),i(1517,"h4",15),e(1518,"Propriedades"),t(),i(1519,"table",16)(1520,"tr",17)(1521,"th",18),e(1522,"Nome"),t(),i(1523,"th",18),e(1524,"Tipo"),t(),i(1525,"th",18),e(1526,"Descri\xE7\xE3o"),t()(),i(1527,"tr",19)(1528,"td",20)(1529,"div",21)(1530,"span",22),e(1531," label"),r(1532,"br"),t()()(),i(1533,"td",24)(1534,"code",28),e(1535,"string"),t()(),i(1536,"td",27)(1537,"p"),e(1538,"R\xF3tulo da coluna"),t()()(),i(1539,"tr",19)(1540,"td",20)(1541,"div",21)(1542,"span",22),e(1543," value"),r(1544,"br"),t()()(),i(1545,"td",24)(1546,"code",28),e(1547,"string"),t()(),i(1548,"td",27)(1549,"p"),e(1550,"Coluna"),t()()()()(),i(1551,"po-accordion-item",61)(1552,"h4",9)(1553,"code"),e(1554,"ThfLookupFilter"),t()(),i(1555,"div",10)(1556,"p"),e(1557,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1558,"table",52)(1559,"tr",19)(1560,"th",53)(1561,"div",21)(1562,"h4")(1563,"span",22),e(1564," fetchItems "),t()()()()(),i(1565,"tr",27)(1566,"td",27)(1567,"p"),e(1568,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1569,"em"),e(1570,"Observable"),t(),e(1571," com a resposta da API no formato { items: [] }."),t()()()(),i(1572,"h5")(1573,"b"),e(1574,"Par\xE2metros"),t()(),i(1575,"table",16)(1576,"tr",17)(1577,"th",18),e(1578,"Nome"),t(),i(1579,"th",18),e(1580,"Tipo"),t(),i(1581,"th",18),e(1582,"Descri\xE7\xE3o"),t()(),i(1583,"tr",19)(1584,"td",20),e(1585," query"),t(),i(1586,"td",24)(1587,"code",62),e(1588," string "),t()(),i(1589,"td",27)(1590,"p"),e(1591,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1592,"tr",19)(1593,"td",20),e(1594," filterParams"),t(),i(1595,"td",24)(1596,"code",62),e(1597," any "),t()(),i(1598,"td",27)(1599,"p"),e(1600,"Valor informado atrav\xE9s da propriedade "),i(1601,"strong"),e(1602,"t-filter-params"),t(),e(1603,"."),t()()()(),r(1604,"br"),i(1605,"table",52)(1606,"tr",19)(1607,"th",53)(1608,"div",21)(1609,"h4")(1610,"span",22),e(1611," getFilteredItems "),t()()()()(),i(1612,"tr",27)(1613,"td",27)(1614,"p"),e(1615,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1616,"em"),e(1617,"Observable"),t(),e(1618," com a resposta da API no formato da interface "),i(1619,"strong"),e(1620,"ThfLookupResponseApi"),t(),e(1621,"."),t()()()(),i(1622,"h5")(1623,"b"),e(1624,"Par\xE2metros"),t()(),i(1625,"table",16)(1626,"tr",17)(1627,"th",18),e(1628,"Nome"),t(),i(1629,"th",18),e(1630,"Tipo"),t(),i(1631,"th",18),e(1632,"Descri\xE7\xE3o"),t()(),i(1633,"tr",19)(1634,"td",20),e(1635," params"),t(),i(1636,"td",24)(1637,"code",62),e(1638," ThfLookupFilteredItemsParams "),t()(),i(1639,"td",27)(1640,"p"),e(1641,"Objeto enviado por par\xE2metro que implementa a interface "),i(1642,"strong"),e(1643,"ThfLookupFilteredItemsParams"),t(),e(1644,"."),t()()()(),r(1645,"br"),i(1646,"table",52)(1647,"tr",19)(1648,"th",53)(1649,"div",21)(1650,"h4")(1651,"span",22),e(1652," getObjectByValue "),t()()()()(),i(1653,"tr",27)(1654,"td",27)(1655,"p"),e(1656,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1657,"p"),e(1658,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1659,"code"),e(1660,"value"),t(),e(1661,` ser\xE1 enviado como uma lista de valores
e o `),i(1662,"em"),e(1663,"Observable"),t(),e(1664," deve retornar uma lista de objetos."),t()()()(),i(1665,"h5")(1666,"b"),e(1667,"Par\xE2metros"),t()(),i(1668,"table",16)(1669,"tr",17)(1670,"th",18),e(1671,"Nome"),t(),i(1672,"th",18),e(1673,"Tipo"),t(),i(1674,"th",18),e(1675,"Descri\xE7\xE3o"),t()(),i(1676,"tr",19)(1677,"td",20),e(1678," value"),t(),i(1679,"td",24)(1680,"code",28),e(1681," string "),t(),i(1682,"code",37),e(1683," Array<any> "),t()(),i(1684,"td",27)(1685,"p"),e(1686,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1687,"tr",19)(1688,"td",20),e(1689," filterParams"),t(),i(1690,"td",24)(1691,"code",62),e(1692," any "),t()(),i(1693,"td",27)(1694,"p"),e(1695,"Valor informado atrav\xE9s da propriedade "),i(1696,"strong"),e(1697,"t-filter-params"),t(),e(1698,"."),t()()()(),r(1699,"br"),t(),i(1700,"po-accordion-item",63)(1701,"h4",9)(1702,"code"),e(1703,"ThfLookupFilteredItemsParams"),t()(),i(1704,"div",10)(1705,"p"),e(1706,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1707,"strong"),e(1708,"getFilteredItems"),t(),e(1709,"."),t()(),i(1710,"h4",15),e(1711,"Propriedades"),t(),i(1712,"table",16)(1713,"tr",17)(1714,"th",18),e(1715,"Nome"),t(),i(1716,"th",18),e(1717,"Tipo"),t(),i(1718,"th",18),e(1719,"Descri\xE7\xE3o"),t()(),i(1720,"tr",19)(1721,"td",20)(1722,"div",21)(1723,"span",22),e(1724," filter"),r(1725,"br"),t()()(),i(1726,"td",24)(1727,"code",64),e(1728,`{ [key: string]: any;
}`),t()(),i(1729,"td",27)(1730,"em")(1731,"strong"),e(1732,"(opcional)"),t()(),i(1733,"p"),e(1734,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1735,"tr",19)(1736,"td",20)(1737,"div",21)(1738,"span",22),e(1739," filterParams"),r(1740,"br"),t()()(),i(1741,"td",24)(1742,"code",40),e(1743,"any"),t()(),i(1744,"td",27)(1745,"em")(1746,"strong"),e(1747,"(opcional)"),t()(),i(1748,"p"),e(1749,"Valor informado atrav\xE9s da propriedade "),i(1750,"code"),e(1751,"t-filter-params"),t(),e(1752,"."),t()()(),i(1753,"tr",19)(1754,"td",20)(1755,"div",21)(1756,"span",22),e(1757," order"),r(1758,"br"),t()()(),i(1759,"td",24)(1760,"code",28),e(1761,"string"),t()(),i(1762,"td",27)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),t()(),i(1766,"p"),e(1767,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1768,"ul")(1769,"li"),e(1770,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1771,"code"),e(1772,"-<colunaOrdenada>"),t(),e(1773,", por exemplo "),i(1774,"code"),e(1775,"-name"),t(),e(1776,"."),t(),i(1777,"li"),e(1778,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1779,"code"),e(1780,"<colunaOrdenada>"),t(),e(1781,", por exemplo "),i(1782,"code"),e(1783,"name"),t(),e(1784,"."),t()()()(),i(1785,"tr",19)(1786,"td",20)(1787,"div",21)(1788,"span",22),e(1789," page"),r(1790,"br"),t()()(),i(1791,"td",24)(1792,"code",65),e(1793,"number"),t()(),i(1794,"td",27)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),i(1798,"p"),e(1799,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1800,"tr",19)(1801,"td",20)(1802,"div",21)(1803,"span",22),e(1804," pageSize"),r(1805,"br"),t()()(),i(1806,"td",24)(1807,"code",65),e(1808,"number"),t()(),i(1809,"td",27)(1810,"em")(1811,"strong"),e(1812,"(opcional)"),t()(),i(1813,"p"),e(1814,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1815,"po-accordion-item",66)(1816,"h4",9)(1817,"code"),e(1818,"ThfLookupGridProperties"),t()(),i(1819,"div",10)(1820,"p"),e(1821,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1822,"h4",15),e(1823,"Propriedades"),t(),i(1824,"table",16)(1825,"tr",17)(1826,"th",18),e(1827,"Nome"),t(),i(1828,"th",18),e(1829,"Tipo"),t(),i(1830,"th",18),e(1831,"Descri\xE7\xE3o"),t()(),i(1832,"tr",19)(1833,"td",20)(1834,"div",21)(1835,"span",22),e(1836," actionRight"),r(1837,"br"),t()()(),i(1838,"td",24)(1839,"code",29),e(1840,"boolean"),t()(),i(1841,"td",27)(1842,"em")(1843,"strong"),e(1844,"(opcional)"),t()(),i(1845,"p"),e(1846,"Posiciona a coluna de a\xE7\xF5es ("),i(1847,"code"),e(1848,"t-actions"),t(),e(1849,") \xE0 direita."),t()()(),i(1850,"tr",19)(1851,"td",20)(1852,"div",21)(1853,"span",22),e(1854," actions"),r(1855,"br"),t()()(),i(1856,"td",24)(1857,"code",67),e(1858,"Array<ThfTableAction>"),t()(),i(1859,"td",27)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),i(1863,"p"),e(1864,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(1865,"strong"),e(1866,"ThfTableAction"),t(),e(1867,`, adicionando uma coluna
ao componente thf-grid do lookup. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(1868,"a",68)(1869,"strong"),e(1870,"an an-dots-three-vertical"),t()(),e(1871,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(1872,"p")(1873,"strong"),e(1874,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(1875,"ul")(1876,"li"),e(1877,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(1878,"li"),e(1879,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(1880,"pre")(1881,"code",33),e(1882,`// Exemplo de uso:
<thf-lookup
 [t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(1883,"pre")(1884,"code",34),e(1885,`gridProperties: ThfLookupGridProperties = {
  actions: [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name} \`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ]
};

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(1886,"tr",19)(1887,"td",20)(1888,"div",21)(1889,"span",22),e(1890," autoSize"),r(1891,"br"),t()()(),i(1892,"td",24)(1893,"code",29),e(1894,"boolean"),t()(),i(1895,"td",27)(1896,"em")(1897,"strong"),e(1898,"(opcional)"),t()(),i(1899,"p"),e(1900,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1901,"strong"),e(1902,"resizable"),t(),e(1903," esteja habilitada."),t(),i(1904,"blockquote")(1905,"p"),e(1906,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1907,"tr",19)(1908,"td",20)(1909,"div",21)(1910,"span",22),e(1911," autoSizeOnScroll"),r(1912,"br"),t()()(),i(1913,"td",24)(1914,"code",29),e(1915,"boolean"),t()(),i(1916,"td",27)(1917,"em")(1918,"strong"),e(1919,"(opcional)"),t()(),i(1920,"p"),e(1921,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1922,"p"),e(1923,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1924,"p"),e(1925,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1926,"code"),e(1927,"t-page-size-virtual"),t(),e(1928," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1929,"blockquote")(1930,"p")(1931,"strong"),e(1932,"Pr\xE9-requisitos"),t(),e(1933,": Requer que as propriedades "),i(1934,"code"),e(1935,"autoSize"),t(),e(1936,", "),i(1937,"code"),e(1938,"resizable"),t(),e(1939,`
e `),i(1940,"code"),e(1941,"virtualScroll"),t(),e(1942," estejam habilitadas."),t()(),i(1943,"blockquote")(1944,"p")(1945,"strong"),e(1946,"Incompatibilidade"),t(),e(1947,": N\xE3o funciona com "),i(1948,"code"),e(1949,"t-grid-row-actions"),t(),e(1950," habilitado;"),t()(),i(1951,"p")(1952,"strong"),e(1953,"Exemplo de uso:"),t()(),i(1954,"pre")(1955,"code",33),e(1956,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(1957,"tr",19)(1958,"td",20)(1959,"div",21)(1960,"span",22),e(1961," draggable"),r(1962,"br"),t()()(),i(1963,"td",24)(1964,"code",29),e(1965,"boolean"),t()(),i(1966,"td",27)(1967,"em")(1968,"strong"),e(1969,"(opcional)"),t()(),i(1970,"p"),e(1971,"Habilita o Drag and Drop nas colunas."),t()()(),i(1972,"tr",19)(1973,"td",20)(1974,"div",21)(1975,"span",22),e(1976," group"),r(1977,"br"),t()()(),i(1978,"td",24)(1979,"code",38),e(1980,"Array<string>"),t()(),i(1981,"td",27)(1982,"em")(1983,"strong"),e(1984,"(opcional)"),t()(),i(1985,"p"),e(1986,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1987,"strong"),e(1988,"groupable"),t(),e(1989," esteja habilitada."),t()()(),i(1990,"tr",19)(1991,"td",20)(1992,"div",21)(1993,"span",22),e(1994," groupable"),r(1995,"br"),t()()(),i(1996,"td",24)(1997,"code",29),e(1998,"boolean "),t(),i(1999,"code",69),e(2e3," GroupableSettings"),t()(),i(2001,"td",27)(2002,"em")(2003,"strong"),e(2004,"(opcional)"),t()(),i(2005,"p"),e(2006,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(2007,"tr",19)(2008,"td",20)(2009,"div",21)(2010,"span",22),e(2011," hideSelectAll"),r(2012,"br"),t()()(),i(2013,"td",24)(2014,"code",29),e(2015,"boolean"),t()(),i(2016,"td",27)(2017,"em")(2018,"strong"),e(2019,"(opcional)"),t()(),i(2020,"p"),e(2021,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(2022,"tr",19)(2023,"td",20)(2024,"div",21)(2025,"span",22),e(2026," resizable"),r(2027,"br"),t()()(),i(2028,"td",24)(2029,"code",29),e(2030,"boolean"),t()(),i(2031,"td",27)(2032,"em")(2033,"strong"),e(2034,"(opcional)"),t()(),i(2035,"p"),e(2036,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(2037,"tr",19)(2038,"td",20)(2039,"div",21)(2040,"span",22),e(2041," selectableEntireLine"),r(2042,"br"),t()()(),i(2043,"td",24)(2044,"code",29),e(2045,"boolean"),t()(),i(2046,"td",27)(2047,"em")(2048,"strong"),e(2049,"(opcional)"),t()(),i(2050,"p"),e(2051,"Permite selecionar o item ao clicar na linha."),t()()(),i(2052,"tr",19)(2053,"td",20)(2054,"div",21)(2055,"span",22),e(2056," showDraggableIcon"),r(2057,"br"),t()()(),i(2058,"td",24)(2059,"code",29),e(2060,"boolean"),t()(),i(2061,"td",27)(2062,"em")(2063,"strong"),e(2064,"(opcional)"),t()(),i(2065,"p"),e(2066,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(2067,"tr",19)(2068,"td",20)(2069,"div",21)(2070,"span",22),e(2071," showMoreDisabled"),r(2072,"br"),t()()(),i(2073,"td",24)(2074,"code",29),e(2075,"boolean"),t()(),i(2076,"td",27)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),i(2080,"p"),e(2081,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2082,"tr",19)(2083,"td",20)(2084,"div",21)(2085,"span",22),e(2086," showMoreVisible"),r(2087,"br"),t()()(),i(2088,"td",24)(2089,"code",29),e(2090,"boolean"),t()(),i(2091,"td",27)(2092,"em")(2093,"strong"),e(2094,"(opcional)"),t()(),i(2095,"p"),e(2096,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2097,"strong"),e(2098,"pageable"),t(),e(2099," esteja habilitada."),t(),i(2100,"blockquote")(2101,"p"),e(2102,"Caso seja utilizado em conjunto com "),i(2103,"strong"),e(2104,"showMoreDisabled"),t(),e(2105,", a propriedade "),i(2106,"strong"),e(2107,"showMoreVisible"),t(),e(2108," ter\xE1 prioridade."),t()()()(),i(2109,"tr",19)(2110,"td",20)(2111,"div",21)(2112,"span",22),e(2113," sort"),r(2114,"br"),t()()(),i(2115,"td",24)(2116,"code",70),e(2117,"Array<{ field: string; dir: 'asc' "),t(),i(2118,"code",71),e(2119,` 'desc';
}>`),t()(),i(2120,"td",27)(2121,"em")(2122,"strong"),e(2123,"(opcional)"),t()(),i(2124,"p"),e(2125,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2126,"pre")(2127,"code",34),e(2128,`sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(2129,"tr",19)(2130,"td",20)(2131,"div",21)(2132,"span",22),e(2133," sortable"),r(2134,"br"),t()()(),i(2135,"td",24)(2136,"code",29),e(2137,"boolean"),t()(),i(2138,"td",27)(2139,"em")(2140,"strong"),e(2141,"(opcional)"),t()(),i(2142,"p"),e(2143,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2144,"tr",19)(2145,"td",20)(2146,"div",21)(2147,"span",22),e(2148," spacing"),r(2149,"br"),t()()(),i(2150,"td",24)(2151,"code",72),e(2152,"'extraSmall' "),t(),i(2153,"code",73),e(2154," 'small' "),t(),i(2155,"code",74),e(2156," 'medium' "),t(),i(2157,"code",75),e(2158," 'large'"),t()(),i(2159,"td",27)(2160,"em")(2161,"strong"),e(2162,"(opcional)"),t()(),i(2163,"p"),e(2164,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2165,"strong"),e(2166,"ThfColumnSpacing"),t(),e(2167,"."),t()()(),i(2168,"tr",19)(2169,"td",20)(2170,"div",21)(2171,"span",22),e(2172," striped"),r(2173,"br"),t()()(),i(2174,"td",24)(2175,"code",29),e(2176,"boolean"),t()(),i(2177,"td",27)(2178,"em")(2179,"strong"),e(2180,"(opcional)"),t()(),i(2181,"p"),e(2182,"Define o estilo listrado no grid (striped)."),t()()(),i(2183,"tr",19)(2184,"td",20)(2185,"div",21)(2186,"span",22),e(2187," virtualScroll"),r(2188,"br"),t()()(),i(2189,"td",24)(2190,"code",29),e(2191,"boolean"),t()(),i(2192,"td",27)(2193,"em")(2194,"strong"),e(2195,"(opcional)"),t()(),i(2196,"p"),e(2197,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2198,"po-accordion-item",76)(2199,"h4",9)(2200,"code"),e(2201,"ThfLookupKeysLabel"),t()(),i(2202,"div",10)(2203,"p"),e(2204,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2205,"strong"),e(2206,"t-keys-label"),t(),e(2207,")."),t()(),i(2208,"h4",15),e(2209,"Propriedades"),t(),i(2210,"table",16)(2211,"tr",17)(2212,"th",18),e(2213,"Nome"),t(),i(2214,"th",18),e(2215,"Tipo"),t(),i(2216,"th",18),e(2217,"Descri\xE7\xE3o"),t()(),i(2218,"tr",19)(2219,"td",20)(2220,"div",21)(2221,"span",22),e(2222," label"),r(2223,"br"),t()()(),i(2224,"td",24)(2225,"code",28),e(2226,"string"),t()(),i(2227,"td",27)(2228,"p"),e(2229,"Texto exibido"),t()()(),i(2230,"tr",19)(2231,"td",20)(2232,"div",21)(2233,"span",22),e(2234," value"),r(2235,"br"),t()()(),i(2236,"td",24)(2237,"code",28),e(2238,"string"),t()(),i(2239,"td",27)(2240,"p"),e(2241,"Coluna"),t()()()()(),i(2242,"po-accordion-item",77)(2243,"h4",9)(2244,"code"),e(2245,"ThfLookupLiterals"),t()(),i(2246,"div",10)(2247,"p"),e(2248,"Interface para customizar literais ("),i(2249,"strong"),e(2250,"t-literals"),t(),e(2251,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2252,"h4",15),e(2253,"Propriedades"),t(),i(2254,"table",16)(2255,"tr",17)(2256,"th",18),e(2257,"Nome"),t(),i(2258,"th",18),e(2259,"Tipo"),t(),i(2260,"th",18),e(2261,"Descri\xE7\xE3o"),t()(),i(2262,"tr",19)(2263,"td",20)(2264,"div",21)(2265,"span",22),e(2266," confirmBodyDelete"),r(2267,"br"),t()()(),i(2268,"td",24)(2269,"code",28),e(2270,"string"),t()(),i(2271,"td",27)(2272,"em")(2273,"strong"),e(2274,"(opcional)"),t()(),i(2275,"p"),e(2276,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2277,"tr",19)(2278,"td",20)(2279,"div",21)(2280,"span",22),e(2281," confirmCancelDelete"),r(2282,"br"),t()()(),i(2283,"td",24)(2284,"code",28),e(2285,"string"),t()(),i(2286,"td",27)(2287,"em")(2288,"strong"),e(2289,"(opcional)"),t()(),i(2290,"p"),e(2291,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2292,"tr",19)(2293,"td",20)(2294,"div",21)(2295,"span",22),e(2296," confirmRemoveDelete"),r(2297,"br"),t()()(),i(2298,"td",24)(2299,"code",28),e(2300,"string"),t()(),i(2301,"td",27)(2302,"em")(2303,"strong"),e(2304,"(opcional)"),t()(),i(2305,"p"),e(2306,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2307,"tr",19)(2308,"td",20)(2309,"div",21)(2310,"span",22),e(2311," confirmTitleDelete"),r(2312,"br"),t()()(),i(2313,"td",24)(2314,"code",28),e(2315,"string"),t()(),i(2316,"td",27)(2317,"em")(2318,"strong"),e(2319,"(opcional)"),t()(),i(2320,"p"),e(2321,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2322,"tr",19)(2323,"td",20)(2324,"div",21)(2325,"span",22),e(2326," lastSearch"),r(2327,"br"),t()()(),i(2328,"td",24)(2329,"code",28),e(2330,"string"),t()(),i(2331,"td",27)(2332,"em")(2333,"strong"),e(2334,"(opcional)"),t()(),i(2335,"p"),e(2336,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2337,"tr",19)(2338,"td",20)(2339,"div",21)(2340,"span",22),e(2341," listNotFound"),r(2342,"br"),t()()(),i(2343,"td",24)(2344,"code",28),e(2345,"string"),t()(),i(2346,"td",27)(2347,"em")(2348,"strong"),e(2349,"(opcional)"),t()(),i(2350,"p"),e(2351,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2352,"tr",19)(2353,"td",20)(2354,"div",21)(2355,"span",22),e(2356," modalPlaceholder"),r(2357,"br"),t()()(),i(2358,"td",24)(2359,"code",28),e(2360,"string"),t()(),i(2361,"td",27)(2362,"em")(2363,"strong"),e(2364,"(opcional)"),t()(),i(2365,"p"),e(2366,"Texto exibido no placeholder do input da modal."),t()()(),i(2367,"tr",19)(2368,"td",20)(2369,"div",21)(2370,"span",22),e(2371," modalPrimaryActionLabel"),r(2372,"br"),t()()(),i(2373,"td",24)(2374,"code",28),e(2375,"string"),t()(),i(2376,"td",27)(2377,"em")(2378,"strong"),e(2379,"(opcional)"),t()(),i(2380,"p"),e(2381,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2382,"tr",19)(2383,"td",20)(2384,"div",21)(2385,"span",22),e(2386," modalSecondaryActionLabel"),r(2387,"br"),t()()(),i(2388,"td",24)(2389,"code",28),e(2390,"string"),t()(),i(2391,"td",27)(2392,"em")(2393,"strong"),e(2394,"(opcional)"),t()(),i(2395,"p"),e(2396,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2397,"tr",19)(2398,"td",20)(2399,"div",21)(2400,"span",22),e(2401," modalTableLoadMoreData"),r(2402,"br"),t()()(),i(2403,"td",24)(2404,"code",28),e(2405,"string"),t()(),i(2406,"td",27)(2407,"em")(2408,"strong"),e(2409,"(opcional)"),t()(),i(2410,"p"),e(2411,"Label do "),i(2412,"code"),e(2413,"button"),t(),e(2414," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2415,"tr",19)(2416,"td",20)(2417,"div",21)(2418,"span",22),e(2419," modalTableLoadingData"),r(2420,"br"),t()()(),i(2421,"td",24)(2422,"code",28),e(2423,"string"),t()(),i(2424,"td",27)(2425,"em")(2426,"strong"),e(2427,"(opcional)"),t()(),i(2428,"p"),e(2429,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2430,"tr",19)(2431,"td",20)(2432,"div",21)(2433,"span",22),e(2434," modalTableNoColumns"),r(2435,"br"),t()()(),i(2436,"td",24)(2437,"code",28),e(2438,"string"),t()(),i(2439,"td",27)(2440,"em")(2441,"strong"),e(2442,"(opcional)"),t()(),i(2443,"p"),e(2444,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2445,"tr",19)(2446,"td",20)(2447,"div",21)(2448,"span",22),e(2449," modalTableNoData"),r(2450,"br"),t()()(),i(2451,"td",24)(2452,"code",28),e(2453,"string"),t()(),i(2454,"td",27)(2455,"em")(2456,"strong"),e(2457,"(opcional)"),t()(),i(2458,"p"),e(2459,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2460,"tr",19)(2461,"td",20)(2462,"div",21)(2463,"span",22),e(2464," modalTitle"),r(2465,"br"),t()()(),i(2466,"td",24)(2467,"code",28),e(2468,"string"),t()(),i(2469,"td",27)(2470,"em")(2471,"strong"),e(2472,"(opcional)"),t()(),i(2473,"p"),e(2474,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2475,"tr",19)(2476,"td",20)(2477,"div",21)(2478,"span",22),e(2479," multipleItems"),r(2480,"br"),t()()(),i(2481,"td",24)(2482,"code",28),e(2483,"string"),t()(),i(2484,"td",27)(2485,"em")(2486,"strong"),e(2487,"(opcional)"),t()(),i(2488,"p"),e(2489,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2490,"tr",19)(2491,"td",20)(2492,"div",21)(2493,"span",22),e(2494," oneItem"),r(2495,"br"),t()()(),i(2496,"td",24)(2497,"code",28),e(2498,"string"),t()(),i(2499,"td",27)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),i(2503,"p"),e(2504,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2505,"tr",19)(2506,"td",20)(2507,"div",21)(2508,"span",22),e(2509," or"),r(2510,"br"),t()()(),i(2511,"td",24)(2512,"code",28),e(2513,"string"),t()(),i(2514,"td",27)(2515,"em")(2516,"strong"),e(2517,"(opcional)"),t()(),i(2518,"p"),e(2519,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2520,"tr",19)(2521,"td",20)(2522,"div",21)(2523,"span",22),e(2524," searchAdvanced"),r(2525,"br"),t()()(),i(2526,"td",24)(2527,"code",28),e(2528,"string"),t()(),i(2529,"td",27)(2530,"em")(2531,"strong"),e(2532,"(opcional)"),t()(),i(2533,"p"),e(2534,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2535,"tr",19)(2536,"td",20)(2537,"div",21)(2538,"span",22),e(2539," searchBy"),r(2540,"br"),t()()(),i(2541,"td",24)(2542,"code",28),e(2543,"string"),t()(),i(2544,"td",27)(2545,"em")(2546,"strong"),e(2547,"(opcional)"),t()(),i(2548,"p"),e(2549,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2550,"po-accordion-item",78)(2551,"h4",9)(2552,"code"),e(2553,"ThfLookupResponseApi"),t()(),i(2554,"div",10)(2555,"p"),e(2556,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2557,"blockquote")(2558,"p"),e(2559,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2560,"h4",15),e(2561,"Propriedades"),t(),i(2562,"table",16)(2563,"tr",17)(2564,"th",18),e(2565,"Nome"),t(),i(2566,"th",18),e(2567,"Tipo"),t(),i(2568,"th",18),e(2569,"Descri\xE7\xE3o"),t()(),i(2570,"tr",19)(2571,"td",20)(2572,"div",21)(2573,"span",22),e(2574," hasNext"),r(2575,"br"),t()()(),i(2576,"td",24)(2577,"code",29),e(2578,"boolean"),t()(),i(2579,"td",27)(2580,"p"),e(2581,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2582,"tr",19)(2583,"td",20)(2584,"div",21)(2585,"span",22),e(2586," items"),r(2587,"br"),t()()(),i(2588,"td",24)(2589,"code",37),e(2590,"Array<any>"),t()(),i(2591,"td",27)(2592,"p"),e(2593,"Lista de itens retornados."),t()()()()()()(),V(2594,4),t(),i(2595,"po-tab",79)(2596,"po-container",5),V(2597,5),i(2598,"h3"),e(2599,"Tokens customiz\xE1veis"),t(),i(2600,"p"),e(2601,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2602,"blockquote")(2603,"p"),e(2604,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2605,"a",80),e(2606,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2607,"."),t()(),i(2608,"table")(2609,"thead")(2610,"tr")(2611,"th"),e(2612,"Propriedade"),t(),i(2613,"th"),e(2614,"Descri\xE7\xE3o"),t(),i(2615,"th"),e(2616,"Valor Padr\xE3o"),t()()(),i(2617,"tbody")(2618,"tr")(2619,"td")(2620,"strong"),e(2621,"Default Values"),t()(),r(2622,"td")(2623,"td"),t(),i(2624,"tr")(2625,"td")(2626,"code"),e(2627,"--font-family"),t()(),i(2628,"td"),e(2629,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2630,"td")(2631,"code"),e(2632,"var(--font-family-theme)"),t()()(),i(2633,"tr")(2634,"td")(2635,"code"),e(2636,"--font-size"),t()(),i(2637,"td"),e(2638,"Tamanho da fonte"),t(),i(2639,"td")(2640,"code"),e(2641,"var(--font-size)"),t()()(),i(2642,"tr")(2643,"td")(2644,"code"),e(2645,"--text-color-placeholder"),t()(),i(2646,"td"),e(2647,"Cor do texto no placeholder"),t(),i(2648,"td")(2649,"code"),e(2650,"var(--color-neutral-light-30)"),t()()(),i(2651,"tr")(2652,"td")(2653,"code"),e(2654,"--color"),t()(),i(2655,"td"),e(2656,"Cor principal do campo"),t(),i(2657,"td")(2658,"code"),e(2659,"var(--color-neutral-dark-70)"),t()()(),i(2660,"tr")(2661,"td")(2662,"code"),e(2663,"--background"),t()(),i(2664,"td"),e(2665,"Cor de background"),t(),i(2666,"td")(2667,"code"),e(2668,"var(--color-neutral-light-00)"),t()()(),i(2669,"tr")(2670,"td")(2671,"code"),e(2672,"--text-color"),t()(),i(2673,"td"),e(2674,"Cor do texto"),t(),i(2675,"td")(2676,"code"),e(2677,"var(--color-neutral-mid-60)"),t()()(),i(2678,"tr")(2679,"td")(2680,"code"),e(2681,"--field-container-title-justify"),t()(),i(2682,"td"),e(2683,"Alinhamento horizontal do t\xEDtulo ("),i(2684,"code"),e(2685,"justify-content"),t(),e(2686,")"),t(),i(2687,"td")(2688,"code"),e(2689,"space-between"),t()()(),i(2690,"tr")(2691,"td")(2692,"code"),e(2693,"--field-container-title-flex"),t()(),i(2694,"td"),e(2695,"Flex do t\xEDtulo ("),i(2696,"code"),e(2697,"flex"),t(),e(2698,")"),t(),i(2699,"td")(2700,"code"),e(2701,"1 auto"),t()()(),i(2702,"tr")(2703,"td")(2704,"strong"),e(2705,"Hover"),t()(),r(2706,"td")(2707,"td"),t(),i(2708,"tr")(2709,"td")(2710,"code"),e(2711,"--color-hover"),t()(),i(2712,"td"),e(2713,"Cor principal do campo no estado hover"),t(),i(2714,"td")(2715,"code"),e(2716,"var(--color-brand-01-dark)"),t()()(),i(2717,"tr")(2718,"td")(2719,"code"),e(2720,"--background-hover"),t()(),i(2721,"td"),e(2722,"Cor de background no estado hover"),t(),i(2723,"td")(2724,"code"),e(2725,"var(--color-brand-01-lightest)"),t()()(),i(2726,"tr")(2727,"td")(2728,"strong"),e(2729,"Focused"),t()(),r(2730,"td")(2731,"td"),t(),i(2732,"tr")(2733,"td")(2734,"code"),e(2735,"--color-focused"),t()(),i(2736,"td"),e(2737,"Cor principal do campo no estado de focus"),t(),i(2738,"td")(2739,"code"),e(2740,"var(--color-action-default)"),t()()(),i(2741,"tr")(2742,"td")(2743,"code"),e(2744,"--outline-color-focused"),t()(),i(2745,"td"),e(2746,"Cor do outline no estado de focus"),t(),i(2747,"td")(2748,"code"),e(2749,"var(--color-action-focus)"),t()()(),i(2750,"tr")(2751,"td")(2752,"strong"),e(2753,"Disabled"),t()(),r(2754,"td")(2755,"td"),t(),i(2756,"tr")(2757,"td")(2758,"code"),e(2759,"--color-disabled"),t()(),i(2760,"td"),e(2761,"Cor principal do campo no estado disabled"),t(),i(2762,"td")(2763,"code"),e(2764,"var(--color-neutral-light-30)"),t()()(),i(2765,"tr")(2766,"td")(2767,"code"),e(2768,"--background-disabled"),t()(),i(2769,"td"),e(2770,"Cor de background no estado disabled"),t(),i(2771,"td")(2772,"code"),e(2773,"var(--color-neutral-light-05)"),t()()(),i(2774,"tr")(2775,"td")(2776,"code"),e(2777,"--text-color-disabled"),t()(),i(2778,"td"),e(2779,"Cor do texto no estado disabled"),t(),i(2780,"td")(2781,"code"),e(2782,"var(--color-neutral-dark-70)"),t()()()()()(),V(2783,6),t(),i(2784,"po-tab",81),V(2785,7),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var so=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],co=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Ft=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-lookup-data"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:co,decls:2117,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","boolean,","any"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(so),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  t-auto-focus="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-compact-label="boolean, any"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  t-help="string"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-label="string"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-helper="string | PoHelperOptions"
  t-required="boolean"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-auto-focus"),r(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Aplica foco no campo de busca do componente ao ser iniciado."),t(),i(63,"blockquote")(64,"p"),e(65,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(66,"tr",19)(67,"td",20)(68,"div",27)(69,"span",28),e(70," (t-change)"),r(71,"br"),t()()(),i(72,"td",23)(73,"code",29),e(74,"EventEmitter"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(83,"tr",19)(84,"td",20)(85,"div",27)(86,"span",28),e(87," (t-change-model)"),r(88,"br"),t()()(),i(89,"td",23)(90,"code",29),e(91,"EventEmitter"),t()(),i(92,"td",25),e(93,"-"),t(),i(94,"td",26)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),i(98,"p"),e(99,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(100,"tr",19)(101,"td",20)(102,"div",21)(103,"span",22),e(104,"t-columns"),r(105,"br"),t()()(),i(106,"td",23)(107,"code",30),e(108,"Array<ThfLookupDataColumn>"),t()(),i(109,"td",25),e(110,"-"),t(),i(111,"td",26)(112,"em")(113,"strong"),e(114,"(opcional)"),t()(),i(115,"p"),e(116,"Permite definir e configurar as colunas do grid por meio da interface "),i(117,"strong"),e(118,"ThfLookupDataColumn"),t(),e(119,"."),t(),i(120,"pre")(121,"code",31),e(122,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>
`),t()(),i(123,"pre")(124,"code",32),e(125,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(126,"tr",19)(127,"td",20)(128,"div",21)(129,"span",22),e(130," t-compact-label"),r(131,"br"),t()()(),i(132,"td",23)(133,"code",33),e(134,"boolean, any"),t()(),i(135,"td",25)(136,"p")(137,"code"),e(138,"false"),t()()(),i(139,"td",26)(140,"em")(141,"strong"),e(142,"(opcional)"),t()(),i(143,"p"),e(144,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(145,"p"),e(146,"Quando habilitado ("),i(147,"code"),e(148,"true"),t(),e(149,"), o modo compacto afeta o conjunto composto por:"),t(),i(150,"ul")(151,"li")(152,"code"),e(153,"po-label"),t()(),i(154,"li")(155,"code"),e(156,"p-requirement (showRequired)"),t()(),i(157,"li")(158,"code"),e(159,"po-helper"),t()()(),i(160,"p"),e(161,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(162,"p"),e(163,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(164,"ul")(165,"li")(166,"code"),e(167,"--field-container-title-justify"),t()(),i(168,"li")(169,"code"),e(170,"--field-container-title-flex"),t()()(),i(171,"p"),e(172,"Exemplo:"),t(),i(173,"pre")(174,"code"),e(175,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(176,"p"),e(177,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(178,"tr",19)(179,"td",20)(180,"div",21)(181,"span",22),e(182,"t-custom-items"),r(183,"br"),t()()(),i(184,"td",23)(185,"code",34),e(186,"Array<any>"),t()(),i(187,"td",25)(188,"p")(189,"code"),e(190,"[]"),t()()(),i(191,"td",26)(192,"em")(193,"strong"),e(194,"(opcional)"),t()(),i(195,"p"),e(196,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(197,"tr",19)(198,"td",20)(199,"div",21)(200,"span",22),e(201,"t-disabled"),r(202,"br"),t()()(),i(203,"td",23)(204,"code",24),e(205,"boolean"),t()(),i(206,"td",25)(207,"p")(208,"code"),e(209,"false"),t()()(),i(210,"td",26)(211,"em")(212,"strong"),e(213,"(opcional)"),t()(),i(214,"p"),e(215,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(216,"tr",19)(217,"td",20)(218,"div",21)(219,"span",22),e(220,"t-error-limit"),r(221,"br"),t()()(),i(222,"td",23)(223,"code",24),e(224,"boolean"),t()(),i(225,"td",25)(226,"p")(227,"code"),e(228,"false"),t()()(),i(229,"td",26)(230,"em")(231,"strong"),e(232,"(opcional)"),t()(),i(233,"p"),e(234,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(235,"blockquote")(236,"p"),e(237,"Caso essa propriedade seja definida como "),i(238,"code"),e(239,"true"),t(),e(240,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245,"t-field-error-message"),r(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"string"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Exibe a mensagem definida se n\xE3o houver itens selecionados."),t(),i(258,"blockquote")(259,"p"),e(260,"Necess\xE1rio que a propriedade "),i(261,"code"),e(262,"t-required"),t(),e(263," esteja habilitada."),t()()()(),i(264,"tr",19)(265,"td",20)(266,"div",21)(267,"span",22),e(268,"t-field-label"),r(269,"br"),t()()(),i(270,"td",23)(271,"code",35),e(272,"string"),t()(),i(273,"td",25),e(274,"-"),t(),i(275,"td",26)(276,"p"),e(277,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(278,"tr",19)(279,"td",20)(280,"div",21)(281,"span",22),e(282,"t-field-value"),r(283,"br"),t()()(),i(284,"td",23)(285,"code",35),e(286,"string"),t()(),i(287,"td",25),e(288,"-"),t(),i(289,"td",26)(290,"p"),e(291,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(292,"blockquote")(293,"p"),e(294,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(295,"tr",19)(296,"td",20)(297,"div",21)(298,"span",22),e(299,"t-filter-params"),r(300,"br"),t()()(),i(301,"td",23)(302,"code",36),e(303,"any"),t()(),i(304,"td",25),e(305,"-"),t(),i(306,"td",26)(307,"em")(308,"strong"),e(309,"(opcional)"),t()(),i(310,"p"),e(311,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(312,"strong"),e(313,"ThfLookupDataFilter"),t(),e(314,"."),t()()(),i(315,"tr",19)(316,"td",20)(317,"div",21)(318,"span",22),e(319,"t-filter-search-select"),r(320,"br"),t()()(),i(321,"td",23)(322,"code",37),e(323,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(324,"td",25),e(325,"-"),t(),i(326,"td",26)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),i(330,"p"),e(331,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(332,"strong"),e(333,"ThfLookupDataFilterSearchSelect"),t(),e(334,"."),t(),i(335,"pre")(336,"code",31),e(337,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>
`),t()(),i(338,"pre")(339,"code",32),e(340,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];
`),t()()()(),i(341,"tr",19)(342,"td",20)(343,"div",21)(344,"span",22),e(345,"t-filter-service"),r(346,"br"),t()()(),i(347,"td",23)(348,"code",38),e(349,"ThfLookupDataFilter "),t(),i(350,"code",35),e(351," string"),t()(),i(352,"td",25),e(353,"-"),t(),i(354,"td",26)(355,"p"),e(356,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(357,"strong"),e(358,"ThfLookupDataFilter"),t(),e(359," ou uma URL."),t(),i(360,"p"),e(361,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(362,"code"),e(363,"filter"),t(),e(364," com o valor da busca:"),t(),i(365,"pre")(366,"code"),e(367,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(368,"p"),e(369,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(370,"code"),e(371,"order"),t(),e(372,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(373,"pre")(374,"code"),e(375,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()(),i(376,"p"),e(377,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(378,"pre")(379,"code"),e(380,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()(),i(381,"p"),e(382,"Se definido "),i(383,"strong"),e(384,"t-filter-params"),t(),e(385,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(386,"code"),e(387,"{ age: 23 }"),t(),e(388,":"),t(),i(389,"pre")(390,"code"),e(391,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(392,"p"),e(393,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(394,"pre")(395,"code"),e(396,`model = 1234;

GET url/1234
`),t()(),i(397,"p"),e(398,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(399,"pre")(400,"code"),e(401,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(402,"blockquote")(403,"p"),e(404,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(405,"a",39),e(406,"API do PO UI"),t(),e(407,` e utilizar
os valores definidos nas propriedades `),i(408,"strong"),e(409,"t-field-label"),t(),e(410," e "),i(411,"strong"),e(412,"t-field-value"),t(),e(413," para a constru\xE7\xE3o do "),i(414,"strong"),e(415,"thf-lookup"),t(),e(416,"."),t()(),i(417,"p"),e(418,"Caso a busca tenha ocorrido pressionando a tecla "),i(419,"em"),e(420,"TAB"),t(),e(421,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(422,"a",40),e(423,"encodeURIComponent"),t(),e(424,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(425,"pre")(426,"code"),e(427,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(428,"blockquote")(429,"p"),e(430,"Caso utilize um servi\xE7o "),i(431,"strong"),e(432,"ThfLookupDataFilter"),t(),e(433,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(434,"tr",19)(435,"td",20)(436,"div",21)(437,"span",22),e(438,"t-grid-properties"),r(439,"br"),t()()(),i(440,"td",23)(441,"code",41),e(442,"ThfLookupDataGridProperties"),t()(),i(443,"td",25),e(444,"-"),t(),i(445,"td",26)(446,"em")(447,"strong"),e(448,"(opcional)"),t()(),i(449,"p"),e(450,"Propriedades para configura\xE7\xE3o do "),i(451,"code"),e(452,"THF-Grid"),t(),e(453,"."),t(),i(454,"p"),e(455,"// Exemplo de uso:"),t(),i(456,"pre")(457,"code",31),e(458,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(459,"pre")(460,"code",32),e(461,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}
`),t()()()(),i(462,"tr",19)(463,"td",20)(464,"div",21)(465,"span",22),e(466,"t-height"),r(467,"br"),t()()(),i(468,"td",23)(469,"code",42),e(470,"number"),t()(),i(471,"td",25),e(472,"-"),t(),i(473,"td",26)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),i(477,"p"),e(478,"Define a altura do componente em pixels."),t(),i(479,"blockquote")(480,"p"),e(481,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(482,"blockquote")(483,"p"),e(484,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(485,"tr",19)(486,"td",20)(487,"div",21)(488,"span",22),e(489,"t-help"),r(490,"br"),t()()(),i(491,"td",23)(492,"code",35),e(493,"string"),t()(),i(494,"td",25),e(495,"-"),t(),i(496,"td",26)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),i(500,"p"),e(501,"Texto de apoio do componente."),t()()(),i(502,"tr",19)(503,"td",20)(504,"div",27)(505,"span",28),e(506," (t-focus)"),r(507,"br"),t()()(),i(508,"td",23)(509,"code",29),e(510,"EventEmitter"),t()(),i(511,"td",25),e(512,"-"),t(),i(513,"td",26)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),i(517,"p"),e(518,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(519,"p"),e(520,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(521,"tr",19)(522,"td",20)(523,"div",27)(524,"span",28),e(525," (t-keydown)"),r(526,"br"),t()()(),i(527,"td",23)(528,"code",29),e(529,"EventEmitter"),t()(),i(530,"td",25),e(531,"-"),t(),i(532,"td",26)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),i(536,"p"),e(537,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(538,"code"),e(539,"KeyboardEvent"),t(),e(540," com informa\xE7\xF5es sobre a tecla."),t()()(),i(541,"tr",19)(542,"td",20)(543,"div",21)(544,"span",22),e(545,"t-keys-label"),r(546,"br"),t()()(),i(547,"td",23)(548,"code",43),e(549,"Array<ThfLookupDataKeysLabel>"),t()(),i(550,"td",25),e(551,"-"),t(),i(552,"td",26)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),i(556,"p"),e(557,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(558,"code"),e(559,"accordion"),t(),e(560,"."),t(),i(561,"pre")(562,"code",31),e(563,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>
`),t()(),i(564,"pre")(565,"code",32),e(566,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];
`),t()(),i(567,"pre")(568,"code"),e(569,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com
`),t()()()(),i(570,"tr",19)(571,"td",20)(572,"div",21)(573,"span",22),e(574,"t-label"),r(575,"br"),t()()(),i(576,"td",23)(577,"code",35),e(578,"string"),t()(),i(579,"td",25),e(580,"-"),t(),i(581,"td",26)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),i(585,"p"),e(586,"Label do campo de busca."),t()()(),i(587,"tr",19)(588,"td",20)(589,"div",21)(590,"span",22),e(591,"t-literals"),r(592,"br"),t()()(),i(593,"td",23)(594,"code",44),e(595,"ThfLookupDataLiterals"),t()(),i(596,"td",25),e(597,"-"),t(),i(598,"td",26)(599,"em")(600,"strong"),e(601,"(opcional)"),t()(),i(602,"p"),e(603,"Permite definir literais personalizados para o componente, conforme a interface "),i(604,"strong"),e(605,"ThfLookupDataLiterals"),t(),e(606,"."),t(),i(607,"pre")(608,"code",31),e(609,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>
`),t()(),i(610,"pre")(611,"code",32),e(612,`customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };
`),t()()()(),i(613,"tr",19)(614,"td",20)(615,"div",21)(616,"span",22),e(617,"t-multiple"),r(618,"br"),t()()(),i(619,"td",23)(620,"code",24),e(621,"boolean"),t()(),i(622,"td",25)(623,"p")(624,"code"),e(625,"false"),t()()(),i(626,"td",26)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),i(630,"p"),e(631,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(632,"blockquote")(633,"p"),e(634,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(635,"code"),e(636,"[ 12345, 67890 ]"),t()()()()(),i(637,"tr",19)(638,"td",20)(639,"div",21)(640,"span",22),e(641,"t-no-autocomplete"),r(642,"br"),t()()(),i(643,"td",23)(644,"code",24),e(645,"boolean"),t()(),i(646,"td",25)(647,"p")(648,"code"),e(649,"false"),t()()(),i(650,"td",26)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),i(654,"p"),e(655,"Desabilita o "),i(656,"code"),e(657,"autocomplete"),t(),e(658," (propriedade nativa) do campo."),t()()(),i(659,"tr",19)(660,"td",20)(661,"div",27)(662,"span",28),e(663," (t-error)"),r(664,"br"),t()()(),i(665,"td",23)(666,"code",29),e(667,"EventEmitter"),t()(),i(668,"td",25),e(669,"-"),t(),i(670,"td",26)(671,"em")(672,"strong"),e(673,"(opcional)"),t()(),i(674,"p"),e(675,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(676,"tr",19)(677,"td",20)(678,"div",21)(679,"span",22),e(680,"t-optional"),r(681,"br"),t()()(),i(682,"td",23)(683,"code",24),e(684,"boolean"),t()(),i(685,"td",25)(686,"p")(687,"code"),e(688,"false"),t()()(),i(689,"td",26)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),i(693,"p"),e(694,"Exibe um indicador opcional do componente no campo de busca."),t(),i(695,"blockquote")(696,"p"),e(697,"Necess\xE1rio que "),i(698,"code"),e(699,"t-label"),t(),e(700," esteja definido e "),i(701,"code"),e(702,"t-required"),t(),e(703," desabilitado"),t()()()(),i(704,"tr",19)(705,"td",20)(706,"div",21)(707,"span",22),e(708," t-helper"),r(709,"br"),t()()(),i(710,"td",23)(711,"code",35),e(712,"string "),t(),i(713,"code",45),e(714," PoHelperOptions"),t()(),i(715,"td",25),e(716,"-"),t(),i(717,"td",26)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",21)(726,"span",22),e(727,"t-required"),r(728,"br"),t()()(),i(729,"td",23)(730,"code",24),e(731,"boolean"),t()(),i(732,"td",25)(733,"p")(734,"code"),e(735,"false"),t()()(),i(736,"td",26)(737,"em")(738,"strong"),e(739,"(opcional)"),t()(),i(740,"p"),e(741,"Define a sele\xE7\xE3o como obrigat\xF3ria. Caso t-disabled esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(742,"tr",19)(743,"td",20)(744,"div",27)(745,"span",28),e(746," (t-selected)"),r(747,"br"),t()()(),i(748,"td",23)(749,"code",29),e(750,"EventEmitter"),t()(),i(751,"td",25),e(752,"-"),t(),i(753,"td",26)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(759,"strong"),e(760,"t-field-value"),t(),e(761,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(762,"tr",19)(763,"td",20)(764,"div",21)(765,"span",22),e(766,"t-show-required"),r(767,"br"),t()()(),i(768,"td",23)(769,"code",24),e(770,"boolean"),t()(),i(771,"td",25)(772,"p")(773,"code"),e(774,"false"),t()()(),i(775,"td",26)(776,"em")(777,"strong"),e(778,"(opcional)"),t()(),i(779,"p"),e(780,"Exibe um indicador de obrigatoriedade no campo de busca."),t(),i(781,"blockquote")(782,"p"),e(783,"Necess\xE1rio que "),i(784,"code"),e(785,"t-required"),t(),e(786," esteja habilitado e "),i(787,"code"),e(788,"t-label"),t(),e(789," definido."),t()()()(),i(790,"tr",19)(791,"td",20)(792,"div",21)(793,"span",22),e(794," t-size"),r(795,"br"),t()()(),i(796,"td",23)(797,"code",35),e(798,"string"),t()(),i(799,"td",25)(800,"p")(801,"code"),e(802,"medium"),t()()(),i(803,"td",26)(804,"em")(805,"strong"),e(806,"(opcional)"),t()(),i(807,"p"),e(808,"Define o tamanho do componente:"),t(),i(809,"ul")(810,"li")(811,"code"),e(812,"small"),t()(),i(813,"li")(814,"code"),e(815,"medium"),t()()(),i(816,"blockquote")(817,"p"),e(818,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(819,"code"),e(820,"medium"),t(),e(821,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(822,"a",46),e(823,"po-theme"),t(),e(824,"."),t()()()()()(),i(825,"po-accordion-item",47)(826,"table",48)(827,"tr",19)(828,"th",49)(829,"div",21)(830,"h4")(831,"span",22),e(832," showAdditionalHelp "),t()()()()(),i(833,"tr",26)(834,"td",26)(835,"p"),e(836,"M\xE9todo que exibe "),i(837,"code"),e(838,"t-helper"),t(),e(839," ou executa a a\xE7\xE3o definida em "),i(840,"code"),e(841,"t-helper{eventOnClick}"),t(),e(842,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(843,"code"),e(844,"t-keydown"),t(),e(845,"."),t(),i(846,"pre")(847,"code"),e(848,`<thf-lookup-data
 #lookupData
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup-data>
`),t()(),i(849,"pre")(850,"code"),e(851,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupDataComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),r(852,"br"),t()()(),V(853,2),t(),i(854,"po-tab",50),V(855,3),i(856,"po-container",5)(857,"po-accordion",6)(858,"po-accordion-item",51)(859,"h4",9)(860,"code"),e(861,"ThfLookupDataColumn"),t()(),i(862,"div",10)(863,"p"),e(864,"Interface para configura\xE7\xE3o das colunas ("),i(865,"strong"),e(866,"t-columns"),t(),e(867,"). "),t()(),i(868,"h4",15),e(869,"Propriedades"),t(),i(870,"table",16)(871,"tr",17)(872,"th",18),e(873,"Nome"),t(),i(874,"th",18),e(875,"Tipo"),t(),i(876,"th",18),e(877,"Descri\xE7\xE3o"),t()(),i(878,"tr",19)(879,"td",20)(880,"div",21)(881,"span",22),e(882," boolean"),r(883,"br"),t()()(),i(884,"td",23)(885,"code",52),e(886,"PoTableBoolean"),t()(),i(887,"td",26)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"Define um objeto do tipo "),i(893,"code"),e(894,"PoTableBoolean"),t(),e(895," para as colunas do tipo "),i(896,"em"),e(897,"boolean"),t(),e(898,". Por exemplo:"),t(),i(899,"pre")(900,"code"),e(901,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(902,"blockquote")(903,"p"),e(904,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(905,"em"),e(906,"boolean"),t(),e(907,`,
esta exibir\xE1 por padr\xE3o `),i(908,"code"),e(909,"Sim"),t(),e(910," e "),i(911,"code"),e(912,"N\xE3o"),t(),e(913," de acordo com os valores "),i(914,"em"),e(915,"booleanos"),t(),e(916,"."),t()()()(),i(917,"tr",19)(918,"td",20)(919,"div",21)(920,"span",22),e(921," booleanFalse"),r(922,"br"),t()()(),i(923,"td",23)(924,"code",35),e(925,"string"),t()(),i(926,"td",26)(927,"em")(928,"strong"),e(929,"(opcional)"),t()(),i(930,"p"),e(931,"Texto exibido quando o valor da coluna for "),i(932,"em"),e(933,"false"),t(),e(934,"."),t()()(),i(935,"tr",19)(936,"td",20)(937,"div",21)(938,"span",22),e(939," booleanTrue"),r(940,"br"),t()()(),i(941,"td",23)(942,"code",35),e(943,"string"),t()(),i(944,"td",26)(945,"em")(946,"strong"),e(947,"(opcional)"),t()(),i(948,"p"),e(949,"Texto exibido quando o valor da coluna for "),i(950,"em"),e(951,"true"),t(),e(952,"."),t()()(),i(953,"tr",19)(954,"td",20)(955,"div",21)(956,"span",22),e(957," disabled"),r(958,"br"),t()()(),i(959,"td",23)(960,"code",53),e(961,"Function"),t()(),i(962,"td",26)(963,"em")(964,"strong"),e(965,"(opcional)"),t()(),i(966,"p"),e(967,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(968,"em"),e(969,"link"),t(),e(970," e sua a\xE7\xE3o."),t(),i(971,"blockquote")(972,"p"),e(973,"Propriedade dispon\xEDvel nas colunas do tipo "),i(974,"code"),e(975,"link"),t(),e(976,"."),t()()()(),i(977,"tr",19)(978,"td",20)(979,"div",21)(980,"span",22),e(981," format"),r(982,"br"),t()()(),i(983,"td",23)(984,"code",35),e(985,"string"),t()(),i(986,"td",26)(987,"em")(988,"strong"),e(989,"(opcional)"),t()(),i(990,"p"),e(991,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(992,"ul")(993,"li"),e(994,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(995,"li"),e(996,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(997,"tr",19)(998,"td",20)(999,"div",21)(1e3,"span",22),e(1001," label"),r(1002,"br"),t()()(),i(1003,"td",23)(1004,"code",35),e(1005,"string"),t()(),i(1006,"td",26)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),i(1010,"p"),e(1011,"Texto para t\xEDtulo da coluna."),t(),i(1012,"p"),e(1013,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1014,"em"),e(1015,"label"),t(),e(1016," o valor da propriedade "),i(1017,"em"),e(1018,"property"),t(),e(1019," com a primeira letra em mai\xFAsculo."),t()()(),i(1020,"tr",19)(1021,"td",20)(1022,"div",21)(1023,"span",22),e(1024," labels"),r(1025,"br"),t()()(),i(1026,"td",23)(1027,"code",54),e(1028,"Array<PoTableColumnLabel>"),t()(),i(1029,"td",26)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),t()(),i(1033,"p"),e(1034,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1035,"code"),e(1036,"PoTableColumnLabel"),t(),e(1037," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1038,"pre")(1039,"code"),e(1040,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(1041,"tr",19)(1042,"td",20)(1043,"div",21)(1044,"span",22),e(1045," locale"),r(1046,"br"),t()()(),i(1047,"td",23)(1048,"code",35),e(1049,"string"),t()(),i(1050,"td",26)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1056,"a",55)(1057,"code"),e(1058,"I18n"),t()()(),i(1059,"p"),e(1060,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1061,"pre")(1062,"code"),e(1063,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(1064,"blockquote")(1065,"p"),e(1066,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1067,"p"),e(1068,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1069,"p"),e(1070,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1071,"a",55)(1072,"code"),e(1073,"I18n"),t()()()(),i(1074,"p"),e(1075,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1076,"pre")(1077,"code"),e(1078,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(1079,"blockquote")(1080,"p"),e(1081,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1082,"code"),e(1083,"number"),t(),e(1084," e "),i(1085,"code"),e(1086,"currency"),t(),e(1087,"."),t()()()(),i(1088,"tr",19)(1089,"td",20)(1090,"div",21)(1091,"span",22),e(1092," property"),r(1093,"br"),t()()(),i(1094,"td",23)(1095,"code",35),e(1096,"string"),t()(),i(1097,"td",26)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,"Nome identificador da coluna."),t()()(),i(1103,"tr",19)(1104,"td",20)(1105,"div",21)(1106,"span",22),e(1107," type"),r(1108,"br"),t()()(),i(1109,"td",23)(1110,"code",35),e(1111,"string"),t()(),i(1112,"td",26)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),i(1116,"p"),e(1117,"Tipo da coluna:"),t(),i(1118,"ul")(1119,"li"),e(1120,"string (padr\xE3o): textos"),t(),i(1121,"li"),e(1122,"number: valores num\xE9ricos"),t(),i(1123,"li"),e(1124,"date: data"),t(),i(1125,"li"),e(1126,"currency: valores monet\xE1rios"),t(),i(1127,"li"),e(1128,"dateTime: data e hora"),t()()()(),i(1129,"tr",19)(1130,"td",20)(1131,"div",21)(1132,"span",22),e(1133," visible"),r(1134,"br"),t()()(),i(1135,"td",23)(1136,"code",24),e(1137,"boolean"),t()(),i(1138,"td",26)(1139,"em")(1140,"strong"),e(1141,"(opcional)"),t()(),i(1142,"p"),e(1143,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1144,"strong"),e(1145,"gerenciador de colunas"),t(),e(1146,"."),t(),i(1147,"blockquote")(1148,"p"),e(1149,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1150,"code"),e(1151,"p-max-columns"),t(),e(1152,"."),t()()()(),i(1153,"tr",19)(1154,"td",20)(1155,"div",21)(1156,"span",22),e(1157," width"),r(1158,"br"),t()()(),i(1159,"td",23)(1160,"code",35),e(1161,"string"),t()(),i(1162,"td",26)(1163,"em")(1164,"strong"),e(1165,"(opcional)"),t()(),i(1166,"p"),e(1167,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1168,"po-accordion-item",56)(1169,"h4",9)(1170,"code"),e(1171,"ThfLookupDataFilterSearchSelect"),t()(),i(1172,"div",10)(1173,"p"),e(1174,"Interface que define as colunas para busca ("),i(1175,"strong"),e(1176,"t-filter-search-select"),t(),e(1177,") "),t()(),i(1178,"h4",15),e(1179,"Propriedades"),t(),i(1180,"table",16)(1181,"tr",17)(1182,"th",18),e(1183,"Nome"),t(),i(1184,"th",18),e(1185,"Tipo"),t(),i(1186,"th",18),e(1187,"Descri\xE7\xE3o"),t()(),i(1188,"tr",19)(1189,"td",20)(1190,"div",21)(1191,"span",22),e(1192," label"),r(1193,"br"),t()()(),i(1194,"td",23)(1195,"code",35),e(1196,"string"),t()(),i(1197,"td",26)(1198,"p"),e(1199,"R\xF3tulo da coluna"),t()()(),i(1200,"tr",19)(1201,"td",20)(1202,"div",21)(1203,"span",22),e(1204," value"),r(1205,"br"),t()()(),i(1206,"td",23)(1207,"code",35),e(1208,"string"),t()(),i(1209,"td",26)(1210,"p"),e(1211,"Coluna"),t()()()()(),i(1212,"po-accordion-item",57)(1213,"h4",9)(1214,"code"),e(1215,"ThfLookupDataFilter"),t()(),i(1216,"div",10)(1217,"p"),e(1218,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(1219,"table",48)(1220,"tr",19)(1221,"th",49)(1222,"div",21)(1223,"h4")(1224,"span",22),e(1225," fetchItems "),t()()()()(),i(1226,"tr",26)(1227,"td",26)(1228,"p"),e(1229,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1230,"em"),e(1231,"Observable"),t(),e(1232," com a resposta da API no formato { items: [] }."),t()()()(),i(1233,"h5")(1234,"b"),e(1235,"Par\xE2metros"),t()(),i(1236,"table",16)(1237,"tr",17)(1238,"th",18),e(1239,"Nome"),t(),i(1240,"th",18),e(1241,"Tipo"),t(),i(1242,"th",18),e(1243,"Descri\xE7\xE3o"),t()(),i(1244,"tr",19)(1245,"td",20),e(1246," query"),t(),i(1247,"td",23)(1248,"code",58),e(1249," string "),t()(),i(1250,"td",26)(1251,"p"),e(1252,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1253,"tr",19)(1254,"td",20),e(1255," filterParams"),t(),i(1256,"td",23)(1257,"code",58),e(1258," any "),t()(),i(1259,"td",26)(1260,"p"),e(1261,"Valor informado atrav\xE9s da propriedade "),i(1262,"strong"),e(1263,"t-filter-params"),t(),e(1264,"."),t()()()(),r(1265,"br"),i(1266,"table",48)(1267,"tr",19)(1268,"th",49)(1269,"div",21)(1270,"h4")(1271,"span",22),e(1272," getFilteredItems "),t()()()()(),i(1273,"tr",26)(1274,"td",26)(1275,"p"),e(1276,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1277,"em"),e(1278,"Observable"),t(),e(1279," com a resposta da API no formato da interface "),i(1280,"strong"),e(1281,"ThfLookupResponseApi"),t(),e(1282,"."),t()()()(),i(1283,"h5")(1284,"b"),e(1285,"Par\xE2metros"),t()(),i(1286,"table",16)(1287,"tr",17)(1288,"th",18),e(1289,"Nome"),t(),i(1290,"th",18),e(1291,"Tipo"),t(),i(1292,"th",18),e(1293,"Descri\xE7\xE3o"),t()(),i(1294,"tr",19)(1295,"td",20),e(1296," params"),t(),i(1297,"td",23)(1298,"code",58),e(1299," ThfLookupFilteredItemsParams "),t()(),i(1300,"td",26)(1301,"p"),e(1302,"Objeto enviado por par\xE2metro que implementa a interface "),i(1303,"strong"),e(1304,"ThfLookupFilteredItemsParams"),t(),e(1305,"."),t()()()(),r(1306,"br"),i(1307,"table",48)(1308,"tr",19)(1309,"th",49)(1310,"div",21)(1311,"h4")(1312,"span",22),e(1313," getObjectByValue "),t()()()()(),i(1314,"tr",26)(1315,"td",26)(1316,"p"),e(1317,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1318,"p"),e(1319,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1320,"code"),e(1321,"value"),t(),e(1322,` ser\xE1 enviado como uma lista de valores
e o `),i(1323,"em"),e(1324,"Observable"),t(),e(1325," deve retornar uma lista de objetos."),t()()()(),i(1326,"h5")(1327,"b"),e(1328,"Par\xE2metros"),t()(),i(1329,"table",16)(1330,"tr",17)(1331,"th",18),e(1332,"Nome"),t(),i(1333,"th",18),e(1334,"Tipo"),t(),i(1335,"th",18),e(1336,"Descri\xE7\xE3o"),t()(),i(1337,"tr",19)(1338,"td",20),e(1339," value"),t(),i(1340,"td",23)(1341,"code",35),e(1342," string "),t(),i(1343,"code",34),e(1344," Array<any> "),t()(),i(1345,"td",26)(1346,"p"),e(1347,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1348,"tr",19)(1349,"td",20),e(1350," filterParams"),t(),i(1351,"td",23)(1352,"code",58),e(1353," any "),t()(),i(1354,"td",26)(1355,"p"),e(1356,"Valor informado atrav\xE9s da propriedade "),i(1357,"strong"),e(1358,"t-filter-params"),t(),e(1359,"."),t()()()(),r(1360,"br"),t(),i(1361,"po-accordion-item",59)(1362,"h4",9)(1363,"code"),e(1364,"ThfLookupDataFilteredItemsParams"),t()(),i(1365,"div",10)(1366,"p"),e(1367,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1368,"strong"),e(1369,"getFilteredItems"),t(),e(1370,". "),t()(),i(1371,"h4",15),e(1372,"Propriedades"),t(),i(1373,"table",16)(1374,"tr",17)(1375,"th",18),e(1376,"Nome"),t(),i(1377,"th",18),e(1378,"Tipo"),t(),i(1379,"th",18),e(1380,"Descri\xE7\xE3o"),t()(),i(1381,"tr",19)(1382,"td",20)(1383,"div",21)(1384,"span",22),e(1385," filter"),r(1386,"br"),t()()(),i(1387,"td",23)(1388,"code",60),e(1389,`{ [key: string]: any;
}`),t()(),i(1390,"td",26)(1391,"em")(1392,"strong"),e(1393,"(opcional)"),t()(),i(1394,"p"),e(1395,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1396,"tr",19)(1397,"td",20)(1398,"div",21)(1399,"span",22),e(1400," filterParams"),r(1401,"br"),t()()(),i(1402,"td",23)(1403,"code",36),e(1404,"any"),t()(),i(1405,"td",26)(1406,"em")(1407,"strong"),e(1408,"(opcional)"),t()(),i(1409,"p"),e(1410,"Valor informado atrav\xE9s da propriedade "),i(1411,"code"),e(1412,"t-filter-params"),t(),e(1413,"."),t()()(),i(1414,"tr",19)(1415,"td",20)(1416,"div",21)(1417,"span",22),e(1418," order"),r(1419,"br"),t()()(),i(1420,"td",23)(1421,"code",35),e(1422,"string"),t()(),i(1423,"td",26)(1424,"em")(1425,"strong"),e(1426,"(opcional)"),t()(),i(1427,"p"),e(1428,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1429,"ul")(1430,"li"),e(1431,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1432,"code"),e(1433,"-<colunaOrdenada>"),t(),e(1434,", por exemplo "),i(1435,"code"),e(1436,"-name"),t(),e(1437,"."),t(),i(1438,"li"),e(1439,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1440,"code"),e(1441,"<colunaOrdenada>"),t(),e(1442,", por exemplo "),i(1443,"code"),e(1444,"name"),t(),e(1445,"."),t()()()(),i(1446,"tr",19)(1447,"td",20)(1448,"div",21)(1449,"span",22),e(1450," page"),r(1451,"br"),t()()(),i(1452,"td",23)(1453,"code",42),e(1454,"number"),t()(),i(1455,"td",26)(1456,"em")(1457,"strong"),e(1458,"(opcional)"),t()(),i(1459,"p"),e(1460,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1461,"tr",19)(1462,"td",20)(1463,"div",21)(1464,"span",22),e(1465," pageSize"),r(1466,"br"),t()()(),i(1467,"td",23)(1468,"code",42),e(1469,"number"),t()(),i(1470,"td",26)(1471,"em")(1472,"strong"),e(1473,"(opcional)"),t()(),i(1474,"p"),e(1475,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1476,"po-accordion-item",61)(1477,"h4",9)(1478,"code"),e(1479,"ThfLookupDataGridProperties"),t()(),i(1480,"div",10)(1481,"p"),e(1482,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1483,"h4",15),e(1484,"Propriedades"),t(),i(1485,"table",16)(1486,"tr",17)(1487,"th",18),e(1488,"Nome"),t(),i(1489,"th",18),e(1490,"Tipo"),t(),i(1491,"th",18),e(1492,"Descri\xE7\xE3o"),t()(),i(1493,"tr",19)(1494,"td",20)(1495,"div",21)(1496,"span",22),e(1497," actionRight"),r(1498,"br"),t()()(),i(1499,"td",23)(1500,"code",24),e(1501,"boolean"),t()(),i(1502,"td",26)(1503,"em")(1504,"strong"),e(1505,"(opcional)"),t()(),i(1506,"p"),e(1507,"Posiciona a coluna de a\xE7\xF5es ("),i(1508,"code"),e(1509,"t-actions"),t(),e(1510,") \xE0 direita."),t()()(),i(1511,"tr",19)(1512,"td",20)(1513,"div",21)(1514,"span",22),e(1515," actions"),r(1516,"br"),t()()(),i(1517,"td",23)(1518,"code",62),e(1519,"Array<ThfTableAction>"),t()(),i(1520,"td",26)(1521,"em")(1522,"strong"),e(1523,"(opcional)"),t()(),i(1524,"p"),e(1525,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(1526,"strong"),e(1527,"ThfTableAction"),t(),e(1528,`, adicionando uma coluna
ao componente thf-grid do lookup. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(1529,"a",63)(1530,"strong"),e(1531,"an an-dots-three-vertical"),t()(),e(1532,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(1533,"p")(1534,"strong"),e(1535,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(1536,"ul")(1537,"li"),e(1538,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(1539,"li"),e(1540,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(1541,"pre")(1542,"code",31),e(1543,`// Exemplo de uso:
<thf-lookup
 [t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(1544,"pre")(1545,"code",32),e(1546,`gridProperties: ThfLookupGridProperties = {
  actions: [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name} \`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ]
};

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(1547,"tr",19)(1548,"td",20)(1549,"div",21)(1550,"span",22),e(1551," autoSize"),r(1552,"br"),t()()(),i(1553,"td",23)(1554,"code",24),e(1555,"boolean"),t()(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1562,"strong"),e(1563,"resizable"),t(),e(1564," esteja habilitada."),t(),i(1565,"blockquote")(1566,"p"),e(1567,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1568,"tr",19)(1569,"td",20)(1570,"div",21)(1571,"span",22),e(1572," autoSizeOnScroll"),r(1573,"br"),t()()(),i(1574,"td",23)(1575,"code",24),e(1576,"boolean"),t()(),i(1577,"td",26)(1578,"em")(1579,"strong"),e(1580,"(opcional)"),t()(),i(1581,"p"),e(1582,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1583,"p"),e(1584,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1585,"p"),e(1586,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1587,"code"),e(1588,"t-page-size-virtual"),t(),e(1589," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1590,"blockquote")(1591,"p")(1592,"strong"),e(1593,"Pr\xE9-requisitos"),t(),e(1594,": Requer que as propriedades "),i(1595,"code"),e(1596,"autoSize"),t(),e(1597,", "),i(1598,"code"),e(1599,"resizable"),t(),e(1600,`
e `),i(1601,"code"),e(1602,"virtualScroll"),t(),e(1603," estejam habilitadas."),t()(),i(1604,"blockquote")(1605,"p")(1606,"strong"),e(1607,"Incompatibilidade"),t(),e(1608,": N\xE3o funciona com "),i(1609,"code"),e(1610,"t-grid-row-actions"),t(),e(1611," habilitado;"),t()(),i(1612,"p")(1613,"strong"),e(1614,"Exemplo de uso:"),t()(),i(1615,"pre")(1616,"code",31),e(1617,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(1618,"tr",19)(1619,"td",20)(1620,"div",21)(1621,"span",22),e(1622," draggable"),r(1623,"br"),t()()(),i(1624,"td",23)(1625,"code",24),e(1626,"boolean"),t()(),i(1627,"td",26)(1628,"em")(1629,"strong"),e(1630,"(opcional)"),t()(),i(1631,"p"),e(1632,"Habilita o Drag and Drop nas colunas."),t()()(),i(1633,"tr",19)(1634,"td",20)(1635,"div",21)(1636,"span",22),e(1637," group"),r(1638,"br"),t()()(),i(1639,"td",23)(1640,"code",64),e(1641,"Array<string>"),t()(),i(1642,"td",26)(1643,"em")(1644,"strong"),e(1645,"(opcional)"),t()(),i(1646,"p"),e(1647,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1648,"strong"),e(1649,"groupable"),t(),e(1650," esteja habilitada."),t()()(),i(1651,"tr",19)(1652,"td",20)(1653,"div",21)(1654,"span",22),e(1655," groupable"),r(1656,"br"),t()()(),i(1657,"td",23)(1658,"code",24),e(1659,"boolean "),t(),i(1660,"code",65),e(1661," GroupableSettings"),t()(),i(1662,"td",26)(1663,"em")(1664,"strong"),e(1665,"(opcional)"),t()(),i(1666,"p"),e(1667,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1668,"tr",19)(1669,"td",20)(1670,"div",21)(1671,"span",22),e(1672," hideSelectAll"),r(1673,"br"),t()()(),i(1674,"td",23)(1675,"code",24),e(1676,"boolean"),t()(),i(1677,"td",26)(1678,"em")(1679,"strong"),e(1680,"(opcional)"),t()(),i(1681,"p"),e(1682,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1683,"tr",19)(1684,"td",20)(1685,"div",21)(1686,"span",22),e(1687," resizable"),r(1688,"br"),t()()(),i(1689,"td",23)(1690,"code",24),e(1691,"boolean"),t()(),i(1692,"td",26)(1693,"em")(1694,"strong"),e(1695,"(opcional)"),t()(),i(1696,"p"),e(1697,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1698,"tr",19)(1699,"td",20)(1700,"div",21)(1701,"span",22),e(1702," selectableEntireLine"),r(1703,"br"),t()()(),i(1704,"td",23)(1705,"code",24),e(1706,"boolean"),t()(),i(1707,"td",26)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Permite selecionar o item ao clicar na linha."),t()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717," showDraggableIcon"),r(1718,"br"),t()()(),i(1719,"td",23)(1720,"code",24),e(1721,"boolean"),t()(),i(1722,"td",26)(1723,"em")(1724,"strong"),e(1725,"(opcional)"),t()(),i(1726,"p"),e(1727,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1728,"tr",19)(1729,"td",20)(1730,"div",21)(1731,"span",22),e(1732," showMoreDisabled"),r(1733,"br"),t()()(),i(1734,"td",23)(1735,"code",24),e(1736,"boolean"),t()(),i(1737,"td",26)(1738,"em")(1739,"strong"),e(1740,"(opcional)"),t()(),i(1741,"p"),e(1742,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1743,"tr",19)(1744,"td",20)(1745,"div",21)(1746,"span",22),e(1747," showMoreVisible"),r(1748,"br"),t()()(),i(1749,"td",23)(1750,"code",24),e(1751,"boolean"),t()(),i(1752,"td",26)(1753,"em")(1754,"strong"),e(1755,"(opcional)"),t()(),i(1756,"p"),e(1757,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1758,"strong"),e(1759,"pageable"),t(),e(1760," esteja habilitada."),t(),i(1761,"blockquote")(1762,"p"),e(1763,"Caso seja utilizado em conjunto com "),i(1764,"strong"),e(1765,"showMoreDisabled"),t(),e(1766,", a propriedade "),i(1767,"strong"),e(1768,"showMoreVisible"),t(),e(1769," ter\xE1 prioridade."),t()()()(),i(1770,"tr",19)(1771,"td",20)(1772,"div",21)(1773,"span",22),e(1774," sort"),r(1775,"br"),t()()(),i(1776,"td",23)(1777,"code",66),e(1778,"Array<{ field: string; dir: 'asc' "),t(),i(1779,"code",67),e(1780,` 'desc';
}>`),t()(),i(1781,"td",26)(1782,"em")(1783,"strong"),e(1784,"(opcional)"),t()(),i(1785,"p"),e(1786,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1787,"pre")(1788,"code",32),e(1789,`sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(1790,"tr",19)(1791,"td",20)(1792,"div",21)(1793,"span",22),e(1794," sortable"),r(1795,"br"),t()()(),i(1796,"td",23)(1797,"code",24),e(1798,"boolean"),t()(),i(1799,"td",26)(1800,"em")(1801,"strong"),e(1802,"(opcional)"),t()(),i(1803,"p"),e(1804,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1805,"tr",19)(1806,"td",20)(1807,"div",21)(1808,"span",22),e(1809," spacing"),r(1810,"br"),t()()(),i(1811,"td",23)(1812,"code",68),e(1813,"'extraSmall' "),t(),i(1814,"code",69),e(1815," 'small' "),t(),i(1816,"code",70),e(1817," 'medium' "),t(),i(1818,"code",71),e(1819," 'large'"),t()(),i(1820,"td",26)(1821,"em")(1822,"strong"),e(1823,"(opcional)"),t()(),i(1824,"p"),e(1825,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1826,"strong"),e(1827,"ThfColumnSpacing"),t(),e(1828,"."),t()()(),i(1829,"tr",19)(1830,"td",20)(1831,"div",21)(1832,"span",22),e(1833," striped"),r(1834,"br"),t()()(),i(1835,"td",23)(1836,"code",24),e(1837,"boolean"),t()(),i(1838,"td",26)(1839,"em")(1840,"strong"),e(1841,"(opcional)"),t()(),i(1842,"p"),e(1843,"Define o estilo listrado no grid (striped)."),t()()(),i(1844,"tr",19)(1845,"td",20)(1846,"div",21)(1847,"span",22),e(1848," virtualScroll"),r(1849,"br"),t()()(),i(1850,"td",23)(1851,"code",24),e(1852,"boolean"),t()(),i(1853,"td",26)(1854,"em")(1855,"strong"),e(1856,"(opcional)"),t()(),i(1857,"p"),e(1858,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1859,"po-accordion-item",72)(1860,"h4",9)(1861,"code"),e(1862,"ThfLookupDataKeysLabel"),t()(),i(1863,"div",10)(1864,"p"),e(1865,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1866,"strong"),e(1867,"t-keys-label"),t(),e(1868,"). "),t()(),i(1869,"h4",15),e(1870,"Propriedades"),t(),i(1871,"table",16)(1872,"tr",17)(1873,"th",18),e(1874,"Nome"),t(),i(1875,"th",18),e(1876,"Tipo"),t(),i(1877,"th",18),e(1878,"Descri\xE7\xE3o"),t()(),i(1879,"tr",19)(1880,"td",20)(1881,"div",21)(1882,"span",22),e(1883," label"),r(1884,"br"),t()()(),i(1885,"td",23)(1886,"code",35),e(1887,"string"),t()(),i(1888,"td",26)(1889,"p"),e(1890,"Texto exibido"),t()()(),i(1891,"tr",19)(1892,"td",20)(1893,"div",21)(1894,"span",22),e(1895," value"),r(1896,"br"),t()()(),i(1897,"td",23)(1898,"code",35),e(1899,"string"),t()(),i(1900,"td",26)(1901,"p"),e(1902,"Coluna"),t()()()()(),i(1903,"po-accordion-item",73)(1904,"h4",9)(1905,"code"),e(1906,"ThfLookupDataLiterals"),t()(),i(1907,"div",10)(1908,"p"),e(1909,"Interface para customizar literais ("),i(1910,"strong"),e(1911,"t-literals"),t(),e(1912,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1913,"h4",15),e(1914,"Propriedades"),t(),i(1915,"table",16)(1916,"tr",17)(1917,"th",18),e(1918,"Nome"),t(),i(1919,"th",18),e(1920,"Tipo"),t(),i(1921,"th",18),e(1922,"Descri\xE7\xE3o"),t()(),i(1923,"tr",19)(1924,"td",20)(1925,"div",21)(1926,"span",22),e(1927," loadMoreData"),r(1928,"br"),t()()(),i(1929,"td",23)(1930,"code",35),e(1931,"string"),t()(),i(1932,"td",26)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),i(1936,"p"),e(1937,"Label do "),i(1938,"code"),e(1939,"button"),t(),e(1940," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1941,"tr",19)(1942,"td",20)(1943,"div",21)(1944,"span",22),e(1945," loadingData"),r(1946,"br"),t()()(),i(1947,"td",23)(1948,"code",35),e(1949,"string"),t()(),i(1950,"td",26)(1951,"em")(1952,"strong"),e(1953,"(opcional)"),t()(),i(1954,"p"),e(1955,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960," multipleItems"),r(1961,"br"),t()()(),i(1962,"td",23)(1963,"code",35),e(1964,"string"),t()(),i(1965,"td",26)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1971,"tr",19)(1972,"td",20)(1973,"div",21)(1974,"span",22),e(1975," noColumns"),r(1976,"br"),t()()(),i(1977,"td",23)(1978,"code",35),e(1979,"string"),t()(),i(1980,"td",26)(1981,"em")(1982,"strong"),e(1983,"(opcional)"),t()(),i(1984,"p"),e(1985,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1986,"tr",19)(1987,"td",20)(1988,"div",21)(1989,"span",22),e(1990," noData"),r(1991,"br"),t()()(),i(1992,"td",23)(1993,"code",35),e(1994,"string"),t()(),i(1995,"td",26)(1996,"em")(1997,"strong"),e(1998,"(opcional)"),t()(),i(1999,"p"),e(2e3,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2001,"tr",19)(2002,"td",20)(2003,"div",21)(2004,"span",22),e(2005," oneItem"),r(2006,"br"),t()()(),i(2007,"td",23)(2008,"code",35),e(2009,"string"),t()(),i(2010,"td",26)(2011,"em")(2012,"strong"),e(2013,"(opcional)"),t()(),i(2014,"p"),e(2015,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2016,"tr",19)(2017,"td",20)(2018,"div",21)(2019,"span",22),e(2020," placeholder"),r(2021,"br"),t()()(),i(2022,"td",23)(2023,"code",35),e(2024,"string"),t()(),i(2025,"td",26)(2026,"em")(2027,"strong"),e(2028,"(opcional)"),t()(),i(2029,"p"),e(2030,"Texto exibido no placeholder do input."),t()()()()(),i(2031,"po-accordion-item",74)(2032,"h4",9)(2033,"code"),e(2034,"ThfLookupDataResponseApi"),t()(),i(2035,"div",10)(2036,"p"),e(2037,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2038,"blockquote")(2039,"p"),e(2040,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2041,"h4",15),e(2042,"Propriedades"),t(),i(2043,"table",16)(2044,"tr",17)(2045,"th",18),e(2046,"Nome"),t(),i(2047,"th",18),e(2048,"Tipo"),t(),i(2049,"th",18),e(2050,"Descri\xE7\xE3o"),t()(),i(2051,"tr",19)(2052,"td",20)(2053,"div",21)(2054,"span",22),e(2055," hasNext"),r(2056,"br"),t()()(),i(2057,"td",23)(2058,"code",24),e(2059,"boolean"),t()(),i(2060,"td",26)(2061,"p"),e(2062,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2063,"tr",19)(2064,"td",20)(2065,"div",21)(2066,"span",22),e(2067," items"),r(2068,"br"),t()()(),i(2069,"td",23)(2070,"code",34),e(2071,"Array<any>"),t()(),i(2072,"td",26)(2073,"p"),e(2074,"Lista de itens retornados."),t()()()()()()(),V(2075,4),t(),i(2076,"po-tab",75)(2077,"po-container",5),V(2078,5),i(2079,"h3"),e(2080,"Tokens customiz\xE1veis"),t(),i(2081,"p"),e(2082,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2083,"blockquote")(2084,"p"),e(2085,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2086,"a",76),e(2087,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2088,"."),t()(),i(2089,"p"),e(2090,"O componente "),i(2091,"strong"),e(2092,"THF-Lookup-Data"),t(),e(2093," \xE9 composto pelos componentes "),i(2094,"strong"),e(2095,"PO-Search"),t(),e(2096," e "),i(2097,"strong"),e(2098,"THF-Grid"),t(),e(2099,"."),t(),i(2100,"p"),e(2101,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(2102,"p")(2103,"strong"),e(2104,"- PO-Search:"),t(),e(2105," \xA0"),i(2106,"a",77),e(2107,"https://po-ui.io/documentation/po-search"),t()(),i(2108,"p")(2109,"strong"),e(2110,"- THF-Grid:"),t(),e(2111," \xA0"),i(2112,"a",78),e(2113,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),V(2114,6),t(),i(2115,"po-tab",79),V(2116,7),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var Eo=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],xo=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],zt=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-splitter-pane"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:xo,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(Eo),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>
`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),r(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),r(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">
`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),r(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,`<thf-splitter-pane (t-size-change)="onSizeChange($event)">
`),t()()()()()()()(),V(137,2),t(),i(138,"po-tab",32),V(139,3),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var So=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],bo=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Mt=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-splitter"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:bo,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(So),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4"),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",11),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>
`),t()()(),i(73,"div",12)(74,"h4",13),e(75,"Seletor"),t(),i(76,"pre",14),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",15)(79,"h4",16),e(80,"Propriedades"),t(),i(81,"table",17)(82,"tr",18)(83,"th",19),e(84,"Nome"),t(),i(85,"th",19),e(86,"Tipo"),t(),i(87,"th",19),e(88,"Padr\xE3o"),t(),i(89,"th",19),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",20)(92,"td",21)(93,"div",22)(94,"span",23),e(95," t-disabled"),r(96,"br"),t()()(),i(97,"td",24)(98,"code",25),e(99,"boolean, any"),t()(),i(100,"td",26)(101,"p"),e(102,"false"),t()(),i(103,"td",27)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",20)(107,"td",21)(108,"div",28)(109,"span",29),e(110," (t-layout-change)"),r(111,"br"),t()()(),i(112,"td",24)(113,"code",30),e(114,"EventEmitter"),t()(),i(115,"td",26),e(116,"-"),t(),i(117,"td",27)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",11),e(125,`<thf-splitter (t-layout-change)="onLayoutChange($event)">
`),t()()()(),i(126,"tr",20)(127,"td",21)(128,"div",22)(129,"span",23),e(130," t-orientation"),r(131,"br"),t()()(),i(132,"td",24)(133,"code",31),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",26)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",27)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",11),e(149,`<thf-splitter t-orientation="vertical"> ...
`),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",32),e(154,`orientation = ThfSplitterOrientation.Vertical;
`),t()(),i(155,"pre")(156,"code",11),e(157,`<thf-splitter [t-orientation]="orientation"> ...
`),t()()()()()()()(),V(158,2),t(),i(159,"po-tab",33),V(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",34)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",16),e(168,"Propriedades"),t(),i(169,"table",17)(170,"tr",18)(171,"th",19),e(172,"Nome"),t(),i(173,"th",19),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",20)(176,"td",21)(177,"div",22)(178,"span",23),e(179," Horizontal"),r(180,"br"),t()()(),i(181,"td",27)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",20)(188,"td",21)(189,"div",22)(190,"span",23),e(191," Vertical"),r(192,"br"),t()()(),i(193,"td",27)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),V(199,4),t(),i(200,"po-tab",35)(201,"po-container",5),V(202,5),i(203,"h3"),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",36),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),r(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),r(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),r(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),r(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),r(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),V(323,6),t(),i(324,"po-tab",37),V(325,7),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var fo=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","labs",""]]],go=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[labs]"],Lt=(()=>{class p{constructor(n){this.el=n}ngAfterViewInit(){this.accordions.forEach(n=>{setTimeout(()=>{n.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(n){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${n}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let _=E.querySelector(".po-tab-button-label");_&&_?.textContent?.trim().toLowerCase()===n&&E.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(a){return new(a||p)(z(Y))}}static{this.\u0275cmp=x({type:p,selectors:[["api-thf-treelist"]],viewQuery:function(a,o){if(a&1&&F(G,5)(M,5),a&2){let l;D(l=P())&&(o.tabs=l.first),D(l=P())&&(o.accordions=l)}},standalone:!1,ngContentSelectors:go,decls:1751,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean,","any"],["pan","",1,"docs-api-property-type","PoPageDynamicSearchFilters[]"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","ThfTableAction[],","unknown"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","ThfTreeListColumn[],","unknown"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ThfTreeListLiterals"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","number,","unknown"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Interfaces"],["p-label","ThfTableAction"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["p-label","ThfTreeListColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfTreeListColumn"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfTreeListLiterals"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(ee(fo),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),V(4),t(),i(5,"po-tab",4),V(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfTreelist } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfTreeListComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O TreeList exibe dados hier\xE1rquicos em formato tabular."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-TreeList"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfTreeListComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-treelist
  t-children-field="string"
  t-container="boolean, any"
  t-fields="PoPageDynamicSearchFilters[]"
  t-id-field="string"
  t-actions="ThfTableAction[], unknown"
  t-columns="ThfTreeListColumn[], unknown"
  t-components-size="string"
  t-height="string | number"
  t-literals="ThfTreeListLiterals"
  t-max-height="string | number"
  t-min-height="string | number"
  t-page-size-virtual="number"
  t-row-height="number"
  t-show-more-visible="boolean"
  t-spacing="string"
  t-virtual-columns="boolean"
  t-loading="boolean"
  t-items="any[]"
  t-page-size="number, unknown"
  t-pageable="boolean"
  t-parent-id-field="string"
  t-resizable="boolean"
  t-service-api="string"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-striped="boolean"
  t-text-wrap="boolean"
  t-virtual-scroll="boolean" >
</thf-treelist>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48," t-children-field"),r(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"string"),t()(),i(53,"td",25),e(54,"-"),t(),i(55,"td",26)(56,"em")(57,"strong"),e(58,"(opcional)"),t()(),i(59,"p"),e(60,"Define o nome do campo que cont\xE9m os itens de dados filhos do n\xF3."),t()()(),i(61,"tr",19)(62,"td",20)(63,"div",21)(64,"span",22),e(65," t-container"),r(66,"br"),t()()(),i(67,"td",23)(68,"code",27),e(69,"boolean, any"),t()(),i(70,"td",25)(71,"p")(72,"code"),e(73,"true"),t()()(),i(74,"td",26)(75,"em")(76,"strong"),e(77,"(opcional)"),t()(),i(78,"p"),e(79,"Adiciona um contorno arredondado ao "),i(80,"code"),e(81,"thf-treelist"),t(),e(82,"."),t()()(),i(83,"tr",19)(84,"td",20)(85,"div",21)(86,"span",22),e(87," t-fields"),r(88,"br"),t()()(),i(89,"td",23)(90,"code",28),e(91,"PoPageDynamicSearchFilters[]"),t()(),i(92,"td",25),e(93,"-"),t(),i(94,"td",26)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),i(98,"p"),e(99,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(100,"strong"),e(101,"PoPageDynamicSearchFilters"),t(),e(102,"."),t(),i(103,"pre")(104,"code",29),e(105,`<thf-treelist
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
/>
`),t()(),i(106,"pre")(107,"code",30),e(108,`customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]
`),t()()()(),i(109,"tr",19)(110,"td",20)(111,"div",21)(112,"span",22),e(113," t-id-field"),r(114,"br"),t()()(),i(115,"td",23)(116,"code",24),e(117,"string"),t()(),i(118,"td",25)(119,"p"),e(120,'"id"'),t()(),i(121,"td",26)(122,"em")(123,"strong"),e(124,"(opcional)"),t()(),i(125,"p"),e(126,"Define o nome do campo que cont\xE9m o identificador \xFAnico do n\xF3."),t()()(),i(127,"tr",19)(128,"td",20)(129,"div",21)(130,"span",22),e(131," t-actions"),r(132,"br"),t()()(),i(133,"td",23)(134,"code",31),e(135,"ThfTableAction[], unknown"),t()(),i(136,"td",25),e(137,"-"),t(),i(138,"td",26)(139,"em")(140,"strong"),e(141,"(opcional)"),t()(),i(142,"p"),e(143,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(144,"strong"),e(145,"ThfTableAction"),t(),e(146,`, adicionando uma coluna
ao treelist. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(147,"a",32)(148,"strong"),e(149,"an an-dots-three-vertical"),t()(),e(150,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(151,"p")(152,"strong"),e(153,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(154,"ul")(155,"li"),e(156,"a lista contiver valores inv\xE1lidos ou indefinidos."),t(),i(157,"li"),e(158,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(159,"pre")(160,"code",29),e(161,`// Exemplo de uso:
<thf-treelist
 [t-actions]="actionsTreelist"
/>
`),t()(),i(162,"pre")(163,"code",30),e(164,`actionsTreelist: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(165,"tr",19)(166,"td",20)(167,"div",21)(168,"span",22),e(169," t-columns"),r(170,"br"),t()()(),i(171,"td",23)(172,"code",33),e(173,"ThfTreeListColumn[], unknown"),t()(),i(174,"td",25),e(175,"-"),t(),i(176,"td",26)(177,"em")(178,"strong"),e(179,"(opcional)"),t()(),i(180,"p"),e(181,"Permite definir e configurar as colunas do treelist, que implementam a interface "),i(182,"strong"),e(183,"ThfTreeListColumn"),t(),e(184,"."),t(),i(185,"pre")(186,"code",29),e(187,`// Exemplo de uso:
<thf-treelist
 [t-columns]="columns"
/>
`),t()(),i(188,"pre")(189,"code",30),e(190,`columns: Array<ThfTreeListColumn> = [
 { property: 'id', label: 'ID' },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(191,"tr",19)(192,"td",20)(193,"div",21)(194,"span",22),e(195," t-components-size"),r(196,"br"),t()()(),i(197,"td",23)(198,"code",24),e(199,"string"),t()(),i(200,"td",25)(201,"p")(202,"code"),e(203,"medium"),t()()(),i(204,"td",26)(205,"em")(206,"strong"),e(207,"(opcional)"),t()(),i(208,"p"),e(209,"Define o tamanho dos componentes de formul\xE1rio no treelist:"),t(),i(210,"ul")(211,"li")(212,"code"),e(213,"small"),t(),e(214,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(215,"li")(216,"code"),e(217,"medium"),t(),e(218,": aplica a medida medium de cada componente."),t()(),i(219,"blockquote")(220,"p"),e(221,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(222,"code"),e(223,"medium"),t(),e(224,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(225,"a",34),e(226,"po-theme"),t(),e(227,"."),t()()()(),i(228,"tr",19)(229,"td",20)(230,"div",21)(231,"span",22),e(232," t-height"),r(233,"br"),t()()(),i(234,"td",23)(235,"code",24),e(236,"string "),t(),i(237,"code",35),e(238," number"),t()(),i(239,"td",25)(240,"p"),e(241,"100%"),t()(),i(242,"td",26)(243,"em")(244,"strong"),e(245,"(opcional)"),t()(),i(246,"p"),e(247,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(248,"code"),e(249,'"<n\xFAmero>%"'),t(),e(250,")."),t(),i(251,"ul")(252,"li"),e(253,"Se "),i(254,"strong"),e(255,"n\xE3o informado"),t(),e(256,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(257,"li"),e(258,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(259,"strong"),e(260,"100%"),t(),e(261," como padr\xE3o."),t()(),i(262,"blockquote")(263,"p")(264,"strong"),e(265,"Observa\xE7\xE3o:"),t(),e(266," Quando definido, o "),i(267,"strong"),e(268,"virtual scroll"),t(),e(269," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(270,"strong"),e(271,"t-virtual-scroll"),t(),e(272," para mais detalhes."),t()()()(),i(273,"tr",19)(274,"td",20)(275,"div",21)(276,"span",22),e(277," t-literals"),r(278,"br"),t()()(),i(279,"td",23)(280,"code",36),e(281,"ThfTreeListLiterals"),t()(),i(282,"td",25),e(283,"-"),t(),i(284,"td",26)(285,"em")(286,"strong"),e(287,"(opcional)"),t()(),i(288,"p"),e(289,"Permite definir literais personalizados para o componente, conforme a interface "),i(290,"strong"),e(291,"ThfTreeListLiterals"),t(),e(292,"."),t(),i(293,"pre")(294,"code",29),e(295,`// Exemplo de uso:
<thf-treelist
 [t-literals]="customLiterals"
/>
`),t()(),i(296,"pre")(297,"code",30),e(298,`customLiterals: ThfTreeListLiterals = { advancedSearch: 'Mais filtros' };
`),t()()()(),i(299,"tr",19)(300,"td",20)(301,"div",21)(302,"span",22),e(303," t-max-height"),r(304,"br"),t()()(),i(305,"td",23)(306,"code",24),e(307,"string "),t(),i(308,"code",35),e(309," number"),t()(),i(310,"td",25),e(311,"-"),t(),i(312,"td",26)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),i(316,"p"),e(317,"Define a "),i(318,"strong"),e(319,"altura m\xE1xima"),t(),e(320," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(321,"code"),e(322,'"<n\xFAmero>%"'),t(),e(323,")."),t(),i(324,"ul")(325,"li"),e(326,"Se "),i(327,"strong"),e(328,"n\xE3o informado"),t(),e(329,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(330,"code"),e(331,"t-height"),t(),e(332,", se existir."),t(),i(333,"li"),e(334,"Caso "),i(335,"code"),e(336,"t-height"),t(),e(337," seja "),i(338,"strong"),e(339,"maior"),t(),e(340," que "),i(341,"code"),e(342,"t-max-height"),t(),e(343,", o treelist usar\xE1 "),i(344,"code"),e(345,"t-max-height"),t(),e(346," como limite superior."),t(),i(347,"li"),e(348,"Caso o valor passado seja inv\xE1lido, "),i(349,"strong"),e(350,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(351,"."),t()()()(),i(352,"tr",19)(353,"td",20)(354,"div",21)(355,"span",22),e(356," t-min-height"),r(357,"br"),t()()(),i(358,"td",23)(359,"code",24),e(360,"string "),t(),i(361,"code",35),e(362," number"),t()(),i(363,"td",25),e(364,"-"),t(),i(365,"td",26)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),i(369,"p"),e(370,"Define a "),i(371,"strong"),e(372,"altura m\xEDnima"),t(),e(373," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(374,"code"),e(375,'"<n\xFAmero>%"'),t(),e(376,")."),t(),i(377,"ul")(378,"li"),e(379,"Se "),i(380,"strong"),e(381,"n\xE3o informado"),t(),e(382,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(383,"code"),e(384,"t-height"),t(),e(385,", se existir."),t(),i(386,"li"),e(387,"Caso "),i(388,"code"),e(389,"t-height"),t(),e(390," seja "),i(391,"strong"),e(392,"menor"),t(),e(393," que "),i(394,"code"),e(395,"t-min-height"),t(),e(396,", o treelist usar\xE1 "),i(397,"code"),e(398,"t-min-height"),t(),e(399," como limite inferior."),t(),i(400,"li"),e(401,"Caso o valor passado seja inv\xE1lido, "),i(402,"strong"),e(403,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(404,"."),t()()()(),i(405,"tr",19)(406,"td",20)(407,"div",21)(408,"span",22),e(409," t-page-size-virtual"),r(410,"br"),t()()(),i(411,"td",23)(412,"code",35),e(413,"number"),t()(),i(414,"td",25)(415,"p")(416,"code"),e(417,"60"),t()()(),i(418,"td",26)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),i(422,"p"),e(423,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no treelist.`),t()()(),i(424,"tr",19)(425,"td",20)(426,"div",21)(427,"span",22),e(428," t-row-height"),r(429,"br"),t()()(),i(430,"td",23)(431,"code",35),e(432,"number"),t()(),i(433,"td",25),e(434,"-"),t(),i(435,"td",26)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),i(439,"p"),e(440,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(441,"code"),e(442,"columnTemplate"),t(),e(443," e "),i(444,"code"),e(445,"cellTemplate"),t(),e(446,")."),t()()(),i(447,"tr",19)(448,"td",20)(449,"div",21)(450,"span",22),e(451," t-show-more-visible"),r(452,"br"),t()()(),i(453,"td",23)(454,"code",37),e(455,"boolean"),t()(),i(456,"td",25)(457,"p")(458,"code"),e(459,"true"),t()()(),i(460,"td",26)(461,"em")(462,"strong"),e(463,"(opcional)"),t()(),i(464,"p"),e(465,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(466,"strong"),e(467,"t-pageable"),t(),e(468," esteja habilitada, ou seja utilizado o evento "),i(469,"code"),e(470,"t-show-more"),t(),e(471," em conjunto com a propriedade "),i(472,"strong"),e(473,"t-items"),t(),e(474,"."),t(),i(475,"blockquote")(476,"p"),e(477,"Caso seja utilizado em conjunto com "),i(478,"strong"),e(479,"t-show-more-disabled"),t(),e(480,", a propriedade "),i(481,"strong"),e(482,"t-show-more-visible"),t(),e(483," ter\xE1 prioridade."),t()()()(),i(484,"tr",19)(485,"td",20)(486,"div",21)(487,"span",22),e(488," t-spacing"),r(489,"br"),t()()(),i(490,"td",23)(491,"code",24),e(492,"string"),t()(),i(493,"td",25)(494,"p")(495,"code"),e(496,"medium"),t()()(),i(497,"td",26)(498,"em")(499,"strong"),e(500,"(opcional)"),t()(),i(501,"p"),e(502,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do treelist. Os valores
permitidos s\xE3o definidos pelo enum `),i(503,"strong"),e(504,"ThfColumnSpacing"),t(),e(505,"."),t(),i(506,"blockquote")(507,"p"),e(508,"Em n\xEDvel de acessibilidade "),i(509,"strong"),e(510,"AA"),t(),e(511,", caso o valor de "),i(512,"code"),e(513,"t-spacing"),t(),e(514," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(515,"code"),e(516,"extraSmall"),t(),e(517,`
nos seguintes cen\xE1rios:`),t(),i(518,"ul")(519,"li"),e(520,"Quando o valor de "),i(521,"code"),e(522,"t-components-size"),t(),e(523," for "),i(524,"code"),e(525,"small"),t(),e(526,";"),t(),i(527,"li"),e(528,"Quando o valor padr\xE3o dos componentes for configurado como "),i(529,"code"),e(530,"small"),t(),e(531,` no
`),i(532,"a",34),e(533,"servi\xE7o de tema"),t(),e(534,"."),t()()()()(),i(535,"tr",19)(536,"td",20)(537,"div",21)(538,"span",22),e(539," t-virtual-columns"),r(540,"br"),t()()(),i(541,"td",23)(542,"code",37),e(543,"boolean"),t()(),i(544,"td",25)(545,"p")(546,"code"),e(547,"false"),t()()(),i(548,"td",26)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),i(552,"p"),e(553,`Define o uso do virtual columns no treelist para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(554,"strong"),e(555,"t-auto-size"),t(),e(556," e com o m\xE9todo "),i(557,"strong"),e(558,"autoFitColumns()"),t(),e(559,`.
Caso o treelist tenha mais de 50 colunas, o virtual-columns \xE9 ativado.`),t()()(),i(560,"tr",19)(561,"td",20)(562,"div",21)(563,"span",22),e(564," t-loading"),r(565,"br"),t()()(),i(566,"td",23)(567,"code",37),e(568,"boolean"),t()(),i(569,"td",25)(570,"p")(571,"code"),e(572,"false"),t()()(),i(573,"td",26)(574,"em")(575,"strong"),e(576,"(opcional)"),t()(),i(577,"p"),e(578,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do treelist."),t()()(),i(579,"tr",19)(580,"td",20)(581,"div",21)(582,"span",22),e(583," t-items"),r(584,"br"),t()()(),i(585,"td",23)(586,"code",38),e(587,"any[]"),t()(),i(588,"td",25),e(589,"-"),t(),i(590,"td",26)(591,"em")(592,"strong"),e(593,"(opcional)"),t()(),i(594,"p"),e(595,"Permite listar os itens no treelist."),t(),i(596,"p"),e(597,`Cada item do array representa uma linha no treelist e deve conter as propriedades
que correspondem \xE0s colunas definidas no treelist.`),t(),i(598,"pre")(599,"code",29),e(600,`<thf-treelist
  [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
/>
`),t()()()(),i(601,"tr",19)(602,"td",20)(603,"div",21)(604,"span",22),e(605," t-page-size"),r(606,"br"),t()()(),i(607,"td",23)(608,"code",39),e(609,"number, unknown"),t()(),i(610,"td",25)(611,"p")(612,"code"),e(613,"10"),t()()(),i(614,"td",26)(615,"em")(616,"strong"),e(617,"(opcional)"),t()(),i(618,"p"),e(619,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(620,"strong"),e(621,"t-pageable"),t(),e(622," esteja habilitada."),t()()(),i(623,"tr",19)(624,"td",20)(625,"div",21)(626,"span",22),e(627," t-pageable"),r(628,"br"),t()()(),i(629,"td",23)(630,"code",37),e(631,"boolean"),t()(),i(632,"td",25)(633,"p")(634,"code"),e(635,"false"),t()()(),i(636,"td",26)(637,"em")(638,"strong"),e(639,"(opcional)"),t()(),i(640,"p"),e(641,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(642,"tr",19)(643,"td",20)(644,"div",21)(645,"span",22),e(646," t-parent-id-field"),r(647,"br"),t()()(),i(648,"td",23)(649,"code",24),e(650,"string"),t()(),i(651,"td",25),e(652,"-"),t(),i(653,"td",26)(654,"em")(655,"strong"),e(656,"(opcional)"),t()(),i(657,"p"),e(658,"Define o nome do campo que cont\xE9m o identificador do n\xF3 pai."),t()()(),i(659,"tr",19)(660,"td",20)(661,"div",21)(662,"span",22),e(663," t-resizable"),r(664,"br"),t()()(),i(665,"td",23)(666,"code",37),e(667,"boolean"),t()(),i(668,"td",25)(669,"p")(670,"code"),e(671,"false"),t()()(),i(672,"td",26)(673,"em")(674,"strong"),e(675,"(opcional)"),t()(),i(676,"p"),e(677,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do treelist,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(678,"tr",19)(679,"td",20)(680,"div",21)(681,"span",22),e(682," t-service-api"),r(683,"br"),t()()(),i(684,"td",23)(685,"code",24),e(686,"string"),t()(),i(687,"td",25),e(688,"-"),t(),i(689,"td",26)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),i(693,"p"),e(694,"Define a rota da "),i(695,"code"),e(696,"API"),t(),e(697,` para realizar o GET dos itens e popular o treelist.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(698,"code"),e(699,"API"),t(),e(700,` esteja preparada para receber uma ou
mais `),i(701,"code"),e(702,"keys"),t(),e(703," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(704,"code"),e(705,"keys"),t(),e(706,`,
que implementa a interface `),i(707,"strong"),e(708,"ThfTreeListColumn"),t(),e(709,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(710,"code"),e(711,"id"),t(),e(712,"."),t()()(),i(713,"tr",19)(714,"td",20)(715,"div",40)(716,"span",41),e(717," (t-show-more)"),r(718,"br"),t()()(),i(719,"td",23)(720,"code",42),e(721,"EventEmitter"),t()(),i(722,"td",25),e(723,"-"),t(),i(724,"td",26)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),i(728,"p"),e(729,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(730,"strong"),e(731,"ThfTreeListColumnSort"),t(),e(732,`,
caso existam colunas ordenadas definidas.`),t(),i(733,"blockquote")(734,"p"),e(735,"Caso "),i(736,"strong"),e(737,"t-items"),t(),e(738," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(739,"tr",19)(740,"td",20)(741,"div",21)(742,"span",22),e(743," t-show-more-disabled"),r(744,"br"),t()()(),i(745,"td",23)(746,"code",37),e(747,"boolean"),t()(),i(748,"td",25)(749,"p")(750,"code"),e(751,"false"),t()()(),i(752,"td",26)(753,"em")(754,"strong"),e(755,"(opcional)"),t()(),i(756,"p"),e(757,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(758,"tr",19)(759,"td",20)(760,"div",21)(761,"span",22),e(762," t-striped"),r(763,"br"),t()()(),i(764,"td",23)(765,"code",37),e(766,"boolean"),t()(),i(767,"td",25)(768,"p")(769,"code"),e(770,"true"),t()()(),i(771,"td",26)(772,"em")(773,"strong"),e(774,"(opcional)"),t()(),i(775,"p"),e(776,"Define o estilo listrado no treelist (striped)."),t()()(),i(777,"tr",19)(778,"td",20)(779,"div",21)(780,"span",22),e(781," t-text-wrap"),r(782,"br"),t()()(),i(783,"td",23)(784,"code",37),e(785,"boolean"),t()(),i(786,"td",25)(787,"p")(788,"code"),e(789,"false"),t()()(),i(790,"td",26)(791,"em")(792,"strong"),e(793,"(opcional)"),t()(),i(794,"p"),e(795,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(796,"blockquote")(797,"p"),e(798,"Propriedade incompat\xEDvel quando "),i(799,"strong"),e(800,"t-virtual-scroll"),t(),e(801," est\xE1 habilitado."),t()()()(),i(802,"tr",19)(803,"td",20)(804,"div",21)(805,"span",22),e(806," t-virtual-scroll"),r(807,"br"),t()()(),i(808,"td",23)(809,"code",37),e(810,"boolean"),t()(),i(811,"td",25)(812,"p")(813,"code"),e(814,"true"),t()()(),i(815,"td",26)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),i(819,"p"),e(820,`Define o uso do virtual scroll no treelist para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(821,"strong"),e(822,"t-height"),t(),e(823," esteja definida."),t(),i(824,"blockquote")(825,"p"),e(826,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(827,"strong"),e(828,"t-text-wrap"),t(),e(829,", "),i(830,"strong"),e(831,"t-row-height"),t(),e(832," e "),i(833,"strong"),e(834,"t-page-size-virtual"),t(),e(835,"."),t()()()()()()()(),V(836,2),t(),i(837,"po-tab",43),V(838,3),i(839,"po-container",5)(840,"po-accordion",6)(841,"po-accordion-item",44)(842,"h4",9)(843,"code"),e(844,"ThfTableAction"),t()(),i(845,"div",10)(846,"p"),e(847," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(848,"h4",15),e(849,"Propriedades"),t(),i(850,"table",16)(851,"tr",17)(852,"th",18),e(853,"Nome"),t(),i(854,"th",18),e(855,"Tipo"),t(),i(856,"th",18),e(857,"Descri\xE7\xE3o"),t()(),i(858,"tr",19)(859,"td",20)(860,"div",21)(861,"span",22),e(862," action"),r(863,"br"),t()()(),i(864,"td",23)(865,"code",45),e(866,"Function"),t()(),i(867,"td",26)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(873,"p"),e(874,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(875,"code"),e(876,"subItems"),t(),e(877,"."),t(),i(878,"blockquote")(879,"p"),e(880,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(881,"em"),e(882,"bind"),t(),e(883,`:
`),i(884,"code"),e(885,"action: this.myFunction.bind(this)"),t()()()()(),i(886,"tr",19)(887,"td",20)(888,"div",21)(889,"span",22),e(890," disabled"),r(891,"br"),t()()(),i(892,"td",23)(893,"code",37),e(894,"boolean "),t(),i(895,"code",45),e(896," Function"),t()(),i(897,"td",26)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),i(901,"p"),e(902,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),i(903,"tr",19)(904,"td",20)(905,"div",21)(906,"span",22),e(907," fixed"),r(908,"br"),t()()(),i(909,"td",23)(910,"code",37),e(911,"boolean"),t()(),i(912,"td",26)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),i(916,"p"),e(917,"Propriedade para fixar a a\xE7\xE3o"),t(),i(918,"blockquote")(919,"p"),e(920,"N\xE3o se aplica ao componente "),i(921,"code"),e(922,"thf-treelist"),t()()()()(),i(923,"tr",19)(924,"td",20)(925,"div",21)(926,"span",22),e(927," icon"),r(928,"br"),t()()(),i(929,"td",23)(930,"code",24),e(931,"string "),t(),i(932,"code",46),e(933," TemplateRef<void>"),t()(),i(934,"td",26)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),i(938,"p"),e(939,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),i(940,"p"),e(941,"Aceita \xEDcones da "),i(942,"a",32),e(943,"Biblioteca de \xEDcones"),t(),e(944,`, fontes externas (ex: Font Awesome)
ou um `),i(945,"code"),e(946,"TemplateRef"),t(),e(947," para \xEDcones customizados."),t(),i(948,"pre")(949,"code"),e(950,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),i(951,"tr",19)(952,"td",20)(953,"div",21)(954,"span",22),e(955," label"),r(956,"br"),t()()(),i(957,"td",23)(958,"code",24),e(959,"string"),t()(),i(960,"td",26)(961,"p"),e(962,"R\xF3tulo da a\xE7\xE3o."),t(),i(963,"p"),e(964,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(965,"code"),e(966,"subItems"),t(),e(967,"."),t()()(),i(968,"tr",19)(969,"td",20)(970,"div",21)(971,"span",22),e(972," selected"),r(973,"br"),t()()(),i(974,"td",23)(975,"code",37),e(976,"boolean"),t()(),i(977,"td",26)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),i(981,"p"),e(982,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(983,"tr",19)(984,"td",20)(985,"div",21)(986,"span",22),e(987," separator"),r(988,"br"),t()()(),i(989,"td",23)(990,"code",37),e(991,"boolean"),t()(),i(992,"td",26)(993,"em")(994,"strong"),e(995,"(opcional)"),t()(),i(996,"p"),e(997,"Atribui uma linha separadora acima do item."),t()()(),i(998,"tr",19)(999,"td",20)(1e3,"div",21)(1001,"span",22),e(1002," subItems"),r(1003,"br"),t()()(),i(1004,"td",23)(1005,"code",47),e(1006,"Array<PoPopupAction>"),t()(),i(1007,"td",26)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),i(1011,"p"),e(1012,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),i(1013,"p"),e(1014,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),i(1015,"blockquote")(1016,"p"),e(1017,"As propriedades "),i(1018,"code"),e(1019,"disabled"),t(),e(1020,", "),i(1021,"code"),e(1022,"type"),t(),e(1023," e "),i(1024,"code"),e(1025,"visible"),t(),e(1026," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),i(1027,"blockquote")(1028,"p"),e(1029,"Quando "),i(1030,"code"),e(1031,"url"),t(),e(1032," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),i(1033,"blockquote")(1034,"p"),e(1035,"Em subn\xEDveis aninhados, o "),i(1036,"code"),e(1037,"icon"),t(),e(1038," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),i(1039,"tr",19)(1040,"td",20)(1041,"div",21)(1042,"span",22),e(1043," type"),r(1044,"br"),t()()(),i(1045,"td",23)(1046,"code",24),e(1047,"string"),t()(),i(1048,"td",26)(1049,"em")(1050,"strong"),e(1051,"(opcional)"),t()(),i(1052,"p"),e(1053,"Define a cor do item."),t(),i(1054,"p"),e(1055,"Valores v\xE1lidos:"),t(),i(1056,"ul")(1057,"li")(1058,"code"),e(1059,"default"),t()(),i(1060,"li")(1061,"code"),e(1062,"danger"),t()()()()(),i(1063,"tr",19)(1064,"td",20)(1065,"div",21)(1066,"span",22),e(1067," url"),r(1068,"br"),t()()(),i(1069,"td",23)(1070,"code",24),e(1071,"string"),t()(),i(1072,"td",26)(1073,"em")(1074,"strong"),e(1075,"(opcional)"),t()(),i(1076,"p"),e(1077,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),i(1078,"p"),e(1079,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(1080,"code"),e(1081,"url"),t(),e(1082," \xE9 informada em um agrupador, o clique "),i(1083,"strong"),e(1084,"n\xE3o abrir\xE1 os subitens"),t(),e(1085,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),i(1086,"blockquote")(1087,"p"),e(1088,"Quando informada, tem prioridade sobre a propriedade "),i(1089,"code"),e(1090,"action"),t(),e(1091,"."),t()()()(),i(1092,"tr",19)(1093,"td",20)(1094,"div",21)(1095,"span",22),e(1096," visible"),r(1097,"br"),t()()(),i(1098,"td",23)(1099,"code",37),e(1100,"boolean "),t(),i(1101,"code",45),e(1102," Function"),t()(),i(1103,"td",26)(1104,"em")(1105,"strong"),e(1106,"(opcional)"),t()(),i(1107,"p"),e(1108,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()()(),i(1109,"po-accordion-item",48)(1110,"h4",9)(1111,"code"),e(1112,"ThfTreeListColumnSort"),t()(),i(1113,"div",10)(1114,"p"),e(1115,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(1116,"strong"),e(1117,"t-sort"),t(),e(1118,")."),t()(),i(1119,"h4",15),e(1120,"Propriedades"),t(),i(1121,"table",16)(1122,"tr",17)(1123,"th",18),e(1124,"Nome"),t(),i(1125,"th",18),e(1126,"Tipo"),t(),i(1127,"th",18),e(1128,"Descri\xE7\xE3o"),t()(),i(1129,"tr",19)(1130,"td",20)(1131,"div",21)(1132,"span",22),e(1133," dir"),r(1134,"br"),t()()(),i(1135,"td",23)(1136,"code",49),e(1137,"'asc' "),t(),i(1138,"code",50),e(1139," 'desc'"),t()(),i(1140,"td",26)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),i(1144,"p"),e(1145,"Dire\xE7\xE3o da coluna:"),t(),i(1146,"ul")(1147,"li")(1148,"code"),e(1149,"asc"),t()(),i(1150,"li")(1151,"code"),e(1152,"desc"),t()()()()(),i(1153,"tr",19)(1154,"td",20)(1155,"div",21)(1156,"span",22),e(1157," field"),r(1158,"br"),t()()(),i(1159,"td",23)(1160,"code",24),e(1161,"string"),t()(),i(1162,"td",26)(1163,"p"),e(1164,"Coluna"),t()()()()(),i(1165,"po-accordion-item",51)(1166,"h4",9)(1167,"code"),e(1168,"ThfTreeListColumn"),t()(),i(1169,"div",10)(1170,"p"),e(1171,"Interface para configura\xE7\xE3o das colunas ("),i(1172,"strong"),e(1173,"t-columns"),t(),e(1174,")."),t()(),i(1175,"h4",15),e(1176,"Propriedades"),t(),i(1177,"table",16)(1178,"tr",17)(1179,"th",18),e(1180,"Nome"),t(),i(1181,"th",18),e(1182,"Tipo"),t(),i(1183,"th",18),e(1184,"Descri\xE7\xE3o"),t()(),i(1185,"tr",19)(1186,"td",20)(1187,"div",21)(1188,"span",22),e(1189," booleanFalse"),r(1190,"br"),t()()(),i(1191,"td",23)(1192,"code",24),e(1193,"string"),t()(),i(1194,"td",26)(1195,"em")(1196,"strong"),e(1197,"(opcional)"),t()(),i(1198,"p"),e(1199,"Texto exibido quando o valor da coluna for "),i(1200,"em"),e(1201,"false"),t(),e(1202,"."),t()()(),i(1203,"tr",19)(1204,"td",20)(1205,"div",21)(1206,"span",22),e(1207," booleanTrue"),r(1208,"br"),t()()(),i(1209,"td",23)(1210,"code",24),e(1211,"string"),t()(),i(1212,"td",26)(1213,"em")(1214,"strong"),e(1215,"(opcional)"),t()(),i(1216,"p"),e(1217,"Texto exibido quando o valor da coluna for "),i(1218,"em"),e(1219,"true"),t(),e(1220,"."),t()()(),i(1221,"tr",19)(1222,"td",20)(1223,"div",21)(1224,"span",22),e(1225," format"),r(1226,"br"),t()()(),i(1227,"td",23)(1228,"code",24),e(1229,"string"),t()(),i(1230,"td",26)(1231,"em")(1232,"strong"),e(1233,"(opcional)"),t()(),i(1234,"p"),e(1235,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(1236,"table")(1237,"thead")(1238,"tr")(1239,"th"),e(1240,"Formata\xE7\xE3o"),t(),i(1241,"th"),e(1242,"Tipo da Coluna"),t(),i(1243,"th"),e(1244,"Descri\xE7\xE3o"),t(),i(1245,"th"),e(1246,"Exemplos"),t()()(),i(1247,"tbody")(1248,"tr")(1249,"td"),e(1250,"Monet\xE1rio"),t(),i(1251,"td")(1252,"code"),e(1253,"currency"),t()(),i(1254,"td"),e(1255,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(1256,"code"),e(1257,"'USD'"),t(),e(1258," por padr\xE3o"),t(),i(1259,"td")(1260,"code"),e(1261,"'BRL'"),t(),e(1262,", "),i(1263,"code"),e(1264,"'USD'"),t(),e(1265,", "),i(1266,"code"),e(1267,"'EUR'"),t(),e(1268,", "),i(1269,"code"),e(1270,"'RUB'"),t()()(),i(1271,"tr")(1272,"td"),e(1273,"Data"),t(),i(1274,"td")(1275,"code"),e(1276,"date"),t()(),i(1277,"td"),e(1278,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(1279,"td")(1280,"code"),e(1281,"'dd/MM/yyyy'"),t(),e(1282,", "),i(1283,"code"),e(1284,"'dd-MM-yy'"),t(),e(1285,", "),i(1286,"code"),e(1287,"'mm/dd/yyyy'"),t()()(),i(1288,"tr")(1289,"td"),e(1290,"Hora"),t(),i(1291,"td")(1292,"code"),e(1293,"time"),t()(),i(1294,"td"),e(1295,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(1296,"td")(1297,"code"),e(1298,"'HH:mm'"),t(),e(1299,", "),i(1300,"code"),e(1301,"'HH:mm:ss.ffffff'"),t(),e(1302,", "),i(1303,"code"),e(1304,"'HH:mm:ss.ff'"),t(),e(1305,", "),i(1306,"code"),e(1307,"'mm:ss.fff'"),t()()(),i(1308,"tr")(1309,"td"),e(1310,"N\xFAmero"),t(),i(1311,"td")(1312,"code"),e(1313,"number"),t()(),i(1314,"td"),e(1315,"Aceita um valor seguindo o padr\xE3o "),i(1316,"a",52)(1317,"strong"),e(1318,"DecimalPipe"),t()(),e(1319," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(1320,"td")(1321,"code"),e(1322,"'1.2-5'"),t(),e(1323," (ex.: "),i(1324,"code"),e(1325,"50"),t(),e(1326," \u2192 "),i(1327,"code"),e(1328,"50.00"),t(),e(1329,")"),t()()()(),i(1330,"p"),e(1331,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(1332,"blockquote")(1333,"p"),e(1334,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(1335,"tr",19)(1336,"td",20)(1337,"div",21)(1338,"span",22),e(1339," label"),r(1340,"br"),t()()(),i(1341,"td",23)(1342,"code",24),e(1343,"string"),t()(),i(1344,"td",26)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),t()(),i(1348,"p"),e(1349,"Texto para t\xEDtulo da coluna."),t(),i(1350,"p"),e(1351,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1352,"em"),e(1353,"label"),t(),e(1354," o valor da propriedade "),i(1355,"em"),e(1356,"property"),t(),e(1357," com a primeira letra em mai\xFAsculo."),t()()(),i(1358,"tr",19)(1359,"td",20)(1360,"div",21)(1361,"span",22),e(1362," labels"),r(1363,"br"),t()()(),i(1364,"td",23)(1365,"code",53),e(1366,"Array<PoTableColumnLabel>"),t()(),i(1367,"td",26)(1368,"em")(1369,"strong"),e(1370,"(opcional)"),t()(),i(1371,"p"),e(1372,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1373,"code"),e(1374,"PoTableColumnLabel"),t(),e(1375," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1376,"pre")(1377,"code"),e(1378,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(1379,"tr",19)(1380,"td",20)(1381,"div",21)(1382,"span",22),e(1383," locale"),r(1384,"br"),t()()(),i(1385,"td",23)(1386,"code",24),e(1387,"string"),t()(),i(1388,"td",26)(1389,"em")(1390,"strong"),e(1391,"(opcional)"),t()(),i(1392,"p"),e(1393,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1394,"a",54)(1395,"code"),e(1396,"I18n"),t()()(),i(1397,"p"),e(1398,"Exemplo de utiliza\xE7\xE3o no treelist:"),t(),i(1399,"pre")(1400,"code"),e(1401,`columnWithItems: Array<ThfTreeListColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(1402,"blockquote")(1403,"p"),e(1404,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1405,"p"),e(1406,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1407,"p"),e(1408,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1409,"a",54)(1410,"code"),e(1411,"I18n"),t()()()(),i(1412,"p"),e(1413,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1414,"pre")(1415,"code"),e(1416,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(1417,"blockquote")(1418,"p"),e(1419,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1420,"code"),e(1421,"number"),t(),e(1422," e "),i(1423,"code"),e(1424,"currency"),t(),e(1425,"."),t()()()(),i(1426,"tr",19)(1427,"td",20)(1428,"div",21)(1429,"span",22),e(1430," mask"),r(1431,"br"),t()()(),i(1432,"td",23)(1433,"code",24),e(1434,"string"),t()(),i(1435,"td",26)(1436,"em")(1437,"strong"),e(1438,"(opcional)"),t()(),i(1439,"p"),e(1440,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(1441,"code"),e(1442,"number"),t(),e(1443," e "),i(1444,"code"),e(1445,"string"),t(),e(1446,`
Nas colunas do tipo `),i(1447,"code"),e(1448,"number"),t(),e(1449," a propriedade "),i(1450,"code"),e(1451,"mask"),t(),e(1452," ter\xE1 prioridade sob "),i(1453,"code"),e(1454,"format"),t()()()(),i(1455,"tr",19)(1456,"td",20)(1457,"div",21)(1458,"span",22),e(1459," property"),r(1460,"br"),t()()(),i(1461,"td",23)(1462,"code",24),e(1463,"string"),t()(),i(1464,"td",26)(1465,"p"),e(1466,"Identificador da coluna."),t()()(),i(1467,"tr",19)(1468,"td",20)(1469,"div",21)(1470,"span",22),e(1471," type"),r(1472,"br"),t()()(),i(1473,"td",23)(1474,"code",24),e(1475,"string"),t()(),i(1476,"td",26)(1477,"em")(1478,"strong"),e(1479,"(opcional)"),t()(),i(1480,"p"),e(1481,"Tipo da coluna."),t(),i(1482,"p"),e(1483,"Valores v\xE1lidos:"),t(),i(1484,"ul")(1485,"li")(1486,"code"),e(1487,"boolean"),t(),e(1488,": Exibir\xE1 por padr\xE3o "),i(1489,"code"),e(1490,"Sim"),t(),e(1491," e "),i(1492,"code"),e(1493,"N\xE3o"),t(),e(1494," de acordo com os valores "),i(1495,"em"),e(1496,"booleanos"),t(),e(1497,"."),i(1498,"blockquote")(1499,"p"),e(1500,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(1501,"code"),e(1502,"boolean"),t(),e(1503," desta interface."),t()()(),i(1504,"li")(1505,"code"),e(1506,"currency"),t(),e(1507,": valores monet\xE1rios."),t(),i(1508,"li")(1509,"code"),e(1510,"date"),t(),e(1511,": valor de datas."),i(1512,"ul")(1513,"li"),e(1514,"Aceita os tipos "),i(1515,"em"),e(1516,"string"),t(),e(1517," e "),i(1518,"em"),e(1519,"Date"),t(),e(1520,` padr\xE3o do Javascript,
por exemplo: `),i(1521,"code"),e(1522,"'2017-11-28'"),t(),e(1523," ou "),i(1524,"code"),e(1525,"new Date(2017, 10, 28)"),t(),e(1526,"."),t()()(),i(1527,"li")(1528,"code"),e(1529,"dateTime"),t(),e(1530,": valor de data com hor\xE1rio."),i(1531,"ul")(1532,"li"),e(1533,"Aceita o tipo "),i(1534,"em"),e(1535,"string"),t(),e(1536," no formato "),i(1537,"strong"),e(1538,"ISO-8601"),t(),e(1539," extendido "),i(1540,"strong"),e(1541,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(1542,`
e o tipo `),i(1543,"em"),e(1544,"Date"),t(),e(1545," padr\xE3o do Javascript, por exemplo: "),i(1546,"code"),e(1547,"'2017-11-28T00:00:00-02:00'"),t(),e(1548," ou "),i(1549,"code"),e(1550,"new Date(2017, 10, 28)"),t(),e(1551,"."),t()()(),i(1552,"li")(1553,"code"),e(1554,"label"),t(),e(1555,": texto com destaque."),t(),i(1556,"li")(1557,"code"),e(1558,"number"),t(),e(1559,": valores num\xE9ricos."),t(),i(1560,"li")(1561,"code"),e(1562,"string"),t(),e(1563,": textos."),t(),i(1564,"li")(1565,"code"),e(1566,"time"),t(),e(1567,": valor de hor\xE1rio."),i(1568,"ul")(1569,"li"),e(1570,"Aceita o tipo "),i(1571,"em"),e(1572,"string"),t(),e(1573," nos formatos "),i(1574,"strong"),e(1575,"'HH:mm:ss'"),t(),e(1576," ou "),i(1577,"strong"),e(1578,"'HH:mm:ss.ffffff'"),t(),e(1579,", por exemplo: "),i(1580,"code"),e(1581,"'23:12:45'"),t(),e(1582,"."),t()()()()()(),i(1583,"tr",19)(1584,"td",20)(1585,"div",21)(1586,"span",22),e(1587," visible"),r(1588,"br"),t()()(),i(1589,"td",23)(1590,"code",37),e(1591,"boolean"),t()(),i(1592,"td",26)(1593,"em")(1594,"strong"),e(1595,"(opcional)"),t()(),i(1596,"p"),e(1597,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1598,"strong"),e(1599,"gerenciador de colunas"),t(),e(1600,"."),t(),i(1601,"blockquote")(1602,"p"),e(1603,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1604,"code"),e(1605,"p-max-columns"),t(),e(1606,"."),t()()()(),i(1607,"tr",19)(1608,"td",20)(1609,"div",21)(1610,"span",22),e(1611," width"),r(1612,"br"),t()()(),i(1613,"td",23)(1614,"code",35),e(1615,"number "),t(),i(1616,"code",24),e(1617," string"),t()(),i(1618,"td",26)(1619,"em")(1620,"strong"),e(1621,"(opcional)"),t()(),i(1622,"p"),e(1623,"Caso seja passado o formato "),i(1624,"code"),e(1625,"number"),t(),e(1626,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(1627,"blockquote")(1628,"p"),e(1629,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(1630,"po-accordion-item",55)(1631,"h4",9)(1632,"code"),e(1633,"ThfTreeListLiterals"),t()(),i(1634,"div",10)(1635,"p"),e(1636,"Interface para customizar literais ("),i(1637,"strong"),e(1638,"t-literals"),t(),e(1639,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1640,"h4",15),e(1641,"Propriedades"),t(),i(1642,"table",16)(1643,"tr",17)(1644,"th",18),e(1645,"Nome"),t(),i(1646,"th",18),e(1647,"Tipo"),t(),i(1648,"th",18),e(1649,"Descri\xE7\xE3o"),t()(),i(1650,"tr",19)(1651,"td",20)(1652,"div",21)(1653,"span",22),e(1654," loadMoreData"),r(1655,"br"),t()()(),i(1656,"td",23)(1657,"code",24),e(1658,"string"),t()(),i(1659,"td",26)(1660,"em")(1661,"strong"),e(1662,"(opcional)"),t()(),i(1663,"p"),e(1664,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(1665,"tr",19)(1666,"td",20)(1667,"div",21)(1668,"span",22),e(1669," loadingData"),r(1670,"br"),t()()(),i(1671,"td",23)(1672,"code",24),e(1673,"string"),t()(),i(1674,"td",26)(1675,"em")(1676,"strong"),e(1677,"(opcional)"),t()(),i(1678,"p"),e(1679,"Texto do modal Carregando..."),t()()(),i(1680,"tr",19)(1681,"td",20)(1682,"div",21)(1683,"span",22),e(1684," noData"),r(1685,"br"),t()()(),i(1686,"td",23)(1687,"code",24),e(1688,"string"),t()(),i(1689,"td",26)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),i(1693,"p"),e(1694,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()()()()()(),V(1695,4),t(),i(1696,"po-tab",56),V(1697,5),i(1698,"po-container",5)(1699,"po-accordion",6)(1700,"po-accordion-item",57)(1701,"h4",9)(1702,"code"),e(1703,"ThfColumnSpacing"),t()(),i(1704,"h4",15),e(1705,"Propriedades"),t(),i(1706,"table",16)(1707,"tr",17)(1708,"th",18),e(1709,"Nome"),t(),i(1710,"th",18),e(1711,"Descri\xE7\xE3o"),t()(),i(1712,"tr",19)(1713,"td",20)(1714,"div",21)(1715,"span",22),e(1716," ExtraSmall"),r(1717,"br"),t()()(),i(1718,"td",26)(1719,"p"),e(1720,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(1721,"tr",19)(1722,"td",20)(1723,"div",21)(1724,"span",22),e(1725," Large"),r(1726,"br"),t()()(),i(1727,"td",26)(1728,"p"),e(1729,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(1730,"tr",19)(1731,"td",20)(1732,"div",21)(1733,"span",22),e(1734," Medium"),r(1735,"br"),t()()(),i(1736,"td",26)(1737,"p"),e(1738,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(1739,"tr",19)(1740,"td",20)(1741,"div",21)(1742,"span",22),e(1743," Small"),r(1744,"br"),t()()(),i(1745,"td",26)(1746,"p"),e(1747,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()()()(),V(1748,6),t(),i(1749,"po-tab",58),V(1750,7),t()()())},dependencies:[M,W,h,oe,G],encapsulation:2})}}return p})();var Rt=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275mod=fe({type:p})}static{this.\u0275inj=he({imports:[qe,je]})}}return p})();var Ge=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",score:87,onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",score:42,onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",score:95,onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",score:63,onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",score:78,onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",score:12,onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",score:56,onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",score:91,onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",score:34,onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",score:88,onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",score:73,onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",score:27,onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",score:99,onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",score:15,onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",score:67,onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",score:84,onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",score:53,onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",score:39,onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],jt=`export const DATA = ${JSON.stringify(Ge,null,2)};`;var Zt=`<po-button
    class="po-mb-2 po-mt-1"
    p-label="Limpa filtros por coluna"
    (p-click)="clearFiltersByColumn()"
  ></po-button>
  <thf-grid
  #gridComponent
  [t-actions-filter]="true"
  [t-columns]="columnsTotalizador"
  [t-resizable]="true"
  [t-groupable]="true"
  [t-draggable]="true"
  [t-items]="itemsTotalizador"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-show-densification-configuration]="true"
  [t-action-excel]="true"
  [t-action-pdf]="true"
  [t-aggregates-config]="aggregateConfig"
  [t-aggregates]="aggregatesDescriptor"
  [t-filter-column-properties]="filterColumnProperties"
  [t-show-footer-aggregates]="true"
  [t-height]="450"
/>
`,Ot=`import { Component, ViewChild } from '@angular/core';

import {
  ThfAggregateConfig,
  ThfAggregateDescriptor,
  ThfFilterByColumn,
  ThfGridColumn,
  ThfGridComponent,
} from '@totvs/thf-components';

import { DATA } from './data';

@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'caption-tag-11', label: 'Available' },
        { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
        { value: 'closed', color: 'caption-tag-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region', filter: true },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'date', label: 'Date', type: 'date', filter: true },
    {
      property: 'onBoardService',
      label: 'On-board Service',
      type: 'boolean',
      filter: true,
    },
    { property: 'class', label: 'Class', type: 'string', filter: true },
    { property: 'score', label: 'Score', type: 'number', filter: true },
    {
      property: 'value',
      type: 'currency',
      label: 'Value',
      format: 'BRL',
      filter: true,
    },
  ];

  filterColumnProperties: Array<ThfFilterByColumn> = [
    {
      property: 'value',
      logic: 'and',
      operator1: 'gt',
      value1: 1500,
    },
  ];

  aggregateConfig: ThfAggregateConfig = {
    disabled: ['status'],
    visible: ['status', 'destination', 'value'],
    aggregateAlign: 'defaultColumn',
  };

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'destination', aggregate: 'count', label: 'Contagem' },
  ];

  itemsTotalizador = DATA;

  clearFiltersByColumn() {
    this.thfGrid.applyFilterByColumnProps([]);
  }
}
`;function Co(p,T){}function To(p,T){p&1&&U(0,Co,0,0,"ng-template")}function Do(p,T){if(p&1&&(i(0,"po-accordion-item",1),U(1,To,1,0,null,7),t()),p&2){let n=s();d(),m("ngTemplateOutlet",n.dynamicTemplate)}}function Po(p,T){if(p&1&&r(0,"po-code-editor",5),p&2){let n=s();m("p-readonly",!0)("ngModel",n.htmlCode)("p-theme",n.themeActive===1?"vs-dark":"vs")}}function wo(p,T){if(p&1&&r(0,"po-code-editor",6),p&2){let n=s();m("p-readonly",!0)("p-theme",n.themeActive===1?"vs-dark":"vs")("ngModel",n.tsCode)}}function Ao(p,T){if(p&1&&r(0,"po-code-editor",6),p&2){let n=s();m("p-readonly",!0)("p-theme",n.themeActive===1?"vs-dark":"vs")("ngModel",n.serviceCode)}}function _o(p,T){if(p&1&&r(0,"po-code-editor",6),p&2){let n=s();m("p-readonly",!0)("p-theme",n.themeActive===1?"vs-dark":"vs")("ngModel",n.othersCode==null?null:n.othersCode.body)}}var C=(()=>{class p{constructor(n){this.sharedService=n,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(n=>{this.themeActive=n.type||0})}static{this.\u0275fac=function(a){return new(a||p)(z(At))}}static{this.\u0275cmp=x({type:p,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"],[4,"ngTemplateOutlet"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"po-accordion"),k(2,Do,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),b("ngModelChange",function(E){return S(o.selectedCode,E)||(o.selectedCode=E),E}),t(),k(6,Po,1,3,"po-code-editor",5),k(7,wo,1,3,"po-code-editor",6),k(8,Ao,1,3,"po-code-editor",6),k(9,_o,1,3,"po-code-editor",6),t()()()()),a&2&&(m("ngClass",o.marginTopClass),d(2),q(o.properties?2:-1),d(3),m("p-buttons",o.buttons),y("ngModel",o.selectedCode),d(),q(o.selectedCode==="html"?6:-1),d(),q(o.selectedCode==="ts"?7:-1),d(),q(o.selectedCode==="service"?8:-1),d(),q(o.selectedCode==="othersCode"?9:-1))},dependencies:[ut,Et,St,j,Q,M,W,Tt,gt],encapsulation:2})}}return p})();var ko=["gridComponent"],Gt=(()=>{class p{constructor(){this.htmlCode=Zt,this.tsCode=Ot,this.tsOthersCode={label:"Data",body:jt},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"caption-tag-11",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-07",label:"Closed"}]},{property:"region",label:"Region",filter:!0},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"date",label:"Date",type:"date",filter:!0},{property:"onBoardService",label:"On-board Service",type:"boolean",filter:!0},{property:"class",label:"Class",type:"string",filter:!0},{property:"score",label:"Score",type:"number",filter:!0},{property:"value",type:"currency",label:"Value",format:"BRL",filter:!0}],this.filterColumnProperties=[{property:"value",logic:"and",operator1:"gt",value1:1500}],this.aggregateConfig={disabled:["status"],visible:["status","destination","value"],aggregateAlign:"defaultColumn"},this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"destination",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Ge}clearFiltersByColumn(){this.thfGrid.applyFilterByColumnProps([])}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-aggregates-doc"]],viewQuery:function(a,o){if(a&1&&F(ko,5),a&2){let l;D(l=P())&&(o.thfGrid=l.first)}},standalone:!1,decls:8,vars:20,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["p-label","Limpa filtros por coluna",1,"po-mb-2","po-mt-1",3,"p-click"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-action-excel","t-action-pdf","t-aggregates-config","t-aggregates","t-filter-column-properties","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Totalizador e Filtro por Colunas"),t(),r(3,"po-divider",2),i(4,"po-button",3),f("p-click",function(){return o.clearFiltersByColumn()}),t(),r(5,"thf-grid",4,0)(7,"app-code-accordion-doc",5),t()),a&2&&(d(5),m("t-actions-filter",!0)("t-columns",o.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",o.itemsTotalizador)("t-selectable",!0)("t-selectable-entire-line",!1)("t-show-densification-configuration",!0)("t-action-excel",!0)("t-action-pdf",!0)("t-aggregates-config",o.aggregateConfig)("t-aggregates",o.aggregatesDescriptor)("t-filter-column-properties",o.filterColumnProperties)("t-show-footer-aggregates",!0)("t-height",450),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)("othersCode",o.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[B,h,v,Z,C],encapsulation:2})}}return p})();var Nt=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="column"
    [t-height]="400"
  />

`,Qt=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';

@Component({
    selector: 'app-thf-grid-basic-doc',
    templateUrl: './thf-grid-basic-doc.component.html',
    styleUrl: './thf-grid-basic-doc.component.css',
    standalone: false
})
export class ThfGridBasicDocComponent {
column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}

`;var Bt=(()=>{class p{constructor(){this.htmlCode=Nt,this.tsCode=Qt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),r(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-columns",o.column)("t-height",400),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();var Ze=(()=>{class p{constructor(n){this.httpClient=n}deleteItem(n,a,o){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+o)}static{this.\u0275fac=function(a){return new(a||p)(tt(yt))}}static{this.\u0275prov=et({token:p,factory:p.\u0275fac,providedIn:"root"})}}return p})();var Ht=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />

`,Wt=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';

@Component({
    selector: 'app-thf-grid-delete-service-doc',
    templateUrl: './thf-grid-delete-service-doc.component.html',
    styleUrl: './thf-grid-delete-service-doc.component.css',
    providers: [ThfDeleteService],
    standalone: false
})
export class ThfGridDeleteServiceDocComponent {
literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) { }

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: 'Tem certeza que deseja excluir ' + event.name + '?',
    };
  }
}

`,Ut=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}

`;var $t=(()=>{class p{constructor(n){this.serviceDeleteApi=n,this.htmlCode=Ht,this.tsCode=Wt,this.serviceCode=Ut,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(n){this.literals={bodyDelete:"Tem certeza que deseja excluir "+n.name+"?"}}static{this.\u0275fac=function(a){return new(a||p)(z(Ze))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[pt([Ze])],decls:6,vars:11,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-selectable-entire-line","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),r(3,"po-divider",1),i(4,"thf-grid",2),f("t-selected",function(E){return o.selectedItem(E)}),t(),r(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-action-delete",!0)("t-columns",o.column)("t-height",400)("t-literals",o.literals)("t-selectable",!0)("t-selectable-entire-line",!1)("t-service-delete-api",o.serviceDeleteApi),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)("serviceCode",o.serviceCode)("showServiceButton",!0))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();var Jt=`<thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-components-size]="componentsSize"
    [t-columns]="columns"
    [t-container]="otherProperties.includes('container')"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-show-footer-aggregates]="
      otherProperties.includes('showFooterAggregates')
    "
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="columnsName"
        [(ngModel)]="columnsName"
        p-columns="4"
        p-label="Columns"
        [p-options]="columnsOptions"
        (p-change)="updateColumns()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="selection"
        p-label="Selection"
        p-columns="4"
        [p-options]="selectionOptions"
        [(ngModel)]="selection"
        (p-change)="changeSelectionOptions()"
      ></po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="otherProperties"
        p-label="Other Properties"
        [p-columns]="4"
        [p-options]="otherPropertiesOptions"
        [(ngModel)]="otherProperties"
        (p-change)="changeOtherProperties()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        name="spacing"
        p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
        p-label="Spacing"
        [p-columns]="4"
        [p-options]="spacingOptions"
        [(ngModel)]="spacing"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        class="po-lg-6"
        name="componentsSize"
        [(ngModel)]="componentsSize"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>

      <po-radio-group
        class="po-lg-6"
        name="filterinputModeValue"
        p-label="Filter Input Mode"
        [(ngModel)]="filterinputModeValue"
        [p-options]="filterModeOptions"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6"
        p-label="Min Resizable Width"
        [(ngModel)]="minResizableValue"
        [disabled]="!resizable"
      ></po-number>
      <po-number
        class="po-md-6"
        p-label="Max Resizable Width"
        [(ngModel)]="maxResizableValue"
        [disabled]="!resizable"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Height"
        [(ngModel)]="height"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Max Height"
        [(ngModel)]="maxHeight"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Min Height"
        [(ngModel)]="minHeight"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="literals"
        p-label="Literals"
        p-help='{"noData": "Sem dados a serem exibidos"}'
        [(ngModel)]="literals"
        (p-change-model)="changeLiterals()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="sort"
        p-label="Sort"
        p-help='[{ "field":"name", "dir":"asc" }]'
        [(ngModel)]="sort"
        (p-change-model)="changeSort()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-12" style="display: flex">
      <div style="display: flex; flex-wrap: wrap">
        <po-checkbox-group
          class="po-lg-6"
          name="pagination"
          p-label="Pagination"
          [p-options]="paginationOptions"
          [(ngModel)]="pagination"
          (p-change)="changePagination()"
        ></po-checkbox-group>

        <po-textarea
          class="po-lg-6"
          name="optionsPage"
          p-label="Options Page"
          p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
          [(ngModel)]="optionsPage"
          (p-change-model)="changeOptionsPage()"
          [disabled]="!pagination.includes('pageable')"
        ></po-textarea>
      </div>
    </po-container>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-6"
      p-label="Restore"
      (p-click)="restore()"
    >
    </po-button>
  </div>
`,Kt=`import { AfterViewInit, Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent implements AfterViewInit {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email', 'over'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' },
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc',
    },
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = [
    'actionsFilter',
    'draggable',
    'container',
    'groupable',
    'sortable',
    'striped',
    'virtualScroll',
  ];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MORE_VERT',
      fixed: true,
    },
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true },
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large },
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' },
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Container', value: 'container' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration',
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' },
    { label: 'Show Footer Aggregates', value: 'showFooterAggregates' },
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false },
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com',
      over: 95.5,
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com',
      over: 96,
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com',
      over: 1100.5,
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com',
      over: 1200.5,
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com',
      over: 300.89,
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com',
      over: 50.5,
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com',
      over: 35,
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com',
      over: 0.5,
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com',
      over: 100,
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com',
      over: 100.5,
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com',
      over: 950,
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com',
      over: 99.99,
    },
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    {
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' },
    { value: 'over', label: 'Currency' },
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date',
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime',
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    over: <ThfGridColumn>{
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' },
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions')
      ? this.customAction
      : [];

    const isVirtualScrollEnabled =
      this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map((option) => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(
        (prop) => prop !== 'textWrap'
      );
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc',
        },
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email', 'over'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = [
      'actionsFilter',
      'container',
      'draggable',
      'groupable',
      'sortable',
      'striped',
      'virtualScroll',
    ];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
`;var Mo=()=>[];function Lo(p,T){if(p&1){let n=L();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),b("ngModelChange",function(o){c(n);let l=s();return S(l.columnsName,o)||(l.columnsName=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),b("ngModelChange",function(o){c(n);let l=s();return S(l.selection,o)||(l.selection=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),b("ngModelChange",function(o){c(n);let l=s();return S(l.otherProperties,o)||(l.otherProperties=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),b("ngModelChange",function(o){c(n);let l=s();return S(l.spacing,o)||(l.spacing=o),u(o)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),b("ngModelChange",function(o){c(n);let l=s();return S(l.componentsSize,o)||(l.componentsSize=o),u(o)}),t(),i(11,"po-radio-group",14),b("ngModelChange",function(o){c(n);let l=s();return S(l.filterinputModeValue,o)||(l.filterinputModeValue=o),u(o)}),t()(),i(12,"po-container",15)(13,"po-number",16),b("ngModelChange",function(o){c(n);let l=s();return S(l.minResizableValue,o)||(l.minResizableValue=o),u(o)}),t(),i(14,"po-number",17),b("ngModelChange",function(o){c(n);let l=s();return S(l.maxResizableValue,o)||(l.maxResizableValue=o),u(o)}),t()(),i(15,"po-container",15)(16,"po-number",18),b("ngModelChange",function(o){c(n);let l=s();return S(l.height,o)||(l.height=o),u(o)}),t(),i(17,"po-number",19),b("ngModelChange",function(o){c(n);let l=s();return S(l.maxHeight,o)||(l.maxHeight=o),u(o)}),t(),i(18,"po-number",20),b("ngModelChange",function(o){c(n);let l=s();return S(l.minHeight,o)||(l.minHeight=o),u(o)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),b("ngModelChange",function(o){c(n);let l=s();return S(l.literals,o)||(l.literals=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),b("ngModelChange",function(o){c(n);let l=s();return S(l.sort,o)||(l.sort=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),b("ngModelChange",function(o){c(n);let l=s();return S(l.pagination,o)||(l.pagination=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.changePagination())}),t(),i(26,"po-textarea",26),b("ngModelChange",function(o){c(n);let l=s();return S(l.optionsPage,o)||(l.optionsPage=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),f("p-click",function(){c(n);let o=s();return u(o.restore())}),t()()}if(p&2){let n=s();d(2),y("ngModel",n.columnsName),m("p-options",n.columnsOptions),d(2),m("p-options",n.selectionOptions),y("ngModel",n.selection),d(2),m("p-columns",4)("p-options",n.otherPropertiesOptions),y("ngModel",n.otherProperties),d(2),m("p-columns",4)("p-options",n.spacingOptions),y("ngModel",n.spacing),d(2),y("ngModel",n.componentsSize),m("p-options",n.componentsSizeOptions),d(),y("ngModel",n.filterinputModeValue),m("p-options",n.filterModeOptions),d(2),y("ngModel",n.minResizableValue),m("disabled",!n.resizable),d(),y("ngModel",n.maxResizableValue),m("disabled",!n.resizable),d(2),y("ngModel",n.height),d(),y("ngModel",n.maxHeight),d(),y("ngModel",n.minHeight),d(2),y("ngModel",n.literals),d(2),y("ngModel",n.sort),d(3),m("p-options",n.paginationOptions),y("ngModel",n.pagination),d(),y("ngModel",n.optionsPage),m("disabled",!n.pagination.includes("pageable"))}}var Xt=(()=>{class p{constructor(n){this.poNotification=n,this.htmlCode=Jt,this.tsCode=Kt,this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=be.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:a=>{this.poNotification.information(`${a.id} - ${a.name}`)},icon:"ICON_MORE_VERT",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:be.ExtraSmall},{label:"Small",value:be.Small},{label:"Medium",value:be.Medium},{label:"Large",value:be.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"},{label:"Show Footer Aggregates",value:"showFooterAggregates"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com",over:95.5},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com",over:96},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com",over:1100.5},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com",over:1200.5},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com",over:300.89},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com",over:50.5},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com",over:35},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com",over:.5},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com",over:100},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com",over:100.5},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com",over:950},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com",over:99.99}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"},{value:"over",label:"Currency"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},over:{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}}}ngOnInit(){this.restore()}changeEvent(n){this.event=n}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch(n){this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch(n){this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let n=this.otherProperties.includes("virtualScroll"),a=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(o=>o.value==="textWrap"?se(de({},o),{disabled:n}):o),n&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(o=>o!=="textWrap")),this.resizable=a}changePagination(){let n=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!n,this.paginationOptions[2].disabled=!n,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let n=this.selection.includes("selectable");this.selectionOptions[1].disabled=!n,this.selectionOptions[2].disabled=!n,this.selectionOptions[3].disabled=!n,this.selectionOptions[4].disabled=!n,this.selectionOptions[5].disabled=!n,this.selectionOptions[6].disabled=!n,this.selectionOptions[7].disabled=!n,this.selectionOptions[8].disabled=!n,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch(n){this.customSort=[{field:"",dir:"asc"}]}}openEmail(n){window.open(`mailto:${n}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=be.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(n=>this.columns.push(this.columnsDefinition[n]))}static{this.\u0275fac=function(a){return new(a||p)(z(ie))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:49,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-show-footer-aggregates","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1&&(i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),r(3,"po-divider",2),i(4,"thf-grid",3),f("t-change-fixed-columns",function(){return o.changeEvent("t-change-fixed-columns")})("t-change-order-column",function(){return o.changeEvent("t-change-order-column")})("t-change-page-size",function(){return o.changeEvent("t-change-page-size")})("t-change-sort-column",function(){return o.changeEvent("t-change-sort-column")})("t-change-visible-columns",function(){return o.changeEvent("t-change-visible-columns")})("t-change-options-column-manager",function(){return o.changeEvent("t-change-options-column-manager")})("t-changed-density",function(){return o.changeEvent("t-changed-density")})("t-delete-item",function(){return o.changeEvent("t-delete-item")})("t-delete-items",function(){return o.changeEvent("t-delete-items")})("t-delete-item-error",function(){return o.changeEvent("t-delete-item-error")})("t-filter-item-error",function(){return o.changeEvent("t-filter-item-error")})("t-restore-column-manager",function(){return o.changeEvent("t-restore-column-manager")})("t-selected",function(){return o.changeEvent("t-selected")})("t-all-selected",function(){return o.changeEvent("t-all-selected")})("t-unselected",function(){return o.changeEvent("t-unselected")})("t-all-unselected",function(){return o.changeEvent("t-all-unselected")})("t-change-group",function(){return o.changeEvent("t-change-group")})("t-rows-selected",function(){return o.changeEvent("t-rows-selected")}),t(),i(5,"po-container",4),r(6,"po-info",5),t(),r(7,"app-code-accordion-doc",6),U(8,Lo,29,27,"ng-template",null,0,X),t()),a&2){let l=$(9);d(4),m("t-action-delete",o.selection.includes("actionDelete"))("t-action-edit",o.selection.includes("actionEdit"))("t-action-excel",o.selection.includes("actionExcel"))("t-action-pdf",o.selection.includes("actionPdf"))("t-actions",o.actions||me(48,Mo))("t-actions-filter",o.otherProperties.includes("actionsFilter"))("t-actions-right",o.otherProperties.includes("actionRight"))("t-components-size",o.componentsSize)("t-columns",o.columns)("t-container",o.otherProperties.includes("container"))("t-draggable",o.otherProperties.includes("draggable"))("t-filter-input-mode",o.filterinputModeValue)("t-groupable",o.otherProperties.includes("groupable"))("t-height",o.height)("t-max-height",o.maxHeight)("t-min-height",o.minHeight)("t-hide-columns-manager",o.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",o.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",o.selection.includes("hideBatchActions"))("t-hide-select-all",o.selection.includes("hideSelectAll"))("t-hide-table-search",o.otherProperties.includes("hideTableSearch"))("t-literals",o.literalsCustom)("t-loading",o.otherProperties.includes("loading"))("t-max-resizable-width",o.maxResizableValue)("t-min-resizable-width",o.minResizableValue)("t-options-paging",o.customOptionsPage)("t-pageable",o.pagination.includes("pageable"))("t-resizable",o.resizable)("t-selectable",o.selection.includes("selectable"))("t-selectable-entire-line",o.selection.includes("selectableEntireLine"))("t-show-densification-configuration",o.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",o.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",o.pagination.includes("showMoreDisabled"))("t-show-more-visible",o.pagination.includes("showMoreVisible"))("t-single-select",o.selection.includes("singleSelect"))("t-sort",o.customSort)("t-sortable",o.otherProperties.includes("sortable"))("t-spacing",o.spacing)("t-striped",o.otherProperties.includes("striped"))("t-text-wrap",o.otherProperties.includes("textWrap"))("t-virtual-scroll",o.otherProperties.includes("virtualScroll"))("t-show-footer-aggregates",o.otherProperties.includes("showFooterAggregates"))("t-items",o.items),d(2),m("p-value",o.event),d(),m("properties",!0)("dynamicTemplate",l)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[j,Q,B,h,v,ce,te,Re,Ee,xe,Z,C],encapsulation:2})}}return p})();var Yt=`<thf-grid
    #gridComponent
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-auto-size]="true"
    [t-columns]="columns"
    [t-actions-filter]="true"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-actions-right]="true"
    [t-draggable]="true"
    [t-groupable]="true"
    [t-height]="400"
    [t-edit-properties]="editProperties"
  />

`,ei=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
 @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', filter: true, editProperties: { disabled: true } },
    { property: 'name', label: 'Nome', filter: true },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper:
          'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate'),
      },
    },
    {
      property: 'city',
      label: 'Cidade',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}

`;var jo=["gridComponent"],ti=(()=>{class p{constructor(){this.htmlCode=Yt,this.tsCode=ei,this.columns=[{property:"id",label:"Id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",filter:!0,editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(n,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(n)}setFormGroup(n){return this.form=new N({id:new g(n.id,[I.required]),name:new g(n.name),city:new g(n.city),birthdate:new g(n.birthdate)}),this.form}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(a,o){if(a&1&&F(jo,5),a&2){let l;D(l=P())&&(o.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-selectable-entire-line","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),r(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),a&2&&(d(4),m("t-auto-size",!0)("t-columns",o.columns)("t-actions-filter",!0)("t-selectable",!0)("t-selectable-entire-line",!1)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",o.editProperties),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();var ii=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="false"
  [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
/>

<ng-template #nameTemplate let-formControl="formControl">
  <po-input
    #input
    p-additional-help-tooltip="Informe pelo menos o primeiro nome."
    p-placeholder="Informe o nome"
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-error-pattern]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-required-field-error-message]="true"
    (p-keydown)="onKeyDown('name', $event)"
  ></po-input>
</ng-template>
<ng-template #perfilTemplate let-formControl="formControl">
  <po-multiselect
    #multiselect
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-field-error-message]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-additional-help-tooltip]="
      'Marque um ou mais status, conforme necess\xE1rio.'
    "
    [p-options]="[
      { value: 1, label: 'RH' },
      { value: 2, label: 'Almoxarifado' },
      { value: 3, label: 'Vendedor' }
    ]"
    [p-field-label]="'label'"
    [p-field-value]="'value'"
    [p-control-value-with-label]="true"
    (p-keydown)="onKeyDown('otherStatus', $event)"
  ></po-multiselect>
</ng-template>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>`,oi=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        componentEditable: 'input',
        required: true
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
        required: true
      },
    },
    {
      property: 'state',
      label: 'Estado',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.loading = false;
        cityColumn.editProperties.disabled = true;
        cityColumn.editProperties.options = [];
      } else {
        cityColumn.editProperties.disabled = false;
        const stateCode = typeof stateValue === 'object' ? stateValue.value : stateValue;
        cityColumn.editProperties.options = this.getCity(stateCode);
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    const stateCode = typeof value === 'object' ? value?.value : value;
    if (stateCode) {
      cityColumn.editProperties.disabled = false;
      cityColumn.editProperties.options = this.getCity(stateCode);
    } else {
      cityColumn.editProperties.loading = false;
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}

`;var Oo=["modal"],Go=["gridComponent"],No=["multiselect"],Qo=["input"],Bo=(p,T)=>({name:p,perfil:T}),Ho=()=>({value:1,label:"RH"}),Wo=()=>({value:2,label:"Almoxarifado"}),Uo=()=>({value:3,label:"Vendedor"}),$o=(p,T,n)=>[p,T,n];function Jo(p,T){if(p&1){let n=L();i(0,"po-input",14,4),f("p-keydown",function(o){c(n);let l=s();return u(l.onKeyDown("name",o))}),t()}if(p&2){let n=T.formControl;m("p-append-in-body",!0)("formControl",n)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function Ko(p,T){if(p&1){let n=L();i(0,"po-multiselect",15,5),f("p-keydown",function(o){c(n);let l=s();return u(l.onKeyDown("otherStatus",o))}),t()}if(p&2){let n=T.formControl;m("p-append-in-body",!0)("formControl",n)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",dt(12,$o,me(9,Ho),me(10,Wo),me(11,Uo)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function Xo(p,T){if(p&1&&(i(0,"div",12)(1,"pre"),e(2),t()()),p&2){let n=s();d(2),ge(n.getLabelChangedItems())}}var ri=(()=>{class p{constructor(){this.htmlCode=ii,this.tsCode=oi,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",filter:!0,editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(n,a)=>(a==="include"&&!n.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id),this.myForm=new N({name:new g(n.name),status:new g(n.status,[I.min(1)]),values:new g(n.values,[I.required]),perfil:new g(n.perfil,[I.required]),state:new g(n.state),city:new g(n.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(n){console.log("onAfterSave(new): ",n);let a=this.columnWithItems.find(o=>o.property==="city");a?.editProperties&&(a.editProperties.disabled=!0)}onBeforeSave(n,a){return console.log("before new value: ",n),console.log("before old value: ",a),!0}onBeforeInsert(n){console.log("before insert new value: ",n),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,n];let a=this.columnWithItems.find(o=>o.property==="city");return a?.editProperties&&(a.editProperties.disabled=!0),!0}onValidate(n,a){if(console.log("onValidateField:",n,a),a==="state"){this.myForm?.controls.city.setValue(null);let o=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;if(!o)l.editProperties.loading=!1,l.editProperties.disabled=!0,l.editProperties.options=[];else{l.editProperties.disabled=!1;let E=typeof o=="object"?o.value:o;l.editProperties.options=this.getCity(E)}}return!0}handleStateAndCity(n){let a=this.columnWithItems.find(l=>l.property==="city");if(!a?.editProperties)return;let o=typeof n=="object"?n?.value:n;o?(a.editProperties.disabled=!1,a.editProperties.options=this.getCity(o)):(a.editProperties.loading=!1,a.editProperties.disabled=!0)}onBeforeRemove(n){return!0}onAfterRemove(n){return console.log("afterRemove: ",n),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(n,a){if(a.code==="F9"){if(n==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(n==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(n)}}getCity(n){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[n]||[]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(a,o){if(a&1&&F(Oo,7)(Go,5)(No,5)(Qo,5),a&2){let l;D(l=P())&&(o.poModal=l.first),D(l=P())&&(o.thfGrid=l.first),D(l=P())&&(o.multiselect=l.first),D(l=P())&&(o.input=l.first)}},standalone:!1,decls:17,vars:17,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],[1,"code"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","p-append-in-body","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","p-append-in-body","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"]],template:function(a,o){if(a&1&&(i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),r(3,"po-divider"),i(4,"div",7)(5,"po-button",8),f("p-click",function(){return o.finishEditMode()}),t(),i(6,"po-button",9),f("p-click",function(){return o.poModal.open()}),t()(),r(7,"thf-grid",10,0),U(9,Jo,2,5,"ng-template",null,1,X)(11,Ko,2,16,"ng-template",null,2,X),i(13,"po-modal",11,3),k(15,Xo,3,1,"div",12),t(),r(16,"app-code-accordion-doc",13),t()),a&2){let l,E,_=$(10),oo=$(12);d(6),m("p-disabled",((l=o.getChangedItems())==null?null:l.length)===0),d(),m("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-items",o.items)("t-columns",o.columnWithItems)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!1)("t-custom-templates",ke(14,Bo,_,oo)),d(8),q((E=o.getChangedItems())!=null&&E.length?15:-1),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[j,bt,B,h,v,ae,Le,ze,Z,C],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return p})();var ni=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions]="lineActions"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-action-pdf]="true"
  [t-action-excel]="true"
  [t-custom-actions]="customBulkActions"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>

<po-modal
  #bulkEditModal
  p-title="Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)"
  [p-primary-action]="bulkEditModalConfirm"
>
  <po-multiselect [(ngModel)]="editColumnsFilterValues" name="editColumnsFilterValues" p-label="Propriedades para Editar" [p-options]="editColumnsFilter"></po-multiselect>

  @for (column of editColumnsFilter; track column.property) {
    <ng-container *ngIf="editColumnsFilterValues.includes(column.property)">
      @switch (column.editProperties.componentEditable) {
        @case ('combo') {
          <po-combo
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-options]="column.editProperties.options"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @case ('decimal') {
          <po-decimal
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-decimals-length]="column.editProperties.decimalsLength"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @default {
          <po-input
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
      }
    </ng-container>
  }
</po-modal>`,ai=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoDropdownAction, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('bulkEditModal', { static: true }) bulkEditModal!: PoModalComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      time: '09:20:00',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      value_edit_pt: 1000.0,
      value_edit_en: 1000.0,
      value_edit_ru: 1000.0,
      value_edit_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      time: '10:00:00',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      value_edit_pt: 5000.0,
      value_edit_en: 5000.0,
      value_edit_ru: 5000.0,
      value_edit_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      time: '10:45:00',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      value_edit_pt: 3200.0,
      value_edit_en: 3200.0,
      value_edit_ru: 3200.0,
      value_edit_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      time: '11:05:00',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      value_edit_pt: 5500.0,
      value_edit_en: 5500.0,
      value_edit_ru: 5500.0,
      value_edit_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 49000,
      country: 'Russia',
      time: '11:40:00',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      value_edit_pt: 6700.0,
      value_edit_en: 6700.0,
      value_edit_ru: 6700.0,
      value_edit_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      time: '12:10:00',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      value_edit_pt: 2700.49,
      value_edit_en: 2700.49,
      value_edit_ru: 2700.49,
      value_edit_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      time: '12:35:00',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      value_edit_pt: 2000.0,
      value_edit_en: 2000.0,
      value_edit_ru: 2000.0,
      value_edit_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      time: '12:55:00',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      value_edit_pt: 2100.0,
      value_edit_en: 2100.0,
      value_edit_ru: 2100.0,
      value_edit_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      time: '13:00:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      time: '13:25:00',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      value_edit_pt: 1900.0,
      value_edit_en: 1900.0,
      value_edit_ru: 1900.0,
      value_edit_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      time: '13:35:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      time: '14:00:00',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      value_edit_pt: 5900.0,
      value_edit_en: 5900.0,
      value_edit_ru: 5900.0,
      value_edit_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      time: '15:00:00',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      value_edit_pt: 2900.0,
      value_edit_en: 2900.0,
      value_edit_ru: 2900.0,
      value_edit_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      time: '16:00:00',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      time: '17:00:00',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      time: '18:00:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      time: '19:00:00',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      value_edit_pt: 3070.5,
      value_edit_en: 3070.5,
      value_edit_ru: 3070.5,
      value_edit_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      time: '20:00:00',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      value_edit_pt: 3500.5,
      value_edit_en: 3500.5,
      value_edit_ru: 3500.5,
      value_edit_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'caption-tag-11', label: 'Available' },
        { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
        { value: 'closed', color: 'caption-tag-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'time',
      label: 'Time',
      type: 'time',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'timepicker',
        helper: 'Informe o hor\xE1rio desejado.',
        placeholder: 'HH:mm:ss',
        keydown: this.onKeyDown.bind(this, 'time'),
      }
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'en',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'pt',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'ru',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'es',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_edit_en',
      label: 'Value Edit (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_edit_pt',
      label: 'Value Edit (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_edit_ru',
      label: 'Value Edit (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_edit_es',
      label: 'Value Edit (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
    { field: 'value_edit_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_edit_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_edit_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_edit_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  lineActions: Array<ThfTableAction> = [
    {
      label: 'Detalhes',
      action: (e: any) => {
        this.poNotificationService.success('Item ' + e.id + ' com destino a ' + e.destination + ' no valor de ' + e.value)
      },
      icon: 'ICON_INFO'
    }
  ];

  customBulkActions: Array<PoDropdownAction> = [
    { label: 'Editar selecionados (custom action)', action: this.editSelected.bind(this) },
    { label: 'Excluir selecionados (custom action)', action: this.bulkDelete.bind(this) }
  ]

  editColumnsFilter: Array<any> = [];
  editColumnsFilterValues: Array<string> = [];

  bulkEditModalConfirm: PoModalAction = {
    label: 'Confirmar',
    action: this.bulkEdit.bind(this)
  };

  constructor(private readonly poNotificationService: PoNotificationService) {}

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          time: new FormControl(dataItem.time, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
          value_edit_en: new FormControl(dataItem.value_edit_en, [Validators.required]),
          value_edit_pt: new FormControl(dataItem.value_edit_pt, [Validators.required]),
          value_edit_ru: new FormControl(dataItem.value_edit_ru, [Validators.required]),
          value_edit_es: new FormControl(dataItem.value_edit_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  editSelected() {
    const editableColumns = this.columnWithItems.filter(
      (column) => ['status', 'value'].includes(column.property)
    );
    
    this.editColumnsFilter = editableColumns.map((column) => ({
      label: column.label,
      value: column.property,
      property: column.property,
      valueModel: '',
      required: column.editProperties?.required,
      editProperties: column.editProperties,
    }));
      
    this.bulkEditModal.open();
  }

  bulkEdit() {
    const selectedItems = this.thfGrid.getSelectedRows();

    const updatedColumns =
      this.editColumnsFilter
        .filter(item => this.editColumnsFilterValues.includes(item.property))
        .filter(item => item.valueModel !== '');

    for (const updatedColumn of updatedColumns) {
      for (const item of selectedItems) {
        item[updatedColumn.property] = updatedColumn.valueModel;
        item.$edited = true;
        this.thfGrid.updateItem(item, item);
        this.thfGrid.unselectRowItem(item);
      }

      updatedColumn.valueModel = '';
    }

    this.editColumnsFilterValues = [];

    this.bulkEditModal.close();
  }

  bulkDelete() {
    const selectedItems = this.thfGrid.getSelectedRows();

    for (const item of selectedItems) {
      item.$removed = true;
      this.thfGrid.updateItem(item, item);
      this.thfGrid.unselectRowItem(item);
    }

    this.poNotificationService.success('Itens exclu\xEDdos com sucesso!');
  }
}
`;var er=["modal"],tr=["gridComponent"],ir=["bulkEditModal"],or=(p,T)=>T.property;function rr(p,T){if(p&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),p&2){let n=s();d(2),ge(n.getLabelChangedItems())}}function nr(p,T){if(p&1){let n=L();i(0,"po-combo",16),b("ngModelChange",function(o){c(n);let l=s(2).$implicit;return S(l.valueModel,o)||(l.valueModel=o),u(o)}),t()}if(p&2){let n=s(2).$implicit;m("p-label",_e(n.label)),y("ngModel",n.valueModel),m("p-options",n.editProperties.options)("p-required",n.required)("p-placeholder",n.editProperties.placeholder)("p-disabled",n.editProperties.disabled)}}function ar(p,T){if(p&1){let n=L();i(0,"po-decimal",17),b("ngModelChange",function(o){c(n);let l=s(2).$implicit;return S(l.valueModel,o)||(l.valueModel=o),u(o)}),t()}if(p&2){let n=s(2).$implicit;m("p-label",_e(n.label)),y("ngModel",n.valueModel),m("p-decimals-length",n.editProperties.decimalsLength)("p-required",n.required)("p-placeholder",n.editProperties.placeholder)("p-disabled",n.editProperties.disabled)}}function lr(p,T){if(p&1){let n=L();i(0,"po-input",18),b("ngModelChange",function(o){c(n);let l=s(2).$implicit;return S(l.valueModel,o)||(l.valueModel=o),u(o)}),t()}if(p&2){let n=s(2).$implicit;m("p-label",_e(n.label)),y("ngModel",n.valueModel),m("p-required",n.required)("p-placeholder",n.editProperties.placeholder)("p-disabled",n.editProperties.disabled)}}function pr(p,T){if(p&1&&k(0,nr,1,7,"po-combo",13)(1,ar,1,7,"po-decimal",14)(2,lr,1,6,"po-input",15),p&2){let n,a=s().$implicit;q((n=a.editProperties.componentEditable)==="combo"?0:n==="decimal"?1:2)}}function dr(p,T){if(p&1&&k(0,pr,3,1),p&2){let n=T.$implicit,a=s();q(a.editColumnsFilterValues.includes(n.property)?0:-1)}}var li=(()=>{class p{constructor(n){this.poNotificationService=n,this.htmlCode=ni,this.tsCode=ai,this.items=[{id:11234,country:"Brazil",time:"09:20:00",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",time:"10:00:00",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",time:"10:45:00",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",time:"11:05:00",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",time:"11:40:00",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",time:"12:10:00",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",time:"12:35:00",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",time:"12:55:00",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",time:"13:00:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",time:"13:25:00",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",time:"13:35:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",time:"14:00:00",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",time:"15:00:00",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",time:"16:00:00",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",time:"17:00:00",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",time:"18:00:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",time:"19:00:00",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",time:"20:00:00",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"caption-tag-11",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"time",label:"Time",type:"time",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"timepicker",helper:"Informe o hor\xE1rio desejado.",placeholder:"HH:mm:ss",keydown:this.onKeyDown.bind(this,"time")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:a=>{this.poNotificationService.success("Item "+a.id+" com destino a "+a.destination+" no valor de "+a.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(n,a)=>(a==="include"&&!n.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id),new N({status:new g(n.status,[I.min(1)]),region:new g(n.region,[I.required]),country:new g(n.country,[I.required]),time:new g(n.time,[I.required]),destination:new g(n.destination,[I.required]),value:new g(n.value,[I.required]),value_en:new g(n.value_en,[I.required]),value_pt:new g(n.value_pt,[I.required]),value_ru:new g(n.value_ru,[I.required]),value_es:new g(n.value_es,[I.required]),value_edit_en:new g(n.value_edit_en,[I.required]),value_edit_pt:new g(n.value_edit_pt,[I.required]),value_edit_ru:new g(n.value_edit_ru,[I.required]),value_edit_es:new g(n.value_edit_es,[I.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(n){console.log("onAfterSave(new): ",n)}onBeforeSave(n,a){return console.log("before new value: ",n),console.log("before old value: ",a),!0}onBeforeSaveSubItems(n,a){return console.log("before new value: ",n),console.log("before old value: ",a),!0}onBeforeInsert(n){return console.log("before insert new value: ",n),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,n],!0}onBeforeInsertSubItems(n){n.id=n.$uuidThfIncluded;let a=this.itemsUpdated.find(o=>o.id===this.currentIdItem);return a.dependents=a.dependents?[...a.dependents,n]:[n],!0}onBeforeRemove(n){return!0}onAfterRemove(n){return console.log("afterRemove: ",n),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(n,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(n)}editSelected(){let n=this.columnWithItems.filter(a=>["status","value"].includes(a.property));this.editColumnsFilter=n.map(a=>({label:a.label,value:a.property,property:a.property,valueModel:"",required:a.editProperties?.required,editProperties:a.editProperties})),this.bulkEditModal.open()}bulkEdit(){let n=this.thfGrid.getSelectedRows(),a=this.editColumnsFilter.filter(o=>this.editColumnsFilterValues.includes(o.property)).filter(o=>o.valueModel!=="");for(let o of a){for(let l of n)l[o.property]=o.valueModel,l.$edited=!0,this.thfGrid.updateItem(l,l),this.thfGrid.unselectRowItem(l);o.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let n=this.thfGrid.getSelectedRows();for(let a of n)a.$removed=!0,this.thfGrid.updateItem(a,a),this.thfGrid.unselectRowItem(a);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}static{this.\u0275fac=function(a){return new(a||p)(z(ie))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(a,o){if(a&1&&F(er,7)(tr,5)(ir,7),a&2){let l;D(l=P())&&(o.poModal=l.first),D(l=P())&&(o.thfGrid=l.first),D(l=P())&&(o.bulkEditModal=l.first)}},standalone:!1,decls:18,vars:21,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],[1,"code"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(a,o){if(a&1){let l=L();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),r(3,"po-divider"),i(4,"div",4)(5,"po-button",5),f("p-click",function(){return o.finishEditMode()}),t(),i(6,"po-button",6),f("p-click",function(){return o.poModal.open()}),t()(),r(7,"thf-grid",7,0),i(9,"po-modal",8,1),k(11,rr,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),b("ngModelChange",function(_){return c(l),S(o.editColumnsFilterValues,_)||(o.editColumnsFilterValues=_),u(_)}),t(),we(15,dr,1,1,null,null,or),t(),r(17,"app-code-accordion-doc",12),t()}if(a&2){let l,E;d(6),m("p-disabled",((l=o.getChangedItems())==null?null:l.length)===0),d(),m("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-items",o.items)("t-columns",o.columnWithItems)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-aggregates",o.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",o.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",o.customBulkActions),d(4),q((E=o.getChangedItems())!=null&&E.length?11:-1),d(),m("p-primary-action",o.bulkEditModalConfirm),d(2),y("ngModel",o.editColumnsFilterValues),m("p-options",o.editColumnsFilter),d(),Ae(o.editColumnsFilter),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[j,Q,B,h,v,Fe,Pt,ae,Le,ze,Z,C],encapsulation:2})}}return p})();var pi=`<thf-grid
    [t-items]="products"
    [t-columns]="columns"
    [t-grid-row-actions]="gridRowActions"
    [t-auto-size]="true"
    [t-actions-right]="true"
  />


`,di=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridDynamicPropertiesComponent {
gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}

`;var mi=(()=>{class p{constructor(){this.htmlCode=pi,this.tsCode=di,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:n=>n.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:n=>n.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(n,a){return console.log("Editando produto:",n,"Modo:",a),this.editForm=new N({id:new g(n.id),name:new g(n.name),price:new g(n.price),discount:new g(n.discount),status:new g(n.status)}),this.editForm}onValidate(n,a){return console.log("onValidateField:",n,a),!0}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),r(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-items",o.products)("t-columns",o.columns)("t-grid-row-actions",o.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();var si=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />

`,ci=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];


  ngOnInit() {
    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 100; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\${i}\`,
      };
      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}

`;var cr=["gridComponent"],ui=(()=>{class p{constructor(){this.htmlCode=si,this.tsCode=ci,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let n=[],a=this.items[0];for(let o=1;o<=100;o++){let l=Date.now()+o,E=se(de({},a),{id:l+o,name:`${a.name} ${o}${o}`});n.push(E)}this.items=n}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(a,o){if(a&1&&F(cr,5),a&2){let l;D(l=P())&&(o.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),r(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),a&2&&(d(4),m("t-columns",o.columnWithItems)("t-items",o.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();var Ei=`<thf-splitter>
  <thf-splitter-pane>
    <po-page-default
      p-title="Empresas"
      [p-subtitle]="subtitleMainGrid"
      [p-actions]="leftActions"
      [p-helper]="helperMainGrid"
      p-page-header-type="primary"
      p-page-actions-layout="mixed"
    >
      <thf-grid
        #mainGrid
        [t-items]="mainGridItems"
        [t-columns]="mainGridColumns"
        [t-grid-row-actions]="mainGridRowsActions"
        [t-actions-right]="true"
        [t-selectable]="true"
        [t-single-select]="true"
        [t-selectable-removed]="true"
        [t-selectable-entire-line]="false"
        (t-selected)="handleMainGridSelection($event)"
        (t-unselected)="handleMainGridUnselection($event)"
        (t-change-row-state-filter)="onMainGridRowStateFilter($event)"
        (t-before-duplicate)="beforeDuplicateMainGrid($event)"
        (t-after-duplicate)="afterDuplicateMainGrid($event)"
      />
    </po-page-default>
  </thf-splitter-pane>

  <thf-splitter-pane>

    <po-page-default
      p-title="Filial"
      p-subtitle="Controle de funcionarios"
      [p-actions]="rightActions"
      p-page-header-type="secondary"
      p-page-actions-layout="dropdown"
      (p-back)="onBack()"
    >
      <thf-grid
        #childGrid
        [t-items]="childGridItems"
        [t-columns]="childGridColumns"
        [t-grid-row-actions]="childGridRowsActions"
        [t-disabled-include-button]="childGridDisabledIncludeButton"
        [t-actions-right]="true"
        [t-selectable]="false"
        [t-single-select]="false"
        (t-after-duplicate)="afterDuplicateChildGrid($event)"
      />
    </po-page-default>
  </thf-splitter-pane>
</thf-splitter>`,xi=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-parent-detail-editing-doc',
  templateUrl: './thf-grid-parent-detail-editing.component.html',
  styleUrls: ['./thf-grid-parent-detail-editing.component.css'],
  standalone: false,
})
export class ThfGridParentDetailEditingComponent {
  @ViewChild('mainGrid', { static: false }) mainGrid!: ThfGridComponent;
  @ViewChild('childGrid', { static: false }) childGrid!: ThfGridComponent;

  readonly leftActions: Array<PoPageAction> = [
    {
      label: '',
      icon: 'an an-star',
      action: () => window.open('https://github.com/po-ui/po-angular'),
    },
    {
      label: 'Exportar',
      icon: 'an an-export',
      action: () => this.notify('Exportar'),
    },
  ];

  readonly rightActions: Array<PoPageAction> = [
    {
      label: 'Filtrar',
      icon: 'an an-funnel',
      action: () => this.notify('Filtrar'),
    },
    {
      label: 'Atualizar',
      icon: 'an an-arrows-clockwise',
      action: () => this.notify('Atualizar'),
    },
  ];
  
  mainGridTitle = 'Equipes (Tabela Pai)';
  subtitleMainGrid = 'Exibindo <b>4 registros carregados</b> de <b>4</b>';
  helperMainGrid: PoHelperOptions = {
    title: 'Como gerenciar os dados?',
    content:
      "<b>Adicione</b>, <b>edite</b>, <b>remova</b> ou <b>duplique</b> registros diretamente na tabela. <u>Nota</u>: Ao selecionar uma <i>Equipe</i>, a tabela ao lado ser\xE1 atualizada automaticamente para exibir e permitir a edi\xE7\xE3o dos <i>Her\xF3is</i> vinculados a ela."
  };
  childGridTitle = 'Her\xF3is (Tabela Filha)';

  disabledIncludeButton: boolean = false;
  currentIdItem: string | number | undefined;
  private duplicatingHeroes: Array<any> | null = null;

  mainGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da equipe'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'caption-tag-11', label: 'Ativo' },
        { value: 'em-missao', color: 'caption-tag-09', label: 'Em miss\xE3o' },
        { value: 'inativo', color: 'caption-tag-06', label: 'Inativo' },
        { value: 'ferido', color: 'caption-tag-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  mainGridRowsActions!: ThfGridRowActions;
  mainGridItems: Array<any> = [
    {
      id: 1,
      name: 'Vingadores',
      status: 'ativo',
      heroes: [
        { id: 11, name: 'Homem de Ferro', status: 'ativo' },
        { id: 12, name: 'Capit\xE3o Am\xE9rica', status: 'em-missao' },
        { id: 13, name: 'Thor', status: 'ativo' }
      ]
    },
    {
      id: 2,
      name: 'X-man',
      status: 'em-missao',
      heroes: [
        { id: 21, name: 'Wolverine', status: 'ativo' },
        { id: 22, name: 'Ciclope', status: 'reserva' },
        { id: 23, name: 'Jean Grey', status: 'ferido' }
      ]
    },
    {
      id: 3,
      name: 'Jovens Tit\xE3s',
      status: 'ativo',
      heroes: [
        { id: 30, name: 'Ciborgue', status: 'ativo' },
        { id: 31, name: 'Estelar', status: 'ativo' },
        { id: 32, name: 'Mutano', status: 'ativo' },
        { id: 33, name: 'Ravena', status: 'reserva' },
        { id: 34, name: 'Robin', status: 'ativo' },
      ]
    },
    {
      id: 4,
      name: 'Liga da Justi\xE7a',
      status: 'ativo',
      heroes: [
        { id: 41, name: 'Superman', status: 'ativo' },
        { id: 42, name: 'Batman', status: 'reserva' },
        { id: 43, name: 'Mulher Maravilha', status: 'em-missao' }
      ]
    }
  ];
  mainGridItemsUpdated: Array<any> = [];
  mainGridSelectedItem: any;

  childGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da empresa'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'caption-tag-11', label: 'Ativo' },
        { value: 'em-missao', color: 'caption-tag-09', label: 'Em miss\xE3o' },
        { value: 'reserva', color: 'caption-tag-08', label: 'Reserva' },
        { value: 'inativo', color: 'caption-tag-06', label: 'Inativo' },
        { value: 'ferido', color: 'caption-tag-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'reserva', label: 'Reserva' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  childGridRowsActions!: ThfGridRowActions;
  childGridItems: Array<any> = [];
  childGridItemsUpdated: Array<any> = [];
  childGridSelectedItem: any;
  childGridDisabledIncludeButton: boolean = true;

  constructor(private readonly notificationService: PoNotificationService) {}

  ngOnInit() {
    this.mainGridRowsActions = {
      title: this.mainGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = this.duplicatingHeroes ?? [];
          this.duplicatingHeroes = null;
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      afterRemove: this.afterRemoveMainGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveMainGrid.bind(this)
    };

    this.mainGridItemsUpdated = [...this.mainGridItems];

    this.childGridRowsActions = {
      title: this.childGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      change: this.changeChildGrid.bind(this),
      beforeUndoRemove: this.beforeUndoRemoveChildGrid.bind(this),
      afterRemove: this.afterRemoveChildGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveChildGrid.bind(this),
    };

    this.childGridItemsUpdated = [];
  }

  handleMainGridSelection(event: any) {
    console.log('Selected item from main grid: ', event);
    this.mainGridSelectedItem = event;
    this.childGridItems = event.heroes || [];
    this.childGridDisabledIncludeButton = !!event.$removed;
    this.childGridRowsActions.title = this.childGridTitle + ' - ' + event.name;

    if (event.$removed) {
      this.childGrid.setRowStateFilter('removed', false, false);
    } else {
      this.childGrid.setRowStateFilter('active', false, false);
    }
  }

  handleMainGridUnselection(event?: any) {
    console.log('Unselected item from main grid: ', event);
    this.mainGridSelectedItem = undefined;
    this.childGridItems = [];
    this.childGridDisabledIncludeButton = true;
    this.childGridRowsActions.title = this.childGridTitle;
  }

  afterRemoveMainGrid(removedItem: any) {
    console.log('Removed item from main grid: ', removedItem);
    removedItem.status = 'inativo';
    removedItem.heroes.forEach((hero: any) => {
      hero.$removed = true;
      hero.status = 'inativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  afterUndoRemoveMainGrid(undoRemovedItem: any) {
    console.log('Undo removed item from main grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    undoRemovedItem.heroes.forEach((hero: any) => {
      hero.$removed = false;
      hero.status = 'ativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  beforeUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Before undo remove item from child grid: ', undoRemovedItem);
    const parentItem = this.mainGrid.gridData.find((item: any) =>
      item.heroes?.includes(undoRemovedItem)
    );
    if (parentItem?.$removed) {
      this.notificationService.warning('N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo.');
      return false;
    }
    return true;
  }

  afterRemoveChildGrid(removedItem: any) {
    console.log('Removed item from child grid: ', removedItem);
    removedItem.status = 'inativo';
    this.childGrid.updateItem(removedItem, removedItem);
  }

  afterUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Undo removed item from child grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    this.childGrid.updateItem(undoRemovedItem, undoRemovedItem);
  }

  beforeDuplicateMainGrid(event: any) {
    console.log('Before duplicate main grid: ', event);
    this.duplicatingHeroes = structuredClone(event.sourceRow.heroes || []);
  }

  afterDuplicateMainGrid(event: any) {
    console.log('After duplicate main grid: ', event);
  }

  afterDuplicateChildGrid(event: any) {
    console.log('After duplicate child grid: ', event);
    if (this.mainGridSelectedItem) {
      const heroes = this.mainGridSelectedItem.heroes;
      const sourceIndex = heroes.findIndex((h: any) => h.id === event.sourceRow.id);
      heroes.splice(sourceIndex > -1 ? sourceIndex + 1 : heroes.length, 0, event.duplicatedRow);
    }
  }

  changeChildGrid(changedItems: any) {
    console.log('Child grid change event: ', changedItems);
    if (this.mainGridSelectedItem) {
      this.mainGridSelectedItem.heroes = this.childGrid.gridData;
    }
  }

  onMainGridRowStateFilter(filter: any) {
    // Aplica novamente a sele\xE7\xE3o do item
    if (
      this.mainGridSelectedItem !== undefined && (
        (filter === 'active' && !this.mainGridSelectedItem?.$removed) ||
        (filter === 'removed' && this.mainGridSelectedItem?.$removed)
      )
    ) {
      this.mainGrid.selectRowItem(this.mainGridSelectedItem);
    }

    this.childGrid.setRowStateFilter(filter, false, false);
  }

  onBack(): void {
    this.notify('Voltar (page secondary)');
  }

  private notify(message: string): void {
    this.notificationService.information(message);
  }
}
`;var Er=["mainGrid"],xr=["childGrid"],yi=(()=>{class p{constructor(n){this.notificationService=n,this.htmlCode=Ei,this.tsCode=xi,this.leftActions=[{label:"",icon:"an an-star",action:()=>window.open("https://github.com/po-ui/po-angular")},{label:"Exportar",icon:"an an-export",action:()=>this.notify("Exportar")}],this.rightActions=[{label:"Filtrar",icon:"an an-funnel",action:()=>this.notify("Filtrar")},{label:"Atualizar",icon:"an an-arrows-clockwise",action:()=>this.notify("Atualizar")}],this.mainGridTitle="Equipes (Tabela Pai)",this.subtitleMainGrid="Exibindo <b>4 registros carregados</b> de <b>4</b>",this.helperMainGrid={title:"Como gerenciar os dados?",content:"<b>Adicione</b>, <b>edite</b>, <b>remova</b> ou <b>duplique</b> registros diretamente na tabela. <u>Nota</u>: Ao selecionar uma <i>Equipe</i>, a tabela ao lado ser\xE1 atualizada automaticamente para exibir e permitir a edi\xE7\xE3o dos <i>Her\xF3is</i> vinculados a ela."},this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.duplicatingHeroes=null,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"caption-tag-11",label:"Ativo"},{value:"em-missao",color:"caption-tag-09",label:"Em miss\xE3o"},{value:"inativo",color:"caption-tag-06",label:"Inativo"},{value:"ferido",color:"caption-tag-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"caption-tag-11",label:"Ativo"},{value:"em-missao",color:"caption-tag-09",label:"Em miss\xE3o"},{value:"reserva",color:"caption-tag-08",label:"Reserva"},{value:"inativo",color:"caption-tag-06",label:"Inativo"},{value:"ferido",color:"caption-tag-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItems=[],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(n,a)=>(a==="include"&&!n.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,n.id=n.$uuidThfIncluded,n.heroes=this.duplicatingHeroes??[],this.duplicatingHeroes=null,this.currentIdItem=n.id),new N({name:new g(n.name,[I.required]),status:new g(n.status,[I.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(n,a)=>(a==="include"&&!n.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,n.id=n.$uuidThfIncluded,n.heroes=[],this.currentIdItem=n.id),new N({name:new g(n.name,[I.required]),status:new g(n.status,[I.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(n){console.log("Selected item from main grid: ",n),this.mainGridSelectedItem=n,this.childGridItems=n.heroes||[],this.childGridDisabledIncludeButton=!!n.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+n.name,n.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(n){console.log("Unselected item from main grid: ",n),this.mainGridSelectedItem=void 0,this.childGridItems=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(n){console.log("Removed item from main grid: ",n),n.status="inativo",n.heroes.forEach(a=>{a.$removed=!0,a.status="inativo",this.childGrid.updateItem(a,a)})}afterUndoRemoveMainGrid(n){console.log("Undo removed item from main grid: ",n),n.status="ativo",n.heroes.forEach(a=>{a.$removed=!1,a.status="ativo",this.childGrid.updateItem(a,a)})}beforeUndoRemoveChildGrid(n){return console.log("Before undo remove item from child grid: ",n),this.mainGrid.gridData.find(o=>o.heroes?.includes(n))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(n){console.log("Removed item from child grid: ",n),n.status="inativo",this.childGrid.updateItem(n,n)}afterUndoRemoveChildGrid(n){console.log("Undo removed item from child grid: ",n),n.status="ativo",this.childGrid.updateItem(n,n)}beforeDuplicateMainGrid(n){console.log("Before duplicate main grid: ",n),this.duplicatingHeroes=structuredClone(n.sourceRow.heroes||[])}afterDuplicateMainGrid(n){console.log("After duplicate main grid: ",n)}afterDuplicateChildGrid(n){if(console.log("After duplicate child grid: ",n),this.mainGridSelectedItem){let a=this.mainGridSelectedItem.heroes,o=a.findIndex(l=>l.id===n.sourceRow.id);a.splice(o>-1?o+1:a.length,0,n.duplicatedRow)}}changeChildGrid(n){console.log("Child grid change event: ",n),this.mainGridSelectedItem&&(this.mainGridSelectedItem.heroes=this.childGrid.gridData)}onMainGridRowStateFilter(n){this.mainGridSelectedItem!==void 0&&(n==="active"&&!this.mainGridSelectedItem?.$removed||n==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(n,!1,!1)}onBack(){this.notify("Voltar (page secondary)")}notify(n){this.notificationService.information(n)}static{this.\u0275fac=function(a){return new(a||p)(z(ie))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(a,o){if(a&1&&F(Er,5)(xr,5),a&2){let l;D(l=P())&&(o.mainGrid=l.first),D(l=P())&&(o.childGrid=l.first)}},standalone:!1,decls:14,vars:21,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],["p-title","Empresas","p-page-header-type","primary","p-page-actions-layout","mixed",3,"p-subtitle","p-actions","p-helper"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line"],["p-title","Filial","p-subtitle","Controle de funcionarios","p-page-header-type","secondary","p-page-actions-layout","dropdown",3,"p-back","p-actions"],[3,"t-after-duplicate","t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),r(3,"po-divider"),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-page-default",3)(7,"thf-grid",4,0),f("t-selected",function(E){return o.handleMainGridSelection(E)})("t-unselected",function(E){return o.handleMainGridUnselection(E)})("t-change-row-state-filter",function(E){return o.onMainGridRowStateFilter(E)}),t()()(),i(9,"thf-splitter-pane")(10,"po-page-default",5),f("p-back",function(){return o.onBack()}),i(11,"thf-grid",6,1),f("t-after-duplicate",function(E){return o.afterDuplicateChildGrid(E)}),t()()()(),r(13,"app-code-accordion-doc",7),t()),a&2&&(d(6),m("p-subtitle",o.subtitleMainGrid)("p-actions",o.leftActions)("p-helper",o.helperMainGrid),d(),m("t-items",o.mainGridItems)("t-columns",o.mainGridColumns)("t-grid-row-actions",o.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!1),d(3),m("p-actions",o.rightActions),d(),m("t-items",o.childGridItems)("t-columns",o.childGridColumns)("t-grid-row-actions",o.childGridRowsActions)("t-disabled-include-button",o.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,J,Z,pe,le,C],encapsulation:2})}}return p})();var Si=`<thf-grid
  [t-columns]="columns"
  [t-items]="items"
  [t-height]="400"
  [t-show-more-visible]="showMoreVisible"
  [t-filter-input-mode]="filterInputMode"
  [t-literals]="literals"
  (t-show-more)="loadMore()"
/>

<!-- Placeholder padr\xE3o por modo:
  - basic: "Busca nos registros exibidos"
  - service: "Buscar na tabela"

  Para customizar via t-literals:
  [t-literals]="{ placeholderSearchInputBasic: 'Meu placeholder' }"
-->
`,bi=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-quick-search-doc',
  templateUrl: './thf-grid-quick-search-doc.component.html',
  standalone: false,
})
export class ThfGridQuickSearchDocComponent {
  filterInputMode: string = 'basic';
  showMoreVisible: boolean = true;

  // Customiza\xE7\xE3o opcional do placeholder via literals
  literals: ThfGridLiterals = {
    placeholderSearchInputBasic: 'Digite para filtrar localmente...',
  };

  columns: Array<ThfGridColumn> = [
    { property: 'code', label: 'C\xF3digo' },
    { property: 'product', label: 'Produto' },
    { property: 'category', label: 'Categoria' },
    { property: 'price', label: 'Pre\xE7o', type: 'currency', format: 'BRL' },
  ];

  private readonly allItems = [
    { code: '001', product: 'Notebook Dell Inspiron', category: 'Inform\xE1tica', price: 4500.0 },
    { code: '002', product: 'Mouse Logitech MX', category: 'Perif\xE9ricos', price: 350.0 },
    // ... mais itens
  ];

  private readonly pageSize = 5;
  items: any[] = this.allItems.slice(0, this.pageSize);

  loadMore() {
    const nextItems = this.allItems.slice(this.items.length, this.items.length + this.pageSize);
    this.items = [...this.items, ...nextItems];
    this.showMoreVisible = this.items.length < this.allItems.length;
  }
}
`;function Sr(p,T){if(p&1){let n=L();i(0,"po-input",10),b("ngModelChange",function(o){c(n);let l=s();return S(l.customPlaceholder,o)||(l.customPlaceholder=o),u(o)}),t()}if(p&2){let n=s();y("ngModel",n.customPlaceholder)}}var hi=(()=>{class p{constructor(){this.htmlCode=Si,this.tsCode=bi,this.filterInputMode="basic",this.useCustomLiterals=!1,this.customPlaceholder="Digite para filtrar localmente...",this.filterModeOptions=[{label:"Basic (busca local)",value:"basic"},{label:"Service (busca via API)",value:"service"}],this.columns=[{property:"code",label:"C\xF3digo"},{property:"product",label:"Produto"},{property:"category",label:"Categoria"},{property:"price",label:"Pre\xE7o",type:"currency",format:"BRL"}],this.allItems=[{code:"001",product:"Notebook Dell Inspiron",category:"Inform\xE1tica",price:4500},{code:"002",product:"Mouse Logitech MX",category:"Perif\xE9ricos",price:350},{code:"003",product:"Teclado Mec\xE2nico Redragon",category:"Perif\xE9ricos",price:280},{code:"004",product:"Monitor LG UltraWide",category:"Inform\xE1tica",price:2800},{code:"005",product:"Headset HyperX Cloud",category:"\xC1udio",price:450},{code:"006",product:"Webcam Logitech C920",category:"Perif\xE9ricos",price:520},{code:"007",product:"SSD Samsung 1TB",category:"Armazenamento",price:680},{code:"008",product:"Mem\xF3ria RAM Corsair 16GB",category:"Componentes",price:390},{code:"009",product:"Placa de V\xEDdeo RTX 4060",category:"Componentes",price:2200},{code:"010",product:"Cadeira Gamer ThunderX3",category:"Mobili\xE1rio",price:1500},{code:"011",product:"Hub USB-C Baseus",category:"Perif\xE9ricos",price:180},{code:"012",product:"Impressora HP LaserJet",category:"Impress\xE3o",price:1800},{code:"013",product:"Roteador TP-Link AX1500",category:"Rede",price:320},{code:"014",product:"Tablet Samsung Galaxy Tab",category:"Inform\xE1tica",price:2100},{code:"015",product:"Caixa de Som JBL Flip",category:"\xC1udio",price:650}],this.pageSize=5,this.items=[],this.showMoreVisible=!0,this.items=this.allItems.slice(0,this.pageSize)}loadMore(){let n=this.allItems.slice(this.items.length,this.items.length+this.pageSize);this.items=[...this.items,...n],this.showMoreVisible=this.items.length<this.allItems.length}get literals(){if(this.useCustomLiterals)return{placeholderSearchInputBasic:this.customPlaceholder,placeholderSearchInput:this.customPlaceholder}}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-quick-search-doc"]],standalone:!1,decls:25,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[1,"po-font-text","po-mt-2","po-mb-2"],[1,"po-mb-2",2,"display","flex"],["name","filterInputMode","p-label","t-filter-input-mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-6"],["name","useCustomLiterals","p-label","Usar literal customizada",3,"ngModelChange","ngModel"],["name","customPlaceholder","p-label","Placeholder customizado (t-literals)",1,"po-mt-1",3,"ngModel"],[3,"t-show-more","t-columns","t-items","t-height","t-show-more-visible","t-filter-input-mode","t-literals"],[3,"htmlCode","tsCode"],["name","customPlaceholder","p-label","Placeholder customizado (t-literals)",1,"po-mt-1",3,"ngModelChange","ngModel"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Busca R\xE1pida - Placeholder por Modo"),t(),r(3,"po-divider",1),i(4,"p",2),e(5," O placeholder do campo de busca muda conforme o "),i(6,"code"),e(7,"t-filter-input-mode"),t(),e(8,": no modo "),i(9,"strong"),e(10,"basic"),t(),e(11,' exibe "Busca nos registros exibidos" (busca local), e no modo '),i(12,"strong"),e(13,"service"),t(),e(14,' exibe "Buscar na tabela" (busca via API). Tamb\xE9m \xE9 poss\xEDvel customizar via '),i(15,"code"),e(16,"t-literals"),t(),e(17,". "),t(),i(18,"po-container",3)(19,"po-radio-group",4),b("ngModelChange",function(E){return S(o.filterInputMode,E)||(o.filterInputMode=E),E}),t(),i(20,"div",5)(21,"po-switch",6),b("ngModelChange",function(E){return S(o.useCustomLiterals,E)||(o.useCustomLiterals=E),E}),t(),k(22,Sr,1,1,"po-input",7),t()(),i(23,"thf-grid",8),f("t-show-more",function(){return o.loadMore()}),t(),r(24,"app-code-accordion-doc",9),t()),a&2&&(d(19),y("ngModel",o.filterInputMode),m("p-options",o.filterModeOptions),d(2),y("ngModel",o.useCustomLiterals),d(),q(o.useCustomLiterals?22:-1),d(),m("t-columns",o.columns)("t-items",o.items)("t-height",400)("t-show-more-visible",o.showMoreVisible)("t-filter-input-mode",o.filterInputMode)("t-literals",o.literals),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[j,Q,h,v,te,ae,Me,Z,C],encapsulation:2})}}return p})();var fi=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,gi=`import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      filter: true,
      editProperties: { componentEditable: 'number', disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      filter: true,
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'values',
      label: 'Values',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      filter: true,
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        helper: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      filter: true,
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        helper: 'Valor do tipo date',
      },
    },
    {
      property: 'timepicker',
      label: 'timepicker',
      filter: true,
      type: 'time',
      format: 'HH:mm',
      editProperties: {
        componentEditable: 'timepicker',
        errorMessage: 'Timepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a hora',
        helper: 'Valor do tipo time',
        showSeconds: false,
        placeholder: 'HH:mm'
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        helper: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      filter: true,
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        helper: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      timepicker: '09:00',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      timepicker: '10:00',
      select: '3',
      switch: false,
      decimal: 223.45,
      checkbox: false,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      timepicker: '11:00',
      select: '3',
      switch: true,
      decimal: 323.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      timepicker: '12:00',
      select: '3',
      switch: false,
      decimal: 423.45,
      checkbox: false,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      timepicker: '13:00',
      select: '3',
      switch: true,
      decimal: 523.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      timepicker: '14:00',
      select: '3',
      switch: false,
      decimal: 623.456,
      checkbox: false,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = \`property\` + i;
      this.columnWithItems.push({
        property: prop,
        label: \`Dynamic\` + i,
        editProperties: { componentEditable: 'input', disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\`,
      };
      for (let j = 1; j <= 600; j++) {
        newItem[\`property\${j}\`] = \`Valor \${j}\`;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = [...this.items, ...itemsUpdatedNew];

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.valuesx, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          timepicker: new FormControl(dataItem.timepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group[\`property\${i}\`] = new FormControl(dataItem[\`property\${i}\`]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
`;var hr=["gridComponent"],Vi=(()=>{class p{constructor(){this.htmlCode=fi,this.tsCode=gi,this.columnWithItems=[{property:"id",label:"id",filter:!0,editProperties:{componentEditable:"number",disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",filter:!0,labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text",controlValueWithLabel:!0}},{property:"values",label:"Values",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",filter:!0,editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",filter:!0,type:"date",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"timepicker",label:"timepicker",filter:!0,type:"time",format:"HH:mm",editProperties:{componentEditable:"timepicker",errorMessage:"Timepicker \xE9 obrigat\xF3rio",help:"Entre com a hora",helper:"Valor do tipo time",showSeconds:!1,placeholder:"HH:mm"}},{property:"otherStatus",label:"Outro Status",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",filter:!0,editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",filter:!0,type:"boolean",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",filter:!0,editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",filter:!0,type:"boolean",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",timepicker:"09:00",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",timepicker:"10:00",select:"3",switch:!1,decimal:223.45,checkbox:!1},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",timepicker:"11:00",select:"3",switch:!0,decimal:323.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",timepicker:"12:00",select:"3",switch:!1,decimal:423.45,checkbox:!1},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",timepicker:"13:00",select:"3",switch:!0,decimal:523.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",timepicker:"14:00",select:"3",switch:!1,decimal:623.456,checkbox:!1}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let o=1;o<=600;o++){let l=`property${o}`;this.columnWithItems.push({property:l,label:`Dynamic ${o}`,editProperties:{componentEditable:"input",disabled:!1}})}let n=[],a=this.items[0];for(let o=1;o<=1e4;o++){let l=Date.now()+o,E=se(de({},a),{id:l+o,name:`${a.name} ${o}`});for(let _=1;_<=600;_++)E[`property${_}`]=`Valor ${_}`;n.push(E)}this.items=[...this.items,...n],this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(o,l)=>{l==="include"&&!o.id&&(console.log("mode: ",l),o.id=o.$uuidThfIncluded,o.dependents=[],this.currentIdItem=o.id);let E={name:new g(o.name),status:new g(o.status,[I.min(1)]),values:new g(o.values,[I.required]),valuesx:new g(o.values,[I.required]),otherStatus:new g(o.otherStatus),number:new g(o.number),datepicker:new g(o.datepicker),timepicker:new g(o.timepicker),select:new g(o.select),switch:new g(o.switch),decimal:new g(o.decimal),checkbox:new g(o.checkbox)};for(let _=1;_<=600;_++)E[`property${_}`]=new g(o[`property${_}`]);return this.form=new N(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(n,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(n)}onBeforeSave(n,a){return console.log("before new value: ",n),console.log("before old value: ",a),!0}onBeforeSaveSubItems(n,a){return console.log("before new value: ",n),console.log("before old value: ",a),!0}onBeforeInsert(n){return console.log("before insert new value: ",n),this.itemsUpdated=[...this.itemsUpdated,n],!0}onBeforeInsertSubItems(n){n.id=n.$uuidThfIncluded;let a=this.itemsUpdated.find(o=>o.id===this.currentIdItem);return a.dependents=a.dependents?[...a.dependents,n]:[n],!0}onBeforeRemove(n){return!0}onAfterSave(n){console.log("onAfterSave(new): ",n)}onAfterRemove(n){return console.log("afterRemove: ",n),!0}setFormGroup(n){return this.form=new N({id:new g(n.id,[I.required]),name:new g(n.name),city:new g(n.city),birthdate:new g(n.birthdate),status:new g(n.status),email:new g(n.email)}),this.form}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(a,o){if(a&1&&F(hr,5),a&2){let l;D(l=P())&&(o.thfGrid=l.first)}},standalone:!1,decls:7,vars:13,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-selectable-entire-line","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),r(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),a&2&&(d(4),m("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-columns",o.columnWithItems)("t-items",o.items)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,Z,C],encapsulation:2})}}return p})();function gr(p,T){p&1&&r(0,"app-thf-grid-basic-doc")}function Vr(p,T){p&1&&r(0,"app-thf-grid-editing-inline-doc")}function vr(p,T){p&1&&r(0,"app-thf-grid-row-actions-doc")}function Cr(p,T){p&1&&r(0,"app-thf-grid-aggregates-doc")}function Tr(p,T){p&1&&r(0,"app-thf-grid-editing-fluid-currency-doc")}function Dr(p,T){p&1&&r(0,"app-thf-grid-delete-service-doc")}function Pr(p,T){p&1&&r(0,"app-thf-grid-virtual-doc")}function wr(p,T){p&1&&r(0,"app-thf-grid-dynamic-properties")}function Ar(p,T){p&1&&r(0,"app-thf-grid-auto-fit-scroll")}function _r(p,T){p&1&&r(0,"app-thf-grid-parent-detail-editing-doc")}function kr(p,T){p&1&&r(0,"app-thf-grid-quick-search-doc")}var vi=(()=>{class p{constructor(){this.samples=[{label:"Basic Service",value:"basic"},{label:"Edi\xE7\xE3o em Linha",value:"editing-inline"},{label:"Edi\xE7\xE3o Flu\xEDda",value:"row-actions"},{label:"Totalizador e Filtro por Colunas",value:"aggregates"},{label:"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote",value:"editing-fluid-currency"},{label:"Grid Dele\xE7\xE3o com Servi\xE7o Customizado",value:"delete-service"},{label:"Grid utilizando virtual-columns e virtual-scroll",value:"virtual"},{label:"Edi\xE7\xE3o com Propriedades din\xE2micas",value:"dynamic-properties"},{label:"Grid utilizando auto-size e auto-fit-on-scroll",value:"auto-fit-scroll"},{label:"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)",value:"parent-detail-editing"},{label:"Busca R\xE1pida - Placeholder por Modo",value:"quick-search"}],this.activeSample="basic"}setActiveSample(n){this.activeSample=n}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-grid"]],standalone:!1,decls:17,vars:13,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["p-label","Selecione um exemplo",3,"ngModelChange","ngModel","p-options"],["labs","",1,"samples-container"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1)(3,"po-select",2),b("ngModelChange",function(E){return S(o.activeSample,E)||(o.activeSample=E),E}),t(),k(4,gr,1,0,"app-thf-grid-basic-doc"),k(5,Vr,1,0,"app-thf-grid-editing-inline-doc"),k(6,vr,1,0,"app-thf-grid-row-actions-doc"),k(7,Cr,1,0,"app-thf-grid-aggregates-doc"),k(8,Tr,1,0,"app-thf-grid-editing-fluid-currency-doc"),k(9,Dr,1,0,"app-thf-grid-delete-service-doc"),k(10,Pr,1,0,"app-thf-grid-virtual-doc"),k(11,wr,1,0,"app-thf-grid-dynamic-properties"),k(12,Ar,1,0,"app-thf-grid-auto-fit-scroll"),k(13,_r,1,0,"app-thf-grid-parent-detail-editing-doc"),k(14,kr,1,0,"app-thf-grid-quick-search-doc"),t(),i(15,"div",3),r(16,"app-thf-grid-labs-doc"),t()()()),a&2&&(d(3),y("ngModel",o.activeSample),m("p-options",o.samples),d(),q(o.activeSample==="basic"?4:-1),d(),q(o.activeSample==="editing-inline"?5:-1),d(),q(o.activeSample==="row-actions"?6:-1),d(),q(o.activeSample==="aggregates"?7:-1),d(),q(o.activeSample==="editing-fluid-currency"?8:-1),d(),q(o.activeSample==="delete-service"?9:-1),d(),q(o.activeSample==="virtual"?10:-1),d(),q(o.activeSample==="dynamic-properties"?11:-1),d(),q(o.activeSample==="auto-fit-scroll"?12:-1),d(),q(o.activeSample==="parent-detail-editing"?13:-1),d(),q(o.activeSample==="quick-search"?14:-1))},dependencies:[j,Q,ue,J,qt,Gt,Bt,$t,Xt,ti,ri,li,mi,ui,yi,hi,Vi],encapsulation:2})}}return p})();var Ci=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-helper]="helperText"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-compact-label]="otherProperties.includes('compactLabel')"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-loading]="otherProperties.includes('loading')"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="helperText"
          [(ngModel)]="helperText"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,Ti=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  helperText: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'actions', label: 'Actions' },
    { value: 'actionsRight', label: 'Actions Right' },
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  customAction: Array<ThfTableAction> = [
    {
      label: 'Visualizar',
      fixed: true,
      action: (item: any) => {
        this.poNotification.information(\`Visualizando: \${item.id} - \${item.name}\`);
      },
      icon: 'ICON_EYE',
    },
    {
      label: 'Editar',
      action: (item: any) => {
        this.poNotification.warning(\`Editando: \${item.id} - \${item.name}\`);
      },
      icon: 'ICON_EDIT',
    },
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    const gridProperties: ThfLookupGridProperties = {
      sortable: this.gridPropertiesName.includes('sortable'),
      striped: this.gridPropertiesName.includes('striped'),
      selectableEntireLine: this.gridPropertiesName.includes('selectableEntireLine'),
      showMoreVisible: this.gridPropertiesName.includes('showMoreVisible'),
      groupable: this.gridPropertiesName.includes('groupable'),
      autoSize: this.gridPropertiesName.includes('autoSize'),
      autoSizeOnScroll: this.gridPropertiesName.includes('autoSizeOnScroll'),
      draggable: this.gridPropertiesName.includes('draggable'),
      hideSelectAll: this.gridPropertiesName.includes('hideSelectAll'),
      resizable: this.gridPropertiesName.includes('resizable'),
      showDraggableIcon: this.gridPropertiesName.includes('showDraggableIcon'),
      showMoreDisabled: this.gridPropertiesName.includes('showMoreDisabled'),
      virtualScroll: this.gridPropertiesName.includes('virtualScroll'),
      actions: this.gridPropertiesName.includes('actions') ? this.customAction : undefined,
      actionRight: this.gridPropertiesName.includes('actionsRight'),
    };

    this.gridProperties = gridProperties;
  }
}`;function qr(p,T){if(p&1){let n=L();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),b("ngModelChange",function(o){c(n);let l=s();return S(l.label,o)||(l.label=o),u(o)}),t(),i(3,"po-input",10),b("ngModelChange",function(o){c(n);let l=s();return S(l.help,o)||(l.help=o),u(o)}),t(),i(4,"po-input",11),b("ngModelChange",function(o){c(n);let l=s();return S(l.helperText,o)||(l.helperText=o),u(o)}),t(),i(5,"po-input",12),b("ngModelChange",function(o){c(n);let l=s();return S(l.placeholder,o)||(l.placeholder=o),u(o)}),t(),i(6,"po-input",13),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldErrorMessage,o)||(l.fieldErrorMessage=o),u(o)}),t(),i(7,"po-select",14),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldLabel,o)||(l.fieldLabel=o),u(o)}),t(),i(8,"po-select",15),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldValue,o)||(l.fieldValue=o),u(o)}),t(),i(9,"po-input",16),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldFormat,o)||(l.fieldFormat=o),u(o)}),f("p-change",function(o){c(n);let l=s();return u(l.onFieldFormatChange(o))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),b("ngModelChange",function(o){c(n);let l=s();return S(l.columnsName,o)||(l.columnsName=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.updateColumns())}),t(),i(12,"po-checkbox-group",18),b("ngModelChange",function(o){c(n);let l=s();return S(l.gridPropertiesName,o)||(l.gridPropertiesName=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),b("ngModelChange",function(o){c(n);let l=s();return S(l.otherProperties,o)||(l.otherProperties=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),b("ngModelChange",function(o){c(n);let l=s();return S(l.lookupModalSize,o)||(l.lookupModalSize=o),u(o)}),t(),i(17,"po-radio-group",21),b("ngModelChange",function(o){c(n);let l=s();return S(l.searchOnEnter,o)||(l.searchOnEnter=o),u(o)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),b("ngModelChange",function(o){c(n);let l=s();return S(l.size,o)||(l.size=o),u(o)}),t(),i(20,"po-textarea",23),b("ngModelChange",function(o){c(n);let l=s();return S(l.literals,o)||(l.literals=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeLiterals())}),t(),i(21,"po-textarea",24),b("ngModelChange",function(o){c(n);let l=s();return S(l.filterSearchSelect,o)||(l.filterSearchSelect=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),b("ngModelChange",function(o){c(n);let l=s();return S(l.keysLabel,o)||(l.keysLabel=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),f("p-click",function(){c(n);let o=s();return u(o.restore())}),t()()}if(p&2){let n=s();d(2),y("ngModel",n.label),d(),y("ngModel",n.help),d(),y("ngModel",n.helperText),d(),y("ngModel",n.placeholder),d(),y("ngModel",n.fieldErrorMessage),d(),y("ngModel",n.fieldLabel),m("p-options",n.fieldLabelOptions),d(),y("ngModel",n.fieldValue),m("p-options",n.fieldValueOptions),d(),y("ngModel",n.fieldFormat),d(2),y("ngModel",n.columnsName),m("p-columns",4)("p-options",n.columnsOptions),d(),y("ngModel",n.gridPropertiesName),m("p-columns",4)("p-options",n.gridPropertiesOptions),d(2),m("p-columns",4)("p-options",n.otherPropertiesOptions),y("ngModel",n.otherProperties),d(2),m("p-columns",3)("p-options",n.lookupModalSizeOptions),y("ngModel",n.lookupModalSize),d(),y("ngModel",n.searchOnEnter),m("p-options",n.searchOnEnterOptions),d(2),y("ngModel",n.size),m("p-options",n.sizesOptions),d(),y("ngModel",n.literals),d(),y("ngModel",n.filterSearchSelect),d(),y("ngModel",n.keysLabel)}}var Di=(()=>{class p{constructor(n){this.poNotification=n,this.htmlCode=Ci,this.tsCode=Ti,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Readonly",value:"readonly"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"actions",label:"Actions"},{value:"actionsRight",label:"Actions Right"},{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}},this.customAction=[{label:"Visualizar",fixed:!0,action:a=>{this.poNotification.information(`Visualizando: ${a.id} - ${a.name}`)},icon:"ICON_EYE"},{label:"Editar",action:a=>{this.poNotification.warning(`Editando: ${a.id} - ${a.name}`)},icon:"ICON_EDIT"}]}ngOnInit(){this.restore()}changeEvent(n){this.event=n}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch(n){this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch(n){this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(n){this.customLiterals={}}}changeOtherPropertiesOptions(){let n=this.otherProperties.includes("multiple"),a=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=n,this.otherPropertiesOptions[8].disabled=!a,this.otherPropertiesOptions[6].disabled=a,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(n){try{this.fieldFormat=JSON.parse(n)}catch(a){this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(n=>this.columns.push(this.columnsDefinition[n]))}updateGridProperties(){let n={sortable:this.gridPropertiesName.includes("sortable"),striped:this.gridPropertiesName.includes("striped"),selectableEntireLine:this.gridPropertiesName.includes("selectableEntireLine"),showMoreVisible:this.gridPropertiesName.includes("showMoreVisible"),groupable:this.gridPropertiesName.includes("groupable"),autoSize:this.gridPropertiesName.includes("autoSize"),autoSizeOnScroll:this.gridPropertiesName.includes("autoSizeOnScroll"),draggable:this.gridPropertiesName.includes("draggable"),hideSelectAll:this.gridPropertiesName.includes("hideSelectAll"),resizable:this.gridPropertiesName.includes("resizable"),showDraggableIcon:this.gridPropertiesName.includes("showDraggableIcon"),showMoreDisabled:this.gridPropertiesName.includes("showMoreDisabled"),virtualScroll:this.gridPropertiesName.includes("virtualScroll"),actions:this.gridPropertiesName.includes("actions")?this.customAction:void 0,actionRight:this.gridPropertiesName.includes("actionsRight")};this.gridProperties=n}static{this.\u0275fac=function(a){return new(a||p)(z(ie))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:36,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-compact-label","t-disabled","t-readonly","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let l=L();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),r(3,"po-divider",2),i(4,"thf-lookup",3),f("t-change",function(){return o.changeEvent("t-change")})("t-error",function(){return o.changeEvent("t-error")})("t-selected",function(){return o.changeEvent("t-selected")})("t-focus",function(){return o.changeEvent("t-focus")})("t-keydown",function(){return o.changeEvent("t-keydown")})("t-rows-selected",function(){return o.changeEvent("t-rows-selected")}),b("ngModelChange",function(_){return c(l),S(o.lookupSingle,_)||(o.lookupSingle=_),u(_)}),t(),i(5,"po-container",4),r(6,"po-info",5),t(),r(7,"app-code-accordion-doc",6),U(8,qr,25,29,"ng-template",null,0,X),t()}if(a&2){let l=$(9);d(4),m("t-helper",o.helperText)("t-auto-height",o.otherProperties.includes("autoHeight"))("t-clean",o.otherProperties.includes("clean"))("t-columns",o.columns)("t-compact-label",o.otherProperties.includes("compactLabel"))("t-disabled",o.otherProperties.includes("disabled"))("t-readonly",o.otherProperties.includes("readonly"))("t-error-limit",o.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",o.fieldErrorMessage)("t-field-format",o.fieldFormat)("t-field-label",o.fieldLabel)("t-field-value",o.fieldValue)("t-field-error-message",o.fieldErrorMessage)("t-filter-search-select",o.customFilterSearchSelect)("t-grid-properties",o.gridProperties)("t-help",o.help)("t-keys-label",o.customKeysLabel)("t-label",o.label)("t-literals",o.customLiterals)("t-loading",o.otherProperties.includes("loading"))("t-modal-size",o.lookupModalSize)("t-multiple",o.otherProperties.includes("multiple"))("t-no-autocomplete",o.otherProperties.includes("noAutoComplete"))("t-optional",o.otherProperties.includes("optional"))("t-placeholder",o.placeholder)("t-required",o.otherProperties.includes("required"))("t-show-required",o.otherProperties.includes("showRequired"))("t-search-on-enter",o.searchOnEnter)("t-size",o.size)("t-label-text-wrap",o.otherProperties==null?null:o.otherProperties.includes("labelTextWrap")),y("ngModel",o.lookupSingle),d(2),m("p-value",o.event),d(),m("properties",!0)("dynamicTemplate",l)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[j,Q,B,h,v,ce,te,ae,ue,Ee,xe,Se,C],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return p})();var Pi=(()=>{class p{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new N({lookup2:new g(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),r(3,"po-divider",1),i(4,"form",2),r(5,"thf-lookup",3),t(),r(6,"app-code-accordion-doc",4),t()),a&2&&(d(4),m("formGroup",o.formMission),d(),m("t-columns",o.columns)("t-grid-properties",o.gridProperties)("t-keys-label",o.keysLabel)("t-multiple",!0)("t-filter-search-select",o.filterSelect),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[ne,j,re,ve,Ve,h,v,Se,C],encapsulation:2})}}return p})();var wi=(()=>{class p{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),r(3,"po-divider",1),i(4,"form"),r(5,"thf-lookup",2),t(),r(6,"app-code-accordion-doc",3),t()),a&2&&(d(6),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[ne,re,Ie,h,v,Se,C],encapsulation:2})}}return p})();var Ai=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,_i=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-custom-items-doc',
  templateUrl: './thf-lookup-custom-items-doc.component.html',
  styleUrl: './thf-lookup-custom-items-doc.component.css',
  standalone: false
})
export class ThfLookupCustomItemsDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}
`;var ki=(()=>{class p{constructor(){this.htmlCode=Ai,this.tsCode=_i,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),r(3,"po-divider",1),i(4,"form"),r(5,"thf-lookup",2),t(),r(6,"app-code-accordion-doc",3),t()),a&2&&(d(5),m("t-custom-items",o.customItems),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[ne,re,Ie,h,v,Se,C],encapsulation:2})}}return p})();var qi=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),r(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),r(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[J,It,Di,Pi,wi,ki],encapsulation:2})}}return p})();var Ii=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,Fi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var Ne=(()=>{class p{constructor(){this.htmlCode=Ii,this.tsCode=Fi}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),r(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-height",320),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,ye,C],encapsulation:2})}}return p})();var zi=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,Mi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function Rr(p,T){if(p&1){let n=L();i(0,"po-button",7),f("p-click",function(){c(n);let o=s();return u(o.disableEnabledFom())}),t()}}function jr(p,T){if(p&1){let n=L();i(0,"po-button",8),f("p-click",function(){c(n);let o=s();return u(o.disableEnabledFom())}),t()}}var Qe=(()=>{class p{constructor(){this.htmlCode=zi,this.tsCode=Mi,this.disabledFom=!1,this.form=new N({lookupData:new g(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let n=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?n?.disable():n?.enable()}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),r(3,"po-divider",1),i(4,"form",2),r(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),r(9,"br"),e(10),mt(11,"json"),t()(),i(12,"div"),k(13,Rr,1,0,"po-button",4)(14,jr,1,0,"po-button",5),t(),r(15,"app-code-accordion-doc",6),t()),a&2&&(d(4),m("formGroup",o.form),d(),m("t-columns",o.columns)("t-grid-properties",o.gridProperties)("t-keys-label",o.keysLabel)("t-multiple",!0)("t-filter-search-select",o.filterSelect),d(5),ge(st(11,10,o.form.value)),d(3),q(o.disabledFom?14:13),d(2),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[ne,j,re,ve,Ve,B,h,v,ye,C,xt],encapsulation:2})}}return p})();var Li=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,Ri=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}`;var Be=(()=>{class p{constructor(){this.htmlCode=Li,this.tsCode=Ri,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),r(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-custom-items",o.customItems)("t-height",320),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,ye,C],encapsulation:2})}}return p})();var ji=`<form [formGroup]="formLabs">
<thf-lookup-data
    name="lookupData"
    formControlName="lookupData"
    [t-columns]="columns"
    [t-compact-label]="lookupDataProperties?.compactLabel"
    [t-disabled]="lookupDataProperties?.disabled"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-height]="height"
    [t-keys-label]="customKeysLabel"
    [t-literals]="customLiterals"
    [t-multiple]="lookupDataProperties?.multiple"
    [t-size]="size"
    [t-label]="label"
    [t-optional]="lookupDataProperties?.optional"
    [t-required]="lookupDataProperties?.required"
    [t-show-required]="lookupDataProperties?.showRequired"
    [t-help]="help"
    [t-helper]="helperText"
    [t-auto-focus]="lookupDataProperties?.autoFocus"
    [t-no-autocomplete]="lookupDataProperties?.noAutoComplete"
    [t-field-error-message]="fieldErrorMessage"
    [t-error-limit]="lookupDataProperties?.errorLimit"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    (t-change)="changeEvent('t-change', $event)"
    (t-change-model)="changeEvent('t-change-model', $event)"
    (t-error)="changeEvent('t-error', $event)"
    (t-focus)="changeEvent('t-focus', '')"
    (t-keydown)="changeEvent('t-keydown', $event)"
    (t-selected)="changeEvent('t-selected', $event)"
  />
</form>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="label"
      [(ngModel)]="label"
      p-label="Label"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-label="Field Error Message"
    ></po-input>

    <po-input
      class="po-md-4 po-lg-4"
      name="Help"
      [(ngModel)]="help"
      p-label="Help"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="Helper"
      [(ngModel)]="helperText"
      p-label="Additional Help"
    />

    <po-checkbox-group
      name="lookupDataPropertiesName"
      [(ngModel)]="lookupDataPropertiesName"
      [p-columns]="4"
      p-label="Lookup-Data Properties"
      [p-options]="lookupDataPropertiesOptions"
      (p-change)="updateLookupDataProperties()"
    />

    <div class="po-row">
      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,Zi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
 gridProperties!: ThfLookupDataGridProperties;
  lookupDataProperties!: any;
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  size: string = 'medium';
  label: string = '';
  fieldErrorMessage: string = '';
  help: string = '';
  helperText: string = '';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly lookupDataPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Error Limit' },
    { value: 'autoFocus', label: 'Auto Focus' },
    { value: 'noAutoComplete', label: 'No Auto Complete' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'actions', label: 'Actions' },
    { value: 'actionsRight', label: 'Actions Right' },
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  lookupDataPropertiesName: Array<string> = [];

  customAction: Array<ThfTableAction> = [
    {
      label: 'Visualizar',
      fixed: true,
      action: (e: any) => {
        this.poNotification.information(\`Visualizando: \${e.id} - \${e.name}\`);
      },
      icon: 'ICON_EYE',
    },
    {
      label: 'Editar',
      action: (e: any) => {
        this.poNotification.warning(\`Editando: \${e.id} - \${e.name}\`);
      },
      icon: 'ICON_EDIT',
    },
  ];

  constructor(private poNotification: PoNotificationService) {
    this.updateGridProperties();
  }

  formLabs = new FormGroup({
    lookupData: new FormControl(),
  });

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    const gridProperties: ThfLookupDataGridProperties = {
      sortable: this.gridPropertiesName.includes('sortable'),
      striped: this.gridPropertiesName.includes('striped'),
      selectableEntireLine: this.gridPropertiesName.includes('selectableEntireLine'),
      showMoreVisible: this.gridPropertiesName.includes('showMoreVisible'),
      groupable: this.gridPropertiesName.includes('groupable'),
      autoSize: this.gridPropertiesName.includes('autoSize'),
      autoSizeOnScroll: this.gridPropertiesName.includes('autoSizeOnScroll'),
      draggable: this.gridPropertiesName.includes('draggable'),
      hideSelectAll: this.gridPropertiesName.includes('hideSelectAll'),
      resizable: this.gridPropertiesName.includes('resizable'),
      showDraggableIcon: this.gridPropertiesName.includes('showDraggableIcon'),
      showMoreDisabled: this.gridPropertiesName.includes('showMoreDisabled'),
      virtualScroll: this.gridPropertiesName.includes('virtualScroll'),
      actions: this.gridPropertiesName.includes('actions') ? this.customAction : undefined,
      actionRight: this.gridPropertiesName.includes('actionsRight'),
    };

    this.gridProperties = gridProperties;
  }

  updateLookupDataProperties() {
    let lookupDataProperties = {};

    this.lookupDataPropertiesName.forEach((properties: any) => {
      lookupDataProperties = {
        ...lookupDataProperties,
        [properties]: true,
      };
    });

    this.lookupDataProperties = { ...lookupDataProperties };
  }
}`;function Gr(p,T){if(p&1){let n=L();i(0,"div",8)(1,"po-container",9)(2,"po-select",10),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldValue,o)||(l.fieldValue=o),u(o)}),t(),i(3,"po-select",11),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldLabel,o)||(l.fieldLabel=o),u(o)}),t(),i(4,"po-input",12),b("ngModelChange",function(o){c(n);let l=s();return S(l.height,o)||(l.height=o),u(o)}),t(),i(5,"po-input",13),b("ngModelChange",function(o){c(n);let l=s();return S(l.label,o)||(l.label=o),u(o)}),t(),i(6,"po-input",14),b("ngModelChange",function(o){c(n);let l=s();return S(l.fieldErrorMessage,o)||(l.fieldErrorMessage=o),u(o)}),t(),i(7,"po-input",15),b("ngModelChange",function(o){c(n);let l=s();return S(l.help,o)||(l.help=o),u(o)}),t(),i(8,"po-input",16),b("ngModelChange",function(o){c(n);let l=s();return S(l.helperText,o)||(l.helperText=o),u(o)}),t(),i(9,"po-checkbox-group",17),b("ngModelChange",function(o){c(n);let l=s();return S(l.lookupDataPropertiesName,o)||(l.lookupDataPropertiesName=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.updateLookupDataProperties())}),t(),i(10,"div",18)(11,"po-radio-group",19),b("ngModelChange",function(o){c(n);let l=s();return S(l.size,o)||(l.size=o),u(o)}),t()(),i(12,"div",18)(13,"po-textarea",20),b("ngModelChange",function(o){c(n);let l=s();return S(l.filterSearchSelect,o)||(l.filterSearchSelect=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeFilterSearchSelects())}),t(),i(14,"po-textarea",21),b("ngModelChange",function(o){c(n);let l=s();return S(l.keysLabel,o)||(l.keysLabel=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeKeysLabel())}),t()(),i(15,"po-textarea",22),b("ngModelChange",function(o){c(n);let l=s();return S(l.literals,o)||(l.literals=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.changeLiterals())}),t()(),i(16,"po-container",9)(17,"po-checkbox-group",23),b("ngModelChange",function(o){c(n);let l=s();return S(l.gridPropertiesName,o)||(l.gridPropertiesName=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.updateGridProperties())}),t()()()}if(p&2){let n=s();d(2),y("ngModel",n.fieldValue),m("p-options",n.fieldValueOptions),d(),y("ngModel",n.fieldLabel),m("p-options",n.fieldLabelOptions),d(),y("ngModel",n.height),d(),y("ngModel",n.label),d(),y("ngModel",n.fieldErrorMessage),d(),y("ngModel",n.help),d(),y("ngModel",n.helperText),d(),y("ngModel",n.lookupDataPropertiesName),m("p-columns",4)("p-options",n.lookupDataPropertiesOptions),d(2),y("ngModel",n.size),m("p-options",n.sizesOptions),d(2),y("ngModel",n.filterSearchSelect),d(),y("ngModel",n.keysLabel),d(),m("p-rows",2),y("ngModel",n.literals),d(2),y("ngModel",n.gridPropertiesName),m("p-columns",4)("p-options",n.gridPropertiesOptions)}}var He=(()=>{class p{constructor(n){this.poNotification=n,this.htmlCode=ji,this.tsCode=Zi,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.size="medium",this.label="",this.fieldErrorMessage="",this.help="",this.helperText="",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.lookupDataPropertiesOptions=[{value:"disabled",label:"Disabled"},{value:"multiple",label:"Multiple"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Error Limit"},{value:"autoFocus",label:"Auto Focus"},{value:"noAutoComplete",label:"No Auto Complete"},{value:"compactLabel",label:"Compact Label"}],this.gridPropertiesOptions=[{value:"actions",label:"Actions"},{value:"actionsRight",label:"Actions Right"},{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.lookupDataPropertiesName=[],this.customAction=[{label:"Visualizar",fixed:!0,action:a=>{this.poNotification.information(`Visualizando: ${a.id} - ${a.name}`)},icon:"ICON_EYE"},{label:"Editar",action:a=>{this.poNotification.warning(`Editando: ${a.id} - ${a.name}`)},icon:"ICON_EDIT"}],this.formLabs=new N({lookupData:new g}),this.updateGridProperties()}changeEvent(n,a){a instanceof KeyboardEvent&&(a={key:a.key,code:a.code,altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey}),this.event=`<p>${n} - ${a?JSON.stringify(a):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch(n){this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch(n){this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(n){this.customLiterals={}}}updateGridProperties(){let n={sortable:this.gridPropertiesName.includes("sortable"),striped:this.gridPropertiesName.includes("striped"),selectableEntireLine:this.gridPropertiesName.includes("selectableEntireLine"),showMoreVisible:this.gridPropertiesName.includes("showMoreVisible"),groupable:this.gridPropertiesName.includes("groupable"),autoSize:this.gridPropertiesName.includes("autoSize"),autoSizeOnScroll:this.gridPropertiesName.includes("autoSizeOnScroll"),draggable:this.gridPropertiesName.includes("draggable"),hideSelectAll:this.gridPropertiesName.includes("hideSelectAll"),resizable:this.gridPropertiesName.includes("resizable"),showDraggableIcon:this.gridPropertiesName.includes("showDraggableIcon"),showMoreDisabled:this.gridPropertiesName.includes("showMoreDisabled"),virtualScroll:this.gridPropertiesName.includes("virtualScroll"),actions:this.gridPropertiesName.includes("actions")?this.customAction:void 0,actionRight:this.gridPropertiesName.includes("actionsRight")};this.gridProperties=n}updateLookupDataProperties(){let n={};this.lookupDataPropertiesName.forEach(a=>{n=se(de({},n),{[a]:!0})}),this.lookupDataProperties=de({},n)}static{this.\u0275fac=function(a){return new(a||p)(z(ie))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:14,vars:28,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["name","lookupData","formControlName","lookupData","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-compact-label","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size","t-label","t-optional","t-required","t-show-required","t-help","t-helper","t-auto-focus","t-no-autocomplete","t-field-error-message","t-error-limit"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","label","p-label","Label",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-label","Field Error Message",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Help","p-label","Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Helper","p-label","Additional Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","lookupDataPropertiesName","p-label","Lookup-Data Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],[1,"po-row"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(a,o){if(a&1&&(i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),r(3,"po-divider",2),i(4,"form",3)(5,"thf-lookup-data",4),f("t-change",function(E){return o.changeEvent("t-change",E)})("t-change-model",function(E){return o.changeEvent("t-change-model",E)})("t-error",function(E){return o.changeEvent("t-error",E)})("t-focus",function(){return o.changeEvent("t-focus","")})("t-keydown",function(E){return o.changeEvent("t-keydown",E)})("t-selected",function(E){return o.changeEvent("t-selected",E)}),t()(),i(6,"po-container",5)(7,"span",1),e(8,"Events"),t(),r(9,"po-divider",2)(10,"div",6),t(),r(11,"app-code-accordion-doc",7),U(12,Gr,18,21,"ng-template",null,0,X),t()),a&2){let l=$(13);d(4),m("formGroup",o.formLabs),d(),m("t-columns",o.columns)("t-compact-label",o.lookupDataProperties==null?null:o.lookupDataProperties.compactLabel)("t-disabled",o.lookupDataProperties==null?null:o.lookupDataProperties.disabled)("t-field-label",o.fieldLabel)("t-field-value",o.fieldValue)("t-filter-search-select",o.customFilterSearchSelect)("t-grid-properties",o.gridProperties)("t-height",o.height)("t-keys-label",o.customKeysLabel)("t-literals",o.customLiterals)("t-multiple",o.lookupDataProperties==null?null:o.lookupDataProperties.multiple)("t-size",o.size)("t-label",o.label)("t-optional",o.lookupDataProperties==null?null:o.lookupDataProperties.optional)("t-required",o.lookupDataProperties==null?null:o.lookupDataProperties.required)("t-show-required",o.lookupDataProperties==null?null:o.lookupDataProperties.showRequired)("t-help",o.help)("t-helper",o.helperText)("t-auto-focus",o.lookupDataProperties==null?null:o.lookupDataProperties.autoFocus)("t-no-autocomplete",o.lookupDataProperties==null?null:o.lookupDataProperties.noAutoComplete)("t-field-error-message",o.fieldErrorMessage)("t-error-limit",o.lookupDataProperties==null?null:o.lookupDataProperties.errorLimit),d(5),m("innerHTML",o.event,Pe),d(),m("properties",!0)("dynamicTemplate",l)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[ne,j,re,Q,ve,Ve,h,v,ce,te,ae,ue,Ee,ye,C],encapsulation:2})}}return p})();var We=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),r(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),r(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[J,Ft,Ne,Qe,Be,He],encapsulation:2})}}return p})();var Qr=["splitter"],Br=["paneForm"],Hr=()=>({label:"horizontal",value:"horizontal"}),Wr=()=>({label:"vertical",value:"vertical"}),Ur=(p,T)=>[p,T];function $r(p,T){if(p&1){let n=L();i(0,"thf-splitter-pane",10),f("t-size-change",function(){c(n);let o=s();return u(o.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),f("p-primary-action",function(){let o=c(n).$index,l=s();return u(l.removePane(o))}),i(3,"div",13),e(4),t()()()()}if(p&2){let n=T.$implicit,a=T.$index;m("t-resizable",n.resizable)("t-scrollable",n.scrollable)("t-size",n.size),d(4),lt(" Pane Content ",a," ")}}function Jr(p,T){if(p&1){let n=L();i(0,"div",14)(1,"po-container",15),r(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),f("p-click",function(){c(n);let o=$(3),l=s();return u(l.addPane(o.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),b("ngModelChange",function(o){c(n);let l=s();return S(l.disabled,o)||(l.disabled=o),u(o)}),t(),i(8,"po-radio-group",20),b("ngModelChange",function(o){c(n);let l=s();return S(l.orientation,o)||(l.orientation=o),u(o)}),t()()(),i(9,"div",17)(10,"po-button",21),f("p-click",function(){c(n);let o=s();return u(o.restore())}),t()()}if(p&2){let n=$(3),a=s();d(2),m("p-fields",a.panesFieldsForm)("p-value",a.pane),d(3),m("p-disabled",n.form.invalid),d(2),y("ngModel",a.disabled),d(),y("ngModel",a.orientation),m("p-options",ke(8,Ur,me(6,Hr),me(7,Wr)))}}var Oi=(()=>{class p{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(n){this.event=n}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(n){let a=Object.assign({},n);a.size+="%",this.panes.push(a),this.pane={size:"50",scrollable:!1}}removePane(n){this.panes.splice(n,1)}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(a,o){if(a&1&&F(Qr,7)(Br,7),a&2){let l;D(l=P())&&(o.splitter=l.first),D(l=P())&&(o.paneForm=l.first)}},standalone:!1,decls:13,vars:7,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1&&(i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),r(3,"po-divider",4),i(4,"thf-splitter",5,0),f("t-layout-change",function(){return o.changeEvent("(t-layout-change)")}),we(6,$r,5,4,"thf-splitter-pane",6,at),t(),i(8,"po-container",7),r(9,"po-info",8),t(),r(10,"app-code-accordion-doc",9),U(11,Jr,11,11,"ng-template",null,1,X),t()),a&2){let l=$(12);d(4),m("t-disabled",o.disabled)("t-orientation",o.orientation),d(2),Ae(o.panes),d(3),m("p-value",o.event),d(),m("properties",!0)("dynamicTemplate",l)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[j,Q,B,h,v,wt,te,Me,xe,Ce,pe,le,C],encapsulation:2})}}return p})();var Xr=["gridComponent"];function Yr(p,T){if(p&1){let n=L();i(0,"thf-splitter-pane",9)(1,"po-widget",11),f("p-primary-action",function(){c(n);let o=s();return u(o.closePane())}),i(2,"div",12),r(3,"po-info",13),t(),i(4,"div",12),r(5,"po-info",14),t(),i(6,"div",12),r(7,"po-info",15),t(),i(8,"div",12),r(9,"po-info",16),t()()()}if(p&2){let n=s();m("t-size","30%"),d(3),m("p-value",n.selectedHero.name),d(2),m("p-value",n.selectedHero.nickname),d(2),m("p-value",n.selectedHero.email),d(2),m("p-value",n.selectedHero.city)}}var Gi=(()=>{class p{constructor(n,a){this.router=n,this.changeDetector=a,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  standalone: false,
})
export class ThfSplitterGridDocComponent
  implements AfterContentInit, AfterViewInit
{
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.selectItem(this.items[0]);
  }

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
    this.changeDetector.detectChanges();
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterContentInit(){this.selectItem(this.items[0])}ngAfterViewInit(){this.grid.selectRowItem(this.items[0])}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(n){if(!n){this.closePane();return}this.selectedHero={id:n.id||"",name:n.name||"",nickname:n.nickname||"",email:n.email||"",city:n.city||""},this.showHeroPane=!0,this.changeDetector.detectChanges()}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(a){return new(a||p)(z(vt),z(ct))}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(a,o){if(a&1&&F(Xr,7),a&2){let l;D(l=P())&&(o.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),r(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),f("p-click",function(){return o.openExternalLink()}),t()(),i(11,"thf-grid",8,0),f("t-selected",function(E){return o.selectItem(E)})("t-unselected",function(){return o.closePane()}),t()()(),k(13,Yr,10,5,"thf-splitter-pane",9),t(),r(14,"app-code-accordion-doc",10),t()),a&2&&(d(11),m("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",o.items)("t-columns",o.column)("t-sortable",!0),d(2),q(o.showHeroPane?13:-1),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[B,h,v,xe,Ce,Z,pe,le,C],encapsulation:2})}}return p})();var Ni=(()=>{class p{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:De.Column},{label:"2017",data:[93,52,18],type:De.Column},{label:"2020",data:[95,21,-17],type:De.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:De.Line,color:"caption-tag-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"caption-tag-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'caption-tag-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'caption-tag-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),r(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),r(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),r(10,"po-chart",6),t()()(),r(11,"app-code-accordion-doc",7),t()),a&2&&(d(7),m("p-options",o.optionsColumn)("p-categories",o.categoriesColumn)("p-series",o.evolutionOfCoffeeAndSomeCompetitors),d(),m("t-size","50%"),d(2),m("p-series",o.coffeeProduction)("p-options",o.optionsPie),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[Dt,h,v,Ce,pe,le,C],encapsulation:2})}}return p})();var Qi=(()=>{class p{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),r(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),r(16,"app-code-accordion-doc",3),t()),a&2&&(d(9),m("t-orientation","vertical"),d(7),m("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[h,v,pe,le,C],encapsulation:2})}}return p})();var rn=()=>[Gi,Ni,Qi];function nn(p,T){p&1&&(i(0,"div",3),r(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function an(p,T){p&1&&r(0,"po-loading-overlay",4),p&2&&m("p-screen-lock",!1)}var Bi=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),ot(3,nn,4,0)(4,an,1,1),rt(5,3,rn,null,4),nt(),t(),i(7,"div",2),r(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[Ct,J,Mt,Oi],encapsulation:2})}}return p})();var Hi=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(a,o){a&1&&(i(0,"po-page-default",0),r(1,"api-thf-splitter-pane"),t())},dependencies:[J,zt],encapsulation:2})}}return p})();var Wi=[{id:1,managerId:null,name:"Srta. Clara Costa",title:"Diretor(a) Executivo(a)",phone:"(29) 38846-5384",hireDate:"2023-09-07",gender:"F",imgId:3,salary:4113.17,height:1.81,postalCode:51693220,birthDate:"1960-09-15T07:16:11.190Z",department:"Computadores",email:"Larissa_Batista@bol.com.br",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:2,managerId:1,name:"Ben\xEDcio Carvalho",title:"Humano Marca Especialista",phone:"+55 (95) 3288-8816",hireDate:"2022-04-07",gender:"M",imgId:4,salary:47375.68,height:1.69,postalCode:93233015,birthDate:"1963-05-23T22:26:06.873Z",department:"Industrial",email:"Esther61@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:3,managerId:2,name:"Roberto Saraiva",title:"Investidor Diretivas Policial",phone:"(88) 06528-2125",hireDate:"2023-06-18",gender:"M",imgId:4,salary:75674.64,height:1.76,postalCode:74763639,birthDate:"1995-11-02T16:25:12.293Z",department:"Livros",email:"Pedro_Barros95@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:4,managerId:2,name:"Sarah Martins",title:"Chefe Seguran\xE7a Especialista",phone:"(33) 2554-4383",hireDate:"2023-01-03",gender:"F",imgId:10,salary:29319.28,height:1.38,postalCode:40402647,birthDate:"1955-11-24T02:32:16.432Z",department:"Automotivo",email:"Tertuliano_Costa27@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:5,managerId:1,name:"J\xFAlio Santos",title:"Din\xE2mico Seguran\xE7a Executivo",phone:"+55 (99) 6573-5080",hireDate:"2023-01-24",gender:"M",imgId:3,salary:51250.21,height:1.38,postalCode:93667258,birthDate:"1963-08-07T21:57:36.636Z",department:"Brinquedos",email:"Lavinia.Barros@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:6,managerId:5,name:"Calebe Costa",title:"Cliente Divis\xE3o Orquestrador",phone:"(81) 09931-3078",hireDate:"2024-01-03",gender:"M",imgId:1,salary:86250.12,height:1.01,postalCode:75846869,birthDate:"1994-03-22T08:50:25.646Z",department:"M\xFAsica",email:"Gubio22@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:7,managerId:5,name:"Washington Melo",title:"Produto Paradigma Executivo",phone:"+55 (05) 2336-3278",hireDate:"2021-11-01",gender:"M",imgId:6,salary:23053.21,height:1.58,postalCode:76283576,birthDate:"1986-03-10T17:25:15.854Z",department:"Sa\xFAde",email:"Calebe.Xavier64@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:8,managerId:5,name:"Roberto Albuquerque",title:"Legado Funcionalidade Arquiteto",phone:"(44) 66685-7251",hireDate:"2024-03-22",gender:"M",imgId:9,salary:43592.39,height:1.74,postalCode:14657964,birthDate:"1996-01-09T01:13:20.703Z",department:"Esportes",email:"Sirineu.Costa@bol.com.br",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:9,managerId:1,name:"Dalila Macedo",title:"Legado Usabilidade Arquiteto",phone:"+55 (36) 2517-1854",hireDate:"2025-01-21",gender:"F",imgId:2,salary:91205.07,height:1.73,postalCode:63331549,birthDate:"2001-05-23T21:23:07.744Z",department:"Filmes",email:"Ladislau64@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:10,managerId:9,name:"Jo\xE3o Miguel Reis",title:"Principal Assurance Atentende",phone:"(98) 65383-8451",hireDate:"2023-08-10",gender:"M",imgId:1,salary:66037.08,height:1.87,postalCode:65876069,birthDate:"1977-10-16T12:31:24.818Z",department:"Esportes",email:"Carlos56@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:11,managerId:9,name:"Fabr\xEDcia Batista",title:"Principal Branding Consultor",phone:"+55 (04) 2030-5350",hireDate:"2026-04-28",gender:"F",imgId:6,salary:11533.19,height:1.25,postalCode:51322055,birthDate:"1948-12-19T13:38:20.645Z",department:"J\xF3ias",email:"Lorena_Santos@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:12,managerId:null,name:"Dr. J\xFAlio Silva",title:"Diretor(a) Executivo(a)",phone:"(88) 5989-9948",hireDate:"2025-03-12",gender:"M",imgId:6,salary:33405.66,height:1.42,postalCode:91125031,birthDate:"1946-05-07T17:12:52.284Z",department:"Mercearia",email:"Samuel.Saraiva92@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:13,managerId:12,name:"Yasmin Franco",title:"International Resposta Gerente",phone:"+55 (65) 2333-3607",hireDate:"2023-12-06",gender:"F",imgId:6,salary:73982.98,height:1.89,postalCode:58449331,birthDate:"1985-08-12T06:08:08.872Z",department:"Computadores",email:"Silvia.Xavier49@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:14,managerId:13,name:"Sarah Braga",title:"Central Intera\xE7\xF5es Representante",phone:"+55 (97) 5472-1992",hireDate:"2026-05-04",gender:"F",imgId:8,salary:25709.55,height:1.29,postalCode:83015782,birthDate:"1972-01-24T08:32:55.976Z",department:"Jardim",email:"Julia68@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:15,managerId:13,name:"Sr. Sirineu Souza",title:"Investidor Intera\xE7\xF5es Designer",phone:"(32) 8250-4360",hireDate:"2025-04-05",gender:"M",imgId:10,salary:85906.4,height:1.53,postalCode:72579390,birthDate:"1974-10-23T11:50:04.272Z",department:"Mercearia",email:"Vicente.Souza@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:16,managerId:13,name:"Davi Oliveira",title:"Produto Paradigma Supervisor",phone:"+55 (48) 3389-0485",hireDate:"2022-04-06",gender:"M",imgId:4,salary:95549.1,height:1.27,postalCode:35225541,birthDate:"1973-01-23T01:24:55.028Z",department:"Casa",email:"Luiza24@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:17,managerId:12,name:"L\xEDvia Souza",title:"Cliente Diretivas Coordenador",phone:"(09) 8178-9788",hireDate:"2022-07-19",gender:"F",imgId:8,salary:27556.46,height:1.59,postalCode:32218810,birthDate:"1989-07-14T08:33:02.376Z",department:"Beb\xEA",email:"Eloa.Franco21@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:18,managerId:17,name:"Lorenzo Melo",title:"Din\xE2mico T\xE1ticas Representante",phone:"(97) 7120-3536",hireDate:"2026-01-27",gender:"M",imgId:2,salary:71733.91,height:1.92,postalCode:91727700,birthDate:"1961-03-08T15:40:12.661Z",department:"Roupas",email:"JoaoPedro_Reis@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:19,managerId:17,name:"Beatriz Macedo",title:"Distrito Marca Arquiteto",phone:"(74) 07125-5564",hireDate:"2023-06-14",gender:"F",imgId:7,salary:51690.05,height:1.55,postalCode:69674207,birthDate:"1948-09-17T14:25:55.407Z",department:"Beleza",email:"Davi17@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:20,managerId:17,name:"Dra. Fel\xEDcia Moreira",title:"Produto Divis\xE3o Coordenador",phone:"(05) 94906-5299",hireDate:"2024-09-24",gender:"F",imgId:8,salary:14952.95,height:1.85,postalCode:44390053,birthDate:"1993-10-07T05:57:59.224Z",department:"Sa\xFAde",email:"MariaCecilia_Souza@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:21,managerId:12,name:"Danilo Franco",title:"Produto Fatores Representante",phone:"+55 (61) 8688-5516",hireDate:"2023-11-19",gender:"M",imgId:5,salary:29711.62,height:1.4,postalCode:57841426,birthDate:"1959-06-05T08:55:29.258Z",department:"Brinquedos",email:"Ladislau_Melo54@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:22,managerId:21,name:"Sirineu Carvalho",title:"Direto Contas Especialista",phone:"(78) 92884-4885",hireDate:"2024-08-12",gender:"M",imgId:7,salary:42350.2,height:1.22,postalCode:55629081,birthDate:"2007-12-11T17:21:34.510Z",department:"J\xF3ias",email:"Sara.Martins12@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:23,managerId:21,name:"Emanuel Franco",title:"L\xEDder Contas Estrategista",phone:"(42) 13430-6294",hireDate:"2023-07-14",gender:"M",imgId:2,salary:78041.89,height:1.22,postalCode:61228796,birthDate:"1951-12-02T16:22:56.574Z",department:"Beleza",email:"Liz_Albuquerque33@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:24,managerId:null,name:"Yuri Batista",title:"Diretor(a) Executivo(a)",phone:"+55 (02) 2539-6734",hireDate:"2021-07-21",gender:"M",imgId:7,salary:57477.51,height:1.14,postalCode:87655699,birthDate:"2004-11-19T05:43:43.704Z",department:"Filmes",email:"Lorraine.Barros@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:25,managerId:24,name:"Marcos Batista",title:"Regional Pesquisar Facilitador",phone:"+55 (66) 5955-2210",hireDate:"2025-02-02",gender:"M",imgId:4,salary:37103.96,height:1.47,postalCode:74274189,birthDate:"1961-01-12T15:20:52.736Z",department:"Beleza",email:"Lorena_Carvalho@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:26,managerId:25,name:"Maria Cec\xEDlia Macedo",title:"L\xEDder Solu\xE7\xF5es Associado",phone:"(90) 96374-9778",hireDate:"2025-01-14",gender:"F",imgId:5,salary:90406.8,height:1.47,postalCode:95112821,birthDate:"2004-12-14T21:42:11.084Z",department:"M\xFAsica",email:"Maria.Xavier58@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:27,managerId:25,name:"Kl\xE9ber Moraes",title:"Humano Grupo Engenheiro",phone:"+55 (92) 9525-3916",hireDate:"2022-02-10",gender:"M",imgId:5,salary:60966.18,height:1.9,postalCode:10476552,birthDate:"1986-05-03T08:16:50.314Z",department:"Sapatos",email:"Sophia57@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:28,managerId:24,name:"Jo\xE3o Lucas Reis",title:"Produto Diretivas Designer",phone:"+55 (89) 6362-0509",hireDate:"2023-11-24",gender:"M",imgId:7,salary:24077.57,height:1.08,postalCode:56048680,birthDate:"1952-10-28T11:17:50.943Z",department:"Sa\xFAde",email:"Marli.Barros48@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:29,managerId:28,name:"Gabriel Oliveira Filho",title:"Direto Intranet Executivo",phone:"(60) 1696-3491",hireDate:"2021-11-07",gender:"M",imgId:10,salary:79170.93,height:1.03,postalCode:35736893,birthDate:"1974-04-11T01:30:20.763Z",department:"Computadores",email:"Maria23@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:30,managerId:28,name:"Lorena Batista",title:"Regional Seguran\xE7a Gerente",phone:"(28) 46083-9450",hireDate:"2021-08-08",gender:"F",imgId:4,salary:67332.45,height:1.65,postalCode:27084909,birthDate:"1986-09-16T00:25:25.086Z",department:"Eletr\xF4nicos",email:"Antonella82@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:31,managerId:null,name:"Esther Albuquerque",title:"Diretor(a) Executivo(a)",phone:"(64) 17399-8423",hireDate:"2025-05-14",gender:"F",imgId:1,salary:51592.71,height:1.77,postalCode:13071132,birthDate:"2006-01-02T11:34:26.738Z",department:"Casa",email:"Emanuelly.Xavier@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:32,managerId:31,name:"Hugo Reis",title:"Avan\xE7ar Criativo Supervisor",phone:"+55 (24) 9032-1474",hireDate:"2026-03-09",gender:"M",imgId:8,salary:61054.98,height:1.22,postalCode:82466151,birthDate:"1982-01-14T02:15:03.702Z",department:"Crian\xE7as",email:"Enzo_Moraes49@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:33,managerId:32,name:"S\xEDlvia Braga",title:"Din\xE2mico Branding Executivo",phone:"(92) 6090-5992",hireDate:"2022-11-29",gender:"F",imgId:1,salary:52569.71,height:1.27,postalCode:22247028,birthDate:"1983-08-28T20:17:53.174Z",department:"Computadores",email:"Livia26@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:34,managerId:32,name:"Rebeca Santos",title:"Futuro Implementation Associado",phone:"(48) 15028-7906",hireDate:"2022-08-03",gender:"F",imgId:2,salary:67487.69,height:1.58,postalCode:18707134,birthDate:"1969-08-25T04:45:58.663Z",department:"Industrial",email:"Felipe39@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:35,managerId:32,name:"Kl\xE9ber Saraiva",title:"Corporativo Marca Coordenador",phone:"(39) 07931-3918",hireDate:"2025-05-22",gender:"M",imgId:2,salary:57490.63,height:1.05,postalCode:91734158,birthDate:"1989-11-13T23:14:37.752Z",department:"Crian\xE7as",email:"Roberta.Franco55@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:36,managerId:31,name:"Nicolas Macedo",title:"Global Comunica\xE7\xF5es Agente",phone:"(48) 4912-0246",hireDate:"2024-07-08",gender:"M",imgId:5,salary:25234.46,height:1.24,postalCode:20423646,birthDate:"1989-04-05T11:35:14.575Z",department:"Automotivo",email:"Sophia81@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:37,managerId:36,name:"Carlos Souza Jr.",title:"Humano M\xE9tricas Policial",phone:"(38) 50910-3633",hireDate:"2024-03-28",gender:"M",imgId:8,salary:25603.61,height:1.02,postalCode:53743757,birthDate:"1957-11-20T19:43:04.334Z",department:"Beb\xEA",email:"Livia11@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:38,managerId:36,name:"J\xFAlia Santos",title:"Nacional Comunica\xE7\xF5es Planejador",phone:"(85) 1936-5250",hireDate:"2025-12-01",gender:"F",imgId:3,salary:93693.73,height:1.63,postalCode:27601215,birthDate:"2005-09-04T21:08:03.323Z",department:"Livros",email:"AnaLuiza78@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:39,managerId:36,name:"H\xE9lio Batista",title:"Global Programa T\xE9cnico",phone:"+55 (32) 5717-1551",hireDate:"2023-03-27",gender:"M",imgId:10,salary:6231.39,height:1.39,postalCode:74021745,birthDate:"2001-08-03T16:01:40.834Z",department:"Eletr\xF4nicos",email:"Isaac72@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:40,managerId:null,name:"Fel\xEDcia Franco",title:"Diretor(a) Executivo(a)",phone:"(38) 04414-7657",hireDate:"2025-02-25",gender:"F",imgId:9,salary:14365.27,height:1.46,postalCode:75107926,birthDate:"1973-12-29T23:51:31.268Z",department:"Computadores",email:"Maria11@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:41,managerId:40,name:"Ricardo Nogueira",title:"Distrito Marca Estrategista",phone:"(99) 3078-9037",hireDate:"2022-07-28",gender:"M",imgId:4,salary:90972.72,height:1.34,postalCode:97241322,birthDate:"2003-03-30T14:24:43.756Z",department:"Jardim",email:"Norberto_Albuquerque30@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:42,managerId:41,name:"Sara Silva",title:"Humano Implementation Produtor",phone:"+55 (37) 5076-4741",hireDate:"2021-11-24",gender:"F",imgId:2,salary:13974.12,height:1.35,postalCode:18319767,birthDate:"1979-04-27T03:35:25.110Z",department:"Roupas",email:"Raul72@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:43,managerId:41,name:"M\xE1rcia Martins",title:"Investidor Intera\xE7\xF5es Engenheiro",phone:"+55 (49) 5075-7367",hireDate:"2021-09-28",gender:"F",imgId:6,salary:11851.17,height:1.74,postalCode:17534185,birthDate:"1999-03-25T12:20:02.658Z",department:"Turismo",email:"Salvador.Reis@yahoo.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:44,managerId:40,name:"Fel\xEDcia Pereira",title:"Regional M\xE9tricas Atentende",phone:"(37) 59888-3312",hireDate:"2022-06-28",gender:"F",imgId:1,salary:9586.99,height:1.87,postalCode:26044398,birthDate:"1989-04-25T09:54:02.560Z",department:"Filmes",email:"Nataniel.Saraiva@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:45,managerId:44,name:"Warley Santos",title:"Principal Identidade Consultor",phone:"(98) 5653-8199",hireDate:"2024-08-08",gender:"M",imgId:3,salary:82795.76,height:1.96,postalCode:27909045,birthDate:"1979-01-14T23:57:12.667Z",department:"Beb\xEA",email:"AnaLuiza.Franco4@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:46,managerId:44,name:"Marcela Oliveira",title:"Cliente Branding T\xE9cnico",phone:"+55 (95) 2162-9464",hireDate:"2026-04-15",gender:"F",imgId:6,salary:93996.48,height:1.18,postalCode:12872728,birthDate:"1977-03-29T05:15:38.175Z",department:"M\xFAsica",email:"Marli27@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:47,managerId:40,name:"Dalila Martins",title:"Futuro Diretivas Diretor",phone:"+55 (18) 6225-7234",hireDate:"2022-08-13",gender:"F",imgId:9,salary:94073.02,height:1.05,postalCode:45543890,birthDate:"1999-07-09T09:49:18.517Z",department:"Jogos",email:"Valentina48@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:48,managerId:47,name:"Dra. Clara Braga",title:"Produto T\xE1ticas Orquestrador",phone:"(29) 45631-1871",hireDate:"2023-05-19",gender:"F",imgId:6,salary:579.86,height:1.61,postalCode:15868942,birthDate:"1961-12-12T10:51:06.447Z",department:"Mercearia",email:"Sophia.Saraiva@yahoo.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:49,managerId:47,name:"Feliciano Franco",title:"Senior Opera\xE7\xF5es Assistente",phone:"(33) 7774-0601",hireDate:"2025-09-19",gender:"M",imgId:9,salary:51908.97,height:1.55,postalCode:42864926,birthDate:"2005-11-14T06:41:08.025Z",department:"Sapatos",email:"JoaoPedro12@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:50,managerId:47,name:"Sr. Norberto Pereira",title:"Global Solu\xE7\xF5es Diretor",phone:"(14) 6309-1064",hireDate:"2022-07-17",gender:"M",imgId:5,salary:74730.8,height:1.7,postalCode:22859354,birthDate:"1972-07-28T13:18:35.883Z",department:"Mercearia",email:"Fabio.Saraiva45@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:51,managerId:null,name:"Jana\xEDna Martins",title:"Diretor(a) Executivo(a)",phone:"+55 (33) 7273-9368",hireDate:"2022-06-29",gender:"F",imgId:9,salary:70699.17,height:1.95,postalCode:97505973,birthDate:"1981-11-29T14:12:47.242Z",department:"Sa\xFAde",email:"Morgana_Reis59@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:52,managerId:51,name:"Maria Eduarda Batista Jr.",title:"Central Intranet Produtor",phone:"(26) 2647-9002",hireDate:"2023-03-04",gender:"F",imgId:10,salary:90845.98,height:1.55,postalCode:57176010,birthDate:"1975-07-19T19:56:08.069Z",department:"Casa",email:"Felipe.Xavier96@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:53,managerId:52,name:"Lucas Nogueira",title:"Interno Configuration Analista",phone:"+55 (23) 4600-1246",hireDate:"2022-03-24",gender:"M",imgId:10,salary:30039.19,height:1.53,postalCode:84564721,birthDate:"2001-02-17T10:47:08.221Z",department:"M\xFAsica",email:"Roberto.Costa@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:54,managerId:52,name:"Pedro Henrique Silva",title:"Futuro Marca Produtor",phone:"(20) 0679-6655",hireDate:"2023-11-17",gender:"M",imgId:9,salary:20935.63,height:1.02,postalCode:92088735,birthDate:"2004-04-05T18:39:23.957Z",department:"Mercearia",email:"Washington_Barros62@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:55,managerId:51,name:"Sr. Lorenzo Xavier",title:"Chefe Configuration Gerente",phone:"+55 (45) 7612-8508",hireDate:"2022-10-14",gender:"M",imgId:10,salary:22520.13,height:1.44,postalCode:18524054,birthDate:"1982-04-12T04:15:25.375Z",department:"Esportes",email:"Samuel.Barros@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:56,managerId:55,name:"Murilo Melo Filho",title:"Interno Aplica\xE7\xF5es Especialista",phone:"+55 (33) 0847-2037",hireDate:"2023-01-21",gender:"M",imgId:8,salary:70766.33,height:1.86,postalCode:82584057,birthDate:"1977-05-14T18:32:39.311Z",department:"Sapatos",email:"Elisio.Albuquerque@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:57,managerId:55,name:"Emanuel Xavier",title:"Produto Infraestrutura Supervisor",phone:"+55 (03) 5767-5844",hireDate:"2024-10-17",gender:"M",imgId:6,salary:68682.69,height:1.76,postalCode:67488842,birthDate:"1991-04-12T06:11:16.650Z",department:"Automotivo",email:"Noah26@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:58,managerId:55,name:"Fel\xEDcia Moraes",title:"Nacional Otimiza\xE7\xE3o Engenheiro",phone:"+55 (35) 8552-6310",hireDate:"2024-06-14",gender:"F",imgId:8,salary:85703.68,height:1.61,postalCode:60692598,birthDate:"1967-06-18T01:02:44.990Z",department:"Industrial",email:"Daniel.Batista55@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:59,managerId:51,name:"Hugo Albuquerque",title:"Interno Identidade Administrador",phone:"(95) 6204-6516",hireDate:"2022-08-12",gender:"M",imgId:2,salary:93025.14,height:1.61,postalCode:24921516,birthDate:"1975-12-29T20:26:51.525Z",department:"Esportes",email:"Isabela_Silva65@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:60,managerId:59,name:"Maria Alice Saraiva",title:"Chefe Intranet Consultor",phone:"+55 (61) 5434-7618",hireDate:"2025-04-23",gender:"F",imgId:2,salary:31942.85,height:1.49,postalCode:77659254,birthDate:"1951-07-04T12:02:35.673Z",department:"J\xF3ias",email:"Eduardo98@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:61,managerId:59,name:"Marcela Moraes",title:"Regional Configuration Agente",phone:"+55 (00) 7680-5395",hireDate:"2025-12-30",gender:"F",imgId:3,salary:11076.34,height:1.3,postalCode:20068833,birthDate:"1955-05-27T06:03:02.962Z",department:"M\xFAsica",email:"Joana.Macedo@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:62,managerId:59,name:"Sarah Franco",title:"Legado Fatores Orquestrador",phone:"(84) 2769-6854",hireDate:"2025-01-27",gender:"F",imgId:4,salary:45824.62,height:1.65,postalCode:71218627,birthDate:"1978-12-23T21:51:31.120Z",department:"Beleza",email:"Antonella_Martins75@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:63,managerId:null,name:"Sra. Isabelly Martins",title:"Diretor(a) Executivo(a)",phone:"(01) 35800-9421",hireDate:"2021-07-13",gender:"F",imgId:10,salary:49470.75,height:1.09,postalCode:89217831,birthDate:"1987-04-15T13:46:36.979Z",department:"Ferramentas",email:"Manuela.Barros85@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:64,managerId:63,name:"M\xE1rcia Barros",title:"Din\xE2mico Otimiza\xE7\xE3o Planejador",phone:"(33) 7070-6684",hireDate:"2025-05-22",gender:"F",imgId:5,salary:24455.73,height:1.91,postalCode:90951398,birthDate:"1994-01-24T06:54:50.713Z",department:"Roupas",email:"Deneval48@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:65,managerId:64,name:"Maria Cec\xEDlia Souza",title:"Principal Programa T\xE9cnico",phone:"+55 (98) 3537-8097",hireDate:"2025-03-19",gender:"F",imgId:2,salary:99153.04,height:1.98,postalCode:28864914,birthDate:"1988-03-31T01:06:48.595Z",department:"Esportes",email:"JoaoPedro27@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:66,managerId:64,name:"Isabella Xavier",title:"Cliente Implementation Policial",phone:"(67) 6389-2566",hireDate:"2022-09-26",gender:"F",imgId:9,salary:4766.32,height:1.66,postalCode:51597085,birthDate:"1964-12-27T00:09:44.459Z",department:"Industrial",email:"Emanuel85@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:67,managerId:63,name:"H\xE9lio Souza",title:"Distrito Seguran\xE7a Associado",phone:"+55 (33) 3014-9498",hireDate:"2026-02-21",gender:"M",imgId:7,salary:68831.08,height:1.1,postalCode:95511023,birthDate:"1978-09-01T05:52:03.609Z",department:"Jardim",email:"Clara_Braga@gmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:68,managerId:67,name:"Ana Laura Carvalho",title:"Humano Marca Orquestrador",phone:"(17) 85881-5900",hireDate:"2022-02-16",gender:"F",imgId:6,salary:80741.25,height:1.52,postalCode:59546026,birthDate:"1964-06-13T11:05:34.296Z",department:"Roupas",email:"Antonio_Carvalho@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:69,managerId:67,name:"Roberto Batista",title:"Cliente Opera\xE7\xF5es Representante",phone:"+55 (32) 3598-1155",hireDate:"2023-10-08",gender:"M",imgId:8,salary:77314.43,height:1.19,postalCode:32338169,birthDate:"1949-01-31T02:50:25.750Z",department:"J\xF3ias",email:"Isadora_Moraes@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:70,managerId:67,name:"Daniel Costa Filho",title:"L\xEDder Resposta Representante",phone:"(23) 9421-4966",hireDate:"2022-12-18",gender:"M",imgId:4,salary:35365.57,height:1.39,postalCode:23894210,birthDate:"1983-06-05T21:55:29.330Z",department:"M\xFAsica",email:"Yuri_Carvalho99@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:71,managerId:null,name:"Elo\xE1 Costa",title:"Diretor(a) Executivo(a)",phone:"(07) 54332-9774",hireDate:"2021-09-29",gender:"F",imgId:9,salary:71366.97,height:1,postalCode:62068653,birthDate:"1961-04-21T10:17:59.729Z",department:"Ferramentas",email:"Emanuel_Moraes59@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:72,managerId:71,name:"Maria Santos",title:"Cliente Otimiza\xE7\xE3o Planejador",phone:"(71) 01720-7689",hireDate:"2025-04-09",gender:"F",imgId:3,salary:88096.11,height:1.99,postalCode:46688912,birthDate:"1971-07-05T10:50:51.862Z",department:"Turismo",email:"Emanuelly_Pereira@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:73,managerId:72,name:"Talita Moraes",title:"Legado Intranet Diretor",phone:"+55 (59) 7398-0822",hireDate:"2026-03-03",gender:"F",imgId:4,salary:8206.08,height:1.94,postalCode:70266772,birthDate:"1967-03-30T19:03:34.820Z",department:"Jardim",email:"Pedro45@bol.com.br",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:74,managerId:72,name:"Eduarda Costa",title:"Humano Programa Desenvolvedor",phone:"(54) 69598-6073",hireDate:"2025-12-04",gender:"F",imgId:8,salary:12577.41,height:1.34,postalCode:91459556,birthDate:"1992-06-26T14:17:25.605Z",department:"Jardim",email:"Anthony_Batista18@bol.com.br",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:75,managerId:71,name:"Raul Batista",title:"Regional Assurance Policial",phone:"+55 (97) 1609-1816",hireDate:"2025-02-26",gender:"M",imgId:7,salary:75199.82,height:1.06,postalCode:56358535,birthDate:"1970-05-31T23:43:31.070Z",department:"Jogos",email:"Daniel_Silva@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:76,managerId:75,name:"Lav\xEDnia Carvalho",title:"Produto Configuration Associado",phone:"(19) 2485-1728",hireDate:"2022-02-04",gender:"F",imgId:9,salary:23877.87,height:1.59,postalCode:25221651,birthDate:"1945-06-24T07:29:57.523Z",department:"Industrial",email:"Sarah31@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:77,managerId:75,name:"Margarida Carvalho Filho",title:"International Pesquisar Executivo",phone:"+55 (10) 5944-8572",hireDate:"2023-12-03",gender:"F",imgId:7,salary:64785.38,height:1.92,postalCode:41451422,birthDate:"1990-02-11T21:22:15.028Z",department:"Mercearia",email:"Breno_Silva@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:78,managerId:71,name:"Dalila Oliveira Neto",title:"Investidor Branding T\xE9cnico",phone:"+55 (69) 5205-0490",hireDate:"2022-09-01",gender:"F",imgId:8,salary:60614.28,height:1.43,postalCode:38655687,birthDate:"1952-05-10T02:15:30.888Z",department:"Sapatos",email:"Breno_Pereira@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:79,managerId:78,name:"Marli Barros",title:"Direto Mobilidade Designer",phone:"(50) 1688-8482",hireDate:"2023-02-15",gender:"F",imgId:7,salary:85867.95,height:1.89,postalCode:22970671,birthDate:"1968-05-28T00:34:06.745Z",department:"Casa",email:"Matheus_Pereira@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:80,managerId:78,name:"Maria Eduarda Albuquerque",title:"Chefe Mercados Consultor",phone:"(46) 0020-4671",hireDate:"2024-06-02",gender:"F",imgId:2,salary:54637.36,height:1.98,postalCode:55596954,birthDate:"2000-11-17T16:51:39.683Z",department:"J\xF3ias",email:"Paulo19@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:81,managerId:null,name:"Liz Franco Neto",title:"Diretor(a) Executivo(a)",phone:"(02) 7597-2008",hireDate:"2024-04-19",gender:"F",imgId:9,salary:79228.25,height:1.97,postalCode:28099540,birthDate:"1967-12-12T20:58:20.867Z",department:"Esportes",email:"Breno61@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:82,managerId:81,name:"Lav\xEDnia Oliveira",title:"Interno Branding Analista",phone:"(03) 5862-6484",hireDate:"2025-01-12",gender:"F",imgId:5,salary:44601.16,height:1.93,postalCode:79734368,birthDate:"1974-01-03T06:19:57.353Z",department:"Industrial",email:"Marcia.Carvalho50@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:83,managerId:82,name:"Nataniel Costa",title:"Humano Seguran\xE7a Gerente",phone:"(51) 2395-3949",hireDate:"2024-01-25",gender:"M",imgId:3,salary:67071.76,height:1.17,postalCode:16404632,birthDate:"1988-03-11T07:03:10.254Z",department:"Roupas",email:"Lucca13@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:84,managerId:82,name:"Pietro Oliveira",title:"Chefe Web Executivo",phone:"+55 (65) 3934-8618",hireDate:"2023-09-02",gender:"M",imgId:9,salary:30075.52,height:1.43,postalCode:69252972,birthDate:"1980-09-27T15:52:13.315Z",department:"Esportes",email:"Davi_Oliveira76@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:85,managerId:81,name:"L\xEDvia Moreira",title:"Humano Marca Representante",phone:"(27) 78133-4067",hireDate:"2023-01-13",gender:"F",imgId:8,salary:36666.95,height:1.05,postalCode:93287087,birthDate:"1978-06-14T01:49:40.430Z",department:"Sapatos",email:"Arthur_Moraes2@hotmail.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:86,managerId:85,name:"Maria Luiza Melo",title:"Chefe Branding Designer",phone:"+55 (14) 2240-4552",hireDate:"2023-11-06",gender:"F",imgId:8,salary:70260.73,height:1.7,postalCode:95361113,birthDate:"2004-04-16T11:41:32.844Z",department:"Computadores",email:"Marcela_Santos@yahoo.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:87,managerId:85,name:"Gael Martins",title:"Humano Paradigma Orquestrador",phone:"+55 (88) 3567-0201",hireDate:"2024-02-22",gender:"M",imgId:10,salary:48247.73,height:1.88,postalCode:48581231,birthDate:"1964-08-03T18:20:15.921Z",department:"J\xF3ias",email:"Helio74@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:88,managerId:85,name:"Giovanna Martins",title:"Nacional Intera\xE7\xF5es Desenvolvedor",phone:"(29) 2490-8015",hireDate:"2022-03-05",gender:"F",imgId:5,salary:10930.41,height:1.43,postalCode:63975520,birthDate:"1975-10-21T04:51:17.058Z",department:"Turismo",email:"Norberto_Carvalho65@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:89,managerId:81,name:"Felipe Silva",title:"Futuro Marketing Analista",phone:"+55 (00) 5975-7943",hireDate:"2025-09-13",gender:"M",imgId:7,salary:30961.65,height:1.44,postalCode:90196651,birthDate:"1946-05-28T18:01:43.070Z",department:"Automotivo",email:"MariaCecilia_Silva@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:90,managerId:89,name:"Ana Luiza Nogueira",title:"Din\xE2mico Usabilidade Policial",phone:"(60) 8830-7309",hireDate:"2026-01-30",gender:"F",imgId:2,salary:2822.74,height:1.68,postalCode:18412078,birthDate:"1972-07-07T09:54:39.816Z",department:"Eletr\xF4nicos",email:"Isabel_Albuquerque@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:91,managerId:89,name:"El\xEDsio Nogueira",title:"Senior Mobilidade Engenheiro",phone:"+55 (22) 9689-2315",hireDate:"2022-05-30",gender:"M",imgId:2,salary:5020.01,height:1.96,postalCode:18297424,birthDate:"1947-09-19T12:46:18.371Z",department:"Mercearia",email:"Melissa47@bol.com.br",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:92,managerId:null,name:"Anthony Braga",title:"Diretor(a) Executivo(a)",phone:"+55 (69) 0999-2310",hireDate:"2023-10-19",gender:"M",imgId:8,salary:40988.86,height:1.55,postalCode:76236266,birthDate:"1991-01-07T21:41:10.745Z",department:"J\xF3ias",email:"Lorena.Santos97@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:93,managerId:92,name:"Ana Luiza Batista",title:"Futuro Divis\xE3o Policial",phone:"(50) 1228-6185",hireDate:"2025-06-25",gender:"F",imgId:4,salary:65860.07,height:1.4,postalCode:39774576,birthDate:"1982-10-14T06:59:06.589Z",department:"Crian\xE7as",email:"Gabriel.Moraes@hotmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:94,managerId:93,name:"Dalila Saraiva",title:"Futuro Otimiza\xE7\xE3o Administrador",phone:"(07) 6936-9058",hireDate:"2023-12-31",gender:"F",imgId:2,salary:38065.2,height:1.54,postalCode:58494369,birthDate:"1960-11-14T17:41:53.034Z",department:"Filmes",email:"JoaoLucas.Pereira6@live.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:95,managerId:93,name:"Cec\xEDlia Batista",title:"Senior Solu\xE7\xF5es Supervisor",phone:"(99) 92346-1966",hireDate:"2025-04-18",gender:"F",imgId:5,salary:43228.93,height:1.6,postalCode:59431226,birthDate:"1986-10-29T03:24:41.172Z",department:"Crian\xE7as",email:"Danilo.Pereira@yahoo.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:96,managerId:93,name:"Morgana Saraiva",title:"Produto Usabilidade Arquiteto",phone:"(27) 0014-5607",hireDate:"2024-01-28",gender:"F",imgId:5,salary:2137.48,height:1.35,postalCode:62522757,birthDate:"1997-08-23T09:32:17.154Z",department:"Beb\xEA",email:"MariaLuiza57@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:97,managerId:92,name:"Jana\xEDna Souza",title:"Central Implementa\xE7\xE3o Coordenador",phone:"(74) 38147-1032",hireDate:"2021-11-09",gender:"F",imgId:9,salary:28364.3,height:1.84,postalCode:37880182,birthDate:"1964-07-20T04:52:59.460Z",department:"J\xF3ias",email:"Gustavo.Moraes49@yahoo.com",active:!1,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:98,managerId:97,name:"Maria Luiza Costa",title:"Distrito M\xE9tricas Atentende",phone:"(28) 72489-0145",hireDate:"2025-07-29",gender:"F",imgId:7,salary:94809.14,height:1.5,postalCode:72928156,birthDate:"2002-04-26T16:05:09.346Z",department:"J\xF3ias",email:"Maite_Melo@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:99,managerId:97,name:"V\xEDctor Pereira Jr.",title:"Investidor Configuration Estrategista",phone:"(00) 0236-2240",hireDate:"2022-01-12",gender:"M",imgId:3,salary:34092.78,height:1.83,postalCode:47457523,birthDate:"1970-11-09T04:20:04.770Z",department:"Eletr\xF4nicos",email:"Antonella10@gmail.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"},{id:100,managerId:97,name:"Ana Clara Silva",title:"Central Aplica\xE7\xF5es Produtor",phone:"+55 (84) 2352-8687",hireDate:"2025-06-21",gender:"F",imgId:5,salary:42036.51,height:1.74,postalCode:54719307,birthDate:"1985-11-04T01:44:01.259Z",department:"Turismo",email:"Gubio.Costa@live.com",active:!0,property1:"Valor 1",property2:"Valor 2",property3:"Valor 3",property4:"Valor 4",property5:"Valor 5",property6:"Valor 6",property7:"Valor 7",property8:"Valor 8",property9:"Valor 9",property10:"Valor 10",property11:"Valor 11",property12:"Valor 12",property13:"Valor 13",property14:"Valor 14",property15:"Valor 15",property16:"Valor 16",property17:"Valor 17",property18:"Valor 18",property19:"Valor 19",property20:"Valor 20",property21:"Valor 21",property22:"Valor 22",property23:"Valor 23",property24:"Valor 24",property25:"Valor 25",property26:"Valor 26",property27:"Valor 27",property28:"Valor 28",property29:"Valor 29",property30:"Valor 30",property31:"Valor 31",property32:"Valor 32",property33:"Valor 33",property34:"Valor 34",property35:"Valor 35",property36:"Valor 36",property37:"Valor 37",property38:"Valor 38",property39:"Valor 39",property40:"Valor 40",property41:"Valor 41",property42:"Valor 42",property43:"Valor 43",property44:"Valor 44",property45:"Valor 45",property46:"Valor 46",property47:"Valor 47",property48:"Valor 48",property49:"Valor 49",property50:"Valor 50"}];var Ui=`<thf-treelist
  t-parent-id-field="managerId"
  [t-actions]="actionSelection()"
  [t-columns]="columnsSelection()"
  [t-components-size]="sizeSelection()"
  [t-container]="otherPropertiesSelection().includes('container')"
  [t-height]="heightSelection()"
  [t-items]="items"
  [t-literals]="literalsCustomSelection()"
  [t-loading]="otherPropertiesSelection().includes('loading')"
  [t-max-height]="heightMaxSelection()"
  [t-min-height]="heightMinSelection()"
  [t-page-size]="pageSizeSelection()"
  [t-pageable]="paginationSelection().includes('pageable')"
  [t-resizable]="otherPropertiesSelection().includes('resizable')"
  [t-selectable]="selectableSelection().includes('selectable')"
  [t-show-more-disabled]="
    paginationSelection().includes('show-more-disabled')
  "
  [t-show-more-visible]="paginationSelection().includes('show-more-visible')"
  [t-spacing]="spacingSelection()"
  [t-striped]="otherPropertiesSelection().includes('striped')"
  [t-text-wrap]="otherPropertiesSelection().includes('text-wrap')"
  [t-virtual-scroll]="otherPropertiesSelection().includes('virtual-scroll')"
  (t-loadingChange)="updateLoadingEvent()"
  (t-show-more)="changeEvent('t-show-more', $event)"
  (t-show-more-disabledChange)="showMoreDisabedEvent($event)"
/>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event()"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2">
  <div style="width: 100%">
    <po-accordion p-allow-expand-all-items>
      <po-accordion-item p-label="Columns">
        <po-checkbox-group
          name="columnsNameSelection"
          [(ngModel)]="columnsNameSelection"
          p-columns="4"
          [p-options]="columnsOptions"
          (p-change)="columnsSelectionHandler()"
        />
      </po-accordion-item>

      <po-accordion-item p-label="Actions">
        <po-radio-group
          name="actionsOptions"
          p-columns="3"
          [p-options]="actionsOptions"
          (p-change)="actionsSelectionHandler($event)"
        />
      </po-accordion-item>
    </po-accordion>
  </div>

  <po-container class="po-mb-2 po-mt-2 po-md-12">
    <po-checkbox-group
      name="otherProperties"
      [(ngModel)]="otherPropertiesSelection"
      p-columns="4"
      p-label="Other Properties"
      [p-options]="otherPropertiesOptions"
    />
  </po-container>

  <po-container class="po-mb-2 po-md-6">
    <po-combo
      class="po-md-6"
      [(ngModel)]="sizeSelection"
      p-label="Size"
      [p-options]="sizeOptions"
      [p-clean]="true"
    />
    <po-combo
      class="po-md-6"
      [(ngModel)]="spacingSelection"
      p-label="Column Spacing"
      [p-options]="columnSpacingOptions"
      [p-clean]="true"
    />
  </po-container>

  <po-container class="po-mb-2 po-md-6">
    <po-number
      class="po-md-4"
      [(ngModel)]="heightSelection"
      p-label="Height"
      [p-clean]="true"
    />
    <po-number
      class="po-md-4"
      [(ngModel)]="heightMaxSelection"
      p-label="Max Height"
      [p-clean]="true"
    />
    <po-number
      class="po-md-4"
      [(ngModel)]="heightMinSelection"
      p-label="Min Height"
      [p-clean]="true"
    />
  </po-container>

  <po-container class="po-mb-2 po-md-6">
    <po-textarea
      name="literalsSelection"
      [(ngModel)]="literalsSelection"
      p-label="Literals"
      p-help='{"loadMoreData": "Carregar mais"}'
      (p-change-model)="literalsSelectionHandler()"
    />
  </po-container>

  <po-container class="po-mb-2 po-md-6">
    <po-checkbox-group
      class="po-md-6"
      name="pagination"
      [(ngModel)]="paginationSelection"
      p-label="Pagination"
      p-columns="1"
      [p-options]="paginationOptions"
      (p-change)="paginationSelectionHandler()"
    />
    <po-number
      class="po-md-6"
      p-label="Page Size"
      [(ngModel)]="pageSizeSelection"
      [p-clean]="true"
    />
  </po-container>
</div>

<div class="po-row po-mb-2">
  <po-button
    class="po-lg-3 po-md-6"
    p-label="Restore"
    (p-click)="restore()"
  />
</div>
`,$i=`import { Component, inject, OnInit, signal } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
} from '@po-ui/ng-components';

import {
  ThfTableAction,
  ThfTreeListColumn,
  ThfTreeListLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-treelist-labs-doc',
  templateUrl: './thf-treelist-labs-doc.component.html',
  standalone: false,
})
export class ThfTreeListLabsDocComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  items = data.flat;
  event = signal('');

  private readonly actionsDefinition = {
    one: <Array<ThfTableAction>>[
      {
        label: '',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
      },
    ],
    one_hidden: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        visible: false,
      },
    ],
    one_disabled: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        disabled: true,
      },
    ],
    one_label: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
      },
    ],
    one_danger: <Array<ThfTableAction>>[
      {
        label: '',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        type: 'danger',
      },
    ],
    many: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
      },
      {
        label: 'Action 2',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-airplane-takeoff',
      },
    ],
    many_hidden: <Array<ThfTableAction>>[
      {
        label: 'Action 2',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        visible: false,
      },
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        visible: true,
      },
    ],
    many_disabled: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        disabled: true,
      },
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        disabled: false,
      },
    ],
    many_label: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        icon: 'an an-arrow-up-right',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
      },
      {
        label: 'Action 2',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
      },
    ],
    many_danger: <Array<ThfTableAction>>[
      {
        label: 'Action 1',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
        type: 'danger',
      },
      {
        label: 'Action 2',
        action: (e: any) =>
          this.poNotification.information(\`\${e.id} - \${e.name}\`),
        icon: 'an an-arrow-up-right',
      },
    ],
  };
  private readonly columnsDefinition: { [key: string]: ThfTreeListColumn } = {
    name: <ThfTreeListColumn>{ property: 'name' },
    title: <ThfTreeListColumn>{
      property: 'title',
      label: 'T\xEDtulo',
      width: 150,
    },
    phone: <ThfTreeListColumn>{ property: 'phone', label: 'Telefone' },
    phone_mask: <ThfTreeListColumn>{
      property: 'phone',
      label: 'Telefone 2',
      mask: '(99) 99999-9999',
    },
    height: <ThfTreeListColumn>{
      property: 'height',
      label: 'Altura',
      type: 'number',
      width: '5%',
    },
    postalCode: <ThfTreeListColumn>{
      property: 'postalCode',
      label: 'CEP',
      type: 'number',
      mask: '99.999-999',
    },
    salary: <ThfTreeListColumn>{
      property: 'salary',
      label: 'Sal\xE1rio',
      type: 'currency',
      format: 'BRL',
    },
    hireDate: <ThfTreeListColumn>{
      property: 'hireDate',
      label: 'Contrata\xE7\xE3o',
      type: 'date',
    },
    birthDate: <ThfTreeListColumn>{
      property: 'birthDate',
      label: 'Anivers\xE1rio',
      type: 'date',
      format: 'dd/MM',
    },
    created: <ThfTreeListColumn>{
      property: 'birthDate',
      label: 'Cria\xE7\xE3o',
      type: 'dateTime',
    },
    created_format: <ThfTreeListColumn>{
      property: 'birthDate',
      label: 'Cria\xE7\xE3o 2',
      type: 'dateTime',
      format: 'HH:mm MM/yyyy',
    },
    active: <ThfTreeListColumn>{
      property: 'active',
      label: 'Ativo',
      type: 'boolean',
    },
    active_format: <ThfTreeListColumn>{
      property: 'active',
      label: 'Ativo 2 ',
      type: 'boolean',
      booleanFalse: '\xC9 falso',
      booleanTrue: '\xC9 verdadeiro',
    },
    gender: <ThfTreeListColumn>{
      property: 'gender',
      label: 'G\xEAnero',
      type: 'label',
      labels: [
        { value: 'M', label: 'masculino', color: 'caption-tag-19' },
        { value: 'F', label: 'feminino', color: 'caption-tag-28' },
      ],
    },
  };

  actionsOptions: Array<PoCheckboxGroupOption> = [
    { label: '1 Action', value: 'action-1' },
    { label: '1 Action (visible=false)', value: 'action-1-hidden' },
    { label: '1 Action (disabled=true)', value: 'action-1-disabled' },
    { label: '1 Action (label)', value: 'action-1-label' },
    { label: '1 Action (danger)', value: 'action-1-danger' },
    { label: '2 Actions', value: 'action-2' },
    {
      label: '2 Actions (1.visible=false | 1.visible=true)',
      value: 'action-2-hidden',
    },
    {
      label: '2 Actions (1.disabled=false | 1.disabled=true)',
      value: 'action-2-disabled',
    },
    { label: '2 Actions (1.label)', value: 'action-2-label' },
    { label: '2 Action2 (1.danger)', value: 'action-2-danger' },
    { label: 'None', value: 'none' },
  ];
  columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'name', label: 'Nome (text | sem Label)' },
    { value: 'title', label: 'T\xEDtulo (text | w:150px)' },
    { value: 'phone', label: 'Telefone (text)' },
    { value: 'phone_mask', label: 'Telefone (text | mask)' },
    { value: 'height', label: 'Altura (number | w:5%)' },
    { value: 'postalCode', label: 'postalCode (number | mask)' },
    { value: 'salary', label: 'Sal\xE1rio (curreny | format)' },
    { value: 'hireDate', label: 'Contrata\xE7\xE3o (date)' },
    { value: 'birthDate', label: 'Anivers\xE1rio (date | format)' },
    { value: 'created', label: 'Cria\xE7\xE3o (dateTime)' },
    { value: 'created_format', label: 'Cria\xE7\xE3o (dateTime | format)' },
    { value: 'active', label: 'Ativo (boolean)' },
    { value: 'active_format', label: 'Ativo 2 (boolean | booleanCustom)' },
    { value: 'gender', label: 'G\xEAnero (label)' },
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Container', value: 'container' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'text-wrap' },
    { label: 'Virtual Scroll', value: 'virtual-scroll' },
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Visible', value: 'show-more-visible', disabled: false },
    {
      label: 'Show More Disabled',
      value: 'show-more-disabled',
      disabled: false,
    },
  ];
  selectableOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
  ];
  sizeOptions = [
    { value: 'small', label: 'small' },
    { value: 'medium', label: 'medium' },
  ];
  columnSpacingOptions = [
    { value: 'extraSmall', label: 'extraSmall' },
    { value: 'small', label: 'small' },
    { value: 'medium', label: 'medium' },
    { value: 'large', label: 'large' },
  ];

  actionSelection = signal<Array<ThfTableAction>>([]);
  columnsNameSelection = signal<Array<string>>([]);
  columnsSelection = signal<Array<ThfTreeListColumn>>([]);
  heightMaxSelection = signal<string | number | undefined>(undefined);
  heightMinSelection = signal<string | number | undefined>(undefined);
  heightSelection = signal<string | number | undefined>(undefined);
  literalsCustomSelection = signal<ThfTreeListLiterals>({});
  literalsSelection = signal<string>('');
  otherPropertiesSelection = signal<Array<string>>([]);
  pageSizeSelection = signal<number | undefined>(undefined);
  paginationSelection = signal<Array<string>>([]);
  selectableSelection = signal<Array<string>>([]);
  sizeSelection = signal<string | undefined>(undefined);
  spacingSelection = signal<string | undefined>(undefined);

  ngOnInit(): void {
    this.restore();
  }

  actionsSelectionHandler(value: string) {
    let result: Array<ThfTableAction> = [];

    switch (value) {
      case 'action-1':
        result = [...this.actionsDefinition.one];
        break;

      case 'action-1-hidden':
        result = [...this.actionsDefinition.one_hidden];
        break;

      case 'action-1-disabled':
        result = [...this.actionsDefinition.one_disabled];
        break;

      case 'action-1-label':
        result = [...this.actionsDefinition.one_label];
        break;

      case 'action-1-danger':
        result = [...this.actionsDefinition.one_danger];
        break;

      case 'action-2':
        result = [...this.actionsDefinition.many];
        break;

      case 'action-2-hidden':
        result = [...this.actionsDefinition.many_hidden];
        break;

      case 'action-2-disabled':
        result = [...this.actionsDefinition.many_disabled];
        break;

      case 'action-2-label':
        result = [...this.actionsDefinition.many_label];
        break;

      case 'action-2-danger':
        result = [...this.actionsDefinition.many_danger];
        break;

      default:
        break;
    }

    this.actionSelection.set(result);
  }

  columnsSelectionHandler() {
    const result: Array<ThfTreeListColumn> = [];

    Object.keys(this.columnsDefinition).forEach((definition) => {
      if (this.columnsNameSelection().includes(definition)) {
        result.push(this.columnsDefinition[definition]);
      }
    });

    this.columnsSelection.set(result);
  }

  literalsSelectionHandler() {
    try {
      this.literalsCustomSelection.set(JSON.parse(this.literalsSelection()));
    } catch {
      this.literalsCustomSelection.set({});
    }
  }

  paginationSelectionHandler() {
    const pageable = this.paginationSelection().includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  showMoreDisabedEvent(value: boolean) {
    if (!value) {
      const paginationSelection = this.paginationSelection().filter(
        (x) => x !== 'show-more-disabled',
      );
      this.paginationSelection.set(paginationSelection);
    }
  }

  updateLoadingEvent() {
    const otherPropertiesSelection = this.otherPropertiesSelection().filter(
      (x) => x !== 'loading',
    );
    this.otherPropertiesSelection.set(otherPropertiesSelection);
  }

  restore() {
    this.columnsNameSelection.set([
      'name',
      'title',
      'phone',
      'height',
      'postalCode',
      'salary',
      'hireDate',
      'gender',
    ]);
    this.heightMaxSelection.set(undefined);
    this.heightMinSelection.set(undefined);
    this.heightSelection.set(250);
    this.literalsSelection.set('');
    this.otherPropertiesSelection.set([
      'container',
      'striped',
      'virtual-scroll',
    ]);
    this.pageSizeSelection.set(undefined);
    this.paginationSelection.set(['show-more-visible']);
    this.selectableSelection.set([]);
    this.sizeSelection.set(undefined);
    this.spacingSelection.set(undefined);

    this.actionsSelectionHandler('none');
    this.columnsSelectionHandler();
    this.literalsSelectionHandler();
    this.paginationSelectionHandler();
  }

  changeEvent(eventDescription: any, value: any) {
    this.event.update((x) => {
      const data = value ? \` - \${JSON.stringify(value)}\` : '';

      return \`<p>\${eventDescription}\${data}</p>\` + x;
    });
  }
}
`;function dn(p,T){if(p&1){let n=L();i(0,"div",7)(1,"div",8)(2,"po-accordion",9)(3,"po-accordion-item",10)(4,"po-checkbox-group",11),b("ngModelChange",function(o){c(n);let l=s();return S(l.columnsNameSelection,o)||(l.columnsNameSelection=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.columnsSelectionHandler())}),t()(),i(5,"po-accordion-item",12)(6,"po-radio-group",13),f("p-change",function(o){c(n);let l=s();return u(l.actionsSelectionHandler(o))}),t()()()(),i(7,"po-container",14)(8,"po-checkbox-group",15),b("ngModelChange",function(o){c(n);let l=s();return S(l.otherPropertiesSelection,o)||(l.otherPropertiesSelection=o),u(o)}),t()(),i(9,"po-container",16)(10,"po-combo",17),b("ngModelChange",function(o){c(n);let l=s();return S(l.sizeSelection,o)||(l.sizeSelection=o),u(o)}),t(),i(11,"po-combo",18),b("ngModelChange",function(o){c(n);let l=s();return S(l.spacingSelection,o)||(l.spacingSelection=o),u(o)}),t()(),i(12,"po-container",16)(13,"po-number",19),b("ngModelChange",function(o){c(n);let l=s();return S(l.heightSelection,o)||(l.heightSelection=o),u(o)}),t(),i(14,"po-number",20),b("ngModelChange",function(o){c(n);let l=s();return S(l.heightMaxSelection,o)||(l.heightMaxSelection=o),u(o)}),t(),i(15,"po-number",21),b("ngModelChange",function(o){c(n);let l=s();return S(l.heightMinSelection,o)||(l.heightMinSelection=o),u(o)}),t()(),i(16,"po-container",16)(17,"po-textarea",22),b("ngModelChange",function(o){c(n);let l=s();return S(l.literalsSelection,o)||(l.literalsSelection=o),u(o)}),f("p-change-model",function(){c(n);let o=s();return u(o.literalsSelectionHandler())}),t()(),i(18,"po-container",16)(19,"po-checkbox-group",23),b("ngModelChange",function(o){c(n);let l=s();return S(l.paginationSelection,o)||(l.paginationSelection=o),u(o)}),f("p-change",function(){c(n);let o=s();return u(o.paginationSelectionHandler())}),t(),i(20,"po-number",24),b("ngModelChange",function(o){c(n);let l=s();return S(l.pageSizeSelection,o)||(l.pageSizeSelection=o),u(o)}),t()()(),i(21,"div",25)(22,"po-button",26),f("p-click",function(){c(n);let o=s();return u(o.restore())}),t()()}if(p&2){let n=s();d(4),y("ngModel",n.columnsNameSelection),m("p-options",n.columnsOptions),d(2),m("p-options",n.actionsOptions),d(2),y("ngModel",n.otherPropertiesSelection),m("p-options",n.otherPropertiesOptions),d(2),y("ngModel",n.sizeSelection),m("p-options",n.sizeOptions)("p-clean",!0),d(),y("ngModel",n.spacingSelection),m("p-options",n.columnSpacingOptions)("p-clean",!0),d(2),y("ngModel",n.heightSelection),m("p-clean",!0),d(),y("ngModel",n.heightMaxSelection),m("p-clean",!0),d(),y("ngModel",n.heightMinSelection),m("p-clean",!0),d(2),y("ngModel",n.literalsSelection),d(2),y("ngModel",n.paginationSelection),m("p-options",n.paginationOptions),d(),y("ngModel",n.pageSizeSelection),m("p-clean",!0)}}var Ue=(()=>{class p{constructor(){this.htmlCode=Ui,this.tsCode=$i,this.poNotification=it(ie),this.items=Wi,this.event=H(""),this.actionsDefinition={one:[{label:"",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right"}],one_hidden:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",visible:!1}],one_disabled:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",disabled:!0}],one_label:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`)}],one_danger:[{label:"",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",type:"danger"}],many:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right"},{label:"Action 2",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-airplane-takeoff"}],many_hidden:[{label:"Action 2",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",visible:!1},{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",visible:!0}],many_disabled:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",disabled:!0},{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",disabled:!1}],many_label:[{label:"Action 1",icon:"an an-arrow-up-right",action:n=>this.poNotification.information(`${n.id} - ${n.name}`)},{label:"Action 2",action:n=>this.poNotification.information(`${n.id} - ${n.name}`)}],many_danger:[{label:"Action 1",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right",type:"danger"},{label:"Action 2",action:n=>this.poNotification.information(`${n.id} - ${n.name}`),icon:"an an-arrow-up-right"}]},this.columnsDefinition={name:{property:"name"},title:{property:"title",label:"T\xEDtulo",width:150},phone:{property:"phone",label:"Telefone"},phone_mask:{property:"phone",label:"Telefone 2",mask:"(99) 99999-9999"},height:{property:"height",label:"Altura",type:"number",width:"5%"},postalCode:{property:"postalCode",label:"CEP",type:"number",mask:"99.999-999"},salary:{property:"salary",label:"Sal\xE1rio",type:"currency",format:"BRL"},hireDate:{property:"hireDate",label:"Contrata\xE7\xE3o",type:"date"},birthDate:{property:"birthDate",label:"Anivers\xE1rio",type:"date",format:"dd/MM"},created:{property:"birthDate",label:"Cria\xE7\xE3o",type:"dateTime"},created_format:{property:"birthDate",label:"Cria\xE7\xE3o 2",type:"dateTime",format:"HH:mm MM/yyyy"},active:{property:"active",label:"Ativo",type:"boolean"},active_format:{property:"active",label:"Ativo 2 ",type:"boolean",booleanFalse:"\xC9 falso",booleanTrue:"\xC9 verdadeiro"},gender:{property:"gender",label:"G\xEAnero",type:"label",labels:[{value:"M",label:"masculino",color:"caption-tag-19"},{value:"F",label:"feminino",color:"caption-tag-28"}]}},this.actionsOptions=[{label:"1 Action",value:"action-1"},{label:"1 Action (visible=false)",value:"action-1-hidden"},{label:"1 Action (disabled=true)",value:"action-1-disabled"},{label:"1 Action (danger)",value:"action-1-danger"},{label:"2 Actions",value:"action-2"},{label:"2 Actions (1.visible=false | 1.visible=true)",value:"action-2-hidden"},{label:"2 Actions (1.disabled=false | 1.disabled=true)",value:"action-2-disabled"},{label:"2 Actions (1.label)",value:"action-2-label"},{label:"2 Action2 (1.danger)",value:"action-2-danger"},{label:"None",value:"none"}],this.columnsOptions=[{value:"name",label:"Nome (text | sem Label)"},{value:"title",label:"T\xEDtulo (text | w:150px)"},{value:"phone",label:"Telefone (text)"},{value:"phone_mask",label:"Telefone (text | mask)"},{value:"height",label:"Altura (number | w:5%)"},{value:"postalCode",label:"postalCode (number | mask)"},{value:"salary",label:"Sal\xE1rio (curreny | format)"},{value:"hireDate",label:"Contrata\xE7\xE3o (date)"},{value:"birthDate",label:"Anivers\xE1rio (date | format)"},{value:"created",label:"Cria\xE7\xE3o (dateTime)"},{value:"created_format",label:"Cria\xE7\xE3o (dateTime | format)"},{value:"active",label:"Ativo (boolean)"},{value:"active_format",label:"Ativo 2 (boolean | booleanCustom)"},{value:"gender",label:"G\xEAnero (label)"}],this.otherPropertiesOptions=[{label:"Container",value:"container"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"text-wrap"},{label:"Virtual Scroll",value:"virtual-scroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Visible",value:"show-more-visible",disabled:!1},{label:"Show More Disabled",value:"show-more-disabled",disabled:!1}],this.selectableOptions=[{label:"Selectable",value:"selectable"}],this.sizeOptions=[{value:"small",label:"small"},{value:"medium",label:"medium"}],this.columnSpacingOptions=[{value:"extraSmall",label:"extraSmall"},{value:"small",label:"small"},{value:"medium",label:"medium"},{value:"large",label:"large"}],this.actionSelection=H([]),this.columnsNameSelection=H([]),this.columnsSelection=H([]),this.heightMaxSelection=H(void 0),this.heightMinSelection=H(void 0),this.heightSelection=H(void 0),this.literalsCustomSelection=H({}),this.literalsSelection=H(""),this.otherPropertiesSelection=H([]),this.pageSizeSelection=H(void 0),this.paginationSelection=H([]),this.selectableSelection=H([]),this.sizeSelection=H(void 0),this.spacingSelection=H(void 0)}ngOnInit(){this.restore()}actionsSelectionHandler(n){let a=[];switch(n){case"action-1":a=[...this.actionsDefinition.one];break;case"action-1-hidden":a=[...this.actionsDefinition.one_hidden];break;case"action-1-disabled":a=[...this.actionsDefinition.one_disabled];break;case"action-1-label":a=[...this.actionsDefinition.one_label];break;case"action-1-danger":a=[...this.actionsDefinition.one_danger];break;case"action-2":a=[...this.actionsDefinition.many];break;case"action-2-hidden":a=[...this.actionsDefinition.many_hidden];break;case"action-2-disabled":a=[...this.actionsDefinition.many_disabled];break;case"action-2-label":a=[...this.actionsDefinition.many_label];break;case"action-2-danger":a=[...this.actionsDefinition.many_danger];break;default:break}this.actionSelection.set(a)}columnsSelectionHandler(){let n=[];Object.keys(this.columnsDefinition).forEach(a=>{this.columnsNameSelection().includes(a)&&n.push(this.columnsDefinition[a])}),this.columnsSelection.set(n)}literalsSelectionHandler(){try{this.literalsCustomSelection.set(JSON.parse(this.literalsSelection()))}catch(n){this.literalsCustomSelection.set({})}}paginationSelectionHandler(){let n=this.paginationSelection().includes("pageable");this.paginationOptions[1].disabled=!n,this.paginationOptions[2].disabled=!n,this.paginationOptions=[...this.paginationOptions]}showMoreDisabedEvent(n){if(!n){let a=this.paginationSelection().filter(o=>o!=="show-more-disabled");this.paginationSelection.set(a)}}updateLoadingEvent(){let n=this.otherPropertiesSelection().filter(a=>a!=="loading");this.otherPropertiesSelection.set(n)}restore(){this.columnsNameSelection.set(["name","title","phone","height","postalCode","salary","hireDate","gender"]),this.heightMaxSelection.set(void 0),this.heightMinSelection.set(void 0),this.heightSelection.set(400),this.literalsSelection.set(""),this.otherPropertiesSelection.set(["container","striped","virtual-scroll"]),this.pageSizeSelection.set(void 0),this.paginationSelection.set(["show-more-visible"]),this.selectableSelection.set([]),this.sizeSelection.set(void 0),this.spacingSelection.set(void 0),this.actionsSelectionHandler("none"),this.columnsSelectionHandler(),this.literalsSelectionHandler(),this.paginationSelectionHandler()}changeEvent(n,a){this.event.update(o=>{let l=a?` - ${JSON.stringify(a)}`:"";return`<p>${n}${l}</p>`+o})}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-treelist-labs-doc"]],standalone:!1,decls:13,vars:26,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-parent-id-field","managerId",3,"t-loadingChange","t-show-more","t-show-more-disabledChange","t-actions","t-columns","t-components-size","t-container","t-height","t-items","t-literals","t-loading","t-max-height","t-min-height","t-page-size","t-pageable","t-resizable","t-selectable","t-show-more-disabled","t-show-more-visible","t-spacing","t-striped","t-text-wrap","t-virtual-scroll"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"dynamicTemplate","htmlCode","properties","showOthersCodeButton","tsCode"],[1,"po-row","po-mt-2","po-mb-2"],[2,"width","100%"],["p-allow-expand-all-items",""],["p-label","Columns"],["name","columnsNameSelection","p-columns","4",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Actions"],["name","actionsOptions","p-columns","3",3,"p-change","p-options"],[1,"po-mb-2","po-mt-2","po-md-12"],["name","otherProperties","p-columns","4","p-label","Other Properties",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-md-6"],["p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options","p-clean"],["p-label","Column Spacing",1,"po-md-6",3,"ngModelChange","ngModel","p-options","p-clean"],["p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel","p-clean"],["p-label","Max Height",1,"po-md-4",3,"ngModelChange","ngModel","p-clean"],["p-label","Min Height",1,"po-md-4",3,"ngModelChange","ngModel","p-clean"],["name","literalsSelection","p-label","Literals","p-help",'{"loadMoreData": "Carregar mais"}',3,"ngModelChange","p-change-model","ngModel"],["name","pagination","p-label","Pagination","p-columns","1",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Page Size",1,"po-md-6",3,"ngModelChange","ngModel","p-clean"],[1,"po-row","po-mb-2"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1&&(i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),r(3,"po-divider",2),i(4,"thf-treelist",3),f("t-loadingChange",function(){return o.updateLoadingEvent()})("t-show-more",function(E){return o.changeEvent("t-show-more",E)})("t-show-more-disabledChange",function(E){return o.showMoreDisabedEvent(E)}),t(),i(5,"po-container",4)(6,"span",1),e(7,"Events"),t(),r(8,"po-divider",2)(9,"div",5),t(),r(10,"app-code-accordion-doc",6),U(11,dn,23,22,"ng-template",null,0,X),t()),a&2){let l=$(12);d(4),m("t-actions",o.actionSelection())("t-columns",o.columnsSelection())("t-components-size",o.sizeSelection())("t-container",o.otherPropertiesSelection().includes("container"))("t-height",o.heightSelection())("t-items",o.items)("t-literals",o.literalsCustomSelection())("t-loading",o.otherPropertiesSelection().includes("loading"))("t-max-height",o.heightMaxSelection())("t-min-height",o.heightMinSelection())("t-page-size",o.pageSizeSelection())("t-pageable",o.paginationSelection().includes("pageable"))("t-resizable",o.otherPropertiesSelection().includes("resizable"))("t-selectable",o.selectableSelection().includes("selectable"))("t-show-more-disabled",o.paginationSelection().includes("show-more-disabled"))("t-show-more-visible",o.paginationSelection().includes("show-more-visible"))("t-spacing",o.spacingSelection())("t-striped",o.otherPropertiesSelection().includes("striped"))("t-text-wrap",o.otherPropertiesSelection().includes("text-wrap"))("t-virtual-scroll",o.otherPropertiesSelection().includes("virtual-scroll")),d(5),m("innerHTML",o.event(),Pe),d(),m("dynamicTemplate",l)("htmlCode",o.htmlCode)("properties",!0)("showOthersCodeButton",!0)("tsCode",o.tsCode)}},dependencies:[j,Q,M,W,B,h,v,ce,te,Fe,Re,Ee,Te,C],encapsulation:2})}}return p})();var $e=[{id:1,name:"Daryl Sweeney",title:"Chief Executive Officer",phone:"(555) 924-9726",managerId:null,hireDate:new Date("2025-01-15"),imgId:2,gender:"M"},{id:2,name:"Guy Wooten",title:"Chief Technical Officer",phone:"(438) 738-4935",managerId:1,hireDate:new Date("2025-02-19"),imgId:8,gender:"M"},{id:32,name:"Buffy Weber",title:"VP, Engineering",phone:"(699) 838-6121",managerId:2,hireDate:new Date("2025-04-13"),imgId:4,gender:"F"},{id:11,name:"Hyacinth Hood",title:"Team Lead",phone:"(889) 345-2438",managerId:32,hireDate:new Date("2025-01-17"),imgId:1,gender:"M"},{id:60,name:"Akeem Carr",title:"Junior Software Developer",phone:"(738) 136-2814",managerId:11,hireDate:new Date("2025-01-18"),imgId:5,gender:"M"},{id:78,name:"Rinah Simon",title:"Software Developer",phone:"(285) 912-5271",managerId:11,hireDate:new Date("2025-03-17"),imgId:9,gender:"F"},{id:42,name:"Gage Daniels",title:"Software Architect",phone:"(107) 290-6260",managerId:32,hireDate:new Date("2025-03-14"),imgId:8,gender:"M"},{id:43,name:"Constance Vazquez",title:"Director, Engineering",phone:"(800) 301-1978",managerId:32,hireDate:new Date("2025-03-18"),imgId:6,gender:"F"},{id:46,name:"Darrel Solis",title:"Team Lead",phone:"(327) 977-0216",managerId:43,hireDate:new Date("2025-04-15"),imgId:1,gender:"M"},{id:47,name:"Brian Yang",title:"Senior Software Developer",phone:"(565) 146-5435",managerId:46,hireDate:new Date("2025-02-21"),imgId:10,gender:"M"},{id:50,name:"Lillian Bradshaw",title:"Software Developer",phone:"(323) 509-3479",managerId:46,hireDate:new Date("2025-05-23"),imgId:3,gender:"F"},{id:51,name:"Christian Palmer",title:"Technical Lead",phone:"(490) 421-8718",managerId:46,hireDate:new Date("2025-04-16"),imgId:5,gender:"M"},{id:55,name:"Summer Mosley",title:"QA Engineer",phone:"(784) 962-2301",managerId:46,hireDate:new Date("2025-09-21"),imgId:10,gender:"F"},{id:56,name:"Barry Ayers",title:"Software Developer",phone:"(452) 373-9227",managerId:46,hireDate:new Date("2025-04-16"),imgId:1,gender:"M"},{id:59,name:"Keiko Espinoza",title:"Junior QA Engineer",phone:"(226) 600-5305",managerId:46,hireDate:new Date("2025-01-22"),imgId:9,gender:"M"},{id:61,name:"Candace Pickett",title:"Support Officer",phone:"(120) 117-7475",managerId:46,hireDate:new Date("2025-09-18"),imgId:9,gender:"F"},{id:63,name:"Mia Caldwell",title:"Team Lead",phone:"(848) 636-6470",managerId:43,hireDate:new Date("2025-07-17"),imgId:2,gender:"F"},{id:65,name:"Thomas Terry",title:"Senior Enterprise Support Officer",phone:"(764) 831-4248",managerId:63,hireDate:new Date("2025-07-14"),imgId:3,gender:"M"},{id:67,name:"Ruth Downs",title:"Senior Software Developer",phone:"(138) 991-1440",managerId:63,hireDate:new Date("2025-08-14"),imgId:8,gender:"F"},{id:70,name:"Yasir Wilder",title:"Senior QA Engineer",phone:"(759) 701-8665",managerId:63,hireDate:new Date("2025-08-17"),imgId:5,gender:"M"},{id:71,name:"Flavia Short",title:"Support Officer",phone:"(370) 133-9238",managerId:63,hireDate:new Date("2025-06-15"),imgId:9,gender:"F"},{id:74,name:"Aaron Roach",title:"Junior Software Developer",phone:"(958) 717-9230",managerId:63,hireDate:new Date("2025-09-18"),imgId:1,gender:"M"},{id:75,name:"Eric Russell",title:"Software Developer",phone:"(516) 575-8505",managerId:63,hireDate:new Date("2025-09-13"),imgId:2,gender:"M"},{id:76,name:"Cheyenne Olson",title:"Software Developer",phone:"(241) 645-0257",managerId:63,hireDate:new Date("2025-09-18"),imgId:4,gender:"M"},{id:77,name:"Shaine Avila",title:"UI Designer",phone:"(844) 435-1360",managerId:63,hireDate:new Date("2025-01-22"),imgId:2,gender:"M"},{id:81,name:"Chantale Long",title:"Senior QA Engineer",phone:"(252) 419-6891",managerId:63,hireDate:new Date("2025-09-14"),imgId:2,gender:"F"},{id:83,name:"Dane Cruz",title:"Junior Software Developer",phone:"(946) 701-6165",managerId:63,hireDate:new Date("2025-03-15"),imgId:9,gender:"M"},{id:84,name:"Regan Patterson",title:"Technical Writer",phone:"(265) 946-1765",managerId:63,hireDate:new Date("2025-05-17"),imgId:1,gender:"M"},{id:85,name:"Drew Mckay",title:"Senior Software Developer",phone:"(327) 293-0162",managerId:63,hireDate:new Date("2025-05-21"),imgId:3,gender:"M"},{id:88,name:"Bevis Miller",title:"Senior Software Developer",phone:"(525) 557-0169",managerId:63,hireDate:new Date("2025-08-15"),imgId:4,gender:"M"},{id:89,name:"Bruce Mccarty",title:"Support Officer",phone:"(936) 777-8730",managerId:63,hireDate:new Date("2025-10-21"),imgId:9,gender:"M"},{id:90,name:"Ocean Blair",title:"Team Lead",phone:"(343) 586-6614",managerId:43,hireDate:new Date("2025-06-20"),imgId:8,gender:"F"},{id:91,name:"Guinevere Osborn",title:"Software Developer",phone:"(424) 741-0006",managerId:90,hireDate:new Date("2025-06-17"),imgId:8,gender:"M"},{id:92,name:"Olga Strong",title:"Graphic Designer",phone:"(949) 417-1168",managerId:90,hireDate:new Date("2025-06-15"),imgId:8,gender:"F"},{id:93,name:"Robert Orr",title:"Support Officer",phone:"(977) 341-3721",managerId:90,hireDate:new Date("2025-06-22"),imgId:6,gender:"M"},{id:95,name:"Odette Sears",title:"Senior Software Developer",phone:"(264) 818-6576",managerId:90,hireDate:new Date("2025-05-20"),imgId:7,gender:"F"},{id:45,name:"Zelda Medina",title:"QA Architect",phone:"(563) 359-6023",managerId:32,hireDate:new Date("2025-08-16"),imgId:5,gender:"F"},{id:3,name:"Priscilla Frank",title:"Chief Product Officer",phone:"(217) 280-5300",managerId:1,hireDate:new Date("2025-04-22"),imgId:9,gender:"F"},{id:4,name:"Ursula Holmes",title:"EVP, Product Strategy",phone:"(370) 983-8796",managerId:3,hireDate:new Date("2025-01-15"),imgId:7,gender:"F"},{id:24,name:"Melvin Carrillo",title:"Director, Developer Relations",phone:"(344) 496-9555",managerId:3,hireDate:new Date("2025-01-17"),imgId:8,gender:"M"},{id:29,name:"Martha Chavez",title:"Developer Advocate",phone:"(140) 772-7509",managerId:24,hireDate:new Date("2025-05-14"),imgId:5,gender:"F"},{id:30,name:"Oren Fox",title:"Developer Advocate",phone:"(714) 284-2408",managerId:24,hireDate:new Date("2025-07-19"),imgId:8,gender:"M"},{id:41,name:"Amos Barr",title:"Developer Advocate",phone:"(996) 587-8405",managerId:24,hireDate:new Date("2025-01-16"),imgId:9,gender:"M"}],Ji=`export interface Employee {
  id: number;
  managerId?: number | null;
  name: string;
  title: string;
  phone: string;
  hireDate?: Date;
  imgId?: number;
  gender?: string;
}

export const EMPLOYEES: Employee[] = ${JSON.stringify($e,null,2)};`;var Ki=`<thf-treelist
  t-id-field="id"
  t-parent-id-field="managerId"
  [t-columns]="columns"
  [t-height]="400"
  [t-items]="items"
/>
`,Xi=`import { Component } from '@angular/core';

import { ThfTreeListColumn } from '@totvs/thf-components';

import { Employee, EMPLOYEES } from './data';

@Component({
  selector: 'app-thf-treelist-flat-items-doc',
  templateUrl: './thf-treelist-flat-items-doc.component.html',
  standalone: false,
})
export class ThfTreeListFlatItemsDocComponent {
  items: Employee[] = EMPLOYEES;

  columns: Array<ThfTreeListColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'title', label: 'Title' },
    { property: 'phone', label: 'Phone' },
    { property: 'hireDate', label: 'Hire Date', type: 'date' },
  ];
}
`;var Je=(()=>{class p{constructor(){this.htmlCode=Ki,this.tsCode=Xi,this.tsOthersCode={label:"Data",body:Ji},this.items=$e,this.columns=[{property:"name",label:"Nome"},{property:"title",label:"Title"},{property:"phone",label:"Phone"},{property:"hireDate",label:"Hire Date",type:"date"}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-treelist-flat-items-doc"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-id-field","id","t-parent-id-field","managerId",3,"t-columns","t-height","t-items"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Flat - Items"),t(),r(3,"po-divider",1)(4,"thf-treelist",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-columns",o.columns)("t-height",400)("t-items",o.items),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)("othersCode",o.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[h,v,Te,C],encapsulation:2})}}return p})();var Ke=[{type:"file",id:0,name:"LICENSE.md",size:636,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1,name:"README.md",size:4460,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:2,name:"SUPPORT.md",size:3181,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:3,name:"examples",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:4,name:"README.md",size:1153,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:5,name:"angular.json",size:37604,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:6,name:"bin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:7,name:"build-all.js",size:597,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:8,name:"publish-gh-pages",size:164,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:9,name:"serve-project.js",size:345,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:10,name:"package-lock.json",size:448632,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:11,name:"package.json",size:3050,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:12,name:"projects",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:13,name:"chart-websockets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:14,name:"README.md",size:1294,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:15,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:16,name:"karma.conf.js",size:1032,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:17,name:"server",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:18,name:"index.js",size:1419,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:19,name:"package-lock.json",size:13649,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:20,name:"package.json",size:304,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:21,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:22,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:23,name:"app.component.css",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:24,name:"app.component.html",size:875,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:25,name:"app.component.spec.ts",size:1008,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:26,name:"app.component.ts",size:1383,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:27,name:"app.module.ts",size:595,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:28,name:"websocket.service.ts",size:575,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:29,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:30,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:31,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:32,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:33,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:34,name:"index.html",size:302,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:35,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:36,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:37,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:38,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:39,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:40,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:41,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:42,name:"grid-firebase",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:43,name:"README.md",size:1309,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:44,name:"browserslist",size:385,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:45,name:"firebase.json",size:234,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:46,name:"karma.conf.js",size:1029,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:47,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:48,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:49,name:"app.component.html",size:1221,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:50,name:"app.component.spec.ts",size:1035,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:51,name:"app.component.ts",size:2274,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:52,name:"app.module.ts",size:1169,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:53,name:"edit.service.ts",size:945,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:54,name:"products.ts",size:2346,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:55,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:56,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:57,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:58,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:59,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:60,name:"index.html",size:299,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:61,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:62,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:63,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:64,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:65,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:66,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:67,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:68,name:"grid-graphql",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:69,name:"README.md",size:891,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:70,name:"browserslist",size:385,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:71,name:"karma.conf.js",size:1028,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:72,name:"server",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:73,name:"index.js",size:417,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:74,name:"package-lock.json",size:15151,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:75,name:"package.json",size:400,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:76,name:"schema",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:77,name:"schema.js",size:7470,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:78,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:79,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:80,name:"app.component.css",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:81,name:"app.component.html",size:1416,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:82,name:"app.component.spec.ts",size:1013,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:83,name:"app.component.ts",size:2743,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:84,name:"app.module.ts",size:852,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:85,name:"edit.service.ts",size:1435,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:86,name:"graphql.module.ts",size:658,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:87,name:"model.ts",size:177,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:88,name:"queries.js",size:958,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:89,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:90,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:91,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:92,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:93,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:94,name:"index.html",size:298,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:95,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:96,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:97,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:98,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:99,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:100,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:101,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:102,name:"grid-jsdo",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:103,name:"README.md",size:854,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:104,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:105,name:"karma.conf.js",size:1025,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:106,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:107,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:108,name:"app.component.ts",size:5190,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:109,name:"app.module.ts",size:1006,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:110,name:"data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:111,name:"customer.config.ts",size:470,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:112,name:"customer.model.ts",size:611,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:113,name:"data-service.event.ts",size:57,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:114,name:"data-service.interface.ts",size:728,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:115,name:"data.service.ts",size:6294,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:116,name:"model-data-result.ts",size:170,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:117,name:"progress-service-config.ts",size:559,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:118,name:"progress-service-factory.ts",size:907,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:119,name:"progress-session.service.ts",size:2172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:120,name:"progress.service.ts",size:4978,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:121,name:"service-config.ts",size:1396,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:122,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:123,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:124,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:125,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:126,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:127,name:"index.html",size:295,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:128,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:129,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:130,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:131,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:132,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:133,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:134,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:135,name:"grid-signalr",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:136,name:"README.md",size:1859,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:137,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:138,name:"karma.conf.js",size:1028,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:139,name:"server",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:140,name:"Controllers",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:141,name:"TodoController.cs",size:1669,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:142,name:"Hubs",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:143,name:"TodoHub.cs",size:162,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:144,name:"Program.cs",size:654,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:145,name:"Properties",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:146,name:"launchSettings.json",size:775,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:147,name:"Startup.cs",size:1836,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:148,name:"appsettings.Development.json",size:137,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:149,name:"appsettings.json",size:97,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:150,name:"server.csproj",size:295,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:151,name:"server.sln",size:1110,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:152,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:153,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:154,name:"app.component.css",size:29,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:155,name:"app.component.html",size:977,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:156,name:"app.component.spec.ts",size:989,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:157,name:"app.component.ts",size:1522,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:158,name:"app.module.ts",size:624,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:159,name:"models",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:160,name:"todo.model.ts",size:91,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:161,name:"services",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:162,name:"signalr.service.ts",size:944,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:163,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:164,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:165,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:166,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:167,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:168,name:"index.html",size:298,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:169,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:170,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:171,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:172,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:173,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:174,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:175,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:176,name:"integration-i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:177,name:"README.md",size:890,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:178,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:179,name:"karma.conf.js",size:1032,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:180,name:"projects",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:181,name:"integration-i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:182,name:"locale",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:183,name:"messages.xlf",size:49659,time:"2025-12-18T18:06:11.000Z"}]}]}]},{type:"directory",id:184,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:185,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:186,name:"app.component.html",size:111,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:187,name:"app.component.scss",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:188,name:"app.component.spec.ts",size:1e3,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:189,name:"app.component.ts",size:222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:190,name:"app.module.ts",size:515,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:191,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:192,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:193,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:194,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:195,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:196,name:"index.html",size:302,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:197,name:"locale",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:198,name:"messages.es.xlf",size:44842,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:199,name:"messages.xlf",size:42194,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:200,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:201,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:202,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:203,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:204,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:205,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:206,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:207,name:"integration-jquery",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:208,name:"README.md",size:866,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:209,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:210,name:"karma.conf.js",size:1034,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:211,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:212,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:213,name:"app.component.css",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:214,name:"app.component.html",size:624,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:215,name:"app.component.spec.ts",size:1e3,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:216,name:"app.component.ts",size:340,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:217,name:"app.module.ts",size:2203,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:218,name:"other.component.ts",size:294,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:219,name:"test-date-picker.component.ts",size:1063,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:220,name:"test-diagram.component.ts",size:1694,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:221,name:"test-editor.component.ts",size:1154,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:222,name:"test-gantt.component.ts",size:4603,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:223,name:"test-grid.component.ts",size:1542,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:224,name:"test-scheduler.component.ts",size:4033,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:225,name:"test-slider.component.ts",size:689,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:226,name:"test-splitter.component.ts",size:2578,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:227,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:228,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:229,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:230,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:231,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:232,name:"index.html",size:318,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:233,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:234,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:235,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:236,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:237,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:238,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:239,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:240,name:"integration-pwa",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:241,name:"README.md",size:3373,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:242,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:243,name:"karma.conf.js",size:1031,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:244,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:245,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:246,name:"_app-common.scss",size:1617,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:247,name:"app-routing.module.ts",size:310,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:248,name:"app.component.html",size:32,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:249,name:"app.component.scss",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:250,name:"app.component.spec.ts",size:986,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:251,name:"app.component.ts",size:163,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:252,name:"app.module.ts",size:3141,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:253,name:"app.routes.ts",size:717,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:254,name:"app.style.css",size:306,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:255,name:"charts",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:256,name:"active-issues.component.ts",size:10882,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:257,name:"issue-types.component.ts",size:2092,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:258,name:"statistics.component.ts",size:1532,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:259,name:"types-distribution.component.ts",size:4819,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:260,name:"common",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:261,name:"index.ts",size:31,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:262,name:"utils",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:263,name:"Config.ts",size:593,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:264,name:"index.ts",size:59,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:265,name:"router-module.ts",size:48,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:266,name:"dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:267,name:"dashboard.component.ts",size:3071,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:268,name:"dashboard.template.html",size:1531,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:269,name:"index.ts",size:40,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:270,name:"dashboard.style.scss",size:5235,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:271,name:"issues",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:272,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:273,name:"issues.component.ts",size:2245,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:274,name:"issues.template.html",size:5149,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:275,name:"label.directive.ts",size:1136,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:276,name:"main-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:277,name:"main-menu.component.html",size:1765,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:278,name:"main-menu.component.scss",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:279,name:"main-menu.component.spec.ts",size:643,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:280,name:"main-menu.component.ts",size:1790,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:281,name:"markdown",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:282,name:"markdown.component.ts",size:492,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:283,name:"profile",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:284,name:"index.ts",size:38,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:285,name:"profile.component.ts",size:1566,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:286,name:"profile.template.html",size:6205,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:287,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:288,name:"_custom.scss",size:2402,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:289,name:"github.service.ts",size:1472,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:290,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:291,name:"issues-processor.service.ts",size:5617,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:292,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:293,name:"shared.module.ts",size:300,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:294,name:"spinner.component.ts",size:426,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:295,name:"signin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:296,name:"index.ts",size:39,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:297,name:"signin.component.ts",size:645,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:298,name:"signin.template.html",size:530,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:299,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:300,name:"app_icon",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:301,name:"angularX144.png",size:5078,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:302,name:"angularX192.png",size:7010,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:303,name:"angularX36.png",size:1600,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:304,name:"angularX48.png",size:2070,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:305,name:"angularX512.png",size:19822,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:306,name:"angularX72.png",size:2715,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:307,name:"angularX96.png",size:3571,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:308,name:"help_images",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:309,name:"add_to_home.png",size:51829,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:310,name:"cached_local.png",size:55215,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:311,name:"cached_remote.png",size:56083,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:312,name:"confirm.png",size:25508,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:313,name:"dashboard.png",size:101068,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:314,name:"offline.png",size:36927,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:315,name:"sw.png",size:36331,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:316,name:"i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:317,name:"en.json",size:417,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:318,name:"issue-closed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:319,name:"issue-open.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:320,name:"issueclosed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:321,name:"issueopen.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:322,name:"login-left-bg.png",size:35043,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:323,name:"login-right-bg.png",size:40236,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:324,name:"noConnection.png",size:11232,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:325,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:326,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:327,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:328,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:329,name:"index.html",size:893,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:330,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:331,name:"manifest.json",size:1484,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:332,name:"ngsw-config.json",size:551,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:333,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:334,name:"styles.scss",size:1049,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:335,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:336,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:337,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:338,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:339,name:"integration-pwa-material",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:340,name:"README.md",size:3234,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:341,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:342,name:"karma.conf.js",size:1031,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:343,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:344,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:345,name:"app-routing.module.ts",size:310,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:346,name:"app.component.html",size:32,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:347,name:"app.component.spec.ts",size:986,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:348,name:"app.component.ts",size:163,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:349,name:"app.module.ts",size:3227,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:350,name:"app.routes.ts",size:717,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:351,name:"charts",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:352,name:"active-issues.component.ts",size:11951,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:353,name:"issue-types.component.ts",size:2161,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:354,name:"statistics.component.ts",size:1300,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:355,name:"types-distribution.component.ts",size:5299,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:356,name:"common",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:357,name:"index.ts",size:31,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:358,name:"utils",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:359,name:"Config.ts",size:593,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:360,name:"index.ts",size:59,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:361,name:"router-module.ts",size:48,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:362,name:"dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:363,name:"dashboard.component.ts",size:3077,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:364,name:"dashboard.template.html",size:1555,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:365,name:"index.ts",size:39,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:366,name:"issues",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:367,name:"index.ts",size:36,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:368,name:"issues.component.ts",size:2266,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:369,name:"issues.template.html",size:5078,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:370,name:"label.directive.ts",size:1136,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:371,name:"main-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:372,name:"main-menu.component.html",size:2038,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:373,name:"main-menu.component.spec.ts",size:643,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:374,name:"main-menu.component.ts",size:1739,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:375,name:"markdown",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:376,name:"markdown.component.ts",size:492,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:377,name:"profile",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:378,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:379,name:"profile.component.ts",size:1343,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:380,name:"profile.template.html",size:6959,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:381,name:"scss",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:382,name:"_dashboard.scss",size:1330,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:383,name:"_globals.scss",size:1741,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:384,name:"_header.scss",size:212,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:385,name:"_issues.scss",size:881,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:386,name:"_login.scss",size:579,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:387,name:"_nav.scss",size:2203,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:388,name:"_profile.scss",size:143,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:389,name:"_typography.scss",size:373,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:390,name:"_variables.scss",size:2631,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:391,name:"bootstrap-custom.scss",size:84,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:392,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:393,name:"github.service.ts",size:1472,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:394,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:395,name:"issues-processor.service.ts",size:5617,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:396,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:397,name:"shared.module.ts",size:300,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:398,name:"spinner.component.ts",size:403,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:399,name:"signin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:400,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:401,name:"signin.component.ts",size:660,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:402,name:"signin.template.html",size:1017,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:403,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:404,name:"app_icon",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:405,name:"angularX144.png",size:5078,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:406,name:"angularX192.png",size:7010,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:407,name:"angularX36.png",size:1600,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:408,name:"angularX48.png",size:2070,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:409,name:"angularX512.png",size:19822,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:410,name:"angularX72.png",size:2715,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:411,name:"angularX96.png",size:3571,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:412,name:"help_images",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:413,name:"add_to_home.png",size:51829,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:414,name:"cached_local.png",size:55215,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:415,name:"cached_remote.png",size:56083,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:416,name:"confirm.png",size:25508,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:417,name:"dashboard.png",size:101068,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:418,name:"offline.png",size:36927,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:419,name:"sw.png",size:36331,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:420,name:"i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:421,name:"en.json",size:417,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:422,name:"issue-closed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:423,name:"issue-open.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:424,name:"issueclosed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:425,name:"issueopen.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:426,name:"login-left-bg.png",size:35043,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:427,name:"login-right-bg.png",size:40236,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:428,name:"noConnection.png",size:11232,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:429,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:430,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:431,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:432,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:433,name:"index.html",size:703,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:434,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:435,name:"manifest.json",size:1422,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:436,name:"ngsw-config.json",size:551,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:437,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:438,name:"styles.scss",size:389,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:439,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:440,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:441,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:442,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:443,name:"pdf-embedded-fonts",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:444,name:"README.md",size:700,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:445,name:"browserslist",size:385,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:446,name:"karma.conf.js",size:1034,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:447,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:448,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:449,name:"app.component.ts",size:778,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:450,name:"app.module.ts",size:744,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:451,name:"invoice-data.ts",size:345,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:452,name:"invoice-row.ts",size:209,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:453,name:"invoice.component.ts",size:2540,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:454,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:455,name:"DejaVuSans.ttf",size:757076,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:456,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:457,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:458,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:459,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:460,name:"index.html",size:314,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:461,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:462,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:463,name:"styles.scss",size:1195,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:464,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:465,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:466,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:467,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:468,name:"static",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:469,name:"404.html",size:292,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:470,name:"index.html",size:883,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:471,name:"styles.css",size:57,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:472,name:"tsconfig.json",size:467,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:473,name:"tslint.json",size:1954,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:474,name:"examples-standalone",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:475,name:"angular-universal",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:476,name:"README.md",size:1699,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:477,name:"aspnet_core_sample_application",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:478,name:"ClientApp",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:479,name:"README.md",size:1040,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:480,name:"angular.json",size:4344,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:481,name:"e2e",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:482,name:"protractor.conf.js",size:752,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:483,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:484,name:"app.e2e-spec.ts",size:277,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:485,name:"app.po.ts",size:206,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:486,name:"tsconfig.e2e.json",size:213,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:487,name:"package-lock.json",size:424e3,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:488,name:"package.json",size:2401,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:489,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:490,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:491,name:"app.component.css",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:492,name:"app.component.html",size:118,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:493,name:"app.component.ts",size:207,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:494,name:"app.module.ts",size:1297,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:495,name:"app.server.module.ts",size:413,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:496,name:"counter",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:497,name:"counter.component.html",size:215,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:498,name:"counter.component.spec.ts",size:1133,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:499,name:"counter.component.ts",size:260,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:500,name:"fetch-data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:501,name:"fetch-data.component.html",size:842,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:502,name:"fetch-data.component.ts",size:819,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:503,name:"home",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:504,name:"home.component.html",size:1480,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:505,name:"home.component.ts",size:155,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:506,name:"nav-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:507,name:"nav-menu.component.css",size:249,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:508,name:"nav-menu.component.html",size:1239,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:509,name:"nav-menu.component.ts",size:337,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:510,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"file",id:511,name:"browserslist",size:375,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:512,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:513,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:514,name:"environment.ts",size:631,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:515,name:"index.html",size:326,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:516,name:"karma.conf.js",size:965,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:517,name:"main.server.ts",size:1137,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:518,name:"main.ts",size:553,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:519,name:"polyfills.ts",size:3162,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:520,name:"styles.scss",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:521,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:522,name:"tsconfig.app.json",size:194,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:523,name:"tsconfig.server.json",size:241,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:524,name:"tsconfig.spec.json",size:282,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:525,name:"tslint.json",size:314,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:526,name:"tsconfig.json",size:384,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:527,name:"tslint.json",size:2998,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:528,name:"Controllers",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:529,name:"SampleDataController.cs",size:1508,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:530,name:"Pages",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:531,name:"Error.cshtml",size:856,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:532,name:"Error.cshtml.cs",size:619,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:533,name:"_ViewImports.cshtml",size:107,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:534,name:"Program.cs",size:609,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:535,name:"Properties",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:536,name:"launchSettings.json",size:626,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:537,name:"Startup.cs",size:2699,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:538,name:"appsettings.Development.json",size:137,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:539,name:"appsettings.json",size:97,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:540,name:"dotnet-angular.csproj",size:2804,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:541,name:"wwwroot",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:542,name:"favicon.ico",size:32038,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:543,name:"node_sample_application",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:544,name:"README.md",size:2169,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:545,name:"angular.json",size:4539,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:546,name:"package-lock.json",size:346174,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:547,name:"package.json",size:2952,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:548,name:"prerender.ts",size:1507,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:549,name:"server.ts",size:1506,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:550,name:"server.tsconfig.json",size:399,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:551,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:552,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:553,name:"app.component.ts",size:1047,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:554,name:"app.module.ts",size:1003,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:555,name:"app.server.module.ts",size:718,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:556,name:"home",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:557,name:"home.component.ts",size:1009,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:558,name:"products.ts",size:37654,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:559,name:"lazy",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:560,name:"lazy.module.ts",size:1107,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:561,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:562,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:563,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:564,name:"environment.ts",size:383,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:565,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:566,name:"index.html",size:302,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:567,name:"main.server.ts",size:57,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:568,name:"main.ts",size:459,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:569,name:"polyfills.ts",size:2480,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:570,name:"styles.css",size:80,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:571,name:"tsconfig.app.json",size:229,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:572,name:"tsconfig.server.json",size:469,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:573,name:"static.paths.ts",size:62,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:574,name:"tsconfig.json",size:363,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:575,name:"tslint.json",size:2987,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:576,name:"aspnetcore-data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:577,name:"ClientApp",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:578,name:"README.md",size:1059,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:579,name:"angular.json",size:4561,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:580,name:"browserslist",size:383,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:581,name:"e2e",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:582,name:"protractor.conf.js",size:785,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:583,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:584,name:"app.e2e-spec.ts",size:291,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:585,name:"app.po.ts",size:217,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:586,name:"tsconfig.e2e.json",size:225,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:587,name:"package-lock.json",size:413163,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:588,name:"package.json",size:2310,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:589,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:590,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:591,name:"app.component.css",size:178,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:592,name:"app.component.html",size:124,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:593,name:"app.component.ts",size:178,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:594,name:"app.module.ts",size:1561,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:595,name:"app.server.module.ts",size:424,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:596,name:"counter",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:597,name:"counter.component.html",size:241,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:598,name:"counter.component.spec.ts",size:1169,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:599,name:"counter.component.ts",size:273,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:600,name:"fetch-data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:601,name:"data.service.ts",size:2884,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:602,name:"fetch-data.component.html",size:1544,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:603,name:"fetch-data.component.ts",size:2304,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:604,name:"home",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:605,name:"home.component.html",size:1494,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:606,name:"home.component.ts",size:163,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:607,name:"nav-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:608,name:"nav-menu.component.css",size:267,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:609,name:"nav-menu.component.html",size:1472,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:610,name:"nav-menu.component.ts",size:355,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:611,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"file",id:612,name:"browserslist",size:383,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:613,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:614,name:"environment.prod.ts",size:54,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:615,name:"environment.ts",size:646,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:616,name:"index.html",size:354,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:617,name:"karma.conf.js",size:996,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:618,name:"main.ts",size:573,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:619,name:"polyfills.ts",size:2901,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:620,name:"styles.css",size:295,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:621,name:"test.ts",size:662,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:622,name:"tsconfig.app.json",size:181,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:623,name:"tsconfig.server.json",size:192,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:624,name:"tsconfig.spec.json",size:274,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:625,name:"tslint.json",size:331,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:626,name:"tsconfig.json",size:432,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:627,name:"tslint.json",size:2930,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:628,name:"Controllers",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:629,name:"BlogsController.cs",size:1810,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:630,name:"Models",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:631,name:"Blog.cs",size:373,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:632,name:"BloggingContext.cs",size:1626,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:633,name:"Post.cs",size:360,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:634,name:"Pages",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:635,name:"Error.cshtml",size:882,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:636,name:"Error.cshtml.cs",size:847,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:637,name:"_ViewImports.cshtml",size:112,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:638,name:"Program.cs",size:616,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:639,name:"Properties",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:640,name:"launchSettings.json",size:682,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:641,name:"README.md",size:1991,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:642,name:"Startup.cs",size:2923,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:643,name:"appsettings.Development.json",size:146,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:644,name:"appsettings.json",size:111,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:645,name:"aspnetcore-data.csproj",size:3284,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:646,name:"nuget.config",size:502,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:647,name:"wwwroot",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:648,name:"favicon.ico",size:32038,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:649,name:"aspnetcore-upload",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:650,name:"ClientApp",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:651,name:"README.md",size:1050,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:652,name:"angular.json",size:4498,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:653,name:"browserslist",size:383,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:654,name:"e2e",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:655,name:"protractor.conf.js",size:785,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:656,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:657,name:"app.e2e-spec.ts",size:291,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:658,name:"app.po.ts",size:217,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:659,name:"tsconfig.e2e.json",size:225,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:660,name:"package-lock.json",size:406641,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:661,name:"package.json",size:1810,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:662,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:663,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:664,name:"app.component.html",size:91,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:665,name:"app.component.ts",size:178,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:666,name:"app.module.ts",size:968,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:667,name:"app.server.module.ts",size:424,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:668,name:"home",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:669,name:"home.component.html",size:135,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:670,name:"home.component.ts",size:163,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:671,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"directory",id:672,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:673,name:"environment.prod.ts",size:54,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:674,name:"environment.ts",size:646,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:675,name:"index.html",size:345,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:676,name:"karma.conf.js",size:996,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:677,name:"main.ts",size:573,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:678,name:"polyfills.ts",size:2901,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:679,name:"styles.css",size:295,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:680,name:"test.ts",size:662,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:681,name:"tsconfig.app.json",size:181,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:682,name:"tsconfig.server.json",size:192,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:683,name:"tsconfig.spec.json",size:274,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:684,name:"tslint.json",size:331,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:685,name:"tsconfig.json",size:432,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:686,name:"tslint.json",size:2930,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:687,name:"Controllers",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:688,name:"StreamingController.cs",size:2461,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:689,name:"Pages",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:690,name:"Error.cshtml",size:882,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:691,name:"Error.cshtml.cs",size:849,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:692,name:"_ViewImports.cshtml",size:116,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:693,name:"Program.cs",size:618,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:694,name:"Properties",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:695,name:"launchSettings.json",size:684,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:696,name:"README.md",size:919,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:697,name:"Startup.cs",size:2519,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:698,name:"appsettings.Development.json",size:146,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:699,name:"appsettings.json",size:111,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:700,name:"aspnetcore-upload.csproj",size:2844,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:701,name:"wwwroot",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:702,name:"Upload_Directory",time:"2025-12-18T18:06:11.000Z",contents:[]},{type:"file",id:703,name:"favicon.ico",size:32038,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:704,name:"electron-dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:705,name:"README.md",size:4551,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:706,name:"_config.yml",size:29,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:707,name:"angular.json",size:3867,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:708,name:"e2e",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:709,name:"app.e2e-spec.ts",size:386,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:710,name:"app.po.ts",size:175,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:711,name:"tsconfig.e2e.json",size:193,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:712,name:"electron-builder.json",size:315,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:713,name:"hooks",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:714,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:715,name:"README.md",size:7709,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:716,name:"app.config.ts.tpl",size:509,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:717,name:"set_profile.js",size:581,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:718,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:719,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:720,name:"app.config.ts",size:509,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:721,name:"appconfig.ts",size:509,time:"2025-12-18T18:06:11.000Z"}]}]}]},{type:"file",id:722,name:"karma.conf.js",size:1202,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:723,name:"logo-angular.jpg",size:3354,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:724,name:"logo-electron.jpg",size:8028,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:725,name:"logo-kendo.png",size:11430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:726,name:"main.ts",size:2388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:727,name:"package.json",size:4139,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:728,name:"postcss.config.js",size:20,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:729,name:"protractor.conf.js",size:960,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:730,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:731,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:732,name:"_app-common.scss",size:1617,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:733,name:"app-routing.module.ts",size:310,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:734,name:"app.component.html",size:23,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:735,name:"app.component.scss",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:736,name:"app.component.spec.ts",size:986,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:737,name:"app.component.ts",size:156,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:738,name:"app.config.ts",size:507,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:739,name:"app.module.ts",size:2816,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:740,name:"app.routes.ts",size:717,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:741,name:"app.style.css",size:284,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:742,name:"charts",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:743,name:"active-issues.component.ts",size:9854,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:744,name:"issue-types.component.ts",size:2092,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:745,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:746,name:"_custom.scss",size:2402,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:747,name:"github.service.ts",size:1853,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:748,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:749,name:"issues-processor.service.ts",size:5639,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:750,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:751,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:752,name:"_custom.scss",size:2402,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:753,name:"github.service.ts",size:1853,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:754,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:755,name:"issues-processor.service.ts",size:5639,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:756,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:757,name:"shared.module.ts",size:301,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:758,name:"shared.module.ts",size:301,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:759,name:"statistics.component.ts",size:1249,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:760,name:"types-distribution.component.ts",size:4649,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:761,name:"common",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:762,name:"index.ts",size:31,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:763,name:"utils",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:764,name:"Config.ts",size:593,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:765,name:"index.ts",size:59,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:766,name:"router-module.ts",size:48,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:767,name:"dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:768,name:"dashboard.component.ts",size:3014,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:769,name:"dashboard.template.html",size:1506,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:770,name:"index.ts",size:39,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:771,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:772,name:"_custom.scss",size:2402,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:773,name:"github.service.ts",size:1853,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:774,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:775,name:"issues-processor.service.ts",size:5639,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:776,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:777,name:"shared.module.ts",size:301,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"file",id:778,name:"dashboard.style.scss",size:5154,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:779,name:"directives",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:780,name:"webview.directive.ts",size:138,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:781,name:"issues",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:782,name:"index.ts",size:36,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:783,name:"issues.component.ts",size:2236,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:784,name:"issues.template.html",size:5046,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:785,name:"label.directive.ts",size:1055,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:786,name:"main-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:787,name:"main-menu.component.html",size:1776,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:788,name:"main-menu.component.scss",size:0,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:789,name:"main-menu.component.spec.ts",size:643,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:790,name:"main-menu.component.ts",size:1786,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:791,name:"markdown",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:792,name:"markdown.component.ts",size:411,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:793,name:"profile",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:794,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:795,name:"profile.component.ts",size:1571,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:796,name:"profile.template.html",size:6096,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:797,name:"providers",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:798,name:"electron.service.ts",size:737,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:799,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:800,name:"_custom.scss",size:2402,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:801,name:"github.service.ts",size:1853,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:802,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:803,name:"issues-processor.service.ts",size:5639,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:804,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:805,name:"shared.module.ts",size:301,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:806,name:"spinner.component.ts",size:399,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:807,name:"signin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:808,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:809,name:"signin.component.ts",size:640,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:810,name:"signin.template.html",size:530,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"file",id:811,name:"app.style.css",size:284,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:812,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:813,name:"background.jpg",size:232337,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:814,name:"i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:815,name:"en.json",size:78,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:816,name:"issue-closed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:817,name:"issue-open.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:818,name:"issueclosed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:819,name:"issueopen.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:820,name:"login-left-bg.png",size:35043,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:821,name:"login-right-bg.png",size:40236,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:822,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:823,name:"environment.dev.ts",size:394,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:824,name:"environment.local.ts",size:75,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:825,name:"environment.prod.ts",size:72,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:826,name:"favicon.256x256.png",size:14430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:827,name:"favicon.icns",size:85688,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:828,name:"favicon.ico",size:16224,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:829,name:"favicon.png",size:14430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:830,name:"index.html",size:491,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:831,name:"main.ts",size:399,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:832,name:"polyfills.ts",size:1323,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:833,name:"styles.scss",size:333,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:834,name:"test.ts",size:761,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:835,name:"tsconfig.app.json",size:259,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:836,name:"tsconfig.spec.json",size:416,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:837,name:"typings.d.ts",size:190,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:838,name:"tsconfig.json",size:438,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:839,name:"tslint.json",size:2998,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:840,name:"kendo-angular-finance-portfolio",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:841,name:"README.md",size:2408,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:842,name:"angular.json",size:2835,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:843,name:"browserslist",size:429,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:844,name:"package-lock.json",size:437540,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:845,name:"package.json",size:2359,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:846,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:847,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:848,name:"app-routing.module.ts",size:949,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:849,name:"app.component.ts",size:312,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:850,name:"app.module.ts",size:2775,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:851,name:"components",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:852,name:"badge",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:853,name:"badge.component.html",size:261,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:854,name:"badge.component.scss",size:412,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:855,name:"badge.component.ts",size:250,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:856,name:"footer",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:857,name:"footer.component.html",size:360,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:858,name:"footer.component.scss",size:634,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:859,name:"footer.component.ts",size:355,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:860,name:"header",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:861,name:"header.component.html",size:930,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:862,name:"header.component.scss",size:1198,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:863,name:"header.component.ts",size:668,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:864,name:"heatmap",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:865,name:"heatmap.component.html",size:1345,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:866,name:"heatmap.component.scss",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:867,name:"heatmap.component.ts",size:4051,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:868,name:"navigation",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:869,name:"navigation.component.html",size:419,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:870,name:"navigation.component.scss",size:318,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:871,name:"navigation.component.ts",size:304,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:872,name:"real-time-data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:873,name:"real-time-data.component.html",size:3229,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:874,name:"real-time-data.component.scss",size:697,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:875,name:"real-time-data.component.ts",size:2841,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:876,name:"stock-chart",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:877,name:"stock-chart.component.html",size:3603,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:878,name:"stock-chart.component.scss",size:559,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:879,name:"stock-chart.component.ts",size:4120,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:880,name:"stock-details",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:881,name:"stock-details.component.html",size:4674,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:882,name:"stock-details.component.scss",size:230,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:883,name:"stock-details.component.ts",size:3497,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:884,name:"stock-list",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:885,name:"stock-list.component.html",size:7409,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:886,name:"stock-list.component.scss",size:3106,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:887,name:"stock-list.component.ts",size:3548,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:888,name:"stocks",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:889,name:"stocks.component.html",size:304,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:890,name:"stocks.component.scss",size:434,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:891,name:"stocks.component.ts",size:330,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:892,name:"user-profile",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:893,name:"user-profile.component.html",size:3166,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:894,name:"user-profile.component.scss",size:1177,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:895,name:"user-profile.component.ts",size:1267,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:896,name:"data",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:897,name:"stocks.ts",size:41277,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:898,name:"directives",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:899,name:"dropdownlist-popup-selector.directive.ts",size:1188,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:900,name:"models",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:901,name:"index.ts",size:98,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:902,name:"interval.ts",size:298,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:903,name:"stock-interval-details.ts",size:158,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:904,name:"stock.ts",size:272,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:905,name:"pipes",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:906,name:"helpers.ts",size:1981,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:907,name:"number-format.pipe.ts",size:275,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:908,name:"services",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:909,name:"stock-data.service.ts",size:4988,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:910,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:911,name:"area.png",size:410,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:912,name:"candle.png",size:391,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:913,name:"cross-out.svg",size:774,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:914,name:"footer-bg.svg",size:2643,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:915,name:"header-bg.svg",size:2649,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:916,name:"line.png",size:522,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:917,name:"progress-logo.svg",size:3665,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:918,name:"user.jpg",size:136966,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:919,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:920,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:921,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:922,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:923,name:"index.html",size:422,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:924,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:925,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:926,name:"styles",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:927,name:"_bootstrap.scss",size:557,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:928,name:"_kendo.scss",size:1687,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:929,name:"_main.scss",size:147,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:930,name:"_responsive.scss",size:859,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:931,name:"_typography.scss",size:238,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:932,name:"_variables.scss",size:2212,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"file",id:933,name:"tsconfig.app.json",size:210,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:934,name:"tsconfig.json",size:543,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:935,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:936,name:"tslint.json",size:1988,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:937,name:"material-dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:938,name:"angular.json",size:3757,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:939,name:"bin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:940,name:"build-all.js",size:597,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:941,name:"serve-project.js",size:345,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:942,name:"package-lock.json",size:448330,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:943,name:"package.json",size:3063,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:944,name:"project",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:945,name:"integration-pwa-material",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:946,name:"README.md",size:3234,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:947,name:"browserslist",size:388,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:948,name:"karma.conf.js",size:1031,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:949,name:"ngsw-config.json",size:551,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:950,name:"src",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:951,name:"app",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:952,name:"app-routing.module.ts",size:310,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:953,name:"app.component.html",size:32,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:954,name:"app.component.spec.ts",size:986,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:955,name:"app.component.ts",size:163,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:956,name:"app.module.ts",size:3227,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:957,name:"app.routes.ts",size:717,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:958,name:"charts",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:959,name:"active-issues.component.ts",size:11951,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:960,name:"issue-types.component.ts",size:2161,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:961,name:"statistics.component.ts",size:1300,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:962,name:"types-distribution.component.ts",size:5299,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:963,name:"common",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:964,name:"index.ts",size:31,time:"2025-12-18T18:06:11.000Z"},{type:"directory",id:965,name:"utils",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:966,name:"Config.ts",size:593,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:967,name:"index.ts",size:59,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:968,name:"router-module.ts",size:48,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:969,name:"dashboard",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:970,name:"dashboard.component.ts",size:3077,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:971,name:"dashboard.template.html",size:1555,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:972,name:"index.ts",size:39,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:973,name:"issues",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:974,name:"index.ts",size:36,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:975,name:"issues.component.ts",size:2266,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:976,name:"issues.template.html",size:5078,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:977,name:"label.directive.ts",size:1136,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:978,name:"main-menu",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:979,name:"main-menu.component.html",size:2038,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:980,name:"main-menu.component.spec.ts",size:643,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:981,name:"main-menu.component.ts",size:1739,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:982,name:"markdown",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:983,name:"markdown.component.ts",size:492,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:984,name:"profile",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:985,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:986,name:"profile.component.ts",size:1343,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:987,name:"profile.template.html",size:6959,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:988,name:"scss",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:989,name:"_dashboard.scss",size:1330,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:990,name:"_globals.scss",size:1741,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:991,name:"_header.scss",size:212,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:992,name:"_issues.scss",size:881,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:993,name:"_login.scss",size:579,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:994,name:"_nav.scss",size:2203,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:995,name:"_profile.scss",size:143,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:996,name:"_typography.scss",size:373,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:997,name:"_variables.scss",size:2631,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:998,name:"bootstrap-custom.scss",size:95,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:999,name:"shared",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1e3,name:"github.service.ts",size:1472,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1001,name:"index.ts",size:33,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1002,name:"issues-processor.service.ts",size:5617,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1003,name:"issues.model.ts",size:1313,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1004,name:"shared.module.ts",size:300,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1005,name:"spinner.component.ts",size:403,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:1006,name:"signin",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1007,name:"index.ts",size:37,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1008,name:"signin.component.ts",size:660,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1009,name:"signin.template.html",size:1017,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:1010,name:"assets",time:"2025-12-18T18:06:11.000Z",contents:[{type:"directory",id:1011,name:"app_icon",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1012,name:"angularX144.png",size:5078,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1013,name:"angularX192.png",size:7010,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1014,name:"angularX36.png",size:1600,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1015,name:"angularX48.png",size:2070,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1016,name:"angularX512.png",size:19822,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1017,name:"angularX72.png",size:2715,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1018,name:"angularX96.png",size:3571,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:1019,name:"help_images",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1020,name:"add_to_home.png",size:51829,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1021,name:"cached_local.png",size:55215,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1022,name:"cached_remote.png",size:56083,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1023,name:"confirm.png",size:25508,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1024,name:"dashboard.png",size:101068,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1025,name:"offline.png",size:36927,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1026,name:"sw.png",size:36331,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:1027,name:"i18n",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1028,name:"en.json",size:417,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:1029,name:"issue-closed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1030,name:"issue-open.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1031,name:"issueclosed.png",size:1222,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1032,name:"issueopen.png",size:1159,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1033,name:"login-left-bg.png",size:35043,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1034,name:"login-right-bg.png",size:40236,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1035,name:"noConnection.png",size:11232,time:"2025-12-18T18:06:11.000Z"}]},{type:"directory",id:1036,name:"environments",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1037,name:"environment.prod.ts",size:51,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1038,name:"environment.ts",size:662,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:1039,name:"favicon.ico",size:5430,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1040,name:"index.html",size:703,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1041,name:"main.ts",size:372,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1042,name:"manifest.json",size:1422,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1043,name:"polyfills.ts",size:2838,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1044,name:"styles.scss",size:389,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1045,name:"test.ts",size:642,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:1046,name:"tsconfig.app.json",size:172,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1047,name:"tsconfig.spec.json",size:270,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1048,name:"tslint.json",size:247,time:"2025-12-18T18:06:11.000Z"}]}]},{type:"directory",id:1049,name:"static",time:"2025-12-18T18:06:11.000Z",contents:[{type:"file",id:1050,name:"404.html",size:292,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1051,name:"index.html",size:724,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1052,name:"styles.css",size:57,time:"2025-12-18T18:06:11.000Z"}]},{type:"file",id:1053,name:"tsconfig.json",size:467,time:"2025-12-18T18:06:11.000Z"},{type:"file",id:1054,name:"tslint.json",size:1954,time:"2025-12-18T18:06:11.000Z"}]}]}],Yi=`export interface FileSystem {
  type: string;
  id: number;
  name: string;
  size?: number;
  time: string;
  contents?: Array<FileSystem>;
}

export const FILE_SYSTEM: FileSystem[] = ${JSON.stringify(Ke,null,2)};`;var eo=`<thf-treelist
  t-children-field="contents"
  [t-columns]="columns"
  [t-height]="400"
  [t-items]="items"
/>
`,to=`import { Component } from '@angular/core';

import { ThfTreeListColumn } from '@totvs/thf-components';

import { FileSystem, FILE_SYSTEM } from './data';

@Component({
  selector: 'app-thf-treelist-hierarchical-items-doc',
  templateUrl: './thf-treelist-hierarchical-items-doc.component.html',
  standalone: false,
})
export class ThfTreeListHierarchicalItemsDocComponent {
  items: Array<FileSystem> = FILE_SYSTEM;
  columns: Array<ThfTreeListColumn> = [
    { property: 'type' },
    { property: 'name' },
    { property: 'size' },
    { property: 'time', type: 'dateTime' },
  ];
}
`;var Xe=(()=>{class p{constructor(){this.htmlCode=eo,this.tsCode=to,this.tsOthersCode={label:"Data",body:Yi},this.items=Ke,this.columns=[{property:"type"},{property:"name"},{property:"size"},{property:"time",type:"dateTime"}]}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-treelist-hierarchical-items-doc"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-children-field","contents",3,"t-columns","t-height","t-items"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Hierarchical - Items"),t(),r(3,"po-divider",1)(4,"thf-treelist",2)(5,"app-code-accordion-doc",3),t()),a&2&&(d(4),m("t-columns",o.columns)("t-height",400)("t-items",o.items),d(),m("htmlCode",o.htmlCode)("tsCode",o.tsCode)("othersCode",o.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[h,v,Te,C],encapsulation:2})}}return p})();function un(p,T){p&1&&r(0,"app-thf-treelist-flat-items-doc")}function En(p,T){p&1&&r(0,"app-thf-treelist-hierarchical-items-doc")}var Ye=(()=>{class p{constructor(){this.samples=[{label:"Flat - Items",value:"flat_items"},{label:"Hierarchical - Items",value:"hierarchical_items"}],this.activeSample="flat_items"}static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275cmp=x({type:p,selectors:[["app-thf-treelist"]],standalone:!1,decls:8,vars:3,consts:[["p-title","THF-TreeList","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["p-label","Selecione um exemplo",3,"ngModelChange","ngModel","p-options"],["labs","",1,"samples-container"]],template:function(a,o){if(a&1&&(i(0,"po-page-default",0)(1,"api-thf-treelist")(2,"div",1)(3,"po-select",2),b("ngModelChange",function(E){return S(o.activeSample,E)||(o.activeSample=E),E}),t(),k(4,un,1,0,"app-thf-treelist-flat-items-doc")(5,En,1,0,"app-thf-treelist-hierarchical-items-doc"),t(),i(6,"div",3),r(7,"app-thf-treelist-labs-doc"),t()()()),a&2){let l;d(3),y("ngModel",o.activeSample),m("p-options",o.samples),d(),q((l=o.activeSample)==="flat_items"?4:l==="hierarchical_items"?5:-1)}},dependencies:[j,Q,ue,J,Lt,Je,Xe,Ue],encapsulation:2})}}return p})();var xn=[{path:"thf-grid",component:vi},{path:"thf-lookup",component:qi},{path:"thf-lookup-data",component:We},{path:"thf-splitter",component:Bi},{path:"thf-splitter-pane",component:Hi},{path:"thf-treelist",component:Ye}],io=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275mod=fe({type:p})}static{this.\u0275inj=he({imports:[Oe.forChild(xn),Oe]})}}return p})();var $s=(()=>{class p{static{this.\u0275fac=function(a){return new(a||p)}}static{this.\u0275mod=fe({type:p})}static{this.\u0275inj=he({imports:[qe,ht,ft,je,_t,kt,Rt,io,Vt]})}}return p})();export{$s as DocumentationModule};
