<p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span># 接口说明文档</p><p class="MsoNormal">前期准备：</p><p class="MsoNormal">1、准备开发环境&lt;br/&gt;</p><p class="MsoNormal">①启动mysql/Nodejs(8.1.1)&lt;br/&gt;</p><p class="MsoNormal">②准备写好的mySQ文件xz.sql</p>

<h1 style="margin-left:45.0pt;text-indent:-45.0pt;mso-list:l1 level1 lfo1"><!--[if !supportLists]--><span lang="EN-US" style="mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast"><span style="mso-list:Ignore">一、</span></span><!--[endif]--><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">用户模块</span><span lang="EN-US"><o:p></o:p></span></h1>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.1、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">用户注册</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/register<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">post<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/register<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">uname<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户名</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">upwd<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">密码</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">email<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">邮箱</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">phone<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">电话</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">注册成功</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户名为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">402-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">密码为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">403-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">邮箱为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">404-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">电话为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”register suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.2、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">用户登录</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/login<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">post<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/login<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">uname<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户名</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">upwd<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">密码</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">注册成功</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">301-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户名或密码错误</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户名为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">402-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">密码为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”login suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.3、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">用户检索</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/detail<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/detail?uid=1<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Uid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">301-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">未检索到用户</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户名为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt;mso-no-proof:
yes"><!--[if gte vml 1]><v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
 <v:stroke joinstyle="miter" />
 <v:formulas>
  <v:f eqn="if lineDrawn pixelLineWidth 0" />
  <v:f eqn="sum @0 1 0" />
  <v:f eqn="sum 0 0 @1" />
  <v:f eqn="prod @2 1 2" />
  <v:f eqn="prod @3 21600 pixelWidth" />
  <v:f eqn="prod @3 21600 pixelHeight" />
  <v:f eqn="sum @0 0 1" />
  <v:f eqn="prod @6 1 2" />
  <v:f eqn="prod @7 21600 pixelWidth" />
  <v:f eqn="sum @8 21600 0" />
  <v:f eqn="prod @7 21600 pixelHeight" />
  <v:f eqn="sum @10 21600 0" />
 </v:formulas>
 <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect" />
 <o:lock v:ext="edit" aspectratio="t" />
