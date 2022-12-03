<template>
    <PrincipalTitle text="Página de Reservas"/>
    <div class="wrapperInputData">
        <GenericInput v-for="input in inputsData" :key="input.type" :type="input.type" :placeholder="input.placeholder" />
    </div>
    <div class="wrapperInputReserve">
        <div v-for="input in inputsReserve" :key="input.type">
            <label v-bind:for="input.id">
                {{ input.label }}
            </label>
            <GenericInput :type="input.type" :id="input.id"/>
        </div>
    </div>
    
</template>

<script>
import PrincipalTitle from '@/components/PrincipalTitle.vue';
import GenericInput from '@/components/GenericInput.vue';
export default{
    name: 'ReservesView',
    components:{
        PrincipalTitle,
        GenericInput
    },
    data(){
        return{
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

            ]
        }
    }

}
</script>

<style scoped>
.wrapperInputData{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px auto;
}

.wrapperInputData input{
    margin: 10px 0;
}

.wrapperInputReserve {
    display: flex;
    margin: 20px 0px;
    justify-content: center;
}

.wrapperInputReserve div{
    width: 25%;
    text-align: left;
    margin: 0 10px;
}

label {
    margin-left: 10px;
    font-weight: bold;
}
</style>