import React from 'react';
import Header from '../components/Header.js'
import About from '../components/About.js'
import WriteDay from '../components/WriterDay'
import AboutDevelopers from '../components/AboutDevelopers'
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

export default function Home() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <About />
            <WriteDay
                name="Яку́б Ко́лас"
                date="3 ноября 1882 г. – 13 августа 1956 г."
                description="Яку́б Ко́лас — белорусский советский писатель, драматург, 
                            поэт и переводчик, общественный деятель. Один из классиков и основоположников 
                            новой белорусской литературы. Народный поэт Белорусской ССР. 
                            Академик АН Белорусской ССР. Член СП СССР. Заслуженный деятель 
                            науки Белорусской ССР. Член ВКП с 1945 года."/>
            <AboutDevelopers />
        </div>
    );
}