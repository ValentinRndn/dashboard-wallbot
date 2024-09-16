<template>
<div class="server-container fixed top-0 left-0 bg-dark-blue2 min-h-[100vh] overflow-hidden p-4 z-50 flex flex-col items-center gap-3 border-r border-r-slate-800">
    <router-link to=''>
    <div class="server w-14 h-14 rounded-full bg-slate-400">
    </div>
</router-link>
<router-link to=''>
    <div class="server w-14 h-14 rounded-full bg-slate-400">
    </div>
</router-link>
<router-link to=''>
    <div class="server w-14 h-14 rounded-full bg-slate-400">
    </div>
</router-link>
</div>
    
</template>


<script>
export default {
    name: 'serverBar',
}

</script>