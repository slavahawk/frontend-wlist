<template>
  <Dialog v-model:visible="isVisible" modal header="Оплата">
    <form
      v-if="plan"
      class="payform-tbank"
      name="payform-tbank"
      id="payform-tbank"
    >
      <input
        class="payform-tbank-row"
        type="hidden"
        name="terminalkey"
        value="1733828948168DEMO"
      />
      <input
        class="payform-tbank-row"
        type="hidden"
        name="frame"
        value="false"
      />
      <input
        class="payform-tbank-row"
        type="hidden"
        name="language"
        value="ru"
      />
      <input class="payform-tbank-row" type="hidden" name="receipt" value="" />
      <input
        class="payform-tbank-row"
        type="hidden"
        placeholder="Сумма заказа"
        name="amount"
        :value="plan.amount"
        required
      />
      <input
        class="payform-tbank-row"
        type="hidden"
        placeholder="Номер заказа"
        name="order"
      />
      <input
        class="payform-tbank-row"
        type="text"
        placeholder="Описание заказа"
        name="description"
        hidden
      />
      <input
        class="payform-tbank-row"
        type="text"
        placeholder="ФИО плательщика"
        name="name"
      />
      <input
        class="payform-tbank-row"
        type="email"
        placeholder="E-mail"
        name="email"
      />
      <input
        class="payform-tbank-row"
        type="tel"
        placeholder="Контактный телефон"
        name="phone"
      />
      <input
        class="payform-tbank-row payform-tbank-btn"
        type="submit"
        value="Оплатить"
        @click.prevent="payClick"
      />
    </form>
  </Dialog>
</template>

<script setup lang="ts">
import type { Plan } from "~/types/pay";

const props = defineProps<{
  show: boolean;
  plan: Plan | null;
}>();

const emit = defineEmits<{
  (e: "update:show", bol: boolean): void;
}>();

const isVisible = computed({
  get() {
    return props.show;
  },
  set(value) {
    emit("update:show", value);
  },
});

const payClick = () => {
  const TPF = document.getElementById("payform-tbank");

  const { email, phone, receipt } = TPF;

  if (receipt) {
    if (!email.value && !phone.value)
      return alert("Поле E-mail или Phone не должно быть пустым");

    console.log(TPF);

    TPF.receipt.value = JSON.stringify({
      EmailCompany: "mail@mail.com",
      Taxation: "patent",
      FfdVersion: "1.2",
      Items: [
        {
          Name: props.plan?.title,
          Price: Math.round(props.plan.amount * 100),
          Quantity: 1.0,
          Amount: Math.round(props.plan.amount * 100),
          PaymentMethod: "full_prepayment",
          PaymentObject: "service",
          Tax: "none",
          MeasurementUnit: "pc",
        },
      ],
    });
  }
  pay(TPF);
};
</script>

<style scoped>
.payform-tbank {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2px auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 250px;
}
.payform-tbank-row {
  margin: 2px;
  border-radius: 4px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border: 1px solid #dfe3f3;
  padding: 15px;
  outline: none;
  background-color: #dfe3f3;
  font-size: 15px;
}
.payform-tbank-row:focus {
  background-color: #ffffff;
  border: 1px solid #616871;
  border-radius: 4px;
}
.payform-tbank-btn {
  background-color: #fbc520;
  border: 1px solid #fbc520;
  color: #3c2c0b;
}
.payform-tbank-btn:hover {
  background-color: #fab619;
  border: 1px solid #fab619;
}
</style>
