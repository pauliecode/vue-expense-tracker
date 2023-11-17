<template>
    <h4>Your Balance</h4>
    <h1 id="balance">$ {{ totalProp }}</h1>
</template>

<script setup>

const props = defineProps({
    totalProp: {
        required: true,
        type: Number
    }
})

</script>