</v:shapetype><v:shape id="图片_x0020_26" o:spid="_x0000_i1060" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;
 height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_26" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"uid"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"uname"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"dingding"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"upwd"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"123456"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"email"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"ding@qq.com"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"phone"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"13501234567"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"avatar"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"img/avatar/default.png"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"user_name"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">丁伟</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"gender"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.4、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">删除用户</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/delete<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/delete?uid=1<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Uid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">成功删除</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">301-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">删除失败</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户编号为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”delete suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.5、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">修改用户信息</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/update<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">post<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/update<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">ui<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">email<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">邮箱</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">phone<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">电话</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">gender<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">性别</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">1-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">男</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"> <span lang="EN-US">0-</span></span><span style="font-size:12.0pt;line-height:150%;
  font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">女</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:5;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">user_name<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">真实姓名</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">注册成功</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">301-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">更改失败</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">用户编号为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">402-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">邮箱为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">403-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">电话为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">404-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">性别为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">406-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">真姓实名为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”update suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.6、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">用户列表</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/list<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/list/detail?pno=1&amp;pageSize=10<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">pno<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">否</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">页码</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">pageSize<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">否</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">每页大小</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数——数组</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"recordCount"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">4</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pageSize"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">9</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pageCount"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pno"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"data"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:0pt">[</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"uid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">4</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"uname"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"yaya"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"email"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"ya@qq.com"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"phone"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"13501234560"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"avatar"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/avatar/default.png"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"user_name"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">秦小雅</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"gender"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">0</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:
0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"uid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">3</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"uname"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"doudou"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"email"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"dou@qq.com"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"phone"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"13501234569"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"avatar"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/avatar/default.png"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"user_name"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">窦志强</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"gender"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:
0pt">]</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.7、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">检测邮箱</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkemail<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkemail?email=ya@qq.com<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">email<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户邮箱</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">不存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">201-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">已存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”non-exists” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.8、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">检测手机</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkphone<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkphone?phone=18111111111<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">phone<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户电话</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">不存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">201-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">已存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”non-exists” }<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.9、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">检测用户名</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkuname<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/checkuname?uname=jing<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">uname<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">用户邮箱</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">不存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">201-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">已存在</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”non-exists” }<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.10、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">退出登录</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/logout<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/logout<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”logout succ” }<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l2 level2 lfo2"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.11、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">获取当前用户信息</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/sessiondata<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/user/sessiondata<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “uid”:”1”, “uname”:”dingding” }<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h1 style="margin-left:45.0pt;text-indent:-45.0pt;mso-list:l1 level1 lfo1"><!--[if !supportLists]--><span lang="EN-US" style="mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast"><span style="mso-list:Ignore">二、</span></span><!--[endif]--><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">用户模块</span><span lang="EN-US"><o:p></o:p></span></h1>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l0 level2 lfo3"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.1、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">商品列表</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/list<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/list?pno=1&amp;pageSize=10<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">pno<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">否</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">页码</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">count<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">否</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">每页大小</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数——数组</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"recordCount"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">43</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pageSize"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">5</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pageCount"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">9</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"pno"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"data"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:0pt">[</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">29</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"title"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">联想</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">(ThinkPad)</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">轻薄系列</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">E470c(20H3A004CD)14</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">英寸笔记本电脑</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">(i5-6200U 8G 500G 2G</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">独显</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt"> Win10)</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">黑色</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"price"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">4699</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"sold_count"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">1862</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"is_onsale"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">0</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pic"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/md/584b5678Nbc9f1e70.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:
0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">43</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"title"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">神舟</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">(HASEE)</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">战神</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">Z6-KP7GT 15.6</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">英寸游戏本笔记本电脑</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">(i7-7700HQ 8G 1T+128G SSD GTX1050 1080P)</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">黑色</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"price"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">5699</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"sold_count"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">1844</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"is_onsale"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pic"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/md/58a2c667Ne2b5cb73.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:
0pt">]</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2 style="margin-left:38.25pt;text-indent:-38.25pt;mso-list:l0 level2 lfo3"><!--[if !supportLists]--><span lang="EN-US" style="mso-fareast-font-family:&quot;Calibri Light&quot;;mso-fareast-theme-font:
major-latin;mso-bidi-font-family:&quot;Calibri Light&quot;;mso-bidi-theme-font:major-latin"><span style="mso-list:Ignore">1.2、<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp; </span></span></span><!--[endif]--><span style="font-family:宋体;mso-ascii-font-family:&quot;Calibri Light&quot;;mso-ascii-theme-font:
major-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:major-fareast;
mso-hansi-font-family:&quot;Calibri Light&quot;;mso-hansi-theme-font:major-latin">商品详情</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/detail<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/detail?lid=1<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">lid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">商品编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt;mso-no-proof:
yes"><!--[if gte vml 1]><v:shape id="图片_x0020_25" o:spid="_x0000_i1059" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;
 height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_25" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"details"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt;mso-no-proof:
