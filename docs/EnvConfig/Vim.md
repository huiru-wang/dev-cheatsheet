# Vim
相关Vim命令，建议 Vs Code 插件：Vim Cheatsheet

## vimrc配置
```vim
"========================
"=====    basic     =====
"========================
set number
set relativenumber
set updatetime=100
set autoindent      "自动缩进"
set smartindent
set mouse-=a
set tabstop=4
set expandtab
set shiftwidth=4
syntax on
set cursorline
set wrap            "超出折叠 不会换行"
set autowrite
set wildmenu        "tab提示命令"
set encoding=utf-8
set hlsearch        "搜索高亮"
set incsearch       "搜索高亮同步"
set ignorecase      "搜索高亮忽略大小写"
set smartcase
set list            "显示末尾的空格"
set listchars=tab:→\ ,trail:☜,extends:…
set scrolloff=8     "保持光标距底部8行"
" set termguicolors “颜色加深
set splitright
set splitbelow
set foldenable      "开启代码折叠"
set foldmethod=expr
set foldcolumn=1    "显示被折叠的函数"
set foldlevel=99
set foldlevelstart=99
set nobackup

"========================
"=====   mapping    =====
"========================
" :verbose check keymap
let mapleader = ";"
inoremap jk <Esc>
inoremap <C-H> <Left>
inoremap <C-j> <Down>
inoremap <C-k> <Up>
inoremap <C-l> <Right>

nnoremap <leader>fc <Esc>:bd<CR>
nnoremap <C-q> <Esc>:q<CR>
nnoremap <C-s> <Esc>:w<CR>
nnoremap <S-h> ^
nnoremap <S-l> $
nnoremap <leader>fc <Esc>:bd<CR>

" 窗口移动,缩放
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
nnoremap <leader>wh <C-w>>
nnoremap <leader>wj <C-w>+
nnoremap <leader>wk <C-w>-
nnoremap <leader>wl <C-w><
" 块
nnoremap <C-v> <C-q>
" 折叠
" za/zo  zM/zR

vnoremap jk <Esc>
tnoremap <Esc> <C-\><C-n>

"========================
"=====  easymotion  =====
"========================

"========================
"=====   surround   =====
"========================
"c/d/y s <existing> <desired>
"'a' -> "a"

"========================
"=====     sneak    =====
"========================
"s<char><char>
```
## ideavimrc配置
在vimrc基础上的Idea支持
```vim
" Source your .vimrc
source ~/.vimrc

"" -- Suggested options --
" Show a few lines of context around the cursor. Note that this makes the
" text scroll if you mouse-click near the start or end of the window.
set scrolloff=5

" Do incremental searching.
set incsearch

" Don't use Ex mode, use Q for formatting.
map Q gq


"" -- Map IDE actions to IdeaVim -- https://jb.gg/abva4t
"" Map \r to the Reformat Code action
"map \r <Action>(ReformatCode)

"" Map <leader>d to start debug
"map <leader>d <Action>(Debug)

"" Map \b to toggle the breakpoint on the current line
"map \b <Action>(ToggleLineBreakpoint)


" Find more examples here: https://jb.gg/share-ideavimrc

source ~/.vimrc
""" GoTo Mappings----------------------------
nnoremap <C-o> :<C-u>action Back<CR>
nnoremap <C-i> :<C-u>action Forward<CR>

nnoremap gs :<C-u>action GotoSuperMethod<CR>
nnoremap gi :<C-u>action GotoImplementation<CR>
nnoremap <leader>sf :<C-u>action FindInPath<CR>
""" nnoremap gf :<C-u>action GotoFile<CR>
""" nnoremap ga :<C-u>action GotoAction<CR>
""" nnoremap gb :<C-u>action JumpToLastChange<CR>
""" nnoremap gd :<C-u>action GotoDeclaration<CR>
""" nnoremap gm :<C-u>action GotoSymbol<CR>
""" nnoremap gu :<C-u>action ShowUsages<CR>
""" nnoremap gt :<C-u>action GotoTest<CR>
""" nnoremap gr :<C-u>action RecentFiles<CR>

""" Tree Action------------------------------

""" Plugins  --------------------------------
<Plug>(sneak-s)
set surround
set multiple-cursors
set commentary
set argtextobj
set easymotion
set textobj-entire
set ReplaceWithRegister
""" 中英插件
set keep-english-in-normal
set keep-english-in-normal-and-restore-in-insert
set sneak
""" Plugin settings -------------------------
let g:argtextobj_pairs="[:],(:),<:>"

""" Common settings -------------------------
set scrolloff=5
set showmode
set so=5
set incsearch
set nu

""" Idea specific settings ------------------
set ideajoin
set ideastatusicon=gray
set idearefactormode=keep

""" Mappings --------------------------------
map <leader>f <Plug>(easymotion-s)
map <leader>e <Plug>(easymotion-f)

""" map <leader>d <Action>(Debug)
""" map <leader>r <Action>(RenameElement)
""" map <leader>c <Action>(Stop)
""" map <leader>z <Action>(ToggleDistractionFreeMode)

""" map <leader>s <Action>(SelectInProjectView)
""" map <leader>a <Action>(Annotate)
""" map <leader>h <Action>(Vcs.ShowTabbedFileHistory)
""" map <S-Space> <Action>(GotoNextError)

""" map <leader>b <Action>(ToggleLineBreakpoint)
""" map <leader>o <Action>(FileStructurePopup)
```
