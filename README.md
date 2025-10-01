# 🧭 Lista Completa de Comandos do Git

Guia completo de todos os comandos do Git, com explicações curtas e organizadas por categoria.  
Ideal para usar como referência rápida ou README de estudo.

---

## 🧱 1. Comandos básicos do Git

**git init** — Cria um novo repositório Git vazio no diretório atual.  
**git clone <url>** — Faz uma cópia local (clone) de um repositório remoto.  
**git add <arquivo>** — Adiciona um arquivo à área de preparação (staging area).  
**git add .** — Adiciona todos os arquivos modificados à área de preparação.  
**git status** — Mostra o estado atual do repositório (arquivos modificados, preparados, não rastreados etc.).  
**git commit -m "mensagem"** — Registra as alterações preparadas no histórico do repositório.  
**git commit -am "mensagem"** — Adiciona e comita alterações em arquivos já rastreados de uma só vez.  
**git log** — Exibe o histórico de commits.  
**git show <commit>** — Mostra detalhes de um commit específico.  
**git diff** — Mostra as diferenças entre as alterações feitas e as últimas confirmadas.  
**git diff --staged** — Mostra as diferenças entre os arquivos preparados e o último commit.  
**git restore <arquivo>** — Desfaz modificações não adicionadas na área de staging.  
**git rm <arquivo>** — Remove um arquivo rastreado e prepara essa exclusão para commit.  
**git mv <origem> <destino>** — Move ou renomeia arquivos rastreados.  

---

## 🌿 2. Ramificações e mesclagem (branches e merges)

**git branch** — Lista as branches locais.  
**git branch <nome>** — Cria uma nova branch.  
**git branch -d <nome>** — Exclui uma branch local.  
**git branch -D <nome>** — Exclui uma branch local à força.  
**git checkout <branch>** — Alterna para outra branch.  
**git switch <branch>** — Alterna para outra branch (versão moderna de checkout).  
**git switch -c <branch>** — Cria e muda para uma nova branch.  
**git merge <branch>** — Mescla a branch especificada com a atual.  
**git rebase <branch>** — Reaplica commits sobre outra branch.  
**git cherry-pick <commit>** — Aplica um commit específico em outra branch.  
**git tag <nome>** — Cria uma tag (marca um commit específico).  
**git tag -a <nome> -m "mensagem"** — Cria uma tag anotada (com mensagem e metadados).  
**git tag -d <nome>** — Remove uma tag local.  

---

## 🌍 3. Repositórios remotos

**git remote** — Lista os repositórios remotos configurados.  
**git remote -v** — Lista os remotos com suas URLs.  
**git remote add <nome> <url>** — Adiciona um novo repositório remoto.  
**git remote remove <nome>** — Remove um repositório remoto.  
**git fetch** — Baixa as atualizações do remoto, sem mesclar.  
**git pull** — Baixa e mescla atualizações do remoto na branch atual.  
**git pull origin <branch>** — Atualiza a branch atual com a versão do repositório remoto.  
**git push** — Envia commits locais para o remoto.  
**git push origin <branch>** — Envia uma branch específica para o remoto.  
**git push -u origin <branch>** — Define a branch atual como padrão para próximos pushes.  
**git push --force** — Força o envio sobrescrevendo o histórico remoto.  
**git push --tags** — Envia todas as tags locais para o remoto.  

---

## 🧭 4. Histórico e inspeção

**git log --oneline** — Mostra o histórico de commits resumido (1 linha por commit).  
**git log --graph** — Mostra o histórico com gráfico de branches.  
**git blame <arquivo>** — Mostra quem modificou cada linha de um arquivo.  
**git show <objeto>** — Exibe informações sobre um commit, tag ou outro objeto Git.  
**git reflog** — Mostra o histórico completo de referências, incluindo commits perdidos.  
**git grep <texto>** — Busca texto dentro do histórico ou arquivos versionados.  
**git shortlog** — Mostra estatísticas de commits agrupadas por autor.  
**git describe** — Mostra uma descrição legível (tag + número de commits + hash).  

---

## 🧰 5. Correções e manipulação de histórico

**git revert <commit>** — Cria um novo commit que desfaz outro commit.  
**git reset <arquivo>** — Remove arquivos da área de preparação (unstage).  
**git reset --soft <commit>** — Move o ponteiro do HEAD sem apagar alterações.  
**git reset --mixed <commit>** — Desfaz o commit mantendo os arquivos modificados.  
**git reset --hard <commit>** — Restaura o estado exato do commit, apagando mudanças.  
**git clean -f** — Remove arquivos não rastreados.  
**git stash** — Guarda temporariamente alterações não commitadas.  
**git stash pop** — Recupera e aplica as alterações guardadas no stash.  
**git stash list** — Lista os stashes existentes.  
**git stash drop** — Exclui um stash.  
**git bisect** — Encontra o commit que introduziu um bug testando por divisão binária.  

---

## ⚙️ 6. Configuração e autenticação

**git config** — Exibe ou altera configurações do Git.  
**git config --global user.name "Nome"** — Define o nome do autor globalmente.  
**git config --global user.email "email@exemplo.com"** — Define o e-mail global.  
**git config --list** — Lista todas as configurações atuais.  
**git credential-store** — Gerencia armazenamento de credenciais.  

---

## 🧮 7. Administração e manutenção do repositório

**git fsck** — Verifica a integridade do repositório.  
**git gc** — Limpa e otimiza o repositório.  
**git prune** — Remove objetos órfãos.  
**git repack** — Reorganiza pacotes de objetos para otimizar armazenamento.  
**git archive** — Cria um arquivo compactado (zip/tar) do repositório.  
**git verify-commit** — Verifica a assinatura GPG de um commit.  
**git verify-tag** — Verifica a assinatura de uma tag.  

---

## 🧩 8. Ferramentas e utilitários

**git help** — Mostra a ajuda geral ou de um comando específico.  
**git version** — Mostra a versão do Git instalada.  
**git citool** — Interface gráfica para commits.  
**git gui** — Interface gráfica do Git.  
**git instaweb** — Inicia um servidor web para visualizar o histórico.  
**git worktree** — Cria e gerencia múltiplas cópias de trabalho de um mesmo repositório.  
**git notes** — Adiciona anotações extras aos commits.  
**git submodule** — Gerencia repositórios Git dentro de outro repositório.  
**git subtree** — Inclui outro repositório como uma subpasta versionada.  
**git help <comando>** - Abre a documentação oficial do comando

