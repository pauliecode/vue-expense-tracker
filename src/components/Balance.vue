<template>
    <h4>Your Balance</h4>
    <h1 id="balance">€ {{ totalProp.toFixed(2) }}</h1>
</template>

<script setup>

const props = defineProps({
    totalProp: {
        required: true,
        type: Number
    }
})

</script>