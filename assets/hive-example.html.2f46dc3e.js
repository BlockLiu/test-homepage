import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as s,d as p,w as i,e as l,r}from"./app.87de0ece.js";const c={},u=n("h1",{id:"hive-connector-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hive-connector-examples","aria-hidden":"true"},"#"),s(" Hive connector examples")],-1),d=l(`<p>The following shows test hive table with user parameters and how to read/write it with hive connectors.</p><h2 id="test-hive-table-information" tabindex="-1"><a class="header-anchor" href="#test-hive-table-information" aria-hidden="true">#</a> Test hive table information</h2><ul><li>Example hive info: <ul><li><p>hive database name: test_db</p></li><li><p>hive table name: test_table</p></li><li><p>metastore uri: <code>thrift://localhost:9083</code></p></li><li><p>partition: p_date</p></li><li><p>DDL:</p><table><thead><tr><th>filed name</th><th>field type</th><th>description</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>-</td></tr><tr><td>state</td><td>string</td><td>-</td></tr><tr><td>county</td><td>string</td><td>-</td></tr><tr><td>p_date</td><td>string</td><td>partition tield</td></tr></tbody></table></li></ul></li></ul><h2 id="hive-reader-example" tabindex="-1"><a class="header-anchor" href="#hive-reader-example" aria-hidden="true">#</a> Hive reader example</h2><p>Configuration for reading the above test hive table:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.source.HiveInputFormat&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;county&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p_date=20220101&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;reader_parallelism_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-writer-example" tabindex="-1"><a class="header-anchor" href="#hive-writer-example" aria-hidden="true">#</a> Hive writer example</h2><p>Configuration for writing the above test hive table:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.sink.HiveOutputFormat&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;county&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p_date=20220101&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;writer_parallelism_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(k,m){const a=r("RouterLink");return e(),o("div",null,[u,n("p",null,[s("Parent document: "),p(a,{to:"/connectors/hive/hive.html"},{default:i(()=>[s("hive-connector")]),_:1})]),d])}const h=t(c,[["render",v],["__file","hive-example.html.vue"]]);export{h as default};
