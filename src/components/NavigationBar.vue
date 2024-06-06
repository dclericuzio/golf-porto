<script>
import Modal from './Modal.vue'

export default {
    name: 'NavigationBar',

    components: {
        Modal
    },

    data() {
        return {
            showModal: false,
            links: [
                {
                    label: 'Brands',
                    dropdown: true,
                    dropdownContent: [
                        "Adidas","Aerotech","Asher","Bettinardi","Bogey Boys","Callaway","Cleveland","Cobra","Epon","Fujikura","G/Fore","Honma","J.Lindeberg","KBS","Malbon","Maruman","Mitsubishi","Miura","Mizuno","Nike","NS Pro","Odyssey","Ping","Pins & Aces","Project X","Puma","PXG","Random Golf Club","Scotty Cameron","Srixon","Taylormade","Titleist","Tour Ad","Vessel","XXIO","Yamaha"
                    ]
                },
                {
                    label: 'Categories',
                    dropdown: true,
                    dropdownContent: [
                        'Bag','Ball','Clothes','Driver','Full Set','Glove','Grip','Hat','Headcover','Hybrid','Iron','Marker','Putter','Shaft','Shoes','Towel','Wedge','Wood'
                    ]

                },
                {
                    label: 'Consignment',
                    dropdown: true,
                    dropdownContent: [
                        'Start Selling', 'Customer Wishlist', 'Terms & Condition'
                    ]
                },
                {
                    label: 'Contact',
                    dropdown: false
                },
                {
                    label: 'About',
                    dropdown: false
                }
            ],
            dropdownVisible: []
        }
    },

    created() {
        this.dropdownVisible = new Array(this.links.length).fill(false);
    },
    methods: {
        toggleDropdown(index) {
            const currentState = this.dropdownVisible[index];
            this.dropdownVisible = this.dropdownVisible.map(() => false);
            this.dropdownVisible[index] = !currentState;
        }
    }
}
</script>

<template>
  <div class="nav">
    <div class="nav-wrapper golf-container">
        <span class="nav-logo">GOLFCOCO</span>
        <div class="nav-links">
            <ul class="link-list">
                <li v-for="(link, index) in links" :key="link.label">
                    {{ link.label }} 
                    <v-icon v-if="link.dropdown" name="md-keyboardarrowdown" @click="toggleDropdown(index)"/>
                    <div v-if="dropdownVisible[index]" class="dropdown">
                        <span class="dropdown-content" v-for="item in link.dropdownContent" :key="item">{{ item }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav-search" id="show-modal" @click="showModal = true">
            <v-icon name="bi-search" />
        </div>
    </div>
        
    <modal :show="showModal" @close="showModal = false"></modal>

  </div>
</template>

<style lang="scss">
.nav{
    background: #f9f9f9;
    box-shadow: rgba(168, 169, 171, 0.2) 0px 8px 24px;

    .nav-wrapper{
        display: flex;
        padding: 1rem;
        align-items: center;

        .nav-logo{
            font-weight: 700;
            font-size: 20px;
            width: 150px;
        }

        .nav-links{
            margin: 0 auto;

            .link-list {
                display: flex;
                flex-direction: row;
                list-style-type: none;
                padding: 0;
                position: relative;

                li{
                    margin: 0 0.5rem;
                    display: flex;
                    cursor: pointer;
                }

                .dropdown{
                    position: absolute;
                    background: #f9f9f9;
                    border: 1px solid #eeeeee;
                    top: 2rem;
                    padding: 1rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .dropdown-content{
                        margin: 10px;

                    }
                }
            }
        }

        .nav-search{
            display: flex;
            justify-content: center;
            width: 150px;
        }
    }
}
</style>
