<template>
    <h3>Transaction List</h3>
    <ul v-show="selectedTransaction" id="list" class="list">
        <li v-show="isHidden" v-for="transaction in transactionsProp.slice(-5).reverse()"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }}<span>€{{ transaction.amount }}</span>
            <button @click="prepareDeleteTransaction(transaction.id)" class="delete-btn">x</button>
        </li>
        <li v-show="!isHidden" v-for="transaction in transactionsProp.slice().reverse()" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>€{{ transaction.amount }}</span>
            <button @click="prepareDeleteTransaction(transaction.id)" class="delete-btn">x</button>
        </li>
        <button v-show="transactionsProp.length > 5" @click="isHidden = !isHidden; showAllButton()" class="btn-show-more">{{
            showAllText
        }}</button>
    </ul>
    <p v-show="transactionsProp[0] === undefined"> No items found! <br> Please add them using the form below </p>
    <DialogsWrapper />
    <button v-show="transactionsProp.length >= 1" @click="prepareDeleteAllTransactions()" class="btn-delete-all">Delete
        All</button>
</template>

<script setup>
import { DialogsWrapper } from 'vuejs-confirm-dialog';
import { reactive, ref } from 'vue';
import useConfirmBeforeAction from './useConfirmBeforeAction'

const selectedTransaction = reactive({}) // Declaring reactive state (Reactive is for objects, ref is for non-objects)
const isHidden = ref(true)
const showAllText = ref('Show All')

const props = defineProps({ // Here we pass in the name of the props as passed in the component declaration and we use that in the code of the component, not the name of the variable
    transactionsProp: {
        type: Array,
        required: true,
    }
});

const showAllButton = () => {
    if (isHidden.value === false) {
        showAllText.value = 'Show Less'
    }
    else {
        showAllText.value = 'Show All'
    }
}

const prepareDeleteTransaction = (id) => {
    useConfirmBeforeAction(
        () => {
            emit('transactionDeleted', id)
        },
        { question: `Are you sure you want to delete this transaction?` }
    )
}

const prepareDeleteAllTransactions = () => {
    useConfirmBeforeAction(
        () => {
            emit('allTransactionsDeleted')
        },
        { question: ` Are you sure you want to delete all transactions?` }
    )
    isHidden = isHIdden
}



const emit = defineEmits(['transactionDeleted', 'confirm', 'cancel', 'allTransactionsDeleted'])




</script>
