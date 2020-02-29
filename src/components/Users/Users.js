import {mapGetters} from "vuex";

export default {
    name: 'users',
    components: {},
    props: [],
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['getUsers'])
    },
    mounted() {

    },
    methods: {},
    created() {
        this.$store.dispatch("setUsers")
    }
}