yes"><!--[if gte vml 1]><v:shape id="图片_x0020_24" o:spid="_x0000_i1058" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;
 height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_24" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"family_id"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"title"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"Apple MacBook Air 13.3</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">英寸笔记本</span><span style="font-size:9.0pt;font-family:
Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt"> </span><span style="font-size:9.0pt;font-family:宋体;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">银色</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">(Core i5 </span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">处理器</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">/8GB</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">/256GB SSD</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt"> MMGG2CH/A)"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"subtitle"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"5</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">月焕新季，领券买新机！神券满</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">8000</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">减</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">800</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">！一体成型金属机身，纤薄轻巧，长达</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">12</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">小时续航</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"price"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">8268</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"promise"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"*</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">退货补运费</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> *30</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">天无忧退货</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt"> *48</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">小时快速退款</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> *72</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">小时发货</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">双核</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">i5/8GB</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">/256GB</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"lname"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"AppleMacBook Air"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"os"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"MacOS"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"memory"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"8G"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"resolution"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"1920*1080"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"video_card"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">集成显卡</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"cpu"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"Intel i5</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">低功耗版</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"video_memory"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">其它</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"category"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">轻薄本</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"disk"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"256G</span><span style="font-size:
9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">固态</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"details"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"&lt;div
class=\"content_tpl\"&gt; &lt;div
class=\"formwork\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;
</span>&lt;div class=\"formwork_img\"&gt;&lt;br&gt;&lt;/div&gt;&lt;div
class=\"formwork_img\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span>&lt;img alt=\"\" class=\"\"
src=\"img/product/detail/57b15612N81dc489d.jpg\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp; </span>&lt;/div&gt;<span style="mso-spacerun:yes">&nbsp;
</span>&lt;/div&gt;<span style="mso-spacerun:yes">&nbsp; </span>&lt;div
class=\"formwork\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;
</span>&lt;div class=\"formwork_img\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span>&lt;img alt=\"\"
class=\"\" src=\"//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp; </span>&lt;/div&gt;<span style="mso-spacerun:yes">&nbsp;
</span>&lt;/div&gt;<span style="mso-spacerun:yes">&nbsp; </span>&lt;div
class=\"formwork\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;
</span>&lt;div class=\"formwork_text\"&gt;<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">技术规格请前往</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">
www.apple.com/cn/macbook-air/specs.html </span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">查看完整内容。</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"shelf_time"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">150223456789</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"sold_count"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1922</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"is_onsale"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">0</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"picList"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:0pt">[</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">4</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"laptop_id"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"sm"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/sm/57b12a31N8f4f75a3.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"md"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/md/57b12a31N8f4f75a3.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lg"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/lg/57b12a31N8f4f75a3.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">5</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"laptop_id"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"sm"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/sm/57ad359dNd4a6f130.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;</span><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"md"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/md/57ad359dNd4a6f130.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lg"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/lg/57ad359dNd4a6f130.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">6</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"laptop_id"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"sm"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/sm/57ad8846N64ac3c79.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"md"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/md/57ad8846N64ac3c79.jpg"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lg"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/lg/57ad8846N64ac3c79.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:
0pt">]</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:
0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"family"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"fid"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"fname"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">"AppleMacBookAir"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"laptopList"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:0pt">[</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">1</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">双核</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">i5/8GB</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">/128GB</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">2</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">双核</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">i5/8GB</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">/256GB</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">3</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">定制款：双核</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">i7/8G</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">/128G</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"> <o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt">4</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">定制款：双核</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">i7/8G</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">内存</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">/256G</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">闪存</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:
0pt">]</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.3</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、删除商品</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/delete<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/delete?lid=1<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">lid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">商品编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">成功删除</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">301-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">删除失败</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">商品编号为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”delete suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.4</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、商品添加</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">作用：添加商品</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">post<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/product/add<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">family_id<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">所属型号家族编号</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">title<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">String</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">主标题</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">subtitle<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">String</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">副标题</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">price<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">float<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">价格</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:5">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">promise<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">String<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">服务承诺</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:6">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">spec<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">规格</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt">/</span><span style="font-size:10.0pt;mso-bidi-font-size:9.0pt;
  font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">颜色</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:7">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">lname<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">商品名称</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:8">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">os<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">操作系统</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:9">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">memory<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">内存容量</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:10">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">resollution<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">分辨率</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:11">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">video_card<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">显卡型号</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:12">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">cpu<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">处理器</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:13">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">video_memory<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">显存容量</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:14">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">category<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">所属分类</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:15">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">disk<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">硬盘容量及类型</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:16">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">details<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt;mso-font-kerning:
  0pt">string</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">产品详细说明</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:17">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">shelf_time<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">上架时间</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:18">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">sold_count<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">已售出的数量</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:19;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">is_onsale<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是</span><span lang="EN-US" style="font-size:10.0pt;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" style="width:103.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;mso-font-kerning:0pt">#</span><span style="font-size:10.0pt;mso-bidi-font-size:
  9.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
  Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">是否在售</span><span lang="EN-US" style="font-size:10.0pt;mso-bidi-font-size:9.0pt;mso-font-kerning:
  0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">code<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回码</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:
  0pt"> <span lang="EN-US"><o:p></o:p></span></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">200-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">添加成功</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">401-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">所属家族编号为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">402-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">标题为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">403-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">二级为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">404-</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">价格为空</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">...<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="184" valign="top" style="width:138.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">msg<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">string<o:p></o:p></span></p>
  </td>
  <td width="184" valign="top" style="width:138.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">返回说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”add suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h1 style="margin-left:45.0pt;text-indent:-45.0pt;mso-list:l1 level1 lfo1"><!--[if !supportLists]--><span lang="EN-US" style="mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast"><span style="mso-list:Ignore">三、</span></span><!--[endif]--><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">购物车模块</span><span lang="EN-US"><o:p></o:p></span></h1>

<h2><span lang="EN-US">1.1</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、添加购物车</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/add<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/add?lid=1&amp;buyCount=5<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">lid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">商品编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">buyCount<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">购买数量</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”add suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.2</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、购物车列表</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/list<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/list<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt;mso-no-proof:
yes"><!--[if gte vml 1]><v:shape id="图片_x0020_3" o:spid="_x0000_i1057" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;
 height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_3" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"code"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#AA00AA;mso-font-kerning:0pt">200</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#AA00AA;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:
0pt">"data"</span></b><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#333333;mso-font-kerning:0pt">: </span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:0pt">[</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt;mso-no-proof:
yes"><!--[if gte vml 1]><v:shape id="图片_x0020_2" o:spid="_x0000_i1056" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;
 height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_2" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">{</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_1" o:spid="_x0000_i1055" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_1" /><!--[endif]--></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"iid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"987"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"lid"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"17"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"title"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">联想</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">(Lenovo)</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">小新</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">700</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">电竞版</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt"> 15.6</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">英寸游戏笔记本电脑</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">(i5-6300HQ 8G
500G+128G SSD GTX950M 4G IPS)</span><span style="font-size:9.0pt;font-family:
宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;mso-bidi-font-family:
宋体;color:#007777;mso-font-kerning:0pt">黑</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"spec"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">小新</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt">700</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">【</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">i5 </span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;mso-bidi-font-family:宋体;color:#007777;
mso-font-kerning:0pt">双硬盘</span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#007777;mso-font-kerning:0pt"> GTX950M</span><span style="font-size:9.0pt;
font-family:宋体;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;
mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">】</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"price"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"5199.00"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"count"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"1"</span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:black;mso-font-kerning:0pt">,</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt"> </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#CC0000;mso-font-kerning:0pt">"pic"</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt">: </span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#007777;mso-font-kerning:0pt">"img/product/sm/587f476aNcfbf7869.jpg"</span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:
0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><span lang="EN-US" style="font-size:
9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#333333;mso-font-kerning:0pt"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;
</span></span><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#0033FF;mso-font-kerning:
0pt">]</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:
0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:13.5pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:whitesmoke;word-break:break-all"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#00AA00;mso-font-kerning:0pt">}</span></b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.3</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、删除购物车</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/del<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/del?iid=2<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">iid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">购物车编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”delete suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.4</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、修改购物车条目中的购买数量</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/updatecount<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/updatecount?iid=1&amp;count=2<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">iid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">购物车编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">count<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">商品数量</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”update suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.5</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、修改购物车条目中的是否勾选</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/updatechecked<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/updatechecked?iid=1&amp;checked=1<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求参数说明：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">必填</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">iid<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">Int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">购物车编号</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;mso-yfti-lastrow:yes">
  <td width="138" valign="top" style="width:103.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">checked<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">int<o:p></o:p></span></p>
  </td>
  <td width="138" valign="top" style="width:103.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">是否勾选</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">1</span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">勾选</span><span style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"> <span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;</span>0 </span></span><span style="font-size:12.0pt;line-height:150%;font-family:宋体;mso-ascii-font-family:
  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-font-kerning:0pt">未勾选</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">{ “code”:”200”, “msg”:”update suc” }<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h2><span lang="EN-US">1.6</span><span style="font-family:宋体;mso-ascii-font-family:
&quot;Calibri Light&quot;;mso-ascii-theme-font:major-latin;mso-fareast-font-family:宋体;
mso-fareast-theme-font:major-fareast;mso-hansi-font-family:&quot;Calibri Light&quot;;
mso-hansi-theme-font:major-latin">、修改购物车条目中的是否勾选</span><span lang="EN-US"><o:p></o:p></span></h2>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/listchecked<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/cart/listchecked<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回实例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_9" o:spid="_x0000_i1054" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_9" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"code"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">200</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"data"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="arraybrace"><b><span lang="EN-US" style="font-family:Consolas;color:#0033FF">[</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333;
mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_8" o:spid="_x0000_i1053" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_8" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_7" o:spid="_x0000_i1052" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_7" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"iid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"987"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"lid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"17"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">(Lenovo)</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">小新</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">700</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">电竞版</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> 15.6</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">英寸游戏笔记本电脑</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">(i5-6300HQ 8G 500G+128G SSD GTX950M 4G IPS)</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">黑</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"spec"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">小新</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">700</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">【</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5 </span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">双硬盘</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> GTX950M</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">】</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"5199.00"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"count"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"1"</span></span><span class="comma"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/product/sm/587f476aNcfbf7869.jpg"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="arraybrace"><b><span lang="EN-US" style="font-family:Consolas;color:#0033FF">]</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#00AA00">}</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></pre>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<h1 style="margin-left:45.0pt;text-indent:-45.0pt;mso-list:l1 level1 lfo1"><!--[if !supportLists]--><span lang="EN-US" style="mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast"><span style="mso-list:Ignore">四、</span></span><!--[endif]--><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">首页</span><span lang="EN-US"><o:p></o:p></span></h1>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口地址：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/index<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回格式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">json<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请求方式：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">get<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">接口示例：</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%">http://127.0.0.1:8080/index<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">返回参数</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="146" valign="top" style="width:109.7pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">名称</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">类型</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">说明</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="146" valign="top" style="width:109.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">carouselItems<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">array<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">轮播广告</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="146" valign="top" style="width:109.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">recommendedItems<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">array<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">首页推荐</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="146" valign="top" style="width:109.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">newArrialItems<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">array<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">最新上架</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4;mso-yfti-lastrow:yes">
  <td width="146" valign="top" style="width:109.7pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">topSaleItems<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:12.0pt;line-height:150%;mso-font-kerning:0pt">array<o:p></o:p></span></p>
  </td>
  <td width="136" valign="top" style="width:101.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" style="line-height:150%"><span style="font-size:12.0pt;
  line-height:150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-font-kerning:
  0pt">热销单品</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%;
  mso-font-kerning:0pt"><o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="line-height:150%"><span lang="EN-US" style="font-size:
12.0pt;line-height:150%">Json</span><span style="font-size:12.0pt;line-height:
150%;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
Calibri;mso-hansi-theme-font:minor-latin">返回示例</span><span lang="EN-US" style="font-size:12.0pt;line-height:150%"><o:p></o:p></span></p>

<pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_53" o:spid="_x0000_i1051" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_53" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"carouselItems"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333">: </span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#0033FF">[</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333;
mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_52" o:spid="_x0000_i1050" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_52" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_51" o:spid="_x0000_i1049" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_51" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"cid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">1</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"img"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/banner1.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轮播广告商品</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">1"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=28"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_50" o:spid="_x0000_i1048" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_50" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"cid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">2</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"img"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/banner2.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轮播广告商品</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">2"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=19"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_49" o:spid="_x0000_i1047" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_49" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"cid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"img"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/banner3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轮播广告商品</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">3"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"lookforward.html"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_48" o:spid="_x0000_i1046" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_48" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"cid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"img"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/banner4.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轮播广告商品</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">4"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"lookforward.html"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#0033FF">]</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"recommendedItems"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333">: </span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#0033FF">[</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333;
mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_47" o:spid="_x0000_i1045" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_47" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_46" o:spid="_x0000_i1044" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_46" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">1</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"Apple MacBook Air</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img1.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6988</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=1"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_45" o:spid="_x0000_i1043" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_45" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">2</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">小米</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">Air </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超轻薄</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">独立显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img2.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3488</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=5"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_44" o:spid="_x0000_i1042" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_44" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">E480C </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">680M"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5399</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=9"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_43" o:spid="_x0000_i1041" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_43" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">华硕</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">RX310 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超极本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">游戏级显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img4.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4966</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=13"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_42" o:spid="_x0000_i1040" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_42" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想小新</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">700 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">电竞版游戏本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|1TGB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img5.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6299</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=17"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_41" o:spid="_x0000_i1039" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_41" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">戴尔灵越燃</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">7000 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄窄边</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5199</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=19"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#0033FF">]</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"newArrialItems"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333">: </span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#0033FF">[</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333;
mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_40" o:spid="_x0000_i1038" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_40" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_39" o:spid="_x0000_i1037" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_39" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">1</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"Apple MacBook Air</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img1.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6988</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=1"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_38" o:spid="_x0000_i1036" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_38" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">2</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">小米</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">Air </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超轻薄</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">独立显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img2.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3488</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=5"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_37" o:spid="_x0000_i1035" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_37" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">E480C </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">680M"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5399</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=9"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_36" o:spid="_x0000_i1034" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_36" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">华硕</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">RX310 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超极本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">游戏级显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img4.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4966</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=13"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_35" o:spid="_x0000_i1033" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_35" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想小新</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">700 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">电竞版游戏本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|1TGB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img5.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6299</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=17"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_34" o:spid="_x0000_i1032" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_34" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">戴尔灵越燃</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">7000 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄窄边</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5199</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=19"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#0033FF">]</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"topSaleItems"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333">: </span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#0033FF">[</span></b></span><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333;
mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_33" o:spid="_x0000_i1031" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_33" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_32" o:spid="_x0000_i1030" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_32" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">1</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"Apple MacBook Air</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img1.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6988</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=1"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_31" o:spid="_x0000_i1029" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_31" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">2</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">小米</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">Air </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超轻薄</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">独立显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img2.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3488</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=5"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_30" o:spid="_x0000_i1028" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_30" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">3</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">E480C </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄系列</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|256GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">680M"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5399</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=9"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_29" o:spid="_x0000_i1027" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_29" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">华硕</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">RX310 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">金属超极本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|4GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">游戏级显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img4.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">4966</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=13"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_28" o:spid="_x0000_i1026" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_28" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">联想小新</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">700 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">电竞版游戏本</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i7</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|1TGB SSD|8GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">620</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">含共享显卡内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img5.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6299</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=17"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"> <o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">{</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333;mso-no-proof:yes"><!--[if gte vml 1]><v:shape id="图片_x0020_27" o:spid="_x0000_i1025" type="#_x0000_t75" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" style="width:21pt;height:8.25pt;visibility:visible;mso-wrap-style:square">
 <v:imagedata src="file:///C:\Users\web\AppData\Local\Temp\msohtmlclip1\01\clip_image001.gif" o:title="Expanded" />
</v:shape><![endif]--><!--[if !vml]--><img width="28" height="11" src="file:///C:/Users/web/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif" alt="http://tool.oschina.net/tools/json_format/Expanded.gif" v:shapes="图片_x0020_27" /><!--[endif]--></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pid"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">6</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"title"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">戴尔灵越燃</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">7000 </span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">轻薄窄边</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"details"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="string"><span style="font-size:
9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">酷睿双核</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">i5</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">处理器</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">|512GB SSD|2GB</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;mso-hansi-font-family:
Consolas;color:#007777">内存</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777">|</span></span><span class="string"><span style="font-size:9.0pt;mso-ascii-font-family:Consolas;
mso-hansi-font-family:Consolas;color:#007777">英特尔</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">HD</span></span><span class="string"><span style="font-size:9.0pt;
mso-ascii-font-family:Consolas;mso-hansi-font-family:Consolas;color:#007777">显卡</span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"pic"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"img/index/study_computer_img3.png"</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"price"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#AA00AA">5199</span></span><span class="comma"><b><span lang="EN-US" style="font-family:Consolas;color:black">,</span></b></span><span class="number"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#AA00AA"> </span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span class="propertyname"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#CC0000">"href"</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333">: </span></span><span class="string"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#007777">"product_details.html?lid=19"</span></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;
background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#333333"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp; </span></span></span><span class="arraybrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#0033FF">]</span></b></span><span class="collapsible"><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;color:#333333"><o:p></o:p></span></span></pre><pre style="line-height:13.5pt;background:whitesmoke;word-break:break-all"><span class="objectbrace"><b><span lang="EN-US" style="font-size:9.0pt;font-family:Consolas;
color:#00AA00">}</span></b></span><span lang="EN-US" style="font-size:9.0pt;
font-family:Consolas;color:#333333"><o:p></o:p></span></pre>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><span lang="EN-US" style="font-size:12.0pt"><o:p>&nbsp;</o:p></span></p>
