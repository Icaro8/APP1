Vue.component('capa',{
    data(){return{
        capinhas:[
            {celular: 'J7 Prime', quantidade: 5, valor: 20},
            {celular: 'LG gran Prime', quantidade: 4, valor: 20},
            {celular: 'Motorola moto G', quantidade: 2, valor: 15},
            {celular: 'Samsung Note', quantidade: 4, valor:15},
            {celular: 'iPhone 7', quantidade: 2, valor: 25},
            {celular: 'iPhone 8', quantidade: 6, valor: 30},
            {celular: 'Motorola Motog G10',quantidade: 0, valor:15},
        ]
    }},
    methods:{

        
    },
    template: `
        <div>
            <h2>Capinhas</h2>
            <div class="flex-cards">
                <ul v-for="capinha in capinhas">
                    <div v-if="capinha.quantidade"class="card-pelicula">
                        <li>
                            <h3>{{ capinha.celular }}</h3>
                            <p>R$: {{ capinha.valor }}</p>
                            <hr>
                            <p>Quantidade :{{ capinha.quantidade}}</p>
                            <p>Adicionar/Remover Produto</p>
                            <button @click="capinha.quantidade += 1">+</button><button @click="capinha.quantidade -= 1">-</button>
                        </li>
                    </div>
                    <div v-else class="card-pelicula">
                        <li>
                            <h3>Produto fora do estoque</h3>
                            <p>{{ capinha.celular }}</p>
                            <hr>
                            <p>Adicionar</p>
                            <button @click="capinha.quantidade += 1">+</button>
                        </li>
                        </div>
                </ul>
            </div>
            </ul>
        </div>
    `
});
Vue.component('pelicula',{
    data(){
        return{
            peliculas:[
                {celular: 'iPhone 7', valor: 20, quantidade: 1},
                {celular: 'Gran Prime', valor: 25, quantidade: 5},
                {celular: 'Motorola moto G20', valor: 30, quantidade: 5},
                {celular: 'iPhone X,', valor: 40, quantidade: 2},
                {celular: 'Samsung s9 ', valor: 30, quantidade: 3},
                {celular: 'LG L8', valor: 25, quantidade: 3}
            ]
        }
    },template:`
        <div >
            <h2>Peliculas</h2>
            <div class="flex-cards">
                <ul v-for="pelicula in peliculas">
                    <div v-if="pelicula.quantidade" class="card-pelicula">
                        <li>
                            <h3>{{ pelicula.celular }}</h3>
                            <p>R$: {{ pelicula.valor }}</p>
                            <hr>
                            <p>Quantidade :{{ pelicula.quantidade}}</p>
                            <p>Adicionar/Remover Produto</p>
                            <button @click="pelicula.quantidade += 1">+</button><button @click="pelicula.quantidade -= 1">-</button>
                        </li>
                    </div>
                    <div v-else class="card-pelicula">
                        <li>
                            <h3>Produto fora do estoque</h3>
                            <hr>
                            <p>{{ pelicula.celular }}</p>
                            <p>Adicionar</p>
                            <button @click="pelicula.quantidade += 1">+</button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    `
});

new Vue({
    el:'#app',
    data:{

    }
});

