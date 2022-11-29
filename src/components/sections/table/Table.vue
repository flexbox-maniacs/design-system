<script setup lang="ts">
import { Icon } from "../../..";

interface TableProps {
  products: Array<any>;
}

defineProps<TableProps>();
</script>

<template>
  <table class="table">
    <thead class="table-header">
      <tr>
        <th></th>
        <th>Product</th>
        <th>Units</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr v-for="product in products" class="table-item">
        <td>
          <img :src="product.image" />
        </td>
        <td v-text="product.name" />
        <td>
          <span class="units">
            <Icon name="remove" @click="$emit('unitRemoved')" />
            {{ product.units }}
            <Icon name="add" @click="$emit('unitAdded')" />
          </span>
        </td>
        <td>R$ {{ product.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.table {
  width: 100%;

  .table-item:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  img {
    max-width: 100px;
  }

  .units {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.75rem;

    .icon {
      font-size: 1em;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
