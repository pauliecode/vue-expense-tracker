<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactionsProp" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>€{{ transaction.amount }}</span>
            <button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>
        </li>
    </ul>
</template>

<script setup>

const emit = defineEmits(['transactionDeleted'])

const props = defineProps({ // Here we pass in the name of the props as passed in the component declaration and we use that in the code of the component, not the name of the variable
    transactionsProp: {
        type: Array,
        required: true,
    }
});

const deleteTransaction = (id) => {
    emit('transactionDeleted', id)
}

</script>
