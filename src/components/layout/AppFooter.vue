<script setup>
import FooterLogo from '@/assets/img/FooterLogo.vue';
</script>

<template>
    <footer class="footer">
        <div class="footer__logo logo-footer">
            <div class="logo-footer__img">
                <footer-logo />
            </div>
            <div class="block-footer__txt">Web and machine learning<br> developing company</div>
        </div>
        <div class="footer__block block-footer">
            <div class="block-footer__row row">
                <a href="tel:+74996794579" class="row__item">+7 499 679 45 79</a>
                <a href="#" class="row__item">hello@cyberia.ru</a>
                <a href="#" class="row__item">Аносова 3Б, оф. 1</a>
            </div>
            <div class="block-footer__row row">
                <a href="#" class="row__item">Главная</a>
                <a href="#" class="row__item">Услуги</a>
                <a href="#" class="row__item">Проекты</a>
            </div>
            <div class="block-footer__row row">
                <a href="#" class="row__item">Блог</a>
                <a href="#" class="row__item">О нас</a>
                <a href="#" class="row__item">Команда</a>
            </div>
        </div>
        <div class="footer__docs docs-footer">
            <div class="docs-footer__elem">2022, digital-агентство Cyberia</div>
            <a href="#" class="docs-footer__elem">Положение о защите персональных данных</a>
            <a href="#" class="docs-footer__elem">Политика в отношении обработки
                и защиты персональных данных</a>
            <a href="#" class="docs-footer__elem">Оферта оказания услуг</a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    align-items: center;
    color: var(--main-color);
    height: 400px;
    gap: 120px;
    font-family: 'Open Sans';
    font-size: 18px;

    &__block {
        display: flex;
        justify-content: space-between;
    }

    &__docs {
        display: flex;
        flex-direction: column;
    }
}

.logo-footer {
    &__img {
        margin-bottom: 10px;
    }
}

.row {
    display: flex;
    flex-direction: column;

    &__item {
        color: var(--main-color);
        transition: .3s ease-in;
    }

    &__item:not(:last-child) {
        margin-bottom: 20px;
    }

    &__item:hover {
        color: var(--color-primary);
    }
}

.docs-footer {
    &__elem {
        color: var(--main-color);
        transition: .3s ease-in;
    }

    &__elem:not(:last-child) {
        margin-bottom: 2px;
    }

    &__elem:hover {
        color: var(--color-primary);
    }
}
</style>