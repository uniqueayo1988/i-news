import { bus } from '../main'
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar
  },
  props: {
    blogs: Array
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        return blog.source.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    changeGrid () {
      bus.$emit('changedGrid', 'AllNews')
    },
    changeList () {
      bus.$emit('changedList', 'GridView')
    }
  }
}
