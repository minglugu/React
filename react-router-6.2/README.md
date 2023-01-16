# 创建完项目react-router-6.2以后，
在package.json文件里，添加相应的dependencies，然后在terminal里面输入 npm i: The npm i (or npm install) is used to install all dependencies or devDependencies from a package.json file.
npm start


多页面的react的项目。
多页面之间的redirect routes的应用场景。用户点击一首歌，需要传歌曲的id。
专门做一个player页面。可以将id传给该页面。写法如下。
        <Route path='/page3/:id' element={<Page3/>}/>


git add .
git commit -m"added router features"
git push 后会出现类似这样的提示：git push --set-upstream origin nameInitials-router-2022-02-28
复制提示以后，在push，就push到了GitLab上了。

开始做master 或 main的新的feature：
git checkout master
git pull 
git fetch                       // 更新local的分支库
git branch --all                //找到自己的分支名
输入q，就quit，进入项目文件夹下，进入自己的分支下work
git checkout lu-router-2023-01-01（自己的分支名）

布置一下作业：@ 1:46:30
music player: 优化播放器，用Router写2个页面，第一个页面是songlist。render出来后，点击list里面的一个音乐，就会跳到新页面。
每个list有个红心，可以加入收藏夹。老师的样本页面中，ADD TO CART 可以改成 ADD TO FAVORITE

MAIN PAGE: SONG LIST
Player: 点击音乐后，跳出单独的音乐播放页面
favorite：音乐收藏夹，可以用redux做。

可以参照Amazon的页面




