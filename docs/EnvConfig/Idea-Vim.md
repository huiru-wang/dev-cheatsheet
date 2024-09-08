# ideavimrc配置
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

# Idea Keymap

Insert Inline Proposal









