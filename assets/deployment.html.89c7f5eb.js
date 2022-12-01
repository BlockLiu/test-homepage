import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a,b as e,d as t,e as n,r}from"./app.87de0ece.js";const p={},c=n('<h1 id="deployment-guide" tabindex="-1"><a class="header-anchor" href="#deployment-guide" aria-hidden="true">#</a> Deployment Guide</h1><blockquote><p>At present, <em><strong>BitSail</strong></em> only supports flink deployment on Yarn.<br> Other platforms like <code>native kubernetes</code> will be release recently.</p></blockquote><p>Here are the contents of this part:</p><ul><li><a href="#jump_pre_configure">Pre Configuration</a><ul><li><a href="#jump_configure_hadoop">Configure Hadoop Environment</a></li><li><a href="#jump_configure_flink">Configure Flink Cluster</a></li></ul></li><li><a href="#jump_submit_to_yarn">Submit to Yarn</a><ul><li><a href="#jump_submit_example">Submit an example job</a></li><li><a href="#jump_log">Log for Debugging</a></li></ul></li><li><a href="#jump_submit_local">Submit to Local Flink Session</a></li></ul><p>Below is a step-by-step guide to help you effectively deploy it on Yarn.</p><hr><h2 id="pre-configuration" tabindex="-1"><a class="header-anchor" href="#pre-configuration" aria-hidden="true">#</a> <span id="jump_pre_configure">Pre configuration</span></h2><h3 id="configure-hadoop-environment" tabindex="-1"><a class="header-anchor" href="#configure-hadoop-environment" aria-hidden="true">#</a> <span id="jump_configure_hadoop">Configure Hadoop Environment</span></h3><p>To support Yarn deployment, <code>HADOOP_CLASSPATH</code> has to be set in system environment properties. There are two ways to set this environment property:</p>',9),d=a("li",null,[a("p",null,[e("Set "),a("code",null,"HADOOP_CLASSPATH"),e(" directly.")])],-1),u=a("code",null,"HADOOP_HOME",-1),h={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/bin/bitsail",target:"_blank",rel:"noopener noreferrer"},m=a("code",null,"HADOOP_CLASSPATH",-1),b=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$HADOOP_HOME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_CLASSPATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$HADOOP_HOME/bin/hadoop classpath<span class="token variable">)</span></span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-flink-cluster" tabindex="-1"><a class="header-anchor" href="#configure-flink-cluster" aria-hidden="true">#</a> <span id="jump_configure_flink">Configure Flink Cluster</span></h3>`,2),k={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/resources/bitsail.conf",target:"_blank",rel:"noopener noreferrer"},f=n('<p>Here are some frequently-used options in the configuration file:</p><table><tr><th>Prefix</th><th>Parameter name</th><th>Description</th><th>Example</th></tr><tr><td rowspan="3">sys.flink.</td><td>flink_home</td><td>The root dir of flink.</td><td>${BITSAIL_HOME}/embedded/flink</td></tr><tr><td>checkpoint_dir</td><td>The path storing the meta data file and data files of checkpoints.<br>Reference: <a href="https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/checkpoints/">Flink Checkpoints</a></td><td>&quot;hdfs://opensource/bitsail/flink-1.11/checkpoints/&quot;</td></tr><tr><td>flink_default_properties</td><td>General flink runtime options configued by &quot;-D&quot;.</td><td>{<br> classloader.resolve-order: &quot;child-first&quot;<br> akka.framesize: &quot;838860800b&quot;<br> rest.client.max-content-length: 838860800<br> rest.server.max-content-len<br>} </td></tr></table><hr><h2 id="submit-to-yarn" tabindex="-1"><a class="header-anchor" href="#submit-to-yarn" aria-hidden="true">#</a> <span id="jump_submit_to_yarn">Submit to Yarn</span></h2><blockquote><p><em><strong>BitSail</strong></em> only support resource provider <code>yarn&#39;s yarn-per-job</code> mode until now, others like <code>native kubernetes</code> will be release recently.</p></blockquote><p>You can use the startup script <code>bin/bitsail</code> to submit flink jobs to yarn.</p><p>The specific commands are as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> <span class="token punctuation">[</span>job_conf_path<span class="token punctuation">]</span> --execution-mode run <span class="token parameter variable">--queue</span> <span class="token punctuation">[</span>queue_name<span class="token punctuation">]</span> --deployment-mode yarn-per-job <span class="token punctuation">[</span>--priority <span class="token punctuation">[</span>yarn_priority<span class="token punctuation">]</span> -p/--props <span class="token punctuation">[</span>name<span class="token operator">=</span>value<span class="token punctuation">]</span><span class="token punctuation">]</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter description</p><ul><li>Required parameters <ul><li><strong>queue_name</strong>: Target yarn queue</li><li><strong>job_conf_path</strong>: Path of job configuration file</li></ul></li><li>Optional parameters <ul><li><strong>yarn_priority</strong>: Job priority on yarn</li><li><strong>name=value</strong>: Flink properties, for example <code>classloader.resolve-order=child-first</code><ul><li><strong>name</strong>: Property key. Configurable flink parameters that will be transparently transmitted to the flink task.</li><li><strong>value</strong>: Property value.</li></ul></li></ul></li></ul><h3 id="submit-an-example-job" tabindex="-1"><a class="header-anchor" href="#submit-an-example-job" aria-hidden="true">#</a> <span id="jump_submit_example">Submit an example job</span></h3><p>Submit a fake source to print sink test to yarn.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> ~/bitsail-archive-0.1.0-SNAPSHOT/examples/Fake_Print_Example.json --execution-mode run <span class="token parameter variable">-p</span> <span class="token assign-left variable">1</span><span class="token operator">=</span><span class="token number">1</span>  --deployment-mode yarn-per-job  <span class="token parameter variable">--queue</span> default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="log-for-debugging" tabindex="-1"><a class="header-anchor" href="#log-for-debugging" aria-hidden="true">#</a> <span id="jump_log">Log for Debugging</span></h3><h4 id="client-side-log-file" tabindex="-1"><a class="header-anchor" href="#client-side-log-file" aria-hidden="true">#</a> Client side log file</h4><p>Please check <code>${FLINK_HOME}/log/</code> folder to read the log file of BitSail client.</p><h4 id="yarn-task-log-file" tabindex="-1"><a class="header-anchor" href="#yarn-task-log-file" aria-hidden="true">#</a> Yarn task log file</h4><p>Please go to Yarn WebUI to check the logs of Flink JobManager and TaskManager.</p><hr><h2 id="submit-to-local-flink-session" tabindex="-1"><a class="header-anchor" href="#submit-to-local-flink-session" aria-hidden="true">#</a> Submit to Local Flink Session</h2><p>Suppose that BitSail install path is: <code>${BITSAIL_HOME}</code>.</p><p>After building BitSail, we can enter the following path and find runnable jars and example job configuration files:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">${BITSAIL_HOME}</span>/bitsail-dist/target/bitsail-dist-0.1.0-SNAPSHOT-bin/bitsail-archive-0.1.0-SNAPSHOT/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-fake-to-print-example" tabindex="-1"><a class="header-anchor" href="#run-fake-to-print-example" aria-hidden="true">#</a> Run Fake_to_Print example</h3>',24),g={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Print_Example.json",target:"_blank",rel:"noopener noreferrer"},v=n(`<ul><li><code>&lt;job-manager-address&gt;</code>: the address of job manager, should be host:port, <em>e.g.</em> <code>localhost:8081</code>.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Print_Example.json <span class="token punctuation">\\</span>
  --jm-address <span class="token operator">&lt;</span>job-manager-address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can visit Flink WebUI to see the running job. In task manager, we can see the output of the Fake_to_Print job in its stdout.</p><h3 id="run-fake-to-hive-example" tabindex="-1"><a class="header-anchor" href="#run-fake-to-hive-example" aria-hidden="true">#</a> Run Fake_to_Hive example</h3>`,4),_={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Hive_Example.json",target:"_blank",rel:"noopener noreferrer"},y=n(`<ul><li>Remember fulfilling the job configuration with an available hive source before run the command: <ul><li><code>job.writer.db_name</code>: the hive database to write.</li><li><code>job.writer.table_name</code>: the hive table to write.</li><li><code>job.writer.metastore_properties</code>: add hive metastore address to it, like:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token punctuation">{</span>
      <span class="token string">&quot;job&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;writer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;metastore_properties&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{<span class="token entity" title="\\&quot;">\\&quot;</span>hive.metastore.uris<span class="token entity" title="\\&quot;">\\&quot;</span>:<span class="token entity" title="\\&quot;">\\&quot;</span>thrift://localhost:9083<span class="token entity" title="\\&quot;">\\&quot;</span>}&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Then you can use the similar command to submit a BitSail job to specified Flink session:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Hive_Example.json <span class="token punctuation">\\</span>
  --jm-address <span class="token operator">&lt;</span>job-manager-address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(j,q){const s=r("ExternalLinkIcon");return o(),l("div",null,[c,a("ol",null,[d,a("li",null,[a("p",null,[e("Set "),u,e(" targeting to the hadoop dir in deploy environment. The "),a("a",h,[e("bitsail"),t(s)]),e(" scripts will use the following command to generate "),m,e(".")])])]),b,a("p",null,[e("After packaging, the project production contains a file "),a("a",k,[e("conf/bitsail.conf"),t(s)]),e(". This file describes the system configuration of deployment environment, including the flink path and some other default parameters.")]),f,a("p",null,[e("Use "),a("a",g,[e("examples/Fake_Print_Example.json"),t(s)]),e(" as example to start a BitSail job:")]),v,a("p",null,[e("Use "),a("a",_,[e("examples/Fake_hive_Example.json"),t(s)]),e(" as an example:")]),y])}const H=i(p,[["render",x],["__file","deployment.html.vue"]]);export{H as default};
