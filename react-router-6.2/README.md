# 创建完项目react-router-6.2以后，
在package.json文件里，添加相应的dependencies，然后在terminal里面输入 npm i: The npm i (or npm install) is used to install all dependencies or devDependencies from a package.json file.
npm start


多页面的react的项目。
多页面之间的redirect routes的应用场景。用户点击一首歌，需要传歌曲的id。
专门做一个player页面。可以将id传给该页面。写法如下。
        <Route path='/page3/:id' element={<Page3/>}/>
