import { useTranslation } from 'react-i18next'

import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"
import Kolas from "./pages/Kolas"
import Ryhor from "./pages/Ryhor"
import Dunin from "./pages/Dunin"
import Zuenok from "./pages/Zuenok"
import WriterPage from '../src/components/WriterPage'

// Купала
import imageWriterKupale from '../src/img/Kupale.jpg'
import imageBook1 from '../src/img/Kupale_1.jpg'
import imageBook2 from '../src/img/Kupale_2.jpg'



export default function App() {

    const { t } = useTranslation();

    return (
        <div className="App">
            <Suspense fallback={null}>
                <Route exact path="/" component={Home} />
                <Route exact path="/List" component={List} />
                <Route exact path="/Kolas" component={Kolas} />
                <Route exact path="/Kupale" component={() =>
                    <WriterPage
                        name={t("Kupale.name")}
                        urlMainImage={imageWriterKupale}
                        urlImageBook1={imageBook1}
                        urlImageBook2={imageBook2}
                        description={t("Kupale.description")}
                        lifeTime={t("Kupale.life-time")}
                        date1={t("Kupale.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Kupale.date1-description")}
                        date2={t("Kupale.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Kupale.date2-description")}
                        date3={t("Kupale.date3")}
                        death={t("t.death")}
                        descriptionDate3={t("Kupale.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/JHgphHjmc-Q"
                        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18712.1362099627!2d27.174959338884157!3d54.10890157932545!2m3!1f0!2f0!3f0!3m
                    2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e0!3m2!1sru!2sby!4v1620054277576!5m2!1sru!2sby"
                    />
                } />
                <Route exact path="/Ryhor" component={Ryhor} />
                <Route exact path="/Dunin" component={Dunin} />
                <Route exact path="/Zuenok" component={Zuenok} />
            </Suspense>
        </div>
    );
}