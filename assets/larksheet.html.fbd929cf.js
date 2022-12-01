import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as e,b as t,d as a,w as s,e as p,r as l}from"./app.87de0ece.js";const c={},u=e("h1",{id:"larksheet-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#larksheet-connector","aria-hidden":"true"},"#"),t(" LarkSheet connector")],-1),h=e("p",null,[t("The "),e("em",null,[e("strong",null,"Bitsail")]),t(" LarkSheet connector supports reading lark sheets. The main function points are as follows:")],-1),m=e("li",null,"Support batch read from single or multiple lark sheets at once.",-1),k={href:"https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology?lang=en-US",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"Support read a portion of columns from sheets.",-1),g=p(`<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;bitsail-connector-larksheet&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="larksheet-reader" tabindex="-1"><a class="header-anchor" href="#larksheet-reader" aria-hidden="true">#</a> LarkSheet reader</h3><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><p>Bitsail LarkSheet reader processes all data as string.</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sheet_urls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;datetime&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">LarkSheet reader class name, <code>com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat</code></td></tr><tr><td style="text-align:left;">sheet_urls</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">A list of sheet to read. Multi sheets urls are separated by comma.</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types.</td></tr></tbody></table><p>The following parameters are for authentication, you have to set (<code>sheet_token</code>) or (<code>app_id</code> and <code>app_secret</code>) in your configuration.</p><table><tr><th>Param name</th><th>Required</th><th>Optional value</th><th>Description</th></tr><tr><td>sheet_token</td><td rowspan="3">At least set one:<br>1. \`sheet_token\`<br>2. \`app_id\` and \`app_secret\`</td><td></td><td>Token for get permission to visit <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td></tr><tr><td>app_id</td><td></td><td rowspan="2">Use \`app_id\` and \`app_secret\` to generate token for visiting <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td></tr><tr><td>app_secret</td><td></td></tr></table><p>Note that if you use <code>sheet_token</code>, it may expire when the job runs. If you use <code>app_id</code> and <code>app_secret</code>, the token will be refreshed if it expires.</p><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Read parallelism num</td></tr><tr><td style="text-align:left;">batch_size</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Number of lines extracted once.</td></tr><tr><td style="text-align:left;">skip_nums</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">A list of numbers indicating how many lines should be skipped in each sheet.</td></tr></tbody></table><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,16);function y(b,v){const n=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[u,e("p",null,[t("Parent document: "),a(n,{to:"/connectors/introduction.html"},{default:s(()=>[t("connectors")]),_:1})]),h,e("ul",null,[m,e("li",null,[t("Support authentication by static token and "),e("a",k,[t("application"),a(o)]),t(".")]),f]),g,e("p",null,[t("Configuration examples: "),a(n,{to:"/connectors/larksheet/larksheet-example.html"},{default:s(()=>[t("larksheet-connector-example")]),_:1})])])}const q=r(c,[["render",y],["__file","larksheet.html.vue"]]);export{q as default};
