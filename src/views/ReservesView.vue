<template>
  <PrincipalTitle text="Página de Reservas" />
  <StepSubTitle step="Passo 1: " subTitle="Insira seus dados" size="24px" />
  <div class="wrapperInputData">
    <GenericInput v-for="input in inputsData" :key="input.type" :type="input.type" :placeholder="input.placeholder" />
  </div>
  <div class="wrapperInputReserve">
    <div v-for="input in inputsReserve" :key="input.type">
      <label v-bind:for="input.id">
        {{ input.label }}
      </label>
      <GenericInput :type="input.type" :id="input.id" />
    </div>
  </div>
  <StepSubTitle step="Passo 2: " subTitle="Escolha seu quarto" size="24px" />
  <div v-for="room in boxRooms" class="room-box">
    <BoxRoomDescription :image="room.image" :title="room.title" :description="room.description" :value="room.value" />
  </div>
  <GenericButton class="botao-vazado" text="Confirmar" />
</template>

<script>
import PrincipalTitle from '@/components/atoms/PrincipalTitle.vue';
import GenericInput from '@/components/atoms/GenericInput.vue';
import GenericButton from '@/components/atoms/GenericButton.vue';
import StepSubTitle from '@/components/organisms/StepSubTitle.vue';
import BoxRoomDescription from '@/components/organisms/BoxRoomDescription.vue';


export default {
  name: 'ReservesView',
  components: {
    PrincipalTitle,
    GenericInput,
    GenericButton,
    StepSubTitle,
    BoxRoomDescription
  },
  data() {
    return {
      inputsData: [
        {
          type: "text",
          placeholder: "Digite seu nome"
        },
        {
          type: "number",
          placeholder: "1"
        },
        {
          type: "password",
          placeholder: "Digite sua senha"
        }

      ],
      inputsReserve: [
        {
          id: "1",
          type: "date",
          label: "Data de checkin"
        },
        {
          id: "2",
          type: "date",
          label: "Data de checkout"
        },
        {
          id: "3",
          type: "number",
          label: "Número de adultos"
        },
        {
          id: "4",
          type: "number",
          label: "Número de crianças"
        }

      ],
      boxRooms: [
        {
          image: "https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg",
          title: "COALA",
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          value: "150,00"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLWy7WPxUezxRDww85wVzeLbUxbF5f101qKdB6KnPCOs9YXLZHsxqqh32qWew_fVLf4s&usqp=CAU",
          title: "COALA",
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          value: "150,00"
        },
        {
          image: "https://img.freepik.com/premium-vector/koala-sitting-out-from-box-cute-creative-kawaii-cartoon-mascot-logo_152710-935.jpg?w=2000",
          title: "COALA",
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          value: "150,00"
        }
      ]
    };
  }

};
</script>

<style scoped>
.wrapperInputData {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
}

.wrapperInputData input {
  margin: 10px 0;
}

.wrapperInputReserve {
  display: flex;
  margin: 20px 0px;
  justify-content: center;
}

.wrapperInputReserve div {
  width: 25%;
  text-align: left;
  margin: 0 10px;
}

label {
  margin-left: 10px;
  font-weight: bold;
}

.green-button {
  width: 100%;
}

.botao-vazado {
  border: 2px solid var(--green-dark);
  color: var(--green-dark);
  background-color: white;
}

.botao-vazado:hover {
  color: white;
}

.room-box>div {
  margin: 20px 0;
}
</style>
