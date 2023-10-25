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

<style lang="scss" scoped src="@/assets/style/ComponentStyle/AppFooter.scss"/>