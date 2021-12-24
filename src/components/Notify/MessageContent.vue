<script lang="ts">
  import { useMessage } from 'naive-ui';

  export default defineComponent({
    setup() {
      window.$message = useMessage();
    },
  });
</script>
