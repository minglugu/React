How do you use Git version control to develop a project in a team?
Steps:
1. git clone GitLab-link-HTTP-or-SSH        // clone GitLab link either HTTP or SSH
2. cd name-of-project-folder                // change directory to the project folder
3. git checkout -b react-router-v5.2-hook-form-yourName   // 建立自己的分支
4. npm i                                    // install the node module
5. git branch                               // 确认是否在自己的分支上，而不是在原来的分支上
6. git checkout -b react-router-v5.2-hook-form-yourName-version2    // 在已经建好的的分支上，建立自己的分支以后，
                                                                    // 才能开始写自己的那部分code。
                                                                    // branch name的命名法：项目的名字-开发人员的名字-版本号-日期
7. npm start                                // to check if the project can run

注意事项：每次写代码前，输入git branch，来查看，是否在自己的分支上。不要打开项目的IDE，就开始编辑代码。

如果不在正确的分支上，怎么fix?
git branch --all                // 查看目前目录里面，所有的分支。如果分支很多，那么按 enter 键，查看到正确的分支名称，
                                // 并复制最后一个"\"后面的名字(是项目名)。    
git checkout original-project-name      //  进入最初git clone的项目的分支
git checkout -b project-name-yourName-versionName   // 建立自己的分支，分支名字命名法：项目名称-developerName-version
然后follow 上面的 step 4 - step 7

git stash           // 表示不保存变化

React hook form 扩展信息：
URL：https://react-hook-form.com/advanced-usage/

小知识点：Yup is a JavaScript schema builder for value parsing and validation