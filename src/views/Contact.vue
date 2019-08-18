<template>
<div class="contact">
    <div class="contact-content">
        <img src="@/assets/contact-icon.png" class="contact-content-pic" alt="Contact Picture">
        <span class="contact-content-title">CONTACT</span>
        <a href="mailto:divante@divante.pl" class="contact-content-paragraph">divante@divante.pl</a>
        <a href="tel:+48123456789" class="contact-content-paragraph">123-456-789</a>
        <a href="tel:+48887236324" class="contact-content-paragraph">887-236-324</a>
        <span class="contact-content-paragraph">ul. Dmowskeigo 17</span>
        <span class="contact-content-paragraph">00-000 Wrocław</span>
    </div>
</div>
</template>



<style lang="scss" scoped>
    .contact {
        &-content {
            position: absolute;
            top: 55%;
            width: 100%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 20px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
            background: $white;
            &-title {
                font-size: 24px;
                margin: 20px 0;
                color: $dark-text;
                font-weight: 500;
            }
            &-paragraph {
                line-height: 20px;
                color: $light-text;
                text-align: center;
                &:nth-child(3) {
                       margin-bottom: 20px;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                &:nth-child(6) {
                       margin-top: 20px;
                }
            }
            a {
                &:hover {
                    color: $light-blue;
                }
            }

        }
    }

    @media screen and (min-width: $mobileLandScape) {
        .contact{
            &-content {
                position: relative;
                top: auto;
                left: auto;
                transform: none;
            }
        }
    }

@media screen and (min-width: $tabletPortrait) {
    .contact {
        &-content {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 600px;
            padding: 40px;
            transform: translate(-50%,-50%);
            &-paragraph {
                width: 350px;
            }
        }
    }
}

@media screen and (min-width: $desktop) {
    .contact {
        &-content {
            width: 700px;
            padding: 80px 40px;
            &-paragraph {
                font-size :17px;
                line-height: 22px;
                width: 400px;
            }
        }
    }
}
</style>
