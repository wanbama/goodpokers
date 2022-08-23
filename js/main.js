(function() {
    const $elModule = document.querySelector('#moduleArea');
    const $elModuleMask = document.querySelector('#moduleMask');
    setTimeout(() => {
            $elModule.classList.add('transition')
        }, 50)
        //點擊開啟視窗
    document.querySelectorAll('.openModule').forEach((item) => {
        item.addEventListener('click', () => {
            $elModule.classList.add('show');
        })
    });
    //點擊mask關閉視窗
    $elModuleMask.addEventListener('click', () => {
        $elModule.classList.remove('show');
    })
})();