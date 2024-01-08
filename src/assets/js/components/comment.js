
const initComment = ()=> {
    if(commentinfo.type == "artalk" && document.getElementById('comments') != null){
        const artalk = Artalk.init({
            el:        commentinfo.el,      // 绑定元素的 Selector
            server:    commentinfo.server,  // 后端地址
            site:      commentinfo.name,    // 你的站点名
        });
        // artalk.on('list-loaded', (e) => {
        //     artalk.setDarkMode(localStorage.getItem('pref') == 'dark' ? true:false);
        // })
    }
}

export { initComment }