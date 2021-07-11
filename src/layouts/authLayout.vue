<template>
    <div class="grey darken-1 empty-layout">
        <router-view />
    </div>
</template>

<script>
import messages from '../utils/messages'

export default {
    computed: {
        // получение ошибки для страницы, если в getters изменяется значение
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        // отслеживание ошибки от firebase (DB)
        error(firebaseError) {
            this.$error(messages[firebaseError.code] || 'Что-то пошло не так')
        }
    }
}
</script>