import {mapGetters} from "vuex";

export default {
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getTodos'])
  },
  mounted () {

  },
  methods: {

  },
  created() {
    this.$store.dispatch("setTodos")
  }
}


