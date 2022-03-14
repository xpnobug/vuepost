(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{437:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git命令操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git命令操作"}},[t._v("#")]),t._v(" Git命令操作")]),t._v(" "),e("p",[t._v("...或在命令行上创建一个新的存储库")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('echo "# q" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/xxx/xxx.git\ngit push -u origin main\n')])])]),e("p",[t._v("...或从命令行推送现有存储库")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote add origin https://github.com/xxx/xxx.git\ngit branch -M main\ngit push -u origin main\n")])])]),e("h2",{attrs:{id:"_1-克隆远程版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆远程版本库"}},[t._v("#")]),t._v(" 1. 克隆远程版本库")]),t._v(" "),e("div",{staticClass:"language-g extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone <url>   # 克隆远程版本库\ngit init\t\t  # 初始化本地版本库\n")])])]),e("h2",{attrs:{id:"_2-修改和提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改和提交"}},[t._v("#")]),t._v(" 2. 修改和提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git status\t\t            # 查看状态\ngit diff                    # 查看变更内容\ngit add .                   # 跟踪所有改动过的内容,提交到缓存区\ngit add <file>              # 跟踪指定文件，提交到缓存区\ngit mv <oldfile> <newfile>  # 文件名修改\ngit rm <file>               # 删除暂存区或分支上的文件, 同时工作区也不需要这个文件了\ngit rm --cached <file>      # 需要删除暂存区或分支上的文件, 但本地又需要使用, 只是不希望这个文件被版本控制\ngit commit -m "commit message" # 提交所有更新过的文件\ngit commit --amend          # 修改最后一次提交\n')])])]),e("h2",{attrs:{id:"_3-查看提交历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看提交历史"}},[t._v("#")]),t._v(" 3. 查看提交历史")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log              # 查看提交历史\ngit log -p <file>    # 查看指定文件的提交历史\ngit blame <file>     # 以列表的方式查看指定文件的提交历史\n")])])]),e("h2",{attrs:{id:"_4-撤销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-撤销"}},[t._v("#")]),t._v(" 4. 撤销")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard HEAD    # 撤销工作目录中所有未提交文件的修改内容\ngit checkout HEAD <file> # 撤销指定的未提交文件的修改内容\ngit revert <commit>      # 撤销指定的提交\n")])])]),e("h2",{attrs:{id:"_5-分支和标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-分支和标签"}},[t._v("#")]),t._v(" 5. 分支和标签")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch                   # 显示所有本地的分支\ngit checkout <branch/tag>    # 切换到指定分支或者标签\ngit branch <new-branch>      # 创建新分支\ngit branch -d <branch>       # 删除本地分支\ngit tag                      # 列出所有本地标签\ngit tag <tagname>            # 基于最新提交创建标签\ngit tag -d <tagname>         # 删除指定标签\n")])])]),e("h2",{attrs:{id:"_6-合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-合并"}},[t._v("#")]),t._v(" 6. 合并")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git merge <branch>           # 合并指定分支到当前分支\ngit rebase <branch>          # 衍合指定分支到当前分支\n")])])]),e("h2",{attrs:{id:"_7-远程操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-远程操作"}},[t._v("#")]),t._v(" 7. 远程操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote -v                         # 查看远程版本库信息\ngit remote show <remote>              # 查看指定远程版本库信息\ngit remote add <remote> <url>         # 添加远程版本库\ngit fetch <remote>                    # 拉取远程库代码\ngit pull <remote> <branch>            # 下载远程库代码及快速合并\ngit push <remote> <branch>            # 上传代码及快速合并\ngit push <remote> :<branch/tag-name>  # 删除远程分支或者标签\ngit push --tags                       # 上传所有标签\n")])])]),e("h2",{attrs:{id:"_8-默认设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-默认设置"}},[t._v("#")]),t._v(" 8. 默认设置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("master  # 默认开发分支\norigin  # 默认远程版本库\nHEAD    # 默认开发分会\nHEAD^   # HEAD的父提交\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);