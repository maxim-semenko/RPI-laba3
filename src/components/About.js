import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'
import "../../src/i18n"



export default function About(){

    const { t } = useTranslation();

        return (
            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">{t("header.poets")}</h1>
                    <p class="lead text-muted">{t("header.about")}</p>
                </div>
            </section>
        );
}