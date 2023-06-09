<template>
    <!-- 测试页面关闭时保存数据 -->
    <div></div>
</template>
<script setup>
onMounted(() => {
    // window.addEventListener('beforeunload', (e) => handleClose(e))
    // window.addEventListener('unload', (e) => updateHandle(e))

    window.onbeforeunload = handleClose;
    // window.onunload = updateHandle;
    // fetch('http://localhost:5000/getUpdateData',
    //   {
    //     method: 'get',
    //   }).then(response => response.json())
    //   .then(data => console.log(data))
})
onUnmounted(() => {
    window.onbeforeunload = null;
    // window.onunload = null;
})

const handleClose = (e) => {
    // _before_upload_time.value = new Date().getTime();
    // 刷新时会触发 
    e = e || window.event;
    // navigator.sendBeacon('http://localhost:5000/updateData', { count: count.value })

    // fetch('http://localhost:5000/updateData', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
    //     count: 123,
    //   },
    //   keepalive: true
    // }).then(response => response.json())
    //   .then(data => console.log(data))

    // 异常关闭时也能保存
    e.returnValue = '离开页面'
    localStorage.setItem('123', "{id:123}")
    // return 非false的值会导致无法监听页面关闭
    // return '关闭提示';
}
</script>
<style scoped></style>