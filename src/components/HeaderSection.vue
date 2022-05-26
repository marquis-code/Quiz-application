<template>
    <div class="flex justify-center items-center space-x-20 border-b-2 border-gray-600 pb-3">
       <p class="font-mono text-lg font-medium text-gray-700 select-none">Achilis Quiz App</p>
       <p class="font-sans text-sm font-medium text-gray-600 select-none">Counter: [ {{numberOfCorrect}} / {{numberOfTotal}} ]</p>
       <hr />
    </div>
</template>

<script>
export default {
    name : 'HeaderSection',
    props : {
        numberOfCorrect : Number,
        numberOfTotal : Number
    }
}
</script>