<template>
    <form class="card auth-card" @submit.prevent="onSubmit">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input id="email" type="email"
                    v-model.trim="email"
                    :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small class="helper-text invalid"
                    v-if="$v.email.$dirty && !$v.email.required"
                >
                    Это поле необходимо заполнить
                </small>
                <small class="helper-text invalid"
                    v-else-if="$v.email.$dirty && !$v.email.email"
                >
                    Введите  корректный email
                </small>
            </div>
            <div class="input-field">
                <input id="password" type="password"
                    v-model.trim="password"
                    :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >
                    Это поле необходимо заполнить
                </small>
                <small class="helper-text invalid"
                    v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                    Пароль должен быть не короче {{$v.password.$params.minLength.min}} символов. 
                    Сейчас он {{password.length}}
                </small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit">
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/registration">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '../utils/messages'

export default {
    name: 'login',
    data: () => ({
        email: '',
        password: ''
    }),
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)}
    },
    methods: {
        async onSubmit() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            // create object with email and password
            const formData = {
               email: this.email,
               password: this.password 
            }
            // use dispatch from auth.js (store)
            try {
                await this.$store.dispatch('login', formData)
                this.$router.push('/')
            }
            catch(err) {}
        }
    },
    mounted() {
        if (messages[this.$route.query.message]) {
           this.$message(messages[this.$route.query.message])
        }
    }
}
</script>