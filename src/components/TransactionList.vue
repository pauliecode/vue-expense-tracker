<template>
    <h3>History</h3>
    <ul v-show="selectedTransaction" id="list" class="list">
        <li v-for="transaction in transactionsProp" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>€{{ transaction.amount }}</span>
            <button @click="prepareDeleteTransaction(transaction)" class="delete-btn">x</button>
        </li>
    </ul>
    <p v-show="transactionsProp[0] === undefined"> No items found! <br> Please add them using the form below </p>
    <DialogsWrapper />
</template>

<script setup>
import { DialogsWrapper } from 'vuejs-confirm-dialog';
import ModalDialog from './ModalDialog.vue';
import { createConfirmDialog } from 'vuejs-confirm-dialog';
import { reactive } from 'vue';

const selectedTransaction = reactive({})

// Function that takes in a parameter (In this case transaction from the for loop in the DOM)
// then saves this parameter as the value of a reactive variable to save it as a state
// and reveals the confirmation dialogue
const prepareDeleteTransaction = (transaction) => {
    selectedTransaction.value = transaction
    reveal()
}

const props = defineProps({ // Here we pass in the name of the props as passed in the component declaration and we use that in the code of the component, not the name of the variable
    transactionsProp: {
        type: Array,
        required: true,
    }
});

const { reveal, onConfirm } = createConfirmDialog(ModalDialog,
    {
        question: 'Are you sure you want to delete this transaction?',

    })

const emit = defineEmits(['transactionDeleted', 'confirm', 'cancel'])


const deleteTransaction = (id) => {
    emit('transactionDeleted', id)
}


// This callback function from the dialogue plugin calls the deleteTransaction function
// and uses the state variable selectedTransaction (which after prepareDeleteTransaction)
// has as it's value the selected transaction, and using the id from it, deletes it
onConfirm(() => {
    deleteTransaction(selectedTransaction.value.id)
})


</script>
