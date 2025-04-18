import{_ as d,c as e,o as n,e as i}from"./app-Ne0PdyYx.js";const r={};function u(a,t){return n(),e("div",null,t[0]||(t[0]=[i(`<h2 id="事件列表" tabindex="-1"><a class="header-anchor" href="#事件列表" aria-hidden="true">#</a> 事件列表</h2><table><thead><tr><th>100101001</th><th>用户</th><th style="text-align:center;">通讯录</th><th>添加成员</th><th>当应用订阅该事件后，如果有新员工添加（例如，通过管理后台添加成员、调用创建用户 API），则会触发该事件。</th></tr></thead><tbody><tr><td>100101002</td><td>用户</td><td style="text-align:center;">通讯录</td><td>成员离职</td><td>当应用订阅该事件后，如果有员工离职（例如，通过管理后台离职成员、调用删除用户 API），则会触发该事件。</td></tr><tr><td>100101003</td><td>用户</td><td style="text-align:center;">通讯录</td><td>成员信息被修改</td><td>应用订阅该事件后，当员工信息（包括：用户名、别名、邮箱、手机号、性别、头像、状态、所属部门、入职时间、工号）被修改时将会触发该事件。</td></tr><tr><td>100102001</td><td>部门</td><td style="text-align:center;">通讯录</td><td>部门新建</td><td>当应用订阅该事件后，如果通讯录内有部门被创建，则会触发该事件。</td></tr><tr><td>100102002</td><td>部门</td><td style="text-align:center;">通讯录</td><td>部门信息变化</td><td>当应用订阅该事件后，如果部门信息发生变化，则会触发该事件。部门信息发生变化的范围包括： 企业管理员在管理后台修改部门信息。 企业开发者调用修改部门部分信息、更新部门所有信息、更新部门ID API 修改部门信息。</td></tr><tr><td>100102003</td><td>部门</td><td style="text-align:center;">通讯录</td><td>部门被删除</td><td>当应用订阅该事件后，如果通讯录内有部门被删除，则会触发该事件。</td></tr><tr><td>100103001</td><td>用户组</td><td style="text-align:center;">通讯录</td><td>分组新建</td><td>当应用订阅该事件后，如果通讯录内有分组新建，则会触发该事件。</td></tr><tr><td>100103002</td><td>用户组</td><td style="text-align:center;">通讯录</td><td>分组信息变化</td><td>当应用订阅该事件后，如果通讯录内有分组信息变化，则会触发该事件。</td></tr><tr><td>100103003</td><td>用户组</td><td style="text-align:center;">通讯录</td><td>分组被删除</td><td>当应用订阅该事件后，如果通讯录内有分组被删除，则会触发该事件。</td></tr><tr><td>100104001</td><td>用户组成员</td><td style="text-align:center;">通讯录</td><td>成员加入分组</td><td>当应用订阅该事件后，如果通讯录内有成员加入分组，则会触发该事件。</td></tr><tr><td>100104002</td><td>用户组成员</td><td style="text-align:center;">通讯录</td><td>成员退出分组</td><td>当应用订阅该事件后，如果通讯录内有成员退出分组，则会触发该事件。</td></tr></tbody></table><h4 id="用户入职" tabindex="-1"><a class="header-anchor" href="#用户入职" aria-hidden="true">#</a> 用户入职</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100101001</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>用户ID</td><td></td></tr><tr><td>openId</td><td>string</td><td>open_id</td><td></td></tr><tr><td>unionId</td><td>string</td><td>union_id</td><td></td></tr><tr><td>name</td><td>string</td><td>用户名称</td><td>张三</td></tr><tr><td>alias</td><td>string</td><td>用户别名</td><td></td></tr><tr><td>departmentId</td><td>integer</td><td>部门ID</td><td>1001</td></tr><tr><td>mobile</td><td>string</td><td>手机号</td><td>13812345678</td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;用户入职&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100101001, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;userId&quot;: 1000001,
        &quot;openId&quot;: &quot;ou-caecc734c2e3328a62489fe0648c4b98779515d3&quot;,
        &quot;unionId&quot;: &quot;on-caecc734c2e3328a62489fe06xxx79515d3xxxx&quot;,
        &quot;name&quot;: &quot;决明子&quot;,
        &quot;alias&quot;: &quot;CEO&quot;,
        &quot;avatarUrl&quot;: &quot;https://v3-file.url.mo.cn/resource/avatar/1.png&quot;,
        &quot;departmentId&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户离职" tabindex="-1"><a class="header-anchor" href="#用户离职" aria-hidden="true">#</a> 用户离职</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100101002</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>用户ID</td><td></td></tr><tr><td>openId</td><td>string</td><td>open_id</td><td></td></tr><tr><td>unionId</td><td>string</td><td>union_id</td><td></td></tr><tr><td>name</td><td>string</td><td>用户名称</td><td>张三</td></tr><tr><td>alias</td><td>string</td><td>用户别名</td><td></td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;用户离职&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100101002, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;openId&quot;: &quot;ou-caecc734c2e3328a62489fe0648c4b98779515d3&quot;,
        &quot;unionId&quot;: &quot;on-caecc734c2e3328a62489fe06xxx79515d3xxxx&quot;,
        &quot;name&quot;: &quot;决明子&quot;,
        &quot;deleted&quot;: 0
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户信息被修改" tabindex="-1"><a class="header-anchor" href="#用户信息被修改" aria-hidden="true">#</a> 用户信息被修改</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100101003</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>用户ID</td><td></td></tr><tr><td>openId</td><td>string</td><td>open_id</td><td></td></tr><tr><td>unionId</td><td>string</td><td>union_id</td><td></td></tr><tr><td>name</td><td>string</td><td>用户名称</td><td>张三</td></tr><tr><td>alias</td><td>string</td><td>用户别名</td><td></td></tr><tr><td>departmentId</td><td>integer</td><td>部门ID</td><td>1001</td></tr><tr><td>mobile</td><td>string</td><td>手机号</td><td>13812345678</td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;用户信息被修改&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100101003, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;openId&quot;: &quot;ou-caecc734c2e3328a62489fe0648c4b98779515d3&quot;,
        &quot;unionId&quot;: &quot;on-caecc734c2e3328a62489fe06xxx79515d3xxxx&quot;,
        &quot;name&quot;: &quot;决明子&quot;,
        &quot;alias&quot;: &quot;CEO&quot;,
        &quot;avatarUrl&quot;: &quot;https://v3-file.url.mo.cn/resource/avatar/1.png&quot;,
        &quot;departmentId&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部门新建" tabindex="-1"><a class="header-anchor" href="#部门新建" aria-hidden="true">#</a> 部门新建</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100102001</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>departmentId</td><td>bigint</td><td>自增ID</td><td>1000002</td></tr><tr><td>departmentName</td><td>varchar</td><td>部门名称</td><td></td></tr><tr><td>parentId</td><td>bigint</td><td>父级部门ID（顶级部门为null）</td><td>1000001</td></tr><tr><td>companyId</td><td>bigint</td><td>企业ID</td><td></td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;部门新建&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100102001, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;departmentId&quot;: 1000002,
        &quot;parentId&quot;: 1000001,
        &quot;departmentName&quot;: &quot;研发中心&quot;,
        &quot;companyId&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部门信息被修改" tabindex="-1"><a class="header-anchor" href="#部门信息被修改" aria-hidden="true">#</a> 部门信息被修改</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100102002</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>departmentId</td><td>bigint</td><td>自增ID</td><td>1000002</td></tr><tr><td>departmentName</td><td>varchar</td><td>部门名称</td><td></td></tr><tr><td>parentId</td><td>bigint</td><td>父级部门ID（顶级部门为null）</td><td>1000001</td></tr><tr><td>companyId</td><td>bigint</td><td>企业ID</td><td></td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;部门信息被修改&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100102002, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;departmentId&quot;: 1000002,
        &quot;parentId&quot;: 1000001,
        &quot;departmentName&quot;: &quot;研发中心&quot;,
        &quot;companyId&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部门被删除" tabindex="-1"><a class="header-anchor" href="#部门被删除" aria-hidden="true">#</a> 部门被删除</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100102003</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>departmentId</td><td>bigint</td><td>自增ID</td><td>1000002</td></tr><tr><td>departmentName</td><td>varchar</td><td>部门名称</td><td></td></tr><tr><td>parentId</td><td>bigint</td><td>父级部门ID（顶级部门为null）</td><td>1000001</td></tr><tr><td>companyId</td><td>bigint</td><td>企业ID</td><td></td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;部门信息被删除&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100102003, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;departmentId&quot;: 1000002,
        &quot;parentId&quot;: 1000001,
        &quot;departmentName&quot;: &quot;研发中心&quot;,
        &quot;companyId&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组信息被修改" tabindex="-1"><a class="header-anchor" href="#分组信息被修改" aria-hidden="true">#</a> 分组信息被修改</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100103002</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>groupId</td><td>string</td><td>分组ID</td><td></td></tr><tr><td>groupName</td><td>string</td><td>分组名称</td><td></td></tr><tr><td>departmentIds</td><td>Long[]</td><td>部门ID</td><td></td></tr><tr><td>userIds</td><td>Long[]</td><td>用户ID</td><td>张三</td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;分组信息被修改&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100103002, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;groupId&quot;: 10001111,
        &quot;groupName&quot;: &quot;IT 外包组&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加用户组成员-成员或者部门" tabindex="-1"><a class="header-anchor" href="#添加用户组成员-成员或者部门" aria-hidden="true">#</a> 添加用户组成员(成员或者部门)</h4><p><strong>事件</strong></p><table><thead><tr><th>基本</th><th></th></tr></thead><tbody><tr><td>事件类型</td><td>100104001</td></tr><tr><td>支持的应用类型</td><td>【自有应用】【三方应用】</td></tr></tbody></table><p><strong>event事件体</strong></p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>groupId</td><td>Long</td><td>用户组ID</td><td></td></tr><tr><td>departmentIds</td><td>string[]</td><td>部门ID</td><td>[&quot;D1001&quot;]</td></tr><tr><td>userIds</td><td>string[]</td><td>用户ID</td><td>[&quot;U1001&quot;]</td></tr></tbody></table><p><strong>event事件体示例</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;version&quot;: &quot;1.0&quot;,
    &quot;header&quot;: { 
        &quot;token&quot;: &quot;066zT6pS4QCbgj5Do145GfDbbagCHGgF&quot;,    // token
        &quot;event_id&quot;: &quot;bb224e75-f2fe-4455-aee0-0674ad9fc2f4&quot;, // 可以是UUID
        &quot;event_name&quot;: &quot;添加用户组成员&quot;, // 事件名称, 比如:  用户离职等
        &quot;event_key&quot;: 100104001, // 事件KEY
        &quot;timestamp&quot;: 1737262443448, // 事件发生毫秒时间戳, 一般是生产方的createdTime或updatedTime
        &quot;retry_count&quot;: 0, // 重试次数, 从0开始, 每重试1次, 新增1, 直到最大重试次数    
        },
    &quot;event&quot;: {
        &quot;groupId&quot;: 1000001,
        &quot;groupName&quot;: &quot;Python研发组&quot;,
        &quot;userIds&quot;: [&quot;U10001&quot;],
        &quot;departmentIds&quot;: [&quot;D10001&quot;]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58)]))}const s=d(r,[["render",u],["__file","event-list.html.vue"]]);export{s as default};
