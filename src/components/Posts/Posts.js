import {mapGetters} from "vuex";

export default {
    components: {},
    props: [],
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['getPosts'])
    },
    mounted() {

    },
    methods: {},
    created() {
        this.$store.dispatch("setPosts")
    }
}


