This is day 02 of full stack development course

git push ==> push the changes into the remote repo

git commit ==> used to commit the changes into local repo from the staging area(-m to add info for new commit)

git add . ==> moves the changed files into the staging area

git status ==> checkk the status of the working repo

git branch branch name ==> used to create a new branch

git switch branchname ==> used switch between th branches

git branch -a ==> shows all branches associated for a folder

to check the in the branch ==> ls (detailed -- ls -la)

git difftool main GitNewBranch ==> p4 merge will diplay the differences visually

git merge gitnewbranch ==> merges the newbranch into the main branch

git branch -d branchname ==> used to delete the branch

((((
The command:

git log --oneline --graph --decorate

combines multiple options to show commit history in a cleaner and more visual way.

1. git log

Shows the commit history of your repository.

Example:

commit a1b2c3d...
Author: Nithin
Date: ...

Added branch file 2. --oneline

Shows each commit in one line.

Instead of:

commit a1b2c3d12345...
Author: Nithin
Date: Tue May 27

Added README

You get:

a1b2c3d Added README
Short commit hash
Commit message 3. --graph

Draws an ASCII graph showing branch and merge structure.

Example:

- 9f8e7d Merge branch 'GitNewBranch'
  |\
  | \* a1b2c3 Added notes
  |/
- d4e5f6 Initial commit

Meaning:

- → Commit
  | → Branch path continues
  \ or / → Merge/branch split

Useful to visualize branching and merging.

4. --decorate

Shows branch names, HEAD, and tags.

Example:

a1b2c3d (HEAD -> main, origin/main) Added README

Meaning:

HEAD → Current checked-out commit
main → Current local branch
origin/main → Remote branch on GitHub

Example full output:

- 7c9f1d2 (HEAD -> main, origin/main) Merge GitNewBranch
- a1b2c3d Added branch file
- e4f5g6h Initial commit

Interpretation:

- → Commit node
  HEAD -> main → You are currently on main
  origin/main → Remote GitHub branch
  Merge GitNewBranch → Merge commit
  Added branch file → Commit message ))))
