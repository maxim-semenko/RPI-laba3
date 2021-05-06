import React, { Component } from 'react'
import imageWriterDay from '../img/Kolas.jpg' // relative path to image 
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

export default function WriterDay()  {
    const { t } = useTranslation();
        return (
            <div class="container">
                <h1 class="jumbotron-heading">{t("writerByDay.name")}</h1>
                <p class="lead text-muted">{t("writerByDay.about")}</p>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageWriterDay} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Kolas.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Kolas.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong> {t("Kolas.description")}
                        </p>
                        <a><Link to="/Kolas"><button type="button" class="btn btn-outline-secondary"> {t("home.more")}</button></Link></a>
                    </div>
                </div>
            </div>
        );
    
}