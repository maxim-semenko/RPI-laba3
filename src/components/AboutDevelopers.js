import React, { Component } from 'react'
import imageMaxim from '../img/Maxim.jpg' // relative path to image 
import imageAndrey from '../img/Andrey.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

export default function AboutDevelopers() {

    const { t } = useTranslation();
        return (
            <section class="jumbotron text-center" id="aboutDevelopers">
                <div class="container">
                    <hr></hr>
                    <h1 class="jumbotron-heading">{t("developers.team")}</h1>
                    <p class="lead text-muted">{t("developers.about")}</p>
                    <div class="row">
                        <div class="col-sm">
                            <h2>{t("developers.max")}</h2>
                            <img src={imageMaxim} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                            <a href="https://github.com/pro100-Max"><h5>Github: https://github.com/pro100-Max</h5></a>
                        </div>
                        <div class="col-sm">
                            <h2>{t("developers.andrei")}</h2>
                            <img src={imageAndrey} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                            <a href="https://github.com/pro100-Max"><h5>Github: https://github.com/Soler-03</h5></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    
}