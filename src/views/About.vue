<template>
<div class="about">
    <div class="about-content">
        <img src="@/assets/contact-icon.png" class="about-content-pic" alt="Contact Picture">
        <span class="about-content-title">ABOUT</span>
        <span class="about-content-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris nisl, luctus at dictum eget, sollicitudin quis mi. Ut metus mi, iaculis id ligula ut, aliquam pretium dui. Fusce sed bibendum nulla.</span>
    </div>
</div>
</template>



<style lang="scss" scoped>
    .about {
        &-content {
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
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
                text-align: justify;
            }

        }
    }

    @media screen and (min-width: $mobileLandScape) {
        .about {
            &-content {
                position: relative;
                top: auto;
                transform: none;
            }
        }
    }

@media screen and (min-width: $tabletPortrait) {
    .about {
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
    .about {
        &-content {
            width: 780px;
            height: 480px;
            padding: 0;
            &-paragraph {
                font-size :17px;
                line-height: 22px;
                width: 400px;
            }
        }
    }
}
</style>
