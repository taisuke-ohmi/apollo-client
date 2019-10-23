<template>
  <table>
    <tr>
      <th>ID</th>
      <th>売り手名</th>
      <th>請求書ID</th>
    </tr>
    <tr>
      <td>{{ billing.id }}</td>
      <td>{{ billing.senderName }}</td>
      <td>{{ billing.invoiceID }}</td>
    </tr>
  </table>
</template>

<script>
  import billing from '~/apollo/queries/billing.gql'

  export default {
    data() {
      return {
        billing: {}
      }
    },

    apollo: {
      billing: {
        query: billing
      }
    }
  }
</script>
