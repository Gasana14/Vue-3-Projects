<template>
  <Header/>
  <div class="container">
    <Balance :total="+total"/>

    <IncomeExpenses 
    :income="+income" 
    :expense="+expense"
    />
    <TransactionList 
    :transactions="transactions" 
    @transactionDeleted="handleTransactionDeleted"
    />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { computed, ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';

const transactions = ref([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if(savedTransactions){
    transactions.value = savedTransactions;
  }
});

     // Get Total Balance
     const total = computed(() => {
      return transactions.value.reduce((acc,transaction) =>{
        return acc + transaction.amount;
      }, 0).toFixed(2)
      })

      // Get Total Income
     const income = computed(() => {
      return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc,transaction) =>{
        return acc + transaction.amount;
      }, 0).toFixed(2)
      })

       // Get Total Expense
     const expense = computed(() => {
      return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc,transaction) =>{
        return acc + transaction.amount;
      }, 0).toFixed(2)
      })

      // Add Transaction
      const handleTransactionSubmitted = (transactionData) => {
        transactions.value.push({
          id:generateUniqueId(),
          text: transactionData.text,
          amount: transactionData.amount
        })
        saveTransactionsToLocalStorage()
       toast.success('Transaction Added')
      }

      // Generate Unique Id
      function generateUniqueId(){
        return Math.floor(Math.random() * 1000)
      }

      // Delete Transaction by Id
      const handleTransactionDeleted = (id) => {
        transactions.value = transactions.value.filter((transaction) => transaction.id !== id );
        saveTransactionsToLocalStorage()
        toast.success('Transaction deleted');
      }

      // save to local storage
      const saveTransactionsToLocalStorage = () => {
        localStorage.setItem('transactions',JSON.stringify(transactions.value));
      }

</script>