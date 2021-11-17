<template>
    <div>
        <input type="button" @click="test" value="确定">
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router/index.ts";

export default {
    methods: {

         test() {
            // router.push("/about");
            axios
            .post("/test")
            .then((res) => {
                console.log(res.data.msg);
            })
            return 1;
        },
    }
}
</script>