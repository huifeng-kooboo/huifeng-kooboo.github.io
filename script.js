document.addEventListener('click', function() {
    // 显示文字
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'block';

    // 显示遮罩层
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show');

    // 5秒钟后隐藏遮罩层并恢复页面亮度
    setTimeout(() => {
        overlay.classList.remove('show');
        // 这里可以加一个渐变恢复的动画，也可以直接操作背景
        messageElement.style.display = 'none'; // 隐藏文字
    }, 5000); // 5秒后恢复
});
