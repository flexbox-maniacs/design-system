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
@import "./Table.scss";
</style>
