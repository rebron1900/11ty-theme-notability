
const initComment = (commentinfo)=> {
    if(commentinfo.type == "artalk" && document.getElementById('comments') != null){
        const artalk = window.Artalk.init({
            el:        commentinfo.el,      // 绑定元素的 Selector
            server:    commentinfo.server,  // 后端地址
            site:      commentinfo.name,    // 你的站点名
        });
        artalk.on('list-loaded', () => {
            artalk.setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? true:false);
        })
    }
}

export { initComment }