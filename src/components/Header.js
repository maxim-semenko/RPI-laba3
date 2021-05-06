import React from 'react'
import { Link } from 'react-router-dom'
import i18n from '../../src/i18n';
import { useTranslation } from 'react-i18next'

export default function Header() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const { t } = useTranslation();

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h3>Поэты Беларуси</h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link"><Link to="/" class="nav-link">Главная</Link></a></li>
                    <li class="nav-item"><a class="nav-link"><Link to="/List" class="nav-link">Список деятелей</Link></a></li>
                    <li class="nav-item"><a class="nav-link" onClick={() => changeLanguage('ru')}><Link class="nav-link">{t("home.lng-ru")}</Link></a></li>
                    <li class="nav-item"><a class="nav-link" onClick={() => changeLanguage('en')}><Link class="nav-link">{t("home.lng-en")}</Link></a></li>
                </ul>
            </div>
        </nav>
    );

